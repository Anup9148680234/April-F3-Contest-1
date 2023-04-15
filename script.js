let add = document.getElementById('add_user');
let empCount = 0;

add.addEventListener('click', run);


let x = {
    Name:'',
    Profession:'',
    Age:0
}

function del_user(x){
    empCount -=1;
    document.getElementById("f"+x).remove();
    document.getElementById('message_display').innerHTML = `
            <div style="color:gold">Success : Employee Removed!</div>
        `;

    if(empCount==0){
        document.getElementById('EmpCount').innerText = "You have 0 Employees.";
    }
    else{
        document.getElementById('EmpCount').innerText = "";
    }

}



function run(){
    let fname = document.getElementById('fname').value;
    let fjob = document.getElementById('fjob').value;
    let fage = document.getElementById('fage').value;

    if(fname.trim() == "" || fjob.trim() == "" || fage.trim() == ""){
        document.getElementById('message_display').innerHTML = `
            <div style="color:#FF4343">Error : Please Make sure All the fields are filled before adding in an employee !</div>
        `;
    }
    else{
        document.getElementById('message_display').innerHTML = `
            <div style="color:#43FF78">Success : Employee Added!</div>
        `;
        empCount+=1;
        // x.Name = fname;
        // x.Profession = fjob;
        // x.Age = fage;
        let tab = document.getElementById('EmpTable');
        tab.innerHTML += `<li id="f${empCount}"><span class="table_row"> Name:${fname} Profession:${fjob} Age:${fage} </span><button onclick="del_user(${empCount})" class="del">Delete User</button> </li>`;
        document.getElementById('fname').value = "";
        document.getElementById('fage').value = "";
        document.getElementById('fjob').value = "";

    }


    if(empCount==0){
        document.getElementById('EmpCount').innerText = "You have 0 Employees.";
    }
    else{
        document.getElementById('EmpCount').innerText = "";
    }
}






