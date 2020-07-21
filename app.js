//const form = document.querySelector('#Biz-form');
const bizForm = document.querySelector('#formform');
const textName = document.querySelector("#BizName");
const textNum = document.querySelector("#BizNums");
//getting data

db.collection('Business').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        console.log(doc.data());
    })
});

//saving data 

    bizForm.addEventListener('submit', (e) =>{
        e.preventDefault();
        db.collection('Business').add({
            Name: bizForm.name.value
            // Address: form.L1.value + form.L2.value,
            // Email: form.Email.value,
            // Number: form.Number.value,
            // Business_Type: form.Type.value
        })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
    });
