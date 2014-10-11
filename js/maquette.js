$(document).ready(function(){
        // variable verifiant la  taille de l ecran  
        var w = $(window).width();

        //action au  click
        $('.button-navi-m').on('click', function() { 
           //si on est sur un ecran mobile        
           if(w < 640){

              if( $('#push-mobile').css('display') ==  'none' ){
           $('#push-content').animate({ left : 184 });
    
            $('#push-mobile').slideDown(3000);             
          }else {    

            $('#push-mobile').slideUp(400);

            $('#push-content').animate({ left : 0 }, 2000);
               } 
             
          }  // fin condition portable


          else {   // toutes  les  autres  tailles  d ecran

              if( $('#hidden-navi').css('display') ==  'none' ){//le bouton + le menu se poussent
                      $('.button-navi-m').animate({ left : 197 });
                      $('#hidden-navi').animate({ left : 172 });


                       //le menu se deroule

                      $('#hidden-navi').slideDown(2000);
              
              }else {  
              //le menu s enroule 
              $('#hidden-navi').slideUp(500);
              //retour position normale bouton + menu

             $('#hidden-navi').animate({ left : 0},100);
              $('.button-navi-m').animate({ left : -20 },3000);
               } 
 

              } //fin du  else
         }); //fin de la condition du click


 }); 
            
