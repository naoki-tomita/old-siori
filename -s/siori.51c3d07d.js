parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"MvCY":[function(require,module,exports) {
"use strict";var e,t,n=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function u(e){try{s(r.next(e))}catch(t){i(t)}}function c(e){try{s(r.throw(e))}catch(t){i(t)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(u,c)}s((r=r.apply(e,t||[])).next())})},r=this&&this.__generator||function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(c){i=[6,c],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};function o(){exports.map=new google.maps.Map(document.getElementById("map"),{center:{lng:138,lat:38},zoom:6,streetViewControl:!1,mapTypeControl:!1,fullscreenControl:!1}),e=new google.maps.places.PlacesService(exports.map),exports._autoComplete=new google.maps.places.AutocompleteService,t=new google.maps.DirectionsService,exports.directionsRenderer=new google.maps.DirectionsRenderer({map:exports.map})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.initServices=o;var i=function(){function t(){}return t.prototype.getDetails=function(t){return n(this,void 0,void 0,function(){return r(this,function(n){return[2,new Promise(function(n){return e.getDetails({placeId:t},function(e){return n(e)})})]})})},t.prototype.textSearch=function(t){return n(this,void 0,void 0,function(){return r(this,function(n){return[2,new Promise(function(n){return e.textSearch({query:t,location:exports.map.getCenter(),radius:200},function(e){return n(e)})})]})})},t}(),u=function(){function e(){}return e.prototype.route=function(e){return n(this,void 0,void 0,function(){return r(this,function(n){return[2,new Promise(function(n){return t.route(e,function(e,t){return n({result:e,status:t})})})]})})},e}(),c=function(){function e(){}return e.prototype.getPlacePredictions=function(e){return n(this,void 0,void 0,function(){return r(this,function(t){return[2,new Promise(function(t){return exports._autoComplete.getPlacePredictions({input:e,location:exports.map.getCenter(),bounds:exports.map.getBounds()||void 0},function(e){return t(e)})})]})})},e}();exports.places=new i,exports.directions=new u,exports.autocomplete=new c;
},{}],"aJlN":[function(require,module,exports) {
module.exports="/marker.674b2d64.svg";
},{}],"Swy4":[function(require,module,exports) {
"use strict";function e(e,t){for(var r=[],n=0;n<Math.max(e.length,t.length);n++)r.push([e[n],t[n]]);return r}Object.defineProperty(exports,"__esModule",{value:!0}),exports.zip=e;
},{}],"WtjG":[function(require,module,exports) {
"use strict";var e=this&&this.__assign||function(){return(e=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},t=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function u(e){try{c(r.next(e))}catch(t){i(t)}}function a(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(u,a)}c((r=r.apply(e,t||[])).next())})},n=this&&this.__generator||function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(a){i=[6,a],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},r=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],u=0,a=i.length;u<a;u++,o++)r[o]=i[u];return r},o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var u=o(require("react")),a=require("./Map"),c=i(require("../marker.svg")),s=i(require("lodash.debounce")),l=require("./Utils"),f=u.createContext,d=u.useState,p=u.useContext,v=u.useEffect,h=f({}),m=h.Provider;function g(){return p(h)}function y(){var o=this,i=d({autocompleteResults:[],selectedLocations:[],limitedRoutes:[],currentLocation:null,directions:null,markers:[],route:[]}),u=i[0],f=i[1];function p(e){0===e.length?(a.map.panTo({lng:138,lat:38}),a.map.setZoom(6)):(a.map.fitBounds(function(e){var t;if(0===e.length)return new google.maps.LatLngBounds;var n=new google.maps.LatLngBounds(null===(t=e[0].geometry)||void 0===t?void 0:t.location);return e.forEach(function(e){return e.geometry&&n.extend(e.geometry.location)}),n}(e)),a.map.getZoom()>16&&a.map.setZoom(16))}function v(e){var r,o;return t(this,void 0,void 0,function(){return n(this,function(t){switch(t.label){case 0:return[4,a.directions.route({origin:null===(r=e[0].geometry)||void 0===r?void 0:r.location,waypoints:e.slice(1,-1).map(function(e){var t;return{location:null===(t=e.geometry)||void 0===t?void 0:t.location,stopover:!1}}),destination:null===(o=e[e.length-1].geometry)||void 0===o?void 0:o.location,travelMode:google.maps.TravelMode.DRIVING})];case 1:return[2,t.sent()]}})})}var h=s.default(function(r){return t(o,void 0,void 0,function(){var t;return n(this,function(n){switch(n.label){case 0:return[4,a.autocomplete.getPlacePredictions(r)];case 1:return t=n.sent(),Array.isArray(t)&&f(e(e({},u),{autocompleteResults:t})),[2]}})})},400);function m(r,o){return t(this,void 0,void 0,function(){var t,i,s;return n(this,function(n){switch(n.label){case 0:return u.markers.forEach(function(e){return e.setMap(null)}),d=r,h=a.map,m={url:c.default,scaledSize:new google.maps.Size(30,30)},t=d.map(function(e){var t;return new google.maps.Marker({position:null===(t=e.geometry)||void 0===t?void 0:t.location,map:h,icon:m})}),i=null,f(e(e({},u),{selectedLocations:r,route:o})),r.length>1?(s=y(o),[4,v(s.includes("start")&&s.includes("end")?l.zip(r,s).filter(function(e){e[0];return"unknown"!==e[1]}).map(function(e){return e[0]}):r)]):[3,2];case 1:return i=n.sent().result,a.directionsRenderer.setDirections(i),a.directionsRenderer.setMap(a.map),[3,3];case 2:a.directionsRenderer.setMap(null),n.label=3;case 3:return p(r),f(e(e({},u),{selectedLocations:r,route:o,markers:t,autocompleteResults:[],directions:i})),[2]}var d,h,m})})}function g(e){return t(this,void 0,void 0,function(){return n(this,function(t){return m(e,u.route),[2]})})}function y(e){var t=!1,n=!1;return u.selectedLocations.map(function(r){if(t){if(!n){if(e.includes(r.place_id||"dummy"))return n=!0,"end";if(2===e.length)return"waypoint"}}else if(e.includes(r.place_id||"dummy"))return t=!0,"start";return"unknown"})}return e(e({},u),{limitedRoutes:y(u.route),autocomplete:function(e){return t(this,void 0,void 0,function(){return n(this,function(t){return h(e),[2]})})},select:function(e){return t(this,void 0,void 0,function(){var t;return n(this,function(n){switch(n.label){case 0:return[4,a.places.getDetails(e)];case 1:return t=n.sent(),g(r(u.selectedLocations,[t])),[2]}})})},remove:function(e){return t(this,void 0,void 0,function(){return n(this,function(t){return g(u.selectedLocations.filter(function(t){return t.place_id!==e.place_id})),[2]})})},switch:function(e,o){return t(this,void 0,void 0,function(){var t,i;return n(this,function(n){return t=r(u.selectedLocations),i=t.splice(e,1),t.splice.apply(t,r([o,0],i)),g(t),[2]})})},limitedRoute:function(e){var t=u.route;t.includes(e)?m(u.selectedLocations,r(t.filter(function(t){return t!==e}))):2!==t.length&&m(u.selectedLocations,r(t,[e]))}})}exports.StoreProvider=function(e){var t=e.children,n=y();return u.createElement(m,{value:{map:n}},t)},exports.useContext=g;
},{"./Map":"MvCY","../marker.svg":"aJlN","./Utils":"Swy4"}],"ne1Q":[function(require,module,exports) {
"use strict";var e=this&&this.__assign||function(){return(e=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},t=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var n=t(require("react")),a=r(require("@material-ui/core/List")),l=r(require("@material-ui/core/ListItem")),i=r(require("@material-ui/core/ListItemText")),u=r(require("@material-ui/lab/Autocomplete")),o=require("../Store"),c=r(require("@material-ui/core/TextField")),d=r(require("@material-ui/core/Grid")),m=r(require("@material-ui/icons/LocationOn")),s=r(require("@material-ui/icons/Delete")),f=r(require("@material-ui/core/Typography")),p=r(require("@material-ui/core/IconButton")),E=r(require("@material-ui/icons/DirectionsCar")),v=r(require("@material-ui/icons/MoreVert")),h=r(require("@material-ui/icons/RadioButtonChecked")),x=r(require("@material-ui/icons/RadioButtonUnchecked")),g=require("react-smooth-dnd"),q=r(require("@material-ui/core/ListItemSecondaryAction")),y=r(require("@material-ui/core/ListItemIcon")),_=require("../Utils"),b=n.useState;exports.Search=function(){return n.createElement(n.Fragment,null,n.createElement(I,null),n.createElement(L,null),n.createElement(C,null))};var I=function(){var e=o.useContext().map;return console.log(e.limitedRoutes),n.createElement(a.default,null,n.createElement(g.Container,{onDrop:function(t){var r=t.removedIndex,n=t.addedIndex;return null!=r&&null!=n&&e.switch(r,n)}},_.zip(e.selectedLocations,e.limitedRoutes).map(function(t,r){var a=t[0],u=t[1];return n.createElement(g.Draggable,{key:r},n.createElement(l.default,{style:{cursor:"pointer"}},n.createElement(y.default,{onClick:function(){return e.limitedRoute(a.place_id)}},n.createElement(p.default,{edge:"end","aria-label":"delete"},"waypoint"===u?n.createElement(v.default,null):"unknown"===u?n.createElement(x.default,null):n.createElement(h.default,null))),n.createElement(i.default,null,a.name),n.createElement(q.default,{onClick:function(){return e.remove(a)}},n.createElement(p.default,{edge:"end","aria-label":"delete"},n.createElement(s.default,null)))))})))},C=function(){var e,t,r,u=o.useContext().map;return u.directions&&(null===(e=u.directions)||void 0===e?void 0:e.routes[0])&&n.createElement(a.default,{component:"div"},n.createElement(l.default,null,n.createElement(y.default,null,n.createElement(E.default,null)),n.createElement(i.default,{primary:null===(t=u.directions)||void 0===t?void 0:t.routes[0].legs[0].distance.text,secondary:null===(r=u.directions)||void 0===r?void 0:r.routes[0].legs[0].duration.text})))||null},L=function(){var t=b({searchText:""}),r=t[0],a=t[1],l=o.useContext().map;return n.createElement(u.default,{options:l.autocompleteResults,getOptionLabel:function(e){return e.structured_formatting.main_text},style:{width:300,margin:"0 15px 0 15px"},autoComplete:!0,includeInputInList:!0,inputValue:r.searchText,onChange:function(t,n,i){return"select-option"===i&&n&&(a(e(e({},r),{searchText:""})),l.select(n.place_id))},renderOption:function(e){return n.createElement(O,{main:e.structured_formatting.main_text,secondery:e.structured_formatting.secondary_text})},renderInput:function(t){return n.createElement(c.default,e({},t,{label:"経由地を追加する",value:r.searchText,onChange:function(e){return a({searchText:e.target.value}),l.autocomplete(e.target.value)}}))}})},O=function(e){var t=e.main,r=e.secondery;return n.createElement(d.default,{container:!0,alignItems:"center"},n.createElement(d.default,{item:!0},n.createElement(m.default,null)),n.createElement(d.default,{item:!0,xs:!0},n.createElement(f.default,{variant:"body1"},t),n.createElement(f.default,{variant:"body2",color:"textSecondary"},r)))};
},{"../Store":"WtjG","../Utils":"Swy4"}],"yKEB":[function(require,module,exports) {
"use strict";var e=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("react")),a=r(require("@material-ui/core/Button")),i=r(require("@material-ui/core/Drawer")),n=r(require("@material-ui/icons/ChevronRight")),l=r(require("@material-ui/icons/ChevronLeft")),u=require("./Search"),o=require("../Store"),c=t.useState;exports.App=function(e){e.map;var r=c({isDrawerOpen:!1}),s=r[0],p=r[1];return t.createElement(o.StoreProvider,null,t.createElement(a.default,{variant:"contained",color:"default",style:{position:"relative",zIndex:1,left:-36,top:120,height:60},onClick:function(){return p({isDrawerOpen:!s.isDrawerOpen})}},s.isDrawerOpen?t.createElement(l.default,{style:{position:"relative",left:18}}):t.createElement(n.default,{style:{position:"relative",left:18}})),t.createElement(i.default,{anchor:"left",open:s.isDrawerOpen,variant:"persistent"},t.createElement(a.default,{variant:"contained",color:"default",onClick:function(){return p({isDrawerOpen:!s.isDrawerOpen})},style:{margin:"8px 15px 8px 15px"}},t.createElement(l.default,null)),t.createElement(u.Search,null)))};
},{"./Search":"ne1Q","../Store":"WtjG"}],"zo2T":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,r,t,n){return new(t||(t=Promise))(function(o,i){function a(e){try{c(n.next(e))}catch(r){i(r)}}function u(e){try{c(n.throw(e))}catch(r){i(r)}}function c(e){var r;e.done?o(e.value):(r=e.value,r instanceof t?r:new t(function(e){e(r)})).then(a,u)}c((n=n.apply(e,r||[])).next())})},r=this&&this.__generator||function(e,r){var t,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=r.call(e,a)}catch(u){i=[6,u],n=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},t=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r};Object.defineProperty(exports,"__esModule",{value:!0});var n=require("@googlemaps/loader"),o=t(require("react")),i=require("react-dom"),a=require("./src/components/App"),u=require("./src/Map");function c(){return e(this,void 0,void 0,function(){return r(this,function(e){switch(e.label){case 0:return[4,new n.Loader({apiKey:process.env.API_KEY,libraries:["places"]}).load()];case 1:return e.sent(),u.initServices(),i.render(o.createElement(a.App,{map:{}}),document.getElementById("app")),[2]}})})}c();
},{"./src/components/App":"yKEB","./src/Map":"MvCY"}]},{},["zo2T"], null)
//# sourceMappingURL=/siori.51c3d07d.js.map