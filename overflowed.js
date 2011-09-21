/* Overflowed.js
 * http://elvingrodriguez.com/overflowed
 *
 * Copyright 2011, Elving Rodriguez
 *
 * Date: Tue Sep 20 2011
 */
(function($) {
	$.fn.overflowed = function(callback) {
	  var $this = $(this),
	      $thisLenght = $this.length,
	      $window = $(window),
	      position = $thisLenght === 1 ? $this.offset() : {},
	      lr = 0,
	      tb = 0,
	      lrLimit = $window.width(),
	      tbLimit = $window.height(),
	      _overflowed = [],
	      hasCallback = callback !== 'undefined' && typeof callback === 'function' ? true : false;
  
	  if (position.left !== 'undefined') position.left -= $window.scrollLeft();
	  if (position.top !== 'undefined') position.top -= $window.scrollTop();
	  lr = $thisLenght === 1 ? position.left + $this.outerWidth() : 0;
	  tb = $thisLenght === 1 ? position.top + $this.outerHeight() : 0;

	  if ($thisLenght > 1) {
	    $this.each(function(){
	      var $ele = $(this);
	      position = $ele.offset();
	      position.left -= $window.scrollLeft();
	      position.top -= $window.scrollTop();
	      lr = position.left + $ele.outerWidth();
	      tb = position.top + $ele.outerHeight();
	      if (position.top < 0 || position.left < 0 || tb > tbLimit || lr > lrLimit) _overflowed.push($ele);
	      if (hasCallback) callback($ele);
	    });
	    if (!hasCallback) return _overflowed;
	  } else if ($thisLenght === 1)  {
	    return position.top < 0 || position.left < 0 || tb > tbLimit || lr > lrLimit ? true : false;
	  } else {
	    return false;
	  }
	};
})(jQuery);