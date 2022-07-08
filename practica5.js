let arreglo = [1,2,3,4,5,6,7,8,9];
imprimir();

function forma_a(){
    let resultado = "";
    for (let index = 0; index < arreglo.length; index++) {
        if(arreglo[index] % 3 === 0){
            resultado += arreglo[index]+"<br>";
        }else{
            resultado += arreglo[index]+",";
        }
    }

    document.write(resultado);
}
function forma_b(){
    let resultado = "";
    let contador = 1;
    for (let index = arreglo.length - 1; index >=0; index--) {  
        if(contador % 3 === 0){
            resultado += arreglo[index] + "<br>";
        }else{
            resultado += arreglo[index] + ",";
        }
        contador++;
    }

    document.write(resultado);
}

function forma_c(){
    let resultado = "";
    for (let x = 0; x < arreglo.length; x++) {
        if(x < 3){
            resultado += arreglo[x] + "," +arreglo[x+3] + "," + arreglo[(x+3 + 3)] + "<br>";
        }
    }
    document.write(resultado);
}

function forma_d(){
    let resultado = "";
    for (let x = arreglo.length-1; x > 0; x--) {
        if(x > 5){
            resultado += arreglo[x] + "," +arreglo[x-3] + "," + arreglo[(x-3)-3] + "<br>";
        }
    }
    document.write(resultado);
}

function imprimir(){
    document.write('Forma A'+'<br>');
    forma_a();
    document.write('Forma B'+'<br>');
    forma_b();
    document.write('Forma C'+'<br>');
    forma_c();
    document.write('Forma D'+'<br>');
    forma_d();

    
}