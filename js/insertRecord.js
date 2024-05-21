document.getElementById("btn1").addEventListener("click",myInsert)

function myInsert(){
   let myRollno=document.getElementById("rno").value;
   let myname=document.getElementById("nm").value;
   let mycity=document.getElementById("cty").value;
   let myFess=document.getElementById("fee").value;

  let url="http://localhost:3000/students";

  fetch(url,
    {
    method: 'POST',
    body: JSON.stringify({
        
        "rollno": myRollno,
        "name": myname,
        "city": mycity,
        "fess": myFess

    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
}).then((data)=>{
  alert("data succesfully save !!")
})

}