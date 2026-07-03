function onClickPyramid(){
    debugger;
    let rows = parseInt(document.getElementById("txtRows").value);
    let i = rows;
    let content ="";
    let symbol ="*";
    while(i >= 1){
        content = content + symbol.repeat(i) + "<br>";
        i--;
    }    
    document.getElementById("divPyramid").innerHTML = content;
}