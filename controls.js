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

       var zoomOut = L.control({
        //    'onclick': zoomedOut()
        });

        zoomOut.onAdd = function (map) {
            this._div = L.DomUtil.create('div', 'zoomOut');
            return this._div;
        }
        
//possible fix to the zoomOut method
//_onDoubleClick: function (e) {
 // 		var map = this._map,
 //This next line was a previous implementation which was taken out.
 //-		    zoom = map.getZoom() + 1;
 //this next line was added as a revision
 //+		    zoom = map.getZoom() + (e.originalEvent.shiftKey ? -1 : 1);
  
  	//	if (map.options.doubleClickZoom === 'center') {
  		//	map.setZoom(zoom);
//Of course, this must be changed to run with our map implementation, but I think this is a good starting point for a fix.
