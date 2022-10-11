class FunctionNetflix{

    constructor(){

        this.lupaEl = document.querySelector('#pesqBut');
        this.search = document.querySelector('#pesq');
        this.boxsearch = document.querySelector('#searchBut');
        this.acaoDeClick();
        this.cont;
        this.boxSeta = document.querySelector('#listTwo');
        this.seta = document.querySelector('#seta');
        this.setaAbrir();
        this.notiEl = document.querySelector("#notificacao");
        //this.beforeDeH2();


    }

    acaoDeClick(){

        this.lupaEl.addEventListener('click', event=>{

            /*this.search.style.display = "inline-block";*/
            
            this.search.focus();
            this.boxsearch.style.background = "rgb(20 20 20 / 68%)";
            this.boxsearch.style.border = "1px solid #fff";
            this.search.style.transition = "width 0.5s";
            this.search.style.width = "200px";
            document.querySelector("#search").style.margin = "0px 15px 0px 0px";
            

        });

        this.search.addEventListener('blur', event=>{

            if(this.search.value == ""){

                this.search.style.width = "0px";
                this.search.style.transition = "width 0.5s";
                /*this.search.style.display = "none";*/
                this.boxsearch.style.background = "";
                this.boxsearch.style.border = "none";
                document.querySelector("#search").style.margin = "0px 0px 0px 0px";


            }

        })

    }

    setaAbrir(){

        this.boxSeta.addEventListener('mouseover', event=>{

            if(this.boxSeta.style.display == false){

                this.seta.style.transform = 'rotate(180deg)';
    
            } 

        })
        this.boxSeta.addEventListener('mouseleave', event=>{

            this.seta.style.transform = 'rotate(0deg)';

        })

    }

    MensagemDeNotificacao(){

        this.notiEl.addEventListener("mouseover", event=>{

            console.log("ok");


        })

    }

    /*beforeDeH2(){

        let h2 = document.querySelector(".sectionsMoviesSeries div h2");
        let contador = 1;
        console.log(h2)
        h2.addEventListener("mouseover", event=>{
            contador--
            if(contador == 0){

                h2.innerHTML += "<spans id='del' style='margin-left: 10px;font-size:0.7em;'>Ver tudo</span><img src='https://img.icons8.com/metro/22/54b9c5/forward.png'/>"

            }

            contador++
            

        })
        h2.addEventListener("mouseleave", event=>{

            let dele = document.querySelector('#del');
            dele.remove()

        })

    }*/

    

}

new FunctionNetflix()