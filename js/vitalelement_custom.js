


// For back to top tool

// Back to top

// Only enable if the document has a long scroll bar
// Note the window height + offset
if ( ($(window).height() + 100) < $(document).height() ) {
    $('#top-link-block').removeClass('hidden').affix({
        // how far to scroll down before link "slides" into view
        offset: {top:100}
    });
}




// For hover drop menu activation

$(function() {

	$('ul.nav li.dropdown').hover(function() {
		$('.dropdown-menu', this).fadeIn();
	}, function () {
		$('.dropdown-menu', this).fadeOut('fast');
	}); //hover
	
}); // jQuery is loaded

// Allows parent navigation elements to be active links.
$('.dropdown-toggle').click(function() {
    var location = $(this).attr('href');
    window.location.href = location;
    return false;
});




// For simple small 4 across carosel

$(document).ready(function() {
    $('#Carousel').carousel({
        interval: 5000
    })
});










// For Off Canvas Navigation

var menuLeft = document.getElementById( 'cbp-spmenu-offCanvasRight' ),
        menuRight = document.getElementById( 'cbp-spmenu-offCanvasRight' ),
        showRightPush = document.getElementById( 'showRightPush' ),
        body = document.body;
 

showRightPush.onclick = function() {
    classie.toggle( this, 'active' );
    classie.toggle( body, 'cbp-spmenu-push-toleft' );
    classie.toggle( menuRight, 'cbp-spmenu-open' );
    disableOther( 'showRightPush' );
};
 
function disableOther( button ) {

    if( button !== 'showRightPush' ) {
        classie.toggle( showRightPush, 'disabled' );
    }
};

/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

window.classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

})( window );