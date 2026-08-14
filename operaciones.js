function f_operar(){
    var n1=parseFloat(ducument.getElementById('num1').value);
    var n2=parseFloat(ducument.getElementById('num2').value);
    var signo=ducument.getElementById('operador').value;

    switch(signo){
        case '+': var suma = n1 + n2;
                    document.getElementById('resultado').value = suma;
                    break;
        case '-': var suma = n1 - n2;
                    document.getElementById('resultado').value = resta;
                    break;
        case '*': var multi = n1 * n2;
                    document.getElementById('resultado').value = multi;
                    break;
        case '/':   if (n2==0){
                        var mensaje="No se puede dividir en 0";
                        alert(mensaje);
                    }else{
                    var division = n1 / n2;
                    document.getElementById('resultado').value = division;
                    break;}
    }
    
}