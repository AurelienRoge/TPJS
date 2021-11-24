var generateCalculator = {
    generateButtons : function(){
    
        var btn0 = document.createElement("BUTTON");
        btn0.innerHTML = "0";
        document.body.appendChild(btn0);
        var btn1 = document.createElement("BUTTON");
        btn1.innerHTML = "1";
        document.body.appendChild(btn1);
        var btn2 = document.createElement("BUTTON");
        btn2.innerHTML = "2";
        document.body.appendChild(btn2);
        var btn3 = document.createElement("BUTTON");
        btn3.innerHTML = "3";
        document.body.appendChild(btn3);
        var btn4 = document.createElement("BUTTON");
        btn4.innerHTML = "4";
        document.body.appendChild(btn4);
        var btn5 = document.createElement("BUTTON");
        btn5.innerHTML = "5";
        document.body.appendChild(btn5);
        var btn6 = document.createElement("BUTTON");
        btn6.innerHTML = "6";
        document.body.appendChild(btn6);
        var btn7 = document.createElement("BUTTON");
        btn7.innerHTML = "7";
        document.body.appendChild(btn7);
        var btn8 = document.createElement("BUTTON");
        btn8.innerHTML = "8";
        document.body.appendChild(btn8);
        var btn9 = document.createElement("BUTTON");
        btn9.innerHTML = "9";
        document.body.appendChild(btn9);
        var btnPlus = document.createElement("BUTTON");
        btnPlus.innerHTML = "+";
        document.body.appendChild(btnPlus);
        var btnMoins = document.createElement("BUTTON");
        btnMoins.innerHTML = "-";
        document.body.appendChild(btnMoins);
        var btnFois= document.createElement("BUTTON");
        btnFois.innerHTML = "x";
        document.body.appendChild(btnFois);
        var btnDivision = document.createElement("BUTTON");
        btnDivision.innerHTML = "/";
        document.body.appendChild(btnDivision);
        var btnC = document.createElemeent("BUTTON");
        btnC.innerHTML = "C";
        document.body.appendChild(btnC);
    }
}


generateButtons();