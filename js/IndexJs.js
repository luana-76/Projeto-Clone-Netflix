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

            this.search.style.width = "0px";
            this.search.style.transition = "width 0.5s";
            /*this.search.style.display = "none";*/
            this.boxsearch.style.background = "";
            this.boxsearch.style.border = "none";
            document.querySelector("#search").style.margin = "0px 0px 0px 0px";

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

}

new FunctionNetflix()