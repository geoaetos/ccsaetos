(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create', 'UA-41311132-1', 'auto');ga('send', 'pageview');ga('send', 'event', 'category', 'action');
(function($){var e=$('#ajax-search-form'),$input=e.find(':text');e.append('<div id="search-result"></div>');var f=$('#search-result');e.on("submit",function(){var d=$input.val();f.show().html('Loading...');$.ajax({url:'https://www.blogger.com/feeds/7203184275858919201/posts/summary?alt=json-in-script&q='+d+'&max-results=9999',type:'get',dataType:'jsonp',success:function(a){var b=a.feed.entry,link,skeleton="";if(b!==undefined){skeleton='<h4>ΑΝΑΖΗΤΗΣΗ ΜΕ &quot;'+d+'&quot;</h4>';skeleton+='<a class="close" href="/">CLOSE</a><ol>';for(var i=0;i<b.length;i++){for(var j=0;j<b[i].link.length;j++){if(b[i].link[j].rel=="alternate"){link=b[i].link[j].href}}var c=new RegExp(d,"ig");skeleton+='<li><a href="'+link+'">'+b[i].title.$t.replace(c,"<span style=\'background-color:pink;text-decoration:underline;\'>"+d+"</span>")+'</a></li>'}skeleton+='</ol>';f.html(skeleton)}else{f.html('<a class="close" href="/">CLOSE</a><strong>ΔΕΝ ΒΡΕΘΗΚΕ ΓΡΑΨΕ ΕΛΛΗΝΙΚΑ!</strong>')}},error:function(){f.html('<a class="close" href="/">CLOSE</a><strong>Error loading feed.</strong>')}});return false});e.on("click",".close",function(){f.fadeOut();return false})})(jQuery);
$(document).ready(function(){$("#p1").mouseenter(function(){var cmtext="Comment",pkBlank="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//wAALCAApACoBAREA/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAMFBAIG/8QAKhAAAgIBAQYFBQEAAAAAAAAAAQIAAwQRBRIhNHKxEzEyUWEiQYGRoeH/2gAIAQEAAD8A9fk81b1nvFTQmFkOu8K9B8nSKsqsqbdsUqZxCNyeat6z3jtm1LZk6sNQg1/MsxGZUtuO4I4gEg/MhQjcnmres953hXii8M3pPAy2pDAFTqD5TLn5C1VFAfrcaAewkaEbk81b1nvKGBhqqC2xdWPEA/ab4u2pLkK2KCJFyaDj2lDxB4g+4iZq3PE2kyHyNh1/ctQhMO1UDUK+nFW/hiatmiypH8XTeUH0/wCypCEIQn//2Q==",numcomment=10,thumbcsize=70,cmsumm=40,animatedRcomments=false,limitspyrc=5,intervalspyrc=2500,tickspeedrc=1000;$(document).ready(function(){$.ajax({url:"/feeds/comments/default?alt=json-in-script&max-results="+numcomment+"",type:"get",dataType:"jsonp",success:function(l){var d,a,b,j,f;htmlxcode='<ul class="spyrc">';for(var e=0;e<l.feed.entry.length;e++){var g=l.feed.entry[e];if(e==l.feed.entry.length){break}for(var c=0;c<g.link.length;c++){if(g.link[c].rel=="alternate"){j=g.link[c].href;break}}if("content"in g){d=g.content.$t}else{if("summary"in g){d=g.summary.$t}else{d=""}}if(g.author[0].gd$image.src=="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="){a=pkBlank}else{a=g.author[0].gd$image.src.replace(/\/s[0-9]+(\-c|\/)/,"/s"+thumbcsize+"$1")}var h=/<\S[^>]*>/g;b=(g.author[0].uri)?g.author[0].uri.$t:"#nope";f=g.author[0].name.$t;d=d.replace(h,"");if(d.length>cmsumm){var d=d.substring(0,cmsumm)+"..."}htmlxcode+='<li><div class="kmtimg"><a rel="nofollow" href="'+b+'"><img src="'+a+'"/></a></div><div class="ketkomt"><a  href="'+j+'">'+f+"</a><span>"+d+"</span></div></li>"}htmlxcode+="</ul>";document.getElementById("rcentcomnets").innerHTML=htmlxcode;(function(i){i.fn.newsTickerrc=function(m,k,n){m=limitspy||4;k=intervalspy||1000;n=tickspeed||400;return this.each(function(){var r=i(this),p=r.children();var q=function(){r.find("li:last").hide().prependTo(r).slideDown(n)},o=setInterval(q,k);r.css({height:p.outerHeight()*m,overflow:"hidden"}).hover(function(){clearInterval(o)},function(){o=setInterval(q,k)})})};if(animatedRcomments){i(".spyrc").newsTickerrc(limitspyrc,intervalspyrc,tickspeedrc)}i(window).load(function(){i(".spyrc img").each(function(m){var k=i(this);setTimeout(function(){k.fadeIn(400)},400*(m+1))})})})(jQuery)}})});});});
function showDiv(toggle){document.getElementById(toggle).style.display='block'; (function(){function d(b){var a=document.getElementsByTagName("head")[0];a||(a=document.body.parentNode.appendChild(document.createElement("head")));a.appendChild(b)}function _loadJs(b){var a=document.createElement("script");a.type="text/javascript";a.charset="UTF-8";a.src=b;d(a)}function _loadCss(b){var a=document.createElement("link");a.type="text/css";a.rel="stylesheet";a.charset="UTF-8";a.href=b;d(a)}function _isNS(b){b=b.split(".");for(var a=window,c=0;c<b.length;++c)if(!(a=a[b[c]]))return!1;return!0}
function _setupNS(b){b=b.split(".");for(var a=window,c=0;c<b.length;++c)a.hasOwnProperty?a.hasOwnProperty(b[c])?a=a[b[c]]:a=a[b[c]]={}:a=a[b[c]]||(a[b[c]]={});return a}window.addEventListener&&"undefined"==typeof document.readyState&&window.addEventListener("DOMContentLoaded",function(){document.readyState="complete"},!1);
if (_isNS('google.translate.Element')){return}(function(){var c=_setupNS('google.translate._const');c._cl='el';c._cuc='googleTranslateElementInit';c._cac='';c._cam='';c._ctkk=eval('((function(){var a\x3d3895053606;var b\x3d-1549588445;return 408212+\x27.\x27+(a+b)})())');var h='translate.googleapis.com';var s=(true?'https':window.location.protocol=='https:'?'https':'http')+'://';var b=s+h;c._pah=h;c._pas=s;c._pbi=b+'/translate_static/img/te_bk.gif';c._pci=b+'/translate_static/img/te_ctrl3.gif';c._pli=b+'/translate_static/img/loading.gif';c._plla=h+'/translate_a/l';c._pmi=b+'/translate_static/img/mini_google.png';c._ps=b+'/translate_static/css/translateelement.css';c._puh='translate.google.com';_loadCss(c._ps);_loadJs(b+'/translate_static/js/element/main_el.js');})();})();}function googleTranslateElementInit() {new google.translate.TranslateElement({pageLanguage: 'el',autoDisplay: 'true',layout: google.translate.TranslateElement.InlineLayout.VERTICAL}, 'google_translate_element');}
eeval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('5(\'2W\'==/3W/){3V()}Z{p a=b?(c%d):e[f]}5("1w"===10 7)p 7={1T:16,2E:3,3o:0,6:0,1q:0,1b:0,M:4,I:0,2u:0,2t:0,3k:"",3j:"",1c:"",C:"1C",G:"0",3i:"",Y:0,T:0,18:0,U:0,2r:0,15:1,1f:0,N:0,19:0,39:0,32:0,2Z:2g,1F:0,V:0,W:0,2T:0,3N:"",1d:[],1e:"",Q:0,1Q:0,3I:0,1y:0,1A:0,1B:0,17:0,1E:"",26:0,3h:0,L:0,E:0,1i:0,u:0,3g:"1",13:"34",30:[],H:"0.1R?",1h:1V,1z:9(a){y"1w"!==10 a},1k:9(a){p b=!1;5("1w"!==10 a){5("3y"==O(a))y!1;0<O(a)?b=!0:b=!1}y b},D:9(a){y!7.1k(a)?0:O(a)},K:9(a){p b=!1;7.1z(a)&&(0<(a+"").z?b=!0:b=!1);y b},3e:9(a){7.Q=a},B:9(a){S{5(7.1A)y"";p b,c,d,e;d=x.2j;e=d.1t(a+"=");5(-1!==e){b=e+a.z+1;c=d.1t(";",b);5(-1===c)c=d.z;y d.3l(b,c)}y""}P(f){y""}},J:9(a){y!7.K(a)?"":X.2i?2i(a):2M(a).1x("@").1N("%2J")},1L:9(a){5(!7.K(a))y"";S{y X.1g?1g(a):1U(a)}P(b){y 1U(a)}},1D:9(a){S{y X.1g?1g(a):a}P(b){y a}},F:9(a,b,c){S{5(7.1A)y"";p d,e;e=1W 1X;e.3f(e.1Y()+c);d=0<c?"; 1Z="+e.3F():"; 1Z=3Q, 20-2K-2L 21:21:20 2N";x.2j=a+"="+b+d+"; 2O=/"}P(f){}},2S:9(){7.1B=1},2U:9(a,b,c,d,e,f,g){5(7&&(a=7,a.6=O(b),a.M=c,a.I=d,a.2u=e,a.2t=f,a.13=g,8<a.13.z||1>a.13.z))a.13=""},1P:9(){p a=7;5(!a.1y){++a.1y;a.L=(1W 1X).1Y();a.E=31;a.1E=1p.36;5("37"===a.1E||0<=1p.3b.1t("3d"))a.26=1;a.1c=x.22?x.22:x.23;a.1c=a.1D(a.1c).12(0,1G);a.C=x.24+"";a.1e=x.3n;a.1e=a.1D(a.1e).12(0,1G);p b=-1;S{a.Y=3u.3v;5(a.1B&&0!=25.3A.z)a.C=""+25.x.24;a.G=1p.1j||1p.3G||"";5("3H"==a.G.12(0,2))a.G="3J";5("3K"==a.G.12(0,2))a.G="3L";5(1>a.G.z)a.G="0";b=a.C.1t("//"+x.23.3M)}P(c){a.G="0",a.C="1C",a.Y="0"}a.Y=a.D(a.Y);a.C=a.C.12(0,1G);a.18=a.D(a.B("1J"+a.6));a.T=a.D(a.B("27"+a.6));5(a.D(0<a.B("3T"+a.6)))a.1Q=1;5(1>a.T)a.T=a.L,a.F("27"+a.6,a.T,a.E);a.15=1;a.F("1J"+a.6,a.L,a.E);a.1i=a.D(a.B("1J"+a.6));5(0<a.1i){5(0<a.18)a.U=O(a.L-a.18);5(0<a.T)a.2r=O(a.L-a.T);a.V=a.D(a.B("28"+a.6));a.W=a.D(a.B("29"+a.6));a.N=a.D(a.B("2a"+a.6));a.19=a.D(a.B("2b"+a.6));a.1f=a.D(a.B("2c"+a.6));a.V++;a.W++;5(2d<=O(a.L-a.1f))a.F("2c"+a.6,a.L,a.E),a.1f=0;a.1f++;5(1>a.18||2d<=a.U)a.V=1,a.N=1,a.W=1,a.19=1;Z 5(0<a.U)2P>a.U?a.15=0:(a.V=1,a.N++),2Q<a.U&&a.19++;5(1>a.N)a.N=1;1==a.15&&2R("7.2e(\'b\');",2g);a.F("28"+a.6,a.V,a.E);a.F("29"+a.6,a.W,a.E);a.F("2a"+a.6,a.N,a.E);a.F("2b"+a.6,a.19,a.E)}5(a.K(a.C)&&1==a.15&&1>b)a.F("1I"+a.6,a.J(a.C),a.E);Z{5(a.K(a.1L(a.B("1I"+a.6))))a.C=a.1L(a.B("1I"+a.6));5(!a.K(a.C))a.C="1C"}a.1b=a.B("2f"+a.6);5(!a.1k(a.1b))a.1b=0;0<a.1q&&a.F("2f"+a.6,a.1q,a.E);a.1h=x.2V;S{5(1l=x.2X("2Y"),a.1z(1l)&&0<1l.z)a.1h=1l[0]}P(d){}}},2h:9(){p a=7;a.1P();a.u=""+(a.6+"")+("&@f"+a.1T)+("&@g"+a.15)+("&@h"+a.V)+("&@i"+a.N)+("&@j"+a.1i)+("&@k"+a.U)+("&@l"+a.W)+("&@m"+a.J(a.1e))+("&@n"+a.1S())+("&@o"+a.J(a.C))+("&@q"+a.1q)+("&@r"+a.1b)+("&@s"+a.I)+("&@t"+a.J(a.G))+("&@u"+a.Y)+("&@v"+a.J(a.1c))},33:9(){p a=7;a.1P();a.u=""+(a.6+"")+("&"+a.2E)},2k:9(a,b){p c=7;c.K(a)&&c.K(b)&&("35"==a&&(b=b.1x(";").1N(",")),c.1d[c.D(c.1d.z)]=c.J(a)+"="+c.J(b))},1S:9(){p a="0",b=7;5("1w"!==10 2l){p c=2l;5(0<c.z&&0==c.z%2)2m(p d=0;d<c.z;)b.2k(c[d],c[d+1]),d+=2}5(1>b.1d.z)y a;a+=b.1d.1N("|");y a.12(0,38)},1M:9(){p a=7;5(a.1k(a.M)&&!(1>a.6))5(1==a.Q){p b=x.3a("2n");5(1==a.Q)b.3c=!0;b.2o="2p/2q";b.1K="2s://s"+a.M+".1n.1o/1O/"+a.H+a.u+"&@w";a.1h.3m(b)}Z x.11(\'<14 2o="2p/2q" 1j="1H" 3p="2s://s\'+a.M+".1n.1o/1O/"+a.H+a.u+"&@w\\"><\\\\/14>\');"),x.11("<\\/2n>")},3q:9(a,b){},3r:9(){p a=7;5(!(0<a.1Q))a.2h(),3s<=a.I&&3t>a.I?(a.H="i/"+a.6+".2v?",a.2w()):3w<=a.I&&3x>a.I?(a.H=a.I+".2v?",a.2x()):(a.H="0.1R?",a.1M())},2e:9(a){p b=7;5(!(3z<b.1F))b.u=""+(b.6+"")+("&@A"+a+"&@R"+2y.3B(3C*2y.3D())),b.H="e.1R?",b.Q=1,b.1M(),b.1F++},3E:9(a,b,c,d,e){5(7)a=7,a.6=O(b),a.M=c,a.I=d,a.13=e},2w:9(){5(7){p a=7;5(!(1>a.6||1==a.17)){p b=\'<1r 2z="2A"><2B 2C="7" 1K="2D://s\'+a.M+"i.1n.1o/1O/"+a.H+a.u+\'&@w" ></1r>\';a.17=1;5(1==a.Q){5(x.1s("1u"))x.1s("1u").2F=b}Z x.11("<14 1j=1H>x.11(\'"+b+"\');<\\/14>")}}},2x:9(){5(7){p a=7;5(!(1>a.6||1==a.17)){p b=\'<1r 2z="2A"><2B  2C="7"  1K="2D://s\'+a.M+".1n.1o/"+a.H+a.u+\'&@w" ></1r>\';a.17=1;5(1==a.Q){5(x.1s("1u"))x.1s("1u").2F=b}Z x.11("<14 1j=1H>x.11(\'"+b+"\');<\\/14>")}}}};5(!2G)p 2G="";5(!2H)p 2H="";9 3O(){}9 3P(){};9 2I(){S{p w=X[\'3R\'];5(w&&10 w.3S=="9"){2m(1v 3U w){p 1a=1V;1a=X[w[1v][0]];1m=(w[1v][0]).1x(".");5(1m.z==2)1a=X[1m[0]][1m[1]];5(10 1a=="9")1a.3X(3Y,((w[1v][1]+\'\')).1x(\',\'))}}}P(e){y}}2I();',62,247,'|||||if|s_id|Histats||function||||||||||||||||var||||||||document|return|length||GC|s_r|cn|c_e|SC|s_l|t_u|i_id|ENCODE|iss|o_n|i_dom|d_cv|parseInt|catch|asi||try|d_fa|d_tl|d_pn|d_pt|window|d_s|else|typeof|writeln|substr|s_sc2|script|d_nv||p_ff|d_la|d_cs|oo|d_op|s_u|a_va|s_ti|d_mu|decodeURIComponent|pl|c_on|language|isd|heads|ao|histats|com|navigator|s_pd|div|getElementById|indexOf|histats_counter|kk|undefined|split|o_i|is|o_BC|o_fr|1000|DECODEuri|n_a|d_ca|500|JavaScript|c_ref_|HstCla|src|DECODE|load_JScall|join|stats|init|o_fa|php|imp_v|ver|unescape|null|new|Date|getTime|expires|01|00|URL|location|referrer|top|n_f|HstCfa|HstPn|HstPt|HstCnv|HstCns|HstCmu|262656E4|track_event|c_pd_|45E3|B_U|encodeURIComponent|cookie|add_v|Histats_variables|for|SCRIPT|type|text|javascript|d_tf|http|i_h|i_w|gif|load_GIFimg|load_GIFicon|Math|id|histatsC|img|alt|https|eve|innerHTML|str_contatore|_HST_cntval|HST_ASYNC|40|Jan|1970|escape|GMT|path|36E5|6E5|setTimeout|framed_page|f_pv|start|body|this_is|getElementsByTagName|head|d_ptm|s_asc2|31536E6|d_pON|B_E|11111111|tags|appName|Opera|300|d_cp|createElement|userAgent|defer|Firefox|fasi|setTime|s_sc1|n_n|s_t|s_d|i_b|substring|appendChild|title|cver|SRC|mlare|track_hits|1E4|12E3|screen|width|8E3|9E3|NaN|100|frames|ceil|1E5|random|startgif|toGMTString|browserLanguage|lt|o_de|lT|gt|gT|host|s_ta|chfh|chfh2|Thu|_Hasync|push|NoHits|in|of_beautifier|an_example|apply|this'.split('|'),0,{}))
