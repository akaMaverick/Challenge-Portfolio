var balls = document.querySelector('.mover__forca')
        var quant = document.querySelectorAll('.slides__forca .imagens__forca');
        var atual = 0;
        var images = document.getElementById('atual__forca');
        var next = document.getElementById('next__forca');
        var voltar = document.getElementById('voltar__forca');

        for(let i=0; i < quant.length; i++) {
            var div = document.createElement('div');
            div.id = i 
            balls.appendChild(div)
        }

        document.getElementById('0').classList.add('imgAtual__forca');

        var pos = document.querySelectorAll('.mover__forca div')

        for(let i = 0; i < pos.length; i++) {
            pos[i].addEventListener('click', ()=> {
                atual = pos[i].id
                slide()
            })
        }

        voltar.addEventListener('click', ()=> {
            atual--
            slide()
        })
        

        next.addEventListener('click', ()=> {
            atual++
            slide()
        })

        function slide() {
            if(atual >= quant.length) {
                atual = 0;
            } else if ( atual < 0) {
                atual = quant.length - 1
            }
            document.querySelector('.imgAtual__forca').classList.remove('imgAtual__forca');
            if(screen.width < 640 || screen.height < 480) {
                images.style.marginLeft = -450*atual+'px'; }
                else {
                    images.style.marginLeft = -800*atual+'px';
                }
            document.getElementById(atual).classList.add('imgAtual__forca');
        }

        //Bandeira

        var ballsBandeira = document.querySelector('.mover__bandeira')
        var quantBandeira = document.querySelectorAll('.slides__bandeira .imagens__bandeira');
        var atualBandeira = 0;
        var imagesBandeira = document.getElementById('atual__bandeira');
        var nextBandeira = document.getElementById('next__bandeira');
        var voltarBandeira = document.getElementById('voltar__bandeira');

        for(let i=0; i < quantBandeira.length; i++) {
            var div = document.createElement('div');
            div.id = i 
            ballsBandeira.appendChild(div)
        }

        document.getElementById('0').classList.add('imgAtual__bandeira');

        var posBandeira = document.querySelectorAll('.mover__bandeira div')

        for(let i = 0; i < posBandeira.length; i++) {
            posBandeira[i].addEventListener('click', ()=> {
                atualBandeira = posBandeira[i].id
                slideBandeira()
            })
        }

        voltarBandeira.addEventListener('click', ()=> {
            atualBandeira--
            slideBandeira()
        })
        

        nextBandeira.addEventListener('click', ()=> {
            atualBandeira++
            slideBandeira()
        })

        function slideBandeira() {
            if(atualBandeira >= quantBandeira.length) {
                atualBandeira = 0;
            } else if ( atualBandeira < 0) {
                atualBandeira = quantBandeira.length - 1
            }
            document.querySelector('.imgAtual__bandeira').classList.remove('imgAtual__bandeira');
            if(screen.width < 640 || screen.height < 480) {
                imagesBandeira.style.marginLeft = -250*atualBandeira+'px'; }
                else {
                    imagesBandeira.style.marginLeft = -800*atualBandeira+'px';
                }
            document.getElementById(atualBandeira).classList.add('imgAtual__bandeira');
        }

        