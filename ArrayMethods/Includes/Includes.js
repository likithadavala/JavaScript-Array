let names = [];
function onClickPushArray() {
    debugger;
    let name = document.getElementById("txtName").value;
    names.push(name);
    let i = 0;
    let content = "";
    while (i < names.length) {
        content += `<p>${i + 1}. ${names[i]}</p>`;
        i++;
    }
    document.getElementById("divPush").innerHTML = content;
    document.getElementById("txtName").value = "";
}
function onClickIncludes() {
    debugger;
    let name = document.getElementById("txtName").value;
    let existences = document.getElementById("txtExistences").value;
    if (names.includes(existences)) {
        document.getElementById("divIncludes").innerHTML = `This ${existences} is include in this Array`;
    } else {
        document.getElementById("divIncludes").innerHTML = `This ${existences} is not include in this Array`;
    }
}
