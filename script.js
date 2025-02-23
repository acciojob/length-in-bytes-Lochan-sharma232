let  byteSize = (str) => {
	byteSize='';
	// console.log(new TextEncoder().encode(str).length);
	// return new TextEncoder().encode(str).length;
  // write your code here
	let blob = new Blob([str], { type: 'text/plain' });
  return blob.size;
};

// Do not change the code below

 //   const str = prompt("Enter some string.");
 // alert(byteSize(str));