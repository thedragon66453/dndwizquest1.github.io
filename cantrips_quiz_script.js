
const N = 3; // how many cantrips to output

const scores = {
acid_splash:0,
blade_ward:0,
chill_touch:0,
dancing_lights:0,
elementalism:0,
fire_bolt:0,
friends:0,
light:0,
mage_hand:0,
mending:0,
message:0,
mind_sliver:0,
minor_illusion:0,
poison_spray:0,
prestidigitation:0,
ray_of_frost:0,
shocking_grasp:0,
thunderclap:0,
toll_the_dead:0,
true_strike:0
};

const names = {
acid_splash:"Acid Splash",
blade_ward:"Blade Ward",
chill_touch:"Chill Touch",
dancing_lights:"Dancing Lights",
elementalism:"Elementalism",
fire_bolt:"Fire Bolt",
friends:"Friends",
light:"Light",
mage_hand:"Mage Hand",
mending:"Mending",
message:"Message",
mind_sliver:"Mind Sliver",
minor_illusion:"Minor Illusion",
poison_spray:"Poison Spray",
prestidigitation:"Prestidigitation",
ray_of_frost:"Ray of Frost",
shocking_grasp:"Shocking Grasp",
thunderclap:"Thunderclap",
toll_the_dead:"Toll the Dead",
true_strike:"True Strike"
};

/* ---------------- 12 QUESTIONS ---------------- */

const questions = [
{
question:"Your favorite way to start a fight is...",
answers:[
{text:"A precise bolt of fire",points:{fire_bolt:3,shocking_grasp:2}},
{text:"A splash of corrosive acid",points:{acid_splash:3,poison_spray:2}},
{text:"A pulse of pure mental energy",points:{mind_sliver:3,toll_the_dead:2}},
{text:"A gust of freezing air",points:{ray_of_frost:3,thunderclap:2}}
]
},
{
question:"When you're not fighting, you like to...",
answers:[
{text:"Tinker with odds and ends",points:{mending:3}},
{text:"Chat across long distances",points:{message:3,friends:2}},
{text:"Light up a room",points:{light:3,dancing_lights:2}},
{text:"Play with tiny magical effects",points:{elementalism:3,prestidigitation:2}}
]
},
{
question:"In a tense negotiation, you...",
answers:[
{text:"Charm them into liking you",points:{friends:3}},
{text:"Read their mind for weaknesses",points:{mind_sliver:3,toll_the_dead:2}},
{text:"Stay guarded, just in case",points:{blade_ward:3,shocking_grasp:2}},
{text:"Distract with illusions",points:{minor_illusion:3,dancing_lights:2}}
]
},
{
question:"You need to reach something far away, so you...",
answers:[
{text:"Levitate it over with a spectral hand",points:{mage_hand:3,prestidigitation:2}},
{text:"Light your way to get it yourself",points:{light:3,dancing_lights:2}},
{text:"Send a floating light to look first",points:{dancing_lights:3,light:2}},
{text:"Just walk over, confident and precise",points:{true_strike:3,blade_ward:2}}
]
},
{
question:"Your combat style is best described as...",
answers:[
{text:"Relentless and aggressive",points:{fire_bolt:3,shocking_grasp:2}},
{text:"Calculated and precise",points:{true_strike:3,mind_sliver:2}},
{text:"Defensive and careful",points:{blade_ward:3,chill_touch:2}},
{text:"Chaotic and unpredictable",points:{thunderclap:3,acid_splash:2}}
]
},
{
question:"Facing an undead creature, you...",
answers:[
{text:"Chill it to the bone",points:{chill_touch:3,ray_of_frost:2}},
{text:"Toll the bell of its doom",points:{toll_the_dead:3,mind_sliver:2}},
{text:"Blast it with fire",points:{fire_bolt:3,thunderclap:2}},
{text:"Ward yourself and hold the line",points:{blade_ward:3,shocking_grasp:2}}
]
},
{
question:"A useful trick for everyday life is...",
answers:[
{text:"Fixing your broken equipment",points:{mending:3}},
{text:"Sending quick secret notes",points:{message:3,minor_illusion:2}},
{text:"Making people like you",points:{friends:3}},
{text:"Playing with sparks and scents",points:{elementalism:3,prestidigitation:2}}
]
},
{
question:"You disable a foe by...",
answers:[
{text:"Poisoning them",points:{poison_spray:3,acid_splash:2}},
{text:"Freezing their legs",points:{ray_of_frost:3,chill_touch:2}},
{text:"Shocking the weapon from their grip",points:{shocking_grasp:3,thunderclap:2}},
{text:"Rattling their mind",points:{mind_sliver:3,toll_the_dead:2}}
]
},
{
question:"Your idea of a good prank is...",
answers:[
{text:"A harmless illusion",points:{minor_illusion:3,dancing_lights:2}},
{text:"A silly floating light show",points:{dancing_lights:3,light:2}},
{text:"Making their food taste weird",points:{prestidigitation:3,elementalism:2}},
{text:"A whispered message only they hear",points:{message:3,friends:2}}
]
},
{
question:"In a duel, your finishing move is...",
answers:[
{text:"A precise, guaranteed hit",points:{true_strike:3,shocking_grasp:2}},
{text:"A last burst of flame",points:{fire_bolt:3,acid_splash:2}},
{text:"A thunderous shockwave",points:{thunderclap:3,ray_of_frost:2}},
{text:"A deathly toll",points:{toll_the_dead:3,chill_touch:2}}
]
},
{
question:"When exploring a dark dungeon, you...",
answers:[
{text:"Summon a floating light",points:{light:3,dancing_lights:2}},
{text:"Send your hand ahead to check for traps",points:{mage_hand:3}},
{text:"Stay alert and ready to defend",points:{blade_ward:3,true_strike:2}},
{text:"Create illusions to scout safely",points:{minor_illusion:3,dancing_lights:2}}
]
},
{
question:"Your signature magical flourish is...",
answers:[
{text:"Sparks, scents, and little effects",points:{elementalism:3}},
{text:"A perfectly placed strike",points:{true_strike:3,shocking_grasp:2}},
{text:"An eerie chill in the air",points:{chill_touch:3,ray_of_frost:2}},
{text:"A bell tolling for your enemy",points:{toll_the_dead:3,mind_sliver:2}}
]
}
];

/* ---------------- STATE ---------------- */

let i = 0;
let sel = Array(questions.length).fill(null);

/* ---------------- ELEMENTS ---------------- */

const quiz = document.getElementById("quiz");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");

const manualBtn = document.getElementById("manualBtn");
const manualPanel = document.getElementById("manualPanel");
const manualInputs = document.getElementById("manualInputs");
const confirmManual = document.getElementById("confirmManual");
const closeManual = document.getElementById("closeManual");

let chosen = new Set();

/* ---------------- RENDER ---------------- */

function render(){
const q = questions[i];

quiz.innerHTML = `
<div class="question">${q.question}</div>
${q.answers.map((a,j)=>`
<button style="${sel[i]===j?'background:#4caf50':''}" onclick="pick(${j})">
${a.text}
</button>
`).join("")}
`;

backBtn.style.display = i === 0 ? "none" : "inline-block";
}

window.pick = function(j){
sel[i] = j;
render();
};

/* ---------------- CALC ---------------- */

function calc(){
for(const k in scores) scores[k] = 0;

sel.forEach((a,q)=>{
if(a === null) return;

const p = questions[q].answers[a].points;

for(const k in p){
scores[k] += p[k];
}
});
}

/* ---------------- SHOW ---------------- */

function show(){
const sorted = Object.entries(scores)
.filter(([_,v])=>v>0)
.sort((a,b)=>b[1]-a[1]);

const top = sorted.slice(0, N);
const topScore = sorted[0][1];

quiz.innerHTML = `
<h2>Your ${N} Cantrips</h2>
${top.map(([n,v])=>`<div style="font-size:32px;margin:8px 0;">${names[n]}</div>`).join("")}
<hr>
${sorted.map(([n,v])=>{
let p = Math.round((v / topScore) * 100);
return `<div>${names[n]}: ${p}%</div>`;
}).join("")}
`;
}

/* ---------------- BUTTONS ---------------- */

nextBtn.onclick = ()=>{
if(sel[i] === null) return alert("Choose an answer first!");

if(i < questions.length - 1){
i++;
render();
} else {
calc();
show();
}
};

backBtn.onclick = ()=>{
if(i > 0){
i--;
render();
}
};

/* ---------------- MANUAL MODE ---------------- */

manualBtn.onclick = function(){

chosen = new Set();
manualInputs.innerHTML = "";

for(const k in scores){

const btn = document.createElement("button");
btn.innerText = names[k];

btn.onclick = function(){
if(chosen.has(k)){
chosen.delete(k);
btn.classList.remove("selected");
} else {
if(chosen.size >= N) return;
chosen.add(k);
btn.classList.add("selected");
}
};

manualInputs.appendChild(btn);
}

manualPanel.style.display = "block";
};

confirmManual.onclick = function(){
if(chosen.size !== N) return;

for(const k in scores) scores[k] = 0;
chosen.forEach(k => scores[k] = 100);

manualPanel.style.display = "none";
show();
};

closeManual.onclick = function(){
manualPanel.style.display = "none";
};

/* ---------------- HOME ---------------- */

document.getElementById("homeBtn").onclick = ()=>{
window.location.href = "index.html";
};

/* ---------------- START ---------------- */

render();
