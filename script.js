function clrdata() {

    // DOUBT
    
    // if(localStorage.getItem('list')==null){       
    //     console.log('hiiii')
    //     alert("data already empty");
    //     update();
    // }
    if (confirm("Are you sure you want to clear data?")) {
        console.log('Clearing....');
        localStorage.clear();
        update();
    }
}





function getAndUpdate() {
    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    console.log(tit, desc);
    // console.log("00000")
    if (localStorage.getItem('list') == null) {
        array = [];
        array.push([tit, desc])                                  // push in array
        localStorage.setItem('list', JSON.stringify(array));    // local storage me daal diya which accepts only as string isliye JSON.stringify 
    }
    else {                                                         // agar storage khali nahi hai toh
        str = localStorage.getItem('list');                      // str variable me list mangwa li
        array = JSON.parse(str);                                // parse se striing ko 'string ' se nikal diya as in array bana diya as original form 
        array.push([tit, desc])
        localStorage.setItem('list', JSON.stringify(array));
    }

    update();
}



function update() {
    if (localStorage.getItem('list') == null) {
        array = [];
        //array.push([tit, desc])                                  // push in array
        localStorage.setItem('list', JSON.stringify(array));    // local storage me daal diya khali array  which accepts only as string isliye JSON.stringify 
    }
    else {                                                         // agar storage khali nahi hai toh
        str = localStorage.getItem('list');                      // str variable me list mangwa li
        array = JSON.parse(str);                                // parse se striing ko 'string ' se nikal diya as in array bana diya as original form 
        //arr.push([tit, desc])
        //localStorage.setItem('list', JSON.stringify(array));
    }


    // Populate table
    tbody = document.getElementById('tbody');
    str = "";
    array.forEach((element, index) => {
        str += `<tr>
    <th scope="row">${index + 1}</th>
    <td>${element[0]}</td>
    <td>${element[1]}</td>
    <td><button class="btn btn-sm btn-primary" onclick="del(${index})">Delete</button></td>
  </tr>`

    });

    tbody.innerHTML = str;


}


add = document.getElementById('add');
//console.log(add);
add.addEventListener('click', getAndUpdate);
update();





function del(itemIndex) {
    console.log("Delete", itemIndex);
    str = localStorage.getItem('list')
    array = JSON.parse(str);
    // Delete itemIndex element from the array
    array.splice(itemIndex, 1);
    localStorage.setItem('list', JSON.stringify(array));
    update();

}