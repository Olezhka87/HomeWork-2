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

В этом году я много делал: строил дом, занимался семьёй, решал повседневные задачи — порой уставал, порой всё шло медленно, но я шёл шаг за шагом.  
Я сидел ночами за курсом, учился, делал домашку и радовался, когда куратор отвечал на отчёты. Маленькие моменты понимания и обратной связи давали силы двигаться дальше.  
Радовался уюту, простым радостям и тому, что постепенно всё складывается.

В новом году пусть будет больше радостных моментов, вдохновения и маленьких успехов,  
чтобы хватало сил на семью, дом, проекты и всё, что важно.  
Пусть смех, уют, внимание к деталям и тепло дома делают каждый день праздником,  
а немного удачи и волшебства напоминают: я движусь в правильном направлении.  
И пусть в жизни будет больше ярких моментов, маленьких радостей и простых счастий, которые делают обычный день особенным.`;





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
