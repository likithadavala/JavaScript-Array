let evenNumbers = [];
let oddNumbers = [];
function onClickEvenOrOdd(){
    debugger;
    let number = Number(document.getElementById("txtNumber").value);
    document.getElementById("txtNumber").value = "";
    let contentOfEven ="";
    let contentOfOdd ="";
    if(number % 2 == 0){
        evenNumbers.push(number);
    }else{
        oddNumbers.push(number);
    }
    let i = 0;
    while(i < evenNumbers.length){
        contentOfEven += `<p>${i+1}.${evenNumbers[i]}</p><br>`;
        i++;
    }
    console.log(contentOfEven);
    console.log(evenNumbers)
    
    let j = 0;
    while(j < oddNumbers.length){
        contentOfOdd += `<p>${j+1}.${oddNumbers[j]}</p><br>`;
        j++;
    }
    document.getElementById("divEvenNumber").innerHTML = contentOfEven;
    document.getElementById("divOddNumber").innerHTML = contentOfOdd;
    console.log(contentOfOdd);
    console.log(oddNumbers);
}