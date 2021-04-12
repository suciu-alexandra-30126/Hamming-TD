var app = new Vue ({
     el: '# hamming - encoder ',
     data : {
        dataBits : [],
         status : '',
         numberOfDataBits : 4
         },
         created : function () {
         this . initDataBits (4);
         },
         methods : {
         initDataBits : function (){
         this . dataBits =[];
        
         for( var i=0;i< this . numberOfDataBits ;i++){
         var bit = { data : null };
         this . dataBits . push (bit);
         }
         },
         send : function () {
         if ( this . validate ( this . dataBits ) === true ){
         var encodedMessage = this . encode ( this .
        dataBits );
         // this . status = encodedMessage + ' encoded sent to server ';
        
         return axios .put(" http :// localhost :3000/message ", { bits : encodedMessage }). then ( response => ( this . status = response .data )
         );
         } else {
         this . status = 'Input is not valid . Please use 0 or 1 as data bit values ';
         }
         },
         encode : function ( bits ){
         // This function must be changed to allow any number of data bits
         // Right now it only works for 4 data bits
         console.log("Bits", bits);
      var c32 = this.parity(
        parseInt(bits[26].data) + parseInt(bits[27].data) + parseInt(bits[28].data) + parseInt(bits[29].data) + parseInt(bits[30].data) +
         parseInt(bits[31].data)
      );

      var c16 = this.parity(
        parseInt(bits[11].data) + parseInt(bits[12].data) + parseInt(bits[13].data) + parseInt(bits[14].data) + parseInt(bits[15].data) +
        parseInt(bits[16].data) + parseInt(bits[17].data) + parseInt(bits[18].data) + parseInt(bits[19].data) + parseInt(bits[20].data) + 
        parseInt(bits[21].data) + parseInt(bits[22].data) + parseInt(bits[23].data) + parseInt(bits[24].data) + parseInt(bits[25].data)
      );

      var c8 = this.parity(
        parseInt(bits[4].data) + parseInt(bits[5].data) + parseInt(bits[6].data) + parseInt(bits[7].data) + parseInt(bits[8].data) + 
        parseInt(bits[9].data) + parseInt(bits[10].data) + parseInt(bits[18].data) + parseInt(bits[19].data) +parseInt(bits[20].data) + 
        parseInt(bits[21].data) + parseInt(bits[22].data) + parseInt(bits[23].data) + parseInt(bits[24].data) + parseInt(bits[25].data)
      );

      var c4 = this.parity(
        parseInt(bits[1].data) + parseInt(bits[2].data) + parseInt(bits[3].data) + parseInt(bits[7].data) + parseInt(bits[8].data) + 
        parseInt(bits[9].data) + parseInt(bits[10].data) + parseInt(bits[14].data) + parseInt(bits[15].data) + parseInt(bits[16].data) + 
        parseInt(bits[17].data) + parseInt(bits[22].data) + parseInt(bits[23].data) + parseInt(bits[24].data) + parseInt(bits[25].data) +
        parseInt(bits[29].data) + parseInt(bits[30].data) + parseInt(bits[31].data)
      );

      var c2 = this.parity(
        parseInt(bits[0].data) + parseInt(bits[2].data) + parseInt(bits[3].data) + parseInt(bits[5].data) + parseInt(bits[6].data) + 
        parseInt(bits[9].data) + parseInt(bits[10].data) + parseInt(bits[12].data) + parseInt(bits[13].data) + parseInt(bits[16].data) + 
        parseInt(bits[17].data) + parseInt(bits[20].data) + parseInt(bits[21].data) + parseInt(bits[24].data) + parseInt(bits[25].data) +
        parseInt(bits[27].data) + parseInt(bits[28].data) + parseInt(bits[31].data)
      );

      var c1 = this.parity(
        parseInt(bits[0].data) + parseInt(bits[1].data) + parseInt(bits[3].data) + parseInt(bits[4].data) + parseInt(bits[6].data) + 
        parseInt(bits[8].data) + parseInt(bits[10].data) + parseInt(bits[11].data) + parseInt(bits[13].data) + parseInt(bits[15].data) + 
        parseInt(bits[17].data) + parseInt(bits[19].data) + parseInt(bits[21].data) + parseInt(bits[23].data) + parseInt(bits[25].data) +
        parseInt(bits[26].data) + parseInt(bits[28].data) + parseInt(bits[30].data)
      );
 console .log (" Control bits : "+c1+","+c2+","+c4);
 return [c1,c2,parseInt(bits[0].data),c4,parseInt(bits[1].data),parseInt(bits[2].data),parseInt(bits[3].data),
        c8,parseInt(bits[4].data),parseInt(bits[5].data),parseInt(bits[6].data),parseInt(bits[7].data),parseInt(bits[8].data),parseInt(bits[9].data),
        parseInt(bits[10].data),c16,parseInt(bits[11].data),parseInt(bits[12].data),parseInt(bits[13].data),parseInt(bits[14].data),
        parseInt(bits[15].data),parseInt(bits[16].data),parseInt(bits[17].data),parseInt(bits[18].data),parseInt(bits[19].data),
        parseInt(bits[20].data),parseInt(bits[21].data),parseInt(bits[22].data),parseInt(bits[23].data),parseInt(bits[24].data),
        parseInt(bits[25].data),c32,parseInt(bits[26].data),parseInt(bits[27].data),parseInt(bits[28].data),parseInt(bits[29].data),
        parseInt(bits[30].data),parseInt(bits[31].data)
  ];;
 },
 parity : function ( number ){
 return number % 2;
 },
 validate : function ( bits ){
 for( var i=0; i< bits . length ;i ++){
 if ( this . validateBit ( bits [i]. data ) ===false )
 return false ;
 }
 return true ;
 },
 validateBit : function ( character ){
 if ( character === null ) return false ;
 return ( parseInt ( character ) === 0 ||
 parseInt ( character ) === 1);
 }
 }
 })