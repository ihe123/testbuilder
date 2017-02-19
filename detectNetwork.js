// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {

   if (cardNumber.length===14 && cardNumber[0]==='3' && cardNumber[1]==='8'){
      console.log('Diner\'s Club');
      return 'Diner\'s Club'; 
    }
    if (cardNumber.length===14 && cardNumber[0]==='3' && cardNumber[1]==='9'){
      console.log('Diner\'s Club');
      return 'Diner\'s Club'; 
    }
     if (cardNumber.length===15 && cardNumber[0]==='3' && cardNumber[1]==='4'){
      console.log('American Express');
      return 'American Express'; 
    }
     if (cardNumber.length===15 && cardNumber[0]==='3' && cardNumber[1]==='7'){
      console.log('American Express');
      return 'American Express'; 
    }
      if (cardNumber.length===13 && cardNumber[0]==='4'){
       console.log('Visa');
        return 'Visa'; 
    }
    if (cardNumber.length===16 && cardNumber[0]==='4'){
        console.log('Visa');
        return 'Visa'; 
    }
    if (cardNumber.length===19 && cardNumber[0]==='4'){
      console.log('Visa');
      return 'Visa'; 
    }
       if (cardNumber.length===16 && cardNumber[0]==='5' && cardNumber[1]==='1'){
      console.log('MasterCard');
      return 'MasterCard'; 
    }
    if (cardNumber.length===16 && cardNumber[0]==='5' && cardNumber[1]==='2'){
      console.log('MasterCard');
      return 'MasterCard'; 
    }
    if (cardNumber.length===16 && cardNumber[0]==='5' && cardNumber[1]==='3'){
      console.log('MasterCard');
      return 'MasterCard'; 
    }
    if (cardNumber.length===16 && cardNumber[0]==='5' && cardNumber[1]==='4'){
      console.log('MasterCard');
      return 'MasterCard'; 
    }
    if (cardNumber.length===16 && cardNumber[0]==='5' && cardNumber[1]==='5'){
      console.log('MasterCard');
      return 'MasterCard'; 
    }
     if(cardNumber.length===16 && cardNumber[0]==='6' && cardNumber[1]==='0'&& cardNumber[2]==='1'&& cardNumber[3]==='1'){
      console.log('Discover');
      return 'Discover'; 
    }
    if(cardNumber.length===19 && cardNumber[0]==='6' && cardNumber[1]==='0'&& cardNumber[2]==='1'&& cardNumber[3]==='1'){
      console.log('Discover');
      return 'Discover'; 
    }
    if(cardNumber.length===16 && cardNumber[0]==='6' && cardNumber[1]==='4'&& cardNumber[2]==='4'){
      console.log('Discover');
      return 'Discover'; 
    }
    if(cardNumber.length===19 && cardNumber[0]==='6' && cardNumber[1]==='4'&& cardNumber[2]==='4'){
      console.log('Discover');
      return 'Discover'; 
    }
     if(cardNumber.length===16 && cardNumber[0]==='6' && cardNumber[1]==='4'&& cardNumber[2]==='4'){
      console.log('Discover');
      return 'Discover'; 
    }
    if(cardNumber.length===19 && cardNumber[0]==='6' && cardNumber[1]==='4'&& cardNumber[2]==='4'){
      console.log('Discover');
      return 'Discover'; 
    }
     if(cardNumber.length===16 && cardNumber[0]==='6' && cardNumber[1]==='4'&& cardNumber[2]==='4'){
      console.log('Discover');
      return 'Discover'; 
    }
    if(cardNumber.length===19 && cardNumber[0]==='6' && cardNumber[1]==='4'&& cardNumber[2]==='4'){
      console.log('Discover');
      return 'Discover'; 
    }
     if(cardNumber.length===16 && cardNumber[0]==='6' && cardNumber[1]==='4'&& cardNumber[2]==='5'){
      console.log('Discover');
      return 'Discover'; 
    }
    if(cardNumber.length===19 && cardNumber[0]==='6' && cardNumber[1]==='4'&& cardNumber[2]==='5'){
      console.log('Discover');
      return 'Discover'; 
    }
     if(cardNumber.length===16 && cardNumber[0]==='6' && cardNumber[1]==='4'&& cardNumber[2]==='6'){
      console.log('Discover');
      return 'Discover'; 
    }
    if(cardNumber.length===19 && cardNumber[0]==='6' && cardNumber[1]==='4'&& cardNumber[2]==='6'){
      console.log('Discover');
      return 'Discover'; 
    }
     if(cardNumber.length===16 && cardNumber[0]==='6' && cardNumber[1]==='4'&& cardNumber[2]==='7'){
      console.log('Discover');
      return 'Discover'; 
    }
    if(cardNumber.length===19 && cardNumber[0]==='6' && cardNumber[1]==='4'&& cardNumber[2]==='7'){
      console.log('Discover');
      return 'Discover'; 
    }
     if(cardNumber.length===16 && cardNumber[0]==='6' && cardNumber[1]==='4'&& cardNumber[2]==='8'){
      console.log('Discover');
      return 'Discover'; 
    }
    if(cardNumber.length===19 && cardNumber[0]==='6' && cardNumber[1]==='4'&& cardNumber[2]==='8'){
      console.log('Discover');
      return 'Discover'; 
    }
     if(cardNumber.length===16 && cardNumber[0]==='6' && cardNumber[1]==='4'&& cardNumber[2]==='9'){
      console.log('Discover');
      return 'Discover'; 
    }
    if(cardNumber.length===19 && cardNumber[0]==='6' && cardNumber[1]==='4'&& cardNumber[2]==='9'){
      console.log('Discover');
      return 'Discover'; 
    }
     if(cardNumber.length===16 && cardNumber[0]==='6' && cardNumber[1]==='5'){
      console.log('Discover');
      return 'Discover'; 
    }
    if(cardNumber.length===19 && cardNumber[0]==='6' && cardNumber[1]==='5'){
      console.log('Discover');
      return 'Discover'; 
    }
    if (cardNumber.length>=12 && cardNumber.length<=19 && cardNumber[0]==='5' && cardNumber[1]==='0'&& cardNumber[2]==='1'&& cardNumber[3]==='8'){
      console.log('Maestro');
      return 'Maestro'; 
    }
    if (cardNumber.length>=12 && cardNumber.length<=19 && cardNumber[0]==='5' && cardNumber[1]==='0'&& cardNumber[2]==='2'&& cardNumber[3]==='0'){
      console.log('Maestro');
      return 'Maestro'; 
    }
    if (cardNumber.length>=12 && cardNumber.length<=19 && cardNumber[0]==='5' && cardNumber[1]==='0'&& cardNumber[2]==='3'&& cardNumber[3]==='8'){
      console.log('Maestro');
      return 'Maestro'; 
    }
    if (cardNumber.length>=12 && cardNumber.length<=19 && cardNumber[0]==='6' && cardNumber[1]==='3'&& cardNumber[2]==='0'&& cardNumber[3]==='4'){
      console.log('Maestro');
      return 'Maestro'; 
    }
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
};


