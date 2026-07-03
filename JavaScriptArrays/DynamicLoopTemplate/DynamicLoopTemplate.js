let shops = [];
function onClickShopNames(){
    debugger;
    let shopNames = document.getElementById("txtShopName").value;
    shops.push(shopNames);
    let i = 0;
    let length = shops.length;
    let content ="";
    while(i < length){
        content += `<p>${i+1}. ${shops[i]}</p>`;
        console.log(shopNames);
        console.log(typeof shopNames);
        i++;
    }
    document.getElementById("pResult").innerHTML = content;
    document.getElementById("txtShopName").value = "";
}