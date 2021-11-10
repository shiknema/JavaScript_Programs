function createCheckDigit(membershipId) {
    // Write the code that goes here.
    
          let sum = 0;
          while (membershipId > 0 || sum > 9) {
               if(membershipId == 0) {
                  membershipId = sum;
                  sum = 0;
               }
               sum = sum + membershipId % 10;
               membershipId = Math.floor(membershipId / 10);
          }
          return sum;
      }
   
  
  console.log(createCheckDigit("55555"));