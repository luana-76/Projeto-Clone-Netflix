class FunctionNetflix{

    constructor(){

        this.boxSearchEl = document.querySelector("#search");
        this.butBoxSearchEl = document.querySelector('#searchBut');
        this.inputSearchEl = document.querySelector('#pesq');
        this.searchButtonClickAction();

        this.arrowBox = document.querySelector('#listTwo');
        this.arrow = document.querySelector('#arrow');
        this.arrowRotation();

        this.section = [...document.querySelectorAll('main section')];
        this.scrollEl = [...document.querySelectorAll('.scroll')];
        this.direita = [...document.querySelectorAll('.arrowRight')];
        this.esquerda = [...document.querySelectorAll(".arrownLeft")];
        this.firstArrow = [...document.querySelectorAll('.right')];
        this.setaTwo = [...document.querySelectorAll('.left')];
        this.actionScroll();
        this.con=0

    }

    styleButSeach(background, border, transition, width, margin){

        this.boxSearchEl.style.background = background;
        this.boxSearchEl.style.border = border;
        this.inputSearchEl.style.transition = transition;
        this.inputSearchEl.style.width = width;
        this.boxSearchEl.style.margin = margin;

    };

    searchButtonClickAction(){

        this.butBoxSearchEl.addEventListener('click', event=>{

            this.inputSearchEl.focus();
            this.styleButSeach("rgb(20 20 20 / 68%)", "1px solid #fff", "width 0.5s", "200px", "0px 15px 0px 0px");
            
        });

        this.inputSearchEl.addEventListener('blur', event=>{

            if(this.inputSearchEl.value === ""){

                this.styleButSeach("", "none", "width 0.5s", "0px", "0px 0px 0px 0px");

            };

        });

    };
    
    arrowRotation(){

        this.arrowBox.addEventListener('mouseover', event=>{

            if(this.arrowBox.style.display == false){

                this.arrow.style.transform = 'rotate(180deg)';
    
            } 

        })

        this.arrowBox.addEventListener('mouseleave', event=>{

            this.arrow.style.transform = 'rotate(0deg)';

        })

    }

    scroll(scroll, rightArrow, leftArrow, section, firstArrow, setaTwo, cont){

        //scroll.scrollIntoView({behavior: "smooth"})
    
        rightArrow.addEventListener('click', e=>{

            if(cont < 3)this.con++

                scroll.scrollTo(cont += 1210, 0);
                this.createScroll(true, this.con)
                        
                if(cont >= 1210){
                          
                    leftArrow.style.display = 'block'
                    scroll.style.margin = "0 0 0 0"
                    scroll.style.width = '98.6vw'

                    section.addEventListener('mouseover', e=>{
            
                        firstArrow.style.display = "block";
                        setaTwo.style.display = "block";
            
                    })
            
                    section.addEventListener('mouseleave', e=>{
            
                        firstArrow.style.display = "none";
                        setaTwo.style.display = "none";
            
                    })
                
                }

         })
                
        //Voltando scroll
        leftArrow.addEventListener('click', e=>{
                    
            //Ele tá excluindo o da frente, então não vai ter como voltar mais de 3630
            if(cont > 3630) cont = 3630
            this.con--
            scroll.scrollTo(cont -= 1210, 0);
            this.createScroll(false, this.con)
        })

    }

    actionScroll(){

        if([...document.querySelectorAll('.scroll')][0]){
            let cont = 0
            this.scroll(this.scrollEl[0], this.direita[0],this.esquerda[0], this.section[0], this.firstArrow[0],this.setaTwo[0], cont)
        }

        if([...document.querySelectorAll('.scroll')][1]){
            let cont = 0
            this.scroll(this.scrollEl[1], this.direita[1],this.esquerda[1], this.section[1], this.firstArrow[1],this.setaTwo[1], cont)
        }

    

    }

    createScroll(passou, cont){

        let imgs = [...document.querySelectorAll('.imgScroll')]
        let list = [imgs[0], imgs[1], imgs[2], imgs[3]]
        if(passou == true){
            if(cont => 2){
                
                imgs[0].remove()
                imgs[1].remove()
                imgs[2].remove()
                imgs[3].remove()

                document.querySelector('.scroll').appendChild(list[0])
                document.querySelector('.scroll').appendChild(list[1])
                document.querySelector('.scroll').appendChild(list[2])
                document.querySelector('.scroll').appendChild(list[3])
                
            }

        }

        if(passou == false){
                //console.log('certo')
                //this.gambiarra(document.querySelector('.tela'))
                //document.querySelector('.scroll').innerHTML = document.querySelector('.scroll')

        }
 

    }

}
new FunctionNetflix()