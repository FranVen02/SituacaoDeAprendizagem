
let respostaIns1 = document.getElementById('respostaIns1')
let respostaIns2 = document.getElementById('respostaIns2')
let respostaIns3 = document.getElementById('respostaIns3')
let arrayRandom1 = []

let respostaSele1 = document.getElementById('respostaSele1')
let respostaSele2 = document.getElementById('respostaSele2')
let respostaSele3 = document.getElementById('respostaSele3')
let arrayRandom2 = []

let respostaBubb1 = document.getElementById('respostaBubb1')
let respostaBubb2 = document.getElementById('respostaBubb2')
let respostaBubb3 = document.getElementById('respostaBubb3')
let arrayRandom3 = []

let respostaFor = document.getElementById('respostaFor')
let arrayFor = []

let respostaIf = document.getElementById('respostaIf')

let respostaWhile = document.getElementById('respostaWhile')
let arrayWhile = []


// ESTILOS INSERTION
respostaIns1.style.color = "black"
respostaIns1.style.fontSize = "18px"
respostaIns1.style.marginLeft = "30px"

respostaIns2.style.color = "black"
respostaIns2.style.fontSize = "18px"
respostaIns2.style.marginLeft = "30px"

respostaIns3.style.color = "black"
respostaIns3.style.fontSize = "18px"
respostaIns3.style.marginLeft = "30px"

// ESTILOS SELECTION
respostaSele1.style.color = "black"
respostaSele1.style.fontSize = "18px"
respostaSele1.style.marginLeft = "30px"

respostaSele2.style.color = "black"
respostaSele2.style.fontSize = "18px"
respostaSele2.style.marginLeft = "30px"

respostaSele3.style.color = "black"
respostaSele3.style.fontSize = "18px"
respostaSele3.style.marginLeft = "30px"

// ESTILOS BUBBLE

respostaBubb1.style.color = "black"
respostaBubb1.style.fontSize = "18px"
respostaBubb1.style.marginLeft = "30px"

respostaBubb2.style.color = "black"
respostaBubb2.style.fontSize = "18px"
respostaBubb2.style.marginLeft = "30px"

respostaBubb3.style.color = "black"
respostaBubb3.style.fontSize = "18px"
respostaBubb3.style.marginLeft = "30px"

function generateRandom(max, min){

    return Math.floor(Math.random() * (max - min + 1)) + min

}function generateArray1(){

    let randomNumber = generateRandom(7, 1)

    respostaIns1.innerHTML = "Array aleatória:<br>[ "
    for(let i=0; i<7; i++){

        arrayRandom1.push(randomNumber)
        randomNumber = generateRandom(7, 1)

        respostaIns1.innerHTML += arrayRandom1[i]
        if(i != 6){

            respostaIns1.innerHTML += ", "
        }else{

            respostaIns1.innerHTML += " ]"
        }
    }

    console.log("Array aleatória gerada: ")
    console.table(arrayRandom1)
    
}function insertionSort(){

    // CONDIÇÃO PARA ORDENAÇÃO
    if(arrayRandom1.length === 0){
        respostaIns2.innerHTML = "Array não foi gerado ainda! Aperte o outro botão primeiro."
        return;
    }

    let counter = 0;
    let currentValue = 0;

    // ORDENAÇÃO DE ARRAY
    for(let i=0; i<arrayRandom1.length; i++){
           
        let previousValue = i - 1
        currentValue = arrayRandom1[i]

        while(previousValue >= 0 && arrayRandom1[previousValue] > currentValue){
            arrayRandom1[previousValue+1] = arrayRandom1[previousValue]
            previousValue--
            counter++
        }
        
        arrayRandom1[previousValue+1] = currentValue
        console.table(arrayRandom1)
    }

    // EXIBIÇÃO DE ARRAY ORDENADA
    respostaIns2.innerHTML = "Array aleatória ordenada:<br>[ "
    for(i=0; i<arrayRandom1.length; i++){

        respostaIns2.innerHTML += arrayRandom1[i]
        if(i != 6){

            respostaIns2.innerHTML += ", "
        }else{

            respostaIns2.innerHTML += " ] <br>"
        }
    }
    respostaIns2.innerHTML += "Número de ações realizadas: " + counter
    

    console.log("Número de ações realizadas: ", counter)
    console.log("Array ordenado pelo algoritmo de Insertion Sort: ")
    console.table(arrayRandom1)

}function reverseInsertionSort(){

    // CONDIÇÃO PARA ORDENAÇÃO
    if(arrayRandom1.length === 0){

        respostaIns3.innerHTML = "Array não foi gerado ainda! Aperte o outro botão primeiro.";
        return;
    }
    
    let counter = 0;
    let currentValue = 0;
    
    // ORDENAÇÃO DE ARRAY EM ORDEM DECRESCENTE
    for(let i = 0; i < arrayRandom1.length; i++){

        let previousValue = i - 1;
        currentValue = arrayRandom1[i];
    
        while(previousValue >= 0 && arrayRandom1[previousValue] < currentValue){

            arrayRandom1[previousValue + 1] = arrayRandom1[previousValue];
            previousValue--;
            counter++;
        }
            
        arrayRandom1[previousValue + 1] = currentValue;
        console.table(arrayRandom1);
    }
    
    // EXIBIÇÃO DE ARRAY ORDENADA EM ORDEM DECRESCENTE
    respostaIns3.innerHTML = "Array aleatória ordenada em ordem decrescente:<br>[ ";
    for(i=0; i<arrayRandom1.length; i++){

        respostaIns3.innerHTML += arrayRandom1[i]
        if(i != 6){

            respostaIns3.innerHTML += ", "
        }else{

            respostaIns3.innerHTML += " ] <br>"
        }
    }
    respostaIns3.innerHTML += "Número de ações realizadas: " + counter

    console.log("Número de ações realizadas: ", counter);
    console.log("Array ordenada em ordem decrescente pelo algoritmo de Insertion Sort: ");
    console.table(arrayRandom1);
    
}

//
//
// SELECTION SORT

function generateArray2(){
    
    let randomNumber = generateRandom(7, 1)

    respostaSele1.innerHTML = "Array aleatória:<br>[ "
    for(let i=0; i<7; i++){
        arrayRandom2.push(randomNumber)
        randomNumber = generateRandom(7, 1)

        respostaSele1.innerHTML += arrayRandom2[i]
        if(i != 6){

            respostaSele1.innerHTML += ", "
        }else{

            respostaSele1.innerHTML += " ]"
        }
    }

    console.log("Array aleatória gerada: ")
    console.table(arrayRandom2)
    
}function selectionSort(){

    // CONDIÇÃO PARA ORDENAÇÃO
    if(arrayRandom2.length === 0){
        respostaSele2.innerHTML = "Array não foi gerado ainda! Aperte o outro botão primeiro."
        return;
    }

    let counter = 0;
    let currentValue = 0;

    // ORDENAÇÃO DE ARRAY
    for (let i=0; i<arrayRandom2.length - 1; i++) {

        let minIndex = i;
        for (let j=i+1; j<arrayRandom2.length; j++) {

            if (arrayRandom2[j] < arrayRandom2[minIndex]) {
                minIndex = j;
            }

            counter++;
        }
        if (minIndex !== i) {
            currentValue = arrayRandom2[i];
            arrayRandom2[i] = arrayRandom2[minIndex];
            arrayRandom2[minIndex] = currentValue;
            counter++;
        }
    }

    // EXIBIÇÃO DE ARRAY ORDENADA
    respostaSele2.innerHTML = "Array aleatória ordenada:<br>[ "
    for(i=0; i<arrayRandom2.length; i++){
        
        respostaSele2.innerHTML += arrayRandom2[i]
        if(i != 6){

            respostaSele2.innerHTML += ", "
        }else{

            respostaSele2.innerHTML += " ]<br>"
        }
    }
    respostaSele2.innerHTML += "Número de ações realizadas: " + counter
    

    console.log("Número de ações realizadas: ", counter)
    console.log("Array ordenada pelo algoritmo de Selection Sort: ")
    console.table(arrayRandom2)

}function reverseSelectionSort(){

    // CONDIÇÃO PARA ORDENAÇÃO
    if(arrayRandom2.length === 0){

        respostaSele3.innerHTML = "Array não foi gerado ainda! Aperte o outro botão primeiro.";
        return;
    }
    
    let counter = 0;
    let currentValue = 0;
    
    // ORDENAÇÃO DE ARRAY EM ORDEM DECRESCENTE
    for (let i=0; i<arrayRandom2.length-1; i++) {

        let minIndex = i;
        for (let j=i+1; j<arrayRandom2.length; j++) {

            if (arrayRandom2[j] > arrayRandom2[minIndex]) {
                minIndex = j;
            }
            
            counter++;
        }
        if (minIndex !== i) {
            currentValue = arrayRandom2[i];
            arrayRandom2[i] = arrayRandom2[minIndex];
            arrayRandom2[minIndex] = currentValue;
            counter++;
        }
    }
    
    // EXIBIÇÃO DE ARRAY ORDENADA EM ORDEM DECRESCENTE
    respostaSele3.innerHTML = "Array aleatória ordenada em ordem decrescente:<br>[ ";
    for(let i = 0; i < arrayRandom2.length; i++){

        respostaSele3.innerHTML += arrayRandom2[i]
        if(i != 6){

            respostaSele3.innerHTML += ", "
        }else{

            respostaSele3.innerHTML += " ]<br>"
        }
    }
    respostaSele3.innerHTML += "Número de ações realizadas: " + counter;

    console.log("Número de ações realizadas: ", counter);
    console.log("Array ordenada em ordem decrescente pelo algoritmo de Selection Sort: ");
    console.table(arrayRandom2);
    
}

//
//
// BUBBLE SORT 

function generateArray3(){

    let randomNumber = generateRandom(7, 1)

    respostaBubb1.innerHTML = "Array aleatória:<br>[ "
    for(let i=0; i<7; i++){
        arrayRandom3.push(randomNumber)
        randomNumber = generateRandom(7, 1)

        respostaBubb1.innerHTML += arrayRandom3[i]
        if(i != 6){

            respostaBubb1.innerHTML += ", "
        }else{

            respostaBubb1.innerHTML += " ]"
        }
    }

    console.log("Array aleatória gerada: ")
    console.table(arrayRandom3)
    
}function bubbleSort(){

    // CONDIÇÃO PARA ORDENAÇÃO
    if(arrayRandom3.length === 0){
        respostaBubb2.innerHTML = "Array não foi gerado ainda! Aperte o outro botão primeiro."
        return;
    }

    let counter = 0;
    let currentValue = 0;

    // ORDENAÇÃO DE ARRAY
    for(let i=0; i<arrayRandom3.length-1; i++){
        for(let j=0; j<arrayRandom3.length; j++){

            if(arrayRandom3[j] < arrayRandom3[j-1]){
            
                currentValue = arrayRandom3[j];
                arrayRandom3[j] = arrayRandom3[j-1];
                arrayRandom3[j-1] = currentValue;
                counter++
            }
        }
    }

    // EXIBIÇÃO DE ARRAY ORDENADA
    respostaBubb2.innerHTML = "Array aleatória ordenada:<br>[ "
    for(i=0; i<arrayRandom3.length; i++){
        
        respostaBubb2.innerHTML += arrayRandom3[i]
        if(i != 6){

            respostaBubb2.innerHTML += ", "
        }else{

            respostaBubb2.innerHTML += " ]<br>"
        }
    }
    respostaBubb2.innerHTML += "Número de ações realizadas: " + counter
    

    console.log("Número de ações realizadas: ", counter)
    console.log("Array ordenado pelo algoritmo de Bubble Sort: ")
    console.table(arrayRandom3)

}function reverseBubbleSort(){

    // CONDIÇÃO PARA ORDENAÇÃO
    if(arrayRandom3.length === 0){

        respostaBubb3.innerHTML = "Array não foi gerado ainda! Aperte o outro botão primeiro.";
        return;
    }
    
    let counter = 0;
    let currentValue = 0;
    
    // ORDENAÇÃO DE ARRAY EM ORDEM DECRESCENTE
    for(let i=0; i<arrayRandom3.length-1; i++){
        for(let j=0; j<arrayRandom3.length; j++){

            if(arrayRandom3[j] > arrayRandom3[j-1]){
            
                currentValue = arrayRandom3[j];
                arrayRandom3[j] = arrayRandom3[j-1];
                arrayRandom3[j-1] = currentValue;
                counter++
            }
        }
    }
    
    // EXIBIÇÃO DE ARRAY ORDENADA EM ORDEM DECRESCENTE
    respostaBubb3.innerHTML = "Array aleatória ordenada em ordem decrescente:<br>[ ";
    for(let i=0; i<arrayRandom3.length; i++){

        respostaBubb3.innerHTML += arrayRandom3[i]
        if(i != 6){

            respostaBubb3.innerHTML += ", "
        }else{

            respostaBubb3.innerHTML += " ]<br>"
        }
    }
    respostaBubb3.innerHTML += "Número de ações realizadas: " + counter;

    console.log("Número de ações realizadas: ", counter);
    console.log("Array ordenada em ordem decrescente pelo algoritmo de Bubble Sort: ");
    console.table(arrayRandom3);
    
}

//
//
// ALG FOR EXAMPLE 

function forLinkExample(){

    let numFor = Number(document.getElementById('numFor').value)

    if(numFor <= 12 && numFor > 0){
        
        respostaFor.innerHTML = "Array gerada: <br>[ "
        for(i=0; i<numFor; i++){

            arrayFor.push(generateRandom(numFor, 1))
    
            respostaFor.innerHTML += arrayFor[i]
            if(i == numFor-1){
    
                respostaFor.innerHTML += " ]"
            }else{
                
                respostaFor.innerHTML +=  ", "
            }
            console.log(arrayFor[i])
        }
    }else{

        respostaFor.innerHTML = "Número muito grande ou inválido! Por favor, digite apenas números entre 1 e 12."
        return;
    }
    

}

//
//
// ALG IF EXAMPLE

function ifLinkExample(){

    let numIf = Number(document.getElementById('numIf').value)
   
    if(numIf >= 0 && numIf <= 13){

        respostaIf.innerHTML = "Você é uma criança."
    }else if(numIf > 13 && numIf <= 17){

        respostaIf.innerHTML = "Você é um adolescente."
    }else if(numIf > 17 && numIf <= 24){

        respostaIf.innerHTML = "Você é um jovem adulto."
    }else if(numIf > 24 && numIf <= 59){

        respostaIf.innerHTML = "Você é um adulto."
    }else if(numIf > 59 && numIf <= 120){

        respostaIf.innerHTML = "Você é um idoso."
    }else{
        
        respostaIf.innerHTML = "Idade Inválida!"
        return;
    }

}

//
//
// ALG WHILE EXAMPLE

function whileLinkExample(){

    let numWhile = Number(document.getElementById('numWhile').value)
    let soma = 0;
    
    if(numWhile <= 0 || numWhile > 2000){

        respostaWhile.innerHTML = "Número inválido! Por favor, digite um número positivo ou que seja menor que 2000."
        return;
    }

    while (numWhile > 0) {  
          
        soma += numWhile
        numWhile--;
    }  
    
    respostaWhile.innerHTML = "Soma total: " + soma;
    console.log("Soma total:", soma);
}