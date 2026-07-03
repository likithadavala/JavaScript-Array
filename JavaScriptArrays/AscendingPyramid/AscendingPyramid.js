function onClickPyramid(){
    debugger;
    let i = 1;
    let rows = parseInt(document.getElementById("txtRows").value);
    let content ="";
    let symbol ="*";
    while(i <= rows){
        content = content + symbol.repeat(i) + "<br>";
        i++;
    }    
    document.getElementById("divPyramid").innerHTML = content;
}