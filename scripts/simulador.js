
$(document).ready(function()
{
            var simuladorACT = function(){
                var ref_atual = [
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
                ref_alterada = [
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
                $valor =  new Array(18),
                $provDireitos =  new Array(18),
                $ope = true,
                
                $tabela = $(".table"),
                $inputSalario = document.getElementById("inputSalario").value,
                $inputDate = document.getElementById("inputDate"),
                $btnAtul = document.getElementById("btnAtul"),
                $btnAlterada = document.getElementById("btnAlterada");
                
                console.log($valor );
                $inputSalario.value = 1000;
            function construirTabela(){
                $tabela.append(
                    "<thead class='table-dark'>" + "<th scope='col'>Descrição</th>" + "<th scope='col'>Ref</th>" + "<th scope='col'>valor</th>" + "<th scope='col'>Prov. Direitos</th>" +  "</thead>"
                );  
                $tabela.append(
                    "<tbody class='tabela-valores'>"
                );
                if($ope){
                    $ope = false;
                   $valor[0] = 0;
                   $provDireitos[0] = $inputSalario.value;
                   console.log($valor,$provDireitos );
                   $valor[1] = 0;
                   $provDireitos[1] = $inputSalario.value*(ref_atual[1]/100.0);

                   $valor[2] = 0;
                   $provDireitos[2] = 0;

                   $valor[3] = ($inputSalario+$provDireitos[1])/180*0.4;
                   $provDireitos[3] = $valor[3]*ref_atual[3];
                   
                   $valor[4] = ($inputSalario+$provDireitos[1])/180*1.5;
                   $provDireitos[4] = $valor[4]*ref_atual[4];

                   $valor[5] = ($inputSalario+$provDireitos[1])/180*2.0;
                   $provDireitos[5] = $valor[5]*ref_atual[5];
                   
                   $valor[7] = ($inputSalario+$provDireitos[1])/180*0.5;
                   $provDireitos = $valor[7] * $valor[7];

                   $valor[6] = (($inputSalario+$provDireitos[1]+$provDireitos[7]))/180*2.0;
                   $provDireitos[6] = $valor[6]*ref_atual[6];

                   $valor[8] = ($inputSalario+$provDireitos[1])/180*2.0;
                   $provDireitos[8] = $valor[8]*ref_atual[8];

                   $valor[9] = (($inputSalario+$provDireitos[1]+$provDireitos[7])/180)*2.0;
                   $provDireitos[9] =  $valor[9]*ref_atual[9];
                   
                   $valor[10] = $valor[8];
                   $provDireitos[10] = $valor[10];

                   $valor[11] = $valor[9];
                   $provDireitos[11] = $valor[11]; 

                   $valor[12] = (($inputSalario+$provDireitos[1]+$provDireitos[7])/180)*2.0;
                   $provDireitos[12] = $valor[12];

                   $valor[13] = 0; 
                   $provDireitos[13]  = ($provDireitos[4] +
                    $provDireitos[5] +
                    $provDireitos[6] +
                    $provDireitos[7] +
                    $provDireitos[9] +
                    $provDireitos[10] +
                    $provDireitos[11] +
                    $provDireitos[12] ) /((ref_atual[0]-ref_atual[13])*ref_atual[13]);
                    
                  $valor[14] =0;
                  $provDireitos[14] = ref_atual[3]/((ref_atual[0]-ref_atual[14])*ref_atual[14]);
                  
                  $valor[15] =0;
                  $provDireitos[15] = ref_atual[8]/((ref_atual[0]-ref_atual[15])*ref_atual[15]);
                    
                  $valor[16] = 0 ;
                  $provDireitos[16] = 0
                
                  $valor[17] = 0 ;
                  $provDireitos[17] = $arrSum($provDireitos);

                  for (i = 0; i < destricao.length-1; i++){
                    $tabela.append(
                        "<tr>"+
                        "<th>"+ destricao[i]+"</th>" +
                        "<td>"+ ref_atual[i]+"</td>"+
                        "<td>"+ $valor[i]+"</td>"+
                        "<td>"+ $provDireitos[i]+" </td>"
                    );       
                }
                
              
                }
                else{
                    $ope=true;
                    $valor[0] = 0;
                    $provDireitos[0] = $inputSalario.value;
                    
                    $valor[1] = 0;
                    $provDireitos[1] = $inputSalario.value*(ref_alterada[1]/100.0);
 
                    $valor[2] = 0;
                    $provDireitos[2] = 0;
 
                    $valor[3] = ($inputSalario+$provDireitos[1])/180*0.4;
                    $provDireitos[3] = $valor[3]*ref_alterada[3];
                    
                    $valor[4] = ($inputSalario+$provDireitos[1])/180*1.5;
                    $provDireitos[4] = $valor[4]*ref_alterada[4];
 
                    $valor[8] = ($inputSalario+$provDireitos[1])/180*0.5;
                    $provDireitos[8] = $valor[8]*ref_alterada[8];
 
                    $valor[5] = ($inputSalario+$provDireitos[1]+$provDireitos[8])/180*2.0;
                    $provDireitos[5] = $valor[5]*ref_alterada[5];
                    
                    $valor[6] = (($inputSalario+$provDireitos[1]))/180*2.0;
                    $provDireitos[6] = $valor[6]*ref_alterada[6];
 
                    $valor[7] = ($inputSalario+$provDireitos[1]+$provDireitos[8])/180*2.0;
                    $provDireitos = $valor[7] * $valor[7];
 
                    $valor[9] = (($inputSalario+$provDireitos[1])/180)*2.0;
                    $provDireitos[9] =  $valor[9]*ref_alterada[9];
                    
                    $valor[10] = $valor[8];
                    $provDireitos[10] = $valor[10] * ref_alterada[10];
 
                    $valor[11] = $valor[9];
                    $provDireitos[11] = $valor[11] * ref_alterada[11]; 
 
                    $valor[12] = (($inputSalario+$provDireitos[1]+$provDireitos[8])/180)*2.0;
                    $provDireitos[12] = $valor[12];
 
                    $valor[13] = 0; 
                    $provDireitos[13]  = ($provDireitos[4] +
                     $provDireitos[5] +
                     $provDireitos[6] +
                     $provDireitos[7] +
                     $provDireitos[9] +
                     $provDireitos[10] +
                     $provDireitos[11] +
                     $provDireitos[12] ) /((ref_alterada[0]-ref_alterada[13])*ref_alterada[13]);
                     
                   $valor[14] =0;
                   $provDireitos[14] = ref_alterada[3]/((ref_alterada[0]-ref_alterada[14])*ref_alterada[14]);
                   
                   $valor[15] =0;
                   $provDireitos[15] = ref_alterada[8]/((ref_alterada[0]-ref_alterada[15])*ref_alterada[15]);
                 
                   $valor[16] = 0 ;
                   $provDireitos[16] = 0
                 
                   $valor[17] = 0 ;
                   $provDireitos[17] = $arrSum($provDireitos);

                   for (i = 0; i < destricao.length-1; i++){
                    $tabela.append(
                        "<tr>"+
                        "<th>"+ destricao[i]+"</th>" +
                        "<td>"+ ref_alterada[i]+"</td>"+
                        "<td>"+ $valor[i]+"</td>"+
                        "<td>"+ $provDireitos[i]+" </td>"
                        
                    );       
                }
                }
                $tabela.append(
                    
            '</tbody>'+ '<tfoot >'+ '<tr >'+  '<th>Total</th>'+  '<td></td>'+
                  '<td></td >'+
                  '<th >'+$provDireitos[17]+'</th>'+
                '</tr>'+
            '</tfoot>'
                );
            }
             
            function $arrSum(v){
                s = 0
                for(i = 0; i< v.length; i++){
                    s = s + v[i];
                }
                return s;
            }
            function bindEvents(){
                
                construirTabela();
                $btnAtul.addEventListener("click",function(){
                    $tabela.empty();
                    construirTabela();
                  
                });
                $btnAlterada.addEventListener("click",function(){
                    $tabela.empty();
                    construirTabela();

                });

            }
            bindEvents();

    };        
    simuladorACT();
});



















