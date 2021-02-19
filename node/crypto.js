var CryptoJS = require("crypto-js");
var keyHex = CryptoJS.enc.Utf8.parse('awifi@np');//密钥
var encrypted = CryptoJS.DES.encrypt('tianshui@123', keyHex, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
});
//console.log(encrypted.toString());
//console.log(encrypted.ciphertext.toString(CryptoJS.enc.Base64));

var password = encrypted.ciphertext.toString(CryptoJS.enc.Base64);
console.log(password)
console.log('password', password)