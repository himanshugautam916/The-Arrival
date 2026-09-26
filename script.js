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

// Game trailer modal
const trailerButton = document.getElementById("trailerButton");
const trailerModal = document.getElementById("trailerModal");
const trailerClose = document.getElementById("trailerClose");
const trailerBackdrop = document.getElementById("trailerBackdrop");
const trailerVideo = document.getElementById("trailerVideo");
const trailerMessage = document.getElementById("trailerMessage");

function openTrailer(){
  trailerModal.classList.add("open");
  trailerModal.setAttribute("aria-hidden","false");
  document.body.classList.add("trailer-open");

  // If the video file has not been added yet, show a clear message.
  trailerVideo.play().catch(()=>{
    // Browser may require user interaction; controls remain available.
  });
}

function closeTrailer(){
  trailerVideo.pause();
  trailerVideo.currentTime = 0;
  trailerModal.classList.remove("open");
  trailerModal.setAttribute("aria-hidden","true");
  document.body.classList.remove("trailer-open");
}

trailerButton?.addEventListener("click", openTrailer);
trailerClose?.addEventListener("click", closeTrailer);
trailerBackdrop?.addEventListener("click", closeTrailer);

document.addEventListener("keydown", (event)=>{
  if(event.key === "Escape" && trailerModal.classList.contains("open")){
    closeTrailer();
  }
});

trailerVideo?.addEventListener("error", ()=>{
  trailerMessage.classList.add("show");
});
