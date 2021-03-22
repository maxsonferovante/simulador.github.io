
$(document).ready(function()
{
            var simuladorACT = function(){
                (function(){

                    /**
                     * Ajuste decimal de um número.
                     *
                     * @param	{String}	type	O tipo de arredondamento.
                     * @param	{Number}	value	O número a arredondar.
                     * @param	{Integer}	exp		O expoente (o logaritmo decimal da base pretendida).
                     * @returns	{Number}			O valor depois de ajustado.
                     */
                    function decimalAdjust(type, value, exp) {
                        // Se exp é indefinido ou zero...
                        if (typeof exp === 'undefined' || +exp === 0) {
                            return Math[type](value);
                        }
                        value = +value;
                        exp = +exp;
                        // Se o valor não é um número ou o exp não é inteiro...
                        if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
                            return NaN;
                        }
                        // Transformando para string
                        value = value.toString().split('e');
                        value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
                        // Transformando de volta
                        value = value.toString().split('e');
                        return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
                    }
                
                    // Arredondamento decimal
                    if (!Math.round10) {
                        Math.round10 = function(value, exp) {
                            return decimalAdjust('round', value, exp);
                        };
                    }
                    // Decimal arredondado para baixo
                    if (!Math.floor10) {
                        Math.floor10 = function(value, exp) {
                            return decimalAdjust('floor', value, exp);
                        };
                    }
                    // Decimal arredondado para cima
                    if (!Math.ceil10) {
                        Math.ceil10 = function(value, exp) {
                            return decimalAdjust('ceil', value, exp);
                        };
                    }
                
                })();

                var $ref_atual = [
                    30,
                    4,
                    0,
                    165,
                    14,
                    12,
                    26.0,
                    23.0,
                    84,
                    6,
                    6,
                    0,
                    0,
                    4,
                    0,
                    0,
                    0
                ],
                $ref_alterada = [
                    30,
                    4,
                    0,
                    165,
                    21,
                    18,
                    3.0,
                    3.0,
                    76,
                    8,
                    8,
                    8,
                    7,
                    4,
                    0,
                    0,
                    0
                ],
                destricao = [
                    "Sal.Base/Dias de férias",
                    "ATS/ ATS férias",
                    "Gratificação de atividade portuária",
                    "RISCO/ Compl. De Risco",
                    "Hora Extra 50%/compl.HE 50%",
                    "Hora Extra 50% Noturno",
                    "Hora Extra 100% / compl. HE 100%",
                    "Hora Extra 100% Noturno",
                    "Ad.Not Avent",
                    "Domingos/Feriados/ Compl. D/F",
                    "Domingos/Feriados nort.",
                    "Intrajornada",
                    "Intrajornada notruna",
                    "DSR S/H.Extra",
                    "DSR ADICIONAL DE RISCO",
                    "DSR ADCIONAL NOTURNO",
                    "Compl. Transfer. de local"
                ],
                $valor =  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                $provDireitos =   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                $ope = false,
                
                $tabela = $(".table"),
          
                $btnAtul = document.querySelector("button");
                $inputSalario= document.querySelector("input");
     
            
                
            function construirTabela(){
         
                if($ope){
               
                    $tabela.append(
                    "<thead >" + "<th scope='col'>Remuneração Atual</th>" + "<th scope='col'>Ref</th>" + "<th scope='col'>valor</th>" + "<th scope='col'>Prov. Direitos</th>" +  "</thead>"
                );  
                $tabela.append(
                    "<tbody class='tabela-valores'>"
                );
       
                   $valor =  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                   $provDireitos =   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                   console.log("ATUAL");
                   $valor[0] = 0;
                   $provDireitos[0] = parseFloat($inputSalario.value);
                   
            
                   $valor[1] = 0;
                   $provDireitos[1] = parseFloat($inputSalario.value*($ref_atual[1]/100.0));

                   $valor[2] = 0;
                   $provDireitos[2] = 0;
                   
                   
                   $valor[3] = ((parseFloat($inputSalario.value) + $provDireitos[1]) / 180)*0.4;
                   $provDireitos[3] = $valor[3]*$ref_atual[3];

                   $valor[4] = ((parseFloat($inputSalario.value)+$provDireitos[1])/180)*1.5;
                   $provDireitos[4] = $valor[4]*$ref_atual[4];

                   
                   $valor[8] = (parseFloat($inputSalario.value)+$provDireitos[1])/180*0.5;
                   $provDireitos[8] = $valor[8]*$ref_atual[8];

                   $valor[5] = ((parseFloat($inputSalario.value)+$provDireitos[1] +$provDireitos[8])/180.0)*1.5;
                   $provDireitos[5] = $valor[5]*$ref_atual[5];
                   

                   $valor[6] = ((parseFloat($inputSalario.value)+$provDireitos[1]))/180*2.0;
                   $provDireitos[6] = $valor[6]*$ref_atual[6];


                   $valor[7] = ((parseFloat($inputSalario.value)+$provDireitos[1]+$provDireitos[8])/180.0)*2.0;
                   $provDireitos[7] = $valor[7] * $ref_atual[7];

          
                   $valor[9] = ((parseFloat($inputSalario.value)+$provDireitos[1])/180)*2.0;
                   $provDireitos[9] =  $valor[9]*$ref_atual[9];
                   
                   $valor[10] = ((parseFloat($inputSalario.value)+$provDireitos[1]+$provDireitos[8])/180)*2.0;;
                   $provDireitos[10] = $valor[10] *$ref_atual[10];

                   $valor[11] = $valor[9];
                   $provDireitos[11] = $valor[11]; 

                   $valor[12] = ((parseFloat($inputSalario.value)+$provDireitos[1]+$provDireitos[8])/180)*2.0;
                   $provDireitos[12] = $valor[12];

                   var x = $provDireitos[4] +  $provDireitos[5] +$provDireitos[6] +$provDireitos[7];
                   x = x +$provDireitos[ 9] +$provDireitos[10] +$provDireitos[11] +$provDireitos[12]; 

                   $valor[13] = 0; 
                   $provDireitos[13]  = x/($ref_atual[0]-$ref_atual[13])*$ref_atual[13];
                
                  $valor[14] =0;
                  $provDireitos[14] = ($provDireitos[3]/($ref_atual[0]-$ref_atual[13]))*$ref_atual[13];
                  
                  $valor[15] =0;
                  $provDireitos[15] = ($provDireitos[8]/($ref_atual[0]-$ref_atual[13]))*$ref_atual[13];
                    
                  $valor[16] = 0 ;
                  $provDireitos[16] = 0
                  
                  
                  $valor[17] = 0 ;
                  
                  var temp = 0;
                  for (i=0;i<$provDireitos.length-1;i++){
                     temp = temp + $provDireitos[i];
                  }

                  $provDireitos[17] = temp;
                 
                  
                  for (i = 0; i < destricao.length; i++){
                    $tabela.append(
                        "<tr>"+
                        "<th>"+ destricao[i]+"</th>" +
                        "<td>"+ Math.round10($ref_atual[i],-2)+"</td>"+
                        "<td>"+ Math.round10($valor[i],-2)+"</td>"+
                        "<td>"+ Math.round10($provDireitos[i],-2)+" </td>"
                    );       
                    }
                    $tabela.append(
                        
                        '</tbody>'+ '<tfoot >'+ '<tr >'+  '<th>Total</th>'+  '<td></td>'+
                            '<td></td >'+
                            '<th >'+Math.round10($provDireitos[17],-2)+'</th>'+
                            '</tr>'+
                        '</tfoot>'
                            );
                        
                
                }    
                else{
              
                    $tabela.append(
                    "<thead >" + "<th scope='col'>Remuneração Alterada pela ACT - CDP</th>" + "<th scope='col'>Ref</th>" + "<th scope='col'>valor</th>" + "<th scope='col'>Prov. Direitos</th>" +  "</thead>"
                );  
                $tabela.append(
                    "<tbody class='tabela-valores'>"
                );
       
                   $valor =  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                   $provDireitos =   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                   
                   console.log("ALTERADA");
                   $valor[0] = 0;
                   $provDireitos[0] = parseFloat($inputSalario.value);
                   
                  
                   
                   $valor[1] = 0;
                   $provDireitos[1] = parseFloat($inputSalario.value*($ref_alterada[1]/100.0));
                   console.log($provDireitos);

                   $valor[2] = 0;
                   $provDireitos[2] = 0;
                   
                   
                   $valor[3] = ((parseFloat($inputSalario.value) + $provDireitos[1]) / 180)*0.4;
                   $provDireitos[3] = $valor[3]*$ref_alterada[3];
                   console.log($provDireitos);

                   $valor[4] = ((parseFloat($inputSalario.value)+$provDireitos[1])/180)*1.5;
                   $provDireitos[4] = $valor[4]*$ref_alterada[4];

                   
                   $valor[8] = (parseFloat($inputSalario.value)+$provDireitos[1])/180*0.5;
                   $provDireitos[8] = $valor[8]*$ref_alterada[8];

                   $valor[5] = ((parseFloat($inputSalario.value)+$provDireitos[1] +$provDireitos[8])/180.0)*1.5;
                   $provDireitos[5] = $valor[5]*$ref_alterada[5];
                   

                   $valor[6] = ((parseFloat($inputSalario.value)+$provDireitos[1]))/180*2.0;
                   $provDireitos[6] = $valor[6]*$ref_alterada[6];


                   $valor[7] = ((parseFloat($inputSalario.value)+$provDireitos[1]+$provDireitos[8])/180.0)*2.0;
                   $provDireitos[7] = $valor[7] * $ref_alterada[7];

                   
                   console.log($provDireitos);

                   
                   $valor[9] = ((parseFloat($inputSalario.value)+$provDireitos[1])/180)*2.0;
                   $provDireitos[9] =  $valor[9]*$ref_alterada[9];
                   
                   $valor[10] = ((parseFloat($inputSalario.value)+$provDireitos[1]+$provDireitos[8])/180)*2.0;;
                   $provDireitos[10] = $valor[10] *$ref_alterada[10];

                   $valor[11] = $valor[9];
                   $provDireitos[11] = $valor[11] *$ref_alterada[11]; 

                   $valor[12] = ((parseFloat($inputSalario.value)+$provDireitos[1]+$provDireitos[8])/180)*2.0;
                   $provDireitos[12] = $valor[12] * $ref_alterada[12];

                   var x = $provDireitos[4] +  $provDireitos[5] +$provDireitos[6] +$provDireitos[7];
                   x = x +$provDireitos[ 9] +$provDireitos[10] +$provDireitos[11] +$provDireitos[12]; 

                   $valor[13] = 0; 
                   $provDireitos[13]  = x/($ref_alterada[0]-$ref_alterada[13])*$ref_alterada[13];
                
                  $valor[14] =0;
                  $provDireitos[14] = ($provDireitos[3]/($ref_alterada[0]-$ref_alterada[13]))*$ref_alterada[13];
                  
                  $valor[15] =0;
                  $provDireitos[15] = ($provDireitos[8]/($ref_alterada[0]-$ref_alterada[13]))*$ref_alterada[13];
                    
                  $valor[16] = 0 ;
                  $provDireitos[16] = 0
                  
                  
                  $valor[17] = 0 ;
                  
                  var temp = 0;
                  for (i=0;i<$provDireitos.length-2;i++){
                     temp = temp + $provDireitos[i];
                  }

                  $provDireitos[17] = temp;
                 
                  
                   var temp = 0;
                   for (i=0;i<$provDireitos.length-1;i++){
                      temp = temp + $provDireitos[i];
                   }

                   $provDireitos[17] = temp;
                   console.log($provDireitos);
                   
                  for (i = 0; i < destricao.length; i++){

                    $tabela.append(
                        "<tr>"+
                        "<th>"+ destricao[i]+"</th>" +
                        "<td>"+ Math.round10($ref_alterada[i],-2)+"</td>"+
                        "<td>"+ Math.round10($valor[i],-2)+"</td>"+
                        "<td>"+ Math.round10($provDireitos[i],-2)+" </td>"
                    );       
                    }
                    $tabela.append(
                        
                        '</tbody>'+ '<tfoot >'+ '<tr >'+  '<th>Total </th>'+  '<td></td>'+
                            '<td></td >'+
                            '<th >'+Math.round10($provDireitos[17],-2)+'</th>'+
                            '</tr>'+
                        '</tfoot>'
                            );
                        
                }

                if($ope){
                    $ope = false;
                }else{
                    $ope = true;
                }
            }
            
             
            function bindEvents(){
                $btnAtul.onclick = function(){
                    console.log("passei aqui");
                    $tabela.empty();
           

                    if($inputSalario.value !=""){                    
                        construirTabela();
                       
                    }
                    
            
                };
        }    
        bindEvents();

    };        
    simuladorACT();
});



















