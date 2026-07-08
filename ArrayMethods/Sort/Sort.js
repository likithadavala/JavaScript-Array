let colours = ["Red", "Green", "Blue", "Yellow", "Orange", "Purple"];
function onClickSort(){
    debugger;
    let colour = document.getElementById("txtColour").value;
    let result =colours.sort();
    document.getElementById("divSort").innerHTML = result;
}