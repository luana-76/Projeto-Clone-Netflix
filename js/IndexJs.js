class FunctionNetflix{

    constructor(){

        this.lupaEl = document.querySelector('#pesqBut');
        this.search = document.querySelector('#pesq');
        this.boxsearch = document.querySelector('#searchBut');
        this.acaoDeClick();
        this.cont;

    }

    acaoDeClick(){

        this.lupaEl.addEventListener('click', event=>{

            this.search.style.display = "inline-block";
            this.search.focus();
            this.boxsearch.style.background = "rgb(20 20 20 / 68%)";
            this.boxsearch.style.border = "1px solid #fff";


        });

        this.search.addEventListener('blur', event=>{

            this.search.style.display = "none";
            this.boxsearch.style.background = "";
            this.boxsearch.style.border = "none";

        })

    }

}

new FunctionNetflix()