class VigenereCipheringMachine {
    constructor (direct = true) {
        this.direct = direct;
    }

    core(message, key, dec = false) {
        key = key.toUpperCase();
        message = message.toUpperCase();
        const alphabet = [];
        for (let i = 65; i < 91; i++) {
            alphabet.push(String.fromCharCode(i));
        }
        const MOD = alphabet.length;
        let result = '';
        let j = 0;
        for (let i = 0; i < message.length; i++) {
            if(alphabet.includes(message[i])) {
                const massageIndex = alphabet.indexOf(message[i]);
                const keyIndex = alphabet.indexOf(key[j]);
                !dec ? result += alphabet[(massageIndex + keyIndex) % MOD] : result += alphabet[(massageIndex - keyIndex + MOD) % MOD];
                j === key.length - 1 ? j = 0 : j++;
            } else {
                result += message[i]
            }
        }
        return this.direct ? result : result.split('').reverse().join('');
    }

    encrypt(message, key) {
        if (!message || !key) {
            throw new Error('Invalid argument');
        }
        return this.core(message, key);
    }

    decrypt(message, key) {
        if (!message || !key) {
            throw new Error('Invalid argument');
        }
        return this.core(message, key, true);
    }
}

module.exports = VigenereCipheringMachine;
