const form = document.querySelector('#BizFormForm');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    db.collection('Business').add({
        Name: form.BizName.value,
        Address: form.L1.value + form.L2.value,
        Business_Type: form.Type.value,
        Email: form.Email.value,
        Number: form.Number.value

    }) 
            .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
    
})