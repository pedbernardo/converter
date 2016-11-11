const View = {

  Init: function( Controller ) {
    this.Controller  = Controller;
    this.button      = document.querySelector('.js-convert');
    this.number      = document.querySelector('[name="number"]');
    this.convertFrom = document.querySelectorAll('[name="numberBase"]');
    this.convertTo   = document.querySelectorAll('[name="convertBase"]');
    this.form        = document.querySelector('.converter-form > .form');
    
    View.Events();
  },

  Events: function() {
    View.convertFrom.forEach( function( input ) {
      input.addEventListener( 'change', function() {
        View.Controller.ConvertFrom.Set( input.name );
        View.Controller.Number.Clear( View.number );
        View.Controller.Number.Enable( View.number );
        View.Controller.ConvertTo.Enable( View.convertTo );
        View.Controller.ConvertTo.Set( View.convertTo );
        View.Controller.Form.Enable( View.form );
      });
    });
    
    View.button.addEventListener( 'click', function() {
      var config = {
        num: View.Controller.Number.Get(),
        from: View.Controller.ConvertFrom.Get(),
        to: View.Controller.ConvertTo.Get()
      };

      View.Log( config );
    });
    
    View.number.addEventListener( 'keyup', function() {
      if ( this.value )
        this.value = View.Controller.Number.Validate( this.value );
      View.Controller.Number.Set( this.value );
    });
    
    View.convertTo.forEach( function( input ) {
      input.addEventListener( 'change', function() {
        View.Controller.ConvertTo.Set( View.convertTo );
      });
    });
  },

  Log: function( config ) {
    var result = View.Controller.Convert( config );

    console.log( 'result:' );
    console.log( result );
  }

}
module.exports = View;