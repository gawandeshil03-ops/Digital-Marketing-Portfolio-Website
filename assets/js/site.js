const root=document.documentElement;
const navToggle=document.querySelector(".nav-toggle"),navLinks=document.querySelector(".nav-links"),themeToggle=document.querySelector(".theme-toggle");
const saved=localStorage.getItem("shil-dm-theme"); if(saved) root.dataset.theme=saved;
themeToggle.addEventListener("click",()=>{const next=root.dataset.theme==="dark"?"light":"dark";root.dataset.theme=next;localStorage.setItem("shil-dm-theme",next)});
navToggle.addEventListener("click",()=>{const open=navLinks.classList.toggle("open");navToggle.setAttribute("aria-expanded",String(open))});
navLinks.addEventListener("click",e=>{if(e.target.matches("a")){navLinks.classList.remove("open");navToggle.setAttribute("aria-expanded","false")}});
document.getElementById("year").textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
