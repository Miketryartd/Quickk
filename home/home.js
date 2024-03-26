
function mobileMenu(){
    const underSectionL = document.getElementById('underSectionL');
    const footer = document.querySelector('.footer');
    if (underSectionL.style.display === 'none'){
        footer.style.display = 'block';
        
        underSectionL.style.display = 'block';
    } else {
        footer.style.display = 'none';
        underSectionL.style.display = 'none';
    }
}

function nightMode() {
    const DATABG = document.querySelectorAll('[data-value="black"]');
    const button = document.getElementById('nightMode');
    const DATAWBG = document.querySelectorAll('[data-value="white"]');
    const DATAMBG = document.querySelectorAll('[data-value="mid"]');

    if (button.textContent.trim() === 'Dark Mode') {
        button.innerHTML = '<i class="bx bx-sun"></i> Bright Mode';
        DATABG.forEach(elements => {
         
            elements.style.backgroundColor = ' rgb(23, 23, 23)';
          
        });

        DATAWBG.forEach(colors =>{
        
            colors.style.color = 'white';
        })

        DATAMBG.forEach(colors =>{
            colors.style.backgroundColor = 'rgb(36, 36, 36)';
        })
    } else {
        button.innerHTML = '<i class="bx bx-moon"></i> Dark Mode';
        DATABG.forEach(elements => {
           
            elements.style.backgroundColor = '';
        });

        DATAWBG.forEach(colors =>{
      
            colors.style.color = '';
        })

        
        DATAMBG.forEach(colors =>{
          
            colors.style.backgroundColor = '';
           
        })
    }
}
