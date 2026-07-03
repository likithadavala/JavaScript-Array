let chocolates = [];
function onClickPushArray() {
    debugger;
    let chocolateName = document.getElementById("txtName").value;
    chocolates.push(chocolateName);
    let i = 0;
    let contentOfChocolates = "";
    while (i < chocolates.length) {
        contentOfChocolates += `<p>${i + 1}. ${chocolates[i]}</p>`;
        i++;
    }
    document.getElementById("divPush").innerHTML = contentOfChocolates;
    document.getElementById("txtName").value = "";
}

function onClickPopArray() {
    debugger;
    let chocolateName = document.getElementById("txtName").value;
    chocolates.pop(chocolateName);
    let i = 0;
    let contentOfChocolates = "";
    while (i < chocolates.length) {
        contentOfChocolates += `<p>${i + 1}. ${chocolates[i]}</p>`;
        i++;
    }
    document.getElementById("divPop").innerHTML = contentOfChocolates;
    document.getElementById("txtName").value = "";
}

function onClickUnShiftArray() {
    debugger;
    let chocolateName = document.getElementById("txtName").value;
    chocolates.unshift(chocolateName);
    let i = 0;
    let contentOfChocolates = "";
    while (i < chocolates.length) {
        contentOfChocolates += `<p>${i + 1}. ${chocolates[i]}</p>`;
        i++;
    }
    document.getElementById("divUnShift").innerHTML = contentOfChocolates;
    document.getElementById("txtName").value = "";
}

function onClickShiftArray() {
debugger;
    let chocolateName = document.getElementById("txtName").value;
    chocolates.shift(chocolateName);
    let i = 0;
    let contentOfChocolates = "";
    while (i < chocolates.length) {
        contentOfChocolates += `<p>${i+1}. ${chocolates[i]}</p>`;
        i++;
    }
    document.getElementById("divShift").innerHTML = contentOfChocolates;
    document.getElementById("txtName").value = "";
}