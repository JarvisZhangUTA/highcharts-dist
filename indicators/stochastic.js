/*
 Highstock JS v8.2.2 (2020-10-27)

 Indicator series type for Highstock

 (c) 2010-2019 Pawe Fus

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/stochastic",["highcharts","highcharts/modules/stock"],function(d){a(d);a.Highcharts=d;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function d(a,b,f,e){a.hasOwnProperty(b)||(a[b]=e.apply(null,f))}a=a?a._modules:{};d(a,"Mixins/MultipleLines.js",[a["Core/Globals.js"],a["Core/Utilities.js"]],function(a,b){var f=b.defined,
e=b.error,u=b.merge,d=a.seriesTypes.sma;return{pointArrayMap:["top","bottom"],pointValKey:"top",linesApiNames:["bottomLine"],getTranslatedLinesNames:function(h){var a=[];(this.pointArrayMap||[]).forEach(function(c){c!==h&&a.push("plot"+c.charAt(0).toUpperCase()+c.slice(1))});return a},toYData:function(h){var a=[];(this.pointArrayMap||[]).forEach(function(c){a.push(h[c])});return a},translate:function(){var a=this,b=a.pointArrayMap,c=[],g;c=a.getTranslatedLinesNames();d.prototype.translate.apply(a,
arguments);a.points.forEach(function(h){b.forEach(function(b,e){g=h[b];null!==g&&(h[c[e]]=a.yAxis.toPixels(g,!0))})})},drawGraph:function(){var a=this,b=a.linesApiNames,c=a.points,g=c.length,q=a.options,m=a.graph,w={options:{gapSize:q.gapSize}},r=[],k;a.getTranslatedLinesNames(a.pointValKey).forEach(function(a,b){for(r[b]=[];g--;)k=c[g],r[b].push({x:k.x,plotX:k.plotX,plotY:k[a],isNull:!f(k[a])});g=c.length});b.forEach(function(b,c){r[c]?(a.points=r[c],q[b]?a.options=u(q[b].styles,w):e('Error: "There is no '+
b+' in DOCS options declared. Check if linesApiNames are consistent with your DOCS line names." at mixin/multiple-line.js:34'),a.graph=a["graph"+b],d.prototype.drawGraph.call(a),a["graph"+b]=a.graph):e('Error: "'+b+" doesn't have equivalent in pointArrayMap. To many elements in linesApiNames relative to pointArrayMap.\"")});a.points=c;a.options=q;a.graph=m;d.prototype.drawGraph.call(a)}}});d(a,"Mixins/ReduceArray.js",[],function(){return{minInArray:function(a,b){return a.reduce(function(a,e){return Math.min(a,
e[b])},Number.MAX_VALUE)},maxInArray:function(a,b){return a.reduce(function(a,e){return Math.max(a,e[b])},-Number.MAX_VALUE)},getArrayExtremes:function(a,b,d){return a.reduce(function(a,m){return[Math.min(a[0],m[b]),Math.max(a[1],m[d])]},[Number.MAX_VALUE,-Number.MAX_VALUE])}}});d(a,"Stock/Indicators/StochasticIndicator.js",[a["Core/Series/Series.js"],a["Mixins/MultipleLines.js"],a["Mixins/ReduceArray.js"],a["Core/Utilities.js"]],function(a,b,d,e){var m=e.isArray,f=e.merge,h=a.seriesTypes.sma,u=d.getArrayExtremes;
a.seriesType("stochastic","sma",{params:{periods:[14,3]},marker:{enabled:!1},tooltip:{pointFormat:'<span style="color:{point.color}">\u25cf</span><b> {series.name}</b><br/>%K: {point.y}<br/>%D: {point.smoothed}<br/>'},smoothedLine:{styles:{lineWidth:1,lineColor:void 0}},dataGrouping:{approximation:"averages"}},f(b,{nameComponents:["periods"],nameBase:"Stochastic",pointArrayMap:["y","smoothed"],parallelArrays:["x","y","smoothed"],pointValKey:"y",linesApiNames:["smoothedLine"],init:function(){h.prototype.init.apply(this,
arguments);this.options=f({smoothedLine:{styles:{lineColor:this.color}}},this.options)},getValues:function(a,b){var c=b.periods[0];b=b.periods[1];var d=a.xData,e=(a=a.yData)?a.length:0,g=[],k=[],f=[],p=null,l;if(!(e<c)&&m(a[0])&&4===a[0].length){for(l=c-1;l<e;l++){var n=a.slice(l-c+1,l+1);var v=u(n,2,1);var t=v[0];n=a[l][3]-t;t=v[1]-t;n=n/t*100;k.push(d[l]);f.push([n,null]);l>=c-1+(b-1)&&(p=h.prototype.getValues.call(this,{xData:k.slice(-b),yData:f.slice(-b)},{period:b}),p=p.yData[0]);g.push([d[l],
n,p]);f[f.length-1][1]=p}return{values:g,xData:k,yData:f}}}}));""});d(a,"masters/indicators/stochastic.src.js",[],function(){})});
//# sourceMappingURL=stochastic.js.map