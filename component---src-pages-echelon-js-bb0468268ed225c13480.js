(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"7oih":function(e,a,t){"use strict";var l=t("q1tI"),i=t.n(l),n=t("qhky"),c=(t("14iF"),t("dI71")),s=t("Wbzz"),r=t("9a8T"),o=t.n(r),m=t("UPrG"),d=t.n(m),_=t("qA1k"),E=t.n(_),u=function(e){function a(){return e.apply(this,arguments)||this}Object(c.a)(a,e);var t=a.prototype;return t.componentDidMount=function(){o.a.init();var e=document.querySelector(".js-nav"),a=document.querySelector(".js-nav-social"),t=document.querySelector(".js-nav-trigger"),l=document.querySelectorAll(".js-nav-link"),i=document.body,n=i.style.top;function c(){i.style.position="",i.style.top="",window.scrollTo(0,-1*parseInt(n||"0"))}t.addEventListener("click",(function(){e.classList.toggle("is-visible"),a.classList.toggle("is-hidden"),t.classList.toggle("is-active"),t.classList.contains("is-active")?(i.style.position="fixed",i.style.top="-"+n):c()})),l.forEach((function(a){a.addEventListener("click",(function(a){e.classList.remove("is-visible"),t.classList.remove("is-active"),c()}))}))},t.render=function(){return i.a.createElement("header",null,i.a.createElement("div",{className:"f-grid u-space-between"},i.a.createElement("p",{className:"c-logo","data-aos":"fade-zoom-in","data-aos-easing":"ease-in-sine","data-aos-duration":"300"},i.a.createElement(s.Link,{to:"/",className:"c-logo__link"},i.a.createElement("span",null,"Hello,"),"my name is ",i.a.createElement("span",{className:"c-sound js-sound-trigger"},"Dries"),i.a.createElement("audio",{id:"js-sound"},i.a.createElement("source",{src:d.a}),i.a.createElement("track",{src:E.a,kind:"captions",srcLang:"en",label:"english_captions"})))),i.a.createElement("div",{className:"c-nav","data-aos":"fade-zoom-in","data-aos-easing":"ease-in-sine","data-aos-duration":"600","data-aos-delay":"0"},i.a.createElement("nav",{className:"c-nav-main js-nav"},i.a.createElement("div",{className:"c-nav-main__inner"},i.a.createElement("ul",{className:"o-list c-nav-main__list"},i.a.createElement("li",{className:"c-nav-main__item"},i.a.createElement(s.Link,{to:"/",className:"c-nav-main__link js-nav-link"},"Work")),i.a.createElement("li",{className:"c-nav-main__item"},i.a.createElement(s.Link,{to:"/#about",className:"c-nav-main__link js-nav-link"},"About")),i.a.createElement("li",{className:"c-nav-main__item"},i.a.createElement(s.Link,{to:"#contact",className:"c-nav-main__link js-nav-link is-highlighted"},"Hire me"))),i.a.createElement("ul",{className:"o-list c-social__list js-nav-social u-text-center is-hidden"},i.a.createElement("li",{className:"o-list__item c-social__list-item"},i.a.createElement("a",{href:"http://twitter.com/driesstandaert",target:"_blank",rel:"noreferrer",className:"c-social__link c-social__link--white c-social__link--twitter"},"Twitter")),i.a.createElement("li",{className:"o-list__item c-social__list-item"},i.a.createElement("a",{href:"https://www.linkedin.com/in/dries-standaert-67635383/",target:"_blank",rel:"noreferrer",className:"c-social__link c-social__link--white c-social__link--linkedin"},"LinkedIn")),i.a.createElement("li",{className:"o-list__item c-social__list-item"},i.a.createElement("a",{href:"https://dribbble.com/driesstandaert",target:"_blank",rel:"noreferrer",className:"c-social__link c-social__link--white c-social__link--dribbble"},"dribbble")),i.a.createElement("li",{className:"o-list__item c-social__list-item"},i.a.createElement("a",{href:"http://codepen.io/driesstandaert/",target:"_blank",rel:"noreferrer",className:"c-social__link c-social__link--white c-social__link--codepen"},"Codepen")),i.a.createElement("li",{className:"o-list__item c-social__list-item"},i.a.createElement("a",{href:"/img/pdf/driesstandaert-cv.pdf",target:"_blank",rel:"noreferrer",className:"c-social__link c-social__link--white c-social__link--cv"},"cv"))))),i.a.createElement("div",{className:"c-nav-main-trigger js-nav-trigger"},i.a.createElement("button",{"aria-label":"Trigger navigation"})))))},a}(i.a.Component),f=function(){return i.a.createElement("footer",{className:"c-row c-row--alpha c-row-footer u-bgcolor-neutral-x-light",id:"contact"},i.a.createElement("div",{className:"o-container o-container--sm"},i.a.createElement("div",null,i.a.createElement("p",{className:"u-text-center"},i.a.createElement("a",{href:"mailto:dries.standaert@gmail.com",className:"c-link"},"dries.standaert@gmail.com")),i.a.createElement("ul",{className:"o-list c-social__list u-text-center"},i.a.createElement("li",{className:"o-list__item c-social__list-item"},i.a.createElement("a",{href:"http://twitter.com/driesstandaert",target:"_blank",rel:"noreferrer",className:"c-social__link c-social__link--twitter"},"Twitter")),i.a.createElement("li",{className:"o-list__item c-social__list-item"},i.a.createElement("a",{href:"https://www.linkedin.com/in/dries-standaert-67635383/",target:"_blank",rel:"noreferrer",className:"c-social__link c-social__link--linkedin"},"LinkedIn")),i.a.createElement("li",{className:"o-list__item c-social__list-item"},i.a.createElement("a",{href:"https://dribbble.com/driesstandaert",target:"_blank",rel:"noreferrer",className:"c-social__link c-social__link--dribbble"},"dribbble")),i.a.createElement("li",{className:"o-list__item c-social__list-item"},i.a.createElement("a",{href:"http://codepen.io/driesstandaert/",target:"_blank",rel:"noreferrer",className:"c-social__link c-social__link--codepen"},"Codepen")),i.a.createElement("li",{className:"o-list__item c-social__list-item"},i.a.createElement("a",{href:"https://github.com/driesstandaert",target:"_blank",rel:"noreferrer",className:"c-social__link c-social__link--github"},"Github"))))))};a.a=function(e){var a=e.children,t=e.pageName,l="c-body-detail";return t&&(l=l+" page-"+t),i.a.createElement(i.a.Fragment,null,i.a.createElement(n.a,{bodyAttributes:{class:l}},i.a.createElement("title",null,"driesstandaert.com")),i.a.createElement(u,null),i.a.createElement("main",null,a),i.a.createElement(f,null))}},uHs1:function(e,a,t){"use strict";t.r(a),t.d(a,"query",(function(){return r}));var l=t("q1tI"),i=t.n(l),n=t("qhky"),c=t("Wbzz"),s=t("7oih"),r="232076329";a.default=function(e){e.data;return i.a.createElement(s.a,{pageName:"sp"},i.a.createElement(n.a,null,i.a.createElement("title",null,"Echelon - Dries Standaert - Design & Front-end"),i.a.createElement("meta",{name:"description",content:"Overview on my Design and Front-end work for S$P Global"})),i.a.createElement("main",{id:"main-content"},i.a.createElement("section",{className:"c-row c-row--alpha c-row-hero"},i.a.createElement("div",{className:"f-grid"},i.a.createElement("div",{className:"f-col-bp1-4 f-col-bp2-10 f-col-bp3-8 c-hero","data-aos":"fade-zoom-in","data-aos-offset":"200","data-aos-easing":"ease-in-sine","data-aos-duration":"600","data-aos-anchor":"hero"},i.a.createElement("h1",null,"Echelon is a boilerplate UI kit for software interfaces"),i.a.createElement("ul",{className:"o-list o-list--horizontal c-tags--hero"},i.a.createElement("li",{className:"o-list__item c-tag"},"UI design"),i.a.createElement("li",{className:"o-list__item c-tag"},"Figma"))))),i.a.createElement("section",{className:"c-row c-row-normal u-bgcolor-echelon-dark"},i.a.createElement("div",{className:"f-grid"},i.a.createElement("div",{className:"f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-12"},i.a.createElement("iframe",{className:"c-iframe",title:"figma",width:"100%",src:"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FrpTxBh3FuUG9LFFpQA2TlC%2FEchelon-UI-Kit-Boilerplate-MASTER%3Fnode-id%3D470%253A34162&chrome=DOCUMENTATION",allowFullScreen:!0})))),i.a.createElement("section",{className:"c-row c-row--alpha"},i.a.createElement("div",{className:"f-grid"},i.a.createElement("div",{className:"f-col-bp1-4 f-col-bp2-10 f-col-bp3-6","data-aos":"fade-zoom-in","data-aos-offset":"200","data-aos-easing":"ease-in-sine","data-aos-duration":"600","data-aos-anchor":"hero"},i.a.createElement("div",{className:"c-tile__content c-tile__content--text"},i.a.createElement("h2",null,"Atomic design"),i.a.createElement("p",null,"I have created this UI kit as a solid starting point for many design projects. Most necessary elements and styles that are commonly used in digital interfaces are included. All components are set up in an atomic structure and can easily be customized to fit any purpose or identity."),i.a.createElement("p",null,"Visit ",i.a.createElement("a",{href:"https://www.figma.com/file/rpTxBh3FuUG9LFFpQA2TlC/Echelon-UI-Kit-Boilerplate-MASTER",target:"_blank",rel:"noreferrer",className:"c-link"},"Echelon UI kit")))))),i.a.createElement("section",{className:"c-row u-nomargin u-bgcolor-neutral-x-light"},i.a.createElement("div",{className:"f-grid u-no-max-width"},i.a.createElement(c.Link,{to:"/cobbled-climbs/",className:"f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-6 f-col-bp3-shift-6 c-tile c-tile--link"},i.a.createElement("div",{className:"c-tile__content c-tile__content--link"},i.a.createElement("p",{className:"c-tile__link-text c-tile__link-text--next"},i.a.createElement("span",null,"Cobbled Climbs"))))))))}}}]);
//# sourceMappingURL=component---src-pages-echelon-js-bb0468268ed225c13480.js.map