const resultado = document.getElementById("resultado")
    const confirmar = document.getElementsByClassName("btn igual")
    
    function inserir(valor){
        resultado.innerHTML += valor;
    }
    
    function limpar() {
        resultado.innerHTML = " ";
    }
    
    function apagar() {
        if(resultado.textContent){
            let result = document.getElementById('resultado').innerHTML
            resultado.innerHTML = result.substring(0, result.length - 1);
        } 
    }

    function confirma() {
        if(resultado.textContent != 'Erro') {
            document.getElementById("resultado").innerHTML = eval(resultado.innerHTML)
        }
    }