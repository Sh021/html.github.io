const btns = document.getElementsByClassName('btn') ; 
const body = document.getElementById('bdy') ;
const checkbtn = document.getElementById ('check') ; 
const movieName = document.getElementById('select') ;
const movies = document.querySelectorAll('.movies') ;  
const displayAmount  = document.getElementById('amount') ; 
const seat = document.getElementById('seatNumber') ; 
const dp = document.getElementById('mymovie') ; 
class UI { 
    
     static colorChange(singleButton) {  
            singleButton.addEventListener('click' , function(){
                
                if ( singleButton.style.backgroundColor == 'blue'){ 
                    singleButton.style.backgroundColor = 'violet' ;
                }
                else if ( singleButton.classList.contains('booked')){ 
                     
                }
                else { 
                    singleButton.style.backgroundColor  = 'blue' ;
                }
            })
     }
    //////////////////////////////////////////////////////////
 static check ( ) { 

    var count = 0 ; 
    for(let i = 0 ; i < btns.length ; i ++ ) {   
        const singleButton = btns [ i ]  ;
        if ( singleButton.style.backgroundColor == 'blue') { 
            count ++  ; 
        }
        
        
    }
    return count   ; 
    }
}; 
    //////////////////////////////////////////////////////////////
  
 
for(let i = 0 ; i < btns.length ; i ++ ) { 
     
    const singleButton = btns [ i ]  ; 
    UI.colorChange(singleButton);
    
  
    
}
 
    /////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////
checkbtn.addEventListener('click' ,function ( ) { 
    let amt = 125 ; 
    let total = UI.check()*amt ; 
    displayAmount.innerHTML =`Total Amount is ₹${total}` ; 
    let nums = UI.check() ; 

    seat.innerHTML =`Total Seats are ${nums}` ; 
}) ; 

 ///////////////////////////////////////////////////////////////////
 ///////////////////////////////////////////////////////////////////
 for ( let i = 0 ; i < 3 ; i++ ) { 
    movies [ i ].addEventListener('click' , function ( ) { 
        if ( i == 0 ) { 
            movieName.innerHTML = "Doctor G" ; 
            dp.innerHTML = "Doctor G  (Rs.125)" ; 
        }
        else if ( i ==1 ) { 
            movieName.innerHTML = "Darlings" ;
            dp.innerHTML = "Darlings  (Rs.125)" ;  
        }
        else { 
            movieName.innerHTML = "Babe Bhangra Paunde ne " ; 
            dp.innerHTML = "Babe Bhangra Paunde ne  (Rs.125)" ; 
        }
    })
}
/////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////