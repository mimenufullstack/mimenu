import React from 'react';

const Calendario = () => {
    var dates="";
    let fecha=new Date();     
               
               var dia1="";var dia2="";var dia3="";var dia4="";var dia5="";
               var numdia="";
               let today = new Date();
               
/*
 hay que ignorar los dias 0 y 6 nada mas
0 = "Sunday";
1 = "Monday";
2 = "Tuesday";
3 = "Wednesday";
4 = "Thursday";
5 = "Friday";
6 = "Saturday";

*/
            var showdias = new Array();
            var contador=0;
            while (contador < 5)  
            {
                let date=today.getDate() + 1 + "/"+ parseInt(today.getMonth()+1) +"";
                today.setDate(today.getDate() + 1);
                numdia="" + today.getDay();
                if ( numdia!=="0" && numdia!=="6") {
                    showdias[contador] = "" + date;
                    contador = contador + 1;
                }
            
            }
            dia1=""+showdias[0];
            dia2=""+showdias[1];
            dia3=""+showdias[2];
            dia4=""+showdias[3];
            dia5=""+showdias[4];
            
/*
               today.setDate(today.getDate() + 1);
               date=today.getDate()  + "/"+ parseInt(today.getMonth()+1) +"";
               numdia="" + today.getDay();
               if ( numdia!=="0" && numdia!=="6") {
                dia2 = "" + date;
               }
               
               today.setDate(today.getDate() + 1);
               date=today.getDate() + "/"+ parseInt(today.getMonth()+1) +"";
               numdia="" + today.getDay();
               if ( numdia!=="0" && numdia!=="6") {
                dia3 = "" + date;
               }

               today.setDate(today.getDate() + 1);
               date=today.getDate()  + "/"+ parseInt(today.getMonth()+1) +"";
               numdia="" + today.getDay();
               if ( numdia!=="0" && numdia!=="6") {
                dia4 = "" + date;
               }
               
               today.setDate(today.getDate() + 1);
               date=today.getDate() + "/"+ parseInt(today.getMonth()+1) +"";
               numdia="" + today.getDay();
               if ( numdia!=="0" && numdia!=="6") {
                dia5 = "" + date;
               }
*/   
               
            //console.log("" + dates);
return (
<span>
<span className='Home-mar23'>{dia1}</span>
<span className='Home-mar24'>{dia2}</span>
<span className='Home-mar25'>{dia3}</span>
<span className='Home-mar26'>{dia4}</span>
<span className='Home-mar27'>{dia5}</span>
</span>
);
}
export default Calendario;


/*
Metodo de retornar un formulario con valores

<input
type="text"
className="player-input"
placeholder="Enter a player name"
onChange={(e) => handleChange(e)}
value={playerName} />
<button type="submit" className="submit-button">Add player</button>
*/