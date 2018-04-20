/* =======================================================================
 * JSExercises: helpers.js v 0.0.1
 * ======================================================================= */

+function($) {
	'use strict';

	/* =============================
	 * Range Select Class Definition
	 * ============================= */

	var Range = function(elem, options) {
	 this.$elem   = $(elem)
	 this.options = $.extend({}, Range.DEFAULTS, options)
	}

	Range.VERSION  = '0.0.1'

	// Range default settings
	Range.DEFAULTS = {
		from     : 1,
		to       : 1000,
		step     : 1,
		operator : '+'
	}

	// Fill the select
	Range.prototype.fill = function(value) {
		var elem    = document.createElement("option")
		var options = this.options

		$(elem).val(value).text(value) // Set value and text of each options
		$(this.$elem).append(elem) // Append the option

		// Operator filter
		switch (options.operator) {
			case '+':
				// Recursive calling step by step
				if (value < options.to) return this.fill(value += options.step)
			break;

			case '-':
				if (value > options.to) return this.fill(value -= options.step)
			break;

			case '*':
				if (value < options.to) return this.fill(value *= options.step)
			break;

			case '/':
				if (value > options.to) return this.fill(value /= options.step)
			break;

			default: return
		}
	}


	/* =============================
	 * Range Select Plugin Definition
	 * ============================= */

	function Helper(options) {
        return this.each(function () {
			var $this   = $(this)
			var data    = $this.data('ex.range')

			if (!data) $this.data('ex.range', (data = new Range(this, options) ) )

			var from = data.options.from

			data.fill(from)
        })
    }

		var old = $.fn.range

    $.fn.range             = Helper
    $.fn.range.Constructor = Range

	/* =================
     * Range NO CONFLICT
     * =================*/

    $.fn.range.noConflict = function () {
      $.fn.range = old
      return this
    }

} (jQuery);

+function($) {
	'use strict';

	$.fn.addRows = function(number = 1) {
		for (var i = 0; i < number; i++) {
			var row = document.createElement("tr")
			this.append(row)
		}

		return (number == 1) ? $(row) : this
	}

	$.fn.addCols = function(values, head = false) {
		for (var val of values) {
			var col = (head) ? document.createElement("th") : document.createElement("td")
			$(col).text(val)
			this.append(col)
		}
	}

} (jQuery);
