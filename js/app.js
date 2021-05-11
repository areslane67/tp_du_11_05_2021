document.addEventListener("DOMContentLoaded",()=>{
    console.log(200);
    let date, pub, article_section, stock_article, btn_article
        date = ({
            myDate : new Date().getFullYear(),
            target : document.querySelector("footer p")
            
        })
        /* bouton pour voir les articles */
        btn_article =document.querySelector(".btn-add")
        date.target.innerText += date.myDate;
        console.log(typeof date)
        /* objet article  titre, date et paragraphe */
        pub = [
            {
                titre: "Reshiram",
                date: `04-05-${date.myDate}`,
                msg: "Reshiram est un grand Pokémon blanc et bipède qui partagent des traits de ressemblance avec les dragons, les aviaires et les mammaliens.",
                image: "./asset/reshiram.png", 
            },
            {
                titre: "mewtwo",
                date: `01-05-${date.myDate}`,
                msg: "Mewtwo est un clone de Mew créé par la Team Rocket, modifié génétiquement pour être plus puissant. Son histoire est semblable à celle de Genesect (créé par la Team Plasma), également modifié dans le même but",
                image: "./asset/tjzasY.png",
                  
            },
            {
                titre: "Noctali",
                date: `02-05-${date.myDate}`,
                msg: "Noctali a des pupilles fendues et un petit museau, ce qui le fait ressembler au chat noir. En règle générale, le chat noir est souvent considéré comme un présage de malchance et de mort, ce qui pourrait être l’inspiration de son type Ténèbres.",
                image: "./asset/03d4a61b237e61cf1966be67bdd0fc69.png",
                 
            }

        ]
        //console.table(pub)
        /* itération */
        article_section = document.querySelector(".article_of");
        stock_article = "";
        for(data of pub){
            console.log(
                `${data.titre} ${data.date} ${data.msg} ${data.image} `
            )
            stock_article += `
                            <figure>
                                <img src="${data.image}" alt="image">
                                <figcaption>
                                    <h2>${data.titre}</h2>
                                    <time datetime="2021-04-10T20:00:00">${data.date}</time>
                                    <p>${data.msg}</p>
                                </figcaption>
                            </figure>`
            }
     
        btn_article.addEventListener("click",function(){
            article_section.innerHTML = stock_article;
            article_section.classList.toggle("article_on");
           this.classList.toggle("btn-remove");
        })




})