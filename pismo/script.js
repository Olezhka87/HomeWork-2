// СНЕЖИНКИ
const snow = document.getElementById('snow');
for(let i=0;i<120;i++){
  const s=document.createElement('span');
  s.style.left=Math.random()*100+'vw';
  s.style.animationDuration=5+Math.random()*10+'s';
  s.style.opacity=Math.random();
  s.style.transform=`scale(${Math.random()+0.5})`;
  snow.appendChild(s);
}

// ТЕКСТ
const content = `Дорогой Дедушка Мороз,

Этот год был непростым: многое осталось в процессе — стройка дома, семейные заботы, проекты и планы.  
Мы часто уставали, сталкивались с трудностями, но не теряли надежды и радовались маленьким достижениям.  

В новом году хотелось бы больше завершённых дел и ощутимых результатов.  
Пусть хватит сил и энергии для семьи, дома и важных проектов,  
пусть будет больше смеха, тепла и радости в каждом дне,  
а маленькая доля волшебства и удачи напоминает, что мы движемся в правильном направлении.  

Спасибо, что всегда рядом, когда нужна вера и вдохновение.`;




const target = document.getElementById('text');
let i = 0;
function write(){
  if(i < content.length){
    target.textContent += content[i++];
    setTimeout(write, 60 + Math.random()*80);
  } else {
    document.getElementById('stamp').style.opacity = 1;
    document.getElementById('stamp').style.transform = 'scale(1) rotate(0deg)';
    document.getElementById('send').classList.add('show');
  }
}
write();

// КНОПКА
document.getElementById('send').addEventListener('click',()=>{
  const paper = document.getElementById('paper');
  const plane = document.getElementById('plane');

  paper.style.opacity = 0;
  plane.style.opacity = 1;
  plane.classList.add('fly-path');

  setTimeout(()=>{
    
  }, 1800);
});
