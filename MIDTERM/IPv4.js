function iaVaildIP (myidAdr){
    let ipArray = idAdr.split('.');
    let status = 0;
};
iaVaildIP("1.2.3.4");
iaVaildIP("1.2.3.");
iaVaildIP("1.2.3.4.5");
iaVaildIP("123.45.67.89");
iaVaildIP("123.456.78.90");
iaVaildIP("123.045.067.089");
//.split() การแยกสตริงที่กำหนดลงในอาร์เรย์ของสตริงโดยแยกมันออกเป็นสตริงย่อยโดยใช้ตัวคั่นที่ระบุไว้ในการแยกกัน 
//.lengthหาความยาวของข้อความ