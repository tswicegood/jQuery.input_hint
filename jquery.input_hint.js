(function($) {
    $.fn.input_hint = function() {
        var input = this;
        var hasDefaultValue = function() {
            return input[0].value == input[0].title;
        }
        this.focus(function() {
            if (hasDefaultValue() == false) {
                return true;
            }
            this.value = '';
            jQuery(this).removeClass("hint");
        });
        this.blur(function() {
            if (this.value != '') {
                return true;
            }
            jQuery(this).addClass("hint");
            this.value = this.title;
        });
        this.blur();
        this.parents("form").submit(function(eventObj) {
            if (hasDefaultValue()) {
                eventObj.stopPropagation();
            }
        });
    };
})(jQuery);

