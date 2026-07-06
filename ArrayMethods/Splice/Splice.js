let fabrics = [];
function onClickPushArray() {
    debugger;
    let fabric = document.getElementById("txtFabric").value;
    fabrics.push(fabric);
    let i = 0;
    let content = "";
    while (i < fabrics.length) {
        content += `<p>${i + 1}. ${fabrics[i]}</p>`;
        i++;
    }
    document.getElementById("divPush").innerHTML = content;
    document.getElementById("txtFabric").value ="";
}

function onClickSpliceArray() {
    debugger;
    let fabric = document.getElementById("txtFabric").value;
    let startIndex = document.getElementById("txtStartIndex").value;
    let endValue = document.getElementById("txtEndIndex").value;
    fabrics.splice(startIndex , endValue, fabric);
    let i = startIndex;
    let content = "";
    while (i < fabrics.length) {
        content += `<p>${i + 1}${fabric[i]}</p>`;
        i++;
    }
    document.getElementById("divSplice").innerHTML = content;
    
}