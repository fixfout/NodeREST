function numbersplit(num){
    let numSplit = []; //อาเรย์ที่ว่างเปล่า
    let number = 0; 
    number = Math.ceil(num/2); //เอาตัวเลขมาหารกัน
    numSplit.push(num-number,number);
    console.log(numSplit);
}
numbersplit(4);
numbersplit(10);
numbersplit(11);
numbersplit(-9);
//.sort() เรียงน้อยไปมาก
//.pop() เอาค่าหลังออก
//...เอาค่าในarrayออกมา
