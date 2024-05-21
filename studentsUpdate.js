

async function datashow()
{
    let myTable=`<table> 
    <table border="1" width="600" bgcolor="blue" >
    <tr>
    <th>RollNo</th>
    <th>Name</th>
    <th>City</th>
    <th>Fees</th>
   
    
    </tr>



    `;

 let url="http://localhost:3000/students";
 let myObj=await(fetch(url));
 let myData =await myObj.json();

 myData.map((key)=>{
    myTable+=`
    <tr>
    <td>${key.rollno}</td>
    <td>${key.name}</td>
    <td>${key.city}</td>
    <td>${key.fess}</td>

    <td>
    <a href="#" onclick="myrecRemove(${key.id});">
    <img src="images.png" width="30px">
    </a>
 
    <a href="#" onclick="myrecEdit(${key.id});">
    <img src="edit.png" width="30px">
    </a>
    
    </td>
    
    </tr>
    `;
})
myTable+=`</table>`
document.getElementById("demo").innerHTML=myTable;
}

datashow();



function myrecRemove(myid) {
    let url =`http://localhost:3000/students/${myid}`
    fetch(url, 
        { method: "DELETE" }).then((data)=>data.json()).then((data)=>{alert("record delete id"+ myid)
   
});
    
}



function myrecEdit(myid) {
    let url =`http://localhost:3000/students/${myid}`


async function myShow(){

    let myObj=await fetch(url);
    let myData=await myObj.json();
    let text=`
    
    <div>
    <h1>Updata data record </h1>
    <input type="hidden" id="recid" value=${myData.id}><br><br>
    Edit rollno : <input type="text"  id="rno" value=${myData.rollno}><br><br>
    Edit name : <input type="text"  id="nm" value=${myData.name}><br><br>
    Edit city : <input type="text"  id="cty" value=${myData.city}><br><br>
    Edit fees : <input type="text"  id="fees" value=${myData.fees}><br><br>

    <button onClick="editsave()">Updata data</button>
    </div>
    `;
    
    document.getElementById("demo1").innerHTML=text;
}

myShow()

       
}



function editsave()
{

    
let myid=document.getElementById("recid").value;
let myrollno=document.getElementById("rno").value;
let myname=document.getElementById("nm").value;
let mycity=document.getElementById("cty").value;
let myfees=document.getElementById("fees").value;


let url =`http://localhost:3000/students/${myid}`;

fetch(url,{
    method:"PUT",
    body:JSON.stringify({
        "rollno":myrollno,
        "name":myname,
         "city":mycity,
         "fees":myfees
    }),
    headers:{
        'content-type':'application/json ; charset=UTF-8',
    }
}).then(((data)=>{alert("data Updated")}))
}
    
