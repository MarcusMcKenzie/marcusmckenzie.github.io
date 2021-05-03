const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const widthOutput = document.querySelector('#width');
    

    burger.addEventListener('click', () => {

        nav.classList.toggle('nav-active');
        nav.classList.add('transition');
 
        navLinks.forEach((link, index) => {


            if (link.style.animation){

                link.style.animation = `navLinkFade .5s ease forwards ${index / 7 + .3}s`;

            } else {

                link.style.animation = `navLinkFade .5s ease forwards ${index / -7 + .3}s`;
            
            
            }
 
        
        });

        burger.classList.toggle('toggle');
    });



    nav.addEventListener('click', () => {

        nav.classList.toggle('nav-active');
        

        navLinks.forEach((link, index) => {


            link.style.animation = `navLinkFade .5s ease forwards ${index / 7 + .1}s`;

        });


        burger.classList.toggle('toggle');
    });





    window.addEventListener("resize", () => {
        
        const width = window.innerWidth|| document.documentElement.clientWidth 
        
        if (width > 1024){
            
            console.log();
            console.log("RESIZE");
            console.log("width > 1024");

            console.log(nav.classList)
            
            //nav.classList.toggle('nav-active');
 
            nav.classList.remove('transition');
            
            console.log(width);

            console.log(nav.classList)
            
        }

        
        
    }, false);

}

navSlide();