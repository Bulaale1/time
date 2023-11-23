/* eslint-disable linebreak-style */
let timeClock  = process.argv.slice(2);
if (timeClock.length < 1) {
  console.log('Error: please, enter at least 1 numbers');
  process.exit();
}
for (let arg of timeClock) {

  if (isNaN(Number(arg))) {
    console.log('Error: please, input only numbers');
    process.exit();
  }
  if ((Number(arg)) > 0) {
    if (Number.isInteger(Number(arg))) {
      setTimeout(()=>{
        console.log('\x07');
  
      },Number(arg));
    }
  } else {
    console.log('Please enter only positive numbers:');
    process.exit();

  }
}


