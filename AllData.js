//const form = document.querySelector('#Biz-form');
const bizList = document.querySelector('#Biz-List');
const bizForm = document.querySelector('#BizFormForm');
var trying = document.getElementById("try");

//render data
function renderData(doc) {
    let li = document.createElement('li');
    let name = document.createElement('span');
    let address = document.createElement('span');
    let email = document.createElement('span');
    let number = document.createElement('span');
    let bizType = document.createElement('span');
    let maskReq = document.createElement('span');
    let dine = document.createElement('span');
    let delivery = document.createElement('span');


    //li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().Name;
    address.textContent = doc.data().Address;
    email.textContent = doc.data().Email;
    number.textContent = doc.data().Number;
    bizType.textContent = doc.data().Business_Type;
    maskReq.textContent = doc.data().Mask_Required;
    dine.textContent = doc.data().Dine_In;
    delivery.textContent = doc.data().Delivery_available;



    li.setAttribute('data-id', doc.data().Name);
  

    li.append(name);

    li.append(bizType);

    li.append(address);

    li.append(number);

    li.append(email);

    li.append(maskReq);
    li.append(dine);
    li.append(delivery);


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

// //retrieve data-id for individual li
// function getDataID(){
//     firebase.storage().get()
// }

