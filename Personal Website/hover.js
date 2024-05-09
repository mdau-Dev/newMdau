

// window.addEventListener('load',()=>{
//     const loader=document.querySelector('.loaderWrapper');
//     loader.classList.add('hide');
// })

console.log('Mdau')
const imageParent=document.querySelector('.bigger');
const image=document.querySelector('.myImage');
imageParent.addEventListener('mouseover',(e)=>{
    image.src=`url(${images/smile.jpg})`;
})