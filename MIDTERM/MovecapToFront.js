function capToFront(Str){
    let asciiArray = [];
    for (let i = 0 ; i <myStr1.length ; i++){
        asciiArray.push(Str.charCodeAt(i));
    }
    asciiArray.sort((a,b) => a-b);
    let char = asciiArray.map(asciiArray=>String.fromCharCode(asciiArray));
    console.log(Array.from(str).sort().join(''));
}
capToFront(Str)
capToFront(Str)
capToFront(Str)
//.lengthหาความยาวของข้อความ
//.charCodeAt(0)หาแอสกี้
//.fromCharCode เปลี่ยนเลขแอสกี้เป็นchar
//.join('') ถูกใช้เพื่อรวมสมาชิกทั้งหมดของอาเรย์ให้เป็นสตริงเดียว
//.sort() ใช้กับarrayที่เก็บค่าเป็น string,char ได้ 