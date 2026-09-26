const ids=["home","about","gameplay","world","media","contact"];
const links=[...document.querySelectorAll(".hotspots a")];
const sections=ids.map(id=>document.getElementById(id)).filter(Boolean);
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const i=ids.indexOf(entry.target.id);
      links.forEach((l,n)=>l.classList.toggle("active",n===i));
    }
  });
},{rootMargin:"-40% 0px -50% 0px"});
sections.forEach(s=>observer.observe(s));
