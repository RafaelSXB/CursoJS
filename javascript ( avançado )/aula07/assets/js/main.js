function criaCalculadora() {
   
       this.display = document.querySelector('.display')


        this.inicia = () =>{
            this.cliqueBotoes();
            this.Enter();
        }

        this.Enter = () =>{
            this.display.addEventListener('keyup', (e) => {
                if(e.keyCode === 13) this.btnResult();
            })
        }

        this.cliqueBotoes = () =>{
            document.addEventListener('click', function(e){
                const el = e.target;

                if(el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText);
                if(el.classList.contains('btn-clear')) this.btnClearDisplay();
                if(el.classList.contains('btn-del')) this.btnClearOne();
                if(el.classList.contains('btn-eq')) this.btnResult();
            }.bind(this))
        }

        this.btnParaDisplay = (valor) =>{
            this.display.value += valor;
        }

        this.btnClearDisplay = () =>{
            this.display.value = ' '
        }

        this.btnClearOne = () =>{
            this.display.value = this.display.value.slice(0, -1)
        }

        this.btnResult = () =>{
            let conta = this.display.value;

            try {
                conta = eval(conta);
                console.log(typeof conta);
               
                if(typeof conta != 'number'){
                    alert('Conta inválida')
                    return
                }else{
                    this.display.value = conta;
                    console.log(typeof conta);
                }
            } catch (error) {
                alert('Conta inválida')
            }
         
        }
   
}

const calculadora = new criaCalculadora();

calculadora.inicia();

