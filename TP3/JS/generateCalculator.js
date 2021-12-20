

var keys = document.form;
var Accumulate = 0;
var NewNumber = false;
var PendingOp = "";





function NumPressed(Num) {
    if (NewNumber) {
        keys.txt1.value = Num;
        NewNumber = false;
    }
    else {
        if (keys.txt1.value == "0")
            keys.txt1.value = Num;
        else
            keys.txt1.value += Num;
    }
}

//on effectue les opérations
function Operation(Op) {
    var txt1 = keys.txt1.value
    if (NewNumber && PendingOp != "=");
    else {
        NewNumber = true;
        if ('+' == PendingOp)
            Accumulate += parseFloat(txt1); //parsefloat tranforme les chaines de caractères en nombre 
        else if ('-' == PendingOp)
            Accumulate -= parseFloat(txt1);
        else if ('/' == PendingOp)
            Accumulate /= parseFloat(txt1);
        else if ('*' == PendingOp)
            Accumulate *= parseFloat(txt1);
        else
            Accumulate = parseFloat(txt1);
        keys.txt1.value = Accumulate;
        PendingOp = Op;
    }
}

//pour les nombres décimaux
function Decimal() {
    var curtxt1 = keys.txt1.value;
    if (NewNumber) {
        curtxt1 = "0.";
        NewNumber = false;
    }
    else {
        if (curtxt1.indexOf(".") == -1)
            curtxt1 += ".";
    }
    keys.txt1.value = curtxt1;
}

// clear l'écran
function ClearEntry() {
    keys.txt1.value = "0";
    NewNumber = true;
}
function Clear() {
    Accumulate = 0;
    PendingOp = "";
    ClearEntry();
}

function Neg() { //changer le signe d'un nombre
    keys.txt1.value = parseFloat(keys.txt1.value) * -1;
}