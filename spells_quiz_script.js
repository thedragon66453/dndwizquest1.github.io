
const N = 4; // how many spells to output

const scores = {
alarm:0,
burning_hands:0,
charm_person:0,
chromatic_orb:0,
color_spray:0,
comprehend_languages:0,
detect_magic:0,
disguise_self:0,
expeditious_retreat:0,
false_life:0,
feather_fall:0,
find_familiar:0,
fog_cloud:0,
grease:0,
ice_knife:0,
identify:0,
illusory_script:0,
jump:0,
longstrider:0,
mage_armor:0,
magic_missile:0,
protection_evil_good:0,
ray_of_sickness:0,
shield:0,
silent_image:0,
sleep:0,
tashas_hideous_laughter:0,
tensers_floating_disk:0,
thunderwave:0,
unseen_servant:0,
witch_bolt:0
};

const names = {
alarm:"Alarm",
burning_hands:"Burning Hands",
charm_person:"Charm Person",
chromatic_orb:"Chromatic Orb",
color_spray:"Color Spray",
comprehend_languages:"Comprehend Languages",
detect_magic:"Detect Magic",
disguise_self:"Disguise Self",
expeditious_retreat:"Expeditious Retreat",
false_life:"False Life",
feather_fall:"Feather Fall",
find_familiar:"Find Familiar",
fog_cloud:"Fog Cloud",
grease:"Grease",
ice_knife:"Ice Knife",
identify:"Identify",
illusory_script:"Illusory Script",
jump:"Jump",
longstrider:"Longstrider",
mage_armor:"Mage Armor",
magic_missile:"Magic Missile",
protection_evil_good:"Protection from Evil and Good",
ray_of_sickness:"Ray of Sickness",
shield:"Shield",
silent_image:"Silent Image",
sleep:"Sleep",
tashas_hideous_laughter:"Tasha's Hideous Laughter",
tensers_floating_disk:"Tenser's Floating Disk",
thunderwave:"Thunderwave",
unseen_servant:"Unseen Servant",
witch_bolt:"Witch Bolt"
};

/* ---------------- 12 QUESTIONS ---------------- */

const questions = [
{
question:"When you enter a dangerous room, you first...",
answers:[
{text:"Cast a spell to see magic auras",points:{detect_magic:3,identify:2}},
{text:"Set a ward at the door",points:{alarm:3,mage_armor:2}},
{text:"Send an unseen helper to scout",points:{unseen_servant:3,find_familiar:2}},
{text:"Read the runes on the wall",points:{illusory_script:3,comprehend_languages:2}}
]
},
{
question:"Your go-to opening move in combat is...",
answers:[
{text:"Blast with a burst of fire",points:{burning_hands:3,chromatic_orb:2}},
{text:"Dazzle everyone with color",points:{color_spray:3,silent_image:2}},
{text:"Charm the toughest enemy",points:{charm_person:3,tashas_hideous_laughter:2}},
{text:"Zap them with crackling lightning",points:{witch_bolt:3,thunderwave:2}}
]
},
{
question:"You'd rather travel by...",
answers:[
{text:"Sprinting ahead of the group",points:{expeditious_retreat:3,longstrider:2}},
{text:"Floating gear beside you",points:{tensers_floating_disk:3,feather_fall:2}},
{text:"Taking the long road, well-prepared",points:{longstrider:3,alarm:2}},
{text:"Slipping past unseen",points:{disguise_self:3,fog_cloud:2}}
]
},
{
question:"Facing a powerful foe, you...",
answers:[
{text:"Shield yourself at the last second",points:{shield:3,false_life:2}},
{text:"Weaken them with poison",points:{ray_of_sickness:3,ice_knife:2}},
{text:"Trip them up with laughter",points:{tashas_hideous_laughter:3,grease:2}},
{text:"Call on protective magic",points:{protection_evil_good:3,mage_armor:2}}
]
},
{
question:"Your favorite kind of trick is...",
answers:[
{text:"A convincing illusion",points:{silent_image:3,disguise_self:2}},
{text:"A hidden coded message",points:{illusory_script:3,comprehend_languages:2}},
{text:"A charming lie",points:{charm_person:3,tashas_hideous_laughter:2}},
{text:"A clever bit of misdirection",points:{unseen_servant:3,fog_cloud:2}}
]
},
{
question:"In camp, you spend your evening...",
answers:[
{text:"Studying a strange object",points:{identify:3,detect_magic:2}},
{text:"Setting up defenses",points:{alarm:3,mage_armor:2}},
{text:"Practicing new tricks",points:{jump:3,feather_fall:2}},
{text:"Bonding with your familiar",points:{find_familiar:3,comprehend_languages:2}}
]
},
{
question:"When negotiations go wrong, you...",
answers:[
{text:"Charm your way out",points:{charm_person:3,disguise_self:2}},
{text:"Make them laugh uncontrollably",points:{tashas_hideous_laughter:3,color_spray:2}},
{text:"Threaten with raw power",points:{magic_missile:3,chromatic_orb:2}},
{text:"Retreat quickly",points:{expeditious_retreat:3,feather_fall:2}}
]
},
{
question:"Your ideal battlefield control is...",
answers:[
{text:"Slick grease underfoot",points:{grease:3,ice_knife:2}},
{text:"A cloud of fog",points:{fog_cloud:3,silent_image:2}},
{text:"Putting enemies to sleep",points:{sleep:3,color_spray:2}},
{text:"Freezing them solid",points:{ice_knife:3,ray_of_sickness:2}}
]
},
{
question:"You protect your allies by...",
answers:[
{text:"Casting a ward before evil",points:{protection_evil_good:3,alarm:2}},
{text:"Bolstering their life force",points:{false_life:3,mage_armor:2}},
{text:"Shielding the whole group",points:{shield:3,feather_fall:2}},
{text:"Scouting danger ahead",points:{unseen_servant:3,find_familiar:2}}
]
},
{
question:"Your idea of a fun spell is...",
answers:[
{text:"Floating furniture just because",points:{tensers_floating_disk:3,jump:2}},
{text:"Writing secret notes",points:{illusory_script:3,comprehend_languages:2}},
{text:"Disguising yourself as someone else",points:{disguise_self:3,silent_image:2}},
{text:"Summoning a tiny companion",points:{find_familiar:3,unseen_servant:2}}
]
},
{
question:"When exploring ruins, you rely on...",
answers:[
{text:"Detecting magical traps",points:{detect_magic:3,identify:2}},
{text:"Comprehending ancient texts",points:{comprehend_languages:3,illusory_script:2}},
{text:"Leaping over pitfalls",points:{jump:3,expeditious_retreat:2}},
{text:"An alarm to warn of danger",points:{alarm:3,fog_cloud:2}}
]
},
{
question:"Your final spell before a big fight...",
answers:[
{text:"A burst of magic missiles",points:{magic_missile:3,witch_bolt:2}},
{text:"A wave of thunder",points:{thunderwave:3,burning_hands:2}},
{text:"A chilling orb of ice",points:{chromatic_orb:3,ice_knife:2}},
{text:"A colorful, blinding spray",points:{color_spray:3,sleep:2}}
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
<h2>Your ${N} Level 1 Spells</h2>
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
if(sel[i] === null)  alert("Choose an answer first!");

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
