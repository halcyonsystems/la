﻿/* index.js ~ Renders the mobile landing page after the desktop landing page has loaded. */

$(document).ready(
  function () {
    renderContent();
  }
);



function buildTemplateHTML () {
  /**** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
   * @params - NONE
   * 
   * PURPOSE OF FUNCTION 
   *   Returns the HTML which contains the basic 'sections' of the Landing Page such as 
   *   the <DOCTYPE>, <html>, <head> tags along with others.
   *   
   * FUNCTIONS WHICH USE 'buildTemplateHTML'
   *   + renderContent
   * 
    *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ****/

  // Initialize Object which contains the basic semantic HTML which makes up the Landing Page.
  var template_html = {};

  // Store the HTML references within 'template'.
  template_html = {
    head: "<head></head>", 
    body: "<body></body>", 
    header: "<header></header>", 
    nav: "<nav></nav>", 
    footer: "<footer></footer>", 
    section: "<section></section>"
  };

  // Send 'template_html' for processing by another function.
  return template_html;

} // END of FUNCTION 'buildTemplateHTML'



function buildHeadHTML () {
  /**** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
   * @params - NONE
   * 
   * PURPOSE OF FUNCTION 
   *   Returns the HTML which is contained within the <head> tag of the Landing Page.
   *   
   * FUNCTIONS WHICH USE 'buildHeadHTML'
   *   + renderHeadHTML
   * 
    *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ****/

  // Initialize JS object which contains the HTML references used within the <head> tag.
  var head_html = {};

  // Store the HTML references within 'header_html'.
  head_html = {
    title: "<title>Leaders Academy</title>", 
    meta_http: "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />", 
    stylesheet: "<link rel=\"stylesheet\" href=\"/la/assets/css/mobile-test.css\">", 
    jquery: "<script src=\"/la/assets/js/jquery/jquery-3.2.1.slim.js\"></script>", 
    javascript: "<script src=\"/la/assets/js/content.js\"></script>"
  };

  // Send the HTML out to be processed by another function
  return head_html;

} // END of FUNCTION 'buildHeadHTML'



function renderTopHeaderHTML (base_path) {
  /**** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
   * @params - 
   *   'base_path - String - Contains the filepath referenced in 'href' attributes within 
   *                         <a> tags.
   * 
   * PURPOSE OF FUNCTION 
   *   Returns the HTML for the logo, links, and search field which is contained within the 
   *   <header> tag of the Landing Page.
   *   
   * FUNCTIONS WHICH USE 'buildHeadHTML'
   *   + renderContent
   * 
    *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ****/

  // Initializes String which contains the HTML which displays the logo, Login & Language 
  // links, and Search field.
  var header_html;

  header_html = "<a href=\"" + base_path + "\" title=\"Leaders Academy - Home\">\n" + 
                "  <img src=\"" + base_path + "assets/img/logo/logo.png\" width=\"230\" height=\"170\" alt=\"Leaders Academy - Home\" />\n" + 
                "</a>\n" + 
                "<section id=\"header-right\">\n" + 
                "  <div id=\"header-search\">\n" + 
                "    <script>\n" + 
                "      (function() {\n" + 
                "        var cx = '006315930114800819546:bz06kk34ffi';\n" + 
                "        var gcse = document.createElement('script');\n" + 
                "        gcse.type = 'text/javascript';\n" + 
                "        gcse.async = true;\n" + 
                "        gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;\n" + 
                "        var s = document.getElementsByTagName('script')[0];\n" + 
                "        s.parentNode.insertBefore(gcse, s);\n" + 
                "      })();\n" + 
                "    </script>\n" + 
                "    <gcse:searchbox-only></gcse:search>\n" + 
                "  </div>\n" + 
                "  <div id=\"header-links\">\n" + 
                "    <a href=\"" + base_path + "login/login.htm\" title=\"Login\" id=\"link-login\">Login</a>\n" + 
                "    <a href=\"" + base_path + "ko/\" title=\"한국어\" id=\"link-korean\">한국어</a>\n" + 
                "  </div>\n" + 
                "</section>\n";

  var header_selector;
  var header_element = {};

  header_selector = "header";
  header_element = $(header_selector);

  $(header_element).html(header_html);

  $(header_element).attr("class", "header-index");
} // END of FUNCTION 'renderTopHeaderHTML'



function storeMainNavigationMetadata () {
  /**** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
   * @params - NONE
   * 
   * PURPOSE OF FUNCTION 
   *   Returns the metadata such as the HTML attributes, "id", "title", & "href" 
   *   which makes up the Main Navigation of the Landing Page.
   *   
   * FUNCTIONS WHICH USE 'storeMainNavigationMetadata'
   *   + renderNavigationHTML
   * 
    *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ****/

  // Initialize Object which contains the metadata for the various sections.
  var nav_data = {};
  
  // Store the HTML attributes, "id", "title", & "href" for the various sections within 'nav_data'.
  nav_data = {
    row_1_data : {
      row_number: 1, 
      link_data : {  
        gap_data : {
          id: "gpa",  
          title: "GPA/Testing", 
          href: "gpa/index_gpa.htm"
        }, 
        english_data : {
          id: "english", 
          title: "English", 
          href: "english/index_english.htm"
        }, 
        camps_data : {
          id: "camps", 
          title: "Camps", 
          href: "camps/index_camps.htm"
        }, 
        lessons_data : { 
          id: "lessons", 
          title: "Lessons", 
          href: "lessons/index_lessons.htm"
        }
      }
    }, 
    row_2_data : { 
      row_number: 2, 
      link_data : { 
        awards_data : { 
          id: "awards", 
          title: "Awards", 
          href: "awards/index_awards.htm"
        }, 
        debate_data : { 
          id: "debate", 
          title: "Debate", 
          href: "debate/index_debate.htm"
        }, 
        events_data : { 
          id: "events", 
          title: "Events", 
          href: "events/index_events.htm"
        }, 
        announcements_data : { 
          id: "announcements", 
          title: "Announcements", 
          href: "announcements/index_announcements.htm"
        }
      }
    }, 
    row_3_data : {
      row_number: 3,
      link_data : {    
        apply_students_data : { 
          id: "apply_students", 
          title: "Apply (Students)", 
          href: "apply_students/index_apply_students.htm"
        }, 
        faculty_data : { 
          id: "faculty", 
          title: "Faculty", 
          href: "faculty/index_faculty.htm"
        }, 
        apply_faculty_data : { 
          id: "apply_faculty", 
          title: "Apply (Faculty)", 
          href: "apply_faculty/index_apply_faculty.htm"
        }, 
        business_data : { 
          id: "business", 
          title: "Business", 
          href: "business/index_business.htm"
        }
      }
    }, 
    row_4_data : {
      row_number: 4, 
      link_data : { 
        about_us_data : { 
          id: "about_us", 
          title: "About Us", 
          href: "about_us/index_about_us.htm"
        }, 
        contact_us_data : { 
          id: "contact_us", 
          title: "Contact Us", 
          href: "contact_us/index_contact_us.htm"
        }, 
        location_data : { 
          id: "location", 
          title: "Location", 
          href: "location/index_location.htm"
        }, 
        media_data : { 
          id: "media", 
          title: "Media", 
          href: "media/index_media.htm"
        }
      }
    }
  }

  // Send the metadata out for processing by another function.
  return nav_data;

} // END of FUNCTION 'storeMainNavigationMetadata'




function storeFooterMetadata () {
  /**** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
   * @params - NONE
   * 
   * PURPOSE OF FUNCTION 
   *   Returns the metadata such as the HTML attributes, "href", "title", & "id" 
   *   which makes up the Footer of the Landing Page.
   *   
   * FUNCTIONS WHICH USE 'storeFooterMetadata'
   *   + renderFooterHTML
   * 
    *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ****/

  // Initialize JS object which contains the HTML references used within the <footer> tag.
  var footer_data = {};

  // Store the HTML references within 'footer_html'.
  footer_data = {
    row_1_data : {
      row_number: 1, 
      link_data : {
        naver : {
          href: "https://blog.naver.com/leadersacademtybd/", 
          title: "Naver",
          id: "naver"
        }, 
        facebook : {
          href: "https://www.facebook.com/JoinLeadersAcademy/", 
          title: "Facebook", 
          id: "facebook"
        }, 
        twitter : {
          href: "https://twitter.com/", 
          title: "Twitter", 
          id: "twitter"
        },
        youtube : {
          href: "https://youtube.com/", 
          title: "YouTube", 
          id: "youtube"
        }, 
        kakao : {
          href: "https://kakao.com/", 
          title: "Kakao", 
          id: "kakao"
        }
      }
    }, 
    row_2_data : {
      row_number: 2, 
      link_data : {
        instagram : {
          href: "https://instagram.com/", 
          title: "Instagram",
          id: "instagram"
        }, 
        wechat : {
          href: "https://wechat.com/", 
          title: "WeChat", 
          id: "wechat"
        }, 
        google : {
          href: "https://plus.google.com/", 
          title: "Google+", 
          id: "google"
        },
        line : {
          href: "https://line.com/", 
          title: "Line", 
          id: "line"
        }, 
        whatsapp : {
          href: "https://whatsapp.com/", 
          title: "WhatsApp", 
          id: "whatsapp"
        }
      }
    }
  }

  // Send the HTML out to be processed by another function
  return footer_data;

} // END of FUNCTION 'buildFooterHTML'



function renderFrameHTML () {
  /**** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
   * @params - NONE
   * 
   * PURPOSE OF FUNCTION 
   *   Assembles the HTML for the 'frame' of the template used for the mobile-friendly 
   *   site. The function also adds the HTML within the browser by inserting the HTML 
   *   into the <html> tag.
   *   
   * FUNCTIONS WHICH USE 'renderFrameHTML'
   *   + renderContent
   * 
    *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ****/


   // Initialize String which holds the selector for the HTML tag, <html>.
   var html_selector;
  
   // Initialize Object which contains the jQuery object for the HTML tag, "html".
   var html_element = {};
 
   html_selector = "html";
   html_element = $(html_selector);
 
   // Initialize variable which holds the Object which contains the HTML used for the 'frame' 
   // of the mobile-friendly template.
   var html_data;
 
   // Initialize String which contains the raw HTML used for the 'frame' of the mobile-friendly 
   // template.
   var html_html;
 
   // Pull the HTML for the 'frame' by calling the Function, 'buildTemplateHTML'.
   html_data = buildTemplateHTML();
 
   // Extract the HTML from the Object variable.
   html_html = html_data.head + html_data.body + html_data.header + html_data.nav + html_data.footer + html_data.section;
 
   // Insert the HTML within the current <html> tag within the browser.
   $(html_element).html(html_html);

} // END of FUNCTION 'renderFrame'

function renderHeadHTML ()  {
  /**** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
   * @params - NONE
   * 
   * PURPOSE OF FUNCTION 
   *   Assembles the HTML references used within the <head> tag. Also inserts the HTML 
   *   within the browser into the HTML tag <head>
   *   
   * FUNCTIONS WHICH USE 'renderHeadHTML'
   *   + renderContent
   * 
    *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ****/


  // Initialize String which holds the selector for the HTML tag, "<head>".
  var head_selector;
   
  // Initialize Object which contains the jQuery object for the HTML tag, "<head>".
  var head_element = {};

  head_selector = "head";
  head_element = $(head_selector);

  // Initialize variable which holds the Object which contains the HTML references contained 
  // within the <head> tag.
  var head_data;

  // Initialize String which contains the raw HTML used contained within the <head> tag.
  var head_html;

  // Pull the HTML contained within the <head> tag by calling the Function, 'buildHeadHTML'.
  head_data = buildHeadHTML();

  // Extract the HTML from the Object variable.
  head_html = head_data.title + head_data.meta_http + head_data.stylesheet + head_data.jquery + head_data.javascript;

  // Insert the HTML within the <head> tag within the browser.
  $(head_element).html(head_html);

} // END of FUNCTION 'renderHeadHTML'

function renderMainNavigationHTML (base_path)  {
    /**** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
   * @params - NONE
   *   'base_path - String - Contains the filepath referenced in 'href' attributes within 
   *                         <a> tags.
   * 
   * PURPOSE OF FUNCTION 
   *   Assembles the links and HTML elements used within the <nav> tag. Also inserts the HTML 
   *   within the browser into the HTML tag <nav>
   *   
   * FUNCTIONS WHICH USE 'renderMainNavigationHTML'
   *   + renderContent
   * 
    *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ****/


  // Initialize String which holds the selector for the HTML tag, "<nav>".
  var nav_selector;
  
  // Initialize Object which contains the jQuery object for the HTML tag, "<nav>".
  var nav_element = {};

  nav_selector = "nav";
  nav_element = $(nav_selector);

  // Initialize variable which holds the Object which contains the HTML references contained 
  // within the <nav> tag.
  var nav_data;

  // Initialize String which contains the raw HTML used contained within the <nav> tag.
  var nav_html;

  // Pull the HTML contained within the <nav> tag by calling the Function, 'storeMainNavigationMetadata'.
  nav_data = storeMainNavigationMetadata();

  nav_html = "";

  // Add the <section> tag which contains the main navigation HTML references
  nav_html = "<section id=\"nav-main_menu\">\n";

  // Extract the HTML from the Object variable.
  $.each(nav_data, 
    function (row_index, rows) {
      nav_html = nav_html + "<section id=\"nav-row_" + rows.row_number + "\">\n";
      
      $.each(rows.link_data,
        function (link_index, link_metadata) {
          nav_html = nav_html + "<div id=\"link-" + link_metadata.id + "\">\n";
          nav_html = nav_html + "  <a href=" + base_path + link_metadata.href + "\" title=\"" + link_metadata.title + "\"></a>\n"; 
          nav_html = nav_html + "  <span>" + link_metadata.title + "</span>\n";
          nav_html = nav_html + "</div>\n";
        }
      );

      nav_html = nav_html + "</section>\n";
    } 
  );

  // Close the <section> tag which contains the main navigation HTML references
  nav_html = nav_html + "</section>\n";

  // Insert the HTML within the <nav> tag within the browser.
  $(nav_element).html(nav_html);

} // END of FUNCTION renderMainNavigationHTML


function renderSectionNavigationHTML (base_path) {
  /**** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
   * @params - NONE
   *   'base_path - String - Contains the filepath referenced in 'href' attributes within 
   *                         <a> tags.
   * 
   * PURPOSE OF FUNCTION 
   *   Assembles the links and HTML elements used to allow for navigation among the Debate 
   *   section.
   *   
   * FUNCTIONS WHICH USE 'renderDebateSectionHTML'
   *   + renderContent
   * 
    *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ****/

  // Initialize String which acts as the selector for page numbers referencing the number 
  // of pages of links for a given section.
  var pages_selector;

  // Initialize Object which contains the jQuery object referencing the selector,
  // '.page-number'.
  var pages_elements = {};

  pages_selector = ".page-number";
  pages_elements = $(pages_selector);

  if ($(pages_elements) !== undefined)  {
    // Initialize Number which contains the number of pages which contains links leading to 
    // content.
    //
    // 'num_of_pages' will equal the number of links within the Section navigation.
    var num_of_pages;

    num_of_pages = $(pages_elements).length;

    // Initialize Number which contains a loop incrementer.
    var inc;

    var inc_string;

    var section_path;

    section_path = window.location.pathname;

    var section_search_string;

    var section_search_index_num;

    section_search_string = "/";

    section_search_index_num = section_path.lastIndexOf(section_search_string);

    section_path = section_path.slice(0, section_search_index_num);
    
    section_path = section_path + "/page_";

    // Initialize String which contains the HTML links which make up the Section navigation.
    var nav_html;
    for (inc = 0; inc < num_of_pages; inc++)  {
      inc_string = (inc + 1).toString();

      nav_html = nav_html + "<a href=\"" + base_path + section_path + inc_string + ".htm\" title=\"Page " + inc_string + "\" id=\"link-section_nav" + inc_string + "\"> Page #" + inc_string + "</a>\n";
    }

    var section_menu_selector;
    var section_menu_element;

    section_menu_selector = "#nav-section_menu";
    section_menu_element = $(section_menu_selector);

    $(section_menu_element).html(nav_html);
  }
  
} // END of FUNCTION renderDebateSectionHTML

function renderFooterHTML () {
  /**** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
   * @params - NONE
   * 
   * PURPOSE OF FUNCTION 
   *   Returns the HTML for the icons and links contained within the <footer> tag of the 
   *   Landing Page.
   *   
   * FUNCTIONS WHICH USE 'renderFooterHTML'
   *   + renderContent
   * 
    *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ****/

  // Initialize String which holds the selector for the HTML tag, "<footer>".
  var nav_selector;
  
  // Initialize Object which contains the jQuery object for the HTML tag, "<footer>".
  var footer_element = {};

  footer_selector = "footer";
  footer_element = $(footer_selector);

  // Initialize variable which holds the Object which contains the HTML references contained 
  // within the <footer> tag.
  var footer_data;

  // Initialize String which contains the raw HTML used contained within the <footer> tag.
  var footer_html;

  // Pull the HTML contained within the <footer> tag by calling the Function, 'storeFooterMetadata'.
  footer_data = storeFooterMetadata();

  footer_html = "";

  footer_html = "  <section id=\"footer-border\">\n" + 
                "    <div></div>\n" + 
                "  </section>\n";
  
  // Extract the HTML from the Object variable.
  $.each(footer_data, 
    function (row_index, rows) {
      footer_html = footer_html + "<section id=\"footer-row_" + rows.row_number + "\">\n";

      $.each(rows.link_data,
        function (link_index, link_metadata) {
          footer_html = footer_html + "<a href=\"" + link_metadata.href + "\" title=\"" + link_metadata.title + "\" target=\"_blank\" id=\"link-" + link_metadata.id + "\"></a>\n";
        }
      );

      footer_html = footer_html + "</section>\n";
    } 
  );

  // Add row that contains the copyright information.
  footer_html = footer_html + "<section id=\"footer-row_3\">\n" + 
                              "  <span>Leaders Academy &copy; 2018</span>\n" + 
                              "</section>\n";

  // Insert the HTML within the <footer> tag within the browser.
  $(footer_element).html(footer_html);

} // END of FUNCTION 'renderTopHeaderHTML'


function renderContent () {
  /**** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
   * @params - NONE
   * 
   * PURPOSE OF FUNCTION 
   *   Using the jQuery Method, '.html()', the HTML of the desktop landing page is swapped 
   *   out for a mobile-friendly HTML template.
   *   
   * FUNCTIONS WHICH USE 'renderContent'
   *   + document.ready()
   * 
    *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ****/

  base_path = "/la/";

  // Add mobile-friendly HTML into the browser.
   renderFrameHTML();

  renderHeadHTML();

  renderTopHeaderHTML(base_path);

  renderNavigationHTML(base_path);
  
  renderFooterHTML();
  
  

} // END of FUNCTION 'renderContent'