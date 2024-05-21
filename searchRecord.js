document.getElementById("btn4").addEventListener("click",SearchMydata);


function SearchMydata(){
   
async function studentSearch(){
    let mytxt="";
    let rollno=document.getElementById("rno").value;
   
    let url=`http://localhost:3000/students/?rollno=${rollno}`
    let obj=await fetch(url);
    let myData= await obj.json();
    
    if(myData.length>0){
        myData.map((key)=>{
            mytxt+=`
            <div>
                 <h1>Rollno${key.rollno}</h1>,
                 <h1>Rollno${key.name}</h1>,
                 <h1>Rollno${key.city}</h1>,
                 <h1>Rollno${key.fess}</h1>
            </div>`
        })
        console.log(mytxt);
    }
    else{
        alert("record is not in the database!!!");
    }
    document.getElementById("demo11").innerHTML=mytxt;
    console.log(mytxt)
}
studentSearch()
}