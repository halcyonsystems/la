﻿var jq=jQuery.noConflict();function buildContentTemplateHTML(){return{head:"<head></head>",body:"<body></body>",header:"<header></header>",nav:"<nav></nav>",article:"<article></article>",footer:"<footer></footer>",section:"<section></section>"}}function buildContentHeadHTML(){var t={};return(t={title:"<title>Leaders Academy</title>",meta_http:'<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />',stylesheet:'<link rel="stylesheet" href="/skin/skin020/mobile/assets/css/mobile.css">',jquery:'<script src="https://code.jquery.com/jquery-migrate-1.4.1.min.js"><\/script>\n<script src="https://code.jquery.com/jquery-3.2.1.min.js"><\/script>',javascript:'<script src="/skin/skin020/mobile/assets/js/content.js"><\/script>'}).google_analytics="\x3c!-- Global site tag (gtag.js) - Google Analytics --\x3e\n<script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-112766766-1\"><\/script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n    gtag('js', new Date());\n    gtag('config', 'UA-112766766-1');\n<\/script>\n",t}function storeContentMainNavigationMetadata(){return{row_1_data:{row_number:1,link_data:{gap_data:{id:"gpa",title:"GPA/Testing",href:"admission/admission1"},english_data:{id:"english",title:"English",href:"program/program2"},camps_data:{id:"camps",title:"Camps",href:"program/program3"},lessons_data:{id:"lessons",title:"Lessons",href:"skin/skin020/mobile/lessons/index_lessons.htm"}}},row_2_data:{row_number:2,link_data:{awards_data:{id:"awards",title:"Awards",href:"community/community2"},debate_data:{id:"debate",title:"Debate",href:"program/program1"},events_data:{id:"events",title:"Events",href:"community/community3"},announcements_data:{id:"announcements",title:"Announcements",href:"community/community1"}}},row_3_data:{row_number:3,link_data:{apply_students_data:{id:"apply_students",title:"Apply (Students)",href:"admission/admission4"},faculty_data:{id:"faculty",title:"Faculty",href:"about/about6"},apply_faculty_data:{id:"apply_faculty",title:"Apply (Faculty)",href:"admission/admission3"},business_data:{id:"business",title:"Business",href:"skin/skin020/mobile/business/index_business.htm"}}},row_4_data:{row_number:4,link_data:{about_us_data:{id:"about_us",title:"About Us",href:"about/about1"},contact_us_data:{id:"contact_us",title:"Contact Us",href:"skin/skin020/mobile/contact_us/index_contact_us.htm"},location_data:{id:"location",title:"Location",href:"skin/skin020/mobile/location/index_location.htm"},media_data:{id:"media",title:"Media",href:"community/community4"}}}}}function storeContentFooterMetadata(){return{row_1_data:{row_number:1,link_data:{naver:{href:"https://blog.naver.com/leadersacademtybd/",title:"Naver",id:"naver"},facebook:{href:"https://www.facebook.com/JoinLeadersAcademy/",title:"Facebook",id:"facebook"},twitter:{href:"https://twitter.com/",title:"Twitter",id:"twitter"},youtube:{href:"https://youtube.com/",title:"YouTube",id:"youtube"},kakao:{href:"https://kakao.com/",title:"Kakao",id:"kakao"}}},row_2_data:{row_number:2,link_data:{instagram:{href:"https://instagram.com/",title:"Instagram",id:"instagram"},wechat:{href:"https://wechat.com/",title:"WeChat",id:"wechat"},google:{href:"https://plus.google.com/",title:"Google+",id:"google"},line:{href:"https://line.com/",title:"Line",id:"line"},whatsapp:{href:"https://whatsapp.com/",title:"WhatsApp",id:"whatsapp"}}}}}function isNotIndexPage(){return"?",window.location.href.indexOf("?")}function storeContentArticleMetadata(){var t,d,e,n,a={};t=isNotIndexPage(),d=(e=window.location.pathname).lastIndexOf("/"),n=e.slice(d+1);var l=new Boolean;switch(n){case"admission1":n="gpa",l=!1;break;case"program2":n="english",l=!0;break;case"program3":n="camps",l=!0;break;case"community2":n="awards",l=!0;break;case"program1":n="debate",l=!0;break;case"community3":n="events",l=!0;break;case"community1":n="announcements",l=!0;break;case"admission4":n="apply_students",l=!1;break;case"about6":n="faculty",l=!0;break;case"admission3":n="apply_faculty",l=!1;break;case"about1":n="about_us",l=!1;break;case"community4":n="media",l=!0}if(-1===t&&!0===l){var i,h,o,r,b,c,s,y,m,u,p,f,g,_,v,j;"english"===n?i="table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(3) > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr":"camps"===n?i="table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr":"debate"===n?i="table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(3) > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr":"awards"===n||"events"===n||"announcements"===n||"media"===n?i="table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr":"faculty"===n&&(i="table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > form > table:nth-child(4) > tbody > tr > td > table > tbody > tr"),h=jq(i),o="","faculty"===n?(_=1,jq.each(h,function(t,d){c=(t+1).toString(),(t+1)%2==0&&0!==t||(o=o+'<div class="article-faculty-row" id="article-faculty-row_'+_+'">\n'),o=o+'  <div class="article-faculty-member" id="faculty-member-'+c+'">\n'+jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > form > table:nth-child(4) > tbody > tr:nth-child("+c+") > td > table > tbody > tr > td").html()+jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > form > table:nth-child(4) > tbody > tr:nth-child("+c+") > td > table > tbody > tr > td:nth-child(2)").html()+"  </div>\n",(t+1)%2!=0&&t!==jq(h.length)||(_++,o+="</div>\n")}),f="강사소개 (FACULTY)"):"media"===n?(_=1,v=0,o='<div class="article-media" id="article-content">\n',jq.each(h,function(t,d){if(t<jq(h).length-1){for(c=(t+1).toString(),o=o+'<div class="article-media-row" id="article-media-row_'+c+'">\n',j=1;j<=2;j++)o=o+'  <div class="media-item" id="media-item_'+(++v).toString()+'">\n'+jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child("+c+") > td:nth-child("+j.toString()+") > table > tbody > tr > td > table > tbody > tr > td").html()+jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child("+c+") > td:nth-child("+j.toString()+") > table > tbody > tr:nth-child(2) > td").html()+"  </div>\n";o+="</div>\n"}}),f="포토갤러리 (MEDIA)"):jq.each(h,function(t,d){c=(t+1).toString(),"english"===n?(r="table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(3) > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child("+c+") th > a",m="table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(3) > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child("+c+") > td:nth-child(4)",f=jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(2) > td:nth-child(2) > strong").html()):"camps"===n?(r="table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child("+c+") th > a",m="table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child("+c+") > td:nth-child(4)",f="캠프 (CAMPS)"):"awards"===n?(r="table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child("+c+") th > a",m="table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child("+c+") > td:nth-child(4)",f="수상실적 (AWARDS)"):"debate"===n?(r="table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(3) > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child("+c+") th > a",m="table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(3) > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child("+c+") > td:nth-child(4)",f=jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(2) > td:nth-child(2) > strong").html()):"events"===n?(r="table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child("+c+") th > a",m="table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child("+c+") > td:nth-child(4)",f="토론대회 (EVENTS)"):"announcements"===n&&(r="table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child("+c+") th > a",m="table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child("+c+") > td:nth-child(4)",f="학원소식 (ANNOUNCEMENTS)"),b=jq(r),s=jq(b).attr("href"),y=jq(b).text(),o=o+'<div class="article-'+n+'-listing" id="'+n+"-listing-"+c+'">\n  <a href="'+s+'" title="'+y+'">'+y+"</a>\n",u=jq(m),p=jq(u).text(),o=o+"  <span> - "+p+"</span>\n</div>\n"}),a={title:f,contents:o}}else"gpa"===n?(f="(테스트) GPA/TESTING",g=jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td").html()):"english"===n?(f=jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(2) > td:nth-child(2) > strong").html(),g=jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(3) > td > table > tbody > tr:nth-child(5) > td > table > tbody > tr > td").html()):"camps"===n?(f="캠프 (CAMPS)",g=jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(5) > td > table > tbody > tr > td").html()):"awards"===n?(f="수상실적 (AWARDS)",g=jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr:nth-child(5) > td > table > tbody > tr > td").html()):"debate"===n?(f=jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(2) > td:nth-child(2) > strong").html(),g=jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(3) > td > table > tbody > tr:nth-child(5) > td > table > tbody > tr > td").html()):"events"===n?(f="토론대회 (EVENTS)",g=jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr:nth-child(5) > td > table > tbody > tr > td").html()):"announcements"===n?(f="학원소식 (ANNOUNCEMENTS)",g=jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr:nth-child(5) > td > table > tbody > tr > td").html()):"apply_students"===n?(f="토론 최상위반 접수 (APPLY STUDENTS)",g=jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td").html()):"faculty"===n?(f="강사소개 (FACULTY)",g="<h4>"+jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td").html()+'</h4>\n<div class="article-faculty-member-page">'+jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr:nth-child(4) > td > table > tbody > tr > td").html()+"</div>\n"):"apply_faculty"===n?(f="입학시험&특강 신청 (APPLY FACULTY)",g=jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td").html()):"about_us"===n?(f="회사 소개 (ABOUT US)",g=jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td").html()):"media"===n&&(f="포토갤러리 (MEDIA)",g="<h4>"+jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td").html()+'</h4>\n<div class="media-item-holder">'+jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr:nth-child(4) > td > table > tbody > tr > td").html()+"</div>\n"),a={title:f,contents:g};return a.section_value=n,a}function renderContentFrameHTML(){var t,d,e;t=jq("html"),e=(d=buildContentTemplateHTML()).head+d.body+d.header+d.nav+d.article+d.footer+d.section,jq(t).html(e)}function renderContentHeadHTML(){var t,d,e;t=jq("head"),e=(d=buildContentHeadHTML()).title+d.meta_http+d.stylesheet+d.jquery+d.javascript,jq(t).html(e)}function renderContentTopHeaderHTML(t){var d;d='<a href="'+t+'" title="Leaders Academy - Home">\n  <img src="'+t+'skin/skin020/mobile/assets/img/logo/logo.png" width="230" height="170" alt="Leaders Academy - Home" />\n</a>\n<section id="header-right">\n  <div id="header-search">\n    <script>\n      (function() {\n        var cx = \'006315930114800819546:bz06kk34ffi\';\n        var gcse = document.createElement(\'script\');\n        gcse.type = \'text/javascript\';\n        gcse.async = true;\n        gcse.src = \'https://cse.google.com/cse.js?cx=\' + cx;\n        var s = document.getElementsByTagName(\'script\')[0];\n        s.parentNode.insertBefore(gcse, s);\n      })();\n    <\/script>\n    <gcse:searchbox-only></gcse:search>\n  </div>\n  <div id="header-links">\n    <div id="header-links-level_1">\n      <a href="'+t+'member/login?n=%2Fmypage%2Findex" title="Login" id="link-login">Login</a>\n      <a href="'+t+'ko/" title="한국어" id="link-korean">한국어</a>\n    </div>\n    <div id="header-links-level_2">\n      <a href="javascript: displayMenu(\'main\');" title="Main Menu" id="link-main_menu">Main Menu</a>\n      <a href="javascript: displayMenu(\'section\');" title="Section Menu" id="link-section_menu">Section Menu</a>\n    </div>\n  </div>\n</section>\n';var e;e=jq("header"),jq(e).html(d)}function renderContentMainNavigationHTML(t){var d,e,n;d=jq("nav"),e=storeContentMainNavigationMetadata(),n="",n='<section id="nav-main_menu">\n',jq.each(e,function(d,e){n=n+'<section id="nav-row_'+e.row_number+'">\n',jq.each(e.link_data,function(d,e){n=(n=(n=n+'<div id="link-'+e.id+'">\n')+'  <a href="'+t+e.href+'" title="'+e.title+'"></a>\n')+"  <span>"+e.title+"</span>\n",n+="</div>\n"}),n+="</section>\n"}),n+='</section>\n<section id="nav-section_menu">\n</section>\n',jq(d).html(n),jq(d).attr("id","nav-sub_menu")}function renderContentSectionNavigationHTML(t){var d,e,n;e=(d=window.location.pathname).lastIndexOf("/skin/skin020/mobile/"),nav_html=e>-1||"/about/about1"===d||"/admission/admission1"===d||"/admission/admission3"===d||"/admission/admission4"===d?"<span>There is no menu for this section.</span>\n":'<a href="'+d+'" title="Page #1" id="link-page_1">Page #1</a>\n',n=jq("#nav-section_menu"),jq(n).html(nav_html)}function renderContentFooterHTML(){var t,d,e;footer_selector="footer",t=jq(footer_selector),d=storeContentFooterMetadata(),e="",e='  <section id="footer-border">\n    <div></div>\n  </section>\n',jq.each(d,function(t,d){e=e+'<section id="footer-row_'+d.row_number+'">\n',jq.each(d.link_data,function(t,d){e=e+'<a href="'+d.href+'" title="'+d.title+'" target="_blank" id="link-'+d.id+'"></a>\n'}),e+="</section>\n"}),e+='<section id="footer-row_3">\n  <span>Leaders Academy &copy; 2018</span>\n</section>\n',jq(t).html(e)}function renderContentArticleHTML(t){var d,e;d=jq("article"),e='<div class="article-header-'+t.section_value+'" id="article-header">\n  <h2>'+t.title+'</h2>\n</div>\n<div class="article-'+t.section_value+'" id="article-content">\n  '+t.contents+"\n</div>\n",jq(d).html(e)}function renderContent(){var t;t=storeContentArticleMetadata(),jq("table").css("opacity","1"),renderContentFrameHTML(),renderContentHeadHTML(),renderContentTopHeaderHTML("/"),renderContentMainNavigationHTML("/"),renderContentSectionNavigationHTML("/"),renderContentArticleHTML(t),renderContentFooterHTML()}function displayMenu(t){var d,e,n,a;"main"===t?d="#nav-main_menu":"section"===t&&(d="#nav-section_menu"),e=jq(d),n={display:"block"},a={display:"none",margin:"0"},"none"===jq(d).css("display")?jq(e).css(n):jq(e).css(a)}