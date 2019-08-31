
	function draw(event) {
		var color = "rgb(200, 30, 30)";
		size = 20;

		var d = document.createElement("div");

		d.style.width = size + "px";
		d.style.height = size*2 + "px";

		d.style.borderRadius = (size * .6 + "px");

		d.style.backgroundColor = color;

		d.style.left = event.clientX + "px";
		d.style.top = event.clientY + "px";

		d.style.position = "absolute";

		document.body.appendChild(d);
		console.log(event);
	}

	document.onmousemove = draw;