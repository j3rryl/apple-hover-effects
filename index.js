const zoom = document.querySelector('.zoom');
const zoom2 = document.querySelector('.zoom2');
const wrap = document.querySelector("#wrap");
const minZoom = 1;
const maxZoom = 2;
const element = document.getElementById("wrap");
let pos1 = element.offsetTop;
let pos2 = element.offsetLeft;
console.log(pos1)
console.log(pos2)

var speed = 10, // the box will move by 10 pixels on every step
    direction = 1; // 1 moves in the positive direction; -1 vice versa
    var boxElement = document.getElementById('zoom2');



// const obs = new IntersectionObserver(entries=>{
//   console.log(entries)
// })
// obs.observe(zoom2)
window.scrollY + document.querySelector('#wrap').getBoundingClientRect().top // Y

window.scrollX + document.querySelector('#wrap').getBoundingClientRect().left // X

addEventListener('scroll', e => {

  // zoom2.scroll({
  //   top: 10000,



  //   left: 10000,
  //   behavior: 'smooth'
  // });
	const vh = window.innerHeight / 100;
  const scrollTop = document.documentElement.scrollTop;
  const start = 100 * vh;
  const stop = 200 * vh;
  if (scrollTop > pos1 && scrollTop < stop) {
	  const scale = Math.max(1 - (scrollTop - start) / 500, 0.6);
    zoom.style.transform = `scale(${scale})`
    const scale2 = Math.max(2 - (scrollTop - start) / 500, 0.5);

    // zoom2.style.transform = `scale(${scale2})`
    zoom2.style.visibility='visible'
    
    var boxTop = boxElement.offsetTop
    console.log(boxTop)

// // When left side of the box goes too far - change direction:
// if (boxLeftPos < 0) {
//     direction = 1;
// }
// // Recalculate position:
boxElement.style.top = (boxTop + speed) + 'px';
  } else {
    boxElement.style.top = 100 + 'px';

  }
})