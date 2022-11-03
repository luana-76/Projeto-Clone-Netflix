class FunctionNetflix{

    constructor(){

        this.boxSearchEl = document.querySelector("#search");
        this.lupaEl = document.querySelector('#pesqBut');
        this.search = document.querySelector('#pesq');
        this.boxsearch = document.querySelector('#searchBut');
        this.acaoDeClickBotaoPesquisa();
        this.boxSeta = document.querySelector('#listTwo');
        this.seta = document.querySelector('#seta');
        this.rotacaodeSeta();
        this.scroll()
    }


    styleButSeach(background, border, transition, width, margin){

        this.boxsearch.style.background = background;
        this.boxsearch.style.border = border;
        this.search.style.transition = transition;
        this.search.style.width = width;
        this.boxSearchEl.style.margin = margin;

    }

    acaoDeClickBotaoPesquisa(){

        this.lupaEl.addEventListener('click', event=>{

            this.search.focus();
            this.styleButSeach("rgb(20 20 20 / 68%)", "1px solid #fff", "width 0.5s", "200px", "0px 15px 0px 0px");
            
        });

        this.search.addEventListener('blur', event=>{

            if(this.search.value === ""){

                this.styleButSeach("", "none", "width 0.5s", "0px", "0px 0px 0px 0px");

            }

        })

    }

    rotacaodeSeta(){

        this.boxSeta.addEventListener('mouseover', event=>{

            if(this.boxSeta.style.display == false){

                this.seta.style.transform = 'rotate(180deg)';
    
            } 

        })

        this.boxSeta.addEventListener('mouseleave', event=>{

            this.seta.style.transform = 'rotate(0deg)';

        })

    }

    rolacaoScroll(scroll, setaDireita, setaEsquerda, section, setaOne, setaTwo, cont){

        //scroll.scrollIntoView({behavior: "smooth"})
                    setaDireita.addEventListener('click', e=>{
                        
                        if(cont < 3630){
            
                            scroll.scrollTo(cont += 1210, 0);
            
                        }
        
                        if(cont >= 1210){
        
                            setaEsquerda.style.display = 'block'
                            scroll.style.margin = "0 0 0 0"
                            scroll.style.width = '98.6vw'
                            section.addEventListener('mouseover', e=>{
            
                                setaOne.style.display = "block";
                                setaTwo.style.display = "block";
            
                            })
            
                            section.addEventListener('mouseleave', e=>{
            
                                setaOne.style.display = "none";
                                setaTwo.style.display = "none";
            
                            })
                
                        }
                    })
        
                setaEsquerda.addEventListener('click', e=>{
        
                    if(cont != 0){
        
                        scroll.scrollTo(cont -= 1210, 0);
        
                    }
                })

        }
    scroll(){

        this.section = [...document.querySelectorAll('.sectionsMoviesSeries')];
        this.scrollEl = [...document.querySelectorAll('.scroll')];
        this.direita = [...document.querySelectorAll('.setaDireita')];
        this.esquerda = [...document.querySelectorAll('.setaEsquerda')];
        this.setaOne = [...document.querySelectorAll('.direito')];
        this.setaTwo = [...document.querySelectorAll('.esquerda')];
        console.log(this.setaOne)

        if([...document.querySelectorAll('.scroll')][0]){
            let cont = 0
            this.rolacaoScroll(this.scrollEl[0], this.direita[0],this.esquerda[0], this.section[0], this.setaOne[0],this.setaTwo[0], cont)
        }
        if([...document.querySelectorAll('.scroll')][1]){
            let cont = 0
            this.rolacaoScroll(this.scrollEl[1], this.direita[1],this.esquerda[1], this.section[1], this.setaOne[1],this.setaTwo[1], cont)
        }

    

    }

}
new FunctionNetflix()