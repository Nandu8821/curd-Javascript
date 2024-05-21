
async function datashow() {
    let myTable= `
    <table  border="2" bgcolor="red"  width="400"> 
    

    <tr>
    <th>rollno</th>
    <th>name</th>
    <th>city</th>
    <th>class</th>
    <th>Delete</th>
    </tr>
   

    `;

    let url = "http://localhost:3000/students";
    let myObj = await fetch(url);
    let myData = await myObj.json();

    myData.map((key) => {
        myTable += `
    <tr>
    <td>${key.rollno}</td>
    <td>${key.name}</td>
    <td>${key.city}</td>
    <td>${key.fess}</td>

   
    
    </tr>
    `;
    })
    myTable += `</table>`
    document.getElementById("demo").innerHTML = myTable;
}

datashow();