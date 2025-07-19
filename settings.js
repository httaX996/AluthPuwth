const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? '𝙽𝙴𝙻𝚄𝙼𝙸-𝙼𝙳=3sAETTxR#eR2sLEouOkgzMIvepbBYVAyevcYe-ftT_ugmW0PkMNs' : process.env.SESSION_ID,
PREFIX: process.env.PREFIX || '.' ,
MODE: process.env.MODE === undefined ?"public" : process.env.MODE,
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS === undefined ?"true" : process.env.AUTO_READ_STATUS
};
