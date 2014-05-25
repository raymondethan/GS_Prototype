		var info = L.control();

		info.onAdd = function (map) {
		    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
		    this.update();
		    return this._div;
		};

		info.update = function (props) {
    		this._div.innerHTML = (props ?
        	'<h4>' + props.SOVEREIGNT + '</h4>'
        	: 'Hover over a country');
		};

       var zoomOut = L.control();

       zoomOut.onAdd = function (map) {
            this._div = L.DomUtil.create('div', 'zoomOut');
            return this._div;
        }
