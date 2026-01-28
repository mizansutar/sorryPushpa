// SHOW HIDDEN MESSAGE
function showMsg(){
  document.getElementById("hiddenText").style.display="block";
}

// LOTUS FALLING ANIMATION
const canvas = document.getElementById("lotusCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let lotuses = [];

function Lotus(){
  this.x = Math.random() * canvas.width;
  this.y = -20;
  this.size = Math.random() * 8 + 10;
  this.speed = Math.random() * 1 + 0.5;
  this.angle = Math.random() * Math.PI * 2;
  this.spin = (Math.random() - 0.5) * 0.02;
}

function drawLotus(l){
  ctx.save();
  ctx.translate(l.x, l.y);
  ctx.rotate(l.angle);
  ctx.fillStyle = "#ffb6c1";

  for(let i=0;i<6;i++){
    ctx.rotate(Math.PI/3);
    ctx.beginPath();
    ctx.ellipse(0, l.size/2, l.size/3, l.size, 0, 0, Math.PI*2);
    ctx.fill();
  }

  ctx.restore();
}

function animateLotus(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  if(Math.random() < 0.05){
    lotuses.push(new Lotus());
  }

  lotuses.forEach((l,i)=>{
    l.y += l.speed;
    l.angle += l.spin;
    drawLotus(l);

    if(l.y > canvas.height + 30){
      lotuses.splice(i,1);
    }
  });

  requestAnimationFrame(animateLotus);
}

animateLotus();
