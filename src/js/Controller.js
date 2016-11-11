const View      = require('./View');
const Model     = require("./Model");
const Converter = require("./Converter");


const Controller = {
    
  regExp: {
    bin: new RegExp('[0-1]','g'),
    dec: new RegExp('[0-9]','g'),
    hex: new RegExp('[0-9A-Fa-f]','g')
  },

  Init: function() {
    View.Init( this );
  },

  Number: {

    Get: function() {
      return Model.number;
    },
    Set: function( num ) {
      Model.number = num;
    },

    Validate: function( val ) {
      var regExp = Controller.regExp[Model.convertFrom];
    
      if ( val.match( regExp ) === null ) return '';
      else return val.match( regExp ).join('').toUpperCase();
    },
    Enable: function( inp ) {
      inp.disabled = false;
    },
    Clear: function( inp ) {
      inp.value = '';
      Controller.Number.Set( inp.value );
    }

  },

  ConvertFrom: {

    Get: function() {
      return Model.convertFrom;
    },
    Set: function( inpName ) {
      Model.convertFrom = document.querySelector('input[name="' + inpName + '"]:checked').value;
    }

  },

  ConvertTo: {

    Get: function() {
      return Model.convertTo;
    },
    Set: function( inps ) {
      var convertTo = [];
    
      inps.forEach( function( inp ) {
        if ( inp.checked ) convertTo.push( inp.value );
      });
      Model.convertTo = convertTo;
    },

    Enable: function( inps ) {
      inps.forEach( function( inp ) {
        if ( inp.value !== Model.convertFrom ) {
          inp.disabled = false;
        } else {
          inp.disabled = true;
          inp.checked  = false;
        }
      });
    }
  },

  Convert: function( sets ) {
    var results = [];

    sets.to.forEach( function( base ) {
      results.push( Converter[ sets.from ][ base ]( sets.num ) );
    });

    return results;
  }

};
module.exports = Controller;
