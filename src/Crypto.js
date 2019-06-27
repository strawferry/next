import CryptoJS from 'crypto-js';

// 初始向量 initial vector 8 位
const iv = CryptoJS.enc.Utf8.parse('01234567');

// 结果
class Crypto {

  static encrypt (key,plainText) {
    console.log(plainText);
    const secretKey = CryptoJS.enc.Utf8.parse(key);
    let encrypted = CryptoJS.TripleDES.encrypt(plainText, secretKey, {
      iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    // 转换为字符串
    encrypted = encrypted.toString();
    return encrypted;
  }

  static decrypt (key,encryptText) {
    const secretKey = CryptoJS.enc.Utf8.parse(key);
    let decrypted = CryptoJS.TripleDES.decrypt(encryptText, secretKey, {
      iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    decrypted = decrypted.toString(CryptoJS.enc.Utf8);
    console.log(decrypted);
    return decrypted;
  }

}
export default Crypto;
