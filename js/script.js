var move = document.getElementById('move');
var About = document.getElementById('About');
var sideNav = document.getElementById('sideNav');
var menu = document.getElementById('menu');
var menuBtn = document.getElementById("menuBtn");

var project1 = document.getElementById("project1");
var project_1 = document.getElementById("project_1");
var project2 = document.getElementById("project2");
var project_2 = document.getElementById("project_2");
var project3 = document.getElementById("project3");
var project_3 = document.getElementById("project_3");
var project4 = document.getElementById("project4");
var project_4 = document.getElementById("project_4");
var project5 = document.getElementById("project5");
var project_5 = document.getElementById("project_5");

var lose = document.getElementsByClassName("lose_icon");
var lose1 = document.getElementById('lose1');
var lose2 = document.getElementById('lose2');
var lose3 = document.getElementById('lose3');
var lose4 = document.getElementById('lose4');
var lose5 = document.getElementById('lose5');

sideNav.style.right = "-140px";



menu.onclick = function () {
    if (sideNav.style.right == "-140px") {
        sideNav.style.right = "0";
        menuBtn.src = "img/cancel.png";
    }
    else {
        sideNav.style.right = "-140px";
        menuBtn.src = "img/left.png";
    }
};

document.addEventListener("mousemove", function (e) {
    move.style.left = e.pageX + 'px';
    move.style.top = e.pageY + 'px';
});

project1.onclick = function () {
    if (project_1.style.visibility = "hidden") {
        project_1.style.visibility = "visible";
    }
};
project2.onclick = function () {
    if (project_2.style.visibility = "hidden") {
        project_2.style.visibility = "visible";
    }
};
project3.onclick = function () {
    if (project_3.style.visibility = "hidden") {
        project_3.style.visibility = "visible";
    }
};
project4.onclick = function () {
    if (project_4.style.visibility = "hidden") {
        project_4.style.visibility = "visible";
    }
};
project5.onclick = function () {
    if (project_5.style.visibility = "hidden") {
        project_5.style.visibility = "visible";
    }
};

lose1.onclick = function () {
    if (project_1.style.visibility = "visible") {
        project_1.style.visibility = "hidden";
    }
};
lose2.onclick = function () {
    if (project_2.style.visibility = "visible") {
        project_2.style.visibility = "hidden";
    }
};
lose3.onclick = function () {
    if (project_3.style.visibility = "visible") {
        project_3.style.visibility = "hidden";
    }
};
lose4.onclick = function () {
    if (project_4.style.visibility = "visible") {
        project_4.style.visibility = "hidden";
    }
};
lose5.onclick = function () {
    if (project_5.style.visibility = "visible") {
        project_5.style.visibility = "hidden";
    }
};