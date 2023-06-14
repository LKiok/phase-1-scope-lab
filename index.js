var customerName = 'bob'

function upperCaseCustomerName(){
    customerName= 'BOB';
}

var bestCustomer;
function setBestCustomer(){
    bestCustomer = 'not bob'
}

function overwriteBestCustomer(){
    bestCustomer ='maybe bob'
}

const leastFavoriteCustomer = 'Marsh mello';
function changeLeastFavoriteCustomer()
{
    leastFavoriteCustomer = 'George smith';
}
console.log(changeLeastFavoriteCustomer());
