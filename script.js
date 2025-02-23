const byteSize = (str) => {
	byteSize='';
	console.log(TextEncoder().encode(str).length);
  // write your code here
};

// Do not change the code below
//   const str = prompt("Enter some string.");
// alert(byteSize(str));
//return new TextEncoder().encode(str).length;
