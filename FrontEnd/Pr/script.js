// Typing Effect
document.addEventListener("DOMContentLoaded", () => {
  const roles = ["Full Stack Developer","Frontend Engineer","Java Developer"];
  const typing = document.querySelector(".typing");
  let i=0,j=0,isDeleting=false;

  function type(){
    const word=roles[i];
    typing.textContent=isDeleting ? word.substring(0,j--) : word.substring(0,j++);
    if(!isDeleting && j===word.length){ isDeleting=true; setTimeout(type,1000); return; }
    if(isDeleting && j===0){ isDeleting=false; i=(i+1)%roles.length; }
    setTimeout(type,isDeleting?60:120);
  }
  type();
});

// Dark Mode
const toggle=document.getElementById("themeToggle");
if(localStorage.getItem("theme")==="dark"){
  document.body.classList.add("dark");
  toggle.textContent="☀️";
}
toggle.addEventListener("click",()=>{
  document.body.classList.toggle("dark");
  if(document.body.classList.contains("dark")){
    localStorage.setItem("theme","dark");
    toggle.textContent="☀️";
  } else {
    localStorage.setItem("theme","light");
    toggle.textContent="🌙";
  }
});

// Scroll Reveal
const reveals=document.querySelectorAll(".reveal");
window.addEventListener("scroll",()=>{
  reveals.forEach(el=>{
    if(el.getBoundingClientRect().top<window.innerHeight-100){
      el.style.opacity=1;
      el.style.transform="translateY(0)";
    }
  });
});

// Active Nav Highlight
const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".nav-link");
window.addEventListener("scroll",()=>{
  let current="";
  sections.forEach(sec=>{
    if(scrollY>=sec.offsetTop-150) current=sec.id;
  });
  navLinks.forEach(link=>{
    link.classList.remove("active");
    if(link.getAttribute("href")==="#"+current){
      link.classList.add("active");
    }
  });
});