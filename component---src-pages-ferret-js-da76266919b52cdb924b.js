(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"7oih":function(e,a,t){"use strict";var c=t("q1tI"),l=t.n(c),n=t("qhky"),i=(t("14iF"),t("dI71")),s=t("Wbzz"),r=t("9a8T"),o=t.n(r),m=t("UPrG"),d=t.n(m),_=t("qA1k"),f=t.n(_),u=function(e){function a(){return e.apply(this,arguments)||this}Object(i.a)(a,e);var t=a.prototype;return t.componentDidMount=function(){o.a.init();var e=document.querySelector(".js-nav"),a=document.querySelector(".js-nav-social"),t=document.querySelector(".js-nav-trigger"),c=document.querySelectorAll(".js-nav-link"),l=document.body,n=l.style.top;function i(){l.style.position="",l.style.top="",window.scrollTo(0,-1*parseInt(n||"0"))}t.addEventListener("click",(function(){e.classList.toggle("is-visible"),a.classList.toggle("is-hidden"),t.classList.toggle("is-active"),t.classList.contains("is-active")?(l.style.position="fixed",l.style.top="-"+n):i()})),c.forEach((function(a){a.addEventListener("click",(function(a){e.classList.remove("is-visible"),t.classList.remove("is-active"),i()}))}))},t.render=function(){return l.a.createElement("header",null,l.a.createElement("div",{className:"f-grid u-space-between"},l.a.createElement("p",{className:"c-logo","data-aos":"fade-zoom-in","data-aos-easing":"ease-in-sine","data-aos-duration":"300"},l.a.createElement(s.Link,{to:"/",className:"c-logo__link"},l.a.createElement("span",null,"Hello,"),"my name is ",l.a.createElement("span",{className:"c-sound js-sound-trigger"},"Dries"),l.a.createElement("audio",{id:"js-sound"},l.a.createElement("source",{src:d.a}),l.a.createElement("track",{src:f.a,kind:"captions",srcLang:"en",label:"english_captions"})))),l.a.createElement("div",{className:"c-nav","data-aos":"fade-zoom-in","data-aos-easing":"ease-in-sine","data-aos-duration":"600","data-aos-delay":"0"},l.a.createElement("nav",{className:"c-nav-main js-nav"},l.a.createElement("div",{className:"c-nav-main__inner"},l.a.createElement("ul",{className:"o-list c-nav-main__list"},l.a.createElement("li",{className:"c-nav-main__item"},l.a.createElement(s.Link,{to:"/",className:"c-nav-main__link js-nav-link"},"Work")),l.a.createElement("li",{className:"c-nav-main__item"},l.a.createElement(s.Link,{to:"/#about",className:"c-nav-main__link js-nav-link"},"About")),l.a.createElement("li",{className:"c-nav-main__item"},l.a.createElement(s.Link,{to:"#contact",className:"c-nav-main__link js-nav-link is-highlighted"},"Hire me"))),l.a.createElement("ul",{className:"o-list c-social__list js-nav-social u-text-center is-hidden"},l.a.createElement("li",{className:"o-list__item c-social__list-item"},l.a.createElement("a",{href:"http://twitter.com/driesstandaert",target:"_blank",rel:"noreferrer",className:"c-social__link c-social__link--white c-social__link--twitter"},"Twitter")),l.a.createElement("li",{className:"o-list__item c-social__list-item"},l.a.createElement("a",{href:"https://www.linkedin.com/in/dries-standaert-67635383/",target:"_blank",rel:"noreferrer",className:"c-social__link c-social__link--white c-social__link--linkedin"},"LinkedIn")),l.a.createElement("li",{className:"o-list__item c-social__list-item"},l.a.createElement("a",{href:"https://dribbble.com/driesstandaert",target:"_blank",rel:"noreferrer",className:"c-social__link c-social__link--white c-social__link--dribbble"},"dribbble")),l.a.createElement("li",{className:"o-list__item c-social__list-item"},l.a.createElement("a",{href:"http://codepen.io/driesstandaert/",target:"_blank",rel:"noreferrer",className:"c-social__link c-social__link--white c-social__link--codepen"},"Codepen")),l.a.createElement("li",{className:"o-list__item c-social__list-item"},l.a.createElement("a",{href:"/img/pdf/driesstandaert-cv.pdf",target:"_blank",rel:"noreferrer",className:"c-social__link c-social__link--white c-social__link--cv"},"cv"))))),l.a.createElement("div",{className:"c-nav-main-trigger js-nav-trigger"},l.a.createElement("button",{"aria-label":"Trigger navigation"})))))},a}(l.a.Component),p=function(){return l.a.createElement("footer",{className:"c-row c-row--alpha c-row-footer u-bgcolor-neutral-x-light",id:"contact"},l.a.createElement("div",{className:"o-container o-container--sm"},l.a.createElement("div",null,l.a.createElement("p",{className:"u-text-center"},l.a.createElement("a",{href:"mailto:dries.standaert@gmail.com",className:"c-link"},"dries.standaert@gmail.com")),l.a.createElement("ul",{className:"o-list c-social__list u-text-center"},l.a.createElement("li",{className:"o-list__item c-social__list-item"},l.a.createElement("a",{href:"http://twitter.com/driesstandaert",target:"_blank",rel:"noreferrer",className:"c-social__link c-social__link--twitter"},"Twitter")),l.a.createElement("li",{className:"o-list__item c-social__list-item"},l.a.createElement("a",{href:"https://www.linkedin.com/in/dries-standaert-67635383/",target:"_blank",rel:"noreferrer",className:"c-social__link c-social__link--linkedin"},"LinkedIn")),l.a.createElement("li",{className:"o-list__item c-social__list-item"},l.a.createElement("a",{href:"https://dribbble.com/driesstandaert",target:"_blank",rel:"noreferrer",className:"c-social__link c-social__link--dribbble"},"dribbble")),l.a.createElement("li",{className:"o-list__item c-social__list-item"},l.a.createElement("a",{href:"http://codepen.io/driesstandaert/",target:"_blank",rel:"noreferrer",className:"c-social__link c-social__link--codepen"},"Codepen")),l.a.createElement("li",{className:"o-list__item c-social__list-item"},l.a.createElement("a",{href:"https://github.com/driesstandaert",target:"_blank",rel:"noreferrer",className:"c-social__link c-social__link--github"},"Github"))))))};a.a=function(e){var a=e.children,t=e.pageName,c="c-body-detail";return t&&(c=c+" page-"+t),l.a.createElement(l.a.Fragment,null,l.a.createElement(n.a,{bodyAttributes:{class:c}},l.a.createElement("title",null,"driesstandaert.com")),l.a.createElement(u,null),l.a.createElement("main",null,a),l.a.createElement(p,null))}},"820q":function(e,a,t){"use strict";t.r(a),t.d(a,"query",(function(){return h}));var c=t("q1tI"),l=t.n(c),n=t("qhky"),i=t("Wbzz"),s=t("9eSz"),r=t.n(s),o=t("7oih"),m=t("zuoq"),d=t.n(m),_=t("Knng"),f=t.n(_),u=t("oBCy"),p=t.n(u),E=t("v56s"),b=t.n(E),h="3223871083";a.default=function(e){var a=e.data;return Object(c.useEffect)((function(){var e=document.querySelector(".js-paperstack");if(e){e.addEventListener("mouseover",(function(){e.classList.add("animated","wobble")})),e.addEventListener("mouseout",(function(){setTimeout((function(){e.classList.remove("animated","wobble")}),500)}))}})),l.a.createElement(o.a,{pageName:"ferret"},l.a.createElement(n.a,null,l.a.createElement("title",null,"Ferret.ai - Dries Standaert - Design & Front-end"),l.a.createElement("meta",{name:"description",content:"Overview on my Design and Front-end work for Ferret.ai"})),l.a.createElement("main",{id:"main-content"},l.a.createElement("section",{className:"c-row c-row--alpha c-row-hero"},l.a.createElement("div",{className:"f-grid"},l.a.createElement("div",{className:"f-col-bp1-4 f-col-bp2-10 f-col-bp3-8 c-hero","data-aos":"fade-zoom-in","data-aos-offset":"200","data-aos-easing":"ease-in-sine","data-aos-duration":"600","data-aos-anchor":"hero"},l.a.createElement("h1",null,"Ferret.ai is a Chrome extension that summarizes/enriches articles and provides full-text search on your reading history."),l.a.createElement("ul",{className:"o-list o-list--horizontal c-tags--hero"},l.a.createElement("li",{className:"o-list__item c-tag"},"Identity design"),l.a.createElement("li",{className:"o-list__item c-tag"},"illustration"),l.a.createElement("li",{className:"o-list__item c-tag"},"UI design"),l.a.createElement("li",{className:"o-list__item c-tag"},"HTML/CSS/JS"))))),l.a.createElement("section",{className:"c-row c-row--beta c-row-normal u-bgcolor-ferret-x-light"},l.a.createElement("div",{className:"f-grid"},l.a.createElement("div",{className:"f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-8 f-col-bp3-shift-2"},l.a.createElement("div",{className:"c-tile__content"},l.a.createElement("div",{className:"c-scatter__animation"},l.a.createElement("div",{className:"c-papersheet-wrapper"},l.a.createElement("span",{href:"#story",className:"c-papersheet bounce"}),l.a.createElement("span",{href:"#story",className:"c-papersheet c-papersheet2 bounce2"}),l.a.createElement("span",{href:"#story",className:"c-papersheet bounce3"})),l.a.createElement("div",{className:"c-paperstack js-paperstack"}),l.a.createElement("img",{src:d.a,alt:"Ferret animation"})))))),l.a.createElement("section",{className:"c-row c-row--alpha"},l.a.createElement("div",{className:"f-grid"},l.a.createElement("div",{className:"f-col-bp1-4 f-col-bp2-8 f-col-bp3-6"},l.a.createElement("div",{className:"c-tile__content c-tile__content--text"},l.a.createElement("h2",null,"A digital identity that differs from the competition"),l.a.createElement("p",null,"In order to stand out amongst other scientific tools we came up with a superhero storyline. The goal was to create an engaging identity to attract and delight new users."))))),l.a.createElement("section",{className:"c-row c-row--beta c-row-normal"},l.a.createElement("div",{className:"f-grid"},l.a.createElement("div",{className:"f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-6 f-col-bp3-shift-3"},l.a.createElement("div",null,l.a.createElement("figure",{className:"u-ratio u-ratio-4x3"},l.a.createElement(r.a,{fluid:a.img_ferret_logo.childImageSharp.fluid,alt:"Ferret logo"})))))),l.a.createElement("section",{className:"c-row c-row--alpha"},l.a.createElement("div",{className:"f-grid"},l.a.createElement("div",{className:"f-col-bp1-4 f-col-bp2-8 f-col-bp3-6"},l.a.createElement("div",{className:"c-tile__content c-tile__content--text"},l.a.createElement("h2",null,"Fresh & iconic style"),l.a.createElement("p",null,"Based on our storyline I designed a scalable and stand-alone logo resembling a superhero shield. To enhance the storyline I created multiple characters that are used in different media, including the website, an instruction video and successful marketing campaigns."))))),l.a.createElement("section",{className:"c-row c-row-normal u-bgcolor-ferret-x-light"},l.a.createElement("div",{className:"f-grid"},l.a.createElement("div",{className:"f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-6 f-col-bp3-shift-3"},l.a.createElement("div",null,l.a.createElement("figure",{className:"u-ratio u-ratio-4x3"},l.a.createElement("img",{src:f.a,alt:"Ferret animation"})))))),l.a.createElement("section",{className:"c-row c-row--alpha"},l.a.createElement("div",{className:"f-grid"},l.a.createElement("div",{className:"f-col-bp1-4 f-col-bp2-8 f-col-bp3-6"},l.a.createElement("div",{className:"c-tile__content c-tile__content--text"},l.a.createElement("h2",null,"Micro-interactions"),l.a.createElement("p",null,"All assets are easy to animate to enhance the user experience and surprise and delight new customers."))))),l.a.createElement("section",{className:"c-row c-row-normal c-row--beta"},l.a.createElement("div",{className:"f-grid"},l.a.createElement("div",{className:"f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-8 f-col-bp3-shift-2"},l.a.createElement("div",{className:"c-browser c-browser--white"},l.a.createElement("div",{className:"c-browser__content"},l.a.createElement("div",null,l.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0,width:"100%",height:"100%"},l.a.createElement("source",{src:p.a,type:"video/webm"}),l.a.createElement("source",{src:b.a,type:"video/mp4"}),"Sorry, your browser doesn't support embedded videos."))))),l.a.createElement("div",{className:"f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-6 f-col-bp3-shift-3 u-pt-zeta"},l.a.createElement("figure",{className:"u-ratio u-ratio-1x1 c-browser c-browser--white"},l.a.createElement(r.a,{fluid:a.img_ferret_screen_team.childImageSharp.fluid,alt:"Ferret screen team"}))))),l.a.createElement("section",{className:"c-row u-nomargin u-bgcolor-neutral-x-light"},l.a.createElement("div",{className:"f-grid u-no-max-width"},l.a.createElement(i.Link,{to:"/cobbled-climbs/",className:"f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-6 f-col-bp3-shift-6 c-tile c-tile--link"},l.a.createElement("div",{className:"c-tile__content c-tile__content--link"},l.a.createElement("p",{className:"c-tile__link-text c-tile__link-text--next"},l.a.createElement("span",null,"Cobbled Climbs"))))))))}},Knng:function(e,a,t){e.exports=t.p+"static/ferret-animation-9c02b3bb89f02c0f6b0404211f6fa551.gif"},oBCy:function(e,a,t){e.exports=t.p+"static/flow-ferret-d956b4cb8bf86eaa0076babeb44afb5f.webm"},v56s:function(e,a,t){e.exports=t.p+"static/flow-ferret-80b8576dcc882765430cda6a7cf4f42f.mp4"},zuoq:function(e,a,t){e.exports=t.p+"static/dave-01-scientist-scatter-nopaper-492cc9c9e671bcf8b7eee4cc35174159.svg"}}]);
//# sourceMappingURL=component---src-pages-ferret-js-da76266919b52cdb924b.js.map