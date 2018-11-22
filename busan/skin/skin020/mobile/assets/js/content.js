﻿var jq=jQuery.noConflict();function buildContentTemplateHTML(){return{head:"<head></head>",body:"<body></body>",header:"<header></header>",nav:"<nav></nav>",article:"<article></article>",footer:"<footer></footer>",section:"<section></section>"}}function buildContentHeadHTML(){return{title:"<title>Leaders Academy</title>",meta_http:'<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />',stylesheet:'<link rel="stylesheet" href="/la/busan/assets/css/mobile.css">',jquery:'<script src="https://code.jquery.com/jquery-migrate-1.4.1.min.js"><\/script>\n<script src="https://code.jquery.com/jquery-3.2.1.min.js"><\/script>',javascript:'<script src="/la/busan/assets/js/content.js"><\/script>'}}function storeContentMainNavigationMetadata(){return{row_1_data:{row_number:1,link_data:{leaders_jr_data:{id:"leaders_jr",title:"Leaders Jr.",href:"leaders_jr/index_leaders_jr.htm"},gpa_data:{id:"gpa",title:"GPA/Testing",href:"gpa/index_gpa.htm"},english_data:{id:"english",title:"English",href:"english/index_english.htm"}}},row_2_data:{row_number:2,link_data:{camps_data:{id:"camps",title:"Camps",href:"camps/index_camps.htm"},lessons_data:{id:"lessons",title:"Lessons",href:"lessons/index_lessons.htm"},awards_data:{id:"awards",title:"Awards",href:"awards/index_awards.htm"}}},row_3_data:{row_number:3,link_data:{debate_data:{id:"debate",title:"Debate",href:"debate/index_debate.htm"},events_data:{id:"events",title:"Events",href:"events/index_events.htm"},announcements_data:{id:"announcements",title:"Announcements",href:"announcements/index_announcements.htm"}}},row_4_data:{row_number:4,link_data:{apply_students_data:{id:"apply_students",title:"Apply (Students)",href:"apply_students/apply_students.htm"},faculty_data:{id:"faculty",title:"Faculty",href:"faculty/index_faculty.htm"},apply_faculty_data:{id:"apply_faculty",title:"Apply (Faculty)",href:"apply_faculty/apply_faculty.htm"}}},row_5_data:{row_number:5,link_data:{about_us_data:{id:"about_us",title:"About Us",href:"about_us/about_us.htm"},contact_us_data:{id:"contact_us",title:"Contact Us",href:"contact_us/contact_us.htm"},location_data:{id:"location",title:"Location",href:"location/location.htm"}}},row_6_data:{row_number:6,link_data:{business_data:{id:"business",title:"Business",href:"business/index_business.htm"},media_data:{id:"media",title:"Media",href:"media/index_media.htm"}}}}}function storeContentFooterMetadata(){return{row_1_data:{row_number:1,link_data:{naver:{href:"https://www.naver.com/",title:"Naver",id:"naver"},facebook:{href:"https://www.facebook.com/JoinLeadersAcademy/",title:"Facebook",id:"facebook"},twitter:{href:"https://twitter.com/",title:"Twitter",id:"twitter"},youtube:{href:"https://youtube.com/",title:"YouTube",id:"youtube"},kakao:{href:"https://kakao.com/",title:"Kakao",id:"kakao"}}},row_2_data:{row_number:2,link_data:{instagram:{href:"https://instagram.com/leaders_academy_busan",title:"Instagram",id:"instagram"},wechat:{href:"https://wechat.com/",title:"WeChat",id:"wechat"},google:{href:"https://plus.google.com/",title:"Google+",id:"google"},line:{href:"https://line.com/",title:"Line",id:"line"},whatsapp:{href:"https://whatsapp.com/",title:"WhatsApp",id:"whatsapp"}}}}}function renderContentHeadHTML(){var t,e,a;t=jq("head"),a=(e=buildContentHeadHTML()).title+e.meta_http+e.stylesheet+e.jquery+e.javascript,jq(t).html(a)}function renderContentTopHeaderHTML(t){var e;e='<a href="'+t+'" title="Leaders Academy - Home">\n  <img src="'+t+'assets/img/logo/logo.png" width="230" height="170" alt="Leaders Academy - Home" />\n</a>\n<section id="header-right">\n  <div id="header-search">\n    <script>\n      (function() {\n        var cx = \'006315930114800819546:bz06kk34ffi\';\n        var gcse = document.createElement(\'script\');\n        gcse.type = \'text/javascript\';\n        gcse.async = true;\n        gcse.src = \'https://cse.google.com/cse.js?cx=\' + cx;\n        var s = document.getElementsByTagName(\'script\')[0];\n        s.parentNode.insertBefore(gcse, s);\n      })();\n    <\/script>\n    <gcse:searchbox-only></gcse:search>\n  </div>\n  <div id="header-links">\n    <div id="header-links-level_2">\n      <a href="javascript: displayMenu(\'main\');" title="Main Menu" id="link-main_menu">Main Menu</a>\n    </div>\n  </div>\n</section>\n';var a;a=jq("header"),jq(a).html(e)}function renderContentMainNavigationHTML(a){var t,e,n;t=jq("nav"),e=storeContentMainNavigationMetadata(),n="",n='<section id="nav-main_menu">\n',jq.each(e,function(t,e){n=n+'<section id="nav-row_'+e.row_number+'">\n',jq.each(e.link_data,function(t,e){n=(n=(n=n+'<div id="link-'+e.id+'">\n')+'  <a href="'+a+e.href+'" title="'+e.title+'"></a>\n')+"  <span>"+e.title+"</span>\n",n+="</div>\n"}),n+="</section>\n"}),n+='</section>\n<section id="nav-section_menu">\n</section>\n',jq(t).html(n),jq(t).attr("id","nav-sub_menu")}function renderContentFooterHTML(){var t,e,a;footer_selector="footer",t=jq(footer_selector),e=storeContentFooterMetadata(),a="",a='  <section id="footer-border">\n    <div></div>\n  </section>\n',jq.each(e,function(t,e){a=a+'<section id="footer-row_'+e.row_number+'">\n',jq.each(e.link_data,function(t,e){a=a+'<a href="'+e.href+'" title="'+e.title+'" target="_blank" id="link-'+e.id+'"></a>\n'}),a+="</section>\n"});var n=new Date;year=n.getFullYear(),a=a+'<section id="footer-row_3">\n  <span>Leaders Academy &copy; '+year.toString()+"</span>\n</section>\n",jq(t).html(a)}function renderContent(){var t="/la/busan/";jq("table").css("opacity","1"),renderContentTopHeaderHTML(t),renderContentMainNavigationHTML(t),renderContentFooterHTML()}function displayMenu(t){var e,a,n,i;"main"===t?e="#nav-main_menu":"section"===t&&(e="#nav-section_menu"),a=jq(e),n={display:"block"},i={display:"none",margin:"0"},"none"===jq(e).css("display")?jq(a).css(n):jq(a).css(i)}