//where to add
const placesList = document.getElementById('plsces-list');
console.log('placesList');

// what to be add
const li = document.createElement('li');
li.innerText = ('parabon')


//add the child
placesList.appendChild(li);


//where to add
const mainContainer = document.getElementById('main-container');


// what to be add
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'biriyany'
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'burhany'
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'salatd'
ul.appendChild(li3);


section.appendChild(ul);

mainContainer.appendChild(section);


//set innerHTML Directly

const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1> My Dress Section </h1>
<ul>
    <li> T-Shart</li>
    <li> T-Shart</li>
    <li> T-Shart</li>
</ul>
`
mainContainer.appendChild(sectionDress);