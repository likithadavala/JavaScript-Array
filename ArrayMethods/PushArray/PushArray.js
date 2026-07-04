let flowers = [];
function onClickPushArray(){
    debugger;
    let index = Number(document.getElementById("txtIndex").value);
    let result = flowers[index];
    console.log(index)
    console.log(typeof index)
    console.log(flowers[index])
    document.getElementById("pResult").innerHTML = result;
}