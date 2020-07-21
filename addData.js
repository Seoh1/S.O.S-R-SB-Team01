const form = document.querySelector('#BizFormForm');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    db.collection('Business').add({
        name: form.BizName.value
    }) 
            .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
    
})