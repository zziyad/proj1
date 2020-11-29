const a = [1, 2, 3, 4, 5, 6, 7]

//a.filter((a, b)=> b + a)


function newAr(number){
return new Array(number).fill().map((e, i) => i);
}

console.log(newAr(6))

  console.log(new Array(5).fill().map((e, i) => i))

