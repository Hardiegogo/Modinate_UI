const stars=document.querySelectorAll('.changeable');
stars.forEach((star,index)=>star.addEventListener('click',()=>{
    for(let i=0;i<=index;i++){    
        stars[i].classList.remove('bxs-star')
    }
    for(let i=0;i<=index;i++){    
        stars[i].classList.toggle('bxs-star')
    }
}))

