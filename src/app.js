const c = document.getElementById("noise");
const ctx = c.getContext("2d");
const imgData = ctx.createImageData(c.width, c.height);
const data = imgData.data;

for (let i = 0; i < data.length; i += 4) {
const v = 20 + Math.random() * 10; // brightness range for subtle noise
data[i] = v;     // R
data[i+1] = v;   // G
data[i+2] = v;   // B
data[i+3] = 255; // A
}

ctx.putImageData(imgData, 0, 0);

const url = c.toDataURL();
document.body.style.backgroundColor = "#111";
document.body.style.backgroundImage = `url(${url})`;
document.body.style.backgroundRepeat = "repeat";




















gsap.defaults({
  ease: "power2.out",
  duration: 3,
});

 gsap.fromTo( ".box",{ x: -300, fill: 'blue'}, { x: 500, fill: 'green'}); 