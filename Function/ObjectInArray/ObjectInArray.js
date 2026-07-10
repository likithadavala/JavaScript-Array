let fruitLists = [];
function onClickFruitsExported() {
    debugger;
    let fruit = new Object();
    fruit.Id = document.getElementById("txtId").value;
    fruit.FruitName = document.getElementById("txtFruitName").value;
    fruitCategory = document.getElementById("Category").value;
    fruit.Country = document.getElementById("Country").value;
    fruit.State = document.getElementById("State").value;
    fruit.Price = document.getElementById("txtPrice").value;
    fruit.Quantity = document.getElementById("txtQuantity").value;
    fruitLists.push(fruit);
    document.getElementById("divResult").innerHTML = `<pre>${JSON.stringify(fruitLists)}</pre>`;
}