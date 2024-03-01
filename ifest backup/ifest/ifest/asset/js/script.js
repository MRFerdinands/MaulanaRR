const btnModalProfile = document.querySelectorAll('#btnModalProfile');
const modalProfile = document.querySelectorAll('#modalProfile');

Array.from(btnModalProfile).forEach(element => {
    element.addEventListener('click', () => {
        Array.from(modalProfile).forEach(e =>{
            if(!e.classList.contains('activ')){
                e.classList.add('activ');
                e.style.display = 'block';
            } else {
                e.classList.remove('activ');
                e.style.display = 'none';
            }
        })  
    });
    
});



const btnSuka = document.querySelectorAll('#btnSuka');

Array.from(btnSuka).forEach(e =>{ 
e.addEventListener('click', ()=> {
    if(e.classList.contains('bi-heart')){
        e.classList.replace('bi-heart', 'bi-heart-fill');
        e.style.color = 'red';
    } else {
        e.classList.replace('bi-heart-fill', 'bi-heart'); 
        e.style.color = 'black';
    }
})
})
