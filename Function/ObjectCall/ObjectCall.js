function onClickBagDetails(){
    debugger;
    let b = document.getElementById("txtBrand").value;
    let col =document.getElementById("txtColour").value;
    let d = document.getElementById("txtDS").value;
    let m = document.getElementById("txtModel").value;
    let mn = Number(document.getElementById("txtManufctureDate").value);
    let cop =document.getElementById("txtCapacity").value;

    let bag = new Object();
    bag.brand =b;
    bag.colour =col;
    bag.designAndStyle =d;
    bag.model =m;
    bag.manufacturingTime =mn;
    bag.capacity =cop;
    console.log(bag);
    document.getElementById("divResult").innerHTML = JSON.stringify(bag);
}