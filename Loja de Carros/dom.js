(function (document) {
  'use strict'
	function DOM(element) {
		if(!(this instanceof DOM))
			return new DOM(element)
	  this.element = document.querySelectorAll(element)
		//if(this.element.length===1)
			//return this.get()
	}

  	DOM.isArray = function isArray(param) {
  	  return Object.prototype.toString.call(param) === '[object Array]';
  	}
  	DOM.isNumber = function isNumber(param) {
  	  return Object.prototype.toString.call(param) === '[object Number]';
  	}
  	DOM.isFunction = function isFunction(param) {
  	  return Object.prototype.toString.call(param) === '[object Function]';
  	}
  	DOM.isString = function isString(param) {
  	  return Object.prototype.toString.call(param) === '[object String]';
  	}
  	DOM.isObject = function isObject(param) {
  	  return Object.prototype.toString.call(param) === '[object Object]';
  	}
  	DOM.isBoolean = function isBoolean(param) {
  	  return Object.prototype.toString.call(param) === '[object Boolean]';
  	}
  	DOM.isNull = function isNull(param) {
  	  return Object.prototype.toString.call(param) === '[object Null]' ||
  	    Object.prototype.toString.call(param) === '[object Undefined]';
  	};

	DOM.prototype.on = function on(eventType, callback) {
	  Array.prototype.forEach.call(this.element, function (element) {
	    element.addEventListener(eventType, callback, false)

	  })
	}
	DOM.prototype.off = function off(eventType, callback) {
	  Array.prototype.forEach.call(this.element, function (element) {
	    element.removeEventListener(eventType, callback, false)

	  })
	}
	DOM.prototype.get = function get(index) {
		if(!index)
	  return this.element[0]
	return this.element[index]	
	}

	DOM.prototype.forEach = function forEach() {
	  Array.prototype.forEach.apply(this.element, arguments)
	}
	DOM.prototype.map = function map() {
	  Array.prototype.map.apply(this.element, arguments)
	}

	DOM.prototype.filter = function filter() {
	  Array.prototype.filter.apply(this.element, arguments)
	}
	DOM.prototype.reduce = function reduce() {
	  Array.prototype.reduce.apply(this.element, arguments)
	}
	DOM.prototype.reduceRight = function reduceRight() {
	  Array.prototype.reduceRight.apply(this.element, arguments)
	}
	DOM.prototype.every = function every() {
	  Array.prototype.every.apply(this.element, arguments)
	}

	DOM.prototype.some = function some() {
	  Array.prototype.some.apply(this.element, arguments)
	}


  window.DOM = DOM;
})(document)
