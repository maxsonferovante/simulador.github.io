$(document).ready(function()
{
    var simuladorSindiporto = function(){
        var $nome = $('.nome'),
            $data = $('.data'),
            $cpf =$('.cpf'),
            $salario =$('.salario'),
            $btnSimular =$('.btn btn-primary');
                  

        var dateNow = new Date();
        var current_month = dateNow.getMonth(),
            current_day = dateNow.getDate(),
            current_year = dateNow.getFullYear();
       
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