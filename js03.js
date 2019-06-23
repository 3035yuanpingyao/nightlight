var map01;
var map02;

var x2 = 0;
var y2 = 0;
var x1 = 0;
var y1 = 0;

require([
      "esri/Map",
      "esri/views/MapView",
      "esri/layers/TileLayer",
      "esri/geometry/Point"
    ], function(Map, MapView, TileLayer, Point) {
//**********************************************功能：swip map**********************************************************

      var pt1 = new Point({
      	latitude: 0,
      	longitude: 0,
      });
      
      var pt2 = new Point({
      	latitude: 0,
      	longitude: 0,
      });

      var map01 = new Map({
        basemap: "streets"
      });
      
       x1 = 94;
       y1 = 31;
       
      var view01 = new MapView({
        container: "viewDiv01",
        map: map01,
        center: [x1,y1],
        zoom: 5
      });
       
      var map02 = new Map({
        basemap: "hybrid"
      });
      
      x2 = 128;
      y2 = 31;
      
      
      var TileLayer = new TileLayer({
      	url: "https://tiles.arcgis.com/tiles/nwsxKfdZqTK05nX4/arcgis/rest/services/light/MapServer",
      	outFields: ["*"]
      });
      
      map01.add(TileLayer);

      var view02 = new MapView({
        container: "viewDiv02",
        map: map02,

        center: [x2,y2],
        zoom: 5
      });
      
      
      //change right basemap
      document.getElementById("basemap01").addEventListener("click",function(){
      	map02.basemap = "gray";
      });
      
      document.getElementById("basemap02").addEventListener("click",function(){
      	map02.basemap = "hybrid";
      });
      
      document.getElementById("basemap03").addEventListener("click",function(){
      	map02.basemap = "national-geographic";
      });
      
      document.getElementById("basemap04").addEventListener("click",function(){
      	map02.basemap = "osm";
      });
      
      document.getElementById("basemap05").addEventListener("click",function(){
      	map02.basemap = "streets";
      });
      
      
      
      var zoom1 = 5;
      var zoom2 = 5;
      
      //link map
      view01.on(["pointer-down","pointer-move"], function(evt) {
        LinkMap02();
      });
      
      function LinkMap02() {
      	view02.zoom = 5;
      	view01.zoom = 5;
      	
      	pt1 = view01.center;
      	pt2 = view02.center;
      	pt2.latitude = pt1.latitude;
      	pt2.longitude = pt1.longitude + 34;
      	
      	view02.center=pt2;
      	view01.center=pt1;
      	
      }
      
      view02.on(["pointer-down","pointer-move"], function(evt) {
        LinkMap01();
      });
      
      function LinkMap01() {
      	view02.zoom = 5;
      	view01.zoom = 5;
      	
      	pt1 = view01.center;
      	pt2 = view02.center;
      	pt1.latitude = pt2.latitude;
      	pt1.longitude = pt2.longitude - 34;
      	
      	view02.center=pt2;
      	view01.center=pt1;
      }
      

      
  });

    
