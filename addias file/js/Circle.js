var backEl = document.getElementsByClassName('BackI');

var text = document.getElementById('textCirc');


var svgns = "http://www.w3.org/2000/svg",
svgnsM = "http://www.w3.org/2000/svg",
container = document.getElementById('cont');
var width = container.clientWidth;
var height = container.clientHeight;

//randomiza o número
function getRandom(min, max) {
return Math.random() * (max - min) + min;
}

var posx = new Array(6);
var posy = new Array(6);

if(window.innerWidth > 800){
var r = 30;
} else { var r = 15;}

for (var i = 0; i <6; i++) {
posx[i] = getRandom(r*2, width - r*2);
posy[i] = getRandom(r*2, height *3/4);
var circle = document.createElementNS(svgns, 'circle');
circle.setAttribute('class','move');
circle.setAttributeNS(null, 'cx', posx[i]);
circle.setAttributeNS(null, 'cy', posy[i]);
circle.setAttributeNS(null, 'r', r);
circle.setAttributeNS(null, 'fill', 'white');
circle.setAttributeNS(null, 'value', i);
container.appendChild(circle);
}

var contador = 0;
var circ = document.getElementsByClassName('move');
var x = new Array(6);
var y = new Array(6);

var mouseHover = new Array(6).fill(false);
console.log(mouseHover);

for(let i=0; i<circ.length; i++){
        x[i]= getRandom(-1,1);
        y[i]= getRandom(-1,1);
}

window.setInterval(function (){
contador++;
for(let i=0; i<circ.length; i++){
    if(contador%24 == 0){
        x[i]= getRandom(-1,1);
        y[i]= getRandom(-1,1);
    }
    
    if(mouseHover[i] == true){
        x[i] = 0;
        y[i] = 0;
    }
    else if(contador%24 == 0){
        x[i]= getRandom(-1,1);
        y[i]= getRandom(-1,1);
    }

var circX = circ[i].getAttributeNS(null,'cx');
var circY = circ[i].getAttributeNS(null,'cy');

if((circX + r)>= width || (circX - r) <= 0){
    x[i]*= -1;
}
if((circY + r)>= height * 3/4 || (circY - r) <= 0){
    y[i]*= -1;
}

circ[i].setAttribute('cx', posx[i]+= x[i]);
circ[i].setAttribute('cy', posy[i]+= y[i]);

(function() {
    'use strict'
    var all_hl_btns = $('#cont > circle');
    all_hl_btns.hover(function() {
        var value = $(this).attr('value');
        for(var i=0; i<backEl.length; i++){
            if (value == "0") {
                backEl[0].style.opacity = "0.3";
                circ[0].setAttributeNS(null, 'opacity', 0.85);
                circ[0].setAttributeNS(null, 'fill', '#7300ff');
                circ[0].setAttributeNS(null, 'href', 'https://www.behance.net/gallery/112715317/Ciclo-de-Conversas-Design-Multimdia');
                text.style.opacity = 1;
                text.style.left = posx[0]+ 'px';
                text.style.top = posy[0] + r*2 + 'px';
                text.style.animation = 'rot 30s infinite'
                mouseHover[0] = true;
            } else if (value == "1") {
                backEl[1].style.opacity = "0.3";
                mouseHover[1] = true;
                circ[1].setAttributeNS(null, 'opacity', 0.85);
                circ[1].setAttributeNS(null, 'fill', '#7300ff');
                text.style.opacity = 1;
                text.style.left = posx[1]+ 'px';
                text.style.top = posy[1] + r*2 + 'px';
                text.style.animation = 'rot 30s infinite'
            } else if (value == "2") {
                backEl[2].style.opacity = "0.3";
                circ[2].setAttributeNS(null, 'opacity', 0.85);
                circ[2].setAttributeNS(null, 'fill', '#7300ff');
                text.style.animation = 'rot 30s infinite'
                mouseHover[2] = true;
                text.style.opacity = 1;
                text.style.left = posx[2]+ 'px';
                text.style.top = posy[2] + r*2 + 'px';
                text.style.animation = 'rot 30s infinite'
            } else if (value == "3") {
                backEl[3].style.opacity = "0.3";
                circ[3].setAttributeNS(null, 'opacity', 0.85);
                circ[3].setAttributeNS(null, 'fill', '#7300ff');
                text.style.animation = 'rot 30s infinite'
                mouseHover[3] = true;
                text.style.opacity = 1;
                text.style.left = posx[3]+ 'px';
                text.style.top = posy[3] + r*2 + 'px';
            } else if (value == "4") {
                backEl[4].style.opacity = "0.3";
                circ[4].setAttributeNS(null, 'opacity', 0.85);
                circ[4].setAttributeNS(null, 'fill', '#7300ff');
                text.style.opacity = 1;
                text.style.left = posx[4]+ 'px';
                text.style.top = posy[4] + r*2 + 'px';
                text.style.animation = 'rot 30s infinite'
                mouseHover[4] = true;
            } else if (value == "5") {
                backEl[5].style.opacity = "0.3";
                circ[5].setAttributeNS(null, 'opacity', 0.85);
                circ[5].setAttributeNS(null, 'fill', '#7300ff');
                text.style.animation = 'rot 30s infinite'
                mouseHover[5] = true;
                text.style.opacity = 1;
                text.style.left = posx[5]+ 'px';
                text.style.top = posy[5] + r*2 + 'px';
            }
        }
    }, function(){
        text.style.opacity = 0;
        for(var i=0; i<backEl.length; i++){
            backEl[i].style.opacity= '0';
            circ[i].setAttributeNS(null, 'opacity', 1 );
            circ[i].setAttributeNS(null, 'fill', 'white');
            mouseHover[i] = false;
        }
    });
}());

(function() {
    'use strict'
    var all_hl_btns = $('#cont > circle');
    all_hl_btns.click(function() {
        var value = $(this).attr('value');
        for(var i=0; i<backEl.length; i++){
            if (value == "0") {
            window.open('https://www.behance.net/gallery/112715317/Ciclo-de-Conversas-Design-Multimdia');
            } else if (value == "1") {
            window.open('https://www.behance.net/gallery/123568553/Hortusio-%28mobile-app%29');
            } else if (value == "2") {
            window.open('https://www.behance.net/gallery/112738165/Jan-Tschichold-%28Foldable-Poster%29');
            } else if (value == "3") {
            window.open('https://www.behance.net/gallery/123384803/In-Sync');
            } else if (value == "4") {
            window.open('https://www.behance.net/gallery/112734995/Terremoto-%28Dynamic-Poetry%29');
            } else if (value == "5") {
            window.open('https://www.behance.net/gallery/123619743/11-Champions-%28website%29');
            }
        }
    });
}());
}

},1);


new CircleType(document.getElementById('textCirc'));
$(window).resize(function(){
    // location.reload();
    window.location.href = window.location.href;
});