const fs = require("fs");
const path = require('path');
const base_path = process.cwd();
const mac_memorandum_dir_path = base_path + "/memorandum";

function readDir(pathName, callBack) {
    fs.readdir(pathName, function (err, files) {
        let dirs = [];
        (function iterator(i) {
            if (i === files.length) {
                callBack(dirs);
                return;
            }
            fs.stat(path.join(pathName, files[i]), function (err, data) {
                if (data.isFile()) {
                    dirs.push(files[i]);
                }
                iterator(i + 1);
            });
        })(0);
    });
}

export function delFile(type, name) {
    let file_path = "";
    if (type === 'memorandum') {
        file_path = mac_memorandum_dir_path + '/' + name + '.txt';
    }
    fs.unlink(file_path, err => err);
}

export function getMemorandum(callBack) {
    readDir(mac_memorandum_dir_path, callBack);
}

export function MemorandumFileRead(name) {
    return fs.readFileSync(mac_memorandum_dir_path + '/' + name + '.txt', 'utf8');
}

export function MemorandumFileWrite(oldName, titleInput, textarea, id, type) {
    if (type === 'new' || oldName === titleInput) {
        fs.writeFile(mac_memorandum_dir_path + '/' + titleInput + '@' + id + '.txt', textarea, err => err);
    }
    if (type === 'update' && oldName !== titleInput) {
        fs.writeFile(mac_memorandum_dir_path + '/' + oldName + '@' + id + '.txt', textarea, err => err);
        fs.rename(mac_memorandum_dir_path + '/' + oldName + '@' + id + '.txt',
            mac_memorandum_dir_path + '/' + titleInput + '@' + id + '.txt',
            err => err);
    }
}
