
$(document).ready(function()
{
            var simuladorACT = function(){
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
                $ope = true,
                
                $tabela = $(".table"),
                //parseFloat($inputSalario) = document.getElementById("inputSalario").value,
               // $inputDate = document.getElementById("inputDate").value,
                $btnAtul = document.querySelector("button");
                $inputSalario= document.querySelector("input");
                
               
                
            
                
            function construirTabela(){
                $tabela.empty();
                $tabela.append(
                    "<thead class='table-dark'>" + "<th scope='col'>Descrição</th>" + "<th scope='col'>Ref</th>" + "<th scope='col'>valor</th>" + "<th scope='col'>Prov. Direitos</th>" +  "</thead>"
                );  
                $tabela.append(
                    "<tbody class='tabela-valores'>"
                );
       
           
                if($ope){
                   $valor =  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                   $provDireitos =   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                   console.log("ATUAL");
                   $valor[0] = 0;
                   $provDireitos[0] = parseFloat($inputSalario.value);
                   
                  
                   
                   $valor[1] = 0;
                   $provDireitos[1] = parseFloat($inputSalario.value)*($ref_atual[1]/100.0);
                   console.log($provDireitos);

                   $valor[2] = 0;
                   $provDireitos[2] = 0;
                   console.log($provDireitos);
                   
                   $valor[3] = ((parseFloat($inputSalario.value) + $provDireitos[1]) / 180)*0.4;
                   $provDireitos[3] = $valor[3]*$ref_atual[3];
                   console.log($provDireitos);

                   $valor[4] = (parseFloat($inputSalario.value)+$provDireitos[1])/180*1.5;
                   $provDireitos[4] = $valor[4]*$ref_atual[4];

                   $valor[5] = (parseFloat($inputSalario.value)+$provDireitos[1])/180*2.0;
                   $provDireitos[5] = $valor[5]*$ref_atual[5];
                   
                   $valor[7] = (parseFloat($inputSalario.value)+$provDireitos[1])/180*0.5;
                   $provDireitos = $valor[7] * $valor[7];

                   $valor[6] = ((parseFloat($inputSalario.value)+$provDireitos[1]+$provDireitos[7]))/180*2.0;
                   $provDireitos[6] = $valor[6]*$ref_atual[6];

                   $valor[8] = (parseFloat($inputSalario.value)+$provDireitos[1])/180*2.0;
                   $provDireitos[8] = $valor[8]*$ref_atual[8];
                   
                   $valor[9] = ((parseFloat($inputSalario.value)+$provDireitos[1]+$provDireitos[7])/180)*2.0;
                   $provDireitos[9] =  $valor[9]*$ref_atual[9];
                   
                   $valor[10] = $valor[8];
                   $provDireitos[10] = $valor[10];

                   $valor[11] = $valor[9];
                   $provDireitos[11] = $valor[11]; 

                   $valor[12] = ((parseFloat($inputSalario.value)+$provDireitos[1]+$provDireitos[7])/180)*2.0;
                   $provDireitos[12] = $valor[12];

                   $valor[13] = 0; 
                   $provDireitos[13]  = ($provDireitos[4] +
                    $provDireitos[5] +
                    $provDireitos[6] +
                    $provDireitos[7] +
                    $provDireitos[9] +
                    $provDireitos[10] +
                    $provDireitos[11] +
                    $provDireitos[12] ) /(($ref_atual[0]-$ref_atual[13])*$ref_atual[13]);
                    
                  $valor[14] =0;
                  $provDireitos[14] = $ref_atual[3]/(($ref_atual[0]-$ref_atual[14])*$ref_atual[14]);
                  
                  $valor[15] =0;
                  $provDireitos[15] = $ref_atual[8]/(($ref_atual[0]-$ref_atual[15])*$ref_atual[15]);
                    
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
                        "<td>"+ $ref_atual[i]+"</td>"+
                        "<td>"+ $valor[i]+"</td>"+
                        "<td>"+ $provDireitos[i]+" </td>"
                    );       
                }
                
                 /*console.log($valor);
                console.log($provDireitos);
              */
                
            }
                else{
                   $valor =  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                   $provDireitos =   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                   
                   console.log("ALTERADA");
                    
                    $valor[0] = 0;
                    $provDireitos[0] = parseFloat($inputSalario.value);
                    
                    $valor[1] = 0;
                    $provDireitos[1] = parseFloat($inputSalario.value)*($ref_alterada[1]/100.0);
 
                    $valor[2] = 0;
                    $provDireitos[2] = 0;
 
                    $valor[3] = (parseFloat($inputSalario.value)+$provDireitos[1])/180*0.4;
                    $provDireitos[3] = $valor[3]*$ref_alterada[3];
                
                    $valor[4] = (parseFloat($inputSalario.value)+$provDireitos[1])/180*1.5;
                    $provDireitos[4] = $valor[4]*$ref_alterada[4];
 
                    $valor[8] = (parseFloat($inputSalario.value)+$provDireitos[1])/180*0.5;
                    $provDireitos[8] = $valor[8]*$ref_alterada[8];
 
                    $valor[5] = (parseFloat($inputSalario.value)+$provDireitos[1]+$provDireitos[8])/180*2.0;
                    $provDireitos[5] = $valor[5]*$ref_alterada[5];
                    
                    $valor[6] = ((parseFloat($inputSalario.value)+$provDireitos[1]))/180*2.0;
                    $provDireitos[6] = $valor[6]*$ref_alterada[6];
 
                    $valor[7] = (parseFloat($inputSalario.value)+$provDireitos[1]+$provDireitos[8])/180*2.0;
                    $provDireitos = $valor[7] * $valor[7];
 
                    $valor[9] = ((parseFloat($inputSalario.value)+$provDireitos[1])/180)*2.0;
                    $provDireitos[9] =  $valor[9]*$ref_alterada[9];
                    
                    $valor[10] = $valor[8];
                    $provDireitos[10] = $valor[10] * $ref_alterada[10];
                   
                    $valor[11] = $valor[9];
                    $provDireitos[11] = $valor[11] * $ref_alterada[11]; 
 
                    $valor[12] = ((parseFloat($inputSalario.value)+$provDireitos[1]+$provDireitos[8])/180)*2.0;
                    $provDireitos[12] = $valor[12];
 
                    $valor[13] = 0; 
                    $provDireitos[13]  = ($provDireitos[4] +
                     $provDireitos[5] +
                     $provDireitos[6] +
                     $provDireitos[7] +
                     $provDireitos[9] +
                     $provDireitos[10] +
                     $provDireitos[11] +
                     $provDireitos[12] ) /(($ref_alterada[0]-$ref_alterada[13])*$ref_alterada[13]);
                     
                   $valor[14] =0;
                   $provDireitos[14] = $ref_alterada[3]/(($ref_alterada[0]-$ref_alterada[14])*$ref_alterada[14]);
                   
                   $valor[15] =0;
                   $provDireitos[15] = $ref_alterada[8]/(($ref_alterada[0]-$ref_alterada[15])*$ref_alterada[15]);
                 
                   $valor[16] = 0 ;
                   $provDireitos[16] = 0
                   
                   console.log($provDireitos);
                   $valor[17] = 0 ;
                   
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
                        "<td>"+ $ref_alterada[i]+"</td>"+
                        "<td>"+ $valor[i]+"</td>"+
                        "<td>"+ $provDireitos[i]+" </td>"
                        
                    );       
                    }

                   
                   /*  console.log($valor);
                    console.log($provDireitos); */
                }   

              
                $tabela.append(
                    
                    '</tbody>'+ '<tfoot >'+ '<tr >'+  '<th>Total</th>'+  '<td></td>'+
                          '<td></td >'+
                          '<th >'+$provDireitos[17]+'</th>'+
                        '</tr>'+
                    '</tfoot>'
                        );
                    
            }
            
             
            
            function test(){
                for (i = 0; i < destricao.length-1; i++){
                    $tabela.append(
                        "<tr>"+
                        "<th>"+ destricao[i]+"</th>" +
                        "<td>"+ i+"</td>"+
                        "<td>"+ i+"</td>"+
                        "<td>"+ i+" </td>"
                    );  
                }
            }
            function bindEvents(){
                
                         
                
                
                $btnAtul.onclick = function(){
                    console.log("passei aqui");
                    $tabela.empty();
                    if($ope){
                        $ope = false;
                    }else{
                        $ope = true;
                    }
                    
                    construirTabela();
            
                };
        }    
        bindEvents();

    };        
    simuladorACT();
});



















