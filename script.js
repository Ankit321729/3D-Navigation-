const container=document.querySelector(".page-container");
const pages=document.querySelectorAll(".page");
const toggleBtn=document.querySelector(".togggle-btn");
const ul=document.querySelector(".nav-list");
const overlay=document.querySelector(".overlay");
const links=document.querySelectorAll(".links");

let pageIndex=0

toggleBtn.addEventListener('click',()=>{
    toggleBtn.classList.toggle('active')
    container.classList.toggle('active')
    ul.classList.toggle("show");
});

linksforEach((item,i)=>{
    item.addEventListener("click",()=>{
        nextpage(i);
    });
});
 
function nextpage(index){
    overlay.computedStyleMap.animation='slide is linear1';

    setTimeout(()=>{
        pages[pageIndex].classList.remove("active");
        pages[index].classList.add("active");
        pageIndex=index;
    }, 500);

    setTimeout(()=>{
        overlay.computedStyleMap.animation=null;
    },1000);
}