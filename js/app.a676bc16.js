(function(e){function t(t){for(var i,r,s=t[0],u=t[1],l=t[2],d=0,p=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);c&&c(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(i=!1)}i&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},a={app:0},o=[];function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var c=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"195e":function(e,t,n){"use strict";var i=n("e809"),a=n.n(i);a.a},"3c6f":function(e,t,n){"use strict";var i=n("fee6"),a=n.n(i);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.showPlayground?e._e():[e._m(0),e._v(" "),e._m(1),e._m(2),n("div",{staticStyle:{width:"500px",margin:"20px auto"}},[n("vue-tel-input",{attrs:{"preferred-countries":["us","gb","ua"],"valid-characters-only":!0},on:{input:e.onInput}})],1),e.phone.number?n("div",{staticStyle:{color:"#e83e8c"}},[n("span",[e._v(" Number: "),n("strong",[e._v(e._s(e.phone.number))]),e._v(", ")]),n("span",[e._v(" Is valid: "),n("strong",[e._v(e._s(e.phone.valid))]),e._v(", ")]),n("span",[e._v(" Country: "),n("strong",[e._v(e._s(e.phone.country))])])]):e._e()],n("div",{staticStyle:{"text-align":"center","margin-top":"20px"}},[e._v(" View "),n("span",{staticStyle:{"font-size":"15px"}},[e._v(" ["),n("a",{attrs:{href:"https://github.com/EducationLink/vue-tel-input"}},[e._v("github")]),e._v(", "),n("a",{attrs:{href:"https://github.com/EducationLink/vue-tel-input/releases"}},[e._v("changelog")]),e._v(", "),n("a",{attrs:{href:"https://www.npmjs.com/package/vue-tel-input"}},[e._v("npm")]),e._v(", "),n("a",{attrs:{href:""},on:{click:function(t){t.preventDefault(),e.showPlayground=!e.showPlayground}}},[e._v(" "+e._s(e.showPlayground?"homepage":"playground"))]),e._v("]. ")])]),e.showPlayground?n("div",{staticStyle:{"margin-top":"20px"}},[n("iframe",{staticStyle:{width:"100%",height:"80vh",border:"0","border-radius":"4px",overflow:"hidden"},attrs:{src:"https://codesandbox.io/embed/0yyyk45q7w?autoresize=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.vue",title:"Vue Template",allow:"gyroscope; payment; ambient-light-sensor; encrypted-media",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}})]):e._e()],2)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{attrs:{href:"https://www.npmjs.com/package/vue-tel-input"}},[n("img",{attrs:{src:"https://img.shields.io/npm/dt/vue-tel-input.svg"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{attrs:{href:"https://github.com/EducationLink/vue-tel-input"}},[n("img",{attrs:{src:"https://img.shields.io/github/stars/EducationLink/vue-tel-input.svg"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",{staticStyle:{color:"#999"}},[e._v("made with ❤ by some "),n("a",{staticStyle:{color:"inherit"},attrs:{href:"https://github.com/EducationLink/vue-tel-input/graphs/contributors"}},[e._v("awesome humans")]),e._v(".")])}],r=(n("b0c0"),{name:"App",data:function(){return{showPlayground:!1,phone:{number:"",valid:!1,country:void 0}}},methods:{onInput:function(e,t){var n=t.number,i=t.valid,a=t.country;this.phone.number=n.international,this.phone.valid=i,this.phone.country=a&&a.name}}}),s=r,u=n("2877"),l=Object(u["a"])(s,a,o,!1,null,null,null),c=l.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["vue-tel-input",e.wrapperClasses,{disabled:e.disabled}]},[n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.clickedOutside,expression:"clickedOutside"}],class:["vti__dropdown",{open:e.open}],attrs:{tabindex:e.dropdownOptions&&e.dropdownOptions.tabindex?e.dropdownOptions.tabindex:0},on:{keydown:[e.keyboardNav,function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.reset(t)}],click:e.toggleDropdown}},[n("span",{staticClass:"vti__selection"},[e.enabledFlags?n("div",{class:["vti__flag",e.activeCountry.iso2.toLowerCase()]}):e._e(),e.enabledCountryCode?n("span",{staticClass:"vti__country-code"},[e._v(" +"+e._s(e.activeCountry.dialCode)+" ")]):e._e(),e._t("arrow-icon",[n("span",{staticClass:"vti__dropdown-arrow"},[e._v(e._s(e.open?"▲":"▼"))])],{open:e.open})],2),n("ul",{directives:[{name:"show",rawName:"v-show",value:e.open,expression:"open"}],ref:"list",staticClass:"vti__dropdown-list",class:e.dropdownOpenDirection},e._l(e.sortedCountries,(function(t,i){return n("li",{key:t.iso2+(t.preferred?"-preferred":""),class:["vti__dropdown-item",e.getItemClass(i,t.iso2)],on:{click:function(n){return e.choose(t,!0)},mousemove:function(t){e.selectedIndex=i}}},[e.enabledFlags?n("div",{class:["vti__flag",t.iso2.toLowerCase()]}):e._e(),n("strong",[e._v(e._s(t.name))]),e.dropdownOptions&&!e.dropdownOptions.disabledDialCode?n("span",[e._v(" +"+e._s(t.dialCode)+" ")]):e._e()])})),0)]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],ref:"input",class:["vti__input",e.inputClasses],attrs:{type:"tel",autocomplete:e.autocomplete,autofocus:e.autofocus,disabled:e.disabled,id:e.inputId,maxlength:e.maxLen,name:e.name,placeholder:e.parsedPlaceholder,readonly:e.readonly,required:e.required,tabindex:e.inputOptions&&e.inputOptions.tabindex?e.inputOptions.tabindex:0},domProps:{value:e.phone},on:{blur:e.onBlur,focus:e.onFocus,input:[function(t){t.target.composing||(e.phone=t.target.value)},e.onInput],keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onEnter(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"space",32,t.key,[" ","Spacebar"])?null:e.onSpace(t)}]}})])},p=[],h=(n("99af"),n("4de4"),n("7db0"),n("c740"),n("caad"),n("c975"),n("d81d"),n("fb6a"),n("45fc"),n("a9e3"),n("d3b7"),n("4d63"),n("ac1f"),n("25f0"),n("2532"),n("2ca0"),n("498a"),n("bf19"),n("2909")),f=n("5530"),m=n("a689"),v=n.n(m),y=[["Afghanistan (‫افغانستان‬‎)","af","93"],["Albania (Shqipëri)","al","355"],["Algeria (‫الجزائر‬‎)","dz","213"],["American Samoa","as","1684"],["Andorra","ad","376"],["Angola","ao","244"],["Anguilla","ai","1264"],["Antigua and Barbuda","ag","1268"],["Argentina","ar","54"],["Armenia (Հայաստան)","am","374"],["Aruba","aw","297"],["Australia","au","61",0],["Austria (Österreich)","at","43"],["Azerbaijan (Azərbaycan)","az","994"],["Bahamas","bs","1242"],["Bahrain (‫البحرين‬‎)","bh","973"],["Bangladesh (বাংলাদেশ)","bd","880"],["Barbados","bb","1246"],["Belarus (Беларусь)","by","375"],["Belgium (België)","be","32"],["Belize","bz","501"],["Benin (Bénin)","bj","229"],["Bermuda","bm","1441"],["Bhutan (འབྲུག)","bt","975"],["Bolivia","bo","591"],["Bosnia and Herzegovina (Босна и Херцеговина)","ba","387"],["Botswana","bw","267"],["Brazil (Brasil)","br","55"],["British Indian Ocean Territory","io","246"],["British Virgin Islands","vg","1284"],["Brunei","bn","673"],["Bulgaria (България)","bg","359"],["Burkina Faso","bf","226"],["Burundi (Uburundi)","bi","257"],["Cambodia (កម្ពុជា)","kh","855"],["Cameroon (Cameroun)","cm","237"],["Canada","ca","1",1,["204","226","236","249","250","289","306","343","365","387","403","416","418","431","437","438","450","506","514","519","548","579","581","587","604","613","639","647","672","705","709","742","778","780","782","807","819","825","867","873","902","905"]],["Cape Verde (Kabu Verdi)","cv","238"],["Caribbean Netherlands","bq","599",1],["Cayman Islands","ky","1345"],["Central African Republic (République centrafricaine)","cf","236"],["Chad (Tchad)","td","235"],["Chile","cl","56"],["China (中国)","cn","86"],["Christmas Island","cx","61",2],["Cocos (Keeling) Islands","cc","61",1],["Colombia","co","57"],["Comoros (‫جزر القمر‬‎)","km","269"],["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)","cd","243"],["Congo (Republic) (Congo-Brazzaville)","cg","242"],["Cook Islands","ck","682"],["Costa Rica","cr","506"],["Côte d’Ivoire","ci","225"],["Croatia (Hrvatska)","hr","385"],["Cuba","cu","53"],["Curaçao","cw","599",0],["Cyprus (Κύπρος)","cy","357"],["Czech Republic (Česká republika)","cz","420"],["Denmark (Danmark)","dk","45"],["Djibouti","dj","253"],["Dominica","dm","1767"],["Dominican Republic (República Dominicana)","do","1",2,["809","829","849"]],["Ecuador","ec","593"],["Egypt (‫مصر‬‎)","eg","20"],["El Salvador","sv","503"],["Equatorial Guinea (Guinea Ecuatorial)","gq","240"],["Eritrea","er","291"],["Estonia (Eesti)","ee","372"],["Ethiopia","et","251"],["Falkland Islands (Islas Malvinas)","fk","500"],["Faroe Islands (Føroyar)","fo","298"],["Fiji","fj","679"],["Finland (Suomi)","fi","358",0],["France","fr","33"],["French Guiana (Guyane française)","gf","594"],["French Polynesia (Polynésie française)","pf","689"],["Gabon","ga","241"],["Gambia","gm","220"],["Georgia (საქართველო)","ge","995"],["Germany (Deutschland)","de","49"],["Ghana (Gaana)","gh","233"],["Gibraltar","gi","350"],["Greece (Ελλάδα)","gr","30"],["Greenland (Kalaallit Nunaat)","gl","299"],["Grenada","gd","1473"],["Guadeloupe","gp","590",0],["Guam","gu","1671"],["Guatemala","gt","502"],["Guernsey","gg","44",1],["Guinea (Guinée)","gn","224"],["Guinea-Bissau (Guiné Bissau)","gw","245"],["Guyana","gy","592"],["Haiti","ht","509"],["Honduras","hn","504"],["Hong Kong (香港)","hk","852"],["Hungary (Magyarország)","hu","36"],["Iceland (Ísland)","is","354"],["India (भारत)","in","91"],["Indonesia","id","62"],["Iran (‫ایران‬‎)","ir","98"],["Iraq (‫العراق‬‎)","iq","964"],["Ireland","ie","353"],["Isle of Man","im","44",2],["Israel (‫ישראל‬‎)","il","972"],["Italy (Italia)","it","39",0],["Jamaica","jm","1876"],["Japan (日本)","jp","81"],["Jersey","je","44",3],["Jordan (‫الأردن‬‎)","jo","962"],["Kazakhstan (Казахстан)","kz","7",1],["Kenya","ke","254"],["Kiribati","ki","686"],["Kosovo","xk","383"],["Kuwait (‫الكويت‬‎)","kw","965"],["Kyrgyzstan (Кыргызстан)","kg","996"],["Laos (ລາວ)","la","856"],["Latvia (Latvija)","lv","371"],["Lebanon (‫لبنان‬‎)","lb","961"],["Lesotho","ls","266"],["Liberia","lr","231"],["Libya (‫ليبيا‬‎)","ly","218"],["Liechtenstein","li","423"],["Lithuania (Lietuva)","lt","370"],["Luxembourg","lu","352"],["Macau (澳門)","mo","853"],["Macedonia (FYROM) (Македонија)","mk","389"],["Madagascar (Madagasikara)","mg","261"],["Malawi","mw","265"],["Malaysia","my","60"],["Maldives","mv","960"],["Mali","ml","223"],["Malta","mt","356"],["Marshall Islands","mh","692"],["Martinique","mq","596"],["Mauritania (‫موريتانيا‬‎)","mr","222"],["Mauritius (Moris)","mu","230"],["Mayotte","yt","262",1],["Mexico (México)","mx","52"],["Micronesia","fm","691"],["Moldova (Republica Moldova)","md","373"],["Monaco","mc","377"],["Mongolia (Монгол)","mn","976"],["Montenegro (Crna Gora)","me","382"],["Montserrat","ms","1664"],["Morocco (‫المغرب‬‎)","ma","212",0],["Mozambique (Moçambique)","mz","258"],["Myanmar (Burma) (မြန်မာ)","mm","95"],["Namibia (Namibië)","na","264"],["Nauru","nr","674"],["Nepal (नेपाल)","np","977"],["Netherlands (Nederland)","nl","31"],["New Caledonia (Nouvelle-Calédonie)","nc","687"],["New Zealand","nz","64"],["Nicaragua","ni","505"],["Niger (Nijar)","ne","227"],["Nigeria","ng","234"],["Niue","nu","683"],["Norfolk Island","nf","672"],["North Korea (조선 민주주의 인민 공화국)","kp","850"],["Northern Mariana Islands","mp","1670"],["Norway (Norge)","no","47",0],["Oman (‫عُمان‬‎)","om","968"],["Pakistan (‫پاکستان‬‎)","pk","92"],["Palau","pw","680"],["Palestine (‫فلسطين‬‎)","ps","970"],["Panama (Panamá)","pa","507"],["Papua New Guinea","pg","675"],["Paraguay","py","595"],["Peru (Perú)","pe","51"],["Philippines","ph","63"],["Poland (Polska)","pl","48"],["Portugal","pt","351"],["Puerto Rico","pr","1",3,["787","939"]],["Qatar (‫قطر‬‎)","qa","974"],["Réunion (La Réunion)","re","262",0],["Romania (România)","ro","40"],["Russia (Россия)","ru","7",0],["Rwanda","rw","250"],["Saint Barthélemy","bl","590",1],["Saint Helena","sh","290"],["Saint Kitts and Nevis","kn","1869"],["Saint Lucia","lc","1758"],["Saint Martin (Saint-Martin (partie française))","mf","590",2],["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)","pm","508"],["Saint Vincent and the Grenadines","vc","1784"],["Samoa","ws","685"],["San Marino","sm","378"],["São Tomé and Príncipe (São Tomé e Príncipe)","st","239"],["Saudi Arabia (‫المملكة العربية السعودية‬‎)","sa","966"],["Senegal (Sénégal)","sn","221"],["Serbia (Србија)","rs","381"],["Seychelles","sc","248"],["Sierra Leone","sl","232"],["Singapore","sg","65"],["Sint Maarten","sx","1721"],["Slovakia (Slovensko)","sk","421"],["Slovenia (Slovenija)","si","386"],["Solomon Islands","sb","677"],["Somalia (Soomaaliya)","so","252"],["South Africa","za","27"],["South Korea (대한민국)","kr","82"],["South Sudan (‫جنوب السودان‬‎)","ss","211"],["Spain (España)","es","34"],["Sri Lanka (ශ්‍රී ලංකාව)","lk","94"],["Sudan (‫السودان‬‎)","sd","249"],["Suriname","sr","597"],["Svalbard and Jan Mayen","sj","47",1],["Swaziland","sz","268"],["Sweden (Sverige)","se","46"],["Switzerland (Schweiz)","ch","41"],["Syria (‫سوريا‬‎)","sy","963"],["Taiwan (台灣)","tw","886"],["Tajikistan","tj","992"],["Tanzania","tz","255"],["Thailand (ไทย)","th","66"],["Timor-Leste","tl","670"],["Togo","tg","228"],["Tokelau","tk","690"],["Tonga","to","676"],["Trinidad and Tobago","tt","1868"],["Tunisia (‫تونس‬‎)","tn","216"],["Turkey (Türkiye)","tr","90"],["Turkmenistan","tm","993"],["Turks and Caicos Islands","tc","1649"],["Tuvalu","tv","688"],["U.S. Virgin Islands","vi","1340"],["Uganda","ug","256"],["Ukraine (Україна)","ua","380"],["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)","ae","971"],["United Kingdom","gb","44",0],["United States","us","1",0],["Uruguay","uy","598"],["Uzbekistan (Oʻzbekiston)","uz","998"],["Vanuatu","vu","678"],["Vatican City (Città del Vaticano)","va","39",1],["Venezuela","ve","58"],["Vietnam (Việt Nam)","vn","84"],["Wallis and Futuna (Wallis-et-Futuna)","wf","681"],["Western Sahara (‫الصحراء الغربية‬‎)","eh","212",1],["Yemen (‫اليمن‬‎)","ye","967"],["Zambia","zm","260"],["Zimbabwe","zw","263"],["Åland Islands","ax","358",1]],g=y.map((function(e){return{name:e[0],iso2:e[1].toUpperCase(),dialCode:e[2],priority:e[3]||0,areaCodes:e[4]||null}}));function b(){return fetch("https://ip2c.org/s").then((function(e){return e.text()})).then((function(e){var t=(e||"").toString();if(!t||"1"!==t[0])throw new Error("unable to fetch the country");return t.substr(2,2)}))}function C(e,t){if(e.setSelectionRange)e.focus(),e.setSelectionRange(t,t);else if(e.createTextRange){var n=e.createTextRange();n.collapse(!0),n.moveEnd("character",t),n.moveStart("character",t),n.select()}}var w={allCountries:g,autocomplete:"on",autofocus:!1,customValidate:!1,defaultCountry:"",disabled:!1,disabledFetchingCountry:!1,dropdownOptions:{},dynamicPlaceholder:!1,enabledCountryCode:!1,enabledFlags:!0,ignoredCountries:[],inputClasses:"",inputId:"",inputOptions:{},invalidMsg:"",maxLen:25,mode:"",name:"telephone",onlyCountries:[],placeholder:"Enter a phone number",preferredCountries:[],readonly:!1,required:!1,validCharactersOnly:!1,wrapperClasses:""},k={options:Object(f["a"])({},w)};function _(e,t){var n=t||[],i=e.parentNode;return i?_(i,n.concat(i)):n}var S={bind:function(e,t,n){if("function"!==typeof t.value){var i=n.context.name,a="[Vue-click-outside:] provided expression ".concat(t.expression," is not a function, but has to be");i&&(a+="Found in component ".concat(i)),console.warn(a)}var o=t.modifiers.bubble,r=function(n){var i=n.path||!!n.composedPath&&n.composedPath()||_(n.target);(o||i.length&&!e.contains(i[0])&&e!==i[0])&&t.value(n)};e.__vueClickOutside__=r,document.addEventListener("click",r)},unbind:function(e){document.removeEventListener("click",e.__vueClickOutside__),e.__vueClickOutside__=null}};function O(e){var t=k.options[e];return"undefined"===typeof t?k.options[e]:t}var x={name:"VueTelInput",directives:{clickOutside:S},props:{value:{type:String,default:""},allCountries:{type:Array,default:function(){return O("allCountries")}},autocomplete:{type:String,default:function(){return O("autocomplete")}},autofocus:{type:Boolean,default:function(){return O("autofocus")}},customValidate:{type:[Boolean,RegExp],default:function(){return O("customValidate")}},defaultCountry:{type:String,default:function(){return O("defaultCountry")}},disabled:{type:Boolean,default:function(){return O("disabled")}},disabledFetchingCountry:{type:Boolean,default:function(){return O("disabledFetchingCountry")}},dropdownOptions:{type:Object,default:function(){return O("dropdownOptions")}},dynamicPlaceholder:{type:Boolean,default:function(){return O("dynamicPlaceholder")}},enabledCountryCode:{type:Boolean,default:function(){return O("enabledCountryCode")}},enabledFlags:{type:Boolean,default:function(){return O("enabledFlags")}},ignoredCountries:{type:Array,default:function(){return O("ignoredCountries")}},inputClasses:{type:[String,Array,Object],default:function(){return O("inputClasses")}},inputId:{type:String,default:function(){return O("inputId")}},inputOptions:{type:Object,default:function(){return O("inputOptions")}},invalidMsg:{type:String,default:function(){return O("invalidMsg")}},maxLen:{type:Number,default:function(){return O("maxLen")}},name:{type:String,default:function(){return O("name")}},mode:{type:String,default:function(){return O("mode")}},onlyCountries:{type:Array,default:function(){return O("onlyCountries")}},placeholder:{type:String,default:function(){return O("placeholder")}},preferredCountries:{type:Array,default:function(){return O("preferredCountries")}},readonly:{type:Boolean,default:function(){return O("readonly")}},required:{type:Boolean,default:function(){return O("required")}},validCharactersOnly:{type:Boolean,default:function(){return O("validCharactersOnly")}},wrapperClasses:{type:[String,Array,Object],default:function(){return O("wrapperClasses")}}},data:function(){return{phone:"",activeCountry:{iso2:""},open:!1,finishMounted:!1,selectedIndex:null,typeToFindInput:"",typeToFindTimer:null,cursorPosition:0,dropdownOpenDirection:"below"}},computed:{parsedPlaceholder:function(){if(!this.finishMounted)return"";if(this.dynamicPlaceholder){var e=this.mode||"international";return v.a.getExample(this.activeCountry.iso2,"mobile").getNumber(e)}return this.placeholder},parsedMode:function(){if(this.customValidate)return"input";if(this.mode){if(["international","national"].includes(this.mode))return this.mode;console.error('Invalid value of prop "mode"')}return this.phone&&"+"===this.phone[0]?"international":"national"},filteredCountries:function(){var e=this;return this.onlyCountries.length?this.onlyCountries.map((function(t){return e.allCountries.find((function(e){return e.iso2===t.toUpperCase()}))})).filter(Boolean):this.ignoredCountries.length?this.allCountries.filter((function(t){var n=t.iso2;return!e.ignoredCountries.includes(n.toUpperCase())&&!e.ignoredCountries.includes(n.toLowerCase())})):this.allCountries},sortedCountries:function(){var e=this.getCountries(this.preferredCountries).map((function(e){return Object(f["a"])({},e,{preferred:!0})}));return[].concat(Object(h["a"])(e),Object(h["a"])(this.filteredCountries))},phoneObject:function(){var e=v()(this.phone,this.activeCountry.iso2).toJSON();return Object.assign(e,{isValid:e.valid,country:this.activeCountry}),e},phoneText:function(){var e="input";return this.phoneObject.valid&&(e=this.parsedMode),this.phoneObject.number[e]||""}},watch:{"phoneObject.valid":function(e){e&&(this.phone=this.phoneText),this.$emit("validate",this.phoneObject),this.$emit("onValidate",this.phoneObject)},value:function(){this.phone=this.value},open:function(e){e?(this.setDropdownPosition(),this.$emit("open")):this.$emit("close")},phone:function(e,t){var n=this,i=this.validCharactersOnly&&!this.testCharacters(),a=this.customValidate&&!this.testCustomValidate();if(i||a)this.$nextTick((function(){n.phone=t}));else if(e&&"+"===e[0]){var o=v()(e).getRegionCode();o&&(this.activeCountry=this.findCountry(o)||this.activeCountry)}this.cursorPosition<t.length&&this.$nextTick((function(){C(n.$refs.input,n.cursorPosition)}))},activeCountry:function(e){e&&e.iso2&&this.$emit("country-changed",e)}},mounted:function(){var e=this;this.initializeCountry().then((function(){!e.phone&&e.inputOptions&&e.inputOptions.showDialCode&&e.activeCountry.dialCode&&(e.phone="+".concat(e.activeCountry.dialCode)),e.$emit("validate",e.phoneObject),e.$emit("onValidate",e.phoneObject)})).catch(console.error).finally((function(){e.finishMounted=!0}))},created:function(){this.value&&(this.phone=this.value.trim())},methods:{initializeCountry:function(){var e=this;return new Promise((function(t){if(e.phone&&"+"===e.phone[0]){var n=v()(e.phone).getRegionCode();if(n)return e.choose(n),void t()}if(e.defaultCountry){var i=e.findCountry(e.defaultCountry);if(i)return e.choose(i),void t()}var a=e.findCountry(e.preferredCountries[0])||e.filteredCountries[0];e.disabledFetchingCountry?(e.choose(a),t()):b().then((function(t){e.activeCountry=e.findCountry(t)||e.activeCountry})).catch((function(t){console.warn(t),e.choose(a)})).finally((function(){t()}))}))},getCountries:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.map((function(t){return e.findCountry(t)})).filter(Boolean)},findCountry:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return this.filteredCountries.find((function(t){return t.iso2===e.toUpperCase()}))},getItemClass:function(e,t){var n=this.selectedIndex===e,i=e===this.preferredCountries.length-1,a=this.preferredCountries.some((function(e){return e.toUpperCase()===t}));return{highlighted:n,"last-preferred":i,preferred:a}},choose:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e;"string"===typeof n&&(n=this.findCountry(n)),n&&(this.activeCountry=n||this.activeCountry||{},this.phone&&"+"===this.phone[0]&&this.activeCountry.iso2&&this.phoneObject.number.national?this.phone=v()(this.phoneObject.number.national,this.activeCountry.iso2).getNumber("international"):this.inputOptions&&this.inputOptions.showDialCode&&n&&(this.phone="+".concat(n.dialCode)),t&&(this.$emit("input",this.phoneText,this.phoneObject),this.$emit("onInput",this.phoneObject)))},testCharacters:function(){var e=/^[()\-+0-9\s]*$/;return e.test(this.phone)},testCustomValidate:function(){return this.customValidate instanceof RegExp&&this.customValidate.test(this.phone)},onInput:function(e){this.validCharactersOnly&&!this.testCharacters()||this.customValidate&&!this.testCustomValidate()||(this.$refs.input.setCustomValidity(this.phoneObject.valid?"":this.invalidMsg),this.$emit("input",this.phoneText,this.phoneObject),this.$emit("onInput",this.phoneObject),e&&e.target&&(this.cursorPosition=e.target.selectionStart))},onBlur:function(){this.$emit("blur"),this.$emit("onBlur")},onFocus:function(){this.$emit("focus")},onEnter:function(){this.$emit("enter"),this.$emit("onEnter")},onSpace:function(){this.$emit("space"),this.$emit("onSpace")},focus:function(){this.$refs.input.focus()},toggleDropdown:function(){this.disabled||(this.open=!this.open)},clickedOutside:function(){this.open=!1},keyboardNav:function(e){var t=this;if(40===e.keyCode){e.preventDefault(),this.open=!0,null===this.selectedIndex?this.selectedIndex=0:this.selectedIndex=Math.min(this.sortedCountries.length-1,this.selectedIndex+1);var n=this.$refs.list.children[this.selectedIndex];n.offsetTop+n.clientHeight>this.$refs.list.scrollTop+this.$refs.list.clientHeight&&(this.$refs.list.scrollTop=n.offsetTop-this.$refs.list.clientHeight+n.clientHeight)}else if(38===e.keyCode){e.preventDefault(),this.open=!0,null===this.selectedIndex?this.selectedIndex=this.sortedCountries.length-1:this.selectedIndex=Math.max(0,this.selectedIndex-1);var i=this.$refs.list.children[this.selectedIndex];i.offsetTop<this.$refs.list.scrollTop&&(this.$refs.list.scrollTop=i.offsetTop)}else if(13===e.keyCode)null!==this.selectedIndex&&this.choose(this.sortedCountries[this.selectedIndex]),this.open=!this.open;else{this.typeToFindInput+=e.key,clearTimeout(this.typeToFindTimer),this.typeToFindTimer=setTimeout((function(){t.typeToFindInput=""}),700);var a=this.sortedCountries.slice(this.preferredCountries.length).findIndex((function(e){return e.name.toLowerCase().startsWith(t.typeToFindInput)}));if(a>=0){this.selectedIndex=this.preferredCountries.length+a;var o=this.$refs.list.children[this.selectedIndex],r=o.offsetTop<this.$refs.list.scrollTop,s=o.offsetTop+o.clientHeight>this.$refs.list.scrollTop+this.$refs.list.clientHeight;(r||s)&&(this.$refs.list.scrollTop=o.offsetTop-this.$refs.list.clientHeight/2)}}},reset:function(){this.selectedIndex=this.sortedCountries.map((function(e){return e.iso2})).indexOf(this.activeCountry.iso2),this.open=!1},setDropdownPosition:function(){var e=window.innerHeight-this.$el.getBoundingClientRect().bottom,t=e>200;this.dropdownOpenDirection=t?"below":"above"}}},I=x,T=(n("3c6f"),n("195e"),Object(u["a"])(I,d,p,!1,null,null,null)),M=T.exports;i["a"].config.productionTip=!1,i["a"].component("vue-tel-input",M),new i["a"]({render:function(e){return e(c)}}).$mount("#app")},e809:function(e,t,n){},fee6:function(e,t,n){}});
//# sourceMappingURL=app.a676bc16.js.map