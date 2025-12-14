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

Этот год я прожил плотно. Строил дом, тащил быт, не сливался, когда было тяжело.  
Ночами сидел за курсом, делал домашки и реально кайфовал, когда куратор отвечал — было ощущение, что я расту и двигаюсь куда надо.  
Радовался простым вещам: тишине вечером, моментам с детьми, когда всё наконец складывалось.

В новом году я хочу больше жизни и кайфа от неё.  
Хочу быть в форме, похудеть и чувствовать себя бодрым.  
Хочу энергию, ясную голову и удовольствие от того, что делаю.  
Хочу, чтобы дома было тепло и спокойно, а в делах — движение и результат.  
И если можно, подкинь немного удачи — не чудо, а ощущение, что всё идёт как надо.`;




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
