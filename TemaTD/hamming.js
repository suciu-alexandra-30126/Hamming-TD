function decode ( bits ) {
var z32 = parity(bits[32] + bits[33] + bits[34] + bits[35] + bits[36] + bits[37])

var z16 = parity(bits[15] + bits[16] + bits[17] + bits[18] + bits[19] + bits[20] +bits[21] + bits[22] + bits[23] + bits[24] +
           bits[25] + bits[26] + bits[27] + bits[28] + bits[29] + bits[30]);
  
var z8 = parity(bits[7] + bits[8] + bits[9] + bits[10] + bits[11] +bits[12] + bits[13] + bits[14] + bits[23] + bits[24] +
           bits[25] + bits[26] + bits[27] + bits[28] + bits[29] + bits[30])
  
var z4 = parity(bits[3] + bits[4] + bits[5] + bits[6] + bits[11] + bits[12] + bits[13] + bits[14] + bits[19] + bits[20] + bits[21] +
           bits[22] + bits[27] + bits[28] + bits[29] + bits[30] + bits[35] + bits[36] + bits[37]);
  
var z2 = parity(bits[1] + bits[2] + bits[5] + bits[6] + bits[9] + bits[10] + bits[13] + bits[14] + bits[17] + bits[18] + bits[21] +
           bits[22] + bits[25] + bits[26] + bits[29] + bits[30] + bits[33] + bits[34] + bits[37]);
  
var z1 = parity(bits[0] + bits[2] + bits[4] +  bits[6] + bits[8] + bits[10] + bits[12] + bits[14] + bits[16] + bits[18] + bits[20] +
            bits[22] + bits[24] + bits[26] + bits[28] + bits[30] + bits[32] + bits[34] + bits[36]);

 var errorPosition =z1 *1 + z2 *2 + z4 *4 + z8 *8 + z16 * 16 + z32 * 32;
 var errorDetected = false;
 if ( errorPosition !=0) errorDetected = true;
 if ( errorDetected ) {
 bits [ errorPosition -1]= parity ( bits [ errorPosition -1]+1);
 }
 return { errorCorrected : errorDetected , errorPosition :errorPosition -1, bits : bits };
 }

 parity = function ( number ){
 return number % 2;
 }

 exports . decode = decode ;