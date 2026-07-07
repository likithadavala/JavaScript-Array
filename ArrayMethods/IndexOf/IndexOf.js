let colours = [];
function onClickPushArray() {
    debugger;
    let colourname = document.getElementById("txtColour").value;
    colours.push(colourname);
    let i = 0;
    let content = "";
    while (i < colours.length) {
        content += `<p>${i + 1}. ${colours[i]}</p>`;
        i++;
    }
    document.getElementById("divPush").innerHTML = content;
    document.getElementById("txtColour").value = "";
}

function onClickIndexOf() {
    let searchWord = document.getElementById("txtWord").value;
    if(colours.indexOf(searchWord)){
        document.getElementById("divIndexOf").innerHTML = `The ${searchWord} is at ${colours.indexOf(searchWord)} `;
    }else{
     document.getElementById("divIndexOf").innerHTML = `The ${searchWord} is not at ${colours.indexOf(searchWord)}`;   
    }
}