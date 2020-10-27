/*
 Highstock JS v8.2.2 (2020-10-27)

 Indicator series type for Highstock

 (c) 2010-2019 Pawe Fus

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/bollinger-bands",["highcharts","highcharts/modules/stock"],function(b){a(b);a.Highcharts=b;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function b(a,f,b,q){a.hasOwnProperty(f)||(a[f]=q.apply(null,b))}a=a?a._modules:{};b(a,"Mixins/MultipleLines.js",[a["Core/Globals.js"],a["Core/Utilities.js"]],function(a,b){var f=
b.defined,q=b.error,l=b.merge,r=a.seriesTypes.sma;return{pointArrayMap:["top","bottom"],pointValKey:"top",linesApiNames:["bottomLine"],getTranslatedLinesNames:function(d){var a=[];(this.pointArrayMap||[]).forEach(function(c){c!==d&&a.push("plot"+c.charAt(0).toUpperCase()+c.slice(1))});return a},toYData:function(d){var a=[];(this.pointArrayMap||[]).forEach(function(c){a.push(d[c])});return a},translate:function(){var d=this,a=d.pointArrayMap,c=[],b;c=d.getTranslatedLinesNames();r.prototype.translate.apply(d,
arguments);d.points.forEach(function(e){a.forEach(function(a,f){b=e[a];null!==b&&(e[c[f]]=d.yAxis.toPixels(b,!0))})})},drawGraph:function(){var a=this,b=a.linesApiNames,c=a.points,w=c.length,e=a.options,z=a.graph,A={options:{gapSize:e.gapSize}},m=[],g;a.getTranslatedLinesNames(a.pointValKey).forEach(function(a,b){for(m[b]=[];w--;)g=c[w],m[b].push({x:g.x,plotX:g.plotX,plotY:g[a],isNull:!f(g[a])});w=c.length});b.forEach(function(b,c){m[c]?(a.points=m[c],e[b]?a.options=l(e[b].styles,A):q('Error: "There is no '+
b+' in DOCS options declared. Check if linesApiNames are consistent with your DOCS line names." at mixin/multiple-line.js:34'),a.graph=a["graph"+b],r.prototype.drawGraph.call(a),a["graph"+b]=a.graph):q('Error: "'+b+" doesn't have equivalent in pointArrayMap. To many elements in linesApiNames relative to pointArrayMap.\"")});a.points=c;a.options=e;a.graph=z;r.prototype.drawGraph.call(a)}}});b(a,"Stock/Indicators/BBIndicator.js",[a["Core/Series/Series.js"],a["Mixins/MultipleLines.js"],a["Core/Utilities.js"]],
function(a,b,t){var f=t.isArray,l=t.merge,r=a.seriesTypes.sma;a.seriesType("bb","sma",{params:{period:20,standardDeviation:2,index:3},bottomLine:{styles:{lineWidth:1,lineColor:void 0}},topLine:{styles:{lineWidth:1,lineColor:void 0}},tooltip:{pointFormat:'<span style="color:{point.color}">\u25cf</span><b> {series.name}</b><br/>Top: {point.top}<br/>Middle: {point.middle}<br/>Bottom: {point.bottom}<br/>'},marker:{enabled:!1},dataGrouping:{approximation:"averages"}},l(b,{pointArrayMap:["top","middle",
"bottom"],pointValKey:"middle",nameComponents:["period","standardDeviation"],linesApiNames:["topLine","bottomLine"],init:function(){r.prototype.init.apply(this,arguments);this.options=l({topLine:{styles:{lineColor:this.color}},bottomLine:{styles:{lineColor:this.color}}},this.options)},getValues:function(a,b){var c=b.period,d=b.standardDeviation,e=a.xData,q=(a=a.yData)?a.length:0,l=[],m=[],g=[],n;if(!(e.length<c)){var t=f(a[0]);for(n=c;n<=q;n++){var u=e.slice(n-c,n);var p=a.slice(n-c,n);var h=r.prototype.getValues.call(this,
{xData:u,yData:p},b);u=h.xData[0];h=h.yData[0];for(var x=0,y=p.length,v=0;v<y;v++){var k=(t?p[v][b.index]:p[v])-h;x+=k*k}k=Math.sqrt(x/(y-1));p=h+d*k;k=h-d*k;l.push([u,p,h,k]);m.push(u);g.push([p,h,k])}return{values:l,xData:m,yData:g}}}}));""});b(a,"masters/indicators/bollinger-bands.src.js",[],function(){})});
//# sourceMappingURL=bollinger-bands.js.map