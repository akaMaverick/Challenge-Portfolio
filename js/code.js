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

        