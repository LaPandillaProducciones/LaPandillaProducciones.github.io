(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"protomap_atlas_", frames: [[0,0,2000,1000],[0,1002,2000,1000]]},
		{name:"protomap_atlas_2", frames: [[0,1002,1808,904],[0,0,2000,1000]]}
];


// symbols:



(lib.Bitmap2 = function() {
	this.initialize(ss["protomap_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.espacio = function() {
	this.initialize(ss["protomap_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.nubes = function() {
	this.initialize(ss["protomap_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.tierra = function() {
	this.initialize(ss["protomap_atlas_"]);
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


(lib.Symbol_6_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.espacio();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.904,0.904);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_6_Layer_1, null, null);


(lib.Symbol_3_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.nubes();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_3_Layer_1, null, null);


(lib.Symbol_1_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.tierra();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_1_Layer_1, null, null);


(lib.Scene_1_espaciotenue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// espaciotenue
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;
	this.instance.setTransform(-258,-81);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_6_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(904,452,1,1,0,0,0,904,452);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,1808,904), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_3_Layer_1();
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

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,2000,1000), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_1_Layer_1();
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

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,2000,1000), null);


(lib.Scene_1_tierra = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tierra
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(45,402,1,1,0,0,0,1000,500);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:55.75},0).wait(1).to({x:66.45},0).wait(1).to({x:77.2},0).wait(1).to({x:87.9},0).wait(1).to({x:98.6},0).wait(1).to({x:109.35},0).wait(1).to({x:120.05},0).wait(1).to({x:130.75},0).wait(1).to({x:141.45},0).wait(1).to({x:152.2},0).wait(1).to({x:162.9},0).wait(1).to({x:173.65},0).wait(1).to({x:184.35},0).wait(1).to({x:195.05},0).wait(1).to({x:205.75},0).wait(1).to({x:216.5},0).wait(1).to({x:227.2},0).wait(1).to({x:237.9},0).wait(1).to({x:248.65},0).wait(1).to({x:259.35},0).wait(1).to({x:270.1},0).wait(1).to({x:280.8},0).wait(1).to({x:291.5},0).wait(1).to({x:302.25},0).wait(1).to({x:312.95},0).wait(1).to({x:323.65},0).wait(1).to({x:334.4},0).wait(1).to({x:345.1},0).wait(1).to({x:355.8},0).wait(1).to({x:366.55},0).wait(1).to({x:377.25},0).wait(1).to({x:388},0).wait(1).to({x:398.7},0).wait(1).to({x:409.4},0).wait(1).to({x:420.15},0).wait(1).to({x:430.85},0).wait(1).to({x:441.55},0).wait(1).to({x:452.25},0).wait(1).to({x:463},0).wait(1).to({x:473.7},0).wait(1).to({x:484.45},0).wait(1).to({x:495.15},0).wait(1).to({x:505.85},0).wait(1).to({x:516.6},0).wait(1).to({x:527.3},0).wait(1).to({x:538},0).wait(1).to({x:548.7},0).wait(1).to({x:559.45},0).wait(1).to({x:570.15},0).wait(1).to({x:580.9},0).wait(1).to({x:591.6},0).wait(1).to({x:602.3},0).wait(1).to({x:613.05},0).wait(1).to({x:623.75},0).wait(1).to({x:634.45},0).wait(1).to({x:645.2},0).wait(1).to({x:655.9},0).wait(1).to({x:666.6},0).wait(1).to({x:677.35},0).wait(1).to({x:688.05},0).wait(1).to({x:698.75},0).wait(1).to({x:709.5},0).wait(1).to({x:720.2},0).wait(1).to({x:730.95},0).wait(1).to({x:741.65},0).wait(1).to({x:752.35},0).wait(1).to({x:763.1},0).wait(1).to({x:773.8},0).wait(1).to({x:784.5},0).wait(1).to({x:795.25},0).wait(1).to({x:805.95},0).wait(1).to({x:816.65},0).wait(1).to({x:827.4},0).wait(1).to({x:838.1},0).wait(1).to({x:848.8},0).wait(1).to({x:859.5},0).wait(1).to({x:870.25},0).wait(1).to({x:880.95},0).wait(1).to({x:891.7},0).wait(1).to({x:902.4},0).wait(1).to({x:913.1},0).wait(1).to({x:923.85},0).wait(1).to({x:934.55},0).wait(1).to({x:945.25},0).wait(1).to({x:956},0).wait(1).to({x:966.7},0).wait(1).to({x:977.4},0).wait(1).to({x:988.15},0).wait(1).to({x:998.85},0).wait(1).to({x:1009.5},0).wait(1).to({x:1020.25},0).wait(1).to({x:1030.95},0).wait(1).to({x:1041.65},0).wait(1).to({x:1052.4},0).wait(1).to({x:1063.1},0).wait(1).to({x:1073.85},0).wait(1).to({x:1084.55},0).wait(1).to({x:1095.25},0).wait(1).to({x:1106},0).wait(1).to({x:1116.7},0).wait(1).to({x:1127.4},0).wait(1).to({x:1138.1},0).wait(1).to({x:1148.85},0).wait(1).to({x:1159.55},0).wait(1).to({x:1170.3},0).wait(1).to({x:1181},0).wait(1).to({x:1191.7},0).wait(1).to({x:1202.45},0).wait(1).to({x:1213.15},0).wait(1).to({x:1223.85},0).wait(1).to({x:1234.6},0).wait(1).to({x:1245.3},0).wait(1).to({x:1256},0).wait(1).to({x:1266.75},0).wait(1).to({x:1277.45},0).wait(1).to({x:1288.15},0).wait(1).to({x:1298.9},0).wait(1).to({x:1309.6},0).wait(1).to({x:1320.35},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_nubes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// nubes
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(342,402,1,1,0,0,0,1000,500);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:348.25,y:403.25},0).wait(1).to({x:354.45,y:404.5},0).wait(1).to({x:360.7,y:405.75},0).wait(1).to({x:366.9,y:407},0).wait(1).to({x:373.1,y:408.25},0).wait(1).to({x:379.35,y:409.5},0).wait(1).to({x:385.55,y:410.75},0).wait(1).to({x:391.8,y:411.95},0).wait(1).to({x:398,y:413.2},0).wait(1).to({x:404.2,y:414.45},0).wait(1).to({x:410.45,y:415.7},0).wait(1).to({x:416.65,y:416.95},0).wait(1).to({x:422.9,y:418.2},0).wait(1).to({x:429.1,y:419.45},0).wait(1).to({x:435.3,y:420.7},0).wait(1).to({x:441.55,y:421.9},0).wait(1).to({x:447.75,y:423.15},0).wait(1).to({x:453.95,y:424.4},0).wait(1).to({x:460.2,y:425.65},0).wait(1).to({x:466.4,y:426.9},0).wait(1).to({x:472.65,y:428.15},0).wait(1).to({x:478.85,y:429.4},0).wait(1).to({x:485.1,y:430.65},0).wait(1).to({x:491.3,y:431.85},0).wait(1).to({x:497.5,y:433.1},0).wait(1).to({x:503.75,y:434.35},0).wait(1).to({x:509.95,y:435.6},0).wait(1).to({x:516.15,y:436.85},0).wait(1).to({x:522.4,y:438.1},0).wait(1).to({x:528.6,y:439.35},0).wait(1).to({x:534.85,y:440.6},0).wait(1).to({x:541.05,y:441.8},0).wait(1).to({x:547.3,y:443.05},0).wait(1).to({x:553.5,y:444.3},0).wait(1).to({x:559.7,y:445.55},0).wait(1).to({x:565.95,y:446.8},0).wait(1).to({x:572.15,y:448.05},0).wait(1).to({x:578.35,y:449.3},0).wait(1).to({x:584.6,y:450.55},0).wait(1).to({x:590.8,y:451.75},0).wait(1).to({x:597.05,y:453},0).wait(1).to({x:603.25,y:454.25},0).wait(1).to({x:609.45,y:455.5},0).wait(1).to({x:615.7,y:456.75},0).wait(1).to({x:621.9,y:458},0).wait(1).to({x:628.15,y:459.25},0).wait(1).to({x:634.35,y:460.5},0).wait(1).to({x:640.55,y:461.7},0).wait(1).to({x:646.8,y:462.95},0).wait(1).to({x:653,y:464.2},0).wait(1).to({x:659.25,y:465.45},0).wait(1).to({x:665.45,y:466.7},0).wait(1).to({x:671.65,y:467.95},0).wait(1).to({x:677.9,y:469.2},0).wait(1).to({x:684.1,y:470.45},0).wait(1).to({x:690.3,y:471.65},0).wait(1).to({x:696.55,y:472.9},0).wait(1).to({x:702.75,y:474.15},0).wait(1).to({x:709,y:475.4},0).wait(1).to({x:715.2,y:476.65},0).wait(1).to({x:721.4,y:477.9},0).wait(1).to({x:727.65,y:479.15},0).wait(1).to({x:733.85,y:480.4},0).wait(1).to({x:740.1,y:481.6},0).wait(1).to({x:746.3,y:482.85},0).wait(1).to({x:752.55,y:484.1},0).wait(1).to({x:758.75,y:485.35},0).wait(1).to({x:764.95,y:486.6},0).wait(1).to({x:771.2,y:487.85},0).wait(1).to({x:777.4,y:489.1},0).wait(1).to({x:783.65,y:490.35},0).wait(1).to({x:789.85,y:491.55},0).wait(1).to({x:796.05,y:492.8},0).wait(1).to({x:802.3,y:494.05},0).wait(1).to({x:808.5,y:495.3},0).wait(1).to({x:814.7,y:496.55},0).wait(1).to({x:820.95,y:497.8},0).wait(1).to({x:827.15,y:499.05},0).wait(1).to({x:833.4,y:500.25},0).wait(1).to({x:839.6,y:501.45},0).wait(1).to({x:845.8,y:502.7},0).wait(1).to({x:852.05,y:503.95},0).wait(1).to({x:858.25,y:505.2},0).wait(1).to({x:864.5,y:506.45},0).wait(1).to({x:870.7,y:507.7},0).wait(1).to({x:876.9,y:508.95},0).wait(1).to({x:883.15,y:510.2},0).wait(1).to({x:889.35,y:511.4},0).wait(1).to({x:895.6,y:512.65},0).wait(1).to({x:901.8,y:513.9},0).wait(1).to({x:908,y:515.15},0).wait(1).to({x:914.25,y:516.4},0).wait(1).to({x:920.45,y:517.65},0).wait(1).to({x:926.7,y:518.9},0).wait(1).to({x:932.9,y:520.15},0).wait(1).to({x:939.1,y:521.35},0).wait(1).to({x:945.35,y:522.6},0).wait(1).to({x:951.55,y:523.85},0).wait(1).to({x:957.8,y:525.1},0).wait(1).to({x:964,y:526.35},0).wait(1).to({x:970.2,y:527.6},0).wait(1).to({x:976.45,y:528.85},0).wait(1).to({x:982.65,y:530.1},0).wait(1).to({x:988.9,y:531.3},0).wait(1).to({x:995.1,y:532.55},0).wait(1).to({x:1001.25,y:533.8},0).wait(1).to({x:1007.5,y:535.05},0).wait(1).to({x:1013.7,y:536.3},0).wait(1).to({x:1019.9,y:537.55},0).wait(1).to({x:1026.15,y:538.8},0).wait(1).to({x:1032.35,y:540.05},0).wait(1).to({x:1038.6,y:541.25},0).wait(1).to({x:1044.8,y:542.5},0).wait(1).to({x:1051.05,y:543.75},0).wait(1).to({x:1057.25,y:545},0).wait(1).to({x:1063.45,y:546.25},0).wait(1).to({x:1069.7,y:547.5},0).wait(1).to({x:1075.9,y:548.75},0).wait(1).to({x:1082.15,y:550},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(646,371,1,1,0,0,0,904,452);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.9583},0).wait(1).to({alpha:0.9167},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.8333},0).wait(1).to({alpha:0.7917},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.7083},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.5833},0).wait(1).to({alpha:0.5417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4583},0).wait(1).to({alpha:0.4167},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.2917},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.2083},0).wait(1).to({alpha:0.1667},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.0833},0).wait(1).to({alpha:0.0417},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.0417},0).wait(1).to({alpha:0.0833},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.1667},0).wait(1).to({alpha:0.2083},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.2917},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.4167},0).wait(1).to({alpha:0.4583},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.5417},0).wait(1).to({alpha:0.5833},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.7083},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.7917},0).wait(1).to({alpha:0.8333},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.9167},0).wait(1).to({alpha:0.9583},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.9583},0).wait(1).to({alpha:0.9167},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.8333},0).wait(1).to({alpha:0.7917},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.7083},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.5833},0).wait(1).to({alpha:0.5417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4583},0).wait(1).to({alpha:0.4167},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.2917},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.2083},0).wait(1).to({alpha:0.1667},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.0833},0).wait(1).to({alpha:0.0417},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.0417},0).wait(1).to({alpha:0.0833},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.1667},0).wait(1).to({alpha:0.2083},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.2917},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.4167},0).wait(1).to({alpha:0.4583},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.5417},0).wait(1).to({alpha:0.5833},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.7083},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.7917},0).wait(1).to({alpha:0.8333},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.9167},0).wait(1).to({alpha:0.9583},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.9565},0).wait(1).to({alpha:0.913},0).wait(1).to({alpha:0.8696},0).wait(1).to({alpha:0.8261},0).wait(1).to({alpha:0.7826},0).wait(1).to({alpha:0.7391},0).wait(1).to({alpha:0.6957},0).wait(1).to({alpha:0.6522},0).wait(1).to({alpha:0.6087},0).wait(1).to({alpha:0.5652},0).wait(1).to({alpha:0.5217},0).wait(1).to({alpha:0.4783},0).wait(1).to({alpha:0.4348},0).wait(1).to({alpha:0.3913},0).wait(1).to({alpha:0.3478},0).wait(1).to({alpha:0.3043},0).wait(1).to({alpha:0.2609},0).wait(1).to({alpha:0.2174},0).wait(1).to({alpha:0.1739},0).wait(1).to({alpha:0.1304},0).wait(1).to({alpha:0.087},0).wait(1).to({alpha:0.0435},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.RECOVER_themap = function(mode,startPosition,loop) {
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
	this.frame_119 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(119).call(this.frame_119).wait(1));

	// Layer_1_obj_
	this.Layer_1 = new lib.Scene_1_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(646,371,1,1,0,0,0,646,371);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(120));

	// espaciotenue_obj_
	this.espaciotenue = new lib.Scene_1_espaciotenue();
	this.espaciotenue.name = "espaciotenue";
	this.espaciotenue.parent = this;
	this.espaciotenue.setTransform(646,371,1,1,0,0,0,646,371);
	this.espaciotenue.depth = 0;
	this.espaciotenue.isAttachedToCamera = 0
	this.espaciotenue.isAttachedToMask = 0
	this.espaciotenue.layerDepth = 0
	this.espaciotenue.layerIndex = 1
	this.espaciotenue.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.espaciotenue).wait(120));

	// nubes_obj_
	this.nubes = new lib.Scene_1_nubes();
	this.nubes.name = "nubes";
	this.nubes.parent = this;
	this.nubes.setTransform(342,402,1,1,0,0,0,342,402);
	this.nubes.depth = 0;
	this.nubes.isAttachedToCamera = 0
	this.nubes.isAttachedToMask = 0
	this.nubes.layerDepth = 0
	this.nubes.layerIndex = 2
	this.nubes.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.nubes).wait(1).to({regX:712.1,regY:476,x:712.1,y:476},0).wait(119));

	// tierra_obj_
	this.tierra = new lib.Scene_1_tierra();
	this.tierra.name = "tierra";
	this.tierra.parent = this;
	this.tierra.setTransform(45,402,1,1,0,0,0,45,402);
	this.tierra.depth = 0;
	this.tierra.isAttachedToCamera = 0
	this.tierra.isAttachedToMask = 0
	this.tierra.layerDepth = 0
	this.tierra.layerIndex = 3
	this.tierra.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.tierra).wait(1).to({regX:682.7,x:682.7},0).wait(119));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-315,262,2635.4,788);
// library properties:
lib.properties = {
	id: '98D2A9B3C990B2408B054C59D0616F0E',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/protomap_atlas_.png", id:"protomap_atlas_"},
		{src:"images/protomap_atlas_2.png", id:"protomap_atlas_2"}
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;