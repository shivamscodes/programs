const contain = document.querySelector(".container");

window.addEventListener("mousemove",(event)=>{
  contain.innerHTML = `
  <div class="mouse-event">
            ${event.clientX}
            <h4>mouse X position(px)</h4>
        </div>
        <div class="mouse-event">
            ${event.clientY}
            <h4>mouse Y position(px)</h4>
        </div>`
})