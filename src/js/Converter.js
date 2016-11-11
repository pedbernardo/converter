const Converter = {

  bin: {

    dec: function( bin ) {
      var result = {};
      
      result.bin  = bin.split('').reverse();
      result.exps = [];
      result.pows = [];
      result.dec  = null;
      result.trueCheck = parseInt( bin, 2 );
      
      result.bin.map( function( n, i ) {
        
        result.exps.push( '2^'+ i );
        
        if ( Boolean(parseInt(n)) ) {
          var pow = Math.pow(2, i);
          result.pows.push(pow);
          result.dec += pow;
        } else {
          result.pows.push(0);
        }
      });
      
      return result;
    },

    hex: function( bin ) {
      return "[#] TODO: Convert Bin to Hex";
      // convert into nibbles (1/2 bytes = 4 bits => 0000)
      // then convert to hex { 0-9 | A-F }
    }
  },

  dec: {

    bin: function( dec ) {
      var result = {};
      
      result.dec       = dec;
      result.reminders = [];
      result.quotients = [];
      result.converted = null;
      result.trueCheck = parseInt( dec ).toString(2);
      
      Converter.dec.reminderMethod( dec, 2, result );
      return result;
    },

    hex: function( dec ) {
      var result = {};
      
      result.dec       = dec;
      result.reminders = [];
      result.quotients = [];
      result.converted = null;
      result.trueCheck = parseInt( dec ).toString(16).toUpperCase();
      
      Converter.dec.reminderMethod( dec, 16, result );
      return result;
    },

    reminderMethod: function( n, base, res ) {
      var r = ( n%base).toString( base ).toUpperCase()
        , q = Math.floor( n/base );

      res.quotients.push( q );
      res.reminders.push( r );

      ( q > 0 ) ? Converter.dec.reminderMethod( q, base, res ) : res.converted = res.reminders.slice().reverse().join('') ;
    }
  },

  hex: {
    bin: function( hex ) {
      return "[#] TODO: Convert Hex to Bin";
    }, //convert each number to dec (e.g. 1F = [1,15]) then to bin

    dec: function( hex ) {
      return "[#] TODO: Convert Hex to Dec";
    } //todo (wiki)
  }

};

module.exports = Converter;