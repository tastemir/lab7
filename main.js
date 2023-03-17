const body = document.querySelector('body');

const h1 = document.createElement('h1');
h1.style.color = 'blue';
h1.textContent = 'Lab7 Assignment';
body.appendChild(h1);

const hr = document.createElement('hr');
body.appendChild(hr);

const h2 = document.createElement('h2');
h2.style.color = 'red';
h2.textContent = 'Task';
body.appendChild(h2);

const p1 = document.createElement('p');
p1.innerHTML = 'In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:';
body.appendChild(p1);

const ul = document.createElement('ul');
body.appendChild(ul);

const li1 = document.createElement('li');
li1.className = 'even';
li1.style.color = 'green';
li1.innerHTML = 'find elements in the DOM (<b>5 points</b>);';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.className = 'odd';
li2.style.color = 'purple';
li2.innerHTML = 'create/add/remove elements (<b>5 points</b>);';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.className = 'even';
li3.style.color = 'green';
li3.innerHTML = 'change content of the elements (<b>5 points</b>);';
ul.appendChild(li3);

const li4 = document.createElement('li');
li4.className = 'odd';
li4.style.color = 'purple';
li4.innerHTML = 'change styles of the elements (<b>5 points</b>);';
ul.appendChild(li4);

const li5 = document.createElement('li');
li5.className = 'even';
li5.style.color = 'green';
li5.innerHTML = 'change attributes   of the elements (<b>5 points</b>);';
ul.appendChild(li5);

const li6 = document.createElement('li');
li6.className = 'odd';
li6.style.color = 'purple';
li6.innerHTML = 'change classes of the elements (<b>5 points</b>).';
ul.appendChild(li6);

const p2 = document.createElement('p');
body.appendChild(p2);

const hr2 = document.createElement('hr');
body.appendChild(hr2);


const h2s = document.createElement("h2");
const ps = document.createElement("p");
const uls = document.createElement("ul");
const li1s = document.createElement("li");
const li2s = document.createElement("li");
const li3s = document.createElement("li");
const li4s = document.createElement("li");
const li5s = document.createElement("li");
const li6s = document.createElement("li");
const li7s = document.createElement("li");
const h1s = document.createElement("h1");

h2s.textContent = "Submission";
h2s.style.color = "red";
ps.innerHTML = "To submit your work, follow these instructions:";
li1s.innerHTML =
  "Create a new repository on Github, named <b>lab7</b> (<b>1 point</b>).";
li1s.className = "even";
li1s.style.color = "green";
li2s.innerHTML = "Clone this repository to your local machine and work inside it.";
li2s.className = "odd";
li2s.style.color = "purple";
li3s.innerHTML = 'Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; tag with "Hello, World!" message (<b>1 point</b>).';
li3s.className = "even";
li3s.style.color = "green";
li4s.innerHTML =
  'Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>).';
li4s.className = "odd";
li4s.style.color = "purple";
li5s.innerHTML =
  'Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section).';
li5s.className = "even";
li5s.style.color = "green";
li6s.innerHTML =
  "Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>).";
li6s.className = "odd";
li6s.style.color = "purple";
li7s.innerHTML =
  'After you finish your work, submit it to the Github (<b>2 points</b>).';
li7s.className = "even";
li7s.style.color = "green";
uls.appendChild(li1s);
uls.appendChild(li2s);
uls.appendChild(li3s);
uls.appendChild(li4s);
uls.appendChild(li5s);
uls.appendChild(li6s);
uls.appendChild(li7s);

body.appendChild(h2s);
body.appendChild(ps);
body.appendChild(uls);
body.appendChild(document.createElement("hr"));
body.appendChild(h1s);
