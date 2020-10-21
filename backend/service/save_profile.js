const fs = require('fs');
const moment = require('moment'); // require
exports.saveProfile = (query) => {
    const file = 'profile.json';
    var path = "./file/" + file;
    if(!fs.existsSync(path)) {
        console.log('555')
        fs.writeFileSync(path, '[]',function (err) {
            if (err) throw err;
        })
    }
    var data = fs.readFileSync(path);
    var json = JSON.parse(data);
    let birthDayToValidate = query.วันเกิด;
    const rgexp = /(^(((0[1-9]|1[0-9]|2[0-8])[-](0[1-9]|1[012]))|((29|30|31)[-](0[13578]|1[02]))|((29|30)[-](0[4,6,9]|11)))[-](19|[2-9][0-9])\d\d$)|(^29[-]02[-](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/;
    const isValidDateBirthDay = rgexp.test(birthDayToValidate);
    if(json.find(fullname => fullname.ชื่อ == query.ชื่อ && fullname.นามสกุล == query.นามสกุล)) {
        return "ชื่อและนามสกุลซ้ำกัน"
    }
    if(!query.ชื่อ) return "กรุณากรอกชื่อ"
    else if(!query.นามสกุล) return "กรุณากรอกนามสกุล"
    else if(!query.วันเกิด || !isValidDateBirthDay) return "กรุณากรอกวันเกิดให้ถูกต้อง DD-MM-YYYY"
    const profile = {
        "userid": json.length != 0 ? json.length+1 : 1,
        "ชื่อ":query.ชื่อ,
        "นามสกุล":query.นามสกุล,
        "วันเกิด":query.วันเกิด
    }
    json.push(profile)
    console.log(json)
    fs.writeFile(path, JSON.stringify(json),function (err) {
        if (err) throw err;
    })
    return "บันทึกข้อมูลเรียบร้อย"
};