const fs = require('fs');

exports.getProfile = async (query) => {
    const file = 'profile.json';
    var path = "./file/" + file;
    if(!fs.existsSync(path)) {
        return "ไม่พบไฟล์ดังกล่าว"
    }
    const data = fs.readFileSync(path);
    if(data) {
        let profile = JSON.parse(data);
        if(query) {
            const result =  profile.find(e => e.userid == query)
            return result ? result : "ไม่พบข้อมูลผู้ใช้"
        }
        return profile
    }
};