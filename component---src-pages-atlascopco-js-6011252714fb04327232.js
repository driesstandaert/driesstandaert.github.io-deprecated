(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"7oih":function(e,a,t){"use strict";var l=t("q1tI"),n=t.n(l),c=t("qhky"),i=(t("14iF"),t("dI71")),s=t("Wbzz"),r=t("9a8T"),o=t.n(r),m=t("UPrG"),d=t.n(m),_=t("qA1k"),u=t.n(_),E=function(e){function a(){return e.apply(this,arguments)||this}Object(i.a)(a,e);var t=a.prototype;return t.componentDidMount=function(){o.a.init();var e=document.querySelector(".js-nav"),a=document.querySelector(".js-nav-social"),t=document.querySelector(".js-nav-trigger"),l=document.querySelectorAll(".js-nav-link"),n=document.body,c=n.style.top;function i(){n.style.position="",n.style.top="",window.scrollTo(0,-1*parseInt(c||"0"))}t.addEventListener("click",(function(){e.classList.toggle("is-visible"),a.classList.toggle("is-hidden"),t.classList.toggle("is-active"),t.classList.contains("is-active")?(n.style.position="fixed",n.style.top="-"+c):i()})),l.forEach((function(a){a.addEventListener("click",(function(a){e.classList.remove("is-visible"),t.classList.remove("is-active"),i()}))}))},t.render=function(){return n.a.createElement("header",null,n.a.createElement("div",{className:"f-grid u-space-between"},n.a.createElement("p",{className:"c-logo","data-aos":"fade-zoom-in","data-aos-easing":"ease-in-sine","data-aos-duration":"300"},n.a.createElement(s.Link,{to:"/",className:"c-logo__link"},n.a.createElement("span",null,"Hello,"),"my name is ",n.a.createElement("span",{className:"c-sound js-sound-trigger"},"Dries"),n.a.createElement("audio",{id:"js-sound"},n.a.createElement("source",{src:d.a}),n.a.createElement("track",{src:u.a,kind:"captions",srcLang:"en",label:"english_captions"})))),n.a.createElement("div",{className:"c-nav","data-aos":"fade-zoom-in","data-aos-easing":"ease-in-sine","data-aos-duration":"600","data-aos-delay":"0"},n.a.createElement("nav",{className:"c-nav-main js-nav"},n.a.createElement("div",{className:"c-nav-main__inner"},n.a.createElement("ul",{className:"o-list c-nav-main__list"},n.a.createElement("li",{className:"c-nav-main__item"},n.a.createElement(s.Link,{to:"/",className:"c-nav-main__link js-nav-link"},"Work")),n.a.createElement("li",{className:"c-nav-main__item"},n.a.createElement(s.Link,{to:"/#about",className:"c-nav-main__link js-nav-link"},"About")),n.a.createElement("li",{className:"c-nav-main__item"},n.a.createElement(s.Link,{to:"#contact",className:"c-nav-main__link js-nav-link is-highlighted"},"Hire me"))),n.a.createElement("ul",{className:"o-list c-social__list js-nav-social u-text-center is-hidden"},n.a.createElement("li",{className:"o-list__item c-social__list-item"},n.a.createElement("a",{href:"http://twitter.com/driesstandaert",target:"_blank",rel:"noreferrer",className:"c-social__link c-social__link--white c-social__link--twitter"},"Twitter")),n.a.createElement("li",{className:"o-list__item c-social__list-item"},n.a.createElement("a",{href:"https://www.linkedin.com/in/dries-standaert-67635383/",target:"_blank",rel:"noreferrer",className:"c-social__link c-social__link--white c-social__link--linkedin"},"LinkedIn")),n.a.createElement("li",{className:"o-list__item c-social__list-item"},n.a.createElement("a",{href:"https://dribbble.com/driesstandaert",target:"_blank",rel:"noreferrer",className:"c-social__link c-social__link--white c-social__link--dribbble"},"dribbble")),n.a.createElement("li",{className:"o-list__item c-social__list-item"},n.a.createElement("a",{href:"http://codepen.io/driesstandaert/",target:"_blank",rel:"noreferrer",className:"c-social__link c-social__link--white c-social__link--codepen"},"Codepen")),n.a.createElement("li",{className:"o-list__item c-social__list-item"},n.a.createElement("a",{href:"/img/pdf/driesstandaert-cv.pdf",target:"_blank",rel:"noreferrer",className:"c-social__link c-social__link--white c-social__link--cv"},"cv"))))),n.a.createElement("div",{className:"c-nav-main-trigger js-nav-trigger"},n.a.createElement("button",{"aria-label":"Trigger navigation"})))))},a}(n.a.Component),p=function(){return n.a.createElement("footer",{className:"c-row c-row--alpha c-row-footer u-bgcolor-neutral-x-light",id:"contact"},n.a.createElement("div",{className:"o-container o-container--sm"},n.a.createElement("div",null,n.a.createElement("p",{className:"u-text-center"},n.a.createElement("a",{href:"mailto:dries.standaert@gmail.com",className:"c-link"},"dries.standaert@gmail.com")),n.a.createElement("ul",{className:"o-list c-social__list u-text-center"},n.a.createElement("li",{className:"o-list__item c-social__list-item"},n.a.createElement("a",{href:"http://twitter.com/driesstandaert",target:"_blank",rel:"noreferrer",className:"c-social__link c-social__link--twitter"},"Twitter")),n.a.createElement("li",{className:"o-list__item c-social__list-item"},n.a.createElement("a",{href:"https://www.linkedin.com/in/dries-standaert-67635383/",target:"_blank",rel:"noreferrer",className:"c-social__link c-social__link--linkedin"},"LinkedIn")),n.a.createElement("li",{className:"o-list__item c-social__list-item"},n.a.createElement("a",{href:"https://dribbble.com/driesstandaert",target:"_blank",rel:"noreferrer",className:"c-social__link c-social__link--dribbble"},"dribbble")),n.a.createElement("li",{className:"o-list__item c-social__list-item"},n.a.createElement("a",{href:"http://codepen.io/driesstandaert/",target:"_blank",rel:"noreferrer",className:"c-social__link c-social__link--codepen"},"Codepen")),n.a.createElement("li",{className:"o-list__item c-social__list-item"},n.a.createElement("a",{href:"https://github.com/driesstandaert",target:"_blank",rel:"noreferrer",className:"c-social__link c-social__link--github"},"Github"))))))};a.a=function(e){var a=e.children,t=e.pageName,l="c-body-detail";return t&&(l=l+" page-"+t),n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,{bodyAttributes:{class:l}},n.a.createElement("title",null,"driesstandaert.com")),n.a.createElement(E,null),n.a.createElement("main",null,a),n.a.createElement(p,null))}},izYe:function(e,a,t){"use strict";t.r(a),t.d(a,"query",(function(){return m}));var l=t("q1tI"),n=t.n(l),c=t("qhky"),i=t("Wbzz"),s=t("9eSz"),r=t.n(s),o=t("7oih"),m="557538709";a.default=function(e){var a=e.data;return n.a.createElement(o.a,{pageName:"atlas-copco"},n.a.createElement(c.a,null,n.a.createElement("title",null,"Atlas Copco - Dries Standaert - Design & Front-end"),n.a.createElement("meta",{name:"description",content:"Overview on my Design and Front-end work for Atlas Copco"})),n.a.createElement("main",{id:"main-content"},n.a.createElement("section",{className:"c-row c-row--alpha c-row-hero"},n.a.createElement("div",{className:"f-grid"},n.a.createElement("div",{className:"f-col-bp1-4 f-col-bp2-10 f-col-bp3-8 c-hero","data-aos":"fade-zoom-in","data-aos-offset":"200","data-aos-easing":"ease-in-sine","data-aos-duration":"600","data-aos-anchor":"hero"},n.a.createElement("h1",null,"An extensive pattern library with styleguide and templates."),n.a.createElement("ul",{className:"o-list o-list--horizontal c-tags--hero"},n.a.createElement("li",{className:"o-list__item c-tag"},"UI design"),n.a.createElement("li",{className:"o-list__item c-tag"},"HTML/CSS/JS"))))),n.a.createElement("section",{className:"c-row c-row-normal u-bgcolor-ac-base"},n.a.createElement("div",{className:"f-grid"},n.a.createElement("div",{className:"f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-8 f-col-bp3-shift-2"},n.a.createElement("div",{className:"c-browser c-browser--white","data-aos":"fade-up"},n.a.createElement("div",{className:"c-browser__content c-browser__content--scrollable"},n.a.createElement("div",null,n.a.createElement(r.a,{fluid:a.img_ac_patterns.childImageSharp.fluid,alt:"AC patterns"}))))))),n.a.createElement("section",{className:"c-row c-row--alpha"},n.a.createElement("div",{className:"f-grid u-reverse"},n.a.createElement("div",{className:"f-col-bp1-4 f-col-bp3-6 u-ver-center"},n.a.createElement("div",{className:"c-tile__content"},n.a.createElement("h2",null,"Digital brand guidelines"),n.a.createElement("p",null,"The goal was to translate existing print-based brand guidelines into a digital styleguide which provided greater flexibility. The project contained a styleguide with guidelines, components and templates."))),n.a.createElement("div",{className:"f-col-bp1-4 f-col-bp3-6"},n.a.createElement("div",{className:"c-tile__content c-tile__content--img"},n.a.createElement("figure",null,n.a.createElement(r.a,{fluid:a.img_ac_screen_styleguide.childImageSharp.fluid,alt:"AC screen styleguide"})))))),n.a.createElement("section",{className:"c-row c-row--beta c-row-normal"},n.a.createElement("div",{className:"f-grid"},n.a.createElement("div",{className:"f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-6 f-col-bp3-shift-3"},n.a.createElement("div",{className:"c-browser c-browser--white","data-aos":"fade-zoom-in","data-aos-offset":"200","data-aos-easing":"ease-in-sine","data-aos-duration":"600"},n.a.createElement("figure",null,n.a.createElement(r.a,{fluid:a.img_ac_template.childImageSharp.fluid,alt:"AC template"})))))),n.a.createElement("section",{className:"c-row c-row--alpha"},n.a.createElement("div",{className:"f-grid"},n.a.createElement("div",{className:"f-col-bp1-4 f-col-bp2-8 f-col-bp3-6"},n.a.createElement("div",{className:"c-tile__content c-tile__content--text"},n.a.createElement("h2",null,"Components and template"),n.a.createElement("p",null,"All components can be placed underneath each other without breaking the responsive layout. The entire pattern library is build in html/css and Jekyll."))))),n.a.createElement("section",{className:"c-row c-row--beta"},n.a.createElement("div",{className:"f-grid u-reverse"},n.a.createElement("div",{className:"f-col-bp1-4 f-col-bp3-6 u-ver-center"},n.a.createElement("div",{className:"c-tile__content"},n.a.createElement("h2",null,"Pattern library"),n.a.createElement("p",null,"Our pattern library is a collection of user interface elements that can appear multiple times across the website. The purpose is to have consistency in user experience and enhance maintainability. "))),n.a.createElement("div",{className:"f-col-bp1-4 f-col-bp3-6"},n.a.createElement("div",{className:"c-tile__content c-tile__content--img"},n.a.createElement("figure",null,n.a.createElement(r.a,{fluid:a.img_ac_screen_list.childImageSharp.fluid,alt:"AC screen list"})))))),n.a.createElement("section",{className:"c-row u-nomargin u-bgcolor-neutral-x-light"},n.a.createElement("div",{className:"f-grid u-no-max-width"},n.a.createElement(i.Link,{to:"/bene/",className:"f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-6 f-col-bp3-shift-6 c-tile c-tile--link"},n.a.createElement("div",{className:"c-tile__content c-tile__content--link"},n.a.createElement("p",{className:"c-tile__link-text c-tile__link-text--next"},n.a.createElement("span",null,"Benevolent.ai"))))))))}}}]);
//# sourceMappingURL=component---src-pages-atlascopco-js-6011252714fb04327232.js.map