function getBudgets(budGets){
    let sum = budGets[0].budget+budGets[1].budget+budGets[2].budget;
    console.log(sum);
}
getBudgets([
    {name: "John", age: 21,budget: 23000,},
    {name: "Steve",age: 32,budget: 40000,},
    {name: "Marin",age: 16,budget: 2700,},
]);
  
getBudgets([
    {name: "John",age: 21,budget: 29000,},
    {name: "Steve",age: 32,budget: 32000,},
    {name: "Marin",age: 16,budget: 1600,},
  ]);