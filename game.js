const phases=[
 {key:"N",name:"Naturais",place:"🏛️ Templo da Contagem",medal:"🥉",award:"Medalha da Contagem"},
 {key:"Z",name:"Inteiros",place:"🧭 Caverna dos Inteiros",medal:"🧭",award:"Medalha dos Inteiros"},
 {key:"Q",name:"Racionais",place:"📜 Biblioteca das Frações",medal:"📜",award:"Medalha das Frações"},
 {key:"I",name:"Irracionais",place:"💎 Templo de √2",medal:"💎",award:"Medalha dos Irracionais"},
 {key:"R",name:"Reais",place:"🏆 Santuário dos Reais",medal:"🏆",award:"Medalha dos Reais"}
];

const questions=[
{p:0,q:"Os números naturais surgiram historicamente ligados principalmente a qual necessidade?",o:["Contar e registrar quantidades","Resolver equações com números negativos","Calcular raízes irracionais","Representar apenas ângulos"],a:0,h:"Pense nas primeiras atividades humanas envolvendo rebanhos, objetos e colheitas.",e:"A contagem de objetos, animais e bens está entre as necessidades fundamentais associadas ao desenvolvimento dos sistemas de numeração."},
{p:0,q:"Qual destes números é natural?",o:["−4","2/3","7","√2"],a:2,h:"Procure um número inteiro não negativo usado diretamente em contagens.",e:"7 é um número natural. Nesta aventura usamos N = {0, 1, 2, 3, ...}."},
{p:0,q:"Qual civilização antiga é especialmente conhecida por utilizar um sistema de numeração sexagesimal, de base 60?",o:["Babilônica","Romana","Maia","Inca"],a:0,h:"A influência desse sistema ainda aparece na medição do tempo e dos ângulos.",e:"Os babilônios utilizaram um sistema sexagesimal. A divisão da hora em 60 minutos preserva uma conhecida herança dessa tradição."},
{p:0,q:"No sistema de numeração romano, qual símbolo representa 10?",o:["V","X","L","C"],a:1,h:"Pense na sequência I, V, X...",e:"X representa 10 no sistema romano; V representa 5, L representa 50 e C representa 100."},
{p:0,q:"Considerando N = {0,1,2,3,...}, qual afirmação é verdadeira?",o:["Todo natural é inteiro","Todo inteiro é natural","Todo irracional é natural","Nenhum natural é racional"],a:0,h:"Observe a relação de inclusão entre N e Z.",e:"Todo número natural também é inteiro, portanto N ⊂ Z."},
{p:0,q:"Qual sequência contém somente números naturais?",o:["0, 2, 5, 12","−1, 0, 3, 8","1/2, 2, 3, 4","√2, 1, 2, 3"],a:0,h:"Verifique cada elemento e elimine as sequências com negativos, frações não inteiras ou irracionais.",e:"0, 2, 5 e 12 pertencem a N na convenção adotada pelo jogo."},

{p:1,q:"Qual situação ajudou a tornar úteis os números negativos?",o:["Representar dívidas e valores abaixo de uma referência","Contar somente objetos existentes","Escrever apenas frações unitárias","Medir apenas números positivos"],a:0,h:"Pense em saldos, temperaturas e posições abaixo de zero.",e:"Números negativos permitem representar dívidas, temperaturas abaixo de zero e outras grandezas orientadas."},
{p:1,q:"Qual destes números pertence a Z, mas não pertence a N?",o:["5","0","−8","3/4"],a:2,h:"Procure um inteiro negativo.",e:"−8 é inteiro e não é natural. Assim, ele pertence a Z e está fora de N."},
{p:1,q:"Qual matemático indiano do século VII apresentou regras para cálculos envolvendo zero e números negativos?",o:["Brahmagupta","Euclides","Fibonacci","Descartes"],a:0,h:"O nome procurado está ligado à matemática indiana e ao século VII.",e:"Brahmagupta descreveu regras aritméticas envolvendo zero, números positivos e negativos em sua obra do século VII."},
{p:1,q:"Qual é o oposto aditivo de −12?",o:["−24","0","12","1/12"],a:2,h:"O número e seu oposto somam zero.",e:"12 é o oposto de −12, pois −12 + 12 = 0."},
{p:1,q:"Qual sequência contém apenas números inteiros?",o:["−3, 0, 8, 15","−2, 1/2, 3, 4","√2, −1, 0, 5","π, 2, 4, 6"],a:0,h:"Inteiros não têm parte fracionária.",e:"−3, 0, 8 e 15 são todos números inteiros."},
{p:1,q:"Qual relação entre os conjuntos N e Z está correta?",o:["Z ⊂ N","N ⊂ Z","N = Z","N e Z não possuem elementos em comum"],a:1,h:"Todo número usado na contagem também pode ser visto como inteiro.",e:"N está contido em Z: todo natural é inteiro, mas existem inteiros negativos que não são naturais."},

{p:2,q:"Qual destas expressões representa um número racional?",o:["√2","π","3/4","√7"],a:2,h:"Um racional pode ser escrito como a/b, com a e b inteiros e b ≠ 0.",e:"3/4 já está escrito como razão de dois inteiros, portanto é racional."},
{p:2,q:"No Egito antigo, muitas frações eram representadas como somas de frações com numerador 1. Como elas são frequentemente chamadas?",o:["Frações unitárias","Frações complexas","Frações irracionais","Frações negativas"],a:0,h:"O numerador dessas frações dá a pista para o nome.",e:"Frações de numerador 1 são chamadas frações unitárias e tiveram papel importante na matemática egípcia antiga."},
{p:2,q:"Qual decimal é racional?",o:["0,75","π","√3","√5"],a:0,h:"Um decimal finito pode ser transformado em uma fração de inteiros.",e:"0,75 = 75/100 = 3/4, logo é racional."},
{p:2,q:"Qual fração é equivalente a 0,5?",o:["1/2","1/3","2/5","3/5"],a:0,h:"Pense em metade de uma unidade.",e:"1/2 = 0,5, portanto as duas escritas representam o mesmo número racional."},
{p:2,q:"Qual afirmação sobre os inteiros e os racionais é verdadeira?",o:["Todo inteiro é racional","Nenhum inteiro é racional","Todo racional é inteiro","Q está contido em N"],a:0,h:"Tente escrever um inteiro n como uma fração com denominador 1.",e:"Todo inteiro n pode ser escrito como n/1. Por isso, Z ⊂ Q."},
{p:2,q:"O número −2,5 pertence a qual conjunto entre as opções?",o:["Somente N","Q","I","Somente Z"],a:1,h:"Converta −2,5 em uma razão de inteiros.",e:"−2,5 = −25/10 = −5/2, portanto é um número racional."},

{p:3,q:"Qual destes números é irracional?",o:["0,25","7/8","√2","−4"],a:2,h:"Procure uma raiz que não resulta em número racional.",e:"√2 é irracional: não pode ser escrito como razão entre dois inteiros."},
{p:3,q:"A descoberta da irracionalidade de √2 é tradicionalmente associada a qual escola da matemática grega?",o:["Pitagórica","Alexandrina moderna","Cartesiana","Gaussiana"],a:0,h:"Pense no grupo antigo ligado ao famoso teorema sobre triângulos retângulos.",e:"A tradição histórica associa a descoberta da incomensurabilidade de √2 aos pitagóricos."},
{p:3,q:"Qual destes números NÃO é irracional?",o:["π","√2","√9","√5"],a:2,h:"Calcule a raiz que é um quadrado perfeito.",e:"√9 = 3, que é natural, inteiro e racional. Portanto, não é irracional."},
{p:3,q:"Arquimedes ficou conhecido, entre outras contribuições, por obter aproximações de qual constante?",o:["π","√2 apenas","Número de ouro apenas","Zero"],a:0,h:"Pense na relação entre a circunferência e seu diâmetro.",e:"Arquimedes obteve limites e aproximações notáveis para π usando polígonos inscritos e circunscritos."},
{p:3,q:"Quem popularizou o uso do símbolo π no século XVIII após ele ter sido usado anteriormente por William Jones?",o:["Leonhard Euler","Isaac Newton","René Descartes","Euclides"],a:0,h:"Foi um matemático suíço extremamente produtivo do século XVIII.",e:"William Jones usou π em 1706, e Leonhard Euler ajudou a popularizar a notação no século XVIII."},
{p:3,q:"Qual característica é compatível com a representação decimal de um número irracional?",o:["É infinita e não periódica","É sempre inteira","É sempre finita","É sempre uma dízima periódica"],a:0,h:"Compare com os decimais finitos e periódicos dos racionais.",e:"A expansão decimal de um irracional é infinita e não periódica."},

{p:4,q:"Qual conjunto reúne números racionais e irracionais?",o:["Naturais","Inteiros","Reais","Somente racionais"],a:2,h:"É o conjunto representado por R no mapa da aventura.",e:"Os números reais são formados pelos números racionais e irracionais."},
{p:4,q:"Qual cadeia de inclusões está correta?",o:["N ⊂ Z ⊂ Q ⊂ R","R ⊂ Q ⊂ Z ⊂ N","Q ⊂ N ⊂ Z ⊂ R","Z ⊂ R ⊂ N ⊂ Q"],a:0,h:"Comece pelo conjunto mais restrito usado na contagem.",e:"A inclusão correta é N ⊂ Z ⊂ Q ⊂ R. Os irracionais também pertencem a R, mas não a Q."},
{p:4,q:"Qual número é real e irracional?",o:["−10","2/5","π","0"],a:2,h:"Todo irracional é real; procure a constante associada à circunferência.",e:"π é irracional e, como todo irracional, pertence ao conjunto dos números reais."},
{p:4,q:"Na reta real, qual afirmação é correta?",o:["Cada número real corresponde a um ponto da reta","Somente os naturais aparecem na reta","Os irracionais não podem ser localizados","Números negativos não são reais"],a:0,h:"A reta é uma representação geométrica de todo o conjunto R.",e:"A reta real representa geometricamente os números reais, incluindo racionais, irracionais, positivos, negativos e zero."},
{p:4,q:"O número √16 pertence a quais conjuntos entre N, Z, Q e R?",o:["Apenas R","Q e R apenas","N, Z, Q e R","Apenas I"],a:2,h:"Primeiro calcule √16.",e:"√16 = 4. Assim, 4 pertence simultaneamente a N, Z, Q e R."},
{p:4,q:"Qual classificação está correta?",o:["−7 é inteiro, racional e real","1/3 é inteiro e natural","√2 é racional","π é inteiro"],a:0,h:"Verifique cada afirmação usando as inclusões do mapa.",e:"−7 ∈ Z; todo inteiro é racional e todo racional é real. Logo −7 também pertence a Q e R."}
];

let index=0, score=0, lives=3, hits=0, answered=false, player="", earned=[false,false,false,false,false], phaseHits=[0,0,0,0,0], gameOver=false;

function startGame(){
 player=document.getElementById("playerName").value.trim()||"Explorador(a)";
 document.getElementById("start").classList.remove("active");
 document.getElementById("game").classList.add("active");
 renderMap();renderMedals();loadQuestion();animate("walk",900);
}
function renderMap(){
 const current=questions[Math.min(index,questions.length-1)].p;
 const m=document.getElementById("mapline");m.innerHTML="";
 phases.forEach((p,i)=>{
  const n=document.createElement("div"); n.className="node "+(i<current||earned[i]?"done ":i===current?"current unlocked ":"");
  if(i<=current||earned[i])n.classList.add("unlocked");
  n.innerHTML=`<div class="symbol">${p.key}</div><small>${p.name}</small><div>${earned[i]?"✓":i===current?"●":"🔒"}</div>`;
  m.appendChild(n); if(i<4){const path=document.createElement("div");path.className="path";path.textContent="➜";m.appendChild(path)}
 });
}
function renderMedals(){document.getElementById("medals").innerHTML=phases.map((p,i)=>`<span class="medal ${earned[i]?"earned":""}" title="${p.award}">${p.medal} ${earned[i]?p.key:""}</span>`).join("")}
function loadQuestion(){
 answered=false;
 const x=questions[index], p=phases[x.p];
 document.getElementById("stageName").textContent=`FASE ${x.p+1} — ${p.place}`;
 document.getElementById("phaseLabel").textContent=`${p.key} — ${p.name}`;
 document.getElementById("questionCount").textContent=`Questão ${index+1} de 30`;
 document.getElementById("question").textContent=x.q;
 document.getElementById("speech").textContent=index%6===0?`Chegamos a ${p.place}! Encontre as seis pistas desta fase.`:"Observe as pistas e escolha com atenção!";
 document.getElementById("feedback").className="feedback";document.getElementById("feedback").innerHTML="";
 document.getElementById("hintBtn").disabled=false;document.getElementById("nextBtn").style.display="none";
 document.getElementById("bar").style.width=((index)/30*100)+"%";
 const a=document.getElementById("answers");a.innerHTML="";
 x.o.forEach((opt,i)=>{const b=document.createElement("button");b.className="answer";b.innerHTML=`<b>${"ABCD"[i]})</b> ${opt}`;b.onclick=()=>choose(i,b);a.appendChild(b)});
 updateHud();renderMap();renderMedals();
}
function choose(choice,button){
 if(answered)return;answered=true;
 const x=questions[index],buttons=[...document.querySelectorAll(".answer")];
 buttons.forEach(b=>b.disabled=true);buttons[x.a].classList.add("correct");
 const fb=document.getElementById("feedback");fb.classList.add("show");
 if(choice===x.a){
  score+=100;hits++;phaseHits[x.p]++;button.classList.add("correct");
  document.getElementById("speech").textContent="Excelente, explorador! Você encontrou uma pista! ⭐";
  fb.innerHTML=`<b>✅ Excelente! +100 pontos.</b><br>${x.e}`;animate("celebrate",1800);
 }else{
  lives--;button.classList.add("wrong");
  document.getElementById("speech").textContent="Quase! Vamos aprender com esta pista.";
  fb.innerHTML=`<b>❌ A resposta correta é ${"ABCD"[x.a]}) ${x.o[x.a]}.</b><br>${x.e}`;animate("wrong",900);
 }
 updateHud();document.getElementById("hintBtn").disabled=true;document.getElementById("nextBtn").style.display="inline-block";
 if(lives<=0){gameOver=true;document.getElementById("nextBtn").textContent="Ver resultado ➜"}else document.getElementById("nextBtn").textContent="Continuar ➜";
}
function showHint(){
 if(answered)return;
 const x=questions[index],fb=document.getElementById("feedback");fb.classList.add("show");fb.innerHTML=`<b>💡 Dica do Pi:</b> ${x.h}`;
 document.getElementById("speech").textContent="Uma boa pista ajuda a pensar, mas a descoberta é sua!";
}
function nextQuestion(){
 if(!answered)return;
 if(gameOver){finish();return}
 const oldPhase=questions[index].p;index++;
 if(index>=questions.length){earned[4]=true;finish();return}
 const newPhase=questions[index].p;
 if(newPhase!==oldPhase){
  earned[oldPhase]=true;renderMedals();renderMap();
  showPhaseModal(oldPhase,()=>loadQuestion());
 }else loadQuestion();
}
function showPhaseModal(p,cb){
 const ph=phases[p],ov=document.getElementById("overlay");
 document.getElementById("modalTitle").textContent=`${ph.medal} ${ph.award} conquistada!`;
 document.getElementById("modalText").innerHTML=`Você concluiu <b>${ph.key} — ${ph.name}</b> com ${phaseHits[p]}/6 acertos.<br><br>Pi encontrou a passagem para a próxima região!`;
 const btn=document.getElementById("modalBtn");btn.onclick=()=>{ov.classList.remove("show");cb()};ov.classList.add("show");
}
function updateHud(){document.getElementById("score").textContent=score;document.getElementById("lives").textContent="❤️".repeat(Math.max(lives,0))+"🖤".repeat(Math.max(0,3-lives))}
function animate(cls,ms){const m=document.getElementById("mascot");m.className="mascot";void m.offsetWidth;m.classList.add(cls);setTimeout(()=>m.className="mascot",ms)}
function finish(){
 if(index>=29 && lives>0)earned[4]=true;
 document.getElementById("game").classList.remove("active");document.getElementById("final").classList.add("active");
 const pct=Math.round(hits/30*100);
 document.getElementById("finalMessage").innerHTML=gameOver?`<b>${player}</b>, sua expedição terminou quando as três vidas foram usadas. Você pode jogar novamente e tentar recuperar todo o Mapa dos Números!`:`Parabéns, <b>${player}</b>! Você ajudou Pi a recuperar o <b>Mapa dos Números</b>.`;
 document.getElementById("finalMedals").textContent=phases.map((p,i)=>earned[i]?p.medal:"🔒").join(" ");
 document.getElementById("finalScore").textContent=score;document.getElementById("finalHits").textContent=hits;document.getElementById("finalPct").textContent=pct;
 document.getElementById("phaseResults").innerHTML=phases.map((p,i)=>`<div><b>${p.key}</b><br>${phaseHits[i]}/6</div>`).join("");
 let title=pct>=90?"🏆 MESTRE EXPLORADOR DOS NÚMEROS":pct>=70?"⭐ GRANDE EXPLORADOR DOS NÚMEROS":pct>=50?"🧭 EXPLORADOR MATEMÁTICO":"📜 APRENDIZ DA EXPEDIÇÃO";
 document.getElementById("titleEarned").textContent=title;
}
function restart(){index=0;score=0;lives=3;hits=0;answered=false;earned=[false,false,false,false,false];phaseHits=[0,0,0,0,0];gameOver=false;document.getElementById("final").classList.remove("active");document.getElementById("start").classList.add("active")}

document.addEventListener("DOMContentLoaded", () => {
  try {
    renderMap();
    renderMedals();
  } catch (error) {
    console.error("Erro ao iniciar o jogo:", error);
    alert("O jogo encontrou um erro ao iniciar. Abra o Console do navegador (F12) para ver os detalhes.");
  }
});
