
var totalCount = 0;

db.collection('Customer').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        totalCount += 1;

    })
    document.write("Total customer: " + totalCount);
});

var wearMask = 0;

db.collection('Customer').where("Mask_Required", "==", true).get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        wearMask += 1;

    })
    document.write("<br>");
    document.write("<br>");
    document.write("Mask Preference")
    document.write("<br>");
    document.write("Prefered Count:    " + wearMask);
    document.write("<br>");
    document.write("Not Prefered Count :" + (totalCount - wearMask));
});

var dineIn = 0;

db.collection('Customer').where("Dine_In", "==", true).get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        dineIn += 1;

    })
    document.write("<br>");
    document.write("<br>");
    document.write("Dine-In Preference")
    document.write("<br>");
    document.write("Prefered Count:    " + dineIn);
    document.write("<br>");
    document.write("Not Prefered Count :" + (totalCount - dineIn));
});
var curbside = 0;

db.collection('Customer').where("Mask_Required", "==", "yes").get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        wearMask += 1;

    })
    document.write("<br>");
    document.write("<br>");
    document.write("Mask Preference")
    document.write("<br>");
    document.write("Prefered Count:" + wearMask);
    document.write("<br>");
    document.write("Not Prefered Count :" + (totalCount - wearMask));
});
var pickup = 0;

db.collection('Customer').where("Take_Out_Preference", "==", "Curbside").get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        pickup += 1;

    })
    document.write("<br>");
    document.write("<br>");
    document.write("Take Out Preference")
    document.write("<br>");
    document.write("Prefer Curbside:    " + pickup);
    document.write("<br>");
    document.write("Prefer Pickup: " + (totalCount - pickup));
});


var food = 0;

db.collection('Customer').where("Like_Food", "==", true).get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        food += 1;

    })
    document.write("<br>");
    document.write("<br>");
    document.write("Business Preference");
    document.write("<br>");
    document.write("Restaurant Prefered:" + food);
});

var boutique = 0;

db.collection('Customer').where("Like_Boutique", "==", true).get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        boutique += 1;

    })
    document.write("<br>");
    document.write("Boutique Prefered:" + boutique);
});

var bike = 0;

db.collection('Customer').where("Like_Bike", "==", true).get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        bike += 1;

    })
    document.write("<br>");
    document.write("Bike Shop Prefered:" + bike);
});

var barber = 0;

db.collection('Customer').where("Like_Barber", "==", true).get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        barber += 1;

    })
    document.write("<br>");
    document.write("Barber Shop Prefered:" + barber);
});

var florist = 0;

db.collection('Customer').where("Like_Florist", "==", true).get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        florist += 1;

    })
    document.write("<br>");
    document.write("Flower Shop Prefered:" + florist);
});

var coffee = 0;

db.collection('Customer').where("Like_Coffee", "==", true).get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        coffee += 1;

    })
    document.write("<br>");
    document.write("Coffee Shop Prefered:" + coffee);
});