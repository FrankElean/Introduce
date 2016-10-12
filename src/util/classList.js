let trim = /^\s+|\s+$/

let whitespace = /\s+/

function classList() {
	
	
}

function isElement(elem) {
	    let elementObject = typeof window.Element == 'object'
		return elementObject ? elem instanceof window.Element : isElementObject(elem) 
}

function isElementObject(elem) {
	
	    return elem && typeof elem == 'object' && typeof elem.nodeName == 'string' && elem.nodeType == 1
}

function interpret(input) {
	    
		return typeof input === 'string' ? input.replace(trim, '').split(whitespace) : input;
}

function classes(elem) {
	
	    if(isElement(elem)) return elem.className.replace(trim, '').split(whitespace)
		return []
}

function contains(elem, input) {
	    let current = classes(elem)
		let values = interpret(input)
		//console.log(current, values)
		return values.every( (value) => current.indexOf(value) !== -1)
}

function setClass(elem, input) {
	
	 if(isElement(elem)) elem.className = interpret(input).join(' ')
}

function addClass(elem, input) {
	    let current = classes(elem)
		let values = interpret(input)
		
		current.push.apply(current, values)
		
		setClass(elem, current)
}

function removeClass(elem, input) {
	    let current = classes(elem)
		let values = interpret(input)
		
		values.forEach( (value) => {
			    let index = current.indexOf(value)
			    index !== -1 && current.splice(index, 1)
		})
		return current;
}

export default {
	
        classList,
		has: contains,
		get: classes,
		remove: removeClass,
		add: addClass,
		set: setClass	
}