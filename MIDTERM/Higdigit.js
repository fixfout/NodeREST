function highestDigit (num){
    let hight = (String(num).split('')).map(Number);
    console.log(Math.max(...hight)); //...เอาค่าในarrayออกมา
}
highestDigit(379);
highestDigit(2);
highestDigit(7);
//.split() การแยกสตริงที่กำหนดลงในอาร์เรย์ของสตริงโดยแยกมันออกเป็นสตริงย่อยโดยใช้ตัวคั่นที่ระบุไว้ในการแยกกัน 