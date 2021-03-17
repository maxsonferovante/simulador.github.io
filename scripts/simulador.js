$(document).ready(function()
{
    var simuladorSindiporto = function(){
        var $nome = $('.nome'),
            $data = $('.data'),
            $cpf =$('.cpf'),
            $salario =$('.salario'),
            $btnSimular =$('.btn btn-primary');
                  

        let tabela = document.querySelector("#tabela");
        console.log(tabela);
        let rows = tabela.querySelectorAll(".row");
        console.log(rows)
        function coletorDeDados (){
            
        }
        function bindEvents(){
 

            $btnSimular.on('click', function(){
                console.log(nome.length());
            });
            
            
        }
        bindEvents();
    };
    simuladorSindiporto();    
});