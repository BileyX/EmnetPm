    let l = document.querySelector(".more");
    let s= document.querySelector(".sec");
    let p = document.querySelectorAll(".more");
    let btn = document.querySelector(".read-less");
    const y = btn.getBoundingClientRect().top + window.pageYOffset;
    const x = s.getBoundingClientRect().top + window.pageYOffset;  
  
    function toggleReadMore(){
    if(l.style.display == "inline"){
        for (var i=0; i<p.length; i++) {
            p[i].style.display = "none";
        };
        btn.textContent = "Read More";
        window.scrollTo({
        top: x,
        behavior: 'smooth'
        });
    
    }
    else{
        for (var i=0; i < p.length; i++) {  
            p[i].style.display = "inline";
          };
        btn.textContent = "Read Less";
        window.scrollTo({
            top: y-150,
            behavior: 'smooth'
        });
}

}



  