let colours = [];
function onClickPushArray() {
    debugger;
    let colourname = document.getElementById("txtColour").value;
    fabrics.push(colourname);
    let i = 0;
    let content = "";
    while (i < colours.length) {
        content += `<p>${i + 1}. ${colours[i]}</p>`;
        i++;
    }
    document.getElementById("divPush").innerHTML = content;
    document.getElementById("txtFabric").value = "";
}

function onClickIndexOf() {
    let colourname = document.getElementById("txtFabric").value;
    let searchWord = document.getElementById("txtWord").value;
    if(colours.indexOf(searchWord)){
        document.getElementById("divIndexOf").innerHTML = The word
    }
  
}