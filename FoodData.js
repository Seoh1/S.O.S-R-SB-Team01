//const form = document.querySelector('#Biz-form');
const bizList = document.querySelector('#Biz-List');
const bizForm = document.querySelector('#BizFormForm');


//render data
function renderData(doc){
    let li = document.createElement('li');
    let name = document.createElement('span', "\n");
    let address = document.createElement('span', "\n");
    let email = document.createElement('span');
    let number = document.createElement('span');
    let bizType = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().Name;
    //document.write("\n");
    address.textContent = doc.data().Address; 
    email.textContent = doc.data().Email;
    number.textContent = doc.data().Number;
    bizType = doc.data().Business_Type;

    li.append("Name:", name);
    li.append(document.createElement("br"));
    li.append("Business Type: " , bizType);
    li.append(document.createElement("br"));
    li.append("Address: ", address);
    li.append(document.createElement("br"));
    li.append("Contact Number: ", number);
    li.append(document.createElement("br"));
    li.append("Contact Email: ", email);
    li.append(document.createElement("br"));
    li.append("------------------------------");

    bizList.append(li);
}

//getting data

db.collection('Business').where("Business_Type", "==", "Restaurant").get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderData(doc);
    })

});

