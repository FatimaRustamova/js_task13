let body = document.querySelector("body");

//---1-ci hisse---
let nav = document.createElement("nav");
let h3 = document.createElement("h3");
let ul = document.createElement("ul");
let li_1 = document.createElement("li");
let li_2 = document.createElement("li");
let li_3 = document.createElement("li");
let li_4 = document.createElement("li");

body.append(nav);
nav.append(h3, ul);
ul.append(li_1, li_2, li_3, li_4);

h3.innerText = "Start Bootstrap";
li_1.innerText = "Home";
li_2.innerText = "Resume";
li_3.innerText = "Projects";
li_4.innerText = "Contact";

nav.classList.add("nav");
h3.classList.add("h3");
ul.classList.add("ul");
li_1.classList.add("li");
li_2.classList.add("li");
li_3.classList.add("li");
li_4.classList.add("li");


//---2-ci hisse---
let header = document.createElement("header");
let div_1 = document.createElement("div");
let div1_div = document.createElement("div");
let div_p = document.createElement("p");
let p_1 = document.createElement("p");
let h1 = document.createElement("h1");
let btn_div = document.createElement("div");
let btn1 = document.createElement("button");
let btn2 = document.createElement("button");
let div_2 = document.createElement("div");
let div_2_div = document.createElement("div");
let image = document.createElement("img");

body.append(header);
header.append(div_1, div_2);
div_1.append(div1_div, p_1, h1, btn_div);
div1_div.append(div_p);
btn_div.append(btn1, btn2);
div_2.append(div_2_div, image);

div_p.innerText = "Design · Development · Marketing"
p_1.innerText = "I can help your business to";
h1.innerText = "Get online and grow fast";
btn1.innerText = "Resume";
btn2.innerText = "Projects";

header.classList.add("header");
div_1.classList.add("div1");
div1_div.classList.add("div1_div");
div_p.classList.add("div_p");
p_1.classList.add("p1");
h1.classList.add("h1");
btn_div.classList.add("btn_div");
btn1.classList.add("btn1");
btn2.classList.add("btn2");
div_2.classList.add("div2");
div_2_div.classList.add("div2_div");
image.classList.add("img");

image.setAttribute('src', 'https://startbootstrap.github.io/startbootstrap-personal/assets/profile.png');


//---3-cu hisse---
let section = document.createElement("section");
let div_3 = document.createElement("div");
let h2 = document.createElement("h2");
let p_2 = document.createElement("p");
let p_3 = document.createElement("p");
let div_4 = document.createElement("div");

body.append(section);
section.append(div_3);
div_3.append(h2, p_2, p_3, div_4);

h2.innerText = "About Me";
p_2.innerText = "My name is Start Bootstrap and I help brands grow.";
p_3.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dolorum itaque qui unde quisquam consequatur autem. Eveniet quasi nobis aliquid cumque officiis sed rem iure ipsa! Praesentium ratione atque dolorem?";

section.classList.add("section");
div_3.classList.add("div3");
h2.classList.add("h2");
p_2.classList.add("p2");
p_3.classList.add("p3");
div_4.classList.add("div4");


//---4-cu hisse---
let foot = document.createElement("footer");
let p_4 = document.createElement("p");
let div_5 = document.createElement("div");
let a_1 =  document.createElement("a");
let a_2 =  document.createElement("a");
let a_3 =  document.createElement("a");

body.append(foot);
foot.append(p_4, div_5);
div_5.append(a_1, a_2, a_3);

p_4.innerText = "Copyright © Your Website 2023";
a_1.innerText = "Privacy";
a_2.innerText = "Terms";
a_3.innerText = "Contact";

a_1.setAttribute('href', '#');
a_2.setAttribute('href', '#');
a_3.setAttribute('href', '#');

foot.classList.add("foot");
div_5.classList.add("div5");
p_4.classList.add("p4");
a_1.classList.add("a");
a_2.classList.add("a");
a_3.classList.add("a");