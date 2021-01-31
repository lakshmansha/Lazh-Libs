import { Inject, Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class LazhCryptoService {
  private _Keys;

  constructor(@Inject('CRYPTO_KEY') private keys: string) {
    this._Keys = keys;
  }

  //#region AES Encryption & Decryption

  // The set method used for encrypting the value.
  setAES(value: string) {
    const key = CryptoJS.enc.Utf8.parse(this._Keys.substring(0, 16));
    const iv = CryptoJS.enc.Utf8.parse(this._Keys.substring(0, 16));
    const encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value.toString()), key, {
      keySize: 128 / 8,
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });

    // const _rtnVal = JSON.stringify(encrypted.toString());
    const _rtnVal = encrypted.toString();
    return _rtnVal;
  }

  // The get method is used for decrypt the value.
  getAES(value: string) {
    const key = CryptoJS.enc.Utf8.parse(this._Keys.substring(0, 16));
    const iv = CryptoJS.enc.Utf8.parse(this._Keys.substring(0, 16));
    const decrypted = CryptoJS.AES.decrypt(value, key, {
      keySize: 128 / 8,
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });

    return decrypted.toString(CryptoJS.enc.Utf8);
  }

  //#endregion
}
