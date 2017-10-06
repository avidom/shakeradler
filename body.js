(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 480,
	height: 854,
	fps: 30,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/bgGreen.jpg", id:"bgGreen"},
		{src:"images/bottle.png", id:"bottle"},
		{src:"images/bottleSh.png", id:"bottleSh"},
		{src:"images/drops.png", id:"drops"},
		{src:"images/hop.png", id:"hop"},
		{src:"images/ice.png", id:"ice"},
		{src:"images/leaf.png", id:"leaf"},
		{src:"images/lemon.png", id:"lemon"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.bgGreen = function() {
	this.initialize(img.bgGreen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,854);


(lib.bottle = function() {
	this.initialize(img.bottle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,137,541);


(lib.bottleSh = function() {
	this.initialize(img.bottleSh);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,241,561);


(lib.drops = function() {
	this.initialize(img.drops);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,108);


(lib.hop = function() {
	this.initialize(img.hop);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,95,86);


(lib.ice = function() {
	this.initialize(img.ice);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,80);


(lib.leaf = function() {
	this.initialize(img.leaf);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,101,66);


(lib.lemon = function() {
	this.initialize(img.lemon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,135,138);


(lib.warn = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#059E34").s().p("AAHFYQgMABAAgsIAAkgIgZAAIAAFLIgNAAIAAqwIANAAIAAFRIAZAAIAAknQABgqAQAAIAOAAQASAAAAAqIAAJbQAAAsgNgBgAAHkuIAAJPQAAAgAIABIAIAAQAIgBAAggIAApPQAAgSgFgBIgOAAQgFABAAASg");
	this.shape.setTransform(229.2,2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#059E34").s().p("AgWF+IAAgXIAGAAQAIAAAAgUIgdqFIANAAIAXIqIAYoqIAOAAIghKJQgCAngKAAgAgSlZQgJgPAAgVIAOAAQAAAKAEAIQAEAHAFAAQAFAAAEgHQAEgIAAgKIAOAAQAAAVgIAPQgIAPgLAAQgKAAgIgPg");
	this.shape_1.setTransform(217.6,-1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#059E34").s().p("AgLFYQgNABAAgsIAApbQAAgqATAAIALAAQATAAAAAqIAAJbQAAAsgOgBgAgLkuIAAJPQAAAgAJABIAFAAQAJgBAAggIAApPQAAgSgGgBIgMAAQgFABAAASg");
	this.shape_2.setTransform(207.9,2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#059E34").s().p("AgYFYIAAqwIAoAAQAJABAAAUIAAEmQAAAagGAIQgHAJgIgBIgQAAIAAFLgAgMgHIAQAAQAIgBAAgYIAAkYQAAgJgCAAIgWAAg");
	this.shape_3.setTransform(199.4,2.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#059E34").s().p("AAYFYIgIjlIgbAAIgLDlIgPAAIAkqwIAHAAIAfKwgAgKBcIAZAAIgNkug");
	this.shape_4.setTransform(189.7,2.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#059E34").s().p("AAXF4IAAhAIguAAIAABAIgMAAIAAhWIAGAAQAJgBAAggIAAp5IAyAAIAAKaIAGAAIAABWgAgHENIgBAVIAZAAIAAqDIgYAAg");
	this.shape_5.setTransform(178.8,5.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#059E34").s().p("AgLFYQgNABAAgsIAAi0IAMAAIAACoQAAAgAJABIAHAAQAIgBAAggIAAkAQAAgTgIgBIgVAAIAAgUIAVAAQAIgBAAgYIAAkOQAAgSgFgBIgNAAQgGABAAASIAAC1IgMAAIAAi1QAAgqASAAIANAAQASAAAAAqIAAERQAAAagIADIAEADQAEADAAAWIAAERQAAAsgNgBg");
	this.shape_6.setTransform(169.2,2.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#059E34").s().p("AgWFYIAAgWIAGAAQAIgBAAgUIgdqFIANAAIAXIqIAYoqIAOAAIghKJQgCAngKAAg");
	this.shape_7.setTransform(147.8,2.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#059E34").s().p("AAYFYIAAl3IgSF3IgMAAIgSl3IAAF3IgMAAIAAqwIAMAAIAYIvIAYovIANAAIAAKwg");
	this.shape_8.setTransform(136.9,2.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#059E34").s().p("AAYFYIgJjlIgaAAIgLDlIgPAAIAkqwIAHAAIAgKwgAgKBcIAYAAIgMkug");
	this.shape_9.setTransform(126,2.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#059E34").s().p("AgsFYIAAqwIANAAIAAKaIAaAAIAAqaIALAAIAAKaIAZAAIAAqaIANAAIAAKwg");
	this.shape_10.setTransform(114.3,2.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#059E34").s().p("AAZFYIgJjlIgbAAIgLDlIgOAAIAjqwIAIAAIAeKwgAgKBcIAZAAIgNkug");
	this.shape_11.setTransform(102.6,2.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#059E34").s().p("AgYFYIAAqwIAoAAQAJABAAAUIAAEmQAAAagIADIAEADQAEADAAAWIAAEnQAAAWgGgBgAgMFCIAUAAQAEAAAAgQIAAkRQAAgTgIgBIgQAAgAgMgHIAQAAQAIgBAAgYIAAkYQAAgJgCAAIgWAAg");
	this.shape_12.setTransform(92.8,2.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#059E34").s().p("AgYFYIAAqwIAMAAIAAFRIAQAAQAIgBAHAIQAGAIAAAbIAAEhQAAAVgJgBgAgMFCIAWAAQACAAAAgKIAAkTQAAgYgIAAIgQAAg");
	this.shape_13.setTransform(72.6,2.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#059E34").s().p("AATF4IAAhAIgyAAIAAqwIANAAIAAKaIAYAAIAAqaIANAAIAAKaIANAAIAABWg");
	this.shape_14.setTransform(63.5,5.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#059E34").s().p("AgFFYIAAqwIALAAIAAKwg");
	this.shape_15.setTransform(56.2,2.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#059E34").s().p("AgLFYQgNABAAgsIAAi0IAMAAIAACoQAAAgAJABIAHAAQAIgBAAggIAAkAQAAgTgIgBIgVAAIAAgUIAVAAQAIgBAAgYIAAkOQAAgSgFgBIgNAAQgGABAAASIAAC1IgMAAIAAi1QAAgqASAAIANAAQASAAAAAqIAAERQAAAagIADIAEADQAEADAAAWIAAERQAAAsgNgBg");
	this.shape_16.setTransform(49.6,2.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#059E34").s().p("AAXF4IAAhAIgtAAIAABAIgNAAIAAhWIAGAAQAJgBAAggIAAp5IAyAAIAAKaIAGAAIAABWgAgHENIgBAVIAZAAIAAqDIgYAAg");
	this.shape_17.setTransform(40,5.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#059E34").s().p("AgLFYQgNABAAgsIAApbQAAgqATAAIALAAQATAAAAAqIAAJbQAAAsgOgBgAgLkuIAAJPQAAAgAJABIAFAAQAJgBAAggIAApPQAAgSgGgBIgMAAQgFABAAASg");
	this.shape_18.setTransform(30.5,2.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#059E34").s().p("AAMFYIgYlLIAAFLIgMAAIAAqwIAMAAIAAFRIAYlRIANAAIgZFWIAZFag");
	this.shape_19.setTransform(22,2.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#059E34").s().p("AgrFYIAAqwIAMAAIAAKaIAaAAIAAqaIALAAIAAKaIAZAAIAAqaIAOAAIAAKwg");
	this.shape_20.setTransform(11.5,2.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#059E34").s().p("AAZFYIgJjlIgcAAIgKDlIgOAAIAjqwIAIAAIAeKwgAgKBcIAZAAIgNkug");
	this.shape_21.setTransform(-11.8,2.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#059E34").s().p("AgYFYIAAqwIAoAAQAJABAAAUIAAEmQAAAagIADIAEADQAEADAAAWIAAEnQAAAWgGgBgAgMFCIAUAAQAEAAAAgQIAAkRQAAgTgIgBIgQAAgAgMgHIAQAAQAIgBAAgYIAAkYQAAgJgCAAIgWAAg");
	this.shape_22.setTransform(-21.6,2.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#059E34").s().p("AgFFYIAAqwIALAAIAAKwg");
	this.shape_23.setTransform(-28.2,2.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#059E34").s().p("AAMFYIAAqZIgYAAIAAKZIgMAAIAAqwIAxAAIAAKwg");
	this.shape_24.setTransform(-34.8,2.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#059E34").s().p("AgUFYIAAqwIApAAIAAAXIgdAAIAAE6IAdAAIAAAUIgdAAIAAE1IAdAAIAAAWg");
	this.shape_25.setTransform(-54.5,2.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#059E34").s().p("AAMFYIAAlLIgYAAIAAFLIgMAAIAAqwIAMAAIAAFRIAYAAIAAlRIANAAIAAKwg");
	this.shape_26.setTransform(-62.7,2.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#059E34").s().p("AAMFYIAAlLIgYAAIAAFLIgMAAIAAqwIAMAAIAAFRIAYAAIAAlRIANAAIAAKwg");
	this.shape_27.setTransform(-71.2,2.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#059E34").s().p("AAYFYIgJjlIgbAAIgKDlIgPAAIAkqwIAHAAIAgKwgAgKBcIAYAAIgMkug");
	this.shape_28.setTransform(-80.9,2.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#059E34").s().p("AgYFYIAAqwIAoAAQAJABAAAUIAAEmQAAAagIADIAEADQAEADAAAWIAAEnQAAAWgGgBgAgMFCIAUAAQAEAAAAgQIAAkRQAAgTgIgBIgQAAgAgMgHIAQAAQAIgBAAgYIAAkYQAAgJgCAAIgWAAg");
	this.shape_29.setTransform(-90.7,2.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#059E34").s().p("AAfFYIAAqwIAOAAIAAKwgAgrFYIAAqwIAMAAIAAFRIASAAQAIgBAFAIQAGAIAAAbIAAEhQAAAVgHgBgAgfFCIAYAAQACAAAAgKIAAkTQAAgYgIAAIgSAAg");
	this.shape_30.setTransform(-101.2,2.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#059E34").s().p("AAfFYIgZlLIAAFLIgLAAIAAlLIgaFLIgMAAIAblaIgblWIAMAAIAaFRIAAlRIALAAIAAFRIAZlRIAOAAIgcFWIAcFag");
	this.shape_31.setTransform(-113.6,2.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#059E34").s().p("AgWF+IAAgXIAGAAQAIAAAAgUIgdqFIANAAIAXIqIAYoqIAPAAIgiKJQgDAngJAAgAgTlZQgIgPAAgVIAOAAQAAAKAEAIQAFAHAEAAQAFAAAEgHQAEgIAAgKIAOAAQAAAVgHAPQgJAPgLAAQgKAAgJgPg");
	this.shape_32.setTransform(-125.2,-1.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#059E34").s().p("AgUFYIAAqwIApAAIAAAXIgdAAIAAE6IAdAAIAAAUIgdAAIAAE1IAdAAIAAAWg");
	this.shape_33.setTransform(-146.2,2.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#059E34").s().p("AAYFYIgJjlIgbAAIgKDlIgPAAIAkqwIAHAAIAgKwgAgKBcIAYAAIgMkug");
	this.shape_34.setTransform(-155.5,2.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#059E34").s().p("AAMFYIAAlLIgYAAIAAFLIgMAAIAAqwIAMAAIAAFRIAYAAIAAlRIANAAIAAKwg");
	this.shape_35.setTransform(-165.3,2.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#059E34").s().p("AgYFYIAAqwIAoAAQAJABAAAUIAAEmQAAAagGAIQgHAJgIgBIgQAAIAAFLgAgMgHIAQAAQAIgBAAgYIAAkYQAAgJgCAAIgWAAg");
	this.shape_36.setTransform(-173.9,2.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#059E34").s().p("AgUFYIAAqwIApAAIAAAXIgdAAIAAE6IAdAAIAAAUIgdAAIAAE1IAdAAIAAAWg");
	this.shape_37.setTransform(-182,2.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#059E34").s().p("AAYFYIAAl3IgSF3IgMAAIgSl3IAAF3IgMAAIAAqwIAMAAIAYIvIAYovIANAAIAAKwg");
	this.shape_38.setTransform(-191.3,2.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#059E34").s().p("AgLFYQgNABAAgsIAAi0IAMAAIAACoQAAAgAJABIAHAAQAIgBAAggIAAkAQAAgTgIgBIgVAAIAAgUIAVAAQAIgBAAgYIAAkOQAAgSgFgBIgNAAQgGABAAASIAAC1IgMAAIAAi1QAAgqASAAIANAAQASAAAAAqIAAERQAAAagIADIAEADQAEADAAAWIAAERQAAAsgNgBg");
	this.shape_39.setTransform(-201,2.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#059E34").s().p("AAYFYIgJjlIgaAAIgLDlIgPAAIAkqwIAHAAIAgKwgAgKBcIAYAAIgMkug");
	this.shape_40.setTransform(-210.7,2.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#059E34").s().p("AgYFYIAAqwIAoAAQAJABAAAUIAAEmQAAAagGAIQgHAJgIgBIgQAAIAAFLgAgMgHIAQAAQAIgBAAgYIAAkYQAAgJgCAAIgWAAg");
	this.shape_41.setTransform(-220.5,2.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#059E34").s().p("AAMFYIAAqZIgYAAIAAKZIgMAAIAAqwIAxAAIAAKwg");
	this.shape_42.setTransform(-229.1,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-236.4,-49.7,472.8,110.5);


(lib.Symbol68 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.bgGreen();
	this.instance.setTransform(-240,-427);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,-427,480,854);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AieGCQgcAAgTgTQgTgUAAgbIAAp/QAAgcATgTQATgTAcAAIE9AAQAcAAATATQATATAAAcIAAJ/QAAAbgTAUQgUATgbAAgAixlSQgIAIAAALIAAJ/QAAALAIAIQAIAHALAAIE9AAQALAAAIgHQAIgIAAgLIAAp/QAAgLgIgIQgIgIgLAAIk9AAQgLAAgIAIgAgVE9QgJgJAAgOQAAgNAJgJQAJgJAMAAQANAAAJAJQAJAJAAANQAAAOgJAJQgJAJgNAAQgMAAgJgJgAgNEYQgFAGAAAIQAAAJAFAFQAGAGAHAAQAIAAAGgGQAFgFAAgJQAAgIgFgGQgGgFgIAAQgHAAgGAFgAibDyIAAnsIE3AAIAAHsgAgokbQgEAAgDgDQgCgDAAgDQAAgEACgDQADgDAEAAIBRAAQAEAAADADQACADAAAEQAAADgCADQgDADgEAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.5,-38.7,45.2,77.4);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bottleSh();
	this.instance.setTransform(-120.5,-280.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.5,-280.5,241,561);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bottle();
	this.instance.setTransform(-68.5,-270.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.5,-270.5,137,541);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.drops();
	this.instance.setTransform(-61,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61,-54,123,108);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hop();
	this.instance.setTransform(-47,-43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-43,95,86);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.leaf();
	this.instance.setTransform(-50,-33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-33,101,66);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiuFDQhQgygshVQgrhUgBhoQABhpAthUQAthUBQgwQBRgyBrAAQBZABBGAkQBHAkAsBAQArA/AGBRIjUAAQgJgxgegZQgdgagvAAQgxABgeAcQgfAdgMArQgNAsABAtQAABYAkAxQAkAyA+ABQAxABAcgeQAegdAIg3IDXAAQgIBigsBDQguBChIAhQhIAihYAAQhrgChQgwg");
	this.shape.setTransform(0.3,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-58.2,80.1,116.5);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABaFjIiskVIhBBEIAADRIjWAAIAArGIDYAAIgCCQIAAAlIAAAUIgBATIgCAhIDKj9IEOAAIkDEWIErGwg");
	this.shape.setTransform(3.5,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,-58.2,82,116.5);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhsFjIAArGIDZAAIAALGg");
	this.shape.setTransform(0,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.7,-58.2,37.5,116.5);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADPFjIAAhrQAAhkAChmIAGjIIiGH9IihAAIiHn9IAEBqIACBRIABBSIABBnIABCJIjNAAIAArGIE5AAIAuC6QAQBDAOBEQAOBBAJBEQAMhGAQhDIAgiIIAsi1IEzAAIAALGg");
	this.shape.setTransform(0,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.3,-58.2,98.6,116.5);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADlFjIAArGIDaAAIAALGgAm+FjIAArGIDaAAIAADfIBbAAQCPAABEA/QBEBAAABuQAAB1hKBCQhIBCiSABgAjkC5IBFAAQAmABAZgQQAbgRABgtQAAgugZgRQgYgTgoACIhHAAg");
	this.shape.setTransform(-0.1,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.6,-58.2,105.3,116.5);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEmFjIiHkXIgzA+IAADZIjXAAIAAjZIgzg+IiHEXIkKAAID6nCIjfkEID7AAICuDjIAAjjIDXAAIAADjICujjID7AAIjeEEID5HCg");
	this.shape.setTransform(0,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.9,-58.2,117.9,116.5);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkqFjIAArGIJMAAIAACtIl1AAIAABZIFSAAIAACkIlSAAIAABnIF+AAIAAC1g");
	this.shape.setTransform(0.6,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.3,-58.2,74.6,116.5);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAyFkIl0AAIAArGIFlAAQAtgBAsAIQAtAHAlAUQAlATAWAjQAXAjAAA3QgBA0gXAiQgYAigpAXQA8AVAgApQAfAqABBFQgBBSgnAwQgnAvg9AUQg9AThEAAIgEAAgAhuC7ICFAAQApAAAWgRQAUgQAAghQAAghgVgRQgVgSgpAAIiFAAgAhuhSIB5AAQAfAAASgOQAQgPABgZQAAgcgTgOQgSgOgnAAIhvAAg");
	this.shape.setTransform(1.1,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.1,-58.2,78.3,116.5);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiuFDQhQgygshVQgrhUgBhoQABhpAthUQAthUBQgwQBRgyBrAAQBZABBGAkQBHAkAsBAQArA/AGBRIjUAAQgJgxgegZQgdgagvAAQgxABgeAcQgfAdgMArQgNAsABAtQAABYAkAxQAkAyA+ABQAxABAcgeQAegdAIg3IDXAAQgIBigsBDQguBChIAhQhIAihYAAQhrgChQgwg");
	this.shape.setTransform(0.3,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-58.2,80.1,116.5);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DC0031").s().p("AhiBWIAAgdIhZAAIgFAdIgNAAIgCgtIAQAAQAEgEADgIQAEgGACgJIAHgwIgBgvIBRAAIgBBgQAAAOABAMIASAAIgMAtgAidgHQgBAIgEAQQgDAMgGAMIAzAAIAAhqIgiAAgAgkA2QgNgGgHgJQgHgKgDgOQgEgMAAgOQAAgPAEgOQAEgNAJgLQAIgJANgGQALgGATABIAKAAIAKACIAJADIAKAEIgMATQgGgGgGgDQgHgEgIAAQgMAAgGAGQgHAFgEAJQgEAJgBAKIAAAmQABAMAEAGQAEAIAHAGQAJAEALAAQAHAAALgEQALgHAFgGIAJAPIgXAOIgNADQgHABgHAAQgRABgMgHgAmSAoIACABIADAAQAHAAAFgGQAEgDAEgJQADgGACgLIAEglIgCgyIBUAAIgBBmQABATADARIggAAIAAh6IglAAIAAAuIgCATIgDASIgFANQgCAHgFAGQgEAFgHAFQgGAFgJAAIgFAAIgCAAgAE2A5IgBhtQgBgKgDgTIBdAAIgHATIgTgCIgRgBIgRAAIgBAqIAsAAIgHATIgRgDIgUAAIACAwIAWABQAJAAAKgCIAXgGIgIAXgAEIA5IgPgvIguAAIgQAvIgsAAIgLgMIgdgqIgRgQQAHgEAIgJIAPgSIAMgUQAEgJACgIIAYAAIgIARIgLARIgMAPQgGAHgHAGIAAAAIAAAAQAGAEAKAMQAJAIAIALIAQAXIAHAKIADgGQAFgKAEgNIAkhlIAeAAIAqB6QAFAMACAEgADQgEIAlAAIgSg2IAAAAgAA4A5IgBhvIgEgbIAiAAIgBBoIADAigAj9A5IAAhTIgBgaIgEgdIAiAAIgBBqQABAQADAQg");
	this.shape.setTransform(-0.1,26.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DC0031").s().p("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gEIgDgIQgCgLgCgXIgBgRQAAgpACgUIADgTQABgIAEgEIgBgBIgBABgABTB4IAOABIBBAAIgBgEIgBgBIgYACIg4gCQABABAAABQABAAAAABQAAAAABABQAAAAAAAAgAA+B5IgNgDIgPgEQAOAFAOACgADQBrIgaAGIABAEQAAAAAAABQABAAAAAAQAAABABAAQAAAAABAAIAagGIACABQADACACAAIgBgDIgCAAIABgDIgBgDIgCgCgADcgPIgDANQgCAKgBAZQgBAdACAUIACAPQABAKACAEIACAFQACgCACgFQACgGgBgDQgBAIgCAAIgDgCQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAAAIgDgWIgBglQAAgeADgSIACgHQABAAAAgBQABAAABAAQAAAAABAAQAAABABAAIABACIACAGQgDgNgDgEgAAeBuIAeAGIAAgBIgDgDIgGgBIgZgHQACAFACABgABOBsIABACIAFAAIASABQAXACAigCIABAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAAAIgFABIhCgCIgJAAgAC3BrIgCABIACABIATgDIAAgCgAAXBkIACABIAfAGIABgBIgDgBIgegGgADaAiQAAAZACAZIABAPIABAAIADgrQAAgXgEgLIgCgGgABMBeIBPAAIACgBQAAgBAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIgCAAIhLAAIgEgBQAAABAAAAQAAABAAAAQABAAAAABQAAAAABAAgADTBXIgeADIgCABIACABIAegDIACgCIgCgBgAASBYIAiAEQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBAAAAAAIgjgFQAAABAAAAQAAAAAAABQABAAAAAAQAAABABAAgABJBIIBQAAIACgBIgCgBIhSAAQAAAAAAABQAAAAABAAQAAABAAAAQAAAAABAAgAC3BFIgEABIgBABIACAAIAAAAIAegBQABAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAgBgAAPBFIAhACIABgBIgBgBIgIgBIgVgBIgGAAQAAAAAAABQAAAAAAAAQABAAAAABQABAAAAAAgAjOAdQAAALgCAMQAFgPABgLQAGAAAHgEQAPgIAIgRQgVAdgUgFgACxAwIAAACIAiAAIAAgBIAAgBIgBgBgABIAyIBSAAIABgBIgBgB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gFQADgCACgBQADgBADAAIAGABIAGACIADAEIABAFIAAAEIgCAEIgDADIgEACIAFADIADADIADAEIABAFQAAAEgCAEIgEAFQgCACgEABIgHABgAhojWIgDADIgBADIgBAEIABADIACADIADACIAEABIAEgBIACgCIACgDIAAgEIgBgDIgDgDIgGgEgAhmjxIgDABIgBADIgBADIABADIACACIADACIADACIACgCIAEgEIABgDQAAgEgCgCQgDgCgDAAgAB3i/IAZguIgSAAIgIABIADgKIAfAAIAAAFIgNAeIgJAUgAiSi/IABgFIABgFIgBggIgKAJIgDgDIAFgGIAFgHIABgCIACgEIAMAAIAAADIAAADIABAxgAhrkUQgigSAMgvQACgKAKgPIABAAQgLAZACAPQABAUARAPIgBgMQgFgJAAgFQgBgFAEgKIABAAQgBAPAEAFIADgJQgIgOAAgSQACgYASgVIAIgIIAAABQgQAXgCAOQgEAVANASIABgMQgCgKABgEQABgGAFgJIABABIgDAKQgBAFACAFIAOgSIAAAAQgKATgCAIQgEARALAKQAJAHARABQgBgDABgEIAFAGIABABIAGAJIADAFQgrgBgUgaIgCAOQAAAYAYABQAUABAWgMQACAFAGAGIAAAAIgBACIgJAEQgSAGgQAAQgTAAgQgJgAgZkaQgFgFgFgJIgIgMIgJgKQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAIACgBIATAEQAUAHADANQAEAWgCABQgKAAgKgIgAgIkZQgBgTgOgJIgOgGIgHgBIAJADQAMAFAGALQAEAGABAFIgJgDIgFgCQAIANAKgDgAgKk3QgEgDgIgEQAEABAIgBQAIgLABgHQABgIgGgFIgMgGIAAgBQASAAACAKIABACQAFgIAAgIIgFgOIAAAAQAIAHACAGIAAAFQAAAKgJAOIAAAAIgEAKIgBAHIgGAFgAgmlDQgCgIAIgMIABAAQgFASAGAEgAg3lOIABAAIAEAKIgDABQgCgDAAgIg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.1,-40.7,82.3,81.5);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DC0031").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88,-46.4,176,92.9);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgcCHQgMgMgBgRQABgRAMgLQALgMARgBQAPABAMAMQAMALAAARQAAARgMAMQgMAMgPAAQgRAAgLgMgAghAvIAAhGIATAAQASgBAJgGQAJgIADgIQACgJgBgEQAAgOgGgHQgHgIgNAAQgJABgGAGQgGAFgCAGQgCAHAAADIAAAEIhDAAQgBgYAKgTQAKgVAVgNQAVgNAfAAQAhAAAVAMQAUAMAKAUQAKASAAAVQAAAWgIARQgHARgOAIQgOALgTAAIAAAjg");
	this.shape.setTransform(164.4,-1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhTCLIAAkWICnAAIAABEIhYAAIAAAnIBQAAIAAA8IhQAAIAAAtIBYAAIAABCg");
	this.shape_1.setTransform(143.9,-1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA/CLIgQgwIhdAAIgPAwIhVAAIBkkWIBdAAIBjEWgAAfAdIgfhlIgfBlIA+AAg");
	this.shape_2.setTransform(118.5,-1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAvCLIAAhvIhdAAIAABvIhOAAIAAkWIBOAAIAABlIBdAAIAAhlIBPAAIAAEWg");
	this.shape_3.setTransform(88.9,-1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA2CyIAAioIhqCoIhNAAIAAkWIBMAAIAACmIBqimIBNAAIAAEWgAgfh4QgRgEgNgKQgOgKgHgQIAtgRQAFAOAMAFQALAFAJAAQALAAALgFQALgFAGgOIAtARQgIAQgOAKQgNAKgQAEQgRAFgQAAQgPAAgQgFg");
	this.shape_4.setTransform(58.3,-5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA/CLIgQgwIhdAAIgPAwIhUAAIBjkWIBdAAIBjEWgAAfAdIgfhlIgfBlIA+AAg");
	this.shape_5.setTransform(28.3,-1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAkCLIAAhtIgXADIgNABIgPABQgjgBgUgIQgUgHgKgOQgJgLgCgRQgDgRABgSIAAhRIBOAAIAABHQgBALACAJQACAJAKAHQAJAFATABIAMgBIASgCIAAhuIBOAAIAAEWg");
	this.shape_6.setTransform(-0.2,-1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABUCLIAAkWIBOAAIAAEWgAihCLIAAkWIBOAAIAABtIAqAAQAPABASACQASADAQAJQASAIALAPQAMARAAAdQAAAcgMASQgLARgSAJQgQAIgSADQgSADgPgBgAhTBTIAiAAQATAAAKgGQAKgHAAgQQAAgRgKgGQgKgHgTAAIgiAAg");
	this.shape_7.setTransform(-32.1,-1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ah0CLIAAkWICGAAQAcABARAHQARAIAIAMQAJAMACAMQADALAAAIQgBAPgFAMQgHAMgKAIQgKAIgLAEIAAABQAHABAKAFQAKACAKAIQAJAJAHAMQAGANAAAUQAAATgKASQgJASgUALQgUALghAAgAglBTIAkAAIAOAAQAJgCAJgHQAHgGABgOQgBgOgHgGQgIgFgJgCIgPgBIgkAAgAglgcIAhAAQANAAAHgEQAJgFACgGQADgGAAgGQAAgLgIgIQgJgIgRgBIghAAg");
	this.shape_8.setTransform(-63.7,-1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgkCQQgQgDgSgJQgRgKgXgQIAhg0QAPAOATAJQASAJAQAAQAOAAAJgFQAJgGAEgHQADgHAAgGQAAgNgKgHQgKgJgXAAIgsAAIAAg2IAsAAQAQAAAJgEQAJgFADgHQADgGAAgHQgBgNgKgHQgLgIgQAAQgRAAgOAGQgNAFgNAIIgbg3IAUgKQANgGATgEQATgGAXAAQAeABAYAJQAYALAOARQAOASAAAXQAAAWgMARQgNARgVAIIAAABQAMADAMAGQALAIAJAOQAIANAAAVQAAAbgPATQgPATgZAKQgaAKgeAAQgTAAgRgDg");
	this.shape_9.setTransform(-90.2,-1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhTCLIAAkWICnAAIAABEIhYAAIAAAnIBQAAIAAA8IhQAAIAAAtIBYAAIAABCg");
	this.shape_10.setTransform(-111.6,-1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAvCLIAAhvIhdAAIAABvIhPAAIAAkWIBPAAIAABlIBdAAIAAhlIBOAAIAAEWg");
	this.shape_11.setTransform(-137.7,-1.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgmCLIAAkWIBNAAIAAEWg");
	this.shape_12.setTransform(-168.6,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-177,-25.2,354.1,50.6);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhSCLIAAkWIClAAIAABEIhXAAIAAAnIBPAAIAAA8IhPAAIAAAtIBXAAIAABCg");
	this.shape.setTransform(154.8,-1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA+CLIgPgwIhdAAIgQAwIhTAAIBjkWIBdAAIBkEWgAAgAdIgghlIgeBlIA+AAg");
	this.shape_1.setTransform(129.5,-1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah0CLIAAkWICGAAQAcABARAHQARAIAJAMQAHAMADAMQACALAAAIQAAAPgFAMQgHAMgJAIQgLAIgLAEIAAABQAHABAKAFQAKACAKAIQAJAJAGAMQAHANAAAUQAAATgKASQgJASgUALQgUALggAAgAglBTIAkAAIAOAAQAKgCAHgHQAIgGAAgOQAAgOgIgGQgHgFgJgCIgPgBIgkAAgAglgcIAgAAQANAAAJgEQAHgFADgGQACgGAAgGQABgLgJgIQgHgIgTgBIggAAg");
	this.shape_2.setTransform(102.2,-1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA+CLIgPgwIhdAAIgQAwIhTAAIBjkWIBdAAIBjEWgAAgAdIgghlIgeBlIA+AAg");
	this.shape_3.setTransform(73.5,-1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAfCLIhQh4IAAB4IhOAAIAAkWIBOAAIAAB2IBTh2IBcAAIhrCIIBtCOg");
	this.shape_4.setTransform(46.4,-1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmCLIAAkWIBNAAIAAEWg");
	this.shape_5.setTransform(24.5,-1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABKCnIAAg4IjWAAIAAkWIBPAAIAADUIBaAAIAAjUIBPAAIAADUIAhAAIAAB6g");
	this.shape_6.setTransform(3.7,1.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA/CLIgQgwIhdAAIgPAwIhVAAIBkkWIBdAAIBjEWgAAfAdIgfhlIgfBlIA+AAg");
	this.shape_7.setTransform(-36.7,-1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgmCLIAAjSIg9AAIAAhEIDHAAIAABEIg9AAIAADSg");
	this.shape_8.setTransform(-61.5,-1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ai3CLIAAkWIBOAAIAADUIBDAAIAAjUIBNAAIAADUIBDAAIAAjUIBOAAIAAEWg");
	this.shape_9.setTransform(-92.9,-1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhTCLIAAkWICnAAIAABEIhYAAIAAAnIBQAAIAAA8IhQAAIAAAtIBYAAIAABCg");
	this.shape_10.setTransform(-123.9,-1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAvCLIAAhvIhdAAIAABvIhOAAIAAkWIBOAAIAABlIBdAAIAAhlIBPAAIAAEWg");
	this.shape_11.setTransform(-149.9,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-167,-25.2,334.1,50.6);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhxCMIAAkWIBOAAIAABtIAnAAQAQAAASACQATADARAIQASAJALAPQALARAAAdQAAAcgLASQgLARgSAJQgRAIgTADQgSADgQAAgAgjBTIAiAAQAQABALgHQAKgGAAgRQAAgRgKgGQgKgGgRAAIgiAAg");
	this.shape.setTransform(147.9,-1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABKCoIAAg4IjWAAIAAkWIBPAAIAADSIBaAAIAAjSIBPAAIAADSIAhAAIAAB8g");
	this.shape_1.setTransform(119.5,1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA+CMIgPgxIhdAAIgQAxIhTAAIBjkWIBdAAIBkEWgAAgAdIgghlIgeBlIA+AAg");
	this.shape_2.setTransform(88.4,-1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ai3CMIAAkWIBOAAIAADSIBDAAIAAjSIBNAAIAADSIBDAAIAAjSIBOAAIAAEWg");
	this.shape_3.setTransform(53,-1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAjCMIAAhfIgHAAIg4BfIhUAAIBMhpQgTgEgOgKQgPgLgIgPQgJgRAAgXQABgcAIgRQAKgSANgKQANgKAPgEQAOgEAMgCIAPAAIBxAAIAAEWgAgBhLQgIACgIAHQgHAHgBAQQAAAPAGAHQAHAHAJADQAIACAIAAIAWAAIAAhEIgWAAIgOACg");
	this.shape_4.setTransform(18.2,-1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABcCMIgUihIgvChIgxAAIgvihIgUChIhMAAIApkWIBPAAIAvCpIAxipIBOAAIApEWg");
	this.shape_5.setTransform(-11.1,-1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgkCQQgQgDgSgJQgRgJgXgRIAhg0QAPAPATAIQASAJAQAAQAOAAAJgGQAJgFAEgGQADgIAAgGQAAgMgKgIQgKgJgXAAIgsAAIAAg2IAsAAQAQAAAJgFQAJgEADgHQADgGAAgHQgBgNgKgIQgLgHgQAAQgRAAgOAFQgNAFgNAKIgbg3IAUgLQANgGATgFQATgEAXAAQAeAAAYAKQAYAKAOASQAOARAAAXQAAAWgMARQgNARgVAIIAAABQAMADAMAHQALAHAJANQAIAOAAAVQAAAagPAUQgPATgZAKQgaALgeAAQgTAAgRgEg");
	this.shape_6.setTransform(-40.8,-1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgmCMIAAkWIBNAAIAAEWg");
	this.shape_7.setTransform(-68,-1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ah0CNQgIgBgJgCIAAhDIAJACIAIAAQARAAAJgHQAIgHACgNQADgOAAgUIAAiYIDTAAIAAEWIhPAAIAAjTIg3AAIAABsQAAAQgBASQgCASgKARQgKAQgUALQgVAKgkAAIgQAAg");
	this.shape_8.setTransform(-90.3,-1.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA+CMIgPgxIhdAAIgQAxIhTAAIBjkWIBdAAIBjEWgAAgAdIgghlIgeBlIA+AAg");
	this.shape_9.setTransform(-118.2,-1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAfCMIhQh5IAAB5IhOAAIAAkWIBOAAIAAB1IBTh1IBcAAIhrCHIBtCPg");
	this.shape_10.setTransform(-145.3,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162.7,-25.3,325.5,50.6);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag3A9IAqh5IBFAAIg5B5g");
	this.shape.setTransform(116.3,12.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhTCMIAAkWICmAAIAABCIhXAAIAAAoIBPAAIAAA7IhPAAIAAAtIBXAAIAABEg");
	this.shape_1.setTransform(100.1,-1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgkCQQgQgDgSgJQgRgJgXgRIAhg0QAPAPATAIQASAJAQAAQAOAAAJgGQAJgFAEgGQADgIAAgGQAAgMgKgIQgKgJgXAAIgsAAIAAg2IAsAAQAQAAAJgFQAJgEADgHQADgGAAgHQgBgNgKgIQgLgHgQAAQgRAAgOAFQgNAFgNAKIgbg3IAUgLQANgGATgFQATgEAXAAQAeAAAYAKQAYAKAOASQAOARAAAXQAAAWgMARQgNARgVAIIAAABQAMADAMAHQALAHAJANQAIAOAAAVQAAAagPAUQgPATgZAKQgaALgeAAQgTAAgRgEg");
	this.shape_2.setTransform(76.9,-1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABQCoIAAg4IigAAIAAA4IhCAAIAAh8QAMgBAMgGQAMgHAJgOQAIgOACgUIABgNIAAgNIAAh6IDMAAIAADSIAhAAIAAB8gAgSghQAAARgCAPQgCANgGAMQgHAMgNAIIBTAAIAAiQIg1AAg");
	this.shape_3.setTransform(50.4,1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhGCMIAnhOIhqjIIBcAAIA1B1IAth1IBVAAIh+EWg");
	this.shape_4.setTransform(22,-1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhxCMIAAkWIDNAAIAABCIh/AAIAAArIAnAAIAUAAQANABAPAEQAQAEAOAJQAOAIAJAOQAJARAAAYQAAAbgJARQgJAQgOAJQgPAJgPAEQgPAEgNABIgUABgAgjBTIAiAAQAQABALgHQAKgGAAgRQAAgRgKgGQgKgGgRAAIgiAAg");
	this.shape_5.setTransform(-4.5,-1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhBCHQgdgMgSgWQgSgUgKgbQgJgaAAgcQAAgbAJgaQAKgbASgUQASgWAdgMQAcgMAlAAQAmAAAcAMQAdAMATAWQASAUAJAbQAJAaAAAbQAAAcgJAaQgJAbgSAUQgTAWgdAMQgcANgmAAQglAAgcgNgAghhHQgPAKgKARQgKASAAAaQAAAbAKARQAKASAPAJQAQAKARgBQASABAQgKQAQgJAKgSQAJgRABgbQgBgagJgSQgKgRgQgKQgQgJgSAAQgRAAgQAJg");
	this.shape_6.setTransform(-44.1,-1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgmCMIAAjUIg9AAIAAhCIDHAAIAABCIg9AAIAADUg");
	this.shape_7.setTransform(-70.7,-1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ai3CMIAAkWIBOAAIAADSIBDAAIAAjSIBNAAIAADSIBDAAIAAjSIBOAAIAAEWg");
	this.shape_8.setTransform(-102.1,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125.1,-25.3,250.2,50.6);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#FFFFFF","rgba(255,255,255,0)"],[0,0,0.902],0,0,0,0,0,317.6).s().p("EgixAiyQubuaAA0YQAA0XObuaQOaubUXAAQUYAAOaObQOaOaABUXQgBUYuaOaQuaOa0YABQ0XgBuauag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-314.9,-314.9,629.8,629.8);


(lib.blk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EglfBCtMAAAiFZMBK/AAAMAAACFZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,-427,480,854);


(lib.Symbol71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.mc = new lib.Symbol35();
	this.mc.setTransform(0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68,-270,137,541);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol33();
	this.instance.setTransform(38.9,-8.4,1,1,90);

	this.instance_1 = new lib.Symbol33();
	this.instance_1.setTransform(-31.8,15.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.8,-69.4,185.6,138.8);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ice();
	this.instance.setTransform(-41,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.dr = new lib.Symbol33();
	this.dr.setTransform(-8.8,3.9,0.998,0.998,-90);

	this.timeline.addTween(cjs.Tween.get(this.dr).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.7,-58,107.8,122.8);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lemon();
	this.instance.setTransform(-67,-69);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.drops = new lib.Symbol34();
	this.drops.setTransform(3.8,5.4);

	this.timeline.addTween(cjs.Tween.get(this.drops).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89,-69,185.6,143.8);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// l
	this.l2 = new lib.Symbol29();
	this.l2.setTransform(120.1,-360.4,0.565,0.565,-30);

	this.l3 = new lib.Symbol29();
	this.l3.setTransform(-212.6,-124.9,0.921,0.921,-74.8);

	this.l6 = new lib.Symbol29();
	this.l6.setTransform(159.4,227.4,0.699,0.699,-149.8);

	this.l5 = new lib.Symbol29();
	this.l5.setTransform(-147.2,163,0.799,0.799,-29.8);

	this.l1 = new lib.Symbol29();
	this.l1.setTransform(-149,-355,0.699,0.699,-104.8);

	this.l4 = new lib.Symbol29();
	this.l4.setTransform(150,-199);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.l4},{t:this.l1},{t:this.l5},{t:this.l6},{t:this.l3},{t:this.l2}]}).wait(1));

	// q
	this.q4 = new lib.Symbol30();
	this.q4.setTransform(-72.7,237.4,0.899,0.899,-120);

	this.q3 = new lib.Symbol30();
	this.q3.setTransform(223,-1.7,0.8,0.8,-60);

	this.q1 = new lib.Symbol30();
	this.q1.setTransform(167,-312,0.8,0.8,45);

	this.q2 = new lib.Symbol30();
	this.q2.setTransform(-147.1,-254);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.q2},{t:this.q1},{t:this.q3},{t:this.q4}]}).wait(1));

	// i
	this.i1 = new lib.Symbol31();
	this.i1.setTransform(-87.9,-355.3,0.9,0.9);

	this.i4 = new lib.Symbol31();
	this.i4.setTransform(216.6,127,0.9,0.9,-60);

	this.i3 = new lib.Symbol31();
	this.i3.setTransform(132.7,-80,0.9,0.9,-60);

	this.i2 = new lib.Symbol31();
	this.i2.setTransform(-44.5,-191,0.9,0.9,45);

	this.i5 = new lib.Symbol31();
	this.i5.setTransform(-175.9,53);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.i5},{t:this.i2},{t:this.i3},{t:this.i4},{t:this.i1}]}).wait(1));

	// h
	this.h4 = new lib.Symbol32();
	this.h4.setTransform(-232.2,234.4,0.8,0.8,-45);

	this.h2 = new lib.Symbol32();
	this.h2.setTransform(-81.6,-50.9,0.8,0.8,105);

	this.h1 = new lib.Symbol32();
	this.h1.setTransform(41.4,-374.9,0.8,0.8,-90);

	this.h3 = new lib.Symbol32();
	this.h3.setTransform(91,126);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.h3},{t:this.h1},{t:this.h2},{t:this.h4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-290.1,-430.8,577.5,723.5);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.e4 = new lib.Symbol27();
	this.e4.setTransform(91.2,45.3);

	this.e3 = new lib.Symbol26();
	this.e3.setTransform(91.2,-41.2);

	this.e2 = new lib.Symbol25();
	this.e2.setTransform(91.2,-127.7);

	this.e1 = new lib.Symbol24();
	this.e1.setTransform(91.2,-214.2);

	this.r5 = new lib.Symbol23();
	this.r5.setTransform(-114.4,206.8);

	this.r4 = new lib.Symbol22();
	this.r4.setTransform(-114.4,120.3);

	this.r3 = new lib.Symbol21();
	this.r3.setTransform(-114.4,33.8);

	this.r2 = new lib.Symbol20();
	this.r2.setTransform(-114.4,-52.7);

	this.r1 = new lib.Symbol19();
	this.r1.setTransform(-114.4,-139.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.r1},{t:this.r2},{t:this.r3},{t:this.r4},{t:this.r5},{t:this.e1},{t:this.e2},{t:this.e3},{t:this.e4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-173.4,-272.5,313.9,537.5);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mc = new lib.Symbol36();
	this.mc.setTransform(0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-280,241,561);


(lib.Symbol16 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.mc = new lib.Symbol37();
	this.mc.setTransform(0.3,97.3,1,1,0,0,0,0,98.3);

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.2,-39.7,45.2,77.4);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol15();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.1,-40.7,82.3,81.5);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.t4 = new lib.Symbol12();
	this.t4.setTransform(0.1,72.8);

	this.t3 = new lib.Symbol11();
	this.t3.setTransform(0.1,24.3);

	this.t2 = new lib.Symbol10();
	this.t2.setTransform(0.1,-24.2);

	this.t1 = new lib.Symbol9();
	this.t1.setTransform(0.1,-72.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3},{t:this.t4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-176.9,-98.1,354,196.2);


(lib.content1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var r = this;
		var lemons = [r.ing.l1, r.ing.l2, r.ing.l3, r.ing.l4, r.ing.l5, r.ing.l6];
		var lemonDrops = [r.ing.l1.drops, r.ing.l2.drops, r.ing.l3.drops, r.ing.l4.drops, r.ing.l5.drops, r.ing.l6.drops];
		var hops = [r.ing.h1, r.ing.h2, r.ing.h3, r.ing.h4];
		var leaf = [r.ing.q1, r.ing.q2, r.ing.q3, r.ing.q4];
		var ice = [r.ing.i1, r.ing.i2, r.ing.i3, r.ing.i4, r.ing.i5];
		var iceDrops = [r.ing.i1.dr, r.ing.i2.dr, r.ing.i3.dr, r.ing.i4.dr, r.ing.i5.dr];
		
		var tl = new TimelineMax();
		tl.to(r.blk, 0.8, {alpha:0, ease:Power0.easeNone}, 0.0)
		  .from(r.bg, 2.5, {scaleX:9, scaleY:9, ease:Expo.easeOut}, 0.0)
		  .staggerFrom([r.t1.t1, r.t1.t2, r.t1.t3, r.t1.t4], 1.5, {y:"+=300", alpha:0, ease:Expo.easeOut}, 0.05, 0.5)
		  .staggerFrom([r.l1, r.l2], 1.5, {y:"-=200", alpha:0, ease:Expo.easeOut}, 0.25, 0.5)
		  
		  .from(r.shakeIcon, 0.5, {scaleX:0, scaleY:0, ease:Expo.easeOut}, 1.0)
		  .from(r.shakeIcon, 1.0, {rotation:"-=70", ease:Elastic.easeOut}, 1.0)
		  .call(shakeIconFn)
		  .call(checkShake)
		  
		  .staggerTo([r.l1, r.l2, r.shakeIcon], 0.5, {y:"-=800", ease:Expo.easeOut}, 0.02, 3.0)
		  .staggerTo([r.t1.t4, r.t1.t3, r.t1.t2, r.t1.t1], 0.5, {y:"+=800", ease:Expo.easeOut}, 0.02, 3.0)
		  .from(r.blk2, 0.1, {alpha:0, ease:Power0.easeNone}, 3.0)
		  .to(r.blk2, 0.9, {alpha:0, ease:Power0.easeNone}, 3.1)
		  .to(r.blk, 0.1, {alpha:0, ease:Power0.easeNone}, 3.0)
		  .to(r.blk, 0.5, {alpha:0, ease:Power0.easeNone}, 3.1)
		  
		  //.to(r.t1, 0.3, {scaleX:0, scaleY:0, ease:Back.easeIn}, 2.6)
		  .from(r.bottle, 1.4, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, 3.1)
		  .from(r.bottle, 1.0, {rotation:"-=30", ease:Elastic.easeOut}, 3.1)
		  .from(r.bottle, 1.7, {x:"-=120", ease:Elastic.easeOut}, 3.1)
		  .from(r.bottle, 1.3, {y:"-=120", ease:Elastic.easeOut}, 3.1)
		  .from(r.bSh, 1.4, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, 3.1)
		  .from(r.bSh, 1.0, {rotation:"-=30", ease:Elastic.easeOut}, 3.1)
		  .from(r.bSh, 1.7, {x:"-=300", ease:Elastic.easeOut}, 3.1)
		  .from(r.bSh, 1.3, {y:"-=200", ease:Elastic.easeOut}, 3.1)
		  
		  .from(r.bottle.mc, 5.0, {scaleX:0.8, scaleY:0.8, ease:Expo.easeOut}, 3.1)
		  .from(r.bSh.mc, 5.0, {scaleX:0.8, scaleY:0.8, ease:Expo.easeOut}, 3.1)
		  
		  .staggerFrom([r.sl.r5, r.sl.r4, r.sl.r3, r.sl.r2, r.sl.r1], 1.1, {y:"-=300", alpha:0, ease:Expo.easeOut}, 0.1, 3.5)
		  .staggerFrom([r.sl.e4, r.sl.e3, r.sl.e2, r.sl.e1], 1.1, {y:"-=300", alpha:0, ease:Expo.easeOut}, 0.1, 3.8)
		  
		  .staggerFrom(lemons, 1.8, {x:0, y:0, scaleX:0, scaleY:0, ease:Elastic.easeOut}, 0.1, 3.0)
		  .staggerFrom(lemons, 1.8, {rotation:"-=360", ease:Expo.easeOut}, 0.1, 3.0)
		  .staggerFrom(lemonDrops, 1.0, {scaleX:0, scaleY:0, rotation:"-=50", ease:Expo.easeOut}, 0.1, 3.4)
		  
		  .staggerFrom(hops, 2.1, {x:0, y:0, scaleX:0, scaleY:0, ease:Elastic.easeOut}, 0.2, 3.0)
		  .staggerFrom(hops, 2.1, {rotation:"-=360", ease:Expo.easeOut}, 0.2, 3.0)
		  
		  .staggerFrom(leaf, 1.6, {x:0, y:0, scaleX:0, scaleY:0, ease:Elastic.easeOut}, 0.15, 3.0)
		  .staggerFrom(leaf, 1.6, {rotation:"+=180", ease:Expo.easeOut}, 0.15, 3.0)
		  
		  .staggerFrom(ice, 2.2, {x:0, y:0, scaleX:0, scaleY:0, ease:Elastic.easeOut}, 0.15, 3.0)
		  .staggerFrom(ice, 2.2, {rotation:"+=360", ease:Expo.easeOut}, 0.15, 3.0)
		  .staggerFrom(iceDrops, 1.5, {scaleX:0, scaleY:0, rotation:"-=50", ease:Expo.easeOut}, 0.15, 3.5)
		  
		  .to(this.blk, 0.6, {alpha:1, ease:Power0.easeNone, onComplete:restart}, 12)
		  ;
		
		
		
		function restart() {
			tl.play(0);
		}
		
		function checkShakeZZZZZ() {
			tl.pause();
			
			function onShake() {
				TweenMax.killTweensOf(r.shakeIcon.mc);
				tl.play();
				}
		   $.shake({
		     callback: function() {
		     onShake();
		     }
		   });
		}
		
		function shakeIconFn() {
			TweenMax.to(r.shakeIcon.mc, 0.12, {rotation:"-=7", ease:Power0.easeNone}, 0.0)
			TweenMax.to(r.shakeIcon.mc, 0.12, {rotation:"+=15", yoyo:true, repeat:4, repeatDelay:0.0, delay:0.12, ease:Power0.easeNone}/*, 0.12*/)
			TweenMax.to(r.shakeIcon.mc, 0.12, {rotation:0, delay:0.60, ease:Power0.easeNone}/*, 0.60*/)
			TweenMax.to(r.shakeIcon.mc, 1.0, {delay:1.00, onComplete:shakeIconFn})
		}
		
		
		
		
		
		
		function checkShake() {
			//var x = y = z = lastX = lastY = lastZ = 0;
			tl.pause();
			if (window.DeviceMotionEvent) {
				window.addEventListener('devicemotion', YaoYiYao, false);
				//console.log(window.DeviceMotionEvent);
			}
		}
		
		var speed = 10; //speed
		var x = y = z = lastX = lastY = lastZ = 0;
		function YaoYiYao(eventData) {
			var acceleration = eventData.accelerationIncludingGravity;
			x = acceleration.x;
			y = acceleration.y;
			z = acceleration.z;
			
			//r.ch1.text = Math.round(x);
			//r.ch2.text = Math.round(y);
			//r.ch3.text = Math.round(z);
			
			//TweenMax.to(r.txt, 0.2, {rotation:x*9, ease:Expo.easeOut})
			if (Math.abs(x - lastX) > speed || Math.abs(y - lastY) > speed || Math.abs(z - lastZ) > speed) {
				TweenMax.killTweensOf(r.shakeIcon.mc);
				tl.play();
				window.removeEventListener('devicemotion', YaoYiYao, false);
				var x = y = z = lastX = lastY = lastZ = 0;
				//alert(x);
				//if(myVar == 1)
				//{
					//TweenMax.to(r.txt, 0.2, {rotation:x*9, ease:Expo.easeOut})
					//TweenMax.fromTo(r.txt, 1.0, {y:0}, {y:150, ease:Elastic.easeOut})
					//mainStage.gotoAndPlay('start');
				//}
			}
			//if (Math.abs(x - lastX) == 0 || Math.abs(y - lastY) == 0 || Math.abs(z - lastZ) == 0) {
				//if(myVar == 2)
				//{
					//TweenMax.to(r.txt, 0.5, {y:-150, ease:Power0.easeNone})
					//mainStage.gotoAndPlay('final');
				//}
			//}
			lastX = x;
			lastY = y;
			lastZ = z;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// blk
	this.blk = new lib.blk();
	this.blk.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.blk).wait(1));

	// blk2
	this.blk2 = new lib.Symbol5();
	this.blk2.setTransform(0,0,1,2.282);
	this.blk2.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.blk2).wait(1));

	// warn
	this.instance = new lib.warn();
	this.instance.setTransform(0,291);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shakeIcon
	this.shakeIcon = new lib.Symbol16();
	this.shakeIcon.setTransform(0,271.2,1,1,0,0,0,0,91.2);

	this.timeline.addTween(cjs.Tween.get(this.shakeIcon).wait(1));

	// l2
	this.l2 = new lib.Symbol13();
	this.l2.setTransform(-32.2,-257.5,1.08,1.08);
	this.l2.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.l2).wait(1));

	// l1
	this.l1 = new lib.Symbol14();
	this.l1.setTransform(-2,-167.4,1.08,1.08);

	this.timeline.addTween(cjs.Tween.get(this.l1).wait(1));

	// bottle
	this.bottle = new lib.Symbol71();
	this.bottle.setTransform(0,-24);

	this.timeline.addTween(cjs.Tween.get(this.bottle).wait(1));

	// sl
	this.sl = new lib.Symbol18();

	this.timeline.addTween(cjs.Tween.get(this.sl).wait(1));

	// ing
	this.ing = new lib.Symbol28();

	this.timeline.addTween(cjs.Tween.get(this.ing).wait(1));

	// bSh
	this.bSh = new lib.Symbol17();
	this.bSh.setTransform(60,60);

	this.timeline.addTween(cjs.Tween.get(this.bSh).wait(1));

	// t1
	this.t1 = new lib.Symbol7();
	this.t1.setTransform(0,6,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// bar
	this.bg = new lib.Symbol68();
	this.bg.setTransform(0,424.4,1,1,0,0,0,0,424.4);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-314.9,-718.7,629.8,1437.5);


// stage content:
(lib.body = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var page_body = document.getElementsByTagName("body")[0];
		page_body.style.backgroundColor = "#3C0600";
		page_body.style.overflow = "hidden";
		page_body.style.position = "fixed";
		
		var page_canvas = document.getElementsByTagName("canvas")[0];
		stageWidth = page_canvas.width;
		stageHeight = page_canvas.height;
		
		var viewport = document.querySelector('meta[name=viewport]');
		var viewportContent = 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0';
		
		if (viewport === null) {
		 var head = document.getElementsByTagName('head')[0];
		 viewport = document.createElement('meta');
		 viewport.setAttribute('name', 'viewport');
		 head.appendChild(viewport);
		}
		
		viewport.setAttribute('content', viewportContent);
		
		function onResize() {
		 var widthToHeight = stageWidth / stageHeight;
		 var newWidth = window.innerWidth;
		 var newHeight = window.innerHeight;
		 var newWidthToHeight = newWidth / newHeight;
		 //
		 if (newWidthToHeight < widthToHeight) {
		 newWidth = newHeight * widthToHeight;
		 page_canvas.style.height = newHeight + "px";
		 page_canvas.style.width = newWidth + "px";
		 } else {
		 newHeight = newWidth / widthToHeight;
		 page_canvas.style.height = newHeight + "px";
		 page_canvas.style.width = newWidth + "px";
		 }
		 scale = newWidthToHeight / widthToHeight;
		 stage.width = newWidth;
		 stage.height = newHeight;
		 page_canvas.style.marginTop = ((window.innerHeight - newHeight) / 2) + "px";
		 page_canvas.style.marginLeft = ((window.innerWidth - newWidth) / 2) + "px";
		}
		
		window.onresize = function () {
		 onResize();
		}
		
		onResize();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// movie
	this.rolik = new lib.content1();
	this.rolik.setTransform(240,427);

	this.timeline.addTween(cjs.Tween.get(this.rolik).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(165.1,135.3,629.8,1437.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;