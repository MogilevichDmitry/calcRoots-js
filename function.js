/**
 * Created by Дмитрий on 12.01.2016.
 */
//document.addEventListener("DOMContentLoaded", calcRoots);
function calcRoots(container)
{
    var a = document.getElementById("a").value;
    if(!a){
        a = 1;
        document.getElementById("a").value = 1;
    }
    var b = document.getElementById("b").value;
    if(!b){
        b = 1;
        document.getElementById("b").value = 1;
    }
    var c = document.getElementById("c").value;
    var D, x1, x2;
    D = b * b -4 * a * c;
    if (D === 0){
        x1 = x2 = -b / (2 * a);
        document.getElementById("x1").value = x1;
        document.getElementById("x2").value = x2;
        resetMsg(container);
    }
    else if (D > 0){
        x1 = (-b - Math.sqrt(D)) / (2 * a);
        x2 = (-b + Math.sqrt(D)) / (2 * a);
        document.getElementById("x1").value = x1;
        document.getElementById("x2").value = x2;
        resetMsg(container);
    }
    else {
        resetMsg(container);
        var tempD, tempX;
        tempD = Math.sqrt(-D) / ( 2 * a);
        tempD = tempD.toString();
        tempX = -b / (2 * a);
        tempX = tempX.toString();
        document.getElementById("x1").value = + tempX + "+" + tempD + "i";
        document.getElementById("x2").value = + tempX + "-" + tempD + "i";
        var msgComplex = document.createElement('span');
        msgComplex.className = "msgComplexNumbers";
        msgComplex.innerHTML = "Корни существуют только для комплексных чисел";
        container.appendChild(msgComplex);
    }
}
function resetMsg(container){
    if(container.lastChild.className =="msgComplexNumbers"){
        container.removeChild(container.lastChild);
    }
}
