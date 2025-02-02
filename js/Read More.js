    let l = document.querySelector(".more");
    let s= document.querySelector(".sec");
    let p = document.querySelectorAll(".more");
    let btn = document.querySelectorAll(".read-less");
    let m = document.querySelector(".adjust");
    let m2 = document.querySelector(".adjust2");  
  
    function toggleReadMore(){
    if(l.style.display == "inline"){
        for (var i=0; i<p.length; i++) {
            p[i].style.display = "none";
        };
        
        for (var i=0; i<btn.length; i++){
            btn[i].textContent = "Read More";
        };

        m2.style.marginTop = "6.5rem";

    }
    else{
        for (var i=0; i < p.length; i++) {  
            p[i].style.display = "inline";
          };
        
        for (var i=0; i<btn.length; i++){
            btn[i].textContent = "Read Less";
        };

        m2.style.marginTop = "11.5rem";
}

}



  