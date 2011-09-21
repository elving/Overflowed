overflow.js
===========

A tiny, unnecessary, and useless jquery plugin that tells you if an element is overflowed (partially hidden).

Installation
-----------

Include script after the jQuery library

<script src="/path/to/jquery.js"></script>
<script src="/path/to/overflowed.min.js"></script>

Usage
-----

$('.normalElement').overflowed(); //Will return false
$('.overflowedElement').overflowed(); //Will return true
$('.someElements').overflowed(); //Will return an array of overflowed elements
$('.someElements').overflowed(function(e) {
    //Pass a callback function and do something with those overflowed elements!
    e.addClass('overflowed');
});

Support
-------

Works with IE6+, Opera 10+, Chrome, Safari, Firefox 3.6+, jQuery 1.2+

Source
------

Source hosted at {GitHub}[https://github.com/elving/Overflowed]

Author
------

{Elving Rodriguez}[https://github.com/elving/]