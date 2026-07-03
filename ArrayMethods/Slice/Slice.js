let cities =[];
function onClickPushArray(){
    debugger;
    let city = document.getElementById("txtName").value;
    cities.push(city);
    let i = 0;
    let content ="";
    while (i < cities.length) {
        content += `<p>${i + 1}. ${cities[i]}</p>`;
        i++;
    }
    document.getElementById("divPush").innerHTML = content;
    document.getElementById("txtName").value = "";
}

function onClickPopArray(){
    debugger;
    let city = document.getElementById("txtName").value;
    cities.pop(city);
    let i = 0;
    let content ="";
    while (i < cities.length) {
        content += `<p>${i + 1}. ${cities[i]}</p>`;
        i++;
    }
    document.getElementById("divPop").innerHTML = content;
    document.getElementById("txtName").value = "";
}

function onClickSliceArray(){
    debugger;
    let city = document.getElementById("txtName").value;
    document.getElementById("txtName").value = "";
    let startIndex = Number(document.getElementById("txtStartIndex").value);
    let endIndex = Number(document.getElementById("txtEndIndex").value);
    cities.slice(city);
    let i = startIndex;
    let content ="";
    while (i < endIndex) {
        content += `<p>${i + 1}. ${cities[i]}</p>`;
        i++;
    }
    document.getElementById("pSlice").innerHTML = content;
}


