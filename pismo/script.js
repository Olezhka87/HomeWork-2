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

Этот год был плотным. Строил дом, тащил быт, сидел ночами за курсом, делал домашку и кайфовал, когда куратор отвечал.  
Радовался простым вещам: тихим вечерам, моментам с детьми и ощущениям, что всё постепенно складывается.

Мои пожелания на следующий год:  
— больше радостных и ярких моментов;  
— энергия и бодрость, чтобы успевать всё важное;  
— форма и здоровье, чтобы чувствовать себя хорошо;  
— вдохновение и мотивация для развития и проектов;  
— уют и спокойствие дома;  
— немного удачи и ощущения, что всё идёт правильно.`;





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
