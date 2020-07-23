//const form = document.querySelector('#Biz-form');
const bizList = document.querySelector('#Biz-List');
const bizForm = document.querySelector('#BizFormForm');


//render data
function renderData(doc) {
    let li = document.createElement('li');
    let name = document.createElement('span');
    let address = document.createElement('span');
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

    li.append(name);

    li.append(bizType);

    li.append(address);

    li.append(number);

    li.append(email);


    bizList.append(li);
}

//getting data
function getCategoryData(BusinessType) {
    db.collection('Business').where("Business_Type", "==", BusinessType).get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            renderData(doc);
        })
    });
}

