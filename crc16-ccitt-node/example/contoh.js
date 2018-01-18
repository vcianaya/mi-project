var crc = require('crc16-ccitt-node');
var buffData = new Buffer('05010001', 'hex');

console.log("string hex : %s ", crc.getCrc16('05010001').toString(16));
// string hex : c1f4

console.log("decimal : %d ", crc.getCrc16(buffData));
// decimal : 49652