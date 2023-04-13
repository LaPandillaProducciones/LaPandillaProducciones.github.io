(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"MapAnimate_atlas_", frames: [[0,0,2000,1000],[0,1002,2000,1000]]},
		{name:"MapAnimate_atlas_2", frames: [[0,1002,2000,1000],[0,0,2000,1000]]},
		{name:"MapAnimate_atlas_3", frames: [[0,0,1981,1000],[0,1002,1981,1000]]},
		{name:"MapAnimate_atlas_4", frames: [[1302,1594,362,287],[0,0,1981,1000],[1302,1002,590,590],[0,1002,1300,800]]}
];


// symbols:



(lib.CachedTexturedBitmap_1 = function() {
	this.initialize(ss["MapAnimate_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.colorsolidoazul = function() {
	this.initialize(ss["MapAnimate_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.entrar = function() {
	this.initialize(ss["MapAnimate_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.espacio = function() {
	this.initialize(ss["MapAnimate_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.espacioBrillante = function() {
	this.initialize(ss["MapAnimate_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.espacioTenue = function() {
	this.initialize(ss["MapAnimate_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.estrellas = function() {
	this.initialize(ss["MapAnimate_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.mapamundi = function() {
	this.initialize(img.mapamundi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3189,1000);


(lib.nubes = function() {
	this.initialize(ss["MapAnimate_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.nubescompletas = function() {
	this.initialize(img.nubescompletas);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3189,1000);


(lib.textura = function() {
	this.initialize(ss["MapAnimate_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.tierra = function() {
	this.initialize(ss["MapAnimate_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol_3_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.mapamundi();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_3_Layer_1, null, null);


(lib.Symbol_2_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.nubescompletas();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_2_Layer_1, null, null);


(lib.Symbol_1_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.estrellas();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_1_Layer_1, null, null);


(lib.an_TextInput = function(options) {
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.SymTierra_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.tierra();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.8079,0.8079);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.SymTierra_Layer_1, null, null);


(lib.SymNubes_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.nubes();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.SymNubes_Layer_1, null, null);


(lib.SymIngresar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.entrar();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.4439,0.4439);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,261.9,261.9);


(lib.SymEspacioBrillante_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.espacioBrillante();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.SymEspacioBrillante_Layer_1, null, null);


(lib.Symbol_3_Layer_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_1 = new lib.nubes();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1.9523,1.9523);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_3_Layer_1_1, null, null);


(lib.Symbol_2_Layer_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_1 = new lib.nubes();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,2.4484,2.4484);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_2_Layer_1_1, null, null);


(lib.Symbol_1_Layer_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_1 = new lib.nubes();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,2.4484,2.4484);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_1_Layer_1_1, null, null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_3_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(1594.5,500,1,1,0,0,0,1594.5,500);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,3189,1000), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_2_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(1594.5,500,1,1,0,0,0,1594.5,500);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,3189,1000), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_1_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(990.5,500,1,1,0,0,0,990.5,500);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,1981,1000), null);


(lib.SymTierra = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.SymTierra_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(807.9,403.9,1,1,0,0,0,807.9,403.9);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.SymTierra, new cjs.Rectangle(0,0,1615.8,807.9), null);


(lib.SymNubes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.SymNubes_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(1000,500,1,1,0,0,0,1000,500);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.SymNubes, new cjs.Rectangle(0,0,2000,1000), null);


(lib.SymEspacioBrillante = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.SymEspacioBrillante_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(1000,500,1,1,0,0,0,1000,500);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.SymEspacioBrillante, new cjs.Rectangle(0,0,2000,1000), null);


(lib.Symbol3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1_1 = new lib.Symbol_3_Layer_1_1();
	this.Layer_1_1.name = "Layer_1_1";
	this.Layer_1_1.parent = this;
	this.Layer_1_1.setTransform(1952.2,976.1,1,1,0,0,0,1952.2,976.1);
	this.Layer_1_1.depth = 0;
	this.Layer_1_1.isAttachedToCamera = 0
	this.Layer_1_1.isAttachedToMask = 0
	this.Layer_1_1.layerDepth = 0
	this.Layer_1_1.layerIndex = 0
	this.Layer_1_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3_1, new cjs.Rectangle(0,0,3904.5,1952.3), null);


(lib.Symbol2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1_1 = new lib.Symbol_2_Layer_1_1();
	this.Layer_1_1.name = "Layer_1_1";
	this.Layer_1_1.parent = this;
	this.Layer_1_1.setTransform(2448.4,1224.2,1,1,0,0,0,2448.4,1224.2);
	this.Layer_1_1.depth = 0;
	this.Layer_1_1.isAttachedToCamera = 0
	this.Layer_1_1.isAttachedToMask = 0
	this.Layer_1_1.layerDepth = 0
	this.Layer_1_1.layerIndex = 0
	this.Layer_1_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2_1, new cjs.Rectangle(0,0,4896.8,2448.4), null);


(lib.Symbol1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1_1 = new lib.Symbol_1_Layer_1_1();
	this.Layer_1_1.name = "Layer_1_1";
	this.Layer_1_1.parent = this;
	this.Layer_1_1.setTransform(2448.4,1224.2,1,1,0,0,0,2448.4,1224.2);
	this.Layer_1_1.depth = 0;
	this.Layer_1_1.isAttachedToCamera = 0
	this.Layer_1_1.isAttachedToMask = 0
	this.Layer_1_1.layerDepth = 0
	this.Layer_1_1.layerIndex = 0
	this.Layer_1_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1_1, new cjs.Rectangle(0,0,4896.8,2448.4), null);


(lib.AnimacionInicial = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// estrellas
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(990.5,500,1,1,0,0,0,990.5,500);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.9579},0).wait(1).to({alpha:0.9158},0).wait(1).to({alpha:0.8737},0).wait(1).to({alpha:0.8316},0).wait(1).to({alpha:0.7895},0).wait(1).to({alpha:0.7474},0).wait(1).to({alpha:0.7053},0).wait(1).to({alpha:0.6632},0).wait(1).to({alpha:0.6211},0).wait(1).to({alpha:0.5789},0).wait(1).to({alpha:0.5368},0).wait(1).to({alpha:0.4947},0).wait(1).to({alpha:0.4526},0).wait(1).to({alpha:0.4105},0).wait(1).to({alpha:0.3684},0).wait(1).to({alpha:0.3263},0).wait(1).to({alpha:0.2842},0).wait(1).to({alpha:0.2421},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.23},0).wait(1).to({alpha:0.26},0).wait(1).to({alpha:0.29},0).wait(1).to({alpha:0.32},0).wait(1).to({alpha:0.35},0).wait(1).to({alpha:0.38},0).wait(1).to({alpha:0.41},0).wait(1).to({alpha:0.44},0).wait(1).to({alpha:0.47},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.53},0).wait(1).to({alpha:0.56},0).wait(1).to({alpha:0.59},0).wait(1).to({alpha:0.62},0).wait(1).to({alpha:0.65},0).wait(1).to({alpha:0.68},0).wait(1).to({alpha:0.71},0).wait(1).to({alpha:0.74},0).wait(1).to({alpha:0.77},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7785},0).wait(1).to({alpha:0.757},0).wait(1).to({alpha:0.7355},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.6925},0).wait(1).to({alpha:0.671},0).wait(1).to({alpha:0.6495},0).wait(1).to({alpha:0.628},0).wait(1).to({alpha:0.6065},0).wait(1).to({alpha:0.585},0).wait(1).to({alpha:0.5635},0).wait(1).to({alpha:0.542},0).wait(1).to({alpha:0.5205},0).wait(1).to({alpha:0.499},0).wait(1).to({alpha:0.4775},0).wait(1).to({alpha:0.456},0).wait(1).to({alpha:0.4345},0).wait(1).to({alpha:0.413},0).wait(1).to({alpha:0.3915},0).wait(1).to({alpha:0.37},0).wait(1).to({alpha:0.393},0).wait(1).to({alpha:0.416},0).wait(1).to({alpha:0.439},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.485},0).wait(1).to({alpha:0.508},0).wait(1).to({alpha:0.531},0).wait(1).to({alpha:0.554},0).wait(1).to({alpha:0.577},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.623},0).wait(1).to({alpha:0.646},0).wait(1).to({alpha:0.669},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.715},0).wait(1).to({alpha:0.738},0).wait(1).to({alpha:0.761},0).wait(1).to({alpha:0.784},0).wait(1).to({alpha:0.807},0).wait(1).to({alpha:0.83},0).wait(1).to({alpha:0.804},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.752},0).wait(1).to({alpha:0.726},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.674},0).wait(1).to({alpha:0.648},0).wait(1).to({alpha:0.622},0).wait(1).to({alpha:0.596},0).wait(1).to({alpha:0.57},0).wait(1).to({alpha:0.544},0).wait(1).to({alpha:0.518},0).wait(1).to({alpha:0.492},0).wait(1).to({alpha:0.466},0).wait(1).to({alpha:0.44},0).wait(1).to({alpha:0.414},0).wait(1).to({alpha:0.388},0).wait(1).to({alpha:0.362},0).wait(1).to({alpha:0.336},0).wait(1).to({alpha:0.31},0).wait(1).to({alpha:0.335},0).wait(1).to({alpha:0.36},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.41},0).wait(1).to({alpha:0.435},0).wait(1).to({alpha:0.46},0).wait(1).to({alpha:0.485},0).wait(1).to({alpha:0.51},0).wait(1).to({alpha:0.535},0).wait(1).to({alpha:0.56},0).wait(1).to({alpha:0.585},0).wait(1).to({alpha:0.61},0).wait(1).to({alpha:0.635},0).wait(1).to({alpha:0.66},0).wait(1).to({alpha:0.685},0).wait(1).to({alpha:0.71},0).wait(1).to({alpha:0.735},0).wait(1).to({alpha:0.76},0).wait(1).to({alpha:0.785},0).wait(1).to({alpha:0.81},0).wait(1).to({alpha:0.7795},0).wait(1).to({alpha:0.749},0).wait(1).to({alpha:0.7185},0).wait(1).to({alpha:0.688},0).wait(1).to({alpha:0.6575},0).wait(1).to({alpha:0.627},0).wait(1).to({alpha:0.5965},0).wait(1).to({alpha:0.566},0).wait(1).to({alpha:0.5355},0).wait(1).to({alpha:0.505},0).wait(1).to({alpha:0.4745},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.4135},0).wait(1).to({alpha:0.383},0).wait(1).to({alpha:0.3525},0).wait(1).to({alpha:0.322},0).wait(1).to({alpha:0.2915},0).wait(1).to({alpha:0.261},0).wait(1).to({alpha:0.2305},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.23},0).wait(1).to({alpha:0.26},0).wait(1).to({alpha:0.29},0).wait(1).to({alpha:0.32},0).wait(1).to({alpha:0.35},0).wait(1).to({alpha:0.38},0).wait(1).to({alpha:0.41},0).wait(1).to({alpha:0.44},0).wait(1).to({alpha:0.47},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.53},0).wait(1).to({alpha:0.56},0).wait(1).to({alpha:0.59},0).wait(1).to({alpha:0.62},0).wait(1).to({alpha:0.65},0).wait(1).to({alpha:0.68},0).wait(1).to({alpha:0.71},0).wait(1).to({alpha:0.74},0).wait(1).to({alpha:0.77},0).wait(1).to({alpha:0.8},0).wait(15));

	// espacio
	this.instance_1 = new lib.espacio();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(174));

	// nubescompletas
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(2314.5,500,1,1,0,0,0,1594.5,500);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:2300.35},0).wait(1).to({x:2286.25},0).wait(1).to({x:2272.2},0).wait(1).to({x:2258.05},0).wait(1).to({x:2243.95},0).wait(1).to({x:2229.85},0).wait(1).to({x:2215.75},0).wait(1).to({x:2201.65},0).wait(1).to({x:2187.55},0).wait(1).to({x:2173.45},0).wait(1).to({x:2159.35},0).wait(1).to({x:2145.25},0).wait(1).to({x:2131.1},0).wait(1).to({x:2117},0).wait(1).to({x:2102.9},0).wait(1).to({x:2088.8},0).wait(1).to({x:2074.7},0).wait(1).to({x:2060.6},0).wait(1).to({x:2046.5},0).wait(1).to({x:2032.4},0).wait(1).to({x:2018.3},0).wait(1).to({x:2004.2},0).wait(1).to({x:1990.1},0).wait(1).to({x:1976},0).wait(1).to({x:1961.85},0).wait(1).to({x:1947.75},0).wait(1).to({x:1933.65},0).wait(1).to({x:1919.55},0).wait(1).to({x:1905.45},0).wait(1).to({x:1891.35},0).wait(1).to({x:1877.25},0).wait(1).to({x:1863.15},0).wait(1).to({x:1849.05},0).wait(1).to({x:1834.95},0).wait(1).to({x:1820.85},0).wait(1).to({x:1806.75},0).wait(1).to({x:1792.65},0).wait(1).to({x:1778.5},0).wait(1).to({x:1764.4},0).wait(1).to({x:1750.3},0).wait(1).to({x:1736.2},0).wait(1).to({x:1722.1},0).wait(1).to({x:1708},0).wait(1).to({x:1693.9},0).wait(1).to({x:1679.8},0).wait(1).to({x:1665.7},0).wait(1).to({x:1651.6},0).wait(1).to({x:1637.5},0).wait(1).to({x:1623.4},0).wait(1).to({x:1609.25},0).wait(1).to({x:1595.15},0).wait(1).to({x:1581.1},0).wait(1).to({x:1567},0).wait(1).to({x:1552.9},0).wait(1).to({x:1538.8},0).wait(1).to({x:1524.7},0).wait(1).to({x:1510.6},0).wait(1).to({x:1496.5},0).wait(1).to({x:1482.4},0).wait(1).to({x:1468.3},0).wait(1).to({x:1454.2},0).wait(1).to({x:1440.1},0).wait(1).to({x:1425.95},0).wait(1).to({x:1411.85},0).wait(1).to({x:1397.8},0).wait(1).to({x:1383.65},0).wait(1).to({x:1369.55},0).wait(1).to({x:1355.45},0).wait(1).to({x:1341.35},0).wait(1).to({x:1327.25},0).wait(1).to({x:1313.15},0).wait(1).to({x:1299.05},0).wait(1).to({x:1284.95},0).wait(1).to({x:1270.85},0).wait(1).to({x:1256.7},0).wait(1).to({x:1242.6},0).wait(1).to({x:1228.5},0).wait(1).to({x:1214.4},0).wait(1).to({x:1200.3},0).wait(1).to({x:1186.2},0).wait(1).to({x:1172.1},0).wait(1).to({x:1158},0).wait(1).to({x:1143.9},0).wait(1).to({x:1129.8},0).wait(1).to({x:1115.7},0).wait(1).to({x:1101.6},0).wait(1).to({x:1087.45},0).wait(1).to({x:1073.4},0).wait(1).to({x:1059.25},0).wait(1).to({x:1045.15},0).wait(1).to({x:1031.05},0).wait(1).to({x:1016.95},0).wait(1).to({x:1002.85},0).wait(1).to({x:988.75},0).wait(1).to({x:974.65},0).wait(1).to({x:960.55},0).wait(1).to({x:946.45},0).wait(1).to({x:932.35},0).wait(1).to({x:918.2},0).wait(1).to({x:904.1},0).wait(1).to({x:890},0).wait(1).to({x:875.9},0).wait(1).to({x:861.8},0).wait(1).to({x:847.7},0).wait(1).to({x:833.6},0).wait(1).to({x:819.5},0).wait(1).to({x:805.4},0).wait(1).to({x:791.3},0).wait(1).to({x:777.2},0).wait(1).to({x:763.1},0).wait(1).to({x:749},0).wait(1).to({x:734.85},0).wait(1).to({x:720.75},0).wait(1).to({x:706.65},0).wait(1).to({x:692.55},0).wait(1).to({x:678.45},0).wait(1).to({x:664.35},0).wait(1).to({x:650.25},0).wait(1).to({x:636.15},0).wait(1).to({x:622.05},0).wait(1).to({x:607.95},0).wait(1).to({x:593.85},0).wait(1).to({x:579.75},0).wait(1).to({x:565.65},0).wait(1).to({x:551.5},0).wait(1).to({x:537.4},0).wait(1).to({x:523.3},0).wait(1).to({x:509.2},0).wait(1).to({x:495.1},0).wait(1).to({x:481},0).wait(1).to({x:466.9},0).wait(1).to({x:452.8},0).wait(1).to({x:438.7},0).wait(1).to({x:424.6},0).wait(1).to({x:410.5},0).wait(1).to({x:396.35},0).wait(1).to({x:382.25},0).wait(1).to({x:368.15},0).wait(1).to({x:354.05},0).wait(1).to({x:339.95},0).wait(1).to({x:325.85},0).wait(1).to({x:311.75},0).wait(1).to({x:297.65},0).wait(1).to({x:283.55},0).wait(1).to({x:269.45},0).wait(1).to({x:255.35},0).wait(1).to({x:241.25},0).wait(1).to({x:227.15},0).wait(1).to({x:213},0).wait(1).to({x:198.9},0).wait(1).to({x:184.8},0).wait(1).to({x:170.7},0).wait(1).to({x:156.6},0).wait(1).to({x:142.5},0).wait(1).to({x:128.4},0).wait(1).to({x:114.3},0).wait(1).to({x:100.2},0).wait(1).to({x:86.1},0).wait(1).to({x:72},0).wait(1).to({x:57.9},0).wait(1).to({x:43.75},0).wait(1).to({x:29.7},0).wait(1).to({x:15.55},0).wait(1).to({x:1.45},0).wait(1).to({x:-12.65},0).wait(1).to({x:-26.75},0).wait(1).to({x:-40.85},0).wait(1).to({x:-54.95},0).wait(1).to({x:-69.05},0).wait(1).to({x:-83.15},0).wait(1).to({x:-97.25},0).wait(1).to({x:-111.35},0).wait(1).to({x:-125.5},0).wait(1));

	// mapa
	this.instance_3 = new lib.Symbol3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(2243,500,1,1,0,0,0,1594.5,500);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({x:2232.2},0).wait(1).to({x:2221.4},0).wait(1).to({x:2210.6},0).wait(1).to({x:2199.8},0).wait(1).to({x:2189},0).wait(1).to({x:2178.2},0).wait(1).to({x:2167.4},0).wait(1).to({x:2156.6},0).wait(1).to({x:2145.8},0).wait(1).to({x:2135},0).wait(1).to({x:2124.2},0).wait(1).to({x:2113.4},0).wait(1).to({x:2102.6},0).wait(1).to({x:2091.8},0).wait(1).to({x:2081},0).wait(1).to({x:2070.2},0).wait(1).to({x:2059.4},0).wait(1).to({x:2048.6},0).wait(1).to({x:2037.8},0).wait(1).to({x:2027},0).wait(1).to({x:2016.25},0).wait(1).to({x:2005.45},0).wait(1).to({x:1994.65},0).wait(1).to({x:1983.85},0).wait(1).to({x:1973.05},0).wait(1).to({x:1962.25},0).wait(1).to({x:1951.45},0).wait(1).to({x:1940.65},0).wait(1).to({x:1929.85},0).wait(1).to({x:1919.05},0).wait(1).to({x:1908.25},0).wait(1).to({x:1897.45},0).wait(1).to({x:1886.65},0).wait(1).to({x:1875.85},0).wait(1).to({x:1865.05},0).wait(1).to({x:1854.25},0).wait(1).to({x:1843.45},0).wait(1).to({x:1832.65},0).wait(1).to({x:1821.85},0).wait(1).to({x:1811.05},0).wait(1).to({x:1800.25},0).wait(1).to({x:1789.5},0).wait(1).to({x:1778.65},0).wait(1).to({x:1767.9},0).wait(1).to({x:1757.1},0).wait(1).to({x:1746.3},0).wait(1).to({x:1735.5},0).wait(1).to({x:1724.7},0).wait(1).to({x:1713.9},0).wait(1).to({x:1703.1},0).wait(1).to({x:1692.3},0).wait(1).to({x:1681.5},0).wait(1).to({x:1670.7},0).wait(1).to({x:1659.9},0).wait(1).to({x:1649.1},0).wait(1).to({x:1638.3},0).wait(1).to({x:1627.5},0).wait(1).to({x:1616.7},0).wait(1).to({x:1605.9},0).wait(1).to({x:1595.1},0).wait(1).to({x:1584.35},0).wait(1).to({x:1573.6},0).wait(1).to({x:1562.75},0).wait(1).to({x:1551.95},0).wait(1).to({x:1541.2},0).wait(1).to({x:1530.4},0).wait(1).to({x:1519.6},0).wait(1).to({x:1508.8},0).wait(1).to({x:1498},0).wait(1).to({x:1487.2},0).wait(1).to({x:1476.4},0).wait(1).to({x:1465.6},0).wait(1).to({x:1454.8},0).wait(1).to({x:1444},0).wait(1).to({x:1433.2},0).wait(1).to({x:1422.4},0).wait(1).to({x:1411.6},0).wait(1).to({x:1400.8},0).wait(1).to({x:1390},0).wait(1).to({x:1379.2},0).wait(1).to({x:1368.4},0).wait(1).to({x:1357.6},0).wait(1).to({x:1346.8},0).wait(1).to({x:1336.05},0).wait(1).to({x:1325.2},0).wait(1).to({x:1314.4},0).wait(1).to({x:1303.65},0).wait(1).to({x:1292.85},0).wait(1).to({x:1282.05},0).wait(1).to({x:1271.25},0).wait(1).to({x:1260.45},0).wait(1).to({x:1249.65},0).wait(1).to({x:1238.85},0).wait(1).to({x:1228.05},0).wait(1).to({x:1217.25},0).wait(1).to({x:1206.45},0).wait(1).to({x:1195.65},0).wait(1).to({x:1184.85},0).wait(1).to({x:1174.05},0).wait(1).to({x:1163.25},0).wait(1).to({x:1152.45},0).wait(1).to({x:1141.65},0).wait(1).to({x:1130.85},0).wait(1).to({x:1120.05},0).wait(1).to({x:1109.25},0).wait(1).to({x:1098.45},0).wait(1).to({x:1087.65},0).wait(1).to({x:1076.85},0).wait(1).to({x:1066.1},0).wait(1).to({x:1055.3},0).wait(1).to({x:1044.5},0).wait(1).to({x:1033.7},0).wait(1).to({x:1022.9},0).wait(1).to({x:1012.1},0).wait(1).to({x:1001.3},0).wait(1).to({x:990.5},0).wait(1).to({x:979.7},0).wait(1).to({x:968.9},0).wait(1).to({x:958.1},0).wait(1).to({x:947.3},0).wait(1).to({x:936.5},0).wait(1).to({x:925.7},0).wait(1).to({x:914.9},0).wait(1).to({x:904.1},0).wait(1).to({x:893.3},0).wait(1).to({x:882.5},0).wait(1).to({x:871.7},0).wait(1).to({x:860.9},0).wait(1).to({x:850.1},0).wait(1).to({x:839.35},0).wait(1).to({x:828.55},0).wait(1).to({x:817.75},0).wait(1).to({x:806.95},0).wait(1).to({x:796.15},0).wait(1).to({x:785.35},0).wait(1).to({x:774.55},0).wait(1).to({x:763.75},0).wait(1).to({x:752.95},0).wait(1).to({x:742.15},0).wait(1).to({x:731.35},0).wait(1).to({x:720.55},0).wait(1).to({x:709.75},0).wait(1).to({x:698.95},0).wait(1).to({x:688.15},0).wait(1).to({x:677.35},0).wait(1).to({x:666.55},0).wait(1).to({x:655.8},0).wait(1).to({x:644.95},0).wait(1).to({x:634.15},0).wait(1).to({x:623.35},0).wait(1).to({x:612.55},0).wait(1).to({x:601.8},0).wait(1).to({x:591},0).wait(1).to({x:580.2},0).wait(1).to({x:569.4},0).wait(1).to({x:558.6},0).wait(1).to({x:547.8},0).wait(1).to({x:537},0).wait(1).to({x:526.2},0).wait(1).to({x:515.4},0).wait(1).to({x:504.6},0).wait(1).to({x:493.8},0).wait(1).to({x:483},0).wait(1).to({x:472.2},0).wait(1).to({x:461.4},0).wait(1).to({x:450.6},0).wait(1).to({x:439.8},0).wait(1).to({x:429},0).wait(1).to({x:418.2},0).wait(1).to({x:407.4},0).wait(1).to({x:396.6},0).wait(1).to({x:385.8},0).wait(1).to({x:375},0).wait(1));

	// solidoazul
	this.instance_4 = new lib.colorsolidoazul();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(174));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1720,0,5629,1000);


(lib.Scene_1_Layer_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.AnimacionInicial("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-112,0,0.724,0.724);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(174));

}).prototype = p = new cjs.MovieClip();


(lib.SymGiroTierraFrame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// EspacioBrillante
	this.instance = new lib.SymEspacioBrillante();
	this.instance.parent = this;
	this.instance.setTransform(652.75,353,1,1,0,0,0,1000,500);
	this.instance.alpha = 0.3398;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// EspacioTenue
	this.instance_1 = new lib.espacioTenue();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-347,-147);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Nubes
	this.instance_2 = new lib.SymNubes();
	this.instance_2.parent = this;
	this.instance_2.setTransform(932.1,568.5,1.2491,1.2491,0,0,0,995.6,495.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Tierra_correccion
	this.instance_3 = new lib.SymTierra();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-111.5,341.9,1,1,0,0,0,807.9,403.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Tierra
	this.instance_4 = new lib.SymTierra();
	this.instance_4.parent = this;
	this.instance_4.setTransform(919.65,341.9,1,1,0,0,0,807.9,403.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-919.4,-147,3106.1,1345.8);


(lib.SymGiroTierra = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// EspacioBrillante
	this.instance = new lib.SymEspacioBrillante();
	this.instance.parent = this;
	this.instance.setTransform(652.75,353,1,1,0,0,0,1000,500);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.9609},0).wait(1).to({alpha:0.9217},0).wait(1).to({alpha:0.8826},0).wait(1).to({alpha:0.8435},0).wait(1).to({alpha:0.8043},0).wait(1).to({alpha:0.7652},0).wait(1).to({alpha:0.7261},0).wait(1).to({alpha:0.687},0).wait(1).to({alpha:0.6478},0).wait(1).to({alpha:0.6087},0).wait(1).to({alpha:0.5696},0).wait(1).to({alpha:0.5304},0).wait(1).to({alpha:0.4913},0).wait(1).to({alpha:0.4522},0).wait(1).to({alpha:0.413},0).wait(1).to({alpha:0.3739},0).wait(1).to({alpha:0.3348},0).wait(1).to({alpha:0.2957},0).wait(1).to({alpha:0.2565},0).wait(1).to({alpha:0.2174},0).wait(1).to({alpha:0.1783},0).wait(1).to({alpha:0.1391},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.1354},0).wait(1).to({alpha:0.1708},0).wait(1).to({alpha:0.2063},0).wait(1).to({alpha:0.2417},0).wait(1).to({alpha:0.2771},0).wait(1).to({alpha:0.3125},0).wait(1).to({alpha:0.3479},0).wait(1).to({alpha:0.3833},0).wait(1).to({alpha:0.4187},0).wait(1).to({alpha:0.4542},0).wait(1).to({alpha:0.4896},0).wait(1).to({alpha:0.525},0).wait(1).to({alpha:0.5604},0).wait(1).to({alpha:0.5958},0).wait(1).to({alpha:0.6313},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.7021},0).wait(1).to({alpha:0.7375},0).wait(1).to({alpha:0.7729},0).wait(1).to({alpha:0.8083},0).wait(1).to({alpha:0.8438},0).wait(1).to({alpha:0.8792},0).wait(1).to({alpha:0.9146},0).wait(1).to({alpha:0.95},0).wait(1).to({alpha:0.9208},0).wait(1).to({alpha:0.8917},0).wait(1).to({alpha:0.8625},0).wait(1).to({alpha:0.8333},0).wait(1).to({alpha:0.8042},0).wait(1).to({alpha:0.775},0).wait(1).to({alpha:0.7458},0).wait(1).to({alpha:0.7167},0).wait(1).to({alpha:0.6875},0).wait(1).to({alpha:0.6583},0).wait(1).to({alpha:0.6292},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5708},0).wait(1).to({alpha:0.5417},0).wait(1).to({alpha:0.5125},0).wait(1).to({alpha:0.4833},0).wait(1).to({alpha:0.4542},0).wait(1).to({alpha:0.425},0).wait(1).to({alpha:0.3958},0).wait(1).to({alpha:0.3667},0).wait(1).to({alpha:0.3375},0).wait(1).to({alpha:0.3083},0).wait(1).to({alpha:0.2792},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.2813},0).wait(1).to({alpha:0.3125},0).wait(1).to({alpha:0.3438},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.4063},0).wait(1).to({alpha:0.4375},0).wait(1).to({alpha:0.4688},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.5313},0).wait(1).to({alpha:0.5625},0).wait(1).to({alpha:0.5938},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.6563},0).wait(1).to({alpha:0.6875},0).wait(1).to({alpha:0.7188},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.7813},0).wait(1).to({alpha:0.8125},0).wait(1).to({alpha:0.8438},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.9063},0).wait(1).to({alpha:0.9375},0).wait(1).to({alpha:0.9688},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.9725},0).wait(1).to({alpha:0.945},0).wait(1).to({alpha:0.9175},0).wait(1).to({alpha:0.89},0).wait(1).to({alpha:0.8625},0).wait(1).to({alpha:0.835},0).wait(1).to({alpha:0.8075},0).wait(1).to({alpha:0.78},0).wait(1).to({alpha:0.7525},0).wait(1).to({alpha:0.725},0).wait(1).to({alpha:0.6975},0).wait(1).to({alpha:0.67},0).wait(1).to({alpha:0.6425},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.5875},0).wait(1).to({alpha:0.56},0).wait(1).to({alpha:0.5325},0).wait(1).to({alpha:0.505},0).wait(1).to({alpha:0.4775},0).wait(1).to({alpha:0.45},0).wait(1).to({alpha:0.4225},0).wait(1).to({alpha:0.395},0).wait(1).to({alpha:0.3675},0).wait(1).to({alpha:0.34},0).wait(1));

	// EspacioTenue
	this.instance_1 = new lib.espacioTenue();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-347,-147);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(120));

	// Nubes
	this.instance_2 = new lib.SymNubes();
	this.instance_2.parent = this;
	this.instance_2.setTransform(333.85,387,1.2491,1.2491,0,0,0,995.9,495.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:1000,regY:500,x:344,y:394},0).wait(1).to({x:349.05,y:395.55},0).wait(1).to({x:354.05,y:397.05},0).wait(1).to({x:359.1,y:398.6},0).wait(1).to({x:364.1,y:400.1},0).wait(1).to({x:369.15,y:401.65},0).wait(1).to({x:374.2,y:403.15},0).wait(1).to({x:379.2,y:404.7},0).wait(1).to({x:384.25,y:406.2},0).wait(1).to({x:389.25,y:407.75},0).wait(1).to({x:394.3,y:409.25},0).wait(1).to({x:399.35,y:410.8},0).wait(1).to({x:404.35,y:412.3},0).wait(1).to({x:409.4,y:413.85},0).wait(1).to({x:414.4,y:415.35},0).wait(1).to({x:419.45,y:416.9},0).wait(1).to({x:424.5,y:418.45},0).wait(1).to({x:429.5,y:419.95},0).wait(1).to({x:434.55,y:421.5},0).wait(1).to({x:439.55,y:423},0).wait(1).to({x:444.6,y:424.55},0).wait(1).to({x:449.6,y:426.05},0).wait(1).to({x:454.65,y:427.6},0).wait(1).to({x:459.7,y:429.1},0).wait(1).to({x:464.7,y:430.65},0).wait(1).to({x:469.75,y:432.15},0).wait(1).to({x:474.75,y:433.7},0).wait(1).to({x:479.8,y:435.2},0).wait(1).to({x:484.85,y:436.75},0).wait(1).to({x:489.85,y:438.25},0).wait(1).to({x:494.9,y:439.8},0).wait(1).to({x:499.9,y:441.35},0).wait(1).to({x:504.95,y:442.85},0).wait(1).to({x:509.95,y:444.4},0).wait(1).to({x:515,y:445.9},0).wait(1).to({x:520,y:447.45},0).wait(1).to({x:525.05,y:448.95},0).wait(1).to({x:530.1,y:450.5},0).wait(1).to({x:535.1,y:452},0).wait(1).to({x:540.15,y:453.55},0).wait(1).to({x:545.2,y:455.05},0).wait(1).to({x:550.2,y:456.6},0).wait(1).to({x:555.25,y:458.1},0).wait(1).to({x:560.25,y:459.65},0).wait(1).to({x:565.3,y:461.15},0).wait(1).to({x:570.3,y:462.7},0).wait(1).to({x:575.35,y:464.2},0).wait(1).to({x:580.4,y:465.75},0).wait(1).to({x:585.4,y:467.3},0).wait(1).to({x:590.45,y:468.8},0).wait(1).to({x:595.45,y:470.35},0).wait(1).to({x:600.5,y:471.85},0).wait(1).to({x:605.55,y:473.4},0).wait(1).to({x:610.55,y:474.9},0).wait(1).to({x:615.6,y:476.45},0).wait(1).to({x:620.6,y:477.95},0).wait(1).to({x:625.65,y:479.5},0).wait(1).to({x:630.65,y:481},0).wait(1).to({x:635.7,y:482.55},0).wait(1).to({x:640.75,y:484.05},0).wait(1).to({x:645.75,y:485.6},0).wait(1).to({x:650.8,y:487.1},0).wait(1).to({x:655.8,y:488.65},0).wait(1).to({x:660.85,y:490.2},0).wait(1).to({x:665.85,y:491.7},0).wait(1).to({x:670.9,y:493.25},0).wait(1).to({x:675.95,y:494.75},0).wait(1).to({x:680.95,y:496.3},0).wait(1).to({x:686,y:497.8},0).wait(1).to({x:691,y:499.35},0).wait(1).to({x:696.05,y:500.85},0).wait(1).to({x:701.1,y:502.4},0).wait(1).to({x:706.1,y:503.9},0).wait(1).to({x:711.15,y:505.45},0).wait(1).to({x:716.15,y:506.95},0).wait(1).to({x:721.2,y:508.5},0).wait(1).to({x:726.25,y:510},0).wait(1).to({x:731.25,y:511.55},0).wait(1).to({x:736.3,y:513.05},0).wait(1).to({x:741.3,y:514.6},0).wait(1).to({x:746.35,y:516.15},0).wait(1).to({x:751.35,y:517.65},0).wait(1).to({x:756.4,y:519.2},0).wait(1).to({x:761.45,y:520.7},0).wait(1).to({x:766.45,y:522.25},0).wait(1).to({x:771.5,y:523.75},0).wait(1).to({x:776.5,y:525.3},0).wait(1).to({x:781.55,y:526.8},0).wait(1).to({x:786.6,y:528.35},0).wait(1).to({x:791.6,y:529.85},0).wait(1).to({x:796.65,y:531.4},0).wait(1).to({x:801.65,y:532.9},0).wait(1).to({x:806.7,y:534.45},0).wait(1).to({x:811.7,y:535.95},0).wait(1).to({x:816.75,y:537.5},0).wait(1).to({x:821.8,y:539.05},0).wait(1).to({x:826.8,y:540.55},0).wait(1).to({x:831.85,y:542.1},0).wait(1).to({x:836.85,y:543.6},0).wait(1).to({x:841.9,y:545.15},0).wait(1).to({x:846.95,y:546.65},0).wait(1).to({x:851.95,y:548.2},0).wait(1).to({x:857,y:549.7},0).wait(1).to({x:862,y:551.25},0).wait(1).to({x:867.05,y:552.75},0).wait(1).to({x:872.05,y:554.3},0).wait(1).to({x:877.1,y:555.8},0).wait(1).to({x:882.15,y:557.35},0).wait(1).to({x:887.15,y:558.85},0).wait(1).to({x:892.2,y:560.4},0).wait(1).to({x:897.2,y:561.9},0).wait(1).to({x:902.25,y:563.45},0).wait(1).to({x:907.3,y:565},0).wait(1).to({x:912.3,y:566.5},0).wait(1).to({x:917.35,y:568.05},0).wait(1).to({x:922.35,y:569.55},0).wait(1).to({x:927.4,y:571.1},0).wait(1).to({x:932.4,y:572.6},0).wait(1).to({x:937.45,y:574.15},0).wait(1));

	// Tierra_correccion
	this.instance_3 = new lib.SymTierra();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-315.6,341.9,1,1,0,0,0,807.9,403.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(81).to({_off:false},0).wait(1).to({regY:404,x:-310.2,y:342},0).wait(1).to({x:-304.85},0).wait(1).to({x:-299.45},0).wait(1).to({x:-294.1},0).wait(1).to({x:-288.7},0).wait(1).to({x:-283.35},0).wait(1).to({x:-278},0).wait(1).to({x:-272.6},0).wait(1).to({x:-267.25},0).wait(1).to({x:-261.85},0).wait(1).to({x:-256.5},0).wait(1).to({x:-251.1},0).wait(1).to({x:-245.75},0).wait(1).to({x:-240.35},0).wait(1).to({x:-235},0).wait(1).to({x:-229.6},0).wait(1).to({x:-224.25},0).wait(1).to({x:-218.9},0).wait(1).to({x:-213.5},0).wait(1).to({x:-208.15},0).wait(1).to({x:-202.75},0).wait(1).to({x:-197.4},0).wait(1).to({x:-192},0).wait(1).to({x:-186.65},0).wait(1).to({x:-181.3},0).wait(1).to({x:-175.9},0).wait(1).to({x:-170.55},0).wait(1).to({x:-165.15},0).wait(1).to({x:-159.8},0).wait(1).to({x:-154.4},0).wait(1).to({x:-149.05},0).wait(1).to({x:-143.65},0).wait(1).to({x:-138.3},0).wait(1).to({x:-132.95},0).wait(1).to({x:-127.55},0).wait(1).to({x:-122.2},0).wait(1).to({x:-116.8},0).wait(1).to({x:-111.45},0).wait(1));

	// Tierra
	this.instance_4 = new lib.SymTierra();
	this.instance_4.parent = this;
	this.instance_4.setTransform(280.65,341.9,1,1,0,0,0,807.9,403.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regY:404,x:286.05,y:342},0).wait(1).to({x:291.4},0).wait(1).to({x:296.8},0).wait(1).to({x:302.15},0).wait(1).to({x:307.5},0).wait(1).to({x:312.9},0).wait(1).to({x:318.25},0).wait(1).to({x:323.65},0).wait(1).to({x:329},0).wait(1).to({x:334.35},0).wait(1).to({x:339.75},0).wait(1).to({x:345.1},0).wait(1).to({x:350.5},0).wait(1).to({x:355.85},0).wait(1).to({x:361.2},0).wait(1).to({x:366.6},0).wait(1).to({x:371.95},0).wait(1).to({x:377.35},0).wait(1).to({x:382.7},0).wait(1).to({x:388.05},0).wait(1).to({x:393.45},0).wait(1).to({x:398.8},0).wait(1).to({x:404.2},0).wait(1).to({x:409.55},0).wait(1).to({x:414.9},0).wait(1).to({x:420.3},0).wait(1).to({x:425.65},0).wait(1).to({x:431},0).wait(1).to({x:436.4},0).wait(1).to({x:441.75},0).wait(1).to({x:447.15},0).wait(1).to({x:452.5},0).wait(1).to({x:457.9},0).wait(1).to({x:463.25},0).wait(1).to({x:468.6},0).wait(1).to({x:474},0).wait(1).to({x:479.35},0).wait(1).to({x:484.7},0).wait(1).to({x:490.1},0).wait(1).to({x:495.45},0).wait(1).to({x:500.85},0).wait(1).to({x:506.2},0).wait(1).to({x:511.6},0).wait(1).to({x:516.95},0).wait(1).to({x:522.3},0).wait(1).to({x:527.7},0).wait(1).to({x:533.05},0).wait(1).to({x:538.4},0).wait(1).to({x:543.8},0).wait(1).to({x:549.15},0).wait(1).to({x:554.55},0).wait(1).to({x:559.9},0).wait(1).to({x:565.25},0).wait(1).to({x:570.65},0).wait(1).to({x:576},0).wait(1).to({x:581.4},0).wait(1).to({x:586.75},0).wait(1).to({x:592.1},0).wait(1).to({x:597.5},0).wait(1).to({x:602.85},0).wait(1).to({x:608.25},0).wait(1).to({x:613.6},0).wait(1).to({x:618.95},0).wait(1).to({x:624.35},0).wait(1).to({x:629.7},0).wait(1).to({x:635.1},0).wait(1).to({x:640.45},0).wait(1).to({x:645.8},0).wait(1).to({x:651.2},0).wait(1).to({x:656.55},0).wait(1).to({x:661.95},0).wait(1).to({x:667.3},0).wait(1).to({x:672.65},0).wait(1).to({x:678.05},0).wait(1).to({x:683.4},0).wait(1).to({x:688.75},0).wait(1).to({x:694.15},0).wait(1).to({x:699.5},0).wait(1).to({x:704.9},0).wait(1).to({x:710.25},0).wait(1).to({x:715.65},0).wait(1).to({x:721},0).wait(1).to({x:726.35},0).wait(1).to({x:731.75},0).wait(1).to({x:737.1},0).wait(1).to({x:742.5},0).wait(1).to({x:747.85},0).wait(1).to({x:753.2},0).wait(1).to({x:758.6},0).wait(1).to({x:763.95},0).wait(1).to({x:769.3},0).wait(1).to({x:774.7},0).wait(1).to({x:780.05},0).wait(1).to({x:785.45},0).wait(1).to({x:790.8},0).wait(1).to({x:796.15},0).wait(1).to({x:801.55},0).wait(1).to({x:806.9},0).wait(1).to({x:812.25},0).wait(1).to({x:817.6},0).wait(1).to({x:822.95},0).wait(1).to({x:828.35},0).wait(1).to({x:833.7},0).wait(1).to({x:839.1},0).wait(1).to({x:844.45},0).wait(1).to({x:849.8},0).wait(1).to({x:855.2},0).wait(1).to({x:860.55},0).wait(1).to({x:865.95},0).wait(1).to({x:871.3},0).wait(1).to({x:876.65},0).wait(1).to({x:882.05},0).wait(1).to({x:887.4},0).wait(1).to({x:892.8},0).wait(1).to({x:898.15},0).wait(1).to({x:903.5},0).wait(1).to({x:908.9},0).wait(1).to({x:914.25},0).wait(1).to({x:919.65},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1123.5,-232,3310,1430.7);


(lib.SymElSimbolo_zoomTierraMv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// zoomTierraMv
	this.instance = new lib.SymGiroTierra("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(587.75,304.3,0.8201,0.8202,0,0,0,670.4,312.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:531.5,regY:483.3,scaleX:0.8228,scaleY:0.8229,x:473.45,y:444.85,startPosition:1},0).wait(1).to({scaleX:0.8254,scaleY:0.8255,x:473.05,y:445.25,startPosition:2},0).wait(1).to({scaleX:0.8281,scaleY:0.8282,x:472.7,y:445.7,startPosition:3},0).wait(1).to({scaleX:0.8308,scaleY:0.8309,x:472.3,y:446.2,startPosition:4},0).wait(1).to({scaleX:0.8334,scaleY:0.8335,x:471.95,y:446.65,startPosition:5},0).wait(1).to({scaleX:0.8361,scaleY:0.8362,x:471.6,y:447.1,startPosition:6},0).wait(1).to({scaleX:0.8388,scaleY:0.8389,x:471.2,y:447.55,startPosition:7},0).wait(1).to({scaleX:0.8414,scaleY:0.8415,x:470.8,y:448,startPosition:8},0).wait(1).to({scaleX:0.8441,scaleY:0.8442,x:470.5,y:448.45,startPosition:9},0).wait(1).to({scaleX:0.8468,scaleY:0.8469,x:470.1,y:448.95,startPosition:10},0).wait(1).to({scaleX:0.8494,scaleY:0.8495,x:469.7,y:449.35,startPosition:11},0).wait(1).to({scaleX:0.8521,scaleY:0.8522,x:469.35,y:449.8,startPosition:12},0).wait(1).to({scaleX:0.8548,scaleY:0.8548,x:469,y:450.3,startPosition:13},0).wait(1).to({scaleX:0.8574,scaleY:0.8575,x:468.6,y:450.75,startPosition:14},0).wait(1).to({scaleX:0.8601,scaleY:0.8602,x:468.25,y:451.15,startPosition:15},0).wait(1).to({scaleX:0.8628,scaleY:0.8628,x:467.85,y:451.65,startPosition:16},0).wait(1).to({scaleX:0.8654,scaleY:0.8655,x:467.5,y:452.1,startPosition:17},0).wait(1).to({scaleX:0.8681,scaleY:0.8682,x:467.15,y:452.55,startPosition:18},0).wait(1).to({scaleX:0.8708,scaleY:0.8708,x:466.75,y:453,startPosition:19},0).wait(1).to({scaleX:0.8734,scaleY:0.8735,x:466.4,y:453.45,startPosition:20},0).wait(1).to({scaleX:0.8761,scaleY:0.8762,x:466.05,y:453.9,startPosition:21},0).wait(1).to({scaleX:0.8788,scaleY:0.8788,x:465.7,y:454.4,startPosition:22},0).wait(1).to({scaleX:0.8814,scaleY:0.8815,x:465.35,y:454.85,startPosition:23},0).wait(1).to({scaleX:0.8841,scaleY:0.8842,x:465,y:455.25,startPosition:24},0).wait(1).to({scaleX:0.8868,scaleY:0.8868,x:464.6,y:455.75,startPosition:25},0).wait(1).to({scaleX:0.8894,scaleY:0.8895,x:464.25,y:456.2,startPosition:26},0).wait(1).to({scaleX:0.8921,scaleY:0.8922,x:463.85,y:456.7,startPosition:27},0).wait(1).to({scaleX:0.8948,scaleY:0.8948,x:463.5,y:457.1,startPosition:28},0).wait(1).to({scaleX:0.8974,scaleY:0.8975,x:463.15,y:457.55,startPosition:29},0).wait(1).to({scaleX:0.9001,scaleY:0.9002,x:462.75,y:458.05,startPosition:30},0).wait(1).to({scaleX:0.9028,scaleY:0.9028,x:462.35,y:458.5,startPosition:31},0).wait(1).to({scaleX:0.9054,scaleY:0.9055,x:462.05,y:458.95,startPosition:32},0).wait(1).to({scaleX:0.9081,scaleY:0.9082,x:461.65,y:459.4,startPosition:33},0).wait(1).to({scaleX:0.9107,scaleY:0.9108,x:461.25,y:459.85,startPosition:34},0).wait(1).to({scaleX:0.9134,scaleY:0.9135,x:460.9,y:460.3,startPosition:35},0).wait(1).to({scaleX:0.9161,scaleY:0.9162,x:460.55,y:460.8,startPosition:36},0).wait(1).to({scaleX:0.9187,scaleY:0.9188,x:460.15,y:461.2,startPosition:37},0).wait(1).to({scaleX:0.9214,scaleY:0.9215,x:459.8,y:461.65,startPosition:38},0).wait(1).to({scaleX:0.9241,scaleY:0.9242,x:459.4,y:462.15,startPosition:39},0).wait(1).to({scaleX:0.9267,scaleY:0.9268,x:459.05,y:462.6,startPosition:40},0).wait(1).to({scaleX:0.9294,scaleY:0.9295,x:458.65,y:463,startPosition:41},0).wait(1).to({scaleX:0.9321,scaleY:0.9322,x:458.3,y:463.5,startPosition:42},0).wait(1).to({scaleX:0.9347,scaleY:0.9348,x:457.95,y:463.95,startPosition:43},0).wait(1).to({scaleX:0.9374,scaleY:0.9375,x:457.55,y:464.4,startPosition:44},0).wait(1).to({scaleX:0.9401,scaleY:0.9402,x:457.2,y:464.9,startPosition:45},0).wait(1).to({scaleX:0.9427,scaleY:0.9428,x:456.8,y:465.3,startPosition:46},0).wait(1).to({scaleX:0.9454,scaleY:0.9455,x:456.45,y:465.75,startPosition:47},0).wait(1).to({scaleX:0.9481,scaleY:0.9482,x:456.1,y:466.25,startPosition:48},0).wait(1).to({scaleX:0.9507,scaleY:0.9508,x:455.7,y:466.7,startPosition:49},0).wait(1).to({scaleX:0.9534,scaleY:0.9535,x:455.3,y:467.1,startPosition:50},0).wait(1).to({scaleX:0.9561,scaleY:0.9562,x:455,y:467.6,startPosition:51},0).wait(1).to({scaleX:0.9587,scaleY:0.9588,x:454.6,y:468.05,startPosition:52},0).wait(1).to({scaleX:0.9614,scaleY:0.9615,x:454.2,y:468.5,startPosition:53},0).wait(1).to({scaleX:0.9641,scaleY:0.9642,x:453.85,y:468.95,startPosition:54},0).wait(1).to({scaleX:0.9667,scaleY:0.9668,x:453.5,y:469.4,startPosition:55},0).wait(1).to({scaleX:0.9694,scaleY:0.9695,x:453.15,y:469.85,startPosition:56},0).wait(1).to({scaleX:0.9721,scaleY:0.9722,x:452.75,y:470.35,startPosition:57},0).wait(1).to({scaleX:0.9747,scaleY:0.9748,x:452.35,y:470.8,startPosition:58},0).wait(1).to({scaleX:0.9774,scaleY:0.9775,x:452.05,y:471.25,startPosition:59},0).wait(1).to({scaleX:0.9801,scaleY:0.9802,x:451.65,y:471.75,startPosition:60},0).wait(1).to({scaleX:0.9827,scaleY:0.9828,x:451.25,y:472.2,startPosition:61},0).wait(1).to({scaleX:0.9854,scaleY:0.9855,x:450.9,y:472.65,startPosition:62},0).wait(1).to({scaleX:0.9881,scaleY:0.9882,x:450.55,y:473.1,startPosition:63},0).wait(1).to({scaleX:0.9907,scaleY:0.9908,x:450.15,y:473.55,startPosition:64},0).wait(1).to({scaleX:0.9934,scaleY:0.9935,x:449.8,y:474,startPosition:65},0).wait(1).to({scaleX:0.996,scaleY:0.9961,x:449.45,y:474.5,startPosition:66},0).wait(1).to({scaleX:0.9987,scaleY:0.9988,x:449.05,y:474.9,startPosition:67},0).wait(1).to({scaleX:1.0014,scaleY:1.0015,x:448.7,y:475.35,startPosition:68},0).wait(1).to({scaleX:1.004,scaleY:1.0041,x:448.3,y:475.85,startPosition:69},0).wait(1).to({scaleX:1.0067,scaleY:1.0068,x:447.95,y:476.3,startPosition:70},0).wait(1).to({scaleX:1.0094,scaleY:1.0095,x:447.6,y:476.75,startPosition:71},0).wait(1).to({scaleX:1.012,scaleY:1.0121,x:447.2,y:477.2,startPosition:72},0).wait(1).to({scaleX:1.0147,scaleY:1.0148,x:446.8,y:477.65,startPosition:73},0).wait(1).to({scaleX:1.0174,scaleY:1.0175,x:446.5,y:478.1,startPosition:74},0).wait(1).to({scaleX:1.02,scaleY:1.0201,x:446.1,y:478.6,startPosition:75},0).wait(1).to({scaleX:1.0227,scaleY:1.0228,x:445.7,y:479,startPosition:76},0).wait(1).to({scaleX:1.0254,scaleY:1.0255,x:445.35,y:479.45,startPosition:77},0).wait(1).to({scaleX:1.028,scaleY:1.0281,x:445,y:479.95,startPosition:78},0).wait(1).to({scaleX:1.0307,scaleY:1.0308,x:444.6,y:480.4,startPosition:79},0).wait(1).to({scaleX:1.0334,scaleY:1.0335,x:444.25,y:480.8,startPosition:80},0).wait(1).to({scaleX:1.036,scaleY:1.0361,x:443.85,y:481.3,startPosition:81},0).wait(1).to({scaleX:1.0387,scaleY:1.0388,x:443.5,y:481.75,startPosition:82},0).wait(1).to({scaleX:1.0414,scaleY:1.0415,x:443.15,y:482.2,startPosition:83},0).wait(1).to({scaleX:1.044,scaleY:1.0441,x:442.75,y:482.7,startPosition:84},0).wait(1).to({scaleX:1.0467,scaleY:1.0468,x:442.4,y:483.1,startPosition:85},0).wait(1).to({scaleX:1.0494,scaleY:1.0495,x:442.05,y:483.55,startPosition:86},0).wait(1).to({scaleX:1.052,scaleY:1.0521,x:441.65,y:484.05,startPosition:87},0).wait(1).to({scaleX:1.0547,scaleY:1.0548,x:441.25,y:484.5,startPosition:88},0).wait(1).to({scaleX:1.0574,scaleY:1.0575,x:440.95,y:484.9,startPosition:89},0).wait(1).to({scaleX:1.06,scaleY:1.0601,x:440.55,y:485.4,startPosition:90},0).wait(1).to({scaleX:1.0627,scaleY:1.0628,x:440.15,y:485.85,startPosition:91},0).wait(1).to({scaleX:1.0654,scaleY:1.0655,x:439.8,y:486.3,startPosition:92},0).wait(1).to({scaleX:1.068,scaleY:1.0681,x:439.45,y:486.8,startPosition:93},0).wait(1).to({scaleX:1.0707,scaleY:1.0708,x:439.05,y:487.2,startPosition:94},0).wait(1).to({scaleX:1.0734,scaleY:1.0735,x:438.7,y:487.65,startPosition:95},0).wait(1).to({scaleX:1.076,scaleY:1.0761,x:438.3,y:488.15,startPosition:96},0).wait(1).to({scaleX:1.0787,scaleY:1.0788,x:437.95,y:488.6,startPosition:97},0).wait(1).to({scaleX:1.0814,scaleY:1.0815,x:437.6,y:489,startPosition:98},0).wait(1).to({scaleX:1.084,scaleY:1.0841,x:437.2,y:489.5,startPosition:99},0).wait(1).to({scaleX:1.0867,scaleY:1.0868,x:436.8,y:489.95,startPosition:100},0).wait(1).to({scaleX:1.0893,scaleY:1.0895,x:436.5,y:490.4,startPosition:101},0).wait(1).to({scaleX:1.092,scaleY:1.0921,x:436.1,y:490.85,startPosition:102},0).wait(1).to({scaleX:1.0947,scaleY:1.0948,x:435.7,y:491.3,startPosition:103},0).wait(1).to({scaleX:1.0973,scaleY:1.0975,x:435.35,y:491.75,startPosition:104},0).wait(1).to({scaleX:1.1,scaleY:1.1001,x:435,y:492.25,startPosition:105},0).wait(1).to({scaleX:1.1027,scaleY:1.1028,x:434.6,y:492.7,startPosition:106},0).wait(1).to({scaleX:1.1053,scaleY:1.1055,x:434.25,y:493.1,startPosition:107},0).wait(1).to({scaleX:1.108,scaleY:1.1081,x:433.9,y:493.6,startPosition:108},0).wait(1).to({scaleX:1.1107,scaleY:1.1108,x:433.5,y:494.05,startPosition:109},0).wait(1).to({scaleX:1.1133,scaleY:1.1135,x:433.15,y:494.5,startPosition:110},0).wait(1).to({scaleX:1.116,scaleY:1.1161,x:432.75,y:494.95,startPosition:111},0).wait(1).to({scaleX:1.1187,scaleY:1.1188,x:432.4,y:495.4,startPosition:112},0).wait(1).to({scaleX:1.1213,scaleY:1.1215,x:432.05,y:495.9,startPosition:113},0).wait(1).to({scaleX:1.124,scaleY:1.1241,x:431.65,y:496.35,startPosition:114},0).wait(1).to({scaleX:1.1267,scaleY:1.1268,x:431.25,y:496.8,startPosition:115},0).wait(1).to({scaleX:1.1293,scaleY:1.1295,x:430.95,y:497.25,startPosition:116},0).wait(1).to({scaleX:1.132,scaleY:1.1321,x:430.55,y:497.7,startPosition:117},0).wait(1).to({scaleX:1.1347,scaleY:1.1348,x:430.15,y:498.15,startPosition:118},0).wait(1).to({scaleX:1.1373,scaleY:1.1375,x:429.8,y:498.6,startPosition:119},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.SymElSimbolo_Nubes_copy_copy_copy_copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Nubes_copy_copy_copy_copy
	this.instance = new lib.Symbol1_1();
	this.instance.parent = this;
	this.instance.setTransform(-873.5,-281.6,1,1,0,0,0,2448.4,1224.2);
	this.instance.alpha = 0.1797;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(138).to({_off:false},0).wait(1).to({x:-874.55,y:-281.3,alpha:0.1961},0).wait(1).to({x:-875.6,y:-281.05,alpha:0.2122},0).wait(1).to({x:-876.65,y:-280.8,alpha:0.2282},0).wait(1).to({x:-877.7,y:-280.55,alpha:0.2443},0).wait(1).to({x:-878.75,y:-280.3,alpha:0.2604},0).wait(1).to({x:-879.8,y:-280.05,alpha:0.2765},0).wait(1).to({x:-880.85,y:-279.8,alpha:0.2925},0).wait(1).to({x:-881.9,y:-279.5,alpha:0.3086},0).wait(1).to({x:-882.95,y:-279.25,alpha:0.3247},0).wait(1).to({x:-884,y:-279,alpha:0.3408},0).wait(1).to({x:-885.05,y:-278.75,alpha:0.3569},0).wait(1).to({x:-886.1,y:-278.5,alpha:0.3729},0).wait(1).to({x:-887.15,y:-278.25,alpha:0.389},0).wait(1).to({x:-888.2,y:-278,alpha:0.4051},0).wait(1).to({x:-889.25,y:-277.7,alpha:0.4212},0).wait(1).to({x:-890.3,y:-277.45,alpha:0.4373},0).wait(1).to({x:-891.35,y:-277.2,alpha:0.4533},0).wait(1).to({x:-892.4,y:-276.95,alpha:0.4694},0).wait(1).to({x:-893.45,y:-276.7,alpha:0.4855},0).wait(1).to({x:-894.5,y:-276.45,alpha:0.5016},0).wait(1).to({x:-895.55,y:-276.2,alpha:0.5176},0).wait(1).to({x:-896.6,y:-275.9,alpha:0.5337},0).wait(1).to({x:-897.65,y:-275.65,alpha:0.5498},0).wait(1).to({x:-898.7,y:-275.4,alpha:0.5659},0).wait(1).to({x:-899.75,y:-275.15,alpha:0.582},0).wait(1).to({x:-900.8,y:-274.9,alpha:0.598},0).wait(1).to({x:-901.85,y:-274.65,alpha:0.6141},0).wait(1).to({x:-902.9,y:-274.4,alpha:0.6302},0).wait(1).to({x:-904,y:-274.15,alpha:0.6463},0).wait(1).to({x:-905.05,y:-273.85,alpha:0.6624},0).wait(1).to({x:-906.1,y:-273.6,alpha:0.6784},0).wait(1).to({x:-907.15,y:-273.35,alpha:0.6945},0).wait(1).to({x:-908.2,y:-273.1,alpha:0.7106},0).wait(1).to({x:-909.25,y:-272.85,alpha:0.7267},0).wait(1).to({x:-910.3,y:-272.6,alpha:0.7427},0).wait(1).to({x:-911.35,y:-272.35,alpha:0.7588},0).wait(1).to({x:-912.4,y:-272.05,alpha:0.7749},0).wait(1).to({x:-913.45,y:-271.8,alpha:0.791},0).wait(1).to({x:-914.5,y:-271.55,alpha:0.8071},0).wait(1).to({x:-915.55,y:-271.3,alpha:0.8231},0).wait(1).to({x:-916.6,y:-271.05,alpha:0.8392},0).wait(1).to({x:-917.65,y:-270.8,alpha:0.8553},0).wait(1).to({x:-918.7,y:-270.55,alpha:0.8714},0).wait(1).to({x:-919.75,y:-270.25,alpha:0.8875},0).wait(1).to({x:-920.8,y:-270,alpha:0.9035},0).wait(1).to({x:-921.85,y:-269.75,alpha:0.9196},0).wait(1).to({x:-922.9,y:-269.5,alpha:0.9357},0).wait(1).to({x:-923.95,y:-269.25,alpha:0.9518},0).wait(1).to({x:-925,y:-269,alpha:0.9678},0).wait(1).to({x:-926.05,y:-268.75,alpha:0.9839},0).wait(1).to({x:-914.9,y:-268.5,alpha:1},0).wait(3).to({alpha:0.9583},0).wait(1).to({alpha:0.9167},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.8333},0).wait(1).to({alpha:0.7917},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.7083},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.5833},0).wait(1).to({alpha:0.5417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4583},0).wait(1).to({alpha:0.4167},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.2917},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.2083},0).wait(1).to({alpha:0.1667},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.0833},0).wait(1).to({alpha:0.0417},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.SymElSimbolo_Nubes_copy_copy_copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Nubes_copy_copy_copy
	this.instance = new lib.Symbol1_1();
	this.instance.parent = this;
	this.instance.setTransform(-105.05,182.35,1,1,0,0,0,2448.4,1224.2);
	this.instance.alpha = 0.1211;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(133).to({_off:false},0).wait(1).to({scaleX:1.007,scaleY:1.007,x:-120.55,y:181.6,alpha:0.1352},0).wait(1).to({scaleX:1.014,scaleY:1.014,x:-136.05,y:180.9,alpha:0.1503},0).wait(1).to({scaleX:1.0211,scaleY:1.0211,x:-151.6,y:180.2,alpha:0.1655},0).wait(1).to({scaleX:1.0281,scaleY:1.0281,x:-167.1,y:179.5,alpha:0.1807},0).wait(1).to({scaleX:1.0351,scaleY:1.0351,x:-182.55,y:178.8,alpha:0.1959},0).wait(1).to({scaleX:1.0421,scaleY:1.0421,x:-198.05,y:178.1,alpha:0.211},0).wait(1).to({scaleX:1.0491,scaleY:1.0491,x:-213.6,y:177.4,alpha:0.2262},0).wait(1).to({scaleX:1.0561,scaleY:1.0561,x:-229.1,y:176.65,alpha:0.2414},0).wait(1).to({scaleX:1.0632,scaleY:1.0632,x:-244.65,y:175.95,alpha:0.2566},0).wait(1).to({scaleX:1.0702,scaleY:1.0702,x:-260.1,y:175.25,alpha:0.2717},0).wait(1).to({scaleX:1.0772,scaleY:1.0772,x:-275.65,y:174.55,alpha:0.2869},0).wait(1).to({scaleX:1.0842,scaleY:1.0842,x:-291.15,y:173.85,alpha:0.3021},0).wait(1).to({scaleX:1.0912,scaleY:1.0912,x:-306.65,y:173.1,alpha:0.3172},0).wait(1).to({scaleX:1.0982,scaleY:1.0982,x:-322.15,y:172.4,alpha:0.3324},0).wait(1).to({scaleX:1.1053,scaleY:1.1053,x:-337.65,y:171.7,alpha:0.3476},0).wait(1).to({scaleX:1.1123,scaleY:1.1123,x:-353.15,y:171,alpha:0.3628},0).wait(1).to({scaleX:1.1193,scaleY:1.1193,x:-368.65,y:170.3,alpha:0.3779},0).wait(1).to({scaleX:1.1263,scaleY:1.1263,x:-384.2,y:169.55,alpha:0.3931},0).wait(1).to({scaleX:1.1333,scaleY:1.1333,x:-399.7,y:168.85,alpha:0.4083},0).wait(1).to({scaleX:1.1403,scaleY:1.1403,x:-415.2,y:168.15,alpha:0.4234},0).wait(1).to({scaleX:1.1474,scaleY:1.1474,x:-430.7,y:167.45,alpha:0.4386},0).wait(1).to({scaleX:1.1544,scaleY:1.1544,x:-446.25,y:166.75,alpha:0.4538},0).wait(1).to({scaleX:1.1614,scaleY:1.1614,x:-461.7,y:166.05,alpha:0.469},0).wait(1).to({scaleX:1.1684,scaleY:1.1684,x:-477.2,y:165.3,alpha:0.4841},0).wait(1).to({scaleX:1.1754,scaleY:1.1754,x:-492.75,y:164.6,alpha:0.4993},0).wait(1).to({scaleX:1.1824,scaleY:1.1824,x:-508.3,y:163.9,alpha:0.5145},0).wait(1).to({scaleX:1.1895,scaleY:1.1895,x:-523.8,y:163.2,alpha:0.5297},0).wait(1).to({scaleX:1.1965,scaleY:1.1965,x:-539.25,y:162.45,alpha:0.5448},0).wait(1).to({scaleX:1.2035,scaleY:1.2035,x:-554.75,y:161.75,alpha:0.56},0).wait(1).to({scaleX:1.2105,scaleY:1.2105,x:-570.3,y:161.05,alpha:0.5752},0).wait(1).to({scaleX:1.2175,scaleY:1.2175,x:-585.75,y:160.35,alpha:0.5903},0).wait(1).to({scaleX:1.2246,scaleY:1.2246,x:-601.25,y:159.65,alpha:0.6055},0).wait(1).to({scaleX:1.2316,scaleY:1.2316,x:-616.8,y:158.95,alpha:0.6207},0).wait(1).to({scaleX:1.2386,scaleY:1.2386,x:-632.3,y:158.25,alpha:0.6359},0).wait(1).to({scaleX:1.2456,scaleY:1.2456,x:-647.85,y:157.5,alpha:0.651},0).wait(1).to({scaleX:1.2526,scaleY:1.2526,x:-663.35,y:156.8,alpha:0.6662},0).wait(1).to({scaleX:1.2596,scaleY:1.2596,x:-678.85,y:156.1,alpha:0.6814},0).wait(1).to({scaleX:1.2667,scaleY:1.2667,x:-694.35,y:155.4,alpha:0.6966},0).wait(1).to({scaleX:1.2737,scaleY:1.2737,x:-709.85,y:154.65,alpha:0.7117},0).wait(1).to({scaleX:1.2807,scaleY:1.2807,x:-725.35,y:153.95,alpha:0.7269},0).wait(1).to({scaleX:1.2877,scaleY:1.2877,x:-740.85,y:153.25,alpha:0.7421},0).wait(1).to({scaleX:1.2947,scaleY:1.2947,x:-756.35,y:152.55,alpha:0.7572},0).wait(1).to({scaleX:1.3017,scaleY:1.3017,x:-771.9,y:151.8,alpha:0.7724},0).wait(1).to({scaleX:1.3088,scaleY:1.3088,x:-787.4,y:151.1,alpha:0.7876},0).wait(1).to({scaleX:1.3158,scaleY:1.3158,x:-802.95,y:150.4,alpha:0.8028},0).wait(1).to({scaleX:1.3228,scaleY:1.3228,x:-818.4,y:149.7,alpha:0.8179},0).wait(1).to({scaleX:1.3298,scaleY:1.3298,x:-833.9,y:149,alpha:0.8331},0).wait(1).to({scaleX:1.3368,scaleY:1.3368,x:-849.4,y:148.3,alpha:0.8483},0).wait(1).to({scaleX:1.3438,scaleY:1.3438,x:-864.95,y:147.6,alpha:0.8634},0).wait(1).to({scaleX:1.3509,scaleY:1.3509,x:-880.4,y:146.85,alpha:0.8786},0).wait(1).to({scaleX:1.3579,scaleY:1.3579,x:-895.9,y:146.15,alpha:0.8938},0).wait(1).to({x:-897.6,alpha:0.909},0).wait(1).to({x:-899.35,alpha:0.9241},0).wait(1).to({x:-901.05,alpha:0.9393},0).wait(1).to({x:-902.75,alpha:0.9545},0).wait(1).to({x:-904.5,alpha:0.9697},0).wait(1).to({x:-906.2,alpha:0.9848},0).wait(1).to({x:-907.9,alpha:1},0).wait(1).to({alpha:0.9444},0).wait(1).to({alpha:0.8889},0).wait(1).to({alpha:0.8333},0).wait(1).to({alpha:0.7778},0).wait(1).to({alpha:0.7222},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.6111},0).wait(1).to({alpha:0.5556},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.3889},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.2778},0).wait(1).to({alpha:0.2222},0).wait(1).to({alpha:0.1667},0).wait(1).to({alpha:0.1111},0).wait(1).to({alpha:0.0556},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.SymElSimbolo_Nubes_copy_copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Nubes_copy_copy
	this.instance = new lib.Symbol1_1();
	this.instance.parent = this;
	this.instance.setTransform(577.4,306.2,1,1,0,0,0,2448.4,1224.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(125).to({_off:false},0).wait(1).to({scaleX:1.0067,scaleY:1.0067,alpha:0.0217},0).wait(1).to({scaleX:1.0133,scaleY:1.0133,alpha:0.0435},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.0652},0).wait(1).to({scaleX:1.0267,scaleY:1.0267,alpha:0.087},0).wait(1).to({scaleX:1.0333,scaleY:1.0333,y:306.25,alpha:0.1087},0).wait(1).to({scaleX:1.04,scaleY:1.04,y:306.2,alpha:0.1304},0).wait(1).to({scaleX:1.0466,scaleY:1.0466,y:306.25,alpha:0.1522},0).wait(1).to({scaleX:1.0533,scaleY:1.0533,y:306.2,alpha:0.1739},0).wait(1).to({scaleX:1.06,scaleY:1.06,alpha:0.1957},0).wait(1).to({scaleX:1.0666,scaleY:1.0666,alpha:0.2174},0).wait(1).to({scaleX:1.0733,scaleY:1.0733,x:577.45,alpha:0.2391},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:577.4,alpha:0.2609},0).wait(1).to({scaleX:1.0866,scaleY:1.0866,y:306.25,alpha:0.2826},0).wait(1).to({scaleX:1.0933,scaleY:1.0933,x:577.45,alpha:0.3043},0).wait(1).to({scaleX:1.0999,scaleY:1.0999,x:577.4,alpha:0.3261},0).wait(1).to({scaleX:1.1066,scaleY:1.1066,y:306.2,alpha:0.3478},0).wait(1).to({scaleX:1.1133,scaleY:1.1133,alpha:0.3696},0).wait(1).to({scaleX:1.1199,scaleY:1.1199,alpha:0.3913},0).wait(1).to({scaleX:1.1266,scaleY:1.1266,alpha:0.413},0).wait(1).to({scaleX:1.1333,scaleY:1.1333,y:306.25,alpha:0.4348},0).wait(1).to({scaleX:1.1399,scaleY:1.1399,alpha:0.4565},0).wait(1).to({scaleX:1.1466,scaleY:1.1466,x:577.45,alpha:0.4783},0).wait(1).to({scaleX:1.1532,scaleY:1.1532,x:577.4,y:306.2,alpha:0.5},0).wait(1).to({scaleX:1.1599,scaleY:1.1599,alpha:0.5217},0).wait(1).to({scaleX:1.1666,scaleY:1.1666,alpha:0.5435},0).wait(1).to({scaleX:1.1732,scaleY:1.1732,x:577.45,alpha:0.5652},0).wait(1).to({scaleX:1.1799,scaleY:1.1799,x:577.4,alpha:0.587},0).wait(1).to({scaleX:1.1866,scaleY:1.1866,y:306.25,alpha:0.6087},0).wait(1).to({scaleX:1.1932,scaleY:1.1932,y:306.2,alpha:0.6304},0).wait(1).to({scaleX:1.1999,scaleY:1.1999,y:306.25,alpha:0.6522},0).wait(1).to({scaleX:1.2065,scaleY:1.2065,y:306.2,alpha:0.6739},0).wait(1).to({scaleX:1.2132,scaleY:1.2132,alpha:0.6957},0).wait(1).to({scaleX:1.2199,scaleY:1.2199,alpha:0.7174},0).wait(1).to({scaleX:1.2265,scaleY:1.2265,alpha:0.7391},0).wait(1).to({scaleX:1.2332,scaleY:1.2332,alpha:0.7609},0).wait(1).to({scaleX:1.2399,scaleY:1.2399,y:306.25,alpha:0.7826},0).wait(1).to({scaleX:1.2465,scaleY:1.2465,x:577.45,alpha:0.8043},0).wait(1).to({scaleX:1.2532,scaleY:1.2532,x:577.35,y:306.2,alpha:0.8261},0).wait(1).to({scaleX:1.2599,scaleY:1.2599,x:577.4,alpha:0.8478},0).wait(1).to({scaleX:1.2665,scaleY:1.2665,alpha:0.8696},0).wait(1).to({scaleX:1.2732,scaleY:1.2732,alpha:0.8913},0).wait(1).to({scaleX:1.2798,scaleY:1.2798,alpha:0.913},0).wait(1).to({scaleX:1.2865,scaleY:1.2865,y:306.25,alpha:0.9348},0).wait(1).to({scaleX:1.2932,scaleY:1.2932,alpha:0.9565},0).wait(1).to({scaleX:1.2998,scaleY:1.2998,x:577.45,alpha:0.9783},0).wait(1).to({scaleX:1.3065,scaleY:1.3065,x:577.4,y:306.2,alpha:1},0).wait(21).to({alpha:0.95},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.85},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.65},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.55},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.45},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.35},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.05},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.SymElSimbolo_Nubes_copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Nubes_copy
	this.instance = new lib.Symbol2_1();
	this.instance.parent = this;
	this.instance.setTransform(1005.4,1098.2,1,1,0,0,0,2448.4,1224.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(125).to({_off:false},0).wait(1).to({scaleX:1.015,scaleY:1.015,x:1002.25,y:1110.35,alpha:0.0244},0).wait(1).to({scaleX:1.0299,scaleY:1.0299,x:999.05,y:1122.5,alpha:0.0488},0).wait(1).to({scaleX:1.0449,scaleY:1.0449,x:995.9,y:1134.65,alpha:0.0732},0).wait(1).to({scaleX:1.0598,scaleY:1.0598,x:992.7,y:1146.8,alpha:0.0976},0).wait(1).to({scaleX:1.0748,scaleY:1.0748,x:989.55,y:1158.9,alpha:0.122},0).wait(1).to({scaleX:1.0897,scaleY:1.0897,x:986.45,y:1171.05,alpha:0.1463},0).wait(1).to({scaleX:1.1047,scaleY:1.1047,x:983.25,y:1183.2,alpha:0.1707},0).wait(1).to({scaleX:1.1196,scaleY:1.1196,x:980,y:1195.35,alpha:0.1951},0).wait(1).to({scaleX:1.1346,scaleY:1.1346,x:976.9,y:1207.5,alpha:0.2195},0).wait(1).to({scaleX:1.1495,scaleY:1.1495,x:973.7,y:1219.6,alpha:0.2439},0).wait(1).to({scaleX:1.1645,scaleY:1.1645,x:970.55,y:1231.8,alpha:0.2683},0).wait(1).to({scaleX:1.1794,scaleY:1.1794,x:967.35,y:1243.95,alpha:0.2927},0).wait(1).to({scaleX:1.1944,scaleY:1.1944,x:964.25,y:1256.1,alpha:0.3171},0).wait(1).to({scaleX:1.2093,scaleY:1.2093,x:961.05,y:1268.2,alpha:0.3415},0).wait(1).to({scaleX:1.2243,scaleY:1.2243,x:957.85,y:1280.35,alpha:0.3659},0).wait(1).to({scaleX:1.2392,scaleY:1.2392,x:954.7,y:1292.5,alpha:0.3902},0).wait(1).to({scaleX:1.2542,scaleY:1.2542,x:951.55,y:1304.65,alpha:0.4146},0).wait(1).to({scaleX:1.2691,scaleY:1.2691,x:948.35,y:1316.8,alpha:0.439},0).wait(1).to({scaleX:1.2841,scaleY:1.2841,x:945.2,y:1328.9,alpha:0.4634},0).wait(1).to({scaleX:1.299,scaleY:1.299,x:942.05,y:1341.05,alpha:0.4878},0).wait(1).to({scaleX:1.314,scaleY:1.314,x:938.9,y:1353.2,alpha:0.5122},0).wait(1).to({scaleX:1.3289,scaleY:1.3289,x:935.65,y:1365.35,alpha:0.5366},0).wait(1).to({scaleX:1.3439,scaleY:1.3439,x:932.55,y:1377.45,alpha:0.561},0).wait(1).to({scaleX:1.3588,scaleY:1.3588,x:929.35,y:1389.6,alpha:0.5854},0).wait(1).to({scaleX:1.3738,scaleY:1.3738,x:926.2,y:1401.8,alpha:0.6098},0).wait(1).to({scaleX:1.3887,scaleY:1.3887,x:923,y:1413.95,alpha:0.6341},0).wait(1).to({scaleX:1.4037,scaleY:1.4037,x:919.9,y:1426.1,alpha:0.6585},0).wait(1).to({scaleX:1.4186,scaleY:1.4186,x:916.7,y:1438.2,alpha:0.6829},0).wait(1).to({scaleX:1.4336,scaleY:1.4336,x:913.5,y:1450.35,alpha:0.7073},0).wait(1).to({scaleX:1.4485,scaleY:1.4485,x:910.35,y:1462.5,alpha:0.7317},0).wait(1).to({scaleX:1.4635,scaleY:1.4635,x:907.2,y:1474.65,alpha:0.7561},0).wait(1).to({scaleX:1.4784,scaleY:1.4784,x:904,y:1486.8,alpha:0.7805},0).wait(1).to({scaleX:1.4934,scaleY:1.4934,x:900.85,y:1498.9,alpha:0.8049},0).wait(1).to({scaleX:1.5083,scaleY:1.5083,x:897.7,y:1511.05,alpha:0.8293},0).wait(1).to({scaleX:1.5233,scaleY:1.5233,x:894.55,y:1523.2,alpha:0.8537},0).wait(1).to({scaleX:1.5383,scaleY:1.5383,x:891.3,y:1535.35,alpha:0.878},0).wait(1).to({scaleX:1.5532,scaleY:1.5532,x:888.2,y:1547.45,alpha:0.9024},0).wait(1).to({scaleX:1.5682,scaleY:1.5682,x:885,y:1559.6,alpha:0.9268},0).wait(1).to({scaleX:1.5831,scaleY:1.5831,x:881.85,y:1571.8,alpha:0.9512},0).wait(1).to({scaleX:1.5981,scaleY:1.5981,x:878.65,y:1583.95,alpha:0.9756},0).wait(1).to({scaleX:1.613,scaleY:1.613,x:875.55,y:1596.1,alpha:1},0).wait(1).to({scaleX:1.6197,scaleY:1.6197,x:882.95,y:1600.95},0).wait(1).to({scaleX:1.6263,scaleY:1.6263,x:890.45,y:1605.85},0).wait(1).to({scaleX:1.633,scaleY:1.633,x:897.95,y:1610.75},0).wait(1).to({scaleX:1.6397,scaleY:1.6397,x:905.4,y:1615.7},0).wait(1).to({scaleX:1.6463,scaleY:1.6463,x:912.85,y:1620.55},0).wait(1).to({scaleX:1.653,scaleY:1.653,x:920.3,y:1625.5},0).wait(1).to({scaleX:1.6597,scaleY:1.6597,x:927.8,y:1630.4},0).wait(1).to({scaleX:1.6663,scaleY:1.6663,x:935.25,y:1635.3},0).wait(1).to({scaleX:1.673,scaleY:1.673,x:942.65,y:1640.2},0).wait(1).to({scaleX:1.6796,scaleY:1.6796,x:950.15,y:1645.1},0).wait(1).to({scaleX:1.6863,scaleY:1.6863,x:957.6,y:1650.05},0).wait(1).to({scaleX:1.693,scaleY:1.693,x:965.05,y:1654.9},0).wait(1).to({scaleX:1.6996,scaleY:1.6996,x:972.55,y:1659.85},0).wait(1).to({scaleX:1.7063,scaleY:1.7063,x:980,y:1664.75},0).wait(1).to({scaleX:1.713,scaleY:1.713,x:987.5,y:1669.6},0).wait(1).to({scaleX:1.7196,scaleY:1.7196,x:994.9,y:1674.5},0).wait(1).to({scaleX:1.7263,scaleY:1.7263,x:1002.4,y:1679.4},0).wait(1).to({scaleX:1.733,scaleY:1.733,x:1009.85,y:1684.35},0).wait(1).to({scaleX:1.7396,scaleY:1.7396,x:1017.35,y:1689.25},0).wait(1).to({scaleX:1.7463,scaleY:1.7463,x:1024.8,y:1694.15},0).wait(1).to({scaleX:1.753,scaleY:1.753,x:1032.25,y:1699.05},0).wait(1).to({scaleX:1.7596,scaleY:1.7596,x:1039.75,y:1703.95},0).wait(1).to({scaleX:1.7663,scaleY:1.7663,x:1047.2,y:1708.85},0).wait(3).to({alpha:0.9545},0).wait(1).to({alpha:0.9091},0).wait(1).to({alpha:0.8636},0).wait(1).to({alpha:0.8182},0).wait(1).to({alpha:0.7727},0).wait(1).to({alpha:0.7273},0).wait(1).to({alpha:0.6818},0).wait(1).to({alpha:0.6364},0).wait(1).to({alpha:0.5909},0).wait(1).to({alpha:0.5455},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4545},0).wait(1).to({alpha:0.4091},0).wait(1).to({alpha:0.3636},0).wait(1).to({alpha:0.3182},0).wait(1).to({alpha:0.2727},0).wait(1).to({alpha:0.2273},0).wait(1).to({alpha:0.1818},0).wait(1).to({alpha:0.1364},0).wait(1).to({alpha:0.0909},0).wait(1).to({alpha:0.0455},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.SymElSimbolo_Nubes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Nubes
	this.instance = new lib.Symbol3_1();
	this.instance.parent = this;
	this.instance.setTransform(809.2,594.1,1,1,0,0,0,1952.2,976.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(125).to({_off:false},0).wait(1).to({regX:1952.3,scaleX:1.0153,scaleY:1.0153,y:594.8,alpha:0.0213},0).wait(1).to({scaleX:1.0307,scaleY:1.0307,x:809.15,y:595.45,alpha:0.0426},0).wait(1).to({scaleX:1.046,scaleY:1.046,x:809.05,y:596.2,alpha:0.0638},0).wait(1).to({scaleX:1.0613,scaleY:1.0613,x:809,y:596.85,alpha:0.0851},0).wait(1).to({scaleX:1.0766,scaleY:1.0766,x:808.9,y:597.5,alpha:0.1064},0).wait(1).to({scaleX:1.092,scaleY:1.092,x:808.8,y:598.2,alpha:0.1277},0).wait(1).to({scaleX:1.1073,scaleY:1.1073,x:808.7,y:598.85,alpha:0.1489},0).wait(1).to({scaleX:1.1226,scaleY:1.1226,x:808.65,y:599.6,alpha:0.1702},0).wait(1).to({scaleX:1.1379,scaleY:1.1379,x:808.55,y:600.25,alpha:0.1915},0).wait(1).to({scaleX:1.1533,scaleY:1.1533,x:808.5,y:600.9,alpha:0.2128},0).wait(1).to({scaleX:1.1686,scaleY:1.1686,x:808.4,y:601.6,alpha:0.234},0).wait(1).to({scaleX:1.1839,scaleY:1.1839,x:808.3,y:602.3,alpha:0.2553},0).wait(1).to({scaleX:1.1993,scaleY:1.1993,x:808.2,y:603,alpha:0.2766},0).wait(1).to({scaleX:1.2146,scaleY:1.2146,x:808.15,y:603.65,alpha:0.2979},0).wait(1).to({scaleX:1.2299,scaleY:1.2299,x:808.05,y:604.3,alpha:0.3191},0).wait(1).to({scaleX:1.2452,scaleY:1.2452,x:808,y:605.05,alpha:0.3404},0).wait(1).to({scaleX:1.2606,scaleY:1.2606,x:807.9,y:605.7,alpha:0.3617},0).wait(1).to({scaleX:1.2759,scaleY:1.2759,x:807.8,y:606.4,alpha:0.383},0).wait(1).to({scaleX:1.2912,scaleY:1.2912,x:807.7,y:607.05,alpha:0.4043},0).wait(1).to({scaleX:1.3066,scaleY:1.3066,x:807.65,y:607.7,alpha:0.4255},0).wait(1).to({scaleX:1.3219,scaleY:1.3219,x:807.55,y:608.45,alpha:0.4468},0).wait(1).to({scaleX:1.3372,scaleY:1.3372,x:807.45,y:609.1,alpha:0.4681},0).wait(1).to({scaleX:1.3525,scaleY:1.3525,x:807.4,y:609.75,alpha:0.4894},0).wait(1).to({scaleX:1.3679,scaleY:1.3679,x:807.25,y:610.45,alpha:0.5106},0).wait(1).to({scaleX:1.3832,scaleY:1.3832,x:807.2,y:611.1,alpha:0.5319},0).wait(1).to({scaleX:1.3985,scaleY:1.3985,x:807.1,y:611.85,alpha:0.5532},0).wait(1).to({scaleX:1.4138,scaleY:1.4138,x:807.05,y:612.5,alpha:0.5745},0).wait(1).to({scaleX:1.4292,scaleY:1.4292,x:806.95,y:613.15,alpha:0.5957},0).wait(1).to({scaleX:1.4445,scaleY:1.4445,x:806.85,y:613.85,alpha:0.617},0).wait(1).to({scaleX:1.4598,scaleY:1.4598,x:806.75,y:614.55,alpha:0.6383},0).wait(1).to({scaleX:1.4752,scaleY:1.4752,x:806.65,y:615.25,alpha:0.6596},0).wait(1).to({scaleX:1.4905,scaleY:1.4905,x:806.6,y:615.9,alpha:0.6809},0).wait(1).to({scaleX:1.5058,scaleY:1.5058,x:806.5,y:616.55,alpha:0.7021},0).wait(1).to({scaleX:1.5211,scaleY:1.5211,x:806.45,y:617.3,alpha:0.7234},0).wait(1).to({scaleX:1.5365,scaleY:1.5365,x:806.35,y:617.95,alpha:0.7447},0).wait(1).to({scaleX:1.5518,scaleY:1.5518,x:806.25,y:618.65,alpha:0.766},0).wait(1).to({scaleX:1.5671,scaleY:1.5671,x:806.15,y:619.3,alpha:0.7872},0).wait(1).to({scaleX:1.5825,scaleY:1.5825,x:806.1,y:619.95,alpha:0.8085},0).wait(1).to({scaleX:1.5978,scaleY:1.5978,x:806.05,y:620.7,alpha:0.8298},0).wait(1).to({scaleX:1.6131,scaleY:1.6131,x:805.95,y:621.35,alpha:0.8511},0).wait(1).to({scaleX:1.6284,scaleY:1.6284,x:805.9,y:622.05,alpha:0.8723},0).wait(1).to({scaleX:1.6438,scaleY:1.6438,x:805.75,y:622.7,alpha:0.8936},0).wait(1).to({scaleX:1.6591,scaleY:1.6591,x:805.7,y:623.4,alpha:0.9149},0).wait(1).to({scaleX:1.6744,scaleY:1.6744,x:805.6,y:624.1,alpha:0.9362},0).wait(1).to({scaleX:1.6897,scaleY:1.6897,x:805.55,y:624.75,alpha:0.9574},0).wait(1).to({scaleX:1.7051,scaleY:1.7051,x:805.45,y:625.4,alpha:0.9787},0).wait(1).to({scaleX:1.7204,scaleY:1.7204,x:805.35,y:626.15,alpha:1},0).wait(1).to({x:804.3,y:626.45},0).wait(1).to({x:803.25,y:626.75},0).wait(1).to({x:802.2,y:627.05},0).wait(1).to({x:801.15,y:627.3},0).wait(1).to({x:800.1,y:627.6},0).wait(1).to({x:799.05,y:627.9},0).wait(1).to({x:798,y:628.2},0).wait(1).to({x:796.95,y:628.5},0).wait(1).to({x:795.9,y:628.8},0).wait(1).to({x:794.85,y:629.1},0).wait(1).to({x:793.8,y:629.4},0).wait(1).to({x:792.75,y:629.7},0).wait(1).to({x:791.7,y:629.95},0).wait(1).to({x:790.65,y:630.25},0).wait(1).to({x:789.6,y:630.55},0).wait(1).to({x:788.55,y:630.85},0).wait(1).to({x:787.5,y:631.15},0).wait(1).to({x:786.45,y:631.45},0).wait(1).to({x:785.35,y:631.75},0).wait(1).to({alpha:0.9583},0).wait(1).to({alpha:0.9167},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.8333},0).wait(1).to({alpha:0.7917},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.7083},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.5833},0).wait(1).to({alpha:0.5417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4583},0).wait(1).to({alpha:0.4167},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.2917},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.2083},0).wait(1).to({alpha:0.1667},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.0833},0).wait(1).to({alpha:0.0417},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.SymElSimbolo_FrameCentroAmerica = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FrameCentroAmerica
	this.instance = new lib.SymGiroTierraFrame("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-720.2,-74,0.8228,0.8228,0,0,0,-919.1,-146.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120).to({regX:673.2,regY:314.2,scaleX:1.1402,scaleY:1.1402,x:590.6,y:305.05},0).wait(1).to({regX:633.6,regY:525.9,scaleX:1.3769,scaleY:1.3769,x:530.8,y:593.05},0).wait(1).to({scaleX:1.6136,scaleY:1.6136,x:516.15,y:639.6},0).wait(1).to({scaleX:1.8502,scaleY:1.8502,x:501.5,y:686.25},0).wait(1).to({scaleX:2.0869,scaleY:2.0869,x:486.85,y:732.8},0).wait(1).to({scaleX:2.3236,scaleY:2.3236,x:472.2,y:779.35},0).wait(1).to({scaleX:2.5602,scaleY:2.5602,x:457.55,y:825.95},0).wait(1).to({scaleX:2.7969,scaleY:2.7969,x:442.9,y:872.55},0).wait(1).to({scaleX:3.0336,scaleY:3.0336,x:428.25,y:919.1},0).wait(1).to({scaleX:3.2702,scaleY:3.2702,x:413.6,y:965.7},0).wait(1).to({scaleX:3.5069,scaleY:3.5069,x:398.95,y:1012.25},0).wait(1).to({scaleX:3.7436,scaleY:3.7436,x:384.3,y:1058.85},0).wait(1).to({scaleX:3.9802,scaleY:3.9802,x:369.65,y:1105.45},0).wait(1).to({scaleX:4.2169,scaleY:4.2169,x:355,y:1152},0).wait(1).to({scaleX:4.4536,scaleY:4.4536,x:340.35,y:1198.55},0).wait(1).to({scaleX:4.6902,scaleY:4.6902,x:325.7,y:1245.2},0).wait(1).to({scaleX:4.9269,scaleY:4.9269,x:311.05,y:1291.75},0).wait(1).to({scaleX:5.1635,scaleY:5.1635,x:296.4,y:1338.3},0).wait(1).to({scaleX:5.4002,scaleY:5.4002,x:281.75,y:1384.9},0).wait(1).to({scaleX:5.6369,scaleY:5.6369,x:267.1,y:1431.5},0).wait(1).to({scaleX:5.8735,scaleY:5.8735,x:252.45,y:1478.05},0).wait(1).to({scaleX:6.1102,scaleY:6.1102,x:237.8,y:1524.65},0).wait(1).to({scaleX:6.3469,scaleY:6.3469,x:223.15,y:1571.2},0).wait(1).to({scaleX:6.5835,scaleY:6.5835,x:208.5,y:1617.8},0).wait(1).to({scaleX:6.8202,scaleY:6.8202,x:193.85,y:1664.4},0).wait(1).to({scaleX:7.0569,scaleY:7.0569,x:179.2,y:1710.95},0).wait(1).to({scaleX:7.2935,scaleY:7.2935,x:164.55,y:1757.5},0).wait(1).to({scaleX:7.5302,scaleY:7.5302,x:149.9,y:1804.15},0).wait(1).to({scaleX:7.7669,scaleY:7.7669,x:135.25,y:1850.7},0).wait(1).to({scaleX:8.0035,scaleY:8.0035,x:120.6,y:1897.25},0).wait(1).to({scaleX:8.2402,scaleY:8.2402,x:105.95,y:1943.85},0).wait(1).to({scaleX:8.4769,scaleY:8.4769,x:91.3,y:1990.45},0).wait(1).to({scaleX:8.7135,scaleY:8.7135,x:76.65,y:2037},0).wait(1).to({scaleX:8.9502,scaleY:8.9502,x:62,y:2083.6},0).wait(1).to({scaleX:9.1869,scaleY:9.1869,x:47.35,y:2130.15},0).wait(1).to({scaleX:9.4235,scaleY:9.4235,x:32.7,y:2176.75},0).wait(1).to({scaleX:9.6602,scaleY:9.6602,x:18.05,y:2223.35},0).wait(1).to({scaleX:9.8969,scaleY:9.8969,x:3.4,y:2269.9},0).wait(1).to({scaleX:10.1335,scaleY:10.1335,x:-11.25,y:2316.45},0).wait(1).to({scaleX:10.3702,scaleY:10.3702,x:-25.9,y:2363.1},0).wait(1).to({scaleX:10.6069,scaleY:10.6069,x:-40.55,y:2409.65},0).wait(1).to({scaleX:10.8435,scaleY:10.8435,x:-55.2,y:2456.2},0).wait(1).to({scaleX:11.0802,scaleY:11.0802,x:-69.85,y:2502.8},0).wait(1).to({scaleX:11.3169,scaleY:11.3169,x:-84.5,y:2549.4},0).wait(1).to({scaleX:11.5535,scaleY:11.5535,x:-99.15,y:2596},0).wait(1).to({scaleX:11.7902,scaleY:11.7902,x:-113.8,y:2642.55},0).wait(1).to({scaleX:12.0269,scaleY:12.0269,x:-128.45,y:2689.1},0).wait(1).to({scaleX:12.2635,scaleY:12.2635,x:-143.15,y:2735.75},0).wait(1).to({scaleX:12.5002,scaleY:12.5002,x:-157.8,y:2782.3},0).wait(1).to({scaleX:12.7369,scaleY:12.7369,x:-172.45,y:2828.85},0).wait(1).to({scaleX:12.9735,scaleY:12.9735,x:-187.1,y:2875.45},0).wait(1).to({scaleX:13.2102,scaleY:13.2102,x:-201.75,y:2922.05},0).wait(1).to({scaleX:13.4469,scaleY:13.4469,x:-216.4,y:2968.6},0).wait(1).to({scaleX:13.6835,scaleY:13.6835,x:-231.05,y:3015.2},0).wait(1).to({scaleX:13.9202,scaleY:13.9202,x:-245.65,y:3061.75},0).wait(1).to({scaleX:14.1568,scaleY:14.1568,x:-260.3,y:3108.35},0).wait(1).to({scaleX:14.3935,scaleY:14.3935,x:-274.95,y:3154.95},0).wait(1).to({scaleX:14.6302,scaleY:14.6302,x:-289.6,y:3201.5},0).wait(1).to({scaleX:14.8668,scaleY:14.8668,x:-304.25,y:3248.05},0).wait(1).to({scaleX:15.1035,scaleY:15.1035,x:-318.9,y:3294.7},0).wait(1).to({scaleX:15.3402,scaleY:15.3402,x:-333.55,y:3341.25},0).wait(1).to({scaleX:15.5768,scaleY:15.5768,x:-348.2,y:3387.8},0).wait(1).to({scaleX:15.8135,scaleY:15.8135,x:-362.85,y:3434.4},0).wait(1).to({scaleX:16.0502,scaleY:16.0502,x:-377.5,y:3481},0).wait(1).to({scaleX:16.2868,scaleY:16.2868,x:-392.15,y:3527.55},0).wait(1).to({scaleX:16.5235,scaleY:16.5235,x:-406.8,y:3574.15},0).wait(1).to({scaleX:16.7602,scaleY:16.7602,x:-421.45,y:3620.7},0).wait(1).to({scaleX:16.9968,scaleY:16.9968,x:-436.1,y:3667.3},0).wait(1).to({scaleX:17.2335,scaleY:17.2335,x:-450.75,y:3713.9},0).wait(1).to({scaleX:17.4702,scaleY:17.4702,x:-465.4,y:3760.45},0).wait(1).to({scaleX:17.7068,scaleY:17.7068,x:-480.1,y:3807},0).wait(1).to({scaleX:17.9435,scaleY:17.9435,x:-494.75,y:3853.65},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.SymElSimbolo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_215 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(215).call(this.frame_215).wait(1));

	// Nubes_copy_copy_copy_copy_obj_
	this.Nubes_copy_copy_copy_copy = new lib.SymElSimbolo_Nubes_copy_copy_copy_copy();
	this.Nubes_copy_copy_copy_copy.name = "Nubes_copy_copy_copy_copy";
	this.Nubes_copy_copy_copy_copy.parent = this;
	this.Nubes_copy_copy_copy_copy.depth = 0;
	this.Nubes_copy_copy_copy_copy.isAttachedToCamera = 0
	this.Nubes_copy_copy_copy_copy.isAttachedToMask = 0
	this.Nubes_copy_copy_copy_copy.layerDepth = 0
	this.Nubes_copy_copy_copy_copy.layerIndex = 0
	this.Nubes_copy_copy_copy_copy.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Nubes_copy_copy_copy_copy).wait(139).to({regX:-899.8,regY:-275,x:-899.8,y:-275},0).wait(77));

	// Nubes_copy_copy_copy_obj_
	this.Nubes_copy_copy_copy = new lib.SymElSimbolo_Nubes_copy_copy_copy();
	this.Nubes_copy_copy_copy.name = "Nubes_copy_copy_copy";
	this.Nubes_copy_copy_copy.parent = this;
	this.Nubes_copy_copy_copy.depth = 0;
	this.Nubes_copy_copy_copy.isAttachedToCamera = 0
	this.Nubes_copy_copy_copy.isAttachedToMask = 0
	this.Nubes_copy_copy_copy.layerDepth = 0
	this.Nubes_copy_copy_copy.layerIndex = 1
	this.Nubes_copy_copy_copy.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Nubes_copy_copy_copy).wait(134).to({regX:-901.9,regY:146.2,x:-901.9,y:146.2},0).wait(75).to({_off:true},1).wait(6));

	// Nubes_copy_copy_obj_
	this.Nubes_copy_copy = new lib.SymElSimbolo_Nubes_copy_copy();
	this.Nubes_copy_copy.name = "Nubes_copy_copy";
	this.Nubes_copy_copy.parent = this;
	this.Nubes_copy_copy.depth = 0;
	this.Nubes_copy_copy.isAttachedToCamera = 0
	this.Nubes_copy_copy.isAttachedToMask = 0
	this.Nubes_copy_copy.layerDepth = 0
	this.Nubes_copy_copy.layerIndex = 2
	this.Nubes_copy_copy.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Nubes_copy_copy).wait(126).to({regX:577.4,regY:306.2,x:577.4,y:306.2},0).wait(85).to({_off:true},1).wait(4));

	// Nubes_copy_obj_
	this.Nubes_copy = new lib.SymElSimbolo_Nubes_copy();
	this.Nubes_copy.name = "Nubes_copy";
	this.Nubes_copy.parent = this;
	this.Nubes_copy.depth = 0;
	this.Nubes_copy.isAttachedToCamera = 0
	this.Nubes_copy.isAttachedToMask = 0
	this.Nubes_copy.layerDepth = 0
	this.Nubes_copy.layerIndex = 3
	this.Nubes_copy.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Nubes_copy).wait(126).to({regX:1047.2,regY:1708.9,x:1047.2,y:1708.9},0).wait(87).to({_off:true},1).wait(2));

	// Nubes_obj_
	this.Nubes = new lib.SymElSimbolo_Nubes();
	this.Nubes.name = "Nubes";
	this.Nubes.parent = this;
	this.Nubes.depth = 0;
	this.Nubes.isAttachedToCamera = 0
	this.Nubes.isAttachedToMask = 0
	this.Nubes.layerDepth = 0
	this.Nubes.layerIndex = 4
	this.Nubes.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Nubes).wait(126).to({regX:795.3,regY:628.9,x:795.3,y:628.9},0).wait(90));

	// zoomTierraMv_obj_
	this.zoomTierraMv = new lib.SymElSimbolo_zoomTierraMv();
	this.zoomTierraMv.name = "zoomTierraMv";
	this.zoomTierraMv.parent = this;
	this.zoomTierraMv.setTransform(342.6,369.9,1,1,0,0,0,342.6,369.9);
	this.zoomTierraMv.depth = 0;
	this.zoomTierraMv.isAttachedToCamera = 0
	this.zoomTierraMv.isAttachedToMask = 0
	this.zoomTierraMv.layerDepth = 0
	this.zoomTierraMv.layerIndex = 5
	this.zoomTierraMv.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.zoomTierraMv).wait(1).to({regX:429.8,regY:498.6,x:429.8,y:498.6},0).wait(118).to({_off:true},1).wait(96));

	// FrameCentroAmerica_obj_
	this.FrameCentroAmerica = new lib.SymElSimbolo_FrameCentroAmerica();
	this.FrameCentroAmerica.name = "FrameCentroAmerica";
	this.FrameCentroAmerica.parent = this;
	this.FrameCentroAmerica.setTransform(557.3,479.2,1,1,0,0,0,557.3,479.2);
	this.FrameCentroAmerica.depth = 0;
	this.FrameCentroAmerica.isAttachedToCamera = 0
	this.FrameCentroAmerica.isAttachedToMask = 0
	this.FrameCentroAmerica.layerDepth = 0
	this.FrameCentroAmerica.layerIndex = 6
	this.FrameCentroAmerica.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.FrameCentroAmerica).wait(121).to({regX:-494.2,regY:3853.2,x:-494.2,y:3853.2},0).wait(70).to({_off:true},1).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28360.5,-8220.6,55732.8,24147.1);


(lib.SymLoginPage_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.TextInput = new lib.an_TextInput({'id': 'TextInput', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.TextInput.setTransform(708.4,249.85,3,4.5455,0,0,0,50,11);

	this.instance = new lib.CachedTexturedBitmap_1();
	this.instance.parent = this;
	this.instance.setTransform(377.2,165.85,0.5,0.5);

	this.SymIngresar = new lib.SymIngresar();
	this.SymIngresar.name = "SymIngresar";
	this.SymIngresar.parent = this;
	this.SymIngresar.setTransform(602.1,446.75,1,1,0,0,0,130.9,130.9);
	new cjs.ButtonHelper(this.SymIngresar, 0, 1, 1);

	this.instance_1 = new lib.textura();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-10,-65);

	this.instance_2 = new lib.SymGiroTierra("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(65.7,118.95,0.8201,0.8201,0,0,0,33,87);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.SymIngresar},{t:this.instance},{t:this.TextInput}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.SymLoginPage_Layer_1, null, null);


(lib.SymLoginPage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.SymIngresar = this.Layer_1.SymIngresar;
		this.TextInput = this.Layer_1.TextInput;
		this.stop();
		
		/*var txtpin = document.getElementById("txtPin");
		txtpin.setAttribute("type" , "password");*/
		
		this.SymIngresar.on("click" , onLogin.bind(this));
		this.TextInput.addEventListener("keyup", onLogin.bind(this));
		
		function onLogin(e) {
			var pin = document.getElementById("TextInput").value;
			console.log(pin);
			
			if (pin == "141115"){
				this.parent.addChild(new lib.SymElSimbolo());
				this.parent.removeChild(this);
		
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1_obj_
	this.Layer_1 = new lib.SymLoginPage_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(343.2,369.4,1,1,0,0,0,343.2,369.4);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.SymLoginPage, new cjs.Rectangle(-707.7,-142.7,2102.1000000000004,1024.4), null);


// stage content:
(lib.MapAnimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_173 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(173).call(this.frame_173).wait(1));

	// Layer_2_obj_
	this.Layer_2 = new lib.Scene_1_Layer_2();
	this.Layer_2.name = "Layer_2";
	this.Layer_2.parent = this;
	this.Layer_2.setTransform(1303,362,1,1,0,0,0,1303,362);
	this.Layer_2.depth = 0;
	this.Layer_2.isAttachedToCamera = 0
	this.Layer_2.isAttachedToMask = 0
	this.Layer_2.layerDepth = 0
	this.Layer_2.layerIndex = 0
	this.Layer_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_2).wait(174));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-717.2,340,3435.3,384);
// library properties:
lib.properties = {
	id: '98D2A9B3C990B2408B054C59D0616F0E',
	width: 1280,
	height: 680,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/mapamundi.png", id:"mapamundi"},
		{src:"images/nubescompletas.png", id:"nubescompletas"},
		{src:"images/MapAnimate_atlas_.png", id:"MapAnimate_atlas_"},
		{src:"images/MapAnimate_atlas_2.png", id:"MapAnimate_atlas_2"},
		{src:"images/MapAnimate_atlas_3.png", id:"MapAnimate_atlas_3"},
		{src:"images/MapAnimate_atlas_4.png", id:"MapAnimate_atlas_4"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js", id:"an.TextInput"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['98D2A9B3C990B2408B054C59D0616F0E'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}
function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;