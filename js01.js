require([
      "esri/Map",
      "esri/views/MapView"
    ], function(Map, MapView) {
//**********************************************功能1：切换地图的底图**********************************************************
      var map01 = new Map({
        basemap: "streets"
      });
      
      var view = new MapView({
        container: "viewDiv01",
        map: map01,
        center: [-118.71511,34.09042],
        zoom: 11
      });
      
      document.getElementById("basemap01").addEventListener("click",function(){
      	map01.basemap= "gray";
      });
      
      document.getElementById("basemap02").addEventListener("click",function(){
      	map01.basemap= "hybrid";
      });
      
      document.getElementById("basemap03").addEventListener("click",function(){
      	map01.basemap= "national-geographic";
      });
      
      document.getElementById("basemap04").addEventListener("click",function(){
      	map01.basemap= "osm";
      });
      
      document.getElementById("basemap05").addEventListener("click",function(){
      	map01.basemap= "streets";
      });
      
      
      
      
      
//**********************************************功能：显示地图的比例尺，鼠标等坐标点等**********************************************************
      
      //*** 添加DIV用于显示坐标等信息 ***//
      var coordsWidget = document.createElement("div");
      coordsWidget.id = "coordsWidget";
      coordsWidget.className = "esri-widget esri-component";
      coordsWidget.style.padding = "7px 15px 5px";
      view.ui.add(coordsWidget, "bottom-left");

      //***显示经纬度、比例尺大小和尺度***//
      function showCoordinates(pt) {
        var coords = "Lat/Lon " + pt.latitude.toFixed(3) + " " + pt.longitude.toFixed(3) + 
            " | Scale 1:" + Math.round(view.scale * 1) / 1 +
            " | Zoom " + view.zoom;
        coordsWidget.innerHTML = coords;
      }
      
      //*** 添加事件显示中心的坐标（在视图停止移动之后） ***//
      view.watch(["stationary"], function() {
        showCoordinates(view.center);
      });

      //*** 添加显示鼠标的坐标点***//
      view.on(["pointer-down","pointer-move"], function(evt) {
        showCoordinates(view.toMap({ x: evt.x, y: evt.y }));
      });
      
  });
    
