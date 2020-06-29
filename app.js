const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const widthOutput = document.querySelector('#width');
    

    burger.addEventListener('click', () => {

        nav.classList.toggle('nav-active');
 
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



    //window.attachEvent('onresize', () => {
    /*window.addEventListener("resize", () => {
        const width = window.innerWidth|| document.documentElement.clientWidth 
        if (width > 100){
            
            
            console.log("width > 1024")
            
            //nav.classList.toggle('nav-active');
 
            //nav.classList.remove('nav-active');
            console.log(width);
            
        }

        console.log("RESIZE");
        
    });*/

}

navSlide();