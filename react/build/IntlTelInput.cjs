var x=Object.create;var v=Object.defineProperty;var P=Object.getOwnPropertyDescriptor;var H=Object.getOwnPropertyNames;var O=Object.getPrototypeOf,R=Object.prototype.hasOwnProperty;var z=(a,t)=>{for(var e in t)v(a,e,{get:t[e],enumerable:!0})},w=(a,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of H(t))!R.call(a,n)&&n!==e&&v(a,n,{get:()=>t[n],enumerable:!(i=P(t,n))||i.enumerable});return a};var j=(a,t,e)=>(e=a!=null?x(O(a)):{},w(t||!a||!a.__esModule?v(e,"default",{value:a,enumerable:!0}):e,a)),F=a=>w(v({},"__esModule",{value:!0}),a);var G={};z(G,{default:()=>q});module.exports=F(G);var L=[["af","93"],["al","355"],["dz","213"],["as","1",5,["684"]],["ad","376"],["ao","244"],["ai","1",6,["264"]],["ag","1",7,["268"]],["ar","54"],["am","374"],["aw","297"],["ac","247"],["au","61",0],["at","43"],["az","994"],["bs","1",8,["242"]],["bh","973"],["bd","880"],["bb","1",9,["246"]],["by","375"],["be","32"],["bz","501"],["bj","229"],["bm","1",10,["441"]],["bt","975"],["bo","591"],["ba","387"],["bw","267"],["br","55"],["io","246"],["vg","1",11,["284"]],["bn","673"],["bg","359"],["bf","226"],["bi","257"],["kh","855"],["cm","237"],["ca","1",1,["204","226","236","249","250","263","289","306","343","354","365","367","368","382","387","403","416","418","428","431","437","438","450","584","468","474","506","514","519","548","579","581","584","587","604","613","639","647","672","683","705","709","742","753","778","780","782","807","819","825","867","873","879","902","905"]],["cv","238"],["bq","599",1,["3","4","7"]],["ky","1",12,["345"]],["cf","236"],["td","235"],["cl","56"],["cn","86"],["cx","61",2,["89164"]],["cc","61",1,["89162"]],["co","57"],["km","269"],["cg","242"],["cd","243"],["ck","682"],["cr","506"],["ci","225"],["hr","385"],["cu","53"],["cw","599",0],["cy","357"],["cz","420"],["dk","45"],["dj","253"],["dm","1",13,["767"]],["do","1",2,["809","829","849"]],["ec","593"],["eg","20"],["sv","503"],["gq","240"],["er","291"],["ee","372"],["sz","268"],["et","251"],["fk","500"],["fo","298"],["fj","679"],["fi","358",0],["fr","33"],["gf","594"],["pf","689"],["ga","241"],["gm","220"],["ge","995"],["de","49"],["gh","233"],["gi","350"],["gr","30"],["gl","299"],["gd","1",14,["473"]],["gp","590",0],["gu","1",15,["671"]],["gt","502"],["gg","44",1,["1481","7781","7839","7911"]],["gn","224"],["gw","245"],["gy","592"],["ht","509"],["hn","504"],["hk","852"],["hu","36"],["is","354"],["in","91"],["id","62"],["ir","98"],["iq","964"],["ie","353"],["im","44",2,["1624","74576","7524","7924","7624"]],["il","972"],["it","39",0],["jm","1",4,["876","658"]],["jp","81"],["je","44",3,["1534","7509","7700","7797","7829","7937"]],["jo","962"],["kz","7",1,["33","7"]],["ke","254"],["ki","686"],["xk","383"],["kw","965"],["kg","996"],["la","856"],["lv","371"],["lb","961"],["ls","266"],["lr","231"],["ly","218"],["li","423"],["lt","370"],["lu","352"],["mo","853"],["mg","261"],["mw","265"],["my","60"],["mv","960"],["ml","223"],["mt","356"],["mh","692"],["mq","596"],["mr","222"],["mu","230"],["yt","262",1,["269","639"]],["mx","52"],["fm","691"],["md","373"],["mc","377"],["mn","976"],["me","382"],["ms","1",16,["664"]],["ma","212",0],["mz","258"],["mm","95"],["na","264"],["nr","674"],["np","977"],["nl","31"],["nc","687"],["nz","64"],["ni","505"],["ne","227"],["ng","234"],["nu","683"],["nf","672"],["kp","850"],["mk","389"],["mp","1",17,["670"]],["no","47",0],["om","968"],["pk","92"],["pw","680"],["ps","970"],["pa","507"],["pg","675"],["py","595"],["pe","51"],["ph","63"],["pl","48"],["pt","351"],["pr","1",3,["787","939"]],["qa","974"],["re","262",0],["ro","40"],["ru","7",0],["rw","250"],["ws","685"],["sm","378"],["st","239"],["sa","966"],["sn","221"],["rs","381"],["sc","248"],["sl","232"],["sg","65"],["sx","1",21,["721"]],["sk","421"],["si","386"],["sb","677"],["so","252"],["za","27"],["kr","82"],["ss","211"],["es","34"],["lk","94"],["bl","590",1],["sh","290"],["kn","1",18,["869"]],["lc","1",19,["758"]],["mf","590",2],["pm","508"],["vc","1",20,["784"]],["sd","249"],["sr","597"],["sj","47",1,["79"]],["se","46"],["ch","41"],["sy","963"],["tw","886"],["tj","992"],["tz","255"],["th","66"],["tl","670"],["tg","228"],["tk","690"],["to","676"],["tt","1",22,["868"]],["tn","216"],["tr","90"],["tm","993"],["tc","1",23,["649"]],["tv","688"],["ug","256"],["ua","380"],["ae","971"],["gb","44",0],["us","1",0],["uy","598"],["vi","1",24,["340"]],["uz","998"],["vu","678"],["va","39",1,["06698"]],["ve","58"],["vn","84"],["wf","681"],["eh","212",1,["5288","5289"]],["ye","967"],["zm","260"],["zw","263"],["ax","358",1,["18"]]],E=[];for(let a=0;a<L.length;a++){let t=L[a];E[a]={name:"",iso2:t[0],dialCode:t[1],priority:t[2]||0,areaCodes:t[3]||null,nodeById:{}}}var f=E;var T={af:"Afghanistan",ax:"\xC5land Islands",al:"Albania",dz:"Algeria",as:"American Samoa",ad:"Andorra",ao:"Angola",ai:"Anguilla",aq:"Antarctica",ag:"Antigua & Barbuda",ar:"Argentina",am:"Armenia",aw:"Aruba",au:"Australia",at:"Austria",az:"Azerbaijan",bs:"Bahamas",bh:"Bahrain",bd:"Bangladesh",bb:"Barbados",by:"Belarus",be:"Belgium",bz:"Belize",bj:"Benin",bm:"Bermuda",bt:"Bhutan",bo:"Bolivia",ba:"Bosnia & Herzegovina",bw:"Botswana",bv:"Bouvet Island",br:"Brazil",io:"British Indian Ocean Territory",vg:"British Virgin Islands",bn:"Brunei",bg:"Bulgaria",bf:"Burkina Faso",bi:"Burundi",kh:"Cambodia",cm:"Cameroon",ca:"Canada",cv:"Cape Verde",bq:"Caribbean Netherlands",ky:"Cayman Islands",cf:"Central African Republic",td:"Chad",cl:"Chile",cn:"China",cx:"Christmas Island",cc:"Cocos (Keeling) Islands",co:"Colombia",km:"Comoros",cg:"Congo - Brazzaville",cd:"Congo - Kinshasa",ck:"Cook Islands",cr:"Costa Rica",ci:"C\xF4te d\u2019Ivoire",hr:"Croatia",cu:"Cuba",cw:"Cura\xE7ao",cy:"Cyprus",cz:"Czechia",dk:"Denmark",dj:"Djibouti",dm:"Dominica",do:"Dominican Republic",ec:"Ecuador",eg:"Egypt",sv:"El Salvador",gq:"Equatorial Guinea",er:"Eritrea",ee:"Estonia",sz:"Eswatini",et:"Ethiopia",fk:"Falkland Islands",fo:"Faroe Islands",fj:"Fiji",fi:"Finland",fr:"France",gf:"French Guiana",pf:"French Polynesia",tf:"French Southern Territories",ga:"Gabon",gm:"Gambia",ge:"Georgia",de:"Germany",gh:"Ghana",gi:"Gibraltar",gr:"Greece",gl:"Greenland",gd:"Grenada",gp:"Guadeloupe",gu:"Guam",gt:"Guatemala",gg:"Guernsey",gn:"Guinea",gw:"Guinea-Bissau",gy:"Guyana",ht:"Haiti",hm:"Heard & McDonald Islands",hn:"Honduras",hk:"Hong Kong SAR China",hu:"Hungary",is:"Iceland",in:"India",id:"Indonesia",ir:"Iran",iq:"Iraq",ie:"Ireland",im:"Isle of Man",il:"Israel",it:"Italy",jm:"Jamaica",jp:"Japan",je:"Jersey",jo:"Jordan",kz:"Kazakhstan",ke:"Kenya",ki:"Kiribati",kw:"Kuwait",kg:"Kyrgyzstan",la:"Laos",lv:"Latvia",lb:"Lebanon",ls:"Lesotho",lr:"Liberia",ly:"Libya",li:"Liechtenstein",lt:"Lithuania",lu:"Luxembourg",mo:"Macao SAR China",mg:"Madagascar",mw:"Malawi",my:"Malaysia",mv:"Maldives",ml:"Mali",mt:"Malta",mh:"Marshall Islands",mq:"Martinique",mr:"Mauritania",mu:"Mauritius",yt:"Mayotte",mx:"Mexico",fm:"Micronesia",md:"Moldova",mc:"Monaco",mn:"Mongolia",me:"Montenegro",ms:"Montserrat",ma:"Morocco",mz:"Mozambique",mm:"Myanmar (Burma)",na:"Namibia",nr:"Nauru",np:"Nepal",nl:"Netherlands",nc:"New Caledonia",nz:"New Zealand",ni:"Nicaragua",ne:"Niger",ng:"Nigeria",nu:"Niue",nf:"Norfolk Island",kp:"North Korea",mk:"North Macedonia",mp:"Northern Mariana Islands",no:"Norway",om:"Oman",pk:"Pakistan",pw:"Palau",ps:"Palestinian Territories",pa:"Panama",pg:"Papua New Guinea",py:"Paraguay",pe:"Peru",ph:"Philippines",pn:"Pitcairn Islands",pl:"Poland",pt:"Portugal",pr:"Puerto Rico",qa:"Qatar",re:"R\xE9union",ro:"Romania",ru:"Russia",rw:"Rwanda",ws:"Samoa",sm:"San Marino",st:"S\xE3o Tom\xE9 & Pr\xEDncipe",sa:"Saudi Arabia",sn:"Senegal",rs:"Serbia",sc:"Seychelles",sl:"Sierra Leone",sg:"Singapore",sx:"Sint Maarten",sk:"Slovakia",si:"Slovenia",sb:"Solomon Islands",so:"Somalia",za:"South Africa",gs:"South Georgia & South Sandwich Islands",kr:"South Korea",ss:"South Sudan",es:"Spain",lk:"Sri Lanka",bl:"St. Barth\xE9lemy",sh:"St. Helena",kn:"St. Kitts & Nevis",lc:"St. Lucia",mf:"St. Martin",pm:"St. Pierre & Miquelon",vc:"St. Vincent & Grenadines",sd:"Sudan",sr:"Suriname",sj:"Svalbard & Jan Mayen",se:"Sweden",ch:"Switzerland",sy:"Syria",tw:"Taiwan",tj:"Tajikistan",tz:"Tanzania",th:"Thailand",tl:"Timor-Leste",tg:"Togo",tk:"Tokelau",to:"Tonga",tt:"Trinidad & Tobago",tn:"Tunisia",tr:"Turkey",tm:"Turkmenistan",tc:"Turks & Caicos Islands",tv:"Tuvalu",um:"U.S. Outlying Islands",vi:"U.S. Virgin Islands",ug:"Uganda",ua:"Ukraine",ae:"United Arab Emirates",gb:"United Kingdom",us:"United States",uy:"Uruguay",uz:"Uzbekistan",vu:"Vanuatu",va:"Vatican City",ve:"Venezuela",vn:"Vietnam",wf:"Wallis & Futuna",eh:"Western Sahara",ye:"Yemen",zm:"Zambia",zw:"Zimbabwe"};var D={selectedCountryAriaLabel:"Selected country",noCountrySelected:"No country selected",countryListAriaLabel:"List of countries",searchPlaceholder:"Search",zeroSearchResults:"No results found",oneSearchResult:"1 result found",multipleSearchResults:"${count} results found",ac:"Ascension Island",xk:"Kosovo"};var k={...T,...D};var B=0,S={allowDropdown:!0,autoPlaceholder:"polite",containerClass:"",countryOrder:null,customPlaceholder:null,dropdownContainer:null,excludeCountries:[],fixDropdownWidth:!0,formatAsYouType:!0,formatOnDisplay:!0,geoIpLookup:null,hiddenInput:null,i18n:{},initialCountry:"",nationalMode:!0,onlyCountries:[],placeholderNumberType:"MOBILE",showFlags:!0,separateDialCode:!1,strictMode:!1,useFullscreenPopup:typeof navigator<"u"&&typeof window<"u"?/Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=500:!1,utilsScript:""},K=["800","822","833","844","855","866","877","880","881","882","883","884","885","886","887","888","889"],_=a=>a.replace(/\D/g,""),N=(a="")=>a.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase(),A=a=>{let t=_(a);if(t.charAt(0)==="1"){let e=t.substr(1,3);return K.indexOf(e)!==-1}return!1},U=(a,t,e,i)=>{if(e===0&&!i)return 0;let n=0;for(let s=0;s<t.length;s++){if(/[+0-9]/.test(t[s])&&n++,n===a&&!i)return s+1;if(i&&n===a+1)return s}return t.length},p=(a,t,e)=>{let i=document.createElement(a);return t&&Object.entries(t).forEach(([n,s])=>i.setAttribute(n,s)),e&&e.appendChild(i),i},b=a=>{let{instances:t}=o;Object.values(t).forEach(e=>e[a]())},I=class{id;promise;telInput;highlightedItem;options;hadInitialPlaceholder;isRTL;selectedCountryData;countries;dialCodeMaxLen;dialCodeToIso2Map;dialCodes;countryContainer;selectedCountry;selectedCountryInner;selectedCountryA11yText;selectedDialCode;dropdownArrow;dropdownContent;searchInput;searchResultsA11yText;countryList;dropdown;hiddenInput;hiddenInputCountry;maxCoreNumberLength;defaultCountry;_handleHiddenInputSubmit;_handleLabelClick;_handleClickSelectedCountry;_handleCountryContainerKeydown;_handleInputEvent;_handleKeydownEvent;_handleWindowScroll;_handleMouseoverCountryList;_handleClickCountryList;_handleClickOffToClose;_handleKeydownOnDropdown;_handleSearchChange;resolveAutoCountryPromise;rejectAutoCountryPromise;resolveUtilsScriptPromise;rejectUtilsScriptPromise;constructor(t,e={}){this.id=B++,this.telInput=t,this.highlightedItem=null,this.options=Object.assign({},S,e),this.hadInitialPlaceholder=!!t.getAttribute("placeholder")}_init(){this.options.useFullscreenPopup&&(this.options.fixDropdownWidth=!1),this.options.separateDialCode&&(this.options.allowDropdown=!0,this.options.nationalMode=!1),!this.options.showFlags&&!this.options.separateDialCode&&(this.options.nationalMode=!1),this.options.useFullscreenPopup&&!this.options.dropdownContainer&&(this.options.dropdownContainer=document.body),this.isRTL=!!this.telInput.closest("[dir=rtl]"),this.options.i18n={...k,...this.options.i18n};let t=new Promise((i,n)=>{this.resolveAutoCountryPromise=i,this.rejectAutoCountryPromise=n}),e=new Promise((i,n)=>{this.resolveUtilsScriptPromise=i,this.rejectUtilsScriptPromise=n});this.promise=Promise.all([t,e]),this.selectedCountryData={},this._processCountryData(),this._generateMarkup(),this._setInitialState(),this._initListeners(),this._initRequests()}_processCountryData(){this._processAllCountries(),this._processDialCodes(),this._translateCountryNames(),this.options.countryOrder&&(this.options.countryOrder=this.options.countryOrder.map(t=>t.toLowerCase())),this._sortCountries()}_sortCountries(){this.countries.sort((t,e)=>{let{countryOrder:i}=this.options;if(i){let n=i.indexOf(t.iso2),s=i.indexOf(e.iso2),r=n>-1,l=s>-1;if(r||l)return r&&l?n-s:r?-1:1}return t.name<e.name?-1:t.name>e.name?1:0})}_addToDialCodeMap(t,e,i){e.length>this.dialCodeMaxLen&&(this.dialCodeMaxLen=e.length),this.dialCodeToIso2Map.hasOwnProperty(e)||(this.dialCodeToIso2Map[e]=[]);for(let s=0;s<this.dialCodeToIso2Map[e].length;s++)if(this.dialCodeToIso2Map[e][s]===t)return;let n=i!==void 0?i:this.dialCodeToIso2Map[e].length;this.dialCodeToIso2Map[e][n]=t}_processAllCountries(){let{onlyCountries:t,excludeCountries:e}=this.options;if(t.length){let i=t.map(n=>n.toLowerCase());this.countries=f.filter(n=>i.indexOf(n.iso2)>-1)}else if(e.length){let i=e.map(n=>n.toLowerCase());this.countries=f.filter(n=>i.indexOf(n.iso2)===-1)}else this.countries=f}_translateCountryNames(){for(let t=0;t<this.countries.length;t++){let e=this.countries[t].iso2.toLowerCase();this.options.i18n.hasOwnProperty(e)&&(this.countries[t].name=this.options.i18n[e])}}_processDialCodes(){this.dialCodes={},this.dialCodeMaxLen=0,this.dialCodeToIso2Map={};for(let t=0;t<this.countries.length;t++){let e=this.countries[t];this.dialCodes[e.dialCode]||(this.dialCodes[e.dialCode]=!0),this._addToDialCodeMap(e.iso2,e.dialCode,e.priority)}for(let t=0;t<this.countries.length;t++){let e=this.countries[t];if(e.areaCodes){let i=this.dialCodeToIso2Map[e.dialCode][0];for(let n=0;n<e.areaCodes.length;n++){let s=e.areaCodes[n];for(let r=1;r<s.length;r++){let l=e.dialCode+s.substr(0,r);this._addToDialCodeMap(i,l),this._addToDialCodeMap(e.iso2,l)}this._addToDialCodeMap(e.iso2,e.dialCode+s)}}}}_generateMarkup(){this.telInput.classList.add("iti__tel-input"),!this.telInput.hasAttribute("autocomplete")&&!(this.telInput.form&&this.telInput.form.hasAttribute("autocomplete"))&&this.telInput.setAttribute("autocomplete","off");let{allowDropdown:t,separateDialCode:e,showFlags:i,containerClass:n,hiddenInput:s,dropdownContainer:r,fixDropdownWidth:l,useFullscreenPopup:d,i18n:u}=this.options,h="iti";t&&(h+=" iti--allow-dropdown"),i&&(h+=" iti--show-flags"),n&&(h+=` ${n}`),d||(h+=" iti--inline-dropdown");let c=p("div",{class:h});if(this.telInput.parentNode?.insertBefore(c,this.telInput),t||i){this.countryContainer=p("div",{class:"iti__country-container"},c),this.selectedCountry=p("button",{type:"button",class:"iti__selected-country",...t&&{"aria-expanded":"false","aria-label":this.options.i18n.selectedCountryAriaLabel,"aria-haspopup":"true","aria-controls":`iti-${this.id}__dropdown-content`,role:"combobox"}},this.countryContainer);let g=p("div",{class:"iti__selected-country-primary"},this.selectedCountry);if(this.selectedCountryInner=p("div",null,g),this.selectedCountryA11yText=p("span",{class:"iti__a11y-text"},this.selectedCountryInner),this.telInput.disabled?this.selectedCountry.setAttribute("aria-disabled","true"):this.selectedCountry.setAttribute("tabindex","0"),t&&(this.dropdownArrow=p("div",{class:"iti__arrow","aria-hidden":"true"},g)),e&&(this.selectedDialCode=p("div",{class:"iti__selected-dial-code"},this.selectedCountry)),t){let m=l?"":"iti--flexible-dropdown-width";if(this.dropdownContent=p("div",{id:`iti-${this.id}__dropdown-content`,class:`iti__dropdown-content iti__hide ${m}`}),this.searchInput=p("input",{type:"text",class:"iti__search-input",placeholder:u.searchPlaceholder,role:"combobox","aria-expanded":"true","aria-label":u.searchPlaceholder,"aria-controls":`iti-${this.id}__country-listbox`,"aria-autocomplete":"list",autocomplete:"off"},this.dropdownContent),this.searchResultsA11yText=p("span",{class:"iti__a11y-text"},this.dropdownContent),this.countryList=p("ul",{class:"iti__country-list",id:`iti-${this.id}__country-listbox`,role:"listbox","aria-label":u.countryListAriaLabel},this.dropdownContent),this._appendListItems(this.countries,"iti__standard"),this._updateSearchResultsText(),r){let y="iti iti--container";d?y+=" iti--fullscreen-popup":y+=" iti--inline-dropdown",this.dropdown=p("div",{class:y}),this.dropdown.appendChild(this.dropdownContent)}else this.countryContainer.appendChild(this.dropdownContent)}}if(c.appendChild(this.telInput),s){let g=this.telInput.getAttribute("name")||"",m=s(g);m.phone&&(this.hiddenInput=p("input",{type:"hidden",name:m.phone}),c.appendChild(this.hiddenInput)),m.country&&(this.hiddenInputCountry=p("input",{type:"hidden",name:m.country}),c.appendChild(this.hiddenInputCountry))}}_appendListItems(t,e){for(let i=0;i<t.length;i++){let n=t[i],s=p("li",{id:`iti-${this.id}__item-${n.iso2}`,class:`iti__country ${e}`,tabindex:"-1",role:"option","data-dial-code":n.dialCode,"data-country-code":n.iso2,"aria-selected":"false"},this.countryList);n.nodeById[this.id]=s;let r="";this.options.showFlags&&(r+=`<div class='iti__flag-box'><div class='iti__flag iti__${n.iso2}'></div></div>`),r+=`<span class='iti__country-name'>${n.name}</span>`,r+=`<span class='iti__dial-code'>+${n.dialCode}</span>`,s.insertAdjacentHTML("beforeend",r)}}_setInitialState(t=!1){let e=this.telInput.getAttribute("value"),i=this.telInput.value,s=e&&e.charAt(0)==="+"&&(!i||i.charAt(0)!=="+")?e:i,r=this._getDialCode(s),l=A(s),{initialCountry:d}=this.options;if(r&&!l)this._updateCountryFromNumber(s);else if(d!=="auto"||t){let u=d?d.toLowerCase():"";u&&this._getCountryData(u,!0)?this._setCountry(u):r&&l?this._setCountry("us"):this._setCountry()}s&&this._updateValFromNumber(s)}_initListeners(){this._initTelInputListeners(),this.options.allowDropdown&&this._initDropdownListeners(),(this.hiddenInput||this.hiddenInputCountry)&&this.telInput.form&&this._initHiddenInputListener()}_initHiddenInputListener(){this._handleHiddenInputSubmit=()=>{this.hiddenInput&&(this.hiddenInput.value=this.getNumber()),this.hiddenInputCountry&&(this.hiddenInputCountry.value=this.getSelectedCountryData().iso2||"")},this.telInput.form?.addEventListener("submit",this._handleHiddenInputSubmit)}_initDropdownListeners(){this._handleLabelClick=e=>{this.dropdownContent.classList.contains("iti__hide")?this.telInput.focus():e.preventDefault()};let t=this.telInput.closest("label");t&&t.addEventListener("click",this._handleLabelClick),this._handleClickSelectedCountry=()=>{this.dropdownContent.classList.contains("iti__hide")&&!this.telInput.disabled&&!this.telInput.readOnly&&this._openDropdown()},this.selectedCountry.addEventListener("click",this._handleClickSelectedCountry),this._handleCountryContainerKeydown=e=>{this.dropdownContent.classList.contains("iti__hide")&&["ArrowUp","ArrowDown"," ","Enter"].includes(e.key)&&(e.preventDefault(),e.stopPropagation(),this._openDropdown()),e.key==="Tab"&&this._closeDropdown()},this.countryContainer.addEventListener("keydown",this._handleCountryContainerKeydown)}_initRequests(){this.options.utilsScript&&!o.utils?o.documentReady()?o.loadUtils(this.options.utilsScript):window.addEventListener("load",()=>{o.loadUtils(this.options.utilsScript)}):this.resolveUtilsScriptPromise(),this.options.initialCountry==="auto"&&!this.selectedCountryData.iso2?this._loadAutoCountry():this.resolveAutoCountryPromise()}_loadAutoCountry(){o.autoCountry?this.handleAutoCountry():o.startedLoadingAutoCountry||(o.startedLoadingAutoCountry=!0,typeof this.options.geoIpLookup=="function"&&this.options.geoIpLookup((t="")=>{let e=t.toLowerCase();e&&this._getCountryData(e,!0)?(o.autoCountry=e,setTimeout(()=>b("handleAutoCountry"))):(this._setInitialState(!0),b("rejectAutoCountryPromise"))},()=>{this._setInitialState(!0),b("rejectAutoCountryPromise")}))}_initTelInputListeners(){let{strictMode:t,formatAsYouType:e,separateDialCode:i}=this.options,n=!1;this._handleInputEvent=s=>{this._updateCountryFromNumber(this.telInput.value)&&this._triggerCountryChange();let r=s&&s.data&&/[^+0-9]/.test(s.data),l=s&&s.inputType==="insertFromPaste"&&this.telInput.value;if(r||l&&!t?n=!0:/[^+0-9]/.test(this.telInput.value)||(n=!1),e&&!n){let d=this.telInput.selectionStart||0,h=this.telInput.value.substring(0,d).replace(/[^+0-9]/g,"").length,c=s&&s.inputType==="deleteContentForward",g=this._formatNumberAsYouType(),m=U(h,g,d,c);this.telInput.value=g,this.telInput.setSelectionRange(m,m)}},this.telInput.addEventListener("input",this._handleInputEvent),(t||i)&&(this._handleKeydownEvent=s=>{if(s.key&&s.key.length===1&&!s.altKey&&!s.ctrlKey&&!s.metaKey){if(i&&s.key==="+"){s.preventDefault(),this._openDropdown(),this.searchInput.value="+",this._filterCountries("",!0);return}if(t){let r=this.telInput.selectionStart===0&&s.key==="+",l=/^[0-9]$/.test(s.key),d=r||l,u=this._getFullNumber(),h=o.utils.getCoreNumber(u,this.selectedCountryData.iso2),c=this.maxCoreNumberLength&&h.length>=this.maxCoreNumberLength;(!d||c)&&s.preventDefault()}}},this.telInput.addEventListener("keydown",this._handleKeydownEvent))}_cap(t){let e=parseInt(this.telInput.getAttribute("maxlength")||"",10);return e&&t.length>e?t.substr(0,e):t}_trigger(t){let e=new Event(t,{bubbles:!0,cancelable:!0});this.telInput.dispatchEvent(e)}_openDropdown(){let{fixDropdownWidth:t}=this.options;t&&(this.dropdownContent.style.width=`${this.telInput.offsetWidth}px`),this.dropdownContent.classList.remove("iti__hide"),this.selectedCountry.setAttribute("aria-expanded","true"),this._setDropdownPosition();let e=this.countryList.firstElementChild;e&&(this._highlightListItem(e,!1),this.countryList.scrollTop=0),this.searchInput.focus(),this._bindDropdownListeners(),this.dropdownArrow.classList.add("iti__arrow--up"),this._trigger("open:countrydropdown")}_setDropdownPosition(){if(this.options.dropdownContainer&&this.options.dropdownContainer.appendChild(this.dropdown),!this.options.useFullscreenPopup){let t=this.telInput.getBoundingClientRect(),e=this.telInput.offsetHeight;this.options.dropdownContainer&&(this.dropdown.style.top=`${t.top+e}px`,this.dropdown.style.left=`${t.left}px`,this._handleWindowScroll=()=>this._closeDropdown(),window.addEventListener("scroll",this._handleWindowScroll))}}_bindDropdownListeners(){this._handleMouseoverCountryList=n=>{let s=n.target?.closest(".iti__country");s&&this._highlightListItem(s,!1)},this.countryList.addEventListener("mouseover",this._handleMouseoverCountryList),this._handleClickCountryList=n=>{let s=n.target?.closest(".iti__country");s&&this._selectListItem(s)},this.countryList.addEventListener("click",this._handleClickCountryList);let t=!0;this._handleClickOffToClose=()=>{t||this._closeDropdown(),t=!1},document.documentElement.addEventListener("click",this._handleClickOffToClose),this._handleKeydownOnDropdown=n=>{["ArrowUp","ArrowDown","Enter","Escape"].includes(n.key)&&(n.preventDefault(),n.stopPropagation(),n.key==="ArrowUp"||n.key==="ArrowDown"?this._handleUpDownKey(n.key):n.key==="Enter"?this._handleEnterKey():n.key==="Escape"&&this._closeDropdown())},document.addEventListener("keydown",this._handleKeydownOnDropdown);let e=()=>{let n=this.searchInput.value.trim();n?this._filterCountries(n):this._filterCountries("",!0)},i=null;this._handleSearchChange=()=>{i&&clearTimeout(i),i=setTimeout(()=>{e(),i=null},100)},this.searchInput.addEventListener("input",this._handleSearchChange),this.searchInput.addEventListener("click",n=>n.stopPropagation())}_filterCountries(t,e=!1){let i=!0;this.countryList.innerHTML="";let n=N(t);for(let s=0;s<this.countries.length;s++){let r=this.countries[s],l=N(r.name),d=`+${r.dialCode}`;if(e||l.includes(n)||d.includes(n)||r.iso2.includes(n)){let u=r.nodeById[this.id];u&&this.countryList.appendChild(u),i&&(this._highlightListItem(u,!1),i=!1)}}i&&this._highlightListItem(null,!1),this.countryList.scrollTop=0,this._updateSearchResultsText()}_updateSearchResultsText(){let{i18n:t}=this.options,e=this.countryList.childElementCount,i;e===0?i=t.zeroSearchResults:e===1?i=t.oneSearchResult:i=t.multipleSearchResults.replace("${count}",e.toString()),this.searchResultsA11yText.textContent=i}_handleUpDownKey(t){let e=t==="ArrowUp"?this.highlightedItem?.previousElementSibling:this.highlightedItem?.nextElementSibling;!e&&this.countryList.childElementCount>1&&(e=t==="ArrowUp"?this.countryList.lastElementChild:this.countryList.firstElementChild),e&&(this._scrollTo(e),this._highlightListItem(e,!1))}_handleEnterKey(){this.highlightedItem&&this._selectListItem(this.highlightedItem)}_updateValFromNumber(t){let e=t;if(this.options.formatOnDisplay&&o.utils&&this.selectedCountryData){let i=this.options.nationalMode||e.charAt(0)!=="+"&&!this.options.separateDialCode,{NATIONAL:n,INTERNATIONAL:s}=o.utils.numberFormat,r=i?n:s;e=o.utils.formatNumber(e,this.selectedCountryData.iso2,r)}e=this._beforeSetNumber(e),this.telInput.value=e}_updateCountryFromNumber(t){let e=t.indexOf("+"),i=e?t.substring(e):t,n=this.selectedCountryData.dialCode;i&&n==="1"&&i.charAt(0)!=="+"&&(i.charAt(0)!=="1"&&(i=`1${i}`),i=`+${i}`),this.options.separateDialCode&&n&&i.charAt(0)!=="+"&&(i=`+${n}${i}`);let r=this._getDialCode(i,!0),l=_(i),d=null;if(r){let u=this.dialCodeToIso2Map[_(r)],h=u.indexOf(this.selectedCountryData.iso2)!==-1&&l.length<=r.length-1;if(!(n==="1"&&A(l))&&!h){for(let g=0;g<u.length;g++)if(u[g]){d=u[g];break}}}else i.charAt(0)==="+"&&l.length?d="":(!i||i==="+")&&!this.selectedCountryData.iso2&&(d=this.defaultCountry);return d!==null?this._setCountry(d):!1}_highlightListItem(t,e){let i=this.highlightedItem;if(i&&(i.classList.remove("iti__highlight"),i.setAttribute("aria-selected","false")),this.highlightedItem=t,this.highlightedItem){this.highlightedItem.classList.add("iti__highlight"),this.highlightedItem.setAttribute("aria-selected","true");let n=this.highlightedItem.getAttribute("id")||"";this.selectedCountry.setAttribute("aria-activedescendant",n),this.searchInput.setAttribute("aria-activedescendant",n)}e&&this.highlightedItem.focus()}_getCountryData(t,e){for(let i=0;i<this.countries.length;i++)if(this.countries[i].iso2===t)return this.countries[i];if(e)return null;throw new Error(`No country data for '${t}'`)}_setCountry(t){let{separateDialCode:e,showFlags:i,i18n:n}=this.options,s=this.selectedCountryData.iso2?this.selectedCountryData:{};if(this.selectedCountryData=t?this._getCountryData(t,!1)||{}:{},this.selectedCountryData.iso2&&(this.defaultCountry=this.selectedCountryData.iso2),this.selectedCountryInner){let r="",l="";t&&i?(r=`iti__flag iti__${t}`,l=`${this.selectedCountryData.name} +${this.selectedCountryData.dialCode}`):(r="iti__flag iti__globe",l=n.noCountrySelected),this.selectedCountryInner.className=r,this.selectedCountryA11yText.textContent=l}if(this._setSelectedCountryTitleAttribute(t,e),e){let r=this.selectedCountryData.dialCode?`+${this.selectedCountryData.dialCode}`:"";this.selectedDialCode.innerHTML=r;let d=(this.selectedCountry.offsetWidth||this._getHiddenSelectedCountryWidth())+8;this.isRTL?this.telInput.style.paddingRight=`${d}px`:this.telInput.style.paddingLeft=`${d}px`}return this._updatePlaceholder(),this._updateMaxLength(),s.iso2!==t}_updateMaxLength(){if(this.options.strictMode&&o.utils)if(this.selectedCountryData.iso2){let t=o.utils.numberType[this.options.placeholderNumberType],e=o.utils.getExampleNumber(this.selectedCountryData.iso2,!1,t,!0),i=e;for(;o.utils.isPossibleNumber(e,this.selectedCountryData.iso2);)i=e,e+="0";let n=o.utils.getCoreNumber(i,this.selectedCountryData.iso2);this.maxCoreNumberLength=n.length}else this.maxCoreNumberLength=null}_setSelectedCountryTitleAttribute(t=null,e){if(!this.selectedCountry)return;let i;t&&!e?i=`${this.selectedCountryData.name}: +${this.selectedCountryData.dialCode}`:t?i=this.selectedCountryData.name:i="Unknown",this.selectedCountry.setAttribute("title",i)}_getHiddenSelectedCountryWidth(){if(this.telInput.parentNode){let t=this.telInput.parentNode.cloneNode(!1);t.style.visibility="hidden",document.body.appendChild(t);let e=this.countryContainer.cloneNode();t.appendChild(e);let i=this.selectedCountry.cloneNode(!0);e.appendChild(i);let n=i.offsetWidth;return document.body.removeChild(t),n}return 0}_updatePlaceholder(){let{autoPlaceholder:t,placeholderNumberType:e,nationalMode:i,customPlaceholder:n}=this.options,s=t==="aggressive"||!this.hadInitialPlaceholder&&t==="polite";if(o.utils&&s){let r=o.utils.numberType[e],l=this.selectedCountryData.iso2?o.utils.getExampleNumber(this.selectedCountryData.iso2,i,r):"";l=this._beforeSetNumber(l),typeof n=="function"&&(l=n(l,this.selectedCountryData)),this.telInput.setAttribute("placeholder",l)}}_selectListItem(t){let e=this._setCountry(t.getAttribute("data-country-code"));this._closeDropdown(),this._updateDialCode(t.getAttribute("data-dial-code")),this.telInput.focus(),e&&this._triggerCountryChange()}_closeDropdown(){this.dropdownContent.classList.add("iti__hide"),this.selectedCountry.setAttribute("aria-expanded","false"),this.selectedCountry.removeAttribute("aria-activedescendant"),this.highlightedItem&&this.highlightedItem.setAttribute("aria-selected","false"),this.searchInput.removeAttribute("aria-activedescendant"),this.dropdownArrow.classList.remove("iti__arrow--up"),document.removeEventListener("keydown",this._handleKeydownOnDropdown),this.searchInput.removeEventListener("input",this._handleSearchChange),document.documentElement.removeEventListener("click",this._handleClickOffToClose),this.countryList.removeEventListener("mouseover",this._handleMouseoverCountryList),this.countryList.removeEventListener("click",this._handleClickCountryList),this.options.dropdownContainer&&(this.options.useFullscreenPopup||window.removeEventListener("scroll",this._handleWindowScroll),this.dropdown.parentNode&&this.dropdown.parentNode.removeChild(this.dropdown)),this._trigger("close:countrydropdown")}_scrollTo(t){let e=this.countryList,i=document.documentElement.scrollTop,n=e.offsetHeight,s=e.getBoundingClientRect().top+i,r=s+n,l=t.offsetHeight,d=t.getBoundingClientRect().top+i,u=d+l,h=d-s+e.scrollTop;if(d<s)e.scrollTop=h;else if(u>r){let c=n-l;e.scrollTop=h-c}}_updateDialCode(t){let e=this.telInput.value,i=`+${t}`,n;if(e.charAt(0)==="+"){let s=this._getDialCode(e);s?n=e.replace(s,i):n=i,this.telInput.value=n}}_getDialCode(t,e){let i="";if(t.charAt(0)==="+"){let n="";for(let s=0;s<t.length;s++){let r=t.charAt(s);if(!isNaN(parseInt(r,10))){if(n+=r,e)this.dialCodeToIso2Map[n]&&(i=t.substr(0,s+1));else if(this.dialCodes[n]){i=t.substr(0,s+1);break}if(n.length===this.dialCodeMaxLen)break}}}return i}_getFullNumber(){let t=this.telInput.value.trim(),{dialCode:e}=this.selectedCountryData,i,n=_(t);return this.options.separateDialCode&&t.charAt(0)!=="+"&&e&&n?i=`+${e}`:i="",i+t}_beforeSetNumber(t){let e=t;if(this.options.separateDialCode){let i=this._getDialCode(e);if(i){i=`+${this.selectedCountryData.dialCode}`;let n=e[i.length]===" "||e[i.length]==="-"?i.length+1:i.length;e=e.substr(n)}}return this._cap(e)}_triggerCountryChange(){this._trigger("countrychange")}_formatNumberAsYouType(){let t=this._getFullNumber(),e=o.utils?o.utils.formatNumberAsYouType(t,this.selectedCountryData.iso2):t,{dialCode:i}=this.selectedCountryData;return this.options.separateDialCode&&this.telInput.value.charAt(0)!=="+"&&e.includes(`+${i}`)?(e.split(`+${i}`)[1]||"").trim():e}handleAutoCountry(){this.options.initialCountry==="auto"&&o.autoCountry&&(this.defaultCountry=o.autoCountry,this.telInput.value||this.setCountry(this.defaultCountry),this.resolveAutoCountryPromise())}handleUtils(){o.utils&&(this.telInput.value&&this._updateValFromNumber(this.telInput.value),this.selectedCountryData.iso2&&(this._updatePlaceholder(),this._updateMaxLength())),this.resolveUtilsScriptPromise()}destroy(){if(this.options.allowDropdown){this._closeDropdown(),this.selectedCountry.removeEventListener("click",this._handleClickSelectedCountry),this.countryContainer.removeEventListener("keydown",this._handleCountryContainerKeydown);let i=this.telInput.closest("label");i&&i.removeEventListener("click",this._handleLabelClick)}let{form:t}=this.telInput;this._handleHiddenInputSubmit&&t&&t.removeEventListener("submit",this._handleHiddenInputSubmit),this.telInput.removeEventListener("input",this._handleInputEvent),this._handleKeydownEvent&&this.telInput.removeEventListener("keydown",this._handleKeydownEvent),this.telInput.removeAttribute("data-intl-tel-input-id");let e=this.telInput.parentNode;e?.parentNode?.insertBefore(this.telInput,e),e?.parentNode?.removeChild(e),delete o.instances[this.id]}getExtension(){return o.utils?o.utils.getExtension(this._getFullNumber(),this.selectedCountryData.iso2):""}getNumber(t){if(o.utils){let{iso2:e}=this.selectedCountryData;return o.utils.formatNumber(this._getFullNumber(),e,t)}return""}getNumberType(){return o.utils?o.utils.getNumberType(this._getFullNumber(),this.selectedCountryData.iso2):-99}getSelectedCountryData(){return this.selectedCountryData}getValidationError(){if(o.utils){let{iso2:t}=this.selectedCountryData;return o.utils.getValidationError(this._getFullNumber(),t)}return-99}isValidNumber(t=!0){let e=this._getFullNumber();return/\p{L}/u.test(e)?!1:o.utils?o.utils.isPossibleNumber(e,this.selectedCountryData.iso2,t):null}isValidNumberPrecise(){let t=this._getFullNumber();return/\p{L}/u.test(t)?!1:o.utils?o.utils.isValidNumber(t,this.selectedCountryData.iso2):null}setCountry(t){let e=t.toLowerCase();this.selectedCountryData.iso2!==e&&(this._setCountry(e),this._updateDialCode(this.selectedCountryData.dialCode),this._triggerCountryChange())}setNumber(t){let e=this._updateCountryFromNumber(t);this._updateValFromNumber(t),e&&this._triggerCountryChange()}setPlaceholderNumberType(t){this.options.placeholderNumberType=t,this._updatePlaceholder()}},V=a=>!o.utils&&!o.startedLoadingUtilsScript?(o.startedLoadingUtilsScript=!0,new Promise((t,e)=>{import(a).then(({default:i})=>{o.utils=i,b("handleUtils"),t(!0)}).catch(()=>{b("rejectUtilsScriptPromise"),e()})})):null,o=Object.assign((a,t)=>{let e=new I(a,t);return e._init(),a.setAttribute("data-intl-tel-input-id",e.id.toString()),o.instances[e.id]=e,e},{defaults:S,documentReady:()=>document.readyState==="complete",getCountryData:()=>f,getInstance:a=>{let t=a.getAttribute("data-intl-tel-input-id");return t?o.instances[t]:null},instances:{},loadUtils:V,version:"23.0.0"}),M=o;var C=j(require("react")),$=({initialValue:a="",onChangeNumber:t=()=>{},onChangeCountry:e=()=>{},onChangeValidity:i=()=>{},onChangeErrorCode:n=()=>{},usePreciseValidation:s=!1,initOptions:r={},inputProps:l={}})=>{let d=(0,C.useRef)(null),u=(0,C.useRef)(null),h=()=>{let c=u.current?.getNumber()||"",g=u.current?.getSelectedCountryData().iso2||"";if(t(c),e(g),u.current)if(s?u.current.isValidNumberPrecise():u.current.isValidNumber())i(!0),n(null);else{let y=u.current.getValidationError();i(!1),n(y)}};return(0,C.useEffect)(()=>{let c=d.current;return c&&(u.current=M(c,r),c.addEventListener("countrychange",h),u.current.promise.then(h)),()=>{c&&c.removeEventListener("countrychange",h),u.current?.destroy()}},[]),C.default.createElement("input",{type:"tel",ref:d,onInput:h,defaultValue:a,...l})},q=$;
