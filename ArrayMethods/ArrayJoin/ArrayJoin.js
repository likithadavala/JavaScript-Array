let colours =[];
function onClickJoin(){
    debugger;
    let colour =document.getElementById("txtColour").value;
    colours.push(colour);
    document.getElementById("pResult").innerHTML = `The Colour Names are: ${colours.join(", ")}`;
}