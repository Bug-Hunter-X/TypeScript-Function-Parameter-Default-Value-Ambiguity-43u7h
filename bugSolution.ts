function printName(name: string | null = null): void {
  if (name === null) {
    console.log('No name provided');
  } else {
    console.log(name);
  }
}

printName(); // Prints 'No name provided'
printName(undefined); // Prints 'No name provided'
printName('Alice'); // Prints 'Alice'

//Alternative solution using optional parameter and default value checking
function printName2(name?: string): void {
  if (name === undefined) {
    console.log('No name provided');
  } else {
    console.log(name);
  }
}
printName2(); //Prints 'No name provided'
printName2(undefined); //Prints 'No name provided'
printName2('Bob'); //Prints 'Bob' 