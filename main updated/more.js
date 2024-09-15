    let l = document.querySelector(".more");
    let s= document.querySelector(".sec");
    let p = document.querySelectorAll(".more");
    let btn = document.querySelectorAll(".read-less");
    let m = document.querySelector(".adjust");
    let m2 = document.querySelector(".adjust2");
    const y = btn.getBoundingClientRect().top + window.pageYOffset;
    const x = s.getBoundingClientRect().top + window.pageYOffset;  
  
    function toggleReadMore(){
    if(l.style.display == "inline"){
        for (var i=0; i<p.length; i++) {
            p[i].style.display = "none";
        };
        
        for (var i=0; i<btn.length; i++){
            btn[i].textContent = "Read More";
        };

        m2.style.marginTop = "6.5rem";


        window.scrollTo({
            top: x,
            behavior: 'smooth'
            });
    }
    else{
        for (var i=0; i < p.length; i++) {  
            p[i].style.display = "inline";
          };
        
        for (var i=0; i<btn.length; i++){
            btn[i].textContent = "Read Less";
        };

        m2.style.marginTop = "12rem"
        window.scrollTo({
            top: y-150,
            behavior: 'smooth'
        });
}

}



  
