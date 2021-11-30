// on affiche le chiffre du keycode ou on fait l operation (je ne sais pas s'il y a une fonction en js pour éviter d'utiliser plein de switch comme ca désolé)
document.addEventListener('keydown', (e) => {
    const value = e.keyCode.toString();
    switch (value) {
        case '96':
            Num = 0;
            NumPressed(Num)
            break;

        case '97':
            Num = 1;
            NumPressed(Num)
            break;
        case '98':
            Num = 2;
            NumPressed(Num)
            break;

        case '99':
            Num = 3;
            NumPressed(Num)
            break;

        case '100':
            Num = 4;
            NumPressed(Num)
            break;

        case '101':
            Num = 5;
            NumPressed(Num)
            break;

        case '102':
            Num = 6;
            NumPressed(Num)
            break;

        case '103':
            Num = 7;
            NumPressed(Num)
            break;

        case '104':
            Num = 8;
            NumPressed(Num)
            break;

        case '105':
            Num = 9;
            NumPressed(Num)
            break;

        case '106':
            Operation('*')
            break;

        case '107':
            Operation('+')
            break;

        case '109':
            Operation('-')
            break;

        case '13':

            Operation('=')
            break;

        case '8':
            Clear()
            break;

        case '110':
            Decimal()
            break;

        case '111':
            Operation('/')
            break;
    }
    
})