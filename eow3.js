 (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        ga('create', 'UA-41311132-1', 'auto', 'blogger');
        ga('blogger.send', 'pageview');
 $(function(){$('.searchform').submit(function(){$('.search-item').remove();findit();return false});function findit(){var labelname=$('.searchbar').val();if(labelname.length>=1){var domainname=$('.tl-bloglink').attr('data-url');$('.search-out').show();$('.search-label').show().html('Searching ...');var url=domainname+'/feeds/posts/default?max-results=5&alt=json&q='+labelname;$.ajax({type:'GET',url:url,async:true,contentType:"application/json",dataType:'jsonp',success:function(json){doSearch(json,labelname);$('.more-result').attr('href',domainname+'search?q='+labelname)}})}else{alert('Please enter your query...')}}function doSearch(json,query){if(json.feed.entry){for(var i=0;i<json.feed.entry.length;i++){for(var j=0;j<json.feed.entry[i].link.length;j++){if(json.feed.entry[i].link[j].rel=='alternate'){var postUrl=json.feed.entry[i].link[j].href;break}}try{var imageurl=json.feed.entry[i].media$thumbnail.url}catch(e){var imageurl='http://3.bp.blogspot.com/-zvVhSlsk0xg/VfzbhOQ1zPI/AAAAAAAAAt0/hRsGBhuP2a0/s1600/No%2BImage%2BAvailable.png'}var postTitle=json.feed.entry[i].title.$t;var item='<div class="search-item"><a href="'+postUrl+'" target="_blank"><img src="'+imageurl+'"/></a><a href="'+postUrl+'" target="_blank">'+postTitle+'</a></div>';$('.search-result').append(item)}$('.search-label').hide(function(){$('.more-result b').text(query);$('.more-result').show()})}else{$('.search-label').html('No result');$('.more-result').hide()}}});
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('$(1(){$(\'.8-Z>j>p,.10 11,.z 12,.13 .z p,.14-15>j>p\').16(\'<9 A="8-17"></9>\');$(\'.q 9\').2(1(){k B=$(\'.3-a\').f()==r?0:r;g($(\'.3-a\').f()===0){$(\'.q 9\').C(\'D\');$(\'.3-a,.E\').l({f:B})}$(\'.3-F\').m()});$(G).18(1(e){g($(\'.3-a\').f()==r){k s=$(".3-a");g(!s.19(e.H)&&s.1a(e.H).1b===0){$(\'.3-a,.E\').l({f:0});$(\'.3-F\').m();$(\'.q 9\').C(\'D\')}}});$(".1c").2(1(){$(\'I, J\').l({K:$(".1d-t").1e().1f},1g)});$(\'.4,.1h\').2(1(){$(\'.4\').n();$(\'.u\').5(\'b\').c(\'L\');$(\'.M\').6(\'d\').5(\'h\');$(\'.o\').6(\'d\').5(\'h\');N(1(){$(\'.o\').n()},O)});$(\'.M\').2(1(){g($(7).P(\'d\')){N(1(){$(\'.4\').v();$(\'.u\').6(\'b\').c($(Q).c());$(\'.o\').6(\'h\').5(\'d\')},O);$(7).6(\'h\').5(\'d\');$(\'.o\').1i(0).c($(Q).c())}});$(\'.4\').2(1(){$(\'.4\').n();$(\'.u\').5(\'b\').c(\'L\');$(7).6(\'d\').5(\'h\')});$(\'.1j\').2(1(){$(\'I, J\').l({K:0},R);1k 1l});k w=$(\'.8-S-T 9\'),x=$(\'.8-U-t>j\');w.V().6(\'b\');x.m();x.V().1m();w.2(1(){$(\'.8-S-T 9\').5(\'b\');k W=$(7).1n(\'A\');$(7).6(\'b\');$(\'.8-U-t>j\').X(1(){g($(7).P(W)){$(7).v(R)}1o{$(7).m()}})});$(\'.8-y\').2(1(){$(\'.4,.y\').v()});$(\'.4,.1p\').2(1(){$(\'.4,.y\').n()})});$(G).1q(1(){$(\'1r 1s\').X(1(i,Y){1t.1u(Y)})});',62,93,'|function|click|search|overlay|removeClass|addClass|this|tl|span|wrap|active|height|close||width|if|open||div|var|animate|hide|fadeOut|panel|h2|searchicon|250|container|content|wrapper|fadeIn|sb|sc|contactpop|posttitle|class|cwidth|toggleClass|nonactive|searchform|out|document|target|html|body|scrollTop|auto|navo|setTimeout|300|hasClass|window|800|stab|buttons|tab|first|thisclass|each|block|sidebarW|comments|h4|h1|static_page|footer|sec|wrapInner|wrapIn|mouseup|is|has|length|scrollbottom|main|offset|top|400|panelclose|show|backtotop|return|false|slideDown|attr|else|closecontact|ready|pre|code|hljs|highlightBlock'.split('|'),0,{})) 
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(6($,5,h,M){8 9=\'9\',Z=\'1D\',10=\'N 1E\',O=\'v-1F\',n=h.1G||h.1H,P=(5.1I===M||!!5.1J||!n.1g),7={1h:o,Q:\'1K[a-c]\',w:\'a:1L/1M;1N,1O///1P\',1i:1Q,P:P,1j:\'1R\',11:\'N 1S 1T q 1U 1V\',1k:\'\',1W:{r:\'v\'},1X:{x:O},1Y:{r:O,x:\'v-1Z\'},20:{r:O},R:o},12={b:\'a-c\',y:0,z:0,1l:o},$5=$(5),$A=$.A,$T=$.T,$a=$.a||6(3,1m){d $(3).a(1m)},$13=$.13||6(1n,3){21(3=3.22){4(3===1n){d o}}d 1o},p=[],B=0,t=0;$[9]=$T(7,12,$[9]);6 C(14,j){d 14[j]===M?7[j]:14[j]}6 U(){8 q=5.23;d(q===M)?n.U:q}$.24[9]=6(k){k=k||{};8 w=C(k,\'w\'),R=C(k,\'R\'),15=C(k,\'15\'),16={},j;$(15).f(\'q\',D);1p(j 25 12){16[j]=C(k,j)}d l.1q(6(1r,3){4(3===5){$(7.Q).9(k)}E{4(R&&$a(3,Z)){d}8 $3=$(3).a(Z,1);4(w&&3.26===\'27\'&&!3.c){3.c=w}$3[9]=$T({},16);u(\'28\',$3);p.29($3)}})};6 u(17,$3){8 m=7[\'f\'+17];4(m){4($A(m)){m.2a($3[0])}E{4(m.x){$3.x(m.x)}4(m.r){$3.r(m.r)}}}$3.2b(\'v\'+17,[$3]);D()}6 18(e){u(e.1s,$(l).2c(10,18))}6 19(F){4(!p.g){d}F=F||7.P;B=2d;8 1a=U(),1t=5.2e||n.2f,1u=5.2g||n.2h,i,g;1p(i=0,g=p.g;i<g;i++){8 $3=p[i],3=$3[0],G=$3[9],V=1o,W=F,H;4(!$13(n,3)){V=o}E 4(F||!G.1l||3.2i||3.2j){4(!W){8 I=3.1g(),y=G.y,z=G.z;H=(I.2k+1a-z)-1t;W=(H<=1a&&I.2l>-z&&I.2m<=1u+y&&I.2n>-y)}4(W){u(\'2o\',$3);8 b=G.b,c=$A(b)?b($3):3.2p(b);4(c){$3.f(10,18);3.c=c}V=o}E{4(H<B){B=H}}}4(V){p.2q(i--,1);g--}}4(!g){u(\'2r\',$(n))}}6 1b(){4(t>1){t=1;19();1v(1b,7.1i)}E{t=0}}6 D(e){4(!p.g){d}4(e&&e.1s===\'q\'&&e.2s===5){4(B>=U()){d}}4(!t){1v(1b,0)}t=2}6 1c(){$5.9()}6 1w(){19(o)}$(h).2t(6(){u(\'2u\',$5);$5.f(7.1j,1c).f(7.11,D).f(7.1k,1w);$(h).f(7.11,D);4(7.1h){1c()}})})(5.1d||5.1e||5.$,5,h);(6($){8 7=$.9;7.Q+=\',1x,2v[a-c]\';7.1y=\'a-1z\';$(h).f(\'1A\',\'1x\',6(e,$3){8 b=$3.9.b,1B=$.A(b);$3.J(\'1z\',$3.J(7.1y)).2w(\'2x,2y\').1q(6(1r,3){8 $X=$(3);$X.J(\'c\',1B?b($X):$X.J(b))});l.N()})})(5.1d||5.1e||5.$);(6($){8 7=$.9,K=7.K||\'a-v-2z\',1C=/<!--([\\s\\S]*)-->/;7.Q+=\',[\'+K+\']\';$(h).f(\'1A\',\'[\'+K+\']\',6(){8 $l=$(l),$L=$l,1f=$l.J(K),Y;4(1f){$L=$(\'#\'+1f)}4($L.g){Y=1C.2A($L.2B());4(Y){$L.2C($.2D(Y[1]))}}$l.2E(\'N\')})})(5.1d||5.1e||5.$);',62,165,'|||el|if|window|function|options|var|lazyLoadXT|data|srcAttr|src|return||on|length|document||prop|overrides|this|handler|docElement|true|elements|scroll|removeClass||waitingMode|triggerEvent|lazy|blankImage|addClass|edgeX|edgeY|isFunction|topLazy|getOrDef|queueCheckLazyElements|else|force|objData|topEdge|elPos|attr|widgetAttr|target|undefined|load|classLazyHidden|forceLoad|selector|checkDuplicates||extend|scrollTop|removeNode|visible|child|match|dataLazied|load_error|updateEvent|elementOptions|contains|obj|scrollContainer|elementOptionsOverrides|event|triggerLoadOrError|checkLazyElements|viewportTop|timeoutLazyElements|initLazyElements|jQuery|Zepto|id|getBoundingClientRect|autoInit|throttle|loadEvent|forceEvent|visibleOnly|name|parent|false|for|each|index|type|viewportHeight|viewportWidth|setTimeout|forceLoadAll|video|videoPoster|poster|lazyshow|isFuncSrcAttr|reComment|lazied|error|hidden|documentElement|body|onscroll|operamini|img|image|gif|base64|R0lGODlhAQABAIAAAAAAAP|yH5BAEAAAAALAAAAAABAAEAAAIBRAA7|99|pageshow|orientationchange|resize|touchmove|focus|oninit|onshow|onload|loaded|onerror|while|parentNode|pageYOffset|fn|in|tagName|IMG|init|push|call|trigger|off|Infinity|innerHeight|clientHeight|innerWidth|clientWidth|offsetWidth|offsetHeight|top|bottom|left|right|show|getAttribute|splice|complete|currentTarget|ready|start|iframe|children|source|track|widget|exec|html|replaceWith|trim|triggerHandler'.split('|'),0,{}))

