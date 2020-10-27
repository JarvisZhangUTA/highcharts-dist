/*
 Highcharts JS v8.2.2 (2020-10-27)

 (c) 2017-2019 Highsoft AS
 Authors: Jon Arild Nygard

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/modules/venn",["highcharts"],function(m){a(m);a.Highcharts=m;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function m(a,f,c,x){a.hasOwnProperty(f)||(a[f]=x.apply(null,c))}a=a?a._modules:{};m(a,"Mixins/DrawPoint.js",[],function(){var a=function(c){return"function"===typeof c},f=function(c){var f,v=this,d=v.graphic,r=c.animatableAttribs,
g=c.onComplete,m=c.css,p=c.renderer,q=null===(f=v.series)||void 0===f?void 0:f.options.animation;if(v.shouldDraw())d||(v.graphic=d=p[c.shapeType](c.shapeArgs).add(c.group)),d.css(m).attr(c.attribs).animate(r,c.isNew?!1:q,g);else if(d){var n=function(){v.graphic=d=d.destroy();a(g)&&g()};Object.keys(r).length?d.animate(r,void 0,function(){n()}):n()}};return{draw:f,drawPoint:function(c){(c.attribs=c.attribs||{})["class"]=this.getClassName();f.call(this,c)},isFn:a}});m(a,"Mixins/Geometry.js",[],function(){return{getAngleBetweenPoints:function(a,
f){return Math.atan2(f.x-a.x,f.y-a.y)},getCenterOfPoints:function(a){var f=a.reduce(function(c,a){c.x+=a.x;c.y+=a.y;return c},{x:0,y:0});return{x:f.x/a.length,y:f.y/a.length}},getDistanceBetweenPoints:function(a,f){return Math.sqrt(Math.pow(f.x-a.x,2)+Math.pow(f.y-a.y,2))}}});m(a,"Mixins/GeometryCircles.js",[a["Mixins/Geometry.js"]],function(a){function f(e,b){b=Math.pow(10,b);return Math.round(e*b)/b}function c(e){if(0>=e)throw Error("radius of circle must be a positive number.");return Math.PI*
e*e}function x(e,b){return e*e*Math.acos(1-b/e)-(e-b)*Math.sqrt(b*(2*e-b))}function u(e,b){var c=n(e,b),a=e.r,d=b.r,z=[];if(c<a+d&&c>Math.abs(a-d)){a*=a;var g=(a-d*d+c*c)/(2*c);d=Math.sqrt(a-g*g);a=e.x;z=b.x;e=e.y;var r=b.y;b=a+g*(z-a)/c;g=e+g*(r-e)/c;e=d/c*-(r-e);c=d/c*-(z-a);z=[{x:f(b+e,14),y:f(g-c,14)},{x:f(b-e,14),y:f(g+c,14)}]}return z}function d(e){return e.reduce(function(e,c,a,f){f=f.slice(a+1).reduce(function(e,b,f){var d=[a,f+a+1];return e.concat(u(c,b).map(function(e){e.indexes=d;return e}))},
[]);return e.concat(f)},[])}function r(e,b){return n(e,b)<=b.r+1e-10}function g(e,b){return!b.some(function(b){return!r(e,b)})}function v(e){return d(e).filter(function(b){return g(b,e)})}var p=a.getAngleBetweenPoints,q=a.getCenterOfPoints,n=a.getDistanceBetweenPoints;return{getAreaOfCircle:c,getAreaOfIntersectionBetweenCircles:function(e){var b=v(e);if(1<b.length){var c=q(b);b=b.map(function(e){e.angle=p(c,e);return e}).sort(function(e,b){return b.angle-e.angle});var a=b[b.length-1];b=b.reduce(function(b,
c){var a=b.startPoint,f=q([a,c]),d=c.indexes.filter(function(e){return-1<a.indexes.indexOf(e)}).reduce(function(b,d){d=e[d];var g=p(d,c),y=p(d,a);g=y-(y-g+(y<g?2*Math.PI:0))/2;g=n(f,{x:d.x+d.r*Math.sin(g),y:d.y+d.r*Math.cos(g)});d=d.r;g>2*d&&(g=2*d);if(!b||b.width>g)b={r:d,largeArc:g>d?1:0,width:g,x:c.x,y:c.y};return b},null);if(d){var g=d.r;b.arcs.push(["A",g,g,0,d.largeArc,1,d.x,d.y]);b.startPoint=c}return b},{startPoint:a,arcs:[]}).arcs;if(0!==b.length&&1!==b.length){b.unshift(["M",a.x,a.y]);var f=
{center:c,d:b}}}return f},getCircleCircleIntersection:u,getCirclesIntersectionPoints:d,getCirclesIntersectionPolygon:v,getCircularSegmentArea:x,getOverlapBetweenCircles:function(e,b,a){var d=0;a<e+b&&(a<=Math.abs(b-e)?d=c(e<b?e:b):(d=(e*e-b*b+a*a)/(2*a),a-=d,d=x(e,e-d)+x(b,b-a)),d=f(d,14));return d},isCircle1CompletelyOverlappingCircle2:function(e,b){return n(e,b)+b.r<e.r+1e-10},isPointInsideCircle:r,isPointInsideAllCircles:g,isPointOutsideAllCircles:function(e,b){return!b.some(function(b){return r(e,
b)})},round:f}});m(a,"Mixins/NelderMead.js",[],function(){var a=function(a){a=a.slice(0,-1);for(var c=a.length,f=[],u=function(a,c){a.sum+=c[a.i];return a},d=0;d<c;d++)f[d]=a.reduce(u,{sum:0,i:d}).sum/c;return f};return{getCentroid:a,nelderMead:function(f,c){var v=function(a,b){return a.fx-b.fx},u=function(a,b,c,d){return b.map(function(b,e){return a*b+c*d[e]})},d=function(a,b){b.fx=f(b);a[a.length-1]=b;return a},r=function(a){var b=a[0];return a.map(function(a){a=u(.5,b,.5,a);a.fx=f(a);return a})},
g=function(a,b,c,d){a=u(c,a,d,b);a.fx=f(a);return a};c=function(a){var b=a.length,c=Array(b+1);c[0]=a;c[0].fx=f(a);for(var d=0;d<b;++d){var e=a.slice();e[d]=e[d]?1.05*e[d]:.001;e.fx=f(e);c[d+1]=e}return c}(c);for(var m=0;100>m;m++){c.sort(v);var p=c[c.length-1],q=a(c),n=g(q,p,2,-1);n.fx<c[0].fx?(p=g(q,p,3,-2),c=d(c,p.fx<n.fx?p:n)):n.fx>=c[c.length-2].fx?n.fx>p.fx?(q=g(q,p,.5,.5),c=q.fx<p.fx?d(c,q):r(c)):(q=g(q,p,1.5,-.5),c=q.fx<n.fx?d(c,q):r(c)):c=d(c,n)}return c[0]}}});m(a,"Series/VennSeries.js",
[a["Core/Animation/AnimationUtilities.js"],a["Core/Series/Series.js"],a["Core/Color/Color.js"],a["Mixins/DrawPoint.js"],a["Mixins/Geometry.js"],a["Mixins/GeometryCircles.js"],a["Mixins/NelderMead.js"],a["Core/Utilities.js"]],function(a,f,c,m,u,d,r,g){function v(a,c){var l=a.sets,b=c.reduce(function(a,b){var h=-1<l.indexOf(b.sets[0]);a[h?"internal":"external"].push(b.circle);return a},{internal:[],external:[]});b.external=b.external.filter(function(a){return b.internal.some(function(l){return!V(a,
l)})});a=Y(b.internal,b.external);c=K(a,b.internal,b.external);return{position:a,width:c}}function p(a){var b={},l={};if(0<a.length){var c=L(a),h=a.filter(C);a.forEach(function(a){var d=a.sets,k=d.join();if(d=C(a)?c[k]:T(d.map(function(a){return c[a]})))b[k]=d,l[k]=v(a,h)})}return{mapOfIdToShape:b,mapOfIdToLabelValues:l}}var q=a.animObject,n=f.seriesTypes,e=c.parse,b=u.getCenterOfPoints,y=u.getDistanceBetweenPoints,x=d.getAreaOfCircle,T=d.getAreaOfIntersectionBetweenCircles,z=d.getCircleCircleIntersection,
U=d.getCirclesIntersectionPolygon,G=d.getOverlapBetweenCircles,V=d.isCircle1CompletelyOverlappingCircle2,H=d.isPointInsideAllCircles,X=d.isPointInsideCircle,I=d.isPointOutsideAllCircles,W=r.nelderMead;a=g.addEvent;var J=g.extend,A=g.isArray,w=g.isNumber,D=g.isObject,Z=g.isString,M=g.merge,aa=function(a){return Object.keys(a).map(function(b){return a[b]})},ba=function(a){var b=0;2===a.length&&(b=a[0],a=a[1],b=G(b.r,a.r,y(b,a)));return b},N=function(a,b){return b.reduce(function(b,c){var h=0;1<c.sets.length&&
(h=c.value,c=ba(c.sets.map(function(b){return a[b]})),c=h-c,h=Math.round(c*c*1E11)/1E11);return b+h},0)},O=function(a,b,c,d,h){var l=a(b),k=a(c);h=h||100;d=d||1e-10;var e=c-b,B=1;if(b>=c)throw Error("a must be smaller than b.");if(0<l*k)throw Error("f(a) and f(b) must have opposite signs.");if(0===l)var t=b;else if(0===k)t=c;else for(;B++<=h&&0!==f&&e>d;){e=(c-b)/2;t=b+e;var f=a(t);0<l*f?b=t:c=t}return t},E=function(a,b,c){var d=a+b;return 0>=c?d:x(a<b?a:b)<=c?0:O(function(d){d=G(a,b,d);return c-
d},0,d)},C=function(a){return A(a.sets)&&1===a.sets.length},F=function(a,b,c){b=b.reduce(function(b,c){c=c.r-y(a,c);return c<=b?c:b},Number.MAX_VALUE);return b=c.reduce(function(b,c){c=y(a,c)-c.r;return c<=b?c:b},b)},Y=function(a,c){var d=a.reduce(function(b,d){var e=d.r/2;return[{x:d.x,y:d.y},{x:d.x+e,y:d.y},{x:d.x-e,y:d.y},{x:d.x,y:d.y+e},{x:d.x,y:d.y-e}].reduce(function(b,d){var e=F(d,a,c);b.margin<e&&(b.point=d,b.margin=e);return b},b)},{point:void 0,margin:-Number.MAX_VALUE}).point;d=W(function(b){return-F({x:b[0],
y:b[1]},a,c)},[d.x,d.y]);d={x:d[0],y:d[1]};H(d,a)&&I(d,c)||(d=1<a.length?b(U(a)):{x:a[0].x,y:a[0].y});return d},K=function(a,b,c){var d=b.reduce(function(a,b){return Math.min(b.r,a)},Infinity),e=c.filter(function(b){return!X(a,b)});c=function(c,d){return O(function(l){var h={x:a.x+d*l,y:a.y};h=H(h,b)&&I(h,e);return-(c-l)+(h?0:Number.MAX_VALUE)},0,c)};return 2*Math.min(c(d,-1),c(d,1))},P=function(a){var b=a.filter(function(a){return 2===a.sets.length}).reduce(function(a,b){b.sets.forEach(function(c,
d,e){D(a[c])||(a[c]={overlapping:{},totalOverlap:0});a[c].totalOverlap+=b.value;a[c].overlapping[e[1-d]]=b.value});return a},{});a.filter(C).forEach(function(a){J(a,b[a.sets[0]])});return a},Q=function(a,b){return b.totalOverlap-a.totalOverlap},L=function(a){var b=[],c={};a.filter(function(a){return 1===a.sets.length}).forEach(function(a){c[a.sets[0]]=a.circle={x:Number.MAX_VALUE,y:Number.MAX_VALUE,r:Math.sqrt(a.value/Math.PI)}});var d=function(a,c){var d=a.circle;d.x=c.x;d.y=c.y;b.push(a)};P(a);
var e=a.filter(C).sort(Q);d(e.shift(),{x:0,y:0});var l=a.filter(function(a){return 2===a.sets.length});e.forEach(function(a){var e=a.circle,h=e.r,f=a.overlapping,g=b.reduce(function(a,d,g){var k=d.circle,t=E(h,k.r,f[d.sets[0]]),B=[{x:k.x+t,y:k.y},{x:k.x-t,y:k.y},{x:k.x,y:k.y+t},{x:k.x,y:k.y-t}];b.slice(g+1).forEach(function(a){var b=a.circle;a=E(h,b.r,f[a.sets[0]]);B=B.concat(z({x:k.x,y:k.y,r:t},{x:b.x,y:b.y,r:a}))});B.forEach(function(b){e.x=b.x;e.y=b.y;var d=N(c,l);d<a.loss&&(a.loss=d,a.coordinates=
b)});return a},{loss:Number.MAX_VALUE,coordinates:void 0});d(a,g.coordinates)});return c},R=function(a){var b={};return D(a)&&w(a.value)&&-1<a.value&&A(a.sets)&&0<a.sets.length&&!a.sets.some(function(a){var c=!1;!b[a]&&Z(a)?b[a]=!0:c=!0;return c})},S=function(a){a=A(a)?a:[];var b=a.reduce(function(a,b){R(b)&&C(b)&&0<b.value&&-1===a.indexOf(b.sets[0])&&a.push(b.sets[0]);return a},[]).sort(),c=a.reduce(function(a,c){R(c)&&!c.sets.some(function(a){return-1===b.indexOf(a)})&&(a[c.sets.sort().join()]=
c);return a},{});b.reduce(function(a,b,c,d){d.slice(c+1).forEach(function(c){a.push(b+","+c)});return a},[]).forEach(function(a){if(!c[a]){var b={sets:a.split(","),value:0};c[a]=b}});return aa(c)},ca=function(a,b,c){var d=c.bottom-c.top,e=c.right-c.left;d=Math.min(0<e?1/e*a:1,0<d?1/d*b:1);return{scale:d,centerX:a/2-(c.right+c.left)/2*d,centerY:b/2-(c.top+c.bottom)/2*d}};u={isCartesian:!1,axisTypes:[],directTouch:!0,pointArrayMap:["value"],init:function(){n.scatter.prototype.init.apply(this,arguments);
delete this.opacity},translate:function(){var a=this.chart;this.processedXData=this.xData;this.generatePoints();var b=S(this.options.data);b=p(b);var c=b.mapOfIdToShape,d=b.mapOfIdToLabelValues;b=Object.keys(c).filter(function(a){return(a=c[a])&&w(a.r)}).reduce(function(a,b){var d=c[b];b=d.x-d.r;var e=d.x+d.r,f=d.y+d.r;d=d.y-d.r;if(!w(a.left)||a.left>b)a.left=b;if(!w(a.right)||a.right<e)a.right=e;if(!w(a.top)||a.top>d)a.top=d;if(!w(a.bottom)||a.bottom<f)a.bottom=f;return a},{top:0,bottom:0,left:0,
right:0});a=ca(a.plotWidth,a.plotHeight,b);var e=a.scale,f=a.centerX,g=a.centerY;this.points.forEach(function(a){var b=A(a.sets)?a.sets:[],l=b.join(),k=c[l],h=d[l]||{};l=h.width;h=h.position;var t=a.options&&a.options.dataLabels;if(k){if(k.r)var m={x:f+k.x*e,y:g+k.y*e,r:k.r*e};else k.d&&(k=k.d,k.forEach(function(a){"M"===a[0]?(a[1]=f+a[1]*e,a[2]=g+a[2]*e):"A"===a[0]&&(a[1]*=e,a[2]*=e,a[6]=f+a[6]*e,a[7]=g+a[7]*e)}),m={d:k});h?(h.x=f+h.x*e,h.y=g+h.y*e):h={};w(l)&&(l=Math.round(l*e))}a.shapeArgs=m;h&&
m&&(a.plotX=h.x,a.plotY=h.y);l&&m&&(a.dlOptions=M(!0,{style:{width:l}},D(t)&&t));a.name=a.options.name||b.join("\u2229")})},drawPoints:function(){var a=this,b=a.chart,c=a.group,d=b.renderer;(a.points||[]).forEach(function(e){var f={zIndex:A(e.sets)?e.sets.length:0},g=e.shapeArgs;b.styledMode||J(f,a.pointAttribs(e,e.state));e.draw({isNew:!e.graphic,animatableAttribs:g,attribs:f,group:c,renderer:d,shapeType:g&&g.d?"path":"circle"})})},pointAttribs:function(a,b){var c=this.options||{};a=M(c,{color:a&&
a.color},a&&a.options||{},b&&c.states[b]||{});return{fill:e(a.color).setOpacity(a.opacity).brighten(a.brightness).get(),stroke:a.borderColor,"stroke-width":a.borderWidth,dashstyle:a.borderDashStyle}},animate:function(a){if(!a){var b=q(this.options.animation);this.points.forEach(function(a){var c=a.shapeArgs;if(a.graphic&&c){var d={},e={};c.d?d.opacity=.001:(d.r=0,e.r=c.r);a.graphic.attr(d).animate(e,b);c.d&&setTimeout(function(){a&&a.graphic&&a.graphic.animate({opacity:1})},b.duration)}},this)}},
utils:{addOverlapToSets:P,geometry:u,geometryCircles:d,getLabelWidth:K,getMarginFromCircles:F,getDistanceBetweenCirclesByOverlap:E,layoutGreedyVenn:L,loss:N,nelderMead:r,processVennData:S,sortByTotalOverlap:Q}};m={draw:m.draw,shouldDraw:function(){return!!this.shapeArgs},isValid:function(){return w(this.value)}};"";f.seriesType("venn","scatter",{borderColor:"#cccccc",borderDashStyle:"solid",borderWidth:1,brighten:0,clip:!1,colorByPoint:!0,dataLabels:{enabled:!0,verticalAlign:"middle",formatter:function(){return this.point.name}},
inactiveOtherPoints:!0,marker:!1,opacity:.75,showInLegend:!1,states:{hover:{opacity:1,borderColor:"#333333"},select:{color:"#cccccc",borderColor:"#000000",animation:!1},inactive:{opacity:.075}},tooltip:{pointFormat:"{point.name}: {point.value}"}},u,m);a(n.venn,"afterSetOptions",function(a){var b=a.options.states;this.is("venn")&&Object.keys(b).forEach(function(a){b[a].halo=!1})})});m(a,"masters/modules/venn.src.js",[],function(){})});
//# sourceMappingURL=venn.js.map