/**
关于z-index完成需要完成以下几点：
     1.保证弹出框的z-index足够高能使其在最外层
	 2.后弹出的弹出层的z-index要比之前弹出的高
*/

let zIndex = 10100

export const getZIndex = function(){
	
    	return zIndex++;
}
