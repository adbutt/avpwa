"use strict";

/*! jQuery & Zepto Lazy v1.7.8 - http://jquery.eisbehr.de/lazy - MIT&GPL-2.0 license - Copyright 2012-2018 Daniel 'Eisbehr' Kern */
!function (t, e) {
  "use strict";

  function r(r, a, i, u, l) {
    function f() {
      L = t.devicePixelRatio > 1, i = c(i), a.delay >= 0 && setTimeout(function () {
        s(!0);
      }, a.delay), (a.delay < 0 || a.combined) && (u.e = v(a.throttle, function (t) {
        "resize" === t.type && (w = B = -1), s(t.all);
      }), u.a = function (t) {
        t = c(t), i.push.apply(i, t);
      }, u.g = function () {
        return i = n(i).filter(function () {
          return !n(this).data(a.loadedName);
        });
      }, u.f = function (t) {
        for (var e = 0; e < t.length; e++) {
          var r = i.filter(function () {
            return this === t[e];
          });
          r.length && s(!1, r);
        }
      }, s(), n(a.appendScroll).on("scroll." + l + " resize." + l, u.e));
    }

    function c(t) {
      var i = a.defaultImage,
          o = a.placeholder,
          u = a.imageBase,
          l = a.srcsetAttribute,
          f = a.loaderAttribute,
          c = a._f || {};
      t = n(t).filter(function () {
        var t = n(this),
            r = m(this);
        return !t.data(a.handledName) && (t.attr(a.attribute) || t.attr(l) || t.attr(f) || c[r] !== e);
      }).data("plugin_" + a.name, r);

      for (var s = 0, d = t.length; s < d; s++) {
        var A = n(t[s]),
            g = m(t[s]),
            h = A.attr(a.imageBaseAttribute) || u;
        g === N && h && A.attr(l) && A.attr(l, b(A.attr(l), h)), c[g] === e || A.attr(f) || A.attr(f, c[g]), g === N && i && !A.attr(E) ? A.attr(E, i) : g === N || !o || A.css(O) && "none" !== A.css(O) || A.css(O, "url('" + o + "')");
      }

      return t;
    }

    function s(t, e) {
      if (!i.length) return void (a.autoDestroy && r.destroy());

      for (var o = e || i, u = !1, l = a.imageBase || "", f = a.srcsetAttribute, c = a.handledName, s = 0; s < o.length; s++) {
        if (t || e || A(o[s])) {
          var g = n(o[s]),
              h = m(o[s]),
              b = g.attr(a.attribute),
              v = g.attr(a.imageBaseAttribute) || l,
              p = g.attr(a.loaderAttribute);
          g.data(c) || a.visibleOnly && !g.is(":visible") || !((b || g.attr(f)) && (h === N && (v + b !== g.attr(E) || g.attr(f) !== g.attr(F)) || h !== N && v + b !== g.css(O)) || p) || (u = !0, g.data(c, !0), d(g, h, v, p));
        }
      }

      u && (i = n(i).filter(function () {
        return !n(this).data(c);
      }));
    }

    function d(t, e, r, i) {
      ++z;

      var _o = function o() {
        y("onError", t), p(), _o = n.noop;
      };

      y("beforeLoad", t);
      var u = a.attribute,
          l = a.srcsetAttribute,
          f = a.sizesAttribute,
          c = a.retinaAttribute,
          s = a.removeAttribute,
          d = a.loadedName,
          A = t.attr(c);

      if (i) {
        var _g = function g() {
          s && t.removeAttr(a.loaderAttribute), t.data(d, !0), y(T, t), setTimeout(p, 1), _g = n.noop;
        };

        t.off(I).one(I, _o).one(D, _g), y(i, t, function (e) {
          e ? (t.off(D), _g()) : (t.off(I), _o());
        }) || t.trigger(I);
      } else {
        var h = n(new Image());
        h.one(I, _o).one(D, function () {
          t.hide(), e === N ? t.attr(C, h.attr(C)).attr(F, h.attr(F)).attr(E, h.attr(E)) : t.css(O, "url('" + h.attr(E) + "')"), t[a.effect](a.effectTime), s && (t.removeAttr(u + " " + l + " " + c + " " + a.imageBaseAttribute), f !== C && t.removeAttr(f)), t.data(d, !0), y(T, t), h.remove(), p();
        });
        var m = (L && A ? A : t.attr(u)) || "";
        h.attr(C, t.attr(f)).attr(F, t.attr(l)).attr(E, m ? r + m : null), h.complete && h.trigger(D);
      }
    }

    function A(t) {
      var e = t.getBoundingClientRect(),
          r = a.scrollDirection,
          n = a.threshold,
          i = h() + n > e.top && -n < e.bottom,
          o = g() + n > e.left && -n < e.right;
      return "vertical" === r ? i : "horizontal" === r ? o : i && o;
    }

    function g() {
      return w >= 0 ? w : w = n(t).width();
    }

    function h() {
      return B >= 0 ? B : B = n(t).height();
    }

    function m(t) {
      return t.tagName.toLowerCase();
    }

    function b(t, e) {
      if (e) {
        var r = t.split(",");
        t = "";

        for (var a = 0, n = r.length; a < n; a++) {
          t += e + r[a].trim() + (a !== n - 1 ? "," : "");
        }
      }

      return t;
    }

    function v(t, e) {
      var n,
          i = 0;
      return function (o, u) {
        function l() {
          i = +new Date(), e.call(r, o);
        }

        var f = +new Date() - i;
        n && clearTimeout(n), f > t || !a.enableThrottle || u ? l() : n = setTimeout(l, t - f);
      };
    }

    function p() {
      --z, i.length || z || y("onFinishedAll");
    }

    function y(t, e, n) {
      return !!(t = a[t]) && (t.apply(r, [].slice.call(arguments, 1)), !0);
    }

    var z = 0,
        w = -1,
        B = -1,
        L = !1,
        T = "afterLoad",
        D = "load",
        I = "error",
        N = "img",
        E = "src",
        F = "srcset",
        C = "sizes",
        O = "background-image";
    "event" === a.bind || o ? f() : n(t).on(D + "." + l, f);
  }

  function a(a, o) {
    var u = this,
        l = n.extend({}, u.config, o),
        f = {},
        c = l.name + "-" + ++i;
    return u.config = function (t, r) {
      return r === e ? l[t] : (l[t] = r, u);
    }, u.addItems = function (t) {
      return f.a && f.a("string" === n.type(t) ? n(t) : t), u;
    }, u.getItems = function () {
      return f.g ? f.g() : {};
    }, u.update = function (t) {
      return f.e && f.e({}, !t), u;
    }, u.force = function (t) {
      return f.f && f.f("string" === n.type(t) ? n(t) : t), u;
    }, u.loadAll = function () {
      return f.e && f.e({
        all: !0
      }, !0), u;
    }, u.destroy = function () {
      return n(l.appendScroll).off("." + c, f.e), n(t).off("." + c), f = {}, e;
    }, r(u, l, a, f, c), l.chainable ? a : u;
  }

  var n = t.jQuery || t.Zepto,
      i = 0,
      o = !1;
  n.fn.Lazy = n.fn.lazy = function (t) {
    return new a(this, t);
  }, n.Lazy = n.lazy = function (t, r, i) {
    if (n.isFunction(r) && (i = r, r = []), n.isFunction(i)) {
      t = n.isArray(t) ? t : [t], r = n.isArray(r) ? r : [r];

      for (var o = a.prototype.config, u = o._f || (o._f = {}), l = 0, f = t.length; l < f; l++) {
        (o[t[l]] === e || n.isFunction(o[t[l]])) && (o[t[l]] = i);
      }

      for (var c = 0, s = r.length; c < s; c++) {
        u[r[c]] = t[0];
      }
    }
  }, a.prototype.config = {
    name: "lazy",
    chainable: !0,
    autoDestroy: !0,
    bind: "load",
    threshold: 500,
    visibleOnly: !1,
    appendScroll: t,
    scrollDirection: "both",
    imageBase: null,
    defaultImage: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
    placeholder: null,
    delay: -1,
    combined: !1,
    attribute: "data-src",
    srcsetAttribute: "data-srcset",
    sizesAttribute: "data-sizes",
    retinaAttribute: "data-retina",
    loaderAttribute: "data-loader",
    imageBaseAttribute: "data-imagebase",
    removeAttribute: !0,
    handledName: "handled",
    loadedName: "loaded",
    effect: "show",
    effectTime: 0,
    enableThrottle: !0,
    throttle: 250,
    beforeLoad: e,
    afterLoad: e,
    onError: e,
    onFinishedAll: e
  }, n(t).on("load", function () {
    o = !0;
  });
}(window);
"use strict";

/*  jQuery Nice Select - v1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by Hernán Sartorio  */
!function (e) {
  e.fn.niceSelect = function (t) {
    function s(t) {
      t.after(e("<div></div>").addClass("nice-select").addClass(t.attr("class") || "").addClass(t.attr("disabled") ? "disabled" : "").attr("tabindex", t.attr("disabled") ? null : "0").html('<span class="current"></span><ul class="list"></ul>'));
      var s = t.next(),
          n = t.find("option"),
          i = t.find("option:selected");
      s.find(".current").html(i.data("display") || i.text()), n.each(function (t) {
        var n = e(this),
            i = n.data("display");
        s.find("ul").append(e("<li></li>").attr("data-value", n.val()).attr("data-display", i || null).addClass("option" + (n.is(":selected") ? " selected" : "") + (n.is(":disabled") ? " disabled" : "")).html(n.text()));
      });
    }

    if ("string" == typeof t) return "update" == t ? this.each(function () {
      var t = e(this),
          n = e(this).next(".nice-select"),
          i = n.hasClass("open");
      n.length && (n.remove(), s(t), i && t.next().trigger("click"));
    }) : "destroy" == t ? (this.each(function () {
      var t = e(this),
          s = e(this).next(".nice-select");
      s.length && (s.remove(), t.css("display", ""));
    }), 0 == e(".nice-select").length && e(document).off(".nice_select")) : console.log('Method "' + t + '" does not exist.'), this;
    this.hide(), this.each(function () {
      var t = e(this);
      t.next().hasClass("nice-select") || s(t);
    }), e(document).off(".nice_select"), e(document).on("click.nice_select", ".nice-select", function (t) {
      var s = e(this);
      e(".nice-select").not(s).removeClass("open"), s.toggleClass("open"), s.hasClass("open") ? (s.find(".option"), s.find(".focus").removeClass("focus"), s.find(".selected").addClass("focus")) : s.focus();
    }), e(document).on("click.nice_select", function (t) {
      0 === e(t.target).closest(".nice-select").length && e(".nice-select").removeClass("open").find(".option");
    }), e(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function (t) {
      var s = e(this),
          n = s.closest(".nice-select");
      n.find(".selected").removeClass("selected"), s.addClass("selected");
      var i = s.data("display") || s.text();
      n.find(".current").text(i), n.prev("select").val(s.data("value")).trigger("change");
    }), e(document).on("keydown.nice_select", ".nice-select", function (t) {
      var s = e(this),
          n = e(s.find(".focus") || s.find(".list .option.selected"));
      if (32 == t.keyCode || 13 == t.keyCode) return s.hasClass("open") ? n.trigger("click") : s.trigger("click"), !1;

      if (40 == t.keyCode) {
        if (s.hasClass("open")) {
          var i = n.nextAll(".option:not(.disabled)").first();
          i.length > 0 && (s.find(".focus").removeClass("focus"), i.addClass("focus"));
        } else s.trigger("click");

        return !1;
      }

      if (38 == t.keyCode) {
        if (s.hasClass("open")) {
          var l = n.prevAll(".option:not(.disabled)").first();
          l.length > 0 && (s.find(".focus").removeClass("focus"), l.addClass("focus"));
        } else s.trigger("click");

        return !1;
      }

      if (27 == t.keyCode) s.hasClass("open") && s.trigger("click");else if (9 == t.keyCode && s.hasClass("open")) return !1;
    });
    var n = document.createElement("a").style;
    return n.cssText = "pointer-events:auto", "auto" !== n.pointerEvents && e("html").addClass("no-csspointerevents"), this;
  };
}(jQuery);
"use strict";

/*!
	Modaal - accessible modals - v0.4.3
	by Humaan, for all humans.
	http://humaan.com
 */

/**
	Modaal jQuery Plugin : Accessible Modals

	==== General Options ===
	type (string) 					: ajax, inline, image, iframe, confirm. Defaults to 'inline'
	content_source (stribg)			: Accepts a string value for your target element, such as '#my-content'. This allows for when trigger element is
										an `<a href="#">` link. Not to be confused with the already existing `source` event.
	animation (string) 				: Fade, expand, down, up. Defaults to 'fade'
	after_callback_delay (integer)	: Specify a delay value for the after open callbacks. This is necessary because with the bundled animations
										have a set duration in the bundled CSS. Specify a delay of the same amount as the animation duration in so
										more accurately fire the after open/close callbacks. Defaults 350, does not apply if animation is 'none',
										after open callbacks are dispatched immediately

	is_locked (boolean)				: Set this to true to disable closing the modal via keypress or clicking the background. Beware that if
										type != 'confirm' there will be no interface to dismiss the modal if is_locked = true, you'd have to
										programmatically arrange to dismiss the modal. Confirm modals are always locked regardless of this option
										Defaults to false

	hide_close (boolean)			: Set this to true to hide the close modal button. Key press and overlay click will still close the modal.
										This method is best used when you want to put a custom close button inside the modal container space.

	background (string)				: Background overlay style. Defaults to '#000'
	overlay_opacity (float) 		: Background overlay transparency. Defaults to 0.8
	overlay_close (boolean)			: Set this to false if you want to disable click to close on overlay background.

	accessible_title (string)		: Accessible title. Default 'Dialog Window'
	start_open (boolean)			: Set this to true to launch the Modaal window immediately on page open
	fullscreen (boolean)			: Set this to true to make the modaal fill the entire screen, false will default to own width/height attributes.
	custom_class (string)			: Fill in this string with a custom class that will be applied to the outer most modal wrapper.

	width (integer)					: Desired width of the modal. Required for iframe type. Defaults to undefined //TODO
	height (integer)				: Desired height of the modal. Required for iframe type. Defaults to undefined //TODO

	background_scroll (boolean)		: Set this to true to enable the page to scroll behind the open modal.

    should_open (boolean|function)  : Boolean or closure that returns a boolean to determine whether to open the modal or not.

	close_text						: String for close button text. Available for localisation and alternative languages to be used.
	close_aria_label				: String for close button aria-label attribute (value that screen readers will read out). Available for localisation and alternative languages to be used.

	=== Events ===
	before_open (function) 			: Callback function executed before modal is opened
	after_open (function)			: Callback function executed after modal is opened
	before_close (function)			: Callback function executed before modal is closed
	after_close (function)			: Callback function executed after modal is closed
	source (function(element, src))	: Callback function executed on the default source, it is intended to transform the
										source (href in an AJAX modal or iframe). The function passes in the triggering element
										as well as the default source depending of the modal type. The default output of the
										function is an untransformed default source.


	=== Confirm Options & Events ===
	confirm_button_text (string)	: Text on the confirm button. Defaults to 'Confirm'
	confirm_cancel_button_text (string) : Text on the confirm modal cancel button. Defaults to 'Cancel'
	confirm_title (string)			: Title for confirm modal. Default 'Confirm Title'
	confirm_content (string)		: HTML content for confirm message
	confirm_callback (function)		: Callback function for when the confirm button is pressed as opposed to cancel
	confirm_cancel_callback (function) : Callback function for when the cancel button is pressed


	=== Gallery Options & Events ===
	gallery_active_class (string)	: Active class applied to the currently active image or image slide in a gallery 'gallery_active_item'
	outer_controls (boolean)		: Set to true to put the next/prev controls outside the Modaal wrapper, at the edges of the browser window.
	before_image_change (function)	: Callback function executed before the image slide changes in a gallery modal. Default function( current_item, incoming_item )
	after_image_change (function)	: Callback function executed after the image slide changes in a gallery modal. Default function ( current_item )


	=== AJAX Options & Events ===
	loading_content (string)		: HTML content for loading message. Default 'Loading &hellip;'
	loading_class (string)			: Class name to be applied while content is loaded via AJAX. Default 'is_loading'
	ajax_error_class (string)		: Class name to be applied when content has failed to load. Default is 'modaal-error'
	ajax_success (function)		 	: Callback for when AJAX content is loaded in


	=== SOCIAL CONTENT ===
	instagram_id (string)			: Unique photo ID for an Instagram photo.

*/
(function ($) {
  var modaal_loading_spinner = '<div class="modaal-loading-spinner"><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div></div>';
  var Modaal = {
    init: function init(options, elem) {
      var self = this;
      self.dom = $('body');
      self.$elem = $(elem);
      self.options = $.extend({}, $.fn.modaal.options, self.$elem.data(), options);
      self.xhr = null; // set up the scope

      self.scope = {
        is_open: false,
        id: 'modaal_' + new Date().getTime() + Math.random().toString(16).substring(2),
        source: self.options.content_source ? self.options.content_source : self.$elem.attr('href')
      }; // add scope attribute to trigger element

      self.$elem.attr('data-modaal-scope', self.scope.id); // private options

      self.private_options = {
        active_class: 'is_active'
      };
      self.lastFocus = null; // if is_locked

      if (self.options.is_locked || self.options.type == 'confirm' || self.options.hide_close) {
        self.scope.close_btn = '';
      } else {
        self.scope.close_btn = '<button type="button" class="modaal-close" id="modaal-close" aria-label="' + self.options.close_aria_label + '"><span>' + self.options.close_text + '</span></button>';
      } // reset animation_speed


      if (self.options.animation === 'none') {
        self.options.animation_speed = 0;
        self.options.after_callback_delay = 0;
      } // On click to open modal


      $(elem).on('click.Modaal', function (e) {
        e.preventDefault();
        self.create_modaal(self, e);
      }); // Define next/prev buttons

      if (self.options.outer_controls === true) {
        var mod_class = 'outer';
      } else {
        var mod_class = 'inner';
      }

      self.scope.prev_btn = '<button type="button" class="modaal-gallery-control modaal-gallery-prev modaal-gallery-prev-' + mod_class + '" id="modaal-gallery-prev" aria-label="Previous image (use left arrow to change)"><span>Previous Image</span></button>';
      self.scope.next_btn = '<button type="button" class="modaal-gallery-control modaal-gallery-next modaal-gallery-next-' + mod_class + '" id="modaal-gallery-next" aria-label="Next image (use right arrow to change)"><span>Next Image</span></button>'; // Check for start_open

      if (self.options.start_open === true) {
        self.create_modaal(self);
      }
    },
    // Initial create to determine which content type it requires
    // ----------------------------------------------------------------
    create_modaal: function create_modaal(self, e) {
      var self = this;
      var source; // Save last active state before modal

      self.lastFocus = self.$elem;

      if (self.options.should_open === false || typeof self.options.should_open === 'function' && self.options.should_open() === false) {
        return;
      } // CB: before_open


      self.options.before_open.call(self, e);

      switch (self.options.type) {
        case 'inline':
          self.create_basic();
          break;

        case 'ajax':
          source = self.options.source(self.$elem, self.scope.source);
          self.fetch_ajax(source);
          break;

        case 'confirm':
          self.options.is_locked = true;
          self.create_confirm();
          break;

        case 'image':
          self.create_image();
          break;

        case 'iframe':
          source = self.options.source(self.$elem, self.scope.source);
          self.create_iframe(source);
          break;

        case 'video':
          self.create_video(self.scope.source);
          break;

        case 'instagram':
          self.create_instagram();
          break;
      } // call events to be watched (click, tab, keyup, keydown etc.)


      self.watch_events();
    },
    // Watching Modal
    // ----------------------------------------------------------------
    watch_events: function watch_events() {
      var self = this;
      self.dom.off('click.Modaal keyup.Modaal keydown.Modaal'); // Body keydown

      self.dom.on('keydown.Modaal', function (e) {
        var key = e.keyCode;
        var target = e.target; // look for tab change and reset focus to modal window
        // done in keydown so the check fires repeatedly when you hold the tab key down

        if (key == 9 && self.scope.is_open) {
          if (!$.contains(document.getElementById(self.scope.id), target)) {
            $('#' + self.scope.id).find('*[tabindex="0"]').focus();
          }
        }
      }); // Body keyup

      self.dom.on('keyup.Modaal', function (e) {
        var key = e.keyCode;
        var target = e.target;

        if (e.shiftKey && e.keyCode == 9 && self.scope.is_open) {
          // Watch for shift + tab key press. if open shift focus to close button.
          if (!$.contains(document.getElementById(self.scope.id), target)) {
            $('#' + self.scope.id).find('.modaal-close').focus();
          }
        }

        if (!self.options.is_locked) {
          // On escape key press close modal
          if (key == 27 && self.scope.is_open) {
            if ($(document.activeElement).is('input:not(:checkbox):not(:radio)')) {
              return false;
            }

            self.modaal_close();
            return;
          }
        } // is gallery open and images length is > 1


        if (self.options.type == 'image') {
          // arrow left for back
          if (key == 37 && self.scope.is_open && !$('#' + self.scope.id + ' .modaal-gallery-prev').hasClass('is_hidden')) {
            self.gallery_update('prev');
          } // arrow right for next


          if (key == 39 && self.scope.is_open && !$('#' + self.scope.id + ' .modaal-gallery-next').hasClass('is_hidden')) {
            self.gallery_update('next');
          }

          return;
        }
      }); // Body click/touch

      self.dom.on('click.Modaal', function (e) {
        var trigger = $(e.target); // General Controls: If it's not locked allow greedy close

        if (!self.options.is_locked) {
          if (self.options.overlay_close && trigger.is('.modaal-inner-wrapper') || trigger.is('.modaal-close') || trigger.closest('.modaal-close').length) {
            self.modaal_close();
            return;
          }
        } //Confirm Controls


        if (trigger.is('.modaal-confirm-btn')) {
          // if 'OK' button is clicked, run confirm_callback()
          if (trigger.is('.modaal-ok')) {
            self.options.confirm_callback.call(self, self.lastFocus);
          }

          if (trigger.is('.modaal-cancel')) {
            self.options.confirm_cancel_callback.call(self, self.lastFocus);
          }

          self.modaal_close();
          return;
        } // Gallery Controls


        if (trigger.is('.modaal-gallery-control')) {
          // it not active, don't do nuthin!
          if (trigger.hasClass('is_hidden')) {
            return;
          } // trigger previous


          if (trigger.is('.modaal-gallery-prev')) {
            self.gallery_update('prev');
          } // trigger next


          if (trigger.is('.modaal-gallery-next')) {
            self.gallery_update('next');
          }

          return;
        }
      });
    },
    // Append markup into DOM
    build_modal: function build_modal(content) {
      var self = this; // if is instagram

      var igClass = '';

      if (self.options.type == 'instagram') {
        igClass = ' modaal-instagram';
      }

      var wrap_class = self.options.type == 'video' ? 'modaal-video-wrap' : 'modaal-content';
      /*
      	modaal-start_none : fully hidden via display:none;
      	modaal-start_fade : hidden via opacity:0
      	modaal-start_slidedown : ...
      	*/

      var animation_class;

      switch (self.options.animation) {
        case 'fade':
          animation_class = ' modaal-start_fade';
          break;

        case 'slide-down':
          animation_class = ' modaal-start_slidedown';
          break;

        default:
          animation_class = ' modaal-start_none';
      } // fullscreen check


      var fullscreen_class = '';

      if (self.options.fullscreen) {
        fullscreen_class = ' modaal-fullscreen';
      } // custom class check


      if (self.options.custom_class !== '' || typeof self.options.custom_class !== 'undefined') {
        self.options.custom_class = ' ' + self.options.custom_class;
      } // if width and heights exists and is typeof number


      var dimensionsStyle = '';

      if (self.options.width && self.options.height && typeof self.options.width == 'number' && typeof self.options.height == 'number') {
        // if width and height exist, and they are both numbers
        dimensionsStyle = ' style="max-width:' + self.options.width + 'px;height:' + self.options.height + 'px;overflow:auto;"';
      } else if (self.options.width && typeof self.options.width == 'number') {
        // if only width
        dimensionsStyle = ' style="max-width:' + self.options.width + 'px;"';
      } else if (self.options.height && typeof self.options.height == 'number') {
        // if only height
        dimensionsStyle = ' style="height:' + self.options.height + 'px;overflow:auto;"';
      } // Reset dimensions style (width and height) for certain types


      if (self.options.type == 'image' || self.options.type == 'video' || self.options.type == 'instagram' || self.options.fullscreen) {
        dimensionsStyle = '';
      } // if is touch
      // this is a bug fix for iOS to allow regular click events on div elements.


      var touchTrigger = '';

      if (self.is_touch()) {
        touchTrigger = ' style="cursor:pointer;"';
      }

      var build_markup = '<div class="modaal-wrapper modaal-' + self.options.type + animation_class + igClass + fullscreen_class + self.options.custom_class + '" id="' + self.scope.id + '"><div class="modaal-outer-wrapper"><div class="modaal-inner-wrapper"' + touchTrigger + '>'; // hide if video

      if (self.options.type != 'video') {
        build_markup += '<div class="modaal-container"' + dimensionsStyle + '>';
      } // add the guts of the content


      build_markup += '<div class="' + wrap_class + ' modaal-focus" aria-hidden="false" aria-label="' + self.options.accessible_title + ' - ' + self.options.close_aria_label + '" role="dialog">'; // If it's inline type, we want to clone content instead of dropping it straight in

      if (self.options.type == 'inline') {
        build_markup += '<div class="modaal-content-container" role="document"></div>';
      } else {
        // Drop in the content if it's not inline
        build_markup += content;
      } // close wrap_class


      build_markup += '</div>' + self.scope.close_btn; // hide if video

      if (self.options.type != 'video') {
        build_markup += '</div>';
      } // close off modaal-inner-wrapper


      build_markup += '</div>'; // If type is image AND outer_controls is true: add gallery next and previous controls.

      if (self.options.type == 'image' && self.options.outer_controls === true) {
        build_markup += self.scope.prev_btn + self.scope.next_btn;
      } // close off modaal-wrapper


      build_markup += '</div></div>'; // append ajax modal markup to dom

      if ($('#' + self.scope.id + '_overlay').length < 1) {
        self.dom.append(build_markup);
      } // if inline, clone content into space


      if (self.options.type == 'inline') {
        content.appendTo('#' + self.scope.id + ' .modaal-content-container');
      } // Trigger overlay show (which triggers modal show)


      self.modaal_overlay('show');
    },
    // Create Basic Inline Modal
    // ----------------------------------------------------------------
    create_basic: function create_basic() {
      var self = this;
      var target = $(self.scope.source);
      var content = '';

      if (target.length) {
        content = target.contents().detach();
        target.empty();
      } else {
        content = 'Content could not be loaded. Please check the source and try again.';
      } // now push content into markup


      self.build_modal(content);
    },
    // Create Instagram Modal
    // ----------------------------------------------------------------
    create_instagram: function create_instagram() {
      var self = this;
      var id = self.options.instagram_id;
      var content = '';
      var error_msg = 'Instagram photo couldn\'t be loaded, please check the embed code and try again.';
      self.build_modal('<div class="modaal-content-container' + (self.options.loading_class != '' ? ' ' + self.options.loading_class : '') + '">' + self.options.loading_content + '</div>'); // ID exists, is not empty null or undefined.

      if (id != '' && id !== null && id !== undefined) {
        // set up oembed url
        var ig_url = 'https://api.instagram.com/oembed?url=http://instagr.am/p/' + id + '/';
        $.ajax({
          url: ig_url,
          dataType: "jsonp",
          cache: false,
          success: function success(data) {
            // Create temp dom element from which we'll clone into the modaal instance. This is required to bypass the unusual small thumb issue instagram oembed was serving up
            self.dom.append('<div id="temp-ig" style="width:0;height:0;overflow:hidden;">' + data.html + '</div>'); // Check if it has loaded once before.
            // This is to stop the Embeds.process from throwing and error the first time it's being loaded.
            // private_options are individual to a modaal_scope so will not work across multiple scopes when checking if true, only that one item.

            if (self.dom.attr('data-igloaded')) {
              window.instgrm.Embeds.process();
            } else {
              // first time it's loaded, let's set a new private option to use next time it's opened.
              self.dom.attr('data-igloaded', 'true');
            } // now set location for new content
            // timeout is required as well to bypass the unusual small thumb issue instagram oembed was serving up


            var target = '#' + self.scope.id + ' .modaal-content-container';

            if ($(target).length > 0) {
              setTimeout(function () {
                $('#temp-ig').contents().clone().appendTo(target);
                $('#temp-ig').remove();
              }, 1000);
            }
          },
          error: function error() {
            content = error_msg; // now set location for new content

            var target = $('#' + self.scope.id + ' .modaal-content-container');

            if (target.length > 0) {
              target.removeClass(self.options.loading_class).addClass(self.options.ajax_error_class);
              target.html(content);
            }
          }
        });
      } else {
        content = error_msg;
      }

      return false;
    },
    // Fetch Ajax Data
    // ----------------------------------------------------------------
    fetch_ajax: function fetch_ajax(url) {
      var self = this;
      var content = ''; // If no accessible title, set it to 'Dialog Window'

      if (self.options.accessible_title == null) {
        self.options.accessible_title = 'Dialog Window';
      }

      if (self.xhr !== null) {
        self.xhr.abort();
        self.xhr = null;
      }

      self.build_modal('<div class="modaal-content-container' + (self.options.loading_class != '' ? ' ' + self.options.loading_class : '') + '">' + self.options.loading_content + '</div>');
      self.xhr = $.ajax(url, {
        success: function success(data) {
          // content fetch is successful so push it into markup
          var target = $('#' + self.scope.id).find('.modaal-content-container');

          if (target.length > 0) {
            target.removeClass(self.options.loading_class);
            target.html(data);
            self.options.ajax_success.call(self, target);
          }
        },
        error: function error(xhr) {
          // There were some errors so return an error message
          if (xhr.statusText == 'abort') {
            return;
          }

          var target = $('#' + self.scope.id + ' .modaal-content-container');

          if (target.length > 0) {
            target.removeClass(self.options.loading_class).addClass(self.options.ajax_error_class);
            target.html('Content could not be loaded. Please check the source and try again.');
          }
        }
      });
    },
    // Create Confirm Modal
    // ----------------------------------------------------------------
    create_confirm: function create_confirm() {
      var self = this;
      var content;
      content = '<div class="modaal-content-container">' + '<h1 id="modaal-title">' + self.options.confirm_title + '</h1>' + '<div class="modaal-confirm-content">' + self.options.confirm_content + '</div>' + '<div class="modaal-confirm-wrap">' + '<button type="button" class="modaal-confirm-btn modaal-ok" aria-label="Confirm">' + self.options.confirm_button_text + '</button>' + '<button type="button" class="modaal-confirm-btn modaal-cancel" aria-label="Cancel">' + self.options.confirm_cancel_button_text + '</button>' + '</div>' + '</div>' + '</div>'; // now push content into markup

      self.build_modal(content);
    },
    // Create Image/Gallery Modal
    // ----------------------------------------------------------------
    create_image: function create_image() {
      var self = this;
      var content;
      var modaal_image_markup = '';
      var gallery_total; // If has group attribute

      if (self.$elem.is('[data-group]') || self.$elem.is('[rel]')) {
        // find gallery groups
        var use_group = self.$elem.is('[data-group]');
        var gallery_group = use_group ? self.$elem.attr('data-group') : self.$elem.attr('rel');
        var gallery_group_items = use_group ? $('[data-group="' + gallery_group + '"]') : $('[rel="' + gallery_group + '"]'); // remove any previous active attribute to any in the group

        gallery_group_items.removeAttr('data-gallery-active', 'is_active'); // add active attribute to the item clicked

        self.$elem.attr('data-gallery-active', 'is_active'); // how many in the grouping are there (-1 to connect with each function starting with 0)

        gallery_total = gallery_group_items.length - 1; // prepare array for gallery data

        var gallery = []; // start preparing markup

        modaal_image_markup = '<div class="modaal-gallery-item-wrap">'; // loop each grouping item and push it into our gallery array

        gallery_group_items.each(function (i, item) {
          // setup default content
          var img_src = '';
          var img_alt = '';
          var img_description = '';
          var img_active = false;
          var img_src_error = false;
          var data_modaal_desc = item.getAttribute('data-modaal-desc');
          var data_item_active = item.getAttribute('data-gallery-active'); // if item has inline custom source, use that instead of href. Fall back to href if available.

          if ($(item).attr('data-modaal-content-source')) {
            img_src = $(item).attr('data-modaal-content-source');
          } else if ($(item).attr('href')) {
            img_src = $(item).attr('href');
          } else if ($(item).attr('src')) {
            img_src = $(item).attr('src');
          } else {
            img_src = 'trigger requires href or data-modaal-content-source attribute';
            img_src_error = true;
          } // Does it have a modaal description


          if (data_modaal_desc != '' && data_modaal_desc !== null && data_modaal_desc !== undefined) {
            img_alt = data_modaal_desc;
            img_description = '<div class="modaal-gallery-label"><span class="modaal-accessible-hide">Image ' + (i + 1) + ' - </span>' + data_modaal_desc + '</div>';
          } else {
            img_description = '<div class="modaal-gallery-label"><span class="modaal-accessible-hide">Image ' + (i + 1) + '</span></div>';
          } // is it the active item


          if (data_item_active) {
            img_active = true;
          } // set new object for values we want


          var gallery_item = {
            'url': img_src,
            'alt': img_alt,
            'rawdesc': data_modaal_desc,
            'desc': img_description,
            'active': img_active,
            'src_error': img_src_error
          }; // push object into gallery array

          gallery.push(gallery_item);
        }); // now loop through all items in the gallery and build up the markup

        for (var i = 0; i < gallery.length; i++) {
          // Set default active class, then check if array item active is true and update string for class
          var is_active = '';
          var aria_label = gallery[i].rawdesc ? 'Image: ' + gallery[i].rawdesc : 'Image ' + i + ' no description';

          if (gallery[i].active) {
            is_active = ' ' + self.private_options.active_class;
          } // if gallery item has source error, output message rather than undefined image


          var image_output = gallery[i].src_error ? gallery[i].url : '<img src="' + gallery[i].url + '" alt=" " style="width:100%">'; // for each item build up the markup

          modaal_image_markup += '<div class="modaal-gallery-item gallery-item-' + i + is_active + '" aria-label="' + aria_label + '">' + image_output + gallery[i].desc + '</div>';
        } // Close off the markup for the gallery


        modaal_image_markup += '</div>'; // Add next and previous buttons if outside

        if (self.options.outer_controls != true) {
          modaal_image_markup += self.scope.prev_btn + self.scope.next_btn;
        }
      } else {
        // This is only a single gallery item so let's grab the necessary values
        // define the source, check if content_source option exists, and use that or fall back to href.
        var this_img_src;
        var img_src_error = false;

        if (self.$elem.attr('data-modaal-content-source')) {
          this_img_src = self.$elem.attr('data-modaal-content-source');
        } else if (self.$elem.attr('href')) {
          this_img_src = self.$elem.attr('href');
        } else if (self.$elem.attr('src')) {
          this_img_src = self.$elem.attr('src');
        } else {
          this_img_src = 'trigger requires href or data-modaal-content-source attribute';
          img_src_error = true;
        }

        var this_img_alt_txt = '';
        var this_img_alt = '';
        var aria_label = '';

        if (self.$elem.attr('data-modaal-desc')) {
          aria_label = self.$elem.attr('data-modaal-desc');
          this_img_alt_txt = self.$elem.attr('data-modaal-desc');
          this_img_alt = '<div class="modaal-gallery-label"><span class="modaal-accessible-hide">Image - </span>' + this_img_alt_txt + '</div>';
        } else {
          aria_label = "Image with no description";
        } // if image item has source error, output message rather than undefined image


        var image_output = img_src_error ? this_img_src : '<img src="' + this_img_src + '" alt=" " style="width:100%">'; // build up the html

        modaal_image_markup = '<div class="modaal-gallery-item is_active" aria-label="' + aria_label + '">' + image_output + this_img_alt + '</div>';
      } // Update content variable


      content = modaal_image_markup; // now push content into markup

      self.build_modal(content); // setup next & prev buttons

      if ($('.modaal-gallery-item.is_active').is('.gallery-item-0')) {
        $('.modaal-gallery-prev').hide();
      }

      if ($('.modaal-gallery-item.is_active').is('.gallery-item-' + gallery_total)) {
        $('.modaal-gallery-next').hide();
      }
    },
    // Gallery Change Image
    // ----------------------------------------------------------------
    gallery_update: function gallery_update(direction) {
      var self = this;
      var this_gallery = $('#' + self.scope.id);
      var this_gallery_item = this_gallery.find('.modaal-gallery-item');
      var this_gallery_total = this_gallery_item.length - 1; // if single item, don't proceed

      if (this_gallery_total == 0) {
        return false;
      }

      var prev_btn = this_gallery.find('.modaal-gallery-prev'),
          next_btn = this_gallery.find('.modaal-gallery-next');
      var duration = 250;
      var new_img_w = 0,
          new_img_h = 0; // CB: Before image change

      var current_item = this_gallery.find('.modaal-gallery-item.' + self.private_options.active_class),
          incoming_item = direction == 'next' ? current_item.next('.modaal-gallery-item') : current_item.prev('.modaal-gallery-item');
      self.options.before_image_change.call(self, current_item, incoming_item); // stop change if at start of end

      if (direction == 'prev' && this_gallery.find('.gallery-item-0').hasClass('is_active')) {
        return false;
      } else if (direction == 'next' && this_gallery.find('.gallery-item-' + this_gallery_total).hasClass('is_active')) {
        return false;
      } // lock dimensions


      current_item.stop().animate({
        opacity: 0
      }, duration, function () {
        // Move to appropriate image
        incoming_item.addClass('is_next').css({
          'position': 'absolute',
          'display': 'block',
          'opacity': 0
        }); // Collect doc width

        var doc_width = $(document).width();
        var width_threshold = doc_width > 1140 ? 280 : 50; // start toggle to 'is_next'

        new_img_w = this_gallery.find('.modaal-gallery-item.is_next').width();
        new_img_h = this_gallery.find('.modaal-gallery-item.is_next').height();
        var new_natural_w = this_gallery.find('.modaal-gallery-item.is_next img').prop('naturalWidth');
        var new_natural_h = this_gallery.find('.modaal-gallery-item.is_next img').prop('naturalHeight'); // if new image is wider than doc width

        if (new_natural_w > doc_width - width_threshold) {
          // set new width just below doc width
          new_img_w = doc_width - width_threshold; // Set temp widths so we can calulate the correct height;

          this_gallery.find('.modaal-gallery-item.is_next').css({
            'width': new_img_w
          });
          this_gallery.find('.modaal-gallery-item.is_next img').css({
            'width': new_img_w
          }); // Set new height variable

          new_img_h = this_gallery.find('.modaal-gallery-item.is_next').find('img').height();
        } else {
          // new img is not wider than screen, so let's set the new dimensions
          new_img_w = new_natural_w;
          new_img_h = new_natural_h;
        } // resize gallery region


        this_gallery.find('.modaal-gallery-item-wrap').stop().animate({
          'width': new_img_w,
          'height': new_img_h
        }, duration, function () {
          // hide old active image
          current_item.removeClass(self.private_options.active_class + ' ' + self.options.gallery_active_class).removeAttr('style');
          current_item.find('img').removeAttr('style'); // show new image

          incoming_item.addClass(self.private_options.active_class + ' ' + self.options.gallery_active_class).removeClass('is_next').css('position', ''); // animate in new image (now has the normal is_active class

          incoming_item.stop().animate({
            opacity: 1
          }, duration, function () {
            $(this).removeAttr('style').css({
              'width': '100%'
            });
            $(this).find('img').css('width', '100%'); // remove dimension lock

            this_gallery.find('.modaal-gallery-item-wrap').removeAttr('style'); // CB: After image change

            self.options.after_image_change.call(self, incoming_item);
          }); // Focus on the new gallery item

          this_gallery.find('.modaal-gallery-item').removeAttr('tabindex');
          this_gallery.find('.modaal-gallery-item.' + self.private_options.active_class + '').attr('tabindex', '0').focus(); // hide/show next/prev

          if (this_gallery.find('.modaal-gallery-item.' + self.private_options.active_class).is('.gallery-item-0')) {
            prev_btn.stop().animate({
              opacity: 0
            }, 150, function () {
              $(this).hide();
            });
          } else {
            prev_btn.stop().css({
              'display': 'block',
              'opacity': prev_btn.css('opacity')
            }).animate({
              opacity: 1
            }, 150);
          }

          if (this_gallery.find('.modaal-gallery-item.' + self.private_options.active_class).is('.gallery-item-' + this_gallery_total)) {
            next_btn.stop().animate({
              opacity: 0
            }, 150, function () {
              $(this).hide();
            });
          } else {
            next_btn.stop().css({
              'display': 'block',
              'opacity': prev_btn.css('opacity')
            }).animate({
              opacity: 1
            }, 150);
          }
        });
      });
    },
    // Create Video Modal
    // ----------------------------------------------------------------
    create_video: function create_video(url) {
      var self = this;
      var content; // video markup

      content = '<iframe src="' + url + '" class="modaal-video-frame" frameborder="0" allowfullscreen></iframe>'; // now push content into markup

      self.build_modal('<div class="modaal-video-container">' + content + '</div>');
    },
    // Create iFrame Modal
    // ----------------------------------------------------------------
    create_iframe: function create_iframe(url) {
      var self = this;
      var content;

      if (self.options.width !== null || self.options.width !== undefined || self.options.height !== null || self.options.height !== undefined) {
        // video markup
        content = '<iframe src="' + url + '" class="modaal-iframe-elem" frameborder="0" allowfullscreen></iframe>';
      } else {
        content = '<div class="modaal-content-container">Please specify a width and height for your iframe</div>';
      } // now push content into markup


      self.build_modal(content);
    },
    // Open Modaal
    // ----------------------------------------------------------------
    modaal_open: function modaal_open() {
      var self = this;
      var modal_wrapper = $('#' + self.scope.id);
      var animation_type = self.options.animation;

      if (animation_type === 'none') {
        modal_wrapper.removeClass('modaal-start_none');
        self.options.after_open.call(self, modal_wrapper);
      } // Open with fade


      if (animation_type === 'fade') {
        modal_wrapper.removeClass('modaal-start_fade');
      } // Open with slide down


      if (animation_type === 'slide-down') {
        modal_wrapper.removeClass('modaal-start_slide_down');
      }

      var focusTarget = modal_wrapper; // Switch focusTarget tabindex (switch from other modal if exists)

      $('.modaal-wrapper *[tabindex=0]').removeAttr('tabindex');

      if (self.options.type == 'image') {
        focusTarget = $('#' + self.scope.id).find('.modaal-gallery-item.' + self.private_options.active_class);
      } else if (modal_wrapper.find('.modaal-iframe-elem').length) {
        focusTarget = modal_wrapper.find('.modaal-iframe-elem');
      } else if (modal_wrapper.find('.modaal-video-wrap').length) {
        focusTarget = modal_wrapper.find('.modaal-video-wrap');
      } else {
        focusTarget = modal_wrapper.find('.modaal-focus');
      } // now set the focus


      focusTarget.attr('tabindex', '0').focus(); // Run after_open

      if (animation_type !== 'none') {
        // CB: after_open
        setTimeout(function () {
          self.options.after_open.call(self, modal_wrapper);
        }, self.options.after_callback_delay);
      }
    },
    // Close Modal
    // ----------------------------------------------------------------
    modaal_close: function modaal_close() {
      var self = this;
      var modal_wrapper = $('#' + self.scope.id); // CB: before_close

      self.options.before_close.call(self, modal_wrapper);

      if (self.xhr !== null) {
        self.xhr.abort();
        self.xhr = null;
      } // Now we close the modal


      if (self.options.animation === 'none') {
        modal_wrapper.addClass('modaal-start_none');
      } // Close with fade


      if (self.options.animation === 'fade') {
        modal_wrapper.addClass('modaal-start_fade');
      } // Close with slide up (using initial slide down)


      if (self.options.animation === 'slide-down') {
        modal_wrapper.addClass('modaal-start_slide_down');
      } // CB: after_close and remove


      setTimeout(function () {
        // clone inline content back to origin place
        if (self.options.type == 'inline') {
          $('#' + self.scope.id + ' .modaal-content-container').contents().detach().appendTo(self.scope.source);
        } // remove markup from dom


        modal_wrapper.remove(); // CB: after_close

        self.options.after_close.call(self); // scope is now closed

        self.scope.is_open = false;
      }, self.options.after_callback_delay); // Call overlay hide

      self.modaal_overlay('hide'); // Roll back to last focus state before modal open. If was closed programmatically, this might not be set

      if (self.lastFocus != null) {
        self.lastFocus.focus();
      }
    },
    // Overlay control (accepts action for show or hide)
    // ----------------------------------------------------------------
    modaal_overlay: function modaal_overlay(action) {
      var self = this;

      if (action == 'show') {
        // Modal is open so update scope
        self.scope.is_open = true; // set body to overflow hidden if background_scroll is false

        if (!self.options.background_scroll) {
          self.dom.addClass('modaal-noscroll');
        } // append modaal overlay


        if ($('#' + self.scope.id + '_overlay').length < 1) {
          self.dom.append('<div class="modaal-overlay" id="' + self.scope.id + '_overlay"></div>');
        } // now show


        $('#' + self.scope.id + '_overlay').css('background', self.options.background).stop().animate({
          opacity: self.options.overlay_opacity
        }, self.options.animation_speed, function () {
          // now open the modal
          self.modaal_open();
        });
      } else if (action == 'hide') {
        // now hide the overlay
        $('#' + self.scope.id + '_overlay').stop().animate({
          opacity: 0
        }, self.options.animation_speed, function () {
          // remove overlay from dom
          $(this).remove(); // remove body overflow lock

          self.dom.removeClass('modaal-noscroll');
        });
      }
    },
    // Check if is touch
    // ----------------------------------------------------------------
    is_touch: function is_touch() {
      return 'ontouchstart' in window || navigator.maxTouchPoints;
    }
  }; // Define default object to store

  var modaal_existing_selectors = []; // Declare the modaal jQuery method
  // ------------------------------------------------------------

  $.fn.modaal = function (options) {
    return this.each(function (i) {
      var existing_modaal = $(this).data('modaal');

      if (existing_modaal) {
        // Checking for string value, used for methods
        if (typeof options == 'string') {
          switch (options) {
            case 'open':
              // create the modal
              existing_modaal.create_modaal(existing_modaal);
              break;

            case 'close':
              existing_modaal.modaal_close();
              break;
          }
        }
      } else {
        // Not a string, so let's setup the modal ready to use
        var modaal = Object.create(Modaal);
        modaal.init(options, this);
        $.data(this, "modaal", modaal); // push this select into existing selectors array which is referenced during modaal_dom_observer

        modaal_existing_selectors.push({
          'element': $(this).attr('class'),
          'options': options
        });
      }
    });
  }; // Default options
  // ------------------------------------------------------------


  $.fn.modaal.options = {
    //General
    type: 'inline',
    content_source: null,
    animation: 'fade',
    animation_speed: 300,
    after_callback_delay: 350,
    is_locked: false,
    hide_close: false,
    background: '#000',
    overlay_opacity: '0.8',
    overlay_close: true,
    accessible_title: 'Dialog Window',
    start_open: false,
    fullscreen: false,
    custom_class: '',
    background_scroll: false,
    should_open: true,
    close_text: 'Close',
    close_aria_label: 'Close (Press escape to close)',
    width: null,
    height: null,
    //Events
    before_open: function before_open() {},
    after_open: function after_open() {},
    before_close: function before_close() {},
    after_close: function after_close() {},
    source: function source(element, src) {
      return src;
    },
    //Confirm Modal
    confirm_button_text: 'Confirm',
    // text on confirm button
    confirm_cancel_button_text: 'Cancel',
    confirm_title: 'Confirm Title',
    // title for confirm modal
    confirm_content: '<p>This is the default confirm dialog content. Replace me through the options</p>',
    // html for confirm message
    confirm_callback: function confirm_callback() {},
    confirm_cancel_callback: function confirm_cancel_callback() {},
    //Gallery Modal
    gallery_active_class: 'gallery_active_item',
    outer_controls: false,
    before_image_change: function before_image_change(current_item, incoming_item) {},
    after_image_change: function after_image_change(current_item) {},
    //Ajax Modal
    loading_content: modaal_loading_spinner,
    loading_class: 'is_loading',
    ajax_error_class: 'modaal-error',
    ajax_success: function ajax_success() {},
    //Instagram
    instagram_id: null
  }; // Check and Set Inline Options
  // ------------------------------------------------------------

  function modaal_inline_options(self) {
    // new empty options
    var options = {};
    var inline_options = false; // option: type

    if (self.attr('data-modaal-type')) {
      inline_options = true;
      options.type = self.attr('data-modaal-type');
    } // option: type


    if (self.attr('data-modaal-content-source')) {
      inline_options = true;
      options.content_source = self.attr('data-modaal-content-source');
    } // option: animation


    if (self.attr('data-modaal-animation')) {
      inline_options = true;
      options.animation = self.attr('data-modaal-animation');
    } // option: animation_speed


    if (self.attr('data-modaal-animation-speed')) {
      inline_options = true;
      options.animation_speed = self.attr('data-modaal-animation-speed');
    } // option: after_callback_delay


    if (self.attr('data-modaal-after-callback-delay')) {
      inline_options = true;
      options.after_callback_delay = self.attr('data-modaal-after-callback-delay');
    } // option: is_locked


    if (self.attr('data-modaal-is-locked')) {
      inline_options = true;
      options.is_locked = self.attr('data-modaal-is-locked') === 'true' ? true : false;
    } // option: hide_close


    if (self.attr('data-modaal-hide-close')) {
      inline_options = true;
      options.hide_close = self.attr('data-modaal-hide-close') === 'true' ? true : false;
    } // option: background


    if (self.attr('data-modaal-background')) {
      inline_options = true;
      options.background = self.attr('data-modaal-background');
    } // option: overlay_opacity


    if (self.attr('data-modaal-overlay-opacity')) {
      inline_options = true;
      options.overlay_opacity = self.attr('data-modaal-overlay-opacity');
    } // option: overlay_close


    if (self.attr('data-modaal-overlay-close')) {
      inline_options = true;
      options.overlay_close = self.attr('data-modaal-overlay-close') === 'false' ? false : true;
    } // option: accessible_title


    if (self.attr('data-modaal-accessible-title')) {
      inline_options = true;
      options.accessible_title = self.attr('data-modaal-accessible-title');
    } // option: start_open


    if (self.attr('data-modaal-start-open')) {
      inline_options = true;
      options.start_open = self.attr('data-modaal-start-open') === 'true' ? true : false;
    } // option: fullscreen


    if (self.attr('data-modaal-fullscreen')) {
      inline_options = true;
      options.fullscreen = self.attr('data-modaal-fullscreen') === 'true' ? true : false;
    } // option: custom_class


    if (self.attr('data-modaal-custom-class')) {
      inline_options = true;
      options.custom_class = self.attr('data-modaal-custom-class');
    } // option: close_text


    if (self.attr('data-modaal-close-text')) {
      inline_options = true;
      options.close_text = self.attr('data-modaal-close-text');
    } // option: close_aria_label


    if (self.attr('data-modaal-close-aria-label')) {
      inline_options = true;
      options.close_aria_label = self.attr('data-modaal-close-aria-label');
    } // option: background_scroll


    if (self.attr('data-modaal-background-scroll')) {
      inline_options = true;
      options.background_scroll = self.attr('data-modaal-background-scroll') === 'true' ? true : false;
    } // option: width


    if (self.attr('data-modaal-width')) {
      inline_options = true;
      options.width = parseInt(self.attr('data-modaal-width'));
    } // option: height


    if (self.attr('data-modaal-height')) {
      inline_options = true;
      options.height = parseInt(self.attr('data-modaal-height'));
    } // option: confirm_button_text


    if (self.attr('data-modaal-confirm-button-text')) {
      inline_options = true;
      options.confirm_button_text = self.attr('data-modaal-confirm-button-text');
    } // option: confirm_cancel_button_text


    if (self.attr('data-modaal-confirm-cancel-button-text')) {
      inline_options = true;
      options.confirm_cancel_button_text = self.attr('data-modaal-confirm-cancel-button-text');
    } // option: confirm_title


    if (self.attr('data-modaal-confirm-title')) {
      inline_options = true;
      options.confirm_title = self.attr('data-modaal-confirm-title');
    } // option: confirm_content


    if (self.attr('data-modaal-confirm-content')) {
      inline_options = true;
      options.confirm_content = self.attr('data-modaal-confirm-content');
    } // option: gallery_active_class


    if (self.attr('data-modaal-gallery-active-class')) {
      inline_options = true;
      options.gallery_active_class = self.attr('data-modaal-gallery-active-class');
    } // option: loading_content


    if (self.attr('data-modaal-loading-content')) {
      inline_options = true;
      options.loading_content = self.attr('data-modaal-loading-content');
    } // option: loading_class


    if (self.attr('data-modaal-loading-class')) {
      inline_options = true;
      options.loading_class = self.attr('data-modaal-loading-class');
    } // option: ajax_error_class


    if (self.attr('data-modaal-ajax-error-class')) {
      inline_options = true;
      options.ajax_error_class = self.attr('data-modaal-ajax-error-class');
    } // option: start_open


    if (self.attr('data-modaal-instagram-id')) {
      inline_options = true;
      options.instagram_id = self.attr('data-modaal-instagram-id');
    } // now set it up for the trigger, but only if inline_options is true


    if (inline_options) {
      self.modaal(options);
    }
  }

  ; // On body load (or now, if already loaded), init any modaals defined inline
  // Ensure this is done after $.fn.modaal and default options are declared
  // ----------------------------------------------------------------

  $(function () {
    var single_modaal = $('.modaal'); // Check for existing modaal elements

    if (single_modaal.length) {
      single_modaal.each(function () {
        var self = $(this);
        modaal_inline_options(self);
      });
    } // Obvserve DOM mutations for newly added triggers


    var modaal_dom_observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.addedNodes && mutation.addedNodes.length > 0) {
          // element added to DOM
          var findElement = [].some.call(mutation.addedNodes, function (el) {
            var elm = $(el);

            if (elm.is('a') || elm.is('button')) {
              if (elm.hasClass('modaal')) {
                // is inline Modaal, initialise options
                modaal_inline_options(elm);
              } else {
                // is not inline modaal. Check for existing selector
                modaal_existing_selectors.forEach(function (modaalSelector) {
                  if (modaalSelector.element == elm.attr('class')) {
                    $(elm).modaal(modaalSelector.options);
                    return false;
                  }
                });
              }
            }
          });
        }
      });
    });
    var observer_config = {
      subtree: true,
      attributes: true,
      childList: true,
      characterData: true
    }; // pass in the target node, as well as the observer options

    setTimeout(function () {
      modaal_dom_observer.observe(document.body, observer_config);
    }, 500);
  });
})(jQuery, window, document);
"use strict";

(function () {
  // Tutorial: https://medium.com/@PatrykZabielski/how-to-make-multi-layered-parallax-illustration-with-css-javascript-2b56883c3f27
  window.addEventListener("scroll", function (event) {
    var depth, i, layer, layers, len, movement, topDistance, translate3d;
    topDistance = this.pageYOffset;
    layers = document.querySelectorAll("[data-type='parallax']");

    for (i = 0, len = layers.length; i < len; i++) {
      layer = layers[i];
      depth = layer.getAttribute("data-depth");
      movement = -(topDistance * depth);
      translate3d = "translate3d(0, " + movement + "px, 0)";
      layer.style["-webkit-transform"] = translate3d;
      layer.style["-moz-transform"] = translate3d;
      layer.style["-ms-transform"] = translate3d;
      layer.style["-o-transform"] = translate3d;
      layer.style.transform = translate3d;
    }
  });
}).call(void 0);
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (i) {
  "use strict";

  "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery);
}(function (i) {
  "use strict";

  var e = window.Slick || {};
  (e = function () {
    var e = 0;
    return function (t, o) {
      var s,
          n = this;
      n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: i(t),
        appendDots: i(t),
        arrows: !0,
        asNavFor: null,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function customPaging(e, t) {
          return i('<button type="button" />').text(t + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: .35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3
      }, n.initials = {
        animating: !1,
        dragging: !1,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        scrolling: !1,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: !1,
        slideOffset: 0,
        swipeLeft: null,
        swiping: !1,
        $list: null,
        touchObject: {},
        transformsEnabled: !1,
        unslicked: !1
      }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(t).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = e++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0);
    };
  }()).prototype.activateADA = function () {
    this.$slideTrack.find(".slick-active").attr({
      "aria-hidden": "false"
    }).find("a, input, button, select").attr({
      tabindex: "0"
    });
  }, e.prototype.addSlide = e.prototype.slickAdd = function (e, t, o) {
    var s = this;
    if ("boolean" == typeof t) o = t, t = null;else if (t < 0 || t >= s.slideCount) return !1;
    s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function (e, t) {
      i(t).attr("data-slick-index", e);
    }), s.$slidesCache = s.$slides, s.reinit();
  }, e.prototype.animateHeight = function () {
    var i = this;

    if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
      var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
      i.$list.animate({
        height: e
      }, i.options.speed);
    }
  }, e.prototype.animateSlide = function (e, t) {
    var o = {},
        s = this;
    s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
      left: e
    }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
      top: e
    }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), i({
      animStart: s.currentLeft
    }).animate({
      animStart: e
    }, {
      duration: s.options.speed,
      easing: s.options.easing,
      step: function step(i) {
        i = Math.ceil(i), !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o));
      },
      complete: function complete() {
        t && t.call();
      }
    })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function () {
      s.disableTransition(), t.call();
    }, s.options.speed));
  }, e.prototype.getNavTarget = function () {
    var e = this,
        t = e.options.asNavFor;
    return t && null !== t && (t = i(t).not(e.$slider)), t;
  }, e.prototype.asNavFor = function (e) {
    var t = this.getNavTarget();
    null !== t && "object" == _typeof(t) && t.each(function () {
      var t = i(this).slick("getSlick");
      t.unslicked || t.slideHandler(e, !0);
    });
  }, e.prototype.applyTransition = function (i) {
    var e = this,
        t = {};
    !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
  }, e.prototype.autoPlay = function () {
    var i = this;
    i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed));
  }, e.prototype.autoPlayClear = function () {
    var i = this;
    i.autoPlayTimer && clearInterval(i.autoPlayTimer);
  }, e.prototype.autoPlayIterator = function () {
    var i = this,
        e = i.currentSlide + i.options.slidesToScroll;
    i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e));
  }, e.prototype.buildArrows = function () {
    var e = this;
    !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
      "aria-disabled": "true",
      tabindex: "-1"
    }));
  }, e.prototype.buildDots = function () {
    var e,
        t,
        o = this;

    if (!0 === o.options.dots) {
      for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) {
        t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
      }

      o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active");
    }
  }, e.prototype.buildOut = function () {
    var e = this;
    e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, t) {
      i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "");
    }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable");
  }, e.prototype.buildRows = function () {
    var i,
        e,
        t,
        o,
        s,
        n,
        r,
        l = this;

    if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) {
      for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
        var d = document.createElement("div");

        for (e = 0; e < l.options.rows; e++) {
          var a = document.createElement("div");

          for (t = 0; t < l.options.slidesPerRow; t++) {
            var c = i * r + (e * l.options.slidesPerRow + t);
            n.get(c) && a.appendChild(n.get(c));
          }

          d.appendChild(a);
        }

        o.appendChild(d);
      }

      l.$slider.empty().append(o), l.$slider.children().children().children().css({
        width: 100 / l.options.slidesPerRow + "%",
        display: "inline-block"
      });
    }
  }, e.prototype.checkResponsive = function (e, t) {
    var o,
        s,
        n,
        r = this,
        l = !1,
        d = r.$slider.width(),
        a = window.innerWidth || i(window).width();

    if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
      s = null;

      for (o in r.breakpoints) {
        r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
      }

      null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
    }
  }, e.prototype.changeSlide = function (e, t) {
    var o,
        s,
        n,
        r = this,
        l = i(e.currentTarget);

    switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
      case "previous":
        s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
        break;

      case "next":
        s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
        break;

      case "index":
        var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
        r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
        break;

      default:
        return;
    }
  }, e.prototype.checkNavigable = function (i) {
    var e, t;
    if (e = this.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1];else for (var o in e) {
      if (i < e[o]) {
        i = t;
        break;
      }

      t = e[o];
    }
    return i;
  }, e.prototype.cleanUpEvents = function () {
    var e = this;
    e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
  }, e.prototype.cleanUpSlideEvents = function () {
    var e = this;
    e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
  }, e.prototype.cleanUpRows = function () {
    var i,
        e = this;
    e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(i));
  }, e.prototype.clickHandler = function (i) {
    !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
  }, e.prototype.destroy = function (e) {
    var t = this;
    t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
      i(this).attr("style", i(this).data("originalStyling"));
    }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t]);
  }, e.prototype.disableTransition = function (i) {
    var e = this,
        t = {};
    t[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
  }, e.prototype.fadeSlide = function (i, e) {
    var t = this;
    !1 === t.cssTransitions ? (t.$slides.eq(i).css({
      zIndex: t.options.zIndex
    }), t.$slides.eq(i).animate({
      opacity: 1
    }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
      opacity: 1,
      zIndex: t.options.zIndex
    }), e && setTimeout(function () {
      t.disableTransition(i), e.call();
    }, t.options.speed));
  }, e.prototype.fadeSlideOut = function (i) {
    var e = this;
    !1 === e.cssTransitions ? e.$slides.eq(i).animate({
      opacity: 0,
      zIndex: e.options.zIndex - 2
    }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
      opacity: 0,
      zIndex: e.options.zIndex - 2
    }));
  }, e.prototype.filterSlides = e.prototype.slickFilter = function (i) {
    var e = this;
    null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit());
  }, e.prototype.focusHandler = function () {
    var e = this;
    e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (t) {
      t.stopImmediatePropagation();
      var o = i(this);
      setTimeout(function () {
        e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay());
      }, 0);
    });
  }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
    return this.currentSlide;
  }, e.prototype.getDotCount = function () {
    var i = this,
        e = 0,
        t = 0,
        o = 0;
    if (!0 === i.options.infinite) {
      if (i.slideCount <= i.options.slidesToShow) ++o;else for (; e < i.slideCount;) {
        ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
      }
    } else if (!0 === i.options.centerMode) o = i.slideCount;else if (i.options.asNavFor) for (; e < i.slideCount;) {
      ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
    } else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
    return o - 1;
  }, e.prototype.getLeft = function (i) {
    var e,
        t,
        o,
        s,
        n = this,
        r = 0;
    return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e;
  }, e.prototype.getOption = e.prototype.slickGetOption = function (i) {
    return this.options[i];
  }, e.prototype.getNavigableIndexes = function () {
    var i,
        e = this,
        t = 0,
        o = 0,
        s = [];

    for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); t < i;) {
      s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
    }

    return s;
  }, e.prototype.getSlick = function () {
    return this;
  }, e.prototype.getSlideCount = function () {
    var e,
        t,
        o = this;
    return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
      if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return e = n, !1;
    }), Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll;
  }, e.prototype.goTo = e.prototype.slickGoTo = function (i, e) {
    this.changeSlide({
      data: {
        message: "index",
        index: parseInt(i)
      }
    }, e);
  }, e.prototype.init = function (e) {
    var t = this;
    i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay());
  }, e.prototype.initADA = function () {
    var e = this,
        t = Math.ceil(e.slideCount / e.options.slidesToShow),
        o = e.getNavigableIndexes().filter(function (i) {
      return i >= 0 && i < e.slideCount;
    });
    e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
      "aria-hidden": "true",
      tabindex: "-1"
    }).find("a, input, button, select").attr({
      tabindex: "-1"
    }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) {
      var s = o.indexOf(t);
      i(this).attr({
        role: "tabpanel",
        id: "slick-slide" + e.instanceUid + t,
        tabindex: -1
      }), -1 !== s && i(this).attr({
        "aria-describedby": "slick-slide-control" + e.instanceUid + s
      });
    }), e.$dots.attr("role", "tablist").find("li").each(function (s) {
      var n = o[s];
      i(this).attr({
        role: "presentation"
      }), i(this).find("button").first().attr({
        role: "tab",
        id: "slick-slide-control" + e.instanceUid + s,
        "aria-controls": "slick-slide" + e.instanceUid + n,
        "aria-label": s + 1 + " of " + t,
        "aria-selected": null,
        tabindex: "-1"
      });
    }).eq(e.currentSlide).find("button").attr({
      "aria-selected": "true",
      tabindex: "0"
    }).end());

    for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) {
      e.$slides.eq(s).attr("tabindex", 0);
    }

    e.activateADA();
  }, e.prototype.initArrowEvents = function () {
    var i = this;
    !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
      message: "previous"
    }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {
      message: "next"
    }, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)));
  }, e.prototype.initDotEvents = function () {
    var e = this;
    !0 === e.options.dots && (i("li", e.$dots).on("click.slick", {
      message: "index"
    }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
  }, e.prototype.initSlideEvents = function () {
    var e = this;
    e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
  }, e.prototype.initializeEvents = function () {
    var e = this;
    e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
      action: "start"
    }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
      action: "move"
    }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
      action: "end"
    }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
      action: "end"
    }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition);
  }, e.prototype.initUI = function () {
    var i = this;
    !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show();
  }, e.prototype.keyHandler = function (i) {
    var e = this;
    i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({
      data: {
        message: !0 === e.options.rtl ? "next" : "previous"
      }
    }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({
      data: {
        message: !0 === e.options.rtl ? "previous" : "next"
      }
    }));
  }, e.prototype.lazyLoad = function () {
    function e(e) {
      i("img[data-lazy]", e).each(function () {
        var e = i(this),
            t = i(this).attr("data-lazy"),
            o = i(this).attr("data-srcset"),
            s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
            r = document.createElement("img");
        r.onload = function () {
          e.animate({
            opacity: 0
          }, 100, function () {
            o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({
              opacity: 1
            }, 200, function () {
              e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
            }), n.$slider.trigger("lazyLoaded", [n, e, t]);
          });
        }, r.onerror = function () {
          e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t]);
        }, r.src = t;
      });
    }

    var t,
        o,
        s,
        n = this;
    if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad) for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++) {
      r < 0 && (r = n.slideCount - 1), t = (t = t.add(d.eq(r))).add(d.eq(l)), r--, l++;
    }
    e(t), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow));
  }, e.prototype.loadSlider = function () {
    var i = this;
    i.setPosition(), i.$slideTrack.css({
      opacity: 1
    }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
  }, e.prototype.next = e.prototype.slickNext = function () {
    this.changeSlide({
      data: {
        message: "next"
      }
    });
  }, e.prototype.orientationChange = function () {
    var i = this;
    i.checkResponsive(), i.setPosition();
  }, e.prototype.pause = e.prototype.slickPause = function () {
    var i = this;
    i.autoPlayClear(), i.paused = !0;
  }, e.prototype.play = e.prototype.slickPlay = function () {
    var i = this;
    i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1;
  }, e.prototype.postSlide = function (e) {
    var t = this;
    t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
  }, e.prototype.prev = e.prototype.slickPrev = function () {
    this.changeSlide({
      data: {
        message: "previous"
      }
    });
  }, e.prototype.preventDefault = function (i) {
    i.preventDefault();
  }, e.prototype.progressiveLazyLoad = function (e) {
    e = e || 1;
    var t,
        o,
        s,
        n,
        r,
        l = this,
        d = i("img[data-lazy]", l.$slider);
    d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function () {
      s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad();
    }, r.onerror = function () {
      e < 3 ? setTimeout(function () {
        l.progressiveLazyLoad(e + 1);
      }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad());
    }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l]);
  }, e.prototype.refresh = function (e) {
    var t,
        o,
        s = this;
    o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, {
      currentSlide: t
    }), s.init(), e || s.changeSlide({
      data: {
        message: "index",
        index: t
      }
    }, !1);
  }, e.prototype.registerBreakpoints = function () {
    var e,
        t,
        o,
        s = this,
        n = s.options.responsive || null;

    if ("array" === i.type(n) && n.length) {
      s.respondTo = s.options.respondTo || "window";

      for (e in n) {
        if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
          for (t = n[e].breakpoint; o >= 0;) {
            s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
          }

          s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings;
        }
      }

      s.breakpoints.sort(function (i, e) {
        return s.options.mobileFirst ? i - e : e - i;
      });
    }
  }, e.prototype.reinit = function () {
    var e = this;
    e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e]);
  }, e.prototype.resize = function () {
    var e = this;
    i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
      e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition();
    }, 50));
  }, e.prototype.removeSlide = e.prototype.slickRemove = function (i, e, t) {
    var o = this;
    if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1;
    o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit();
  }, e.prototype.setCSS = function (i) {
    var e,
        t,
        o = this,
        s = {};
    !0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)));
  }, e.prototype.setDimensions = function () {
    var i = this;
    !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({
      padding: "0px " + i.options.centerPadding
    }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({
      padding: i.options.centerPadding + " 0px"
    })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
    var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
    !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
  }, e.prototype.setFade = function () {
    var e,
        t = this;
    t.$slides.each(function (o, s) {
      e = t.slideWidth * o * -1, !0 === t.options.rtl ? i(s).css({
        position: "relative",
        right: e,
        top: 0,
        zIndex: t.options.zIndex - 2,
        opacity: 0
      }) : i(s).css({
        position: "relative",
        left: e,
        top: 0,
        zIndex: t.options.zIndex - 2,
        opacity: 0
      });
    }), t.$slides.eq(t.currentSlide).css({
      zIndex: t.options.zIndex - 1,
      opacity: 1
    });
  }, e.prototype.setHeight = function () {
    var i = this;

    if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
      var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
      i.$list.css("height", e);
    }
  }, e.prototype.setOption = e.prototype.slickSetOption = function () {
    var e,
        t,
        o,
        s,
        n,
        r = this,
        l = !1;
    if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) r.options[o] = s;else if ("multiple" === n) i.each(o, function (i, e) {
      r.options[i] = e;
    });else if ("responsive" === n) for (t in s) {
      if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];else {
        for (e = r.options.responsive.length - 1; e >= 0;) {
          r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
        }

        r.options.responsive.push(s[t]);
      }
    }
    l && (r.unload(), r.reinit());
  }, e.prototype.setPosition = function () {
    var i = this;
    i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i]);
  }, e.prototype.setProps = function () {
    var i = this,
        e = document.body.style;
    i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType;
  }, e.prototype.setSlideClasses = function (i) {
    var e,
        t,
        o,
        s,
        n = this;

    if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode) {
      var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
      e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center");
    } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));

    "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad();
  }, e.prototype.setupInfinite = function () {
    var e,
        t,
        o,
        s = this;

    if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) {
      for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) {
        t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
      }

      for (e = 0; e < o + s.slideCount; e += 1) {
        t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
      }

      s.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
        i(this).attr("id", "");
      });
    }
  }, e.prototype.interrupt = function (i) {
    var e = this;
    i || e.autoPlay(), e.interrupted = i;
  }, e.prototype.selectHandler = function (e) {
    var t = this,
        o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
        s = parseInt(o.attr("data-slick-index"));
    s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s);
  }, e.prototype.slideHandler = function (i, e, t) {
    var o,
        s,
        n,
        r,
        l,
        d = null,
        a = this;
    if (e = e || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i)) if (!1 === e && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
      a.postSlide(o);
    }) : a.postSlide(o));else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
      a.postSlide(o);
    }) : a.postSlide(o));else {
      if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== t ? (a.fadeSlideOut(n), a.fadeSlide(s, function () {
        a.postSlide(s);
      })) : a.postSlide(s), void a.animateHeight();
      !0 !== t ? a.animateSlide(d, function () {
        a.postSlide(s);
      }) : a.postSlide(s);
    }
  }, e.prototype.startLoad = function () {
    var i = this;
    !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading");
  }, e.prototype.swipeDirection = function () {
    var i,
        e,
        t,
        o,
        s = this;
    return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical";
  }, e.prototype.swipeEnd = function (i) {
    var e,
        t,
        o = this;
    if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
    if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;

    if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
      switch (t = o.swipeDirection()) {
        case "left":
        case "down":
          e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
          break;

        case "right":
        case "up":
          e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1;
      }

      "vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]));
    } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {});
  }, e.prototype.swipeHandler = function (i) {
    var e = this;
    if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
      case "start":
        e.swipeStart(i);
        break;

      case "move":
        e.swipeMove(i);
        break;

      case "end":
        e.swipeEnd(i);
    }
  }, e.prototype.swipeMove = function (i) {
    var e,
        t,
        o,
        s,
        n,
        r,
        l = this;
    return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))));
  }, e.prototype.swipeStart = function (i) {
    var e,
        t = this;
    if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, !1;
    void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, t.dragging = !0;
  }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
    var i = this;
    null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit());
  }, e.prototype.unload = function () {
    var e = this;
    i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
  }, e.prototype.unslick = function (i) {
    var e = this;
    e.$slider.trigger("unslick", [e, i]), e.destroy();
  }, e.prototype.updateArrows = function () {
    var i = this;
    Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
  }, e.prototype.updateDots = function () {
    var i = this;
    null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"));
  }, e.prototype.visibility = function () {
    var i = this;
    i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1);
  }, i.fn.slick = function () {
    var i,
        t,
        o = this,
        s = arguments[0],
        n = Array.prototype.slice.call(arguments, 1),
        r = o.length;

    for (i = 0; i < r; i++) {
      if ("object" == _typeof(s) || void 0 === s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), void 0 !== t) return t;
    }

    return o;
  };
});
"use strict";

// Generated by CoffeeScript 1.9.2

/**
@license Sticky-kit v1.1.2 | WTFPL | Leaf Corcoran 2015 | http://leafo.net
 */
(function ($) {
  $(function () {
    (function () {
      var $, win;
      $ = this.jQuery || window.jQuery;
      win = $(window);

      $.fn.stick_in_parent = function (opts) {
        var doc, elm, enable_bottoming, fn, i, inner_scrolling, len, manual_spacer, offset_top, parent_selector, recalc_every, sticky_class;

        if (opts == null) {
          opts = {};
        }

        sticky_class = opts.sticky_class, inner_scrolling = opts.inner_scrolling, recalc_every = opts.recalc_every, parent_selector = opts.parent, offset_top = opts.offset_top, manual_spacer = opts.spacer, enable_bottoming = opts.bottoming;

        if (offset_top == null) {
          offset_top = 0;
        }

        if (parent_selector == null) {
          parent_selector = void 0;
        }

        if (inner_scrolling == null) {
          inner_scrolling = true;
        }

        if (sticky_class == null) {
          sticky_class = "is_stuck";
        }

        doc = $(document);

        if (enable_bottoming == null) {
          enable_bottoming = true;
        }

        fn = function fn(elm, padding_bottom, parent_top, parent_height, top, height, el_float, detached) {
          var bottomed, _detach, fixed, last_pos, last_scroll_height, offset, parent, recalc, recalc_and_tick, recalc_counter, spacer, tick;

          if (elm.data("sticky_kit")) {
            return;
          }

          elm.data("sticky_kit", true);
          last_scroll_height = doc.height();
          parent = elm.parent();

          if (parent_selector != null) {
            parent = parent.closest(parent_selector);
          }

          if (!parent.length) {
            throw "failed to find stick parent";
          }

          fixed = false;
          bottomed = false;
          spacer = manual_spacer != null ? manual_spacer && elm.closest(manual_spacer) : $("<div />");

          if (spacer) {
            spacer.css("position", elm.css("position"));
          }

          recalc = function recalc() {
            var border_top, padding_top, restore;

            if (detached) {
              return;
            }

            last_scroll_height = doc.height();
            border_top = parseInt(parent.css("border-top-width"), 10);
            padding_top = parseInt(parent.css("padding-top"), 10);
            padding_bottom = parseInt(parent.css("padding-bottom"), 10);
            parent_top = parent.offset().top + border_top + padding_top;
            parent_height = parent.height();

            if (fixed) {
              fixed = false;
              bottomed = false;

              if (manual_spacer == null) {
                elm.insertAfter(spacer);
                spacer.detach();
              }

              elm.css({
                position: "",
                top: "",
                width: "",
                bottom: ""
              }).removeClass(sticky_class);
              restore = true;
            }

            top = elm.offset().top - (parseInt(elm.css("margin-top"), 10) || 0) - offset_top;
            height = elm.outerHeight(true);
            el_float = elm.css("float");

            if (spacer) {
              spacer.css({
                width: elm.outerWidth(true),
                height: height,
                display: elm.css("display"),
                "vertical-align": elm.css("vertical-align"),
                float: el_float
              });
            }

            if (restore) {
              return tick();
            }
          };

          recalc();

          if (height === parent_height) {
            return;
          }

          last_pos = void 0;
          offset = offset_top;
          recalc_counter = recalc_every;

          tick = function tick() {
            var css, delta, recalced, scroll, will_bottom, win_height;

            if (detached) {
              return;
            }

            recalced = false;

            if (recalc_counter != null) {
              recalc_counter -= 1;

              if (recalc_counter <= 0) {
                recalc_counter = recalc_every;
                recalc();
                recalced = true;
              }
            }

            if (!recalced && doc.height() !== last_scroll_height) {
              recalc();
              recalced = true;
            }

            scroll = win.scrollTop();

            if (last_pos != null) {
              delta = scroll - last_pos;
            }

            last_pos = scroll;

            if (fixed) {
              if (enable_bottoming) {
                will_bottom = scroll + height + offset > parent_height + parent_top;

                if (bottomed && !will_bottom) {
                  bottomed = false;
                  elm.css({
                    position: "fixed",
                    bottom: "",
                    top: offset
                  }).trigger("sticky_kit:unbottom");
                }
              }

              if (scroll < top) {
                fixed = false;
                offset = offset_top;

                if (manual_spacer == null) {
                  if (el_float === "left" || el_float === "right") {
                    elm.insertAfter(spacer);
                  }

                  spacer.detach();
                }

                css = {
                  position: "",
                  width: "",
                  top: ""
                };
                elm.css(css).removeClass(sticky_class).trigger("sticky_kit:unstick");
              }

              if (inner_scrolling) {
                win_height = win.height();

                if (height + offset_top > win_height) {
                  if (!bottomed) {
                    offset -= delta;
                    offset = Math.max(win_height - height, offset);
                    offset = Math.min(offset_top, offset);

                    if (fixed) {
                      elm.css({
                        top: offset + "px"
                      });
                    }
                  }
                }
              }
            } else {
              if (scroll > top) {
                fixed = true;
                css = {
                  position: "fixed",
                  top: offset
                };
                css.width = elm.css("box-sizing") === "border-box" ? elm.outerWidth() + "px" : elm.width() + "px";
                elm.css(css).addClass(sticky_class);

                if (manual_spacer == null) {
                  elm.after(spacer);

                  if (el_float === "left" || el_float === "right") {
                    spacer.append(elm);
                  }
                }

                elm.trigger("sticky_kit:stick");
              }
            }

            if (fixed && enable_bottoming) {
              if (will_bottom == null) {
                will_bottom = scroll + height + offset > parent_height + parent_top;
              }

              if (!bottomed && will_bottom) {
                bottomed = true;

                if (parent.css("position") === "static") {
                  parent.css({
                    position: "relative"
                  });
                }

                return elm.css({
                  position: "absolute",
                  bottom: padding_bottom,
                  top: "auto"
                }).trigger("sticky_kit:bottom");
              }
            }
          };

          recalc_and_tick = function recalc_and_tick() {
            recalc();
            return tick();
          };

          _detach = function detach() {
            detached = true;
            win.off("touchmove", tick);
            win.off("scroll", tick);
            win.off("resize", recalc_and_tick);
            $(document.body).off("sticky_kit:recalc", recalc_and_tick);
            elm.off("sticky_kit:detach", _detach);
            elm.removeData("sticky_kit");
            elm.css({
              position: "",
              bottom: "",
              top: "",
              width: ""
            });
            parent.position("position", "");

            if (fixed) {
              if (manual_spacer == null) {
                if (el_float === "left" || el_float === "right") {
                  elm.insertAfter(spacer);
                }

                spacer.remove();
              }

              return elm.removeClass(sticky_class);
            }
          };

          win.on("touchmove", tick);
          win.on("scroll", tick);
          win.on("resize", recalc_and_tick);
          $(document.body).on("sticky_kit:recalc", recalc_and_tick);
          elm.on("sticky_kit:detach", _detach);
          return setTimeout(tick, 0);
        };

        for (i = 0, len = this.length; i < len; i++) {
          elm = this[i];
          fn($(elm));
        }

        return this;
      };
    }).call(this);
  });
})(jQuery);