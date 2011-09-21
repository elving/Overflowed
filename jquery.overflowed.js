/* Overflowed.js
 * http://elvingrodriguez.com/overflowed
 *
 * Copyright 2011, Elving Rodriguez
 *
 * Date: Tue Sep 20 2011
 */
(function($) {
	$.fn.overflowed = function(callback) {
	  var $this = this,
	      $window = $(window),
	      position = {},
	      lrLimit = $window.width(),
	      tbLimit = $window.height(),
	      lr = 0,
	      tb = 0,
	      $overflowed = [],
	      hasCallback = callback && typeof callback === 'function' ? true : false,
	      status = false;

	  $this.each(function() {
	    var $this = $(this);
	    position = $this.offset();
	    position.left -= $window.scrollLeft();
	    position.top -= $window.scrollTop();
	    lr = position.left + $this.outerWidth();
	    tb = position.top + $this.outerHeight();
	    if (position.top < 0 || position.left < 0 || tb > tbLimit || lr > lrLimit) {
	      status = true;
	      $overflowed.push($this);
	      if (hasCallback) callback($this);
	    }
	  });

	  if (!hasCallback) return $overflowed.length > 1 ? $overflowed : status;
	};
})(jQuery);