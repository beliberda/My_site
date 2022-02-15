function animation(args, elem) { // некоторые аргументы определим на будущее
	var $ = {
		radius  :     250, // радиус окружности 
		speed   :     20 // скорость/задержка ( в js это мс, например 10 мс = 100 кадров в секунду)
	}
	var f = 0;
	var s = 2 * Math.PI / 180; //Вычислим угол
	setInterval(function() { // функция движения 
		f += s; // приращение аргумента
		  elem.style.left =  235 + $.radius * Math.sin(f)  + 'px'; // меняем координаты элемента, подобно тому как мы это делали в школе в декартовой системе координат. Правда, в данном случае используется полярная система координат, изменяя угол
		  elem.style.top =   235 + $.radius * Math.cos(f) + 'px';
	}, $.speed)
}
