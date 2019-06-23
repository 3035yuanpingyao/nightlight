var view01;
var view02;

require([
      "esri/Map",
      "esri/views/MapView",
      "esri/layers/TileLayer"
    ], function(Map, MapView, TileLayer) {
//**********************************************功能：swip map**********************************************************
      
      	
      var map01 = new Map({
      	basemap: "topo",
      });
      
      var map02 = new Map({
      	basemap: "hybrid",
      });
      
      var Layer1 = new TileLayer({
      	url: "https://tiles.arcgis.com/tiles/nwsxKfdZqTK05nX4/arcgis/rest/services/light/MapServer",
      	outFields: ["*"]
      });
      
      map01.add(Layer1);
      
      var Layer2 = new TileLayer({
      	url: "https://tiles.arcgis.com/tiles/nwsxKfdZqTK05nX4/arcgis/rest/services/light2/MapServer",
      	outFields: ["*"]
      });
      
      map02.add(Layer2);
      
      var view01 = new MapView({
        container: "viewDiv01",
        map: map01,
        center: [114,31],
        zoom: 3
      });

      var view02 = new MapView({
        container: "viewDiv02",
        map: map02,
        center: [114,31],
        zoom: 3
      });
      
      view02.on(["pointer-down","pointer-move"], function(evt) {
        LinkMap01();
      });
      
      function LinkMap01() {
      	view02.zoom = view01.zoom;
      	view02.center = view01.center;
      }
      
  });
  
function SwipeMap()
{
    console.log(event.clientX);
    //鼠标屏幕x坐标等于上层地图宽度
    document.getElementById("viewDiv02").style.clip="rect(0px,"+event.clientX +"px,768px,0px)";
}

    
//	document.getElementById("zoom").addEventListener("click",function(){
//		view02.zoom = view01.zoom;
//		view02.center = view01.center;
//	});

