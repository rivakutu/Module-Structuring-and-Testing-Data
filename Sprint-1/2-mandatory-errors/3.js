const cardNumber = 4533787178994213;
//const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

//i think the issue is with the index used on the slice method
// after running the code its giving the error cardNumber.slice is not a function
// i actually think it its because slice is for slicing strings and card number is not a string
//i will use toString() method to convert card number to string before slices

const last4Digits = cardNumber.toString().slice(-4);
console.log(last4Digits);
