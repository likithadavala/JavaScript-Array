let names =["Likitha" ,"Sujana" , "Vyshu","Varshini" ,"Lavanya" ,"pinky"];
function onClickReverse(){
      debugger;
      let name = document.getElementById("txtName").value;
      let result = names.reverse();
      document.getElementById("pResult").innerHTML = result;
}