 async function reverseString(input) {
    let output = input.split('').reverse().join('');
    //return output;
   return new Promise((resolve, reject) => {
    setTimeout(() => resolve(output), 1000);
   });
 }

// await reverseString;

async function test() {
  let inputs = ['one', 'two', 'three'];
  let i =0, len = inputs.length;
  for(i=0; i <= len -1; i++) {
    // reverseString
    console.log(await reverseString(inputs[i]));
  }
}

test();
