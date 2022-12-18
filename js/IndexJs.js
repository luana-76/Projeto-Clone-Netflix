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

        this.loading()
        this.headerEl = document.querySelector('header');
        this.mainEl = document.querySelector('main');
        this.loadingEl = document.querySelector('.loadingPage');
        this.sinopse = document.querySelector('#sinopseJs');
        this.title = document.querySelector('#title');

        
        this.playVideo()
        this.configPageChildren();
        this.buttonAudio = document.querySelector('#mute');
        this.boxButtonAudio = document.querySelector('#divMute');
        this.header = document.querySelector('header');
        this.endVideo('url(https://occ-0-933-420.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABWMZa8iWRT8VWOH6tIdbS_gfxSRLwxaMw7QiiBwy-V-q52w2yA5aNeyVqGNrbS2MMXYV8o39ofeoVPFmmNYs7oqwj7yISMASgvQz.webp?r=618)')
        this.cont = 0
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

                //irá fazer o scroll se mover
                scroll.scrollTo(cont += 1210, 0);

                //Criando a rolagem infinita
                this.createScroll(true);
                
                //Estilização de quando clicar a primeira vez no scroll
                if(cont >= 1210){
                          
                    leftArrow.style.display = 'block'
                    scroll.style.margin = "0 0 0 0"
                    scroll.style.width = '98.6vw'

                    section.addEventListener('mouseover', e=>{
            
                        firstArrow.style.display = "block";
                        setaTwo.style.display = "block";
            
                    });
            
                    section.addEventListener('mouseleave', e=>{
            
                        firstArrow.style.display = "none";
                        setaTwo.style.display = "none";
            
                    });
                
                };

         });
                
        //Voltando scroll
        leftArrow.addEventListener('click', e=>{
                    
            //Ele tá excluindo o da frente, então não vai ter como voltar mais de 3630
            if(cont > 3630) cont = 3630;
            scroll.scrollTo(cont -= 1210, 0);

            //Iremos fazer essa funcionalidade ainda
            this.createScroll(false);
        });

    };

    actionScroll(){

        //Chamando a função de rolagem do scroll em cada section

        if([...document.querySelectorAll('.scroll')][0]){
            let cont = 0;
            this.scroll(this.scrollEl[0], this.direita[0],this.esquerda[0], this.section[0], this.firstArrow[0],this.setaTwo[0], cont);
        };

        if([...document.querySelectorAll('.scroll')][1]){
            let cont = 0;
            this.scroll(this.scrollEl[1], this.direita[1],this.esquerda[1], this.section[1], this.firstArrow[1],this.setaTwo[1], cont);
        };

    

    };

    createScroll(passou){

        /*let imgs = [...document.querySelectorAll('.imgScroll')]
        let scroll = document.querySelector('.scroll');
        let list = [imgs[0], imgs[1], imgs[2], imgs[3]]
        if(passou == true){

            imgs[0].remove()
                imgs[1].remove()
                imgs[2].remove()
                imgs[3].remove()

                scroll.appendChild(list[0])
                scroll.appendChild(list[1])
                scroll.appendChild(list[2])
                scroll.appendChild(list[3])*/
            /*if(cont => 2){
                
                imgs[0].remove()
                imgs[1].remove()
                imgs[2].remove()
                imgs[3].remove()

                scroll.appendChild(list[0])
                scroll.appendChild(list[1])
                scroll.appendChild(list[2])
                scroll.appendChild(list[3])
                
            }*/

        //}

        /*if(passou == false){
                //console.log('certo')
                //this.gambiarra(document.querySelector('.tela'))
                //document.querySelector('.scroll').innerHTML = document.querySelector('.scroll')

        }*/
 

    }

    //parte da programação da sinopse da serie/filme

    textSerie(confirmacao){

        if(confirmacao){

            setTimeout(function(){

                document.querySelector('#interSerieMoment p').id = 'sinopse';
                
                
            }, 10000);

            setTimeout(function(){

                document.querySelector('#interSerieMoment p').style.display = 'none'

            }, 10500);

        }else{

            setTimeout(function(){

                document.querySelector('#interSerieMoment p').id = 'sinopseNone';
                
            }, 10000);

            setTimeout(function(){

                document.querySelector('#interSerieMoment p').style.display = 'block'

            }, 10500);

        }
    }


    //parte da programação do video e da pagina infantil

    loading(){

        document.querySelector('#butInfantil button').addEventListener('click', event=>{

            this.headerEl.style.display = 'none';
            this.mainEl.style.display = 'none';
            this.loadingEl.style.display = 'flex';
            document.querySelector('#top').style.display = 'flex';
            //this.sinopse.style.marginTop = '0px';
            
            this.childrenScreen(this.headerEl, this.mainEl, this.loadingEl);
        });

    }


    scrollChange(section,position){

        //Mudando imagem do scroll
        let imgs = section[position].querySelectorAll('img');
    
        imgs[2].src = 'https://occ-0-5308-3851.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZwWKFVz9WAPua38fBEA6OPQ3e0P2EL6JpRN_eGVtiD_OK0w09pvkn0oMuYCp8tnUhhlL8KkHL89P2zS9UTfFnWavAeA9FJu53I.webp?r=e4f';
        imgs[3].src = 'https://occ-0-5308-3851.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYWRKiMBcy3cJpj9ZRwJFrRWyZvFxBQP616tAhtQyEJGfiYeUTXblBll7pkhrmPl4xBvyfi0Hsr3mQgEf8A8LYpDNVWjR5figU4.webp?r=563';
        imgs[4].src = 'https://occ-0-5308-3851.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVBbuigNdVPWAcBc7c4TszdKUDxYyAKsuXaOowHlYze-1Q_F9MjhgLZHjb93bnzLlf4Q5xQ_2VhAHImnkohrvmfCggnvEKmfePQojBp4HMZ5Il2YheXV_JI8jY7gdGwD8GEdSIascWCsQHqdeN9TfXLnwfjnriAMM-t1_5wA1ov6sKoYGpZV9sLzwBP4H-WNGgJWO3eGgKWagspsIJ6kLRHC7TbOY-FTMhtnwZJTy4nr15ETMNNIvBlj1uhzRgCeUHnJ45hdFsPCkLKWLKdkix66C6HyNXG6zIGA9RFso-pTkpvCzeNDC_-f.jpg?r=4ec';
        imgs[5].src = 'https://occ-0-5308-3851.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYWRKiMBcy3cJpj9ZRwJFrRWyZvFxBQP616tAhtQyEJGfiYeUTXblBll7pkhrmPl4xBvyfi0Hsr3mQgEf8A8LYpDNVWjR5figU4.webp?r=563';
        imgs[6].src = 'https://occ-0-5308-3851.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYWRKiMBcy3cJpj9ZRwJFrRWyZvFxBQP616tAhtQyEJGfiYeUTXblBll7pkhrmPl4xBvyfi0Hsr3mQgEf8A8LYpDNVWjR5figU4.webp?r=563';
        imgs[7].src = 'https://occ-0-5308-3851.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXec80zLe0lhrvVnyurJ86a5kFs_3mECmNYe1cpDl8z_XR38rr8XjBe7ZWPTX3mD6BO6c0koOadaRRjvFQS_y7_MwG-Kl3Ts-1wLaDxokLtSxAzMP_Z_CMX4xiYpv-GyGrMVD1FntWXsAcoN9zD8CSnll551v3pUDjE0e6A4wZXAUzBRrZAJlddj9Kwpyps.jpg?r=ac3';
        imgs[8].src = 'https://occ-0-5308-3851.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABd9QXaOv3gPoe6-nbmDB3ftaoZ3IeSOLBuhbBfhbekqsHZxXR1a7ibAtKKmuFQgSNPiLGYSyhUEsWr25qxQ4z0XvwCzWyo2cchMOX9wbfBPT73C39zbFEppQ8OyibjncOwuKaQgXErdaW0TeHXUiz_GvHOFI5wfQDhlq9Tjas6Z2lt0j6QyJtbuBBrfEWxA0WYr8NWQiybg21l_jvH_RMF-1oFWq_Z47kc50U08NF6UDDSvXo8oB3KWDkSD61yg98Tp83sk8MFGI6CmgTzh4zKIMZ2ASV8A9tWg4wfiU1iNp1Q_dm6h8mpw.jpg?r=081';
        imgs[9].src = 'https://occ-0-5308-3851.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYWRKiMBcy3cJpj9ZRwJFrRWyZvFxBQP616tAhtQyEJGfiYeUTXblBll7pkhrmPl4xBvyfi0Hsr3mQgEf8A8LYpDNVWjR5figU4.webp?r=563';
        imgs[10].src = 'https://occ-0-5308-3851.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVBbuigNdVPWAcBc7c4TszdKUDxYyAKsuXaOowHlYze-1Q_F9MjhgLZHjb93bnzLlf4Q5xQ_2VhAHImnkohrvmfCggnvEKmfePQojBp4HMZ5Il2YheXV_JI8jY7gdGwD8GEdSIascWCsQHqdeN9TfXLnwfjnriAMM-t1_5wA1ov6sKoYGpZV9sLzwBP4H-WNGgJWO3eGgKWagspsIJ6kLRHC7TbOY-FTMhtnwZJTy4nr15ETMNNIvBlj1uhzRgCeUHnJ45hdFsPCkLKWLKdkix66C6HyNXG6zIGA9RFso-pTkpvCzeNDC_-f.jpg?r=4ec';
        imgs[11].src = 'https://occ-0-5308-3851.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABd9QXaOv3gPoe6-nbmDB3ftaoZ3IeSOLBuhbBfhbekqsHZxXR1a7ibAtKKmuFQgSNPiLGYSyhUEsWr25qxQ4z0XvwCzWyo2cchMOX9wbfBPT73C39zbFEppQ8OyibjncOwuKaQgXErdaW0TeHXUiz_GvHOFI5wfQDhlq9Tjas6Z2lt0j6QyJtbuBBrfEWxA0WYr8NWQiybg21l_jvH_RMF-1oFWq_Z47kc50U08NF6UDDSvXo8oB3KWDkSD61yg98Tp83sk8MFGI6CmgTzh4zKIMZ2ASV8A9tWg4wfiU1iNp1Q_dm6h8mpw.jpg?r=081';
        imgs[12].src = 'https://occ-0-5308-3851.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZwWKFVz9WAPua38fBEA6OPQ3e0P2EL6JpRN_eGVtiD_OK0w09pvkn0oMuYCp8tnUhhlL8KkHL89P2zS9UTfFnWavAeA9FJu53I.webp?r=e4f';
        imgs[13].src = 'https://occ-0-5308-3851.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXec80zLe0lhrvVnyurJ86a5kFs_3mECmNYe1cpDl8z_XR38rr8XjBe7ZWPTX3mD6BO6c0koOadaRRjvFQS_y7_MwG-Kl3Ts-1wLaDxokLtSxAzMP_Z_CMX4xiYpv-GyGrMVD1FntWXsAcoN9zD8CSnll551v3pUDjE0e6A4wZXAUzBRrZAJlddj9Kwpyps.jpg?r=ac3';
        imgs[14].src = 'https://occ-0-5308-3851.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVBbuigNdVPWAcBc7c4TszdKUDxYyAKsuXaOowHlYze-1Q_F9MjhgLZHjb93bnzLlf4Q5xQ_2VhAHImnkohrvmfCggnvEKmfePQojBp4HMZ5Il2YheXV_JI8jY7gdGwD8GEdSIascWCsQHqdeN9TfXLnwfjnriAMM-t1_5wA1ov6sKoYGpZV9sLzwBP4H-WNGgJWO3eGgKWagspsIJ6kLRHC7TbOY-FTMhtnwZJTy4nr15ETMNNIvBlj1uhzRgCeUHnJ45hdFsPCkLKWLKdkix66C6HyNXG6zIGA9RFso-pTkpvCzeNDC_-f.jpg?r=4ec';
        imgs[15].src = 'https://occ-0-5308-3851.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABd9QXaOv3gPoe6-nbmDB3ftaoZ3IeSOLBuhbBfhbekqsHZxXR1a7ibAtKKmuFQgSNPiLGYSyhUEsWr25qxQ4z0XvwCzWyo2cchMOX9wbfBPT73C39zbFEppQ8OyibjncOwuKaQgXErdaW0TeHXUiz_GvHOFI5wfQDhlq9Tjas6Z2lt0j6QyJtbuBBrfEWxA0WYr8NWQiybg21l_jvH_RMF-1oFWq_Z47kc50U08NF6UDDSvXo8oB3KWDkSD61yg98Tp83sk8MFGI6CmgTzh4zKIMZ2ASV8A9tWg4wfiU1iNp1Q_dm6h8mpw.jpg?r=081';
        imgs[16].src = 'https://occ-0-5308-3851.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZwWKFVz9WAPua38fBEA6OPQ3e0P2EL6JpRN_eGVtiD_OK0w09pvkn0oMuYCp8tnUhhlL8KkHL89P2zS9UTfFnWavAeA9FJu53I.webp?r=e4f';
        imgs[17].src = 'https://occ-0-5308-3851.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXec80zLe0lhrvVnyurJ86a5kFs_3mECmNYe1cpDl8z_XR38rr8XjBe7ZWPTX3mD6BO6c0koOadaRRjvFQS_y7_MwG-Kl3Ts-1wLaDxokLtSxAzMP_Z_CMX4xiYpv-GyGrMVD1FntWXsAcoN9zD8CSnll551v3pUDjE0e6A4wZXAUzBRrZAJlddj9Kwpyps.jpg?r=ac3';
        imgs[18].src = 'https://occ-0-5308-3851.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYWRKiMBcy3cJpj9ZRwJFrRWyZvFxBQP616tAhtQyEJGfiYeUTXblBll7pkhrmPl4xBvyfi0Hsr3mQgEf8A8LYpDNVWjR5figU4.webp?r=563';

    }


    //botão de som
    timeScreen(backgroundBefore, background, img, time){

        document.querySelector('#divMute').style.background = backgroundBefore;
        

        setTimeout(function(){
                            
            document.querySelector('#divMute').style.background = background;
            document.querySelector('#mute').innerHTML = img;

        },time);

    }

    endVideo(backgroundImg){

        this.videoEl = document.querySelector('video');

        //Quando o video acabar
        this.videoEl.onended = e=>{
            
            //quando o video acabar ira aparecer essa imagem
            this.header.style.backgroundImage = backgroundImg;
            this.videoEl.style.display = 'none';

            //Quando o video acabar irá aparecer essa imagem no botão
            this.buttonAudio.innerHTML = `
                                    <img style='margin: 5px 10px 0 2px;' src="https://img.icons8.com/ios-glyphs/20/null/recurring-appointment.png"/>
                                                       
                                    `;

            this.buttonAudio.addEventListener('click', e=>{

                this.videoEl.play();
                this.videoEl.style.display = 'flex';

                if(this.videoEl.muted == false) this.videoEl.muted == false;
                if(this.videoEl.muted == true) this.videoEl.muted == true;
                this.audio(this.videoEl, true);
                
            })

                this.cont = 1 
                this.textSerie(false);          

        }


    }

    audio(tagVideo){

            //Caso o botão esteja com som
            if(tagVideo.muted == false){
                
                tagVideo.muted = true;

                this.timeScreen(

                    '#ffffffd4',
                    'Transparent',
                    "<img id='muteImg' style='margin: 5px 10px 0 2px;' src='https://img.icons8.com/material-rounded/20/ffffff/no-audio--v1.png'/>",
                    100

                );
                
            //Caso o botão esteja sem som    
            }else if(tagVideo.muted == true){

                tagVideo.muted = false;
                this.timeScreen(

                    '#ffffffd4',
                    'Transparent',
                    "<img id='muteImg' style='margin:5px 10px 0 2px;' src='https://img.icons8.com/ios-filled/20/null/room-sound.png'/>",
                    100

                );
                
            };


    }

    backgroundNone(){

        return document.querySelector('header').style.background = 'none';
        
    }

    playVideo(){

        let video = document.querySelector('video');

        //Parte do titulo e texto da serie
        this.textSerie(true);

        video.onplay = e=>{
            
            this.backgroundNone()
            document.querySelector('#mute').addEventListener('click', e=>{

                this.audio(video);

            });

        };

        
    }

    configPageChildren(){
        
        //Para quando o usuario deixar o video em mudo e quiser assistir novamente, ele voltará em mudo e visse vessa

        document.querySelector('#butInfantil button').addEventListener('click', e=>{
            
            /*if(document.querySelector('video').muted == true){

                document.querySelector('#mute img').src = 'https://img.icons8.com/material-rounded/20/ffffff/no-audio--v1.png'
    
                document.querySelector('video').muted == true;
    
            }else if(document.querySelector('video').muted == false){

                document.querySelector('#mute img').src = 'https://img.icons8.com/ios-filled/20/null/room-sound.png'
    
                document.querySelector('video').muted == false;
    
            }*/
            if(this.cont == 1){
                
                if(document.querySelector('video').muted == true){

                    document.querySelector('#mute img').src = 'https://img.icons8.com/material-rounded/20/ffffff/no-audio--v1.png'
        
                    document.querySelector('video').muted == true;
        
                }else if(document.querySelector('video').muted == false){
    
                    document.querySelector('#mute img').src = 'https://img.icons8.com/ios-filled/20/null/room-sound.png'
        
                    document.querySelector('video').muted == false;
        
                }

            }

            //Excluindo e criando um novo video (achei mais facil assim)
            document.querySelector('video').remove();
            document.querySelector('#video').innerHTML = `

                <video id='mudvid'controls autoplay muted style="width:98vw; position: absolute; z-index: -1;">
        
                    <source id='vid' style='width:98vw;height: 50vh;' src='arquivos/theCupheadShow.mp4'/>

                </video>

            `;

            //Quando o video começar a tocar
            document.querySelector('video').onplay = e => {

                
                this.backgroundNone(document.querySelector('video'));
                document.querySelector('#mute').addEventListener('click', e=>{

                    
                    this.audio(document.querySelector('video'));
                    //this.textSerie(true)
    
                });
                

            };

            //Quando video terminar
            //Essa demora no final do video da tela infantil para volta a imagem, é o proprio video que é assim
            this.endVideo('url(https://occ-0-5308-3851.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABe0KaCd7AVCwkiDVtPaIztQdBM9vUdkc4Qa-27sXh31_z-9pdUyRUPpmXXXlCt6QR3IJBv1ZOuWuy9F3JQVuQ26Pnae50tCzjA6a.webp?r=a97)');
            
        });
        

        //Se eu deixar com isso, qunado o peimrio video acaba ele funciona, agora se eu sair no meio do video, ele para de funcionar
    
            
            document.querySelector('video').onplay = e => {

                
                this.backgroundNone(document.querySelector('video'));
                document.querySelector('#mute').addEventListener('click', e=>{
    
                    this.audio(document.querySelector('video'));
                    this.textSerie(true)
    
                });

            }

    }

    childrenScreen(header, main, loading){
        
        //if(this.sinopse.style.display == 'none') this.sinopse.style.display = 'block';
        let section = document.querySelectorAll('main section');

        //Mudando dados para infantil
       
        this.title.src = 'https://occ-0-5308-3851.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABXVE5aZiIwGdXFbj8CPG83v269WfVwrklHVsqZsYD76HnO8H7EPYILFy8I0HmWSzYsL4J-efx8O6ROZ7u7W9c1_B6CqHRmepDB0SvX963RziyhoslGRRKYyCIW0TwVIlWiwnXtpohxDEyy59zdT9kwuP6JJPl_nLMb0uALzHAM5YnfeEVuwghA.webp?r=cf6';
        this.sinopse.innerHTML = 
                                  `Acompanhe as desventuras do impulsivo Xicrinho e seu ingênuo</br>
                                   irmão Caneco nesta série de animação baseada no famoso</br> videogame.`;

        // Tirando os elementos da tela
        document.querySelector('#profile-icon').src  ='https://occ-0-5308-3851.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABYh5hkXId5o_KJ5wCel_N8WJBVvymdS8CZKNFAEaGe4-xhjGuEPJoW288Q5YEFYopXfwp2EeqLMpGKbMINPHKZP7mdsHWKsmmn4o0DDeRxyU1qj4asp2eSTw9LoMSFSovfSFrSgjE3mIWg.png?r=080';
        document.querySelector('#listUsu').style.display = 'none';
        document.querySelector('#notification').style.display = 'none';
        document.querySelector('#butInfantil').style.display = 'none';

        //Criando botão de perfil infantil
        document.querySelector('#rightBox').innerHTML += `
                                                            <button id='perfil'>
                                                                <img src='https://occ-0-5308-3851.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABYh5hkXId5o_KJ5wCel_N8WJBVvymdS8CZKNFAEaGe4-xhjGuEPJoW288Q5YEFYopXfwp2EeqLMpGKbMINPHKZP7mdsHWKsmmn4o0DDeRxyU1qj4asp2eSTw9LoMSFSovfSFrSgjE3mIWg.png?r=080' alt='perfil'>
                                                            </button>

                                                        `;
        //Criando um botão para sair da netflix
        document.querySelector('#rightBox').innerHTML += `
                                                            <button id='netflixBut'>
                                                                Sair de Infantil
                                                            </button>`;


        //Reaparecendo a tela com conteúdo dps de 'carregar'
        setTimeout(function(){
   
            header.style.display = 'block';
            main.style.display = 'block';
            loading.style.display = 'none';

        },2000);

        this.scrollChange(section, 0);
        this.scrollChange(section, 1);
    }
}
new FunctionNetflix()