
const counter = document.querySelector("#customer-count");

let li = document.createElement('li');
let count = document.createElement('span');
var comment = document.createElement('span')
comment.textContent = "Customer Counter for this business is:  "
db.collection('customer_counter').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {

        count.textContent = doc.data().count;
        li.append(comment);
        li.append(count);

        counter.append(li);
    })

});

