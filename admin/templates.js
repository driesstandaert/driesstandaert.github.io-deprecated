(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["assets/css/global.css"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "*{box-sizing:border-box}*:before,*:after{box-sizing:inherit}body,h1,h2,h3,h4,p,ul,ol,li,dd,figure,figcaption,dl,dd,dt{margin:0px;padding:0px}body{-ms-overflow-style:-ms-autohiding-scrollbar;scroll-behavior:smooth;font-size:1rem;min-height:100vh}ul[class],ol[class]{list-style:none}a:not([class]){text-decoration:underline;text-decoration-skip-ink:auto;cursor:pointer}input::-webkit-input-placeholder,textarea::-webkit-input-placeholder,select::-webkit-input-placeholder{line-height:normal}img{max-width:100%}@media(prefers-reduced-motion: reduce){*{-webkit-animation:none !important;animation:none !important;transition:none !important;scroll-behavior:auto !important}}.sf-flow{--flow-space: 1em}.sf-flow>*+*{margin-top:1em;margin-top:var(--flow-space)}.align-start{align-items:flex-start}.align-center{align-items:center}.align-end{align-items:flex-end}.bg-primary{background:#173854}.bg-primary-shade{background:#102538}.bg-primary-glare{background:#22547c}.bg-highlight{background:#fedb8b}.bg-light{background:#ffffff}.bg-mid{background:#cccccc}.bg-dark{background:#333333}.bg-slate{background:#404040}.color-primary{color:#173854}.color-primary-shade{color:#102538}.color-primary-glare{color:#22547c}.color-highlight{color:#fedb8b}.color-light{color:#ffffff}.color-mid{color:#cccccc}.color-dark{color:#333333}.color-slate{color:#404040}.box-block{display:block}.box-flex{display:flex}.box-inline-flex{display:inline-flex}.box-hide{display:none}.font-base{font-family:'Varela Round', sans-serif}.font-serif{font-family:'Lora', serif}.gap-top-300{margin-top:0.8rem}.gap-top-500{margin-top:1.25rem}.gap-top-600{margin-top:1.56rem}.gap-top-700{margin-top:1.95rem}.gap-top-800{margin-top:2.44rem}.gap-top-900{margin-top:3.05rem}.gap-top-base{margin-top:1rem}.gap-top-max{margin-top:4rem}.gap-bottom-300{margin-bottom:0.8rem}.gap-bottom-500{margin-bottom:1.25rem}.gap-bottom-600{margin-bottom:1.56rem}.gap-bottom-700{margin-bottom:1.95rem}.gap-bottom-800{margin-bottom:2.44rem}.gap-bottom-900{margin-bottom:3.05rem}.gap-bottom-base{margin-bottom:1rem}.gap-bottom-max{margin-bottom:4rem}.leading-tight{line-height:1.2}.leading-mid{line-height:1.5}.leading-loose{line-height:1.7}.measure-long{max-width:75ch}.measure-short{max-width:60ch}.measure-compact{max-width:40ch}.pad-top-300{padding-top:0.8rem}.pad-top-500{padding-top:1.25rem}.pad-top-600{padding-top:1.56rem}.pad-top-700{padding-top:1.95rem}.pad-top-800{padding-top:2.44rem}.pad-top-900{padding-top:3.05rem}.pad-top-base{padding-top:1rem}.pad-top-max{padding-top:4rem}.pad-bottom-300{padding-bottom:0.8rem}.pad-bottom-500{padding-bottom:1.25rem}.pad-bottom-600{padding-bottom:1.56rem}.pad-bottom-700{padding-bottom:1.95rem}.pad-bottom-800{padding-bottom:2.44rem}.pad-bottom-900{padding-bottom:3.05rem}.pad-bottom-base{padding-bottom:1rem}.pad-bottom-max{padding-bottom:4rem}.pad-left-300{padding-left:0.8rem}.pad-left-500{padding-left:1.25rem}.pad-left-600{padding-left:1.56rem}.pad-left-700{padding-left:1.95rem}.pad-left-800{padding-left:2.44rem}.pad-left-900{padding-left:3.05rem}.pad-left-base{padding-left:1rem}.pad-left-max{padding-left:4rem}.space-between{justify-content:space-between}.space-around{justify-content:space-around}.space-before{justify-content:flex-end}.stack-300{z-index:0}.stack-400{z-index:10}.stack-500{z-index:20}.stack-600{z-index:30}.stack-700{z-index:40}.ta-right{text-align:right}.ta-left{text-align:left}.ta-center{text-align:center}.text-300{font-size:0.8rem}.text-500{font-size:1.25rem}.text-600{font-size:1.56rem}.text-700{font-size:1.95rem}.text-800{font-size:2.44rem}.text-900{font-size:3.05rem}.text-base{font-size:1rem}.text-max{font-size:4rem}.weight-light{font-weight:300}.weight-regular{font-weight:400}.weight-mid{font-weight:600}.weight-bold{font-weight:700}.width-full{width:100%}.width-half{width:50%}.width-quarter{width:25%}.width-third{width:33.3333333333%}@media screen and (min-width: 48rem){.md\\:align-start{align-items:flex-start}.md\\:align-center{align-items:center}.md\\:align-end{align-items:flex-end}.md\\:box-block{display:block}.md\\:box-flex{display:flex}.md\\:box-inline-flex{display:inline-flex}.md\\:box-hide{display:none}.md\\:space-between{justify-content:space-between}.md\\:space-around{justify-content:space-around}.md\\:space-before{justify-content:flex-end}.md\\:ta-right{text-align:right}.md\\:ta-left{text-align:left}.md\\:ta-center{text-align:center}.md\\:text-300{font-size:0.8rem}.md\\:text-500{font-size:1.25rem}.md\\:text-600{font-size:1.56rem}.md\\:text-700{font-size:1.95rem}.md\\:text-800{font-size:2.44rem}.md\\:text-900{font-size:3.05rem}.md\\:text-base{font-size:1rem}.md\\:text-max{font-size:4rem}.md\\:width-full{width:100%}.md\\:width-half{width:50%}.md\\:width-quarter{width:25%}.md\\:width-third{width:33.3333333333%}}:root{--color-primary:#173854;--color-primary-shade:#102538;--color-primary-glare:#22547c;--color-highlight:#fedb8b;--color-light:#ffffff;--color-mid:#cccccc;--color-dark:#333333;--color-slate:#404040;--color-mode: \"light\";--color-bg: #ffffff;--color-bg-glare: #ffffff;--color-text: #333333;--color-text-glare: #333333;--color-selection-text: #ffffff;--color-selection-bg: #333333;--color-stroke: #cccccc;--color-action-bg: #173854;--color-action-text: #ffffff;--color-theme-primary: #173854;--color-theme-primary-glare: #22547c;--color-theme-highlight: #fedb8b;--color-theme-highlight-block: #fedb8b}@media(prefers-color-scheme: dark){:root{--color-mode: \"dark\"}:root:not([data-user-color-scheme]){--color-bg: #333333;--color-bg-glare: #404040;--color-text: #ffffff;--color-selection-text: #333333;--color-selection-bg: #ffffff;--color-stroke: #404040;--color-theme-primary: #8bb8df;--color-theme-primary-glare: #b3d2ea;--color-action-bg: var(--color-theme-primary-glare);--color-action-text: #333333;--color-theme-highlight: #fedb8b;--color-theme-highlight-block: #404040;--color-theme-feature-text: #fedb8b}}[data-user-color-scheme=dark]{--color-bg: #333333;--color-bg-glare: #404040;--color-text: #ffffff;--color-selection-text: #333333;--color-selection-bg: #ffffff;--color-stroke: #404040;--color-theme-primary: #8bb8df;--color-theme-primary-glare: #b3d2ea;--color-action-bg: var(--color-theme-primary-glare);--color-action-text: #333333;--color-theme-highlight: #fedb8b;--color-theme-highlight-block: #404040;--color-theme-feature-text: #fedb8b}body{color:var(--color-text);background-color:var(--color-bg)}main{overflow:hidden}::selection{color:var(--color-selection-text);background-color:var(--color-selection-bg)}@font-face{font-family:\"Inter\";font-style:normal;font-weight:400;font-display:swap;src:url(\"/fonts/Inter-Regular.woff2?v=3.13\") format(\"woff2\"),url(\"/fonts/Inter-Regular.woff?v=3.13\") format(\"woff\")}@font-face{font-family:\"IBM Plex Serif\";font-style:normal;font-weight:400;font-display:swap;src:url(\"/fonts/IBMPlexSerif-Regular.woff2\") format(\"woff2\"),url(\"/fonts/IBMPlexSerif-Regular.woff\") format(\"woff\")}body{font-family:\"Inter\",sans-serif}h1{font-family:\"IBM Plex Serif\",serif;font-weight:300;font-size:1.6470588235rem;line-height:1.3660714286em;margin-bottom:.5rem}@media(min-width: 42.5em){h1{font-size:1.8823529412rem;line-height:1.1953125em}}h2{font-family:\"IBM Plex Serif\",serif;font-weight:500;line-height:1.5;font-size:1.6470588235rem;line-height:1.3660714286em;margin-bottom:1.5rem;color:#000}@media(min-width: 42.5em){h2{font-size:1.6470588235rem;line-height:1.3660714286em}}h3{font-family:\"Inter\",sans-serif;font-weight:300;font-size:1.2352941176rem;line-height:1.3964285714em;margin-bottom:1rem;letter-spacing:.025em}h4{font-family:\"Inter\",sans-serif;font-weight:300;font-size:1rem;line-height:1.125em;margin-bottom:1rem}h5{font-family:\"Inter\",sans-serif;font-weight:300;font-size:0.8235294118rem;line-height:1.8214285714em;margin-bottom:1rem;letter-spacing:.025em}h6{font-family:\"IBM Plex Serif\",serif;font-weight:300;font-size:1.0588235294rem;line-height:1.4166666667em;margin-bottom:1rem}p,ol,ul,dl,table,address{font-size:1rem;line-height:1.5em;margin-bottom:1rem}pre{tab-size:2}ul,ol,blockquote{padding-left:2em}li>ul,li>ol{margin-bottom:0}blockquote{font-style:italic;font-size:1.0588235294rem;line-height:1.4166666667em;margin-bottom:1rem}blockquote>p{font-size:inherit;line-height:inherit}small{font-size:0.8235294118rem;line-height:1.8214285714em;margin-bottom:1rem}hr{border-width:1px 0 0;border-style:solid;border-color:#f7f7f7;clear:both;margin-top:0rem;margin-bottom:1rem}a{text-decoration:none;font-weight:500;color:#000;transition:none}a:visited{color:#000}a:hover{text-decoration:none;color:#000}a:focus{outline:none;color:#1b2541}a:hover,a:active{outline:0}html,body{height:100%}body{scroll-behavior:smooth;display:flex;flex-direction:column}main{flex:1 0 auto}main:focus{outline:none}hr{display:block;height:1px;max-width:500px;background:var(--color-stroke);border:none;margin:3.05rem auto}img{height:auto}:focus{outline:1px solid var(--color-theme-primary-glare);outline-offset:.25rem}.o-list{list-style:none;padding-left:0}.o-list--horizontal{*zoom:1}.o-list--horizontal:before,.o-list--horizontal:after{display:table;content:\"\"}.o-list--horizontal:after{clear:both}.o-list--horizontal .o-list__item{float:left}.f-grid{box-sizing:border-box;display:flex;margin-left:auto;margin-right:auto;flex-wrap:wrap;max-width:1280px;width:100%}@media screen and (max-width: 1020px){.f-grid{width:100%}}@media screen and (max-width: 620px){.f-grid{width:100%}}.f-grid-0{box-sizing:border-box;display:flex;margin-left:auto;margin-right:auto;flex-wrap:wrap;max-width:1280px;width:100%}@media(min-width: 60em){.f-grid.u-reverse{flex-direction:row-reverse}.f-grid.u-no-max-width{max-width:none}}.f-col-bp3-0{box-sizing:border-box;width:0%;padding-left:0%;padding-right:0%}.f-col-bp3-shift-0{margin-left:0%}.f-col-bp3-1{box-sizing:border-box;width:8.3333333333%;padding-left:0%;padding-right:0%}.f-col-bp3-shift-1{margin-left:8.3333333333%}.f-col-bp3-2{box-sizing:border-box;width:16.6666666667%;padding-left:0%;padding-right:0%}.f-col-bp3-shift-2{margin-left:16.6666666667%}.f-col-bp3-3{box-sizing:border-box;width:25%;padding-left:0%;padding-right:0%}.f-col-bp3-shift-3{margin-left:25%}.f-col-bp3-4{box-sizing:border-box;width:33.3333333333%;padding-left:0%;padding-right:0%}.f-col-bp3-shift-4{margin-left:33.3333333333%}.f-col-bp3-5{box-sizing:border-box;width:41.6666666667%;padding-left:0%;padding-right:0%}.f-col-bp3-shift-5{margin-left:41.6666666667%}.f-col-bp3-6{box-sizing:border-box;width:50%;padding-left:0%;padding-right:0%}.f-col-bp3-shift-6{margin-left:50%}.f-col-bp3-7{box-sizing:border-box;width:58.3333333333%;padding-left:0%;padding-right:0%}.f-col-bp3-shift-7{margin-left:58.3333333333%}.f-col-bp3-8{box-sizing:border-box;width:66.6666666667%;padding-left:0%;padding-right:0%}.f-col-bp3-shift-8{margin-left:66.6666666667%}.f-col-bp3-9{box-sizing:border-box;width:75%;padding-left:0%;padding-right:0%}.f-col-bp3-shift-9{margin-left:75%}.f-col-bp3-10{box-sizing:border-box;width:83.3333333333%;padding-left:0%;padding-right:0%}.f-col-bp3-shift-10{margin-left:83.3333333333%}.f-col-bp3-11{box-sizing:border-box;width:91.6666666667%;padding-left:0%;padding-right:0%}.f-col-bp3-shift-11{margin-left:91.6666666667%}.f-col-bp3-12{box-sizing:border-box;width:100%;padding-left:0%;padding-right:0%}.f-col-bp3-shift-12{margin-left:100%}@media screen and (max-width: 1020px){.f-col-bp2-0{box-sizing:border-box;width:0%;padding-left:0%;padding-right:0%}.f-col-bp2-shift-0{margin-left:0%}.f-col-bp2-1{box-sizing:border-box;width:8.3333333333%;padding-left:0%;padding-right:0%}.f-col-bp2-shift-1{margin-left:8.3333333333%}.f-col-bp2-2{box-sizing:border-box;width:16.6666666667%;padding-left:0%;padding-right:0%}.f-col-bp2-shift-2{margin-left:16.6666666667%}.f-col-bp2-3{box-sizing:border-box;width:25%;padding-left:0%;padding-right:0%}.f-col-bp2-shift-3{margin-left:25%}.f-col-bp2-4{box-sizing:border-box;width:33.3333333333%;padding-left:0%;padding-right:0%}.f-col-bp2-shift-4{margin-left:33.3333333333%}.f-col-bp2-5{box-sizing:border-box;width:41.6666666667%;padding-left:0%;padding-right:0%}.f-col-bp2-shift-5{margin-left:41.6666666667%}.f-col-bp2-6{box-sizing:border-box;width:50%;padding-left:0%;padding-right:0%}.f-col-bp2-shift-6{margin-left:50%}.f-col-bp2-7{box-sizing:border-box;width:58.3333333333%;padding-left:0%;padding-right:0%}.f-col-bp2-shift-7{margin-left:58.3333333333%}.f-col-bp2-8{box-sizing:border-box;width:66.6666666667%;padding-left:0%;padding-right:0%}.f-col-bp2-shift-8{margin-left:66.6666666667%}.f-col-bp2-9{box-sizing:border-box;width:75%;padding-left:0%;padding-right:0%}.f-col-bp2-shift-9{margin-left:75%}.f-col-bp2-10{box-sizing:border-box;width:83.3333333333%;padding-left:0%;padding-right:0%}.f-col-bp2-shift-10{margin-left:83.3333333333%}.f-col-bp2-11{box-sizing:border-box;width:91.6666666667%;padding-left:0%;padding-right:0%}.f-col-bp2-shift-11{margin-left:91.6666666667%}.f-col-bp2-12{box-sizing:border-box;width:100%;padding-left:0%;padding-right:0%}.f-col-bp2-shift-12{margin-left:100%}}@media screen and (max-width: 620px){.f-col-bp1-0{box-sizing:border-box;width:0%;padding-left:0%;padding-right:0%}.f-col-bp1-shift-0{margin-left:0%}.f-col-bp1-1{box-sizing:border-box;width:25%;padding-left:0%;padding-right:0%}.f-col-bp1-shift-1{margin-left:25%}.f-col-bp1-2{box-sizing:border-box;width:50%;padding-left:0%;padding-right:0%}.f-col-bp1-shift-2{margin-left:50%}.f-col-bp1-3{box-sizing:border-box;width:75%;padding-left:0%;padding-right:0%}.f-col-bp1-shift-3{margin-left:75%}.f-col-bp1-4{box-sizing:border-box;width:100%;padding-left:0%;padding-right:0%}.f-col-bp1-shift-4{margin-left:100%}}.u-ver-center{display:flex;align-items:center}.u-hor-center{justify-content:center}.u-space-between{justify-content:space-between}.c-intro{margin-left:1.5em;margin-right:1.5em}@media(min-width: 42.5em){.c-intro{margin-left:2em;margin-right:2em}}.c-intro__title{color:#000;font-weight:300;font-family:\"IBM Plex Serif\",serif;font-size:1.4em;text-align:center}@media(min-width: 42.5em){.c-intro__title{font-size:2em}}@media(min-width: 60em){.c-intro__title{font-size:3em}}.c-intro__subtitle{color:#fff;font-size:1.5em}@media(min-width: 60em){.c-intro__subtitle{font-size:1.75em}}main{background-color:#fff}header{position:absolute;z-index:1020;width:100%}@media(min-width: 60em){header{margin-top:2rem}}.c-browser:before{content:\"\";display:block;padding-top:4%;background:url(\"/images/svg/browser.svg\") no-repeat;background-size:cover;background-position:top left}.c-browser--white:before{content:\"\";display:block;padding-top:4%;background:url(\"/images/svg/browser-white.svg\") no-repeat;background-size:cover;background-position:top left}.c-browser__content{position:relative}.c-browser__content:before{content:\"\";display:block;padding-top:56.3%}.c-browser__content>div{position:absolute;top:0;left:0;height:100%;width:100%;overflow:visible}.c-browser__content--scrollable>div{overflow:auto}.c-link{position:relative;text-decoration:none;color:#000;font-weight:700}.c-link:after{content:\"\";display:block;position:absolute;left:0;right:0;bottom:-0.1rem;height:1px;border-bottom:1px solid rgba(46,61,73,.3);transition:border-bottom .3s ease-in-out}.c-link:hover:after{border-bottom:1px solid #000}.c-row{padding-top:0rem;padding-bottom:0rem;background-size:cover}.c-row--padding{padding-left:0rem;padding-right:0rem}@media(min-width: 42.5em){.c-row--padding{padding-top:3rem;padding-bottom:3rem}}@media(min-width: 74.0625em){.c-row--padding{padding-top:6rem;padding-bottom:6rem}}.c-row--nopadding{padding-left:0rem;padding-right:0rem}.c-row--alpha{background-color:#fff}.c-row--beta{background-color:#f7f7f7}.c-row--gamma{background-image:linear-gradient(45deg, #02b3e4, #02ccba);color:#fff}.c-row--delta{color:#fff;background-color:#9ddbbc}.c-row-intro{padding-top:4rem;padding-bottom:3rem;height:70vh;position:relative;z-index:10;display:flex;width:100%}@media(min-width: 42.5em){.c-row-intro{padding-top:6rem;padding-bottom:4rem;height:80vh}}@media(min-width: 60em){.c-row-intro{min-height:80vh;height:80vh;padding-top:4rem;padding-bottom:0rem}}.c-row-slant--left{position:relative;padding-top:2rem;padding-bottom:4rem}.c-row-slant--left:after{content:\"\";display:block;height:100px;width:150%;position:absolute;left:50%;top:100px;transform-origin:center top;background-color:#fff;transform:rotate(3deg) translateX(-50%) translateY(-100%)}@media(min-width: 42.5em){.c-row-slant--left{padding-top:6rem}}.c-row-slant--right{position:relative;padding-top:0;padding-bottom:4rem;z-index:20}.c-row-slant--right:after{content:\"\";display:block;height:140px;width:150%;position:absolute;left:50%;top:30px;z-index:1500;transform-origin:center top;background-color:#f7f7f7;transform:rotate(-3deg) translateX(-50%) translateY(-100%)}@media(min-width: 42.5em){.c-row-slant--right{padding-top:8rem}}.c-row-hero{padding-top:6rem;padding-bottom:2rem;background-size:cover}@media(min-width: 42.5em){.c-row-hero{padding-top:10rem;padding-bottom:6rem}}@media(min-width: 74.0625em){.c-row-hero{padding-top:12rem;padding-bottom:8rem}}.c-row-video{position:relative;padding-top:1.5rem;padding-bottom:0rem;padding-left:1.5rem;padding-right:1.5rem}@media(min-width: 42.5em){.c-row-video{padding-top:3rem;padding-bottom:0rem;padding-left:2rem;padding-right:2rem}}@media(min-width: 60em){.c-row-video{padding-top:4rem;padding-bottom:0rem}}@media(min-width: 74.0625em){.c-row-video{padding-top:7rem;padding-bottom:0rem;padding-left:0rem;padding-right:0rem}}.c-row-mockup{position:relative;padding-top:6rem;padding-bottom:0rem}@media(min-width: 42.5em){.c-row-mockup{padding-top:0rem;padding-bottom:0rem}}.c-row-animation{position:relative;padding-top:8rem;padding-bottom:4rem}@media(min-width: 42.5em){.c-row-animation{padding-top:12rem;padding-bottom:4rem}}.c-row-normal{position:relative;padding-top:1.5rem;padding-bottom:1.5rem;padding-left:1.5rem;padding-right:1.5rem}@media(min-width: 42.5em){.c-row-normal{padding-top:4rem;padding-bottom:4rem}}@media(min-width: 74.0625em){.c-row-normal{padding-top:7rem;padding-bottom:7rem}}@media(min-width: 90em){.c-row-normal{padding-left:0rem;padding-right:0rem}}.c-row-footer{position:relative;padding-top:3rem;padding-bottom:1.5rem;padding-left:1rem;padding-right:1rem}@media(min-width: 42.5em){.c-row-footer{padding-top:6rem;padding-bottom:3rem}}@media(min-width: 90em){.c-row-footer{padding-left:0rem;padding-right:0rem}}.c-tile{background-size:cover;background-repeat:no-repeat;background-position:center center}.c-tile--link{background-color:#fff;display:block;text-decoration:none;transition:all .3s ease-out;color:#000}.c-tile--link:hover,.c-tile--link:active,.c-tile--link:focus{transition:all .3s ease-out;background-color:#000;color:#fff;text-decoration:none}.c-tile__link-text{margin-bottom:0;background-size:16px;background-repeat:no-repeat}.c-tile__link-text>span{display:block}.c-tile__link-text--prev{background-image:url(\"/images/svg/icon-arrow-left.svg\");background-position:left center;padding-left:28px}.c-tile--link:hover .c-tile__link-text--prev{background-image:url(\"/images/svg/icon-arrow-left-white.svg\")}.c-tile__link-text--next{text-align:right;background-image:url(\"/images/svg/icon-arrow-right.svg\");background-position:right center;padding-right:28px}.c-tile--link:hover .c-tile__link-text--next{background-image:url(\"/images/svg/icon-arrow-right-white.svg\")}.c-tile__link-text--home{text-align:right;background-image:url(\"/images/svg/icon-home.svg\");background-position:right center;padding-right:28px}.c-tile__link-text--work{text-align:right;background-image:url(\"/images/svg/icon-work.svg\");background-position:right center;padding-right:28px}.c-tile--link:hover .c-tile__link-text--work{background-image:url(\"/images/svg/icon-work-white.svg\")}.c-tile__content{padding-top:4rem;padding-bottom:3rem;padding-left:1.5rem;padding-right:1.5rem;width:100%}@media(min-width: 42.5em){.c-tile__content{padding-left:2rem;padding-right:2rem}}@media(min-width: 60em){.c-tile__content{padding-left:4rem;padding-right:4rem}}@media(min-width: 74.0625em){.c-tile__content{padding-top:7rem;padding-bottom:6rem;padding-left:7rem;padding-right:7rem}}.c-tile__content--img{text-align:center;padding-top:1.5rem;padding-bottom:1.5rem}@media(min-width: 42.5em){.c-tile__content--img{padding-top:3rem;padding-bottom:3rem}}@media(min-width: 60em){.c-tile__content--img{padding-top:4rem;padding-bottom:4rem;padding-right:0}}@media(min-width: 74.0625em){.c-tile__content--img{padding-top:7rem;padding-bottom:7rem}}.c-tile__content--full{padding-left:1.5rem;padding-right:1.5rem;padding-top:1.5rem;padding-bottom:1.5rem}@media(min-width: 42.5em){.c-tile__content--full{padding-left:2rem;padding-right:2rem;padding-top:2rem;padding-bottom:2rem}}@media(min-width: 60em){.c-tile__content--full{padding-top:4rem;padding-bottom:4rem;padding-left:0rem;padding-right:0rem}}@media(min-width: 74.0625em){.c-tile__content--full{padding-top:7rem;padding-bottom:7rem}}.c-tile__content--link{padding-top:4rem;padding-bottom:4rem}.c-tile__labels{padding-bottom:2rem;position:relative}.c-tile__labels:after{content:\"\";background-color:#30f;width:60px;height:3px;position:absolute;bottom:0;left:0}.c-nav{width:100%}@media(min-width: 42.5em){.c-nav{width:auto}}.c-nav-main{width:100%;visibility:hidden;opacity:0;transition:all .3s ease;z-index:100;height:0;display:table;float:right}@media(min-width: 42.5em){.c-nav-main{width:auto;background-color:transparent;margin-top:1rem;margin-bottom:0rem;height:auto}}.c-nav-main.is-visible{visibility:visible;overflow:hidden;transition:all .3s ease;opacity:1;background-color:#000;position:absolute;top:0;height:100vh}@media(min-width: 42.5em){.c-nav-main.is-visible{width:auto;background-color:transparent;padding-top:1rem;padding-bottom:0rem}}@media(min-width: 42.5em){.c-nav-main{visibility:visible;overflow:hidden;transition:all .3s ease;opacity:1}}.c-nav-main__wrapper{position:relative;top:50%;transform:translateY(-50%)}@media(min-width: 42.5em){.c-nav-main__wrapper{top:0;transform:none}}.c-nav-main__inner{display:table-cell;vertical-align:middle;padding-left:2rem;padding-right:2rem}@media(min-width: 42.5em){.c-nav-main__inner{padding-left:0rem;padding-right:0rem}}.c-nav-main__list{padding-top:2rem;padding-bottom:1rem;padding-left:.5rem;padding-right:.5rem;margin-top:0rem;margin-bottom:0rem}@media(min-width: 42.5em){.c-nav-main__list{border-top-width:0;border-bottom-width:0;float:left;padding-top:0rem;padding-bottom:0rem;padding-left:1rem;padding-right:2rem;margin-top:0rem;margin-bottom:0rem;background:transparent}}.c-nav-main__item{float:none}.c-nav-main__item+.c-nav-main__item{float:none}@media(min-width: 42.5em){.c-nav-main__item{float:left}.c-nav-main__item+.c-nav-main__item{border-top:0;margin-left:1rem;margin-right:0rem;float:left}}.c-nav-main__link{padding-top:1rem;padding-bottom:1rem;padding-left:.6rem;padding-right:.6rem;display:block;color:#fff;text-decoration:none;font-size:23px;letter-spacing:.05rem;text-align:center}.c-nav-main__link.is-highlighted{box-shadow:inset 0px 0px 0px 2px #fff}.c-nav-main__link:visited{color:#fff;text-decoration:none}.c-nav-main__link:hover{color:#fff;text-decoration:none}@media(min-width: 42.5em){.c-nav-main__link{padding-top:.6rem;padding-bottom:.6rem;padding-left:.6rem;padding-right:.6rem;font-size:14px;color:#000;transition:all .3s ease}.c-nav-main__link.is-highlighted{padding-left:1.6rem;padding-right:1.6rem;box-shadow:inset 0px 0px 0px 2px #000}.c-nav-main__link:visited{color:#000;text-decoration:none}.c-nav-main__link:hover{color:#000;text-decoration:none;transition:all .3s ease}.c-nav-main__link:hover.is-highlighted{background-color:#000;color:#fff}}.c-nav-main-trigger{position:absolute;top:0;right:0;width:20px;height:20px;padding:0;margin:1.5em;margin-top:28px;cursor:pointer;transition:all .3s ease;z-index:110}@media(min-width: 42.5em){.c-nav-main-trigger{display:none}}.c-nav-main-trigger button{cursor:pointer;width:14px;padding:0;height:2px;background-color:#1b2541;box-shadow:0 0 0 transparent;border:0 transparent;text-indent:-9999px;position:absolute;top:50%;left:0;-webkit-appearance:none;line-height:0;transition:all .3s ease;border-radius:99px}.c-nav-main-trigger button:active,.c-nav-main-trigger button:focus{outline:0;border:0}.c-nav-main-trigger button::after,.c-nav-main-trigger button::before{display:block;content:\"\";position:absolute;left:0;height:2px;background-color:#1b2541;width:100%;transition:all .3s ease;border-radius:99px}.c-nav-main-trigger button::after{top:-7px;width:16px}.c-nav-main-trigger button::before{bottom:-7px;left:0;right:0;width:12px}.c-nav-main-trigger.is-active button{background:transparent}.c-nav-main-trigger.is-active button:after{transform:rotate(45deg) translate(0, 0) scale(1, 1);color:#fff;background-color:#fff;width:20px;transform-origin:left center}.c-nav-main-trigger.is-active button:before{transform:rotate(-45deg) translate(0, 0) scale(1, 1);color:#fff;background-color:#fff;width:20px;transform-origin:left center}.c-logo{display:block;width:28px;height:20px;margin-bottom:0;background-repeat:no-repeat;background-position:left;background-image:url(\"../images/svg/3s.svg\");background-size:contain;text-indent:-99999px;margin-bottom:1.5rem;margin-left:1.5rem;margin-top:28px;position:absolute;top:0;z-index:1000;float:left;color:#000;line-height:1.2em;font-size:14px;letter-spacing:.05rem}@media(min-width: 42.5em){.c-logo{height:28px;position:relative;margin-left:2rem}}.c-body-detail .c-logo{transition-property:all !important;transition-duration:.1s !important;transition-timing-function:linear !important}.c-body-detail .c-logo:hover{background-image:url(\"../images/svg/3s-open.svg\");transition:all .1s linear}.c-logo--text{width:200px;overflow:hidden}.c-logo--text:before{content:\"Dries Standaert\";text-indent:0;height:24px;font-weight:500;line-height:1rem;display:table-cell;vertical-align:middle;padding-left:30px}@media(min-width: 42.5em){.c-logo--text{width:280px;text-indent:0;margin-top:1.3rem;margin-bottom:1.7rem;margin-left:2rem;padding-left:35px;padding-top:7px}.c-logo--text:before{content:\"\";text-indent:0;height:0;width:0;display:block;margin-left:0;margin-top:0}}.c-logo__link{display:block;height:100%}.c-social__list{height:30px}.c-social__list-item{padding-left:0rem;padding-right:.25rem;display:inline-block}.c-social__link{width:30px;height:30px;display:block;overflow:hidden;text-decoration:none}.c-social__link:before{content:\"\";display:block;width:30px;height:30px;background-size:cover}.c-social__link--twitter:before{background-image:url(\"/images/svg/icon-twitter.svg\")}.c-social__link--twitter.c-social__link--white:before{background-image:url(\"/images/svg/icon-twitter-white.svg\")}.c-social__link--codepen:before{background-image:url(\"/images/svg/icon-codepen.svg\")}.c-social__link--codepen.c-social__link--white:before{background-image:url(\"/images/svg/icon-codepen-white.svg\")}.c-social__link--dribbble:before{background-image:url(\"/images/svg/icon-dribbble.svg\")}.c-social__link--dribbble.c-social__link--white:before{background-image:url(\"/images/svg/icon-dribbble-white.svg\")}.c-social__link--linkedin:before{background-image:url(\"/images/svg/icon-linkedin.svg\")}.c-social__link--linkedin.c-social__link--white:before{background-image:url(\"/images/svg/icon-linkedin-white.svg\")}.c-social__link--cv:before{background-image:url(\"/images/svg/icon-cv.svg\")}.c-social__link--cv.c-social__link--white:before{background-image:url(\"/images/svg/icon-cv-white.svg\")}.c-sound{background-position:5px center;background-repeat:no-repeat;background-size:0;transition:all .3s ease-in-out;background-image:url(\"/images/svg/icon-audio.svg\")}.c-sound:hover{cursor:pointer;background-size:16px;color:#000;transition:all .3s ease-in-out;padding-left:1.4rem}.c-hero{padding-left:1.5rem;padding-right:1.5rem}@media(min-width: 42.5em){.c-hero{padding-left:2rem;padding-right:0rem}}.c-hero>h1{margin-bottom:2rem}.c-hero>h2{font-size:1.4rem}.c-card{margin-top:0rem;margin-bottom:0rem;padding-left:2rem;padding-right:2rem;background-color:#f7f7f7}@media(min-width: 42.5em){.c-card{margin-top:0rem;margin-bottom:0rem;padding-left:0rem;padding-right:0rem}}.c-card>*:last-child,.c-card>*:last-child>*:last-child,.c-card>*:last-child>*:last-child>*:last-child{margin-bottom:0}.c-card--alpha{color:#1b2541;background-color:#f7f7f7;border:1px solid #000;border-radius:0}.c-card--ratio{position:relative}.c-card__content{background-color:#f7f7f7;position:absolute;height:100%;width:100%;top:0;left:0;opacity:0;transition:opacity .3s ease-out}.c-card__content:hover{opacity:1;transition:opacity .3s ease-out}.touchevents .c-card__content{height:auto;width:auto;display:inline-block;opacity:1;background-color:#fff;background-image:linear-gradient(white, 255, 255, 255, 1) !important;padding:.25rem .5rem .2rem;top:auto;bottom:.5rem;left:auto;right:.5rem;box-shadow:1px 1px 1px rgba(0,0,0,.2)}.c-card__title{color:#fff;text-align:center;width:100%;font-weight:300}.touchevents .c-card__title{color:#000;font-size:.82353rem}.c-card__title-link{text-decoration:none;color:#30f !important;padding:10px 1rem;opacity:1;border-bottom:3px solid #30f}.c-card__title-meta{text-decoration:none;color:#000 !important;padding:10px 1rem;opacity:.4}.c-card__meta{color:#000;transform:translateY(-30px);opacity:0;transition:all .3s ease-out;display:none}.c-stream__item:hover .c-card__meta{transform:translateY(0);transition:all .3s ease-out;opacity:1}.c-card__link{position:absolute !important;width:100%;height:100%;top:0;left:0;bottom:0;right:0;background-size:cover;background-position:center center}.c-gallery{display:grid;grid-template-columns:repeat(12, 1fr);grid-template-rows:repeat(12, 8vw);grid-gap:.5rem}@media(min-width: 42.5em){.c-gallery{grid-gap:1rem}}.c-gallery__item{display:flex;align-items:center;position:relative}.c-gallery__item:hover>.c-gallery__img{opacity:0;transition:opacity .3s ease-out}.c-gallery__item:hover>.c-gallery__caption{opacity:1;transition:opacity .3s ease-out}.c-gallery__item--1{grid-column:1/span 12;grid-row:1/span 8}@media(min-width: 42.5em){.c-gallery__item--1{grid-column:1/span 6;grid-row:1/span 4}}.c-gallery__item--2{grid-column:1/span 12;grid-row:9/span 8}@media(min-width: 42.5em){.c-gallery__item--2{grid-column:7/span 6;grid-row:1/span 4}}.c-gallery__item--3{grid-column:1/span 12;grid-row:17/span 8}@media(min-width: 42.5em){.c-gallery__item--3{grid-column:1/span 8;grid-row:5/span 6}}.c-gallery__item--4{grid-column:1/span 12;grid-row:25/span 8}@media(min-width: 42.5em){.c-gallery__item--4{grid-column:9/span 4;grid-row:5/span 6}}.c-gallery__item--5{grid-column:1/span 12;grid-row:33/span 8}@media(min-width: 42.5em){.c-gallery__item--5{grid-column:1/span 4;grid-row:11/span 4}}.c-gallery__item--6{grid-column:1/span 12;grid-row:41/span 8}@media(min-width: 42.5em){.c-gallery__item--6{grid-column:5/span 4;grid-row:11/span 4}}.c-gallery__item--7{grid-column:1/span 12;grid-row:49/span 8}@media(min-width: 42.5em){.c-gallery__item--7{grid-column:9/span 4;grid-row:11/span 4}}.c-gallery__img{width:100%;height:100%;object-fit:cover;display:block;opacity:1;transition:opacity .3s ease-out}.c-gallery__caption{color:#1b2541;text-align:center;font-weight:300;position:absolute;z-index:1;opacity:1;background-color:#fff;font-size:1rem;padding:10px;top:.5rem;margin:0;width:auto;left:0}@media(min-width: 42.5em){.c-gallery__caption{background:none;color:#fff;width:100%;opacity:0;top:auto}}.touchevents .c-gallery__caption{color:#000;font-size:.82353rem}.c-mockup{position:relative}.c-mockup-mobile{width:90%;max-width:450px;margin:100px auto 50px -240px;position:relative;margin-bottom:0;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform-style:preserve-3d;transform-origin:center top;transform:rotateX(-60deg) rotateZ(-40deg) translateX(50px) translateY(300px) translateZ(0);transition:transform .6s}.c-mockup-mobile--1{z-index:30;top:70px;left:0;transition:all .4s ease-in-out}.c-mockup:hover .c-mockup-mobile--1,.c-mockup-mobile--1.is-open{top:-20px;transition:all .4s ease-in-out}.c-mockup-mobile--1.is-open:hover{left:-60px;transition:all .4s ease-in-out}.c-mockup-mobile--2{z-index:20;top:-20px;left:0;position:absolute;transition:all .4s ease-in-out}.c-mockup:hover .c-mockup-mobile--2,.c-mockup-mobile--2.is-open{top:30px;transition:all .4s ease-in-out}.c-mockup-mobile--2.is-open:hover{left:-60px;transition:all .4s ease-in-out}.c-mockup-mobile--3{z-index:10;top:64px;left:0;position:absolute;transition:all .4s ease-in-out}.c-mockup:hover .c-mockup-mobile--3,.c-mockup-mobile--3.is-open{top:180px;transition:all .4s ease-in-out}.c-mockup-mobile--3.is-open:hover{left:-60px;transition:all .4s ease-in-out}.c-tilt{position:relative;min-height:400px;margin:auto;width:100%;overflow:hidden;perspective:1000px;transform-style:preserve-3d}.c-tilt__img{height:100%;width:100%;transform-style:preserve-3d;backface-visibility:hidden;background-repeat:no-repeat;background-position:center center;background-size:contain;position:absolute;top:0;left:0}.c-scatter__animation{width:260px;height:300px;position:relative;margin:4rem auto}.c-scatter__animation img{position:absolute;left:0;bottom:0;width:260px}@media(min-width: 42.5em){.c-scatter__animation{width:320px;height:380px}.c-scatter__animation img{width:320px}}.c-paperstack{background-image:url(\"../images/svg/paper-stack.svg\");width:60px;height:114px;position:absolute;top:95px;right:0;z-index:1000}@media(min-width: 42.5em){.c-paperstack{width:70px;height:102px;top:166px}}.animated{animation-duration:1s;animation-fill-mode:both}@keyframes wobble{0%{transform:none}15%{transform:translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)}30%{transform:translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)}45%{transform:translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)}60%{transform:translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)}75%{transform:translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)}100%{transform:none}}.wobble{animation-name:wobble}.c-papersheet-wrapper{position:absolute;bottom:250px;right:50%;width:200px;height:300px;pointer-events:none}.c-papersheet{width:80px;height:80px;background-image:url(\"../images/svg/paper-sheet.svg\");background-repeat:no-repeat;outline:none !important;display:block;position:absolute}.c-papersheet2{background-image:url(\"../images/svg/paper-sheet2.svg\")}@keyframes bounce{0%{transform:translate(0, 0) rotate3d(0, 0, 1, 0deg)}70%{transform:translate(0, 250px) rotate3d(0, 0, 1, 90deg)}100%{transform:translate(0, 0) rotate3d(0, 0, 1, 0deg)}}.bounce{animation:bounce 6s ease infinite;float:right;left:25%;top:40%}.bounce2{animation:bounce 9s ease infinite;left:75%;top:50%}.bounce3{animation:bounce 11s ease infinite;left:120%;top:30%;width:70px;height:70px}.c-sp__graph{height:400px}.c-sp__bars{bottom:0;height:100%;left:0;overflow:hidden;position:absolute;width:200%}@media(min-width: 42.5em){.c-sp__bars{width:154%}}@media(min-width: 60em){.c-sp__bars{width:100%}}.c-sp__bar{animation:expandHeight 250ms 0ms ease-in-out forwards 1;bottom:0;height:100%;left:0;position:absolute;transform:translateY(100%);width:3.4482758621%}.c-sp__bar>span{background:#000;bottom:0;display:block;height:100%;left:calc(50% - 2.5px);position:absolute;transition:height 600ms ease-out;width:5px}.c-sp__bar>span::after{background-color:red;bottom:0;content:\"\";display:block;height:0%;left:0;position:absolute;transition:height 400ms ease-out;width:100%}.c-sp__bar:hover>span{height:110% !important;transition:height 50ms linear}.c-sp__bar:hover>span::after{height:100% !important;transition:height 50ms linear}.c-sp__bar:nth-child(1){animation-delay:550ms;content:1;height:55%;left:0%}.c-sp__bar:nth-child(1)>span::after{height:57.6%}.c-sp__bar:nth-child(2){animation-delay:600ms;content:2;height:58%;left:3.4482758621%}.c-sp__bar:nth-child(2)>span::after{height:52.8%}.c-sp__bar:nth-child(3){animation-delay:650ms;content:3;height:60%;left:6.8965517241%}.c-sp__bar:nth-child(3)>span::after{height:46.4%}.c-sp__bar:nth-child(4){animation-delay:700ms;content:4;height:61%;left:10.3448275862%}.c-sp__bar:nth-child(4)>span::after{height:43.2%}.c-sp__bar:nth-child(5){animation-delay:750ms;content:5;height:61%;left:13.7931034483%}.c-sp__bar:nth-child(5)>span::after{height:36.8%}.c-sp__bar:nth-child(6){animation-delay:800ms;content:6;height:60%;left:17.2413793103%}.c-sp__bar:nth-child(6)>span::after{height:32%}.c-sp__bar:nth-child(7){animation-delay:850ms;content:7;height:57%;left:20.6896551724%}.c-sp__bar:nth-child(7)>span::after{height:28.8%}.c-sp__bar:nth-child(8){animation-delay:900ms;content:8;height:54%;left:24.1379310345%}.c-sp__bar:nth-child(8)>span::after{height:28.8%}.c-sp__bar:nth-child(9){animation-delay:950ms;content:9;height:50%;left:27.5862068966%}.c-sp__bar:nth-child(9)>span::after{height:32%}.c-sp__bar:nth-child(10){animation-delay:1000ms;content:10;height:46%;left:31.0344827586%}.c-sp__bar:nth-child(10)>span::after{height:36.8%}.c-sp__bar:nth-child(11){animation-delay:1050ms;content:11;height:42%;left:34.4827586207%}.c-sp__bar:nth-child(11)>span::after{height:43.2%}.c-sp__bar:nth-child(12){animation-delay:1100ms;content:12;height:37%;left:37.9310344828%}.c-sp__bar:nth-child(12)>span::after{height:49.6%}.c-sp__bar:nth-child(13){animation-delay:1150ms;content:13;height:33%;left:41.3793103448%}.c-sp__bar:nth-child(13)>span::after{height:54.4%}.c-sp__bar:nth-child(14){animation-delay:1200ms;content:14;height:30%;left:44.8275862069%}.c-sp__bar:nth-child(14)>span::after{height:57.6%}.c-sp__bar:nth-child(15){animation-delay:1250ms;content:15;height:28%;left:48.275862069%}.c-sp__bar:nth-child(15)>span::after{height:57.6%}.c-sp__bar:nth-child(16){animation-delay:1300ms;content:16;height:26%;left:51.724137931%}.c-sp__bar:nth-child(16)>span::after{height:54.4%}.c-sp__bar:nth-child(17){animation-delay:1350ms;content:17;height:26%;left:55.1724137931%}.c-sp__bar:nth-child(17)>span::after{height:49.6%}.c-sp__bar:nth-child(18){animation-delay:1400ms;content:18;height:27%;left:58.6206896552%}.c-sp__bar:nth-child(18)>span::after{height:43.2%}.c-sp__bar:nth-child(19){animation-delay:1450ms;content:19;height:28%;left:62.0689655172%}.c-sp__bar:nth-child(19)>span::after{height:36.8%}.c-sp__bar:nth-child(20){animation-delay:1500ms;content:20;height:31%;left:65.5172413793%}.c-sp__bar:nth-child(20)>span::after{height:32%}.c-sp__bar:nth-child(21){animation-delay:1550ms;content:21;height:35%;left:68.9655172414%}.c-sp__bar:nth-child(21)>span::after{height:28.8%}.c-sp__bar:nth-child(22){animation-delay:1600ms;content:22;height:39%;left:72.4137931034%}.c-sp__bar:nth-child(22)>span::after{height:28.8%}.c-sp__bar:nth-child(23){animation-delay:1650ms;content:23;height:43%;left:75.8620689655%}.c-sp__bar:nth-child(23)>span::after{height:32%}.c-sp__bar:nth-child(24){animation-delay:1700ms;content:24;height:47%;left:79.3103448276%}.c-sp__bar:nth-child(24)>span::after{height:36.8%}.c-sp__bar:nth-child(25){animation-delay:1750ms;content:25;height:51%;left:82.7586206897%}.c-sp__bar:nth-child(25)>span::after{height:43.2%}.c-sp__bar:nth-child(26){animation-delay:1800ms;content:26;height:55%;left:86.2068965517%}.c-sp__bar:nth-child(26)>span::after{height:49.6%}.c-sp__bar:nth-child(27){animation-delay:1850ms;content:27;height:58%;left:89.6551724138%}.c-sp__bar:nth-child(27)>span::after{height:54.4%}.c-sp__bar:nth-child(28){animation-delay:1900ms;content:28;height:60%;left:93.1034482759%}.c-sp__bar:nth-child(28)>span::after{height:57.6%}.c-sp__bar:nth-child(29){animation-delay:1950ms;content:29;height:61%;left:96.5517241379%}.c-sp__bar:nth-child(29)>span::after{height:57.6%}@keyframes expandHeight{from{transform:translateY(100%)}to{transform:translateY(0%)}}.inner-wrapper{max-width:52rem;margin-left:auto;margin-right:auto;padding-left:1.25rem;padding-right:1.25rem}.visually-hidden{border:0;clip:rect(0 0 0 0);height:auto;margin:0;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.wrapper{max-width:58rem;margin-left:auto;margin-right:auto;padding-left:1.25rem;padding-right:1.25rem}.u-uppercase{text-transform:uppercase}.u-bgcolor-gradient{background-image:linear-gradient(to right, #02b3e4, #02ccba)}.u-bgcolor-neutral-x-light-trans{background-color:rgba(255,255,255,.5)}.u-bg-bene{background-image:linear-gradient(#fbd800, rgba(251, 216, 0, 0.75)),url(\"/img/jpg/bene-bg.jpg\")}.u-frame{background:#fff}.u-heart{color:red;font-size:120%;display:inline-block;vertical-align:middle}.u-ratio{height:0;overflow:hidden}.u-ratio-1x1{padding-bottom:100%}.u-ratio-4x3{padding-bottom:75%}.u-ratio-1x2{padding-bottom:150%}.u-flex-auto{flex:1 1 auto;min-width:0;min-height:0}figure.u-ratio{background-repeat:no-repeat}.u-browser{box-shadow:0 20px 50px rgba(0,0,0,.2)}.u-browser:before{content:\"\";display:block;padding-top:4%;background:url(\"/img/png/browser-white.png\") no-repeat;background-size:cover;background-position:top left}@media(min-width: 42.5em){.u-browser:before{background:url(\"/img/png/browser-white.png\") no-repeat;background-size:cover;background-position:top left}}.u-signature{font-family:\"Playfair Display\",serif;font-size:3rem}.u-break-right{margin-right:-8rem}.u-break-left{margin-left:-8rem}.u-tablet{border:40px solid #fff;border-top:80px solid #fff;border-bottom:80px solid #fff;border-radius:20px;box-shadow:5px 20px 50px rgba(0,0,0,.1);overflow:visible;background-size:cover;background-position:top left;transition:all .5s;position:relative;margin-left:0}.u-tablet:after{content:\"\";width:15px;height:15px;background-color:#000;position:absolute;border-radius:15px;border:4px solid #e5e8ed;left:50%;top:-40px;z-index:1000;opacity:.5}.u-tablet-right{border:40px solid #fff;border-right:80px solid #fff;border-left:0 solid #fff;border-radius:20px;border-top-left-radius:0;border-bottom-left-radius:0;box-shadow:5px 20px 50px rgba(0,0,0,.1);overflow:visible;background-position:right;background-size:cover;transition:all .5s;position:relative;margin-right:4em}@media(min-width: 30em){.u-tablet-right{margin-right:2em}.u-tablet-right:hover{box-shadow:5px 20px 50px rgba(0,0,0,.2);transform:translate(-20px)}}.u-tablet-right:after{content:\"\";width:15px;height:15px;background-color:#000;position:absolute;border-radius:15px;border:4px solid #e5e8ed;right:-40px;top:50%;z-index:1000;opacity:.5}.u-tablet-left{border:40px solid #fff;border-left:80px solid #fff;border-right:0 solid #fff;border-radius:20px;border-top-right-radius:0;border-bottom-right-radius:0;box-shadow:5px 20px 50px rgba(0,0,0,.1);overflow:visible;background-size:cover;background-position:left;transition:all .5s;position:relative;margin-left:4em}@media(min-width: 30em){.u-tablet-left{margin-left:2em}.u-tablet-left:hover{box-shadow:5px 20px 50px rgba(0,0,0,.2)}}.u-tablet-left:after{content:\"\";width:15px;height:15px;background-color:#000;position:absolute;border-radius:15px;border:4px solid #e5e8ed;left:-40px;top:50%;z-index:1000;opacity:.5}.u-paper-right{border:40px solid #fff;border-left:0 solid #fff;box-shadow:5px 20px 50px rgba(0,0,0,.1);overflow:visible;background-position:right;background-size:cover;transition:all .5s;position:relative;margin-right:4em}@media(min-width: 30em){.u-paper-right{margin-right:2em}.u-paper-right:hover{box-shadow:5px 20px 50px rgba(0,0,0,.2);transform:translate(-20px)}}.u-paper-left{border:40px solid #fff;border-right:0 solid #fff;box-shadow:5px 20px 50px rgba(0,0,0,.1);overflow:visible;background-position:left;background-size:cover;transition:all .5s;position:relative;margin-left:4em}@media(min-width: 30em){.u-paper-left{margin-left:2em}.u-paper-left:hover{box-shadow:5px 20px 50px rgba(0,0,0,.2)}}.u-paper{box-shadow:5px 20px 50px rgba(0,0,0,.1);overflow:visible;background-position:center top;background-size:cover;transition:all .5s;position:relative}@media(min-width: 30em){.u-paper:hover{box-shadow:5px 20px 50px rgba(0,0,0,.2)}}.u-phone-left{border:10px solid #fff;border-top:60px solid #fff;border-bottom:60px solid #fff;border-radius:20px;box-shadow:5px 20px 50px rgba(0,0,0,.1);overflow:visible;width:60%;padding-bottom:80%;margin-left:4em;transition:all .5s;position:relative}@media(min-width: 30em){.u-phone-left{margin-left:2em}.u-phone-left:hover{box-shadow:5px 20px 50px rgba(0,0,0,.2)}}.u-phone-left:after{content:\"\";width:14%;height:10px;background-color:rgba(0,0,0,.4);position:absolute;border-radius:15px;border:2px solid #e5e8ed;right:calc(50% - 7%);top:-35px;z-index:1000;opacity:.5}.u-phone-left:before{content:\"\";width:15px;height:15px;background-color:#000;position:absolute;border-radius:15px;border:4px solid #e5e8ed;left:10%;top:-38px;z-index:1000;opacity:.5}@media(min-width: 42.5em){.u-flip{transform:scaleX(-1)}}.u-m-alpha{margin-top:0rem;margin-bottom:0rem;margin-left:0rem;margin-right:0rem}.u-mt-alpha{margin-top:0rem}.u-mb-alpha{margin-bottom:0rem}.u-p-alpha{padding-top:0rem;padding-bottom:0rem;padding-left:0rem;padding-right:0rem}.u-pt-alpha{padding-top:0rem}.u-pb-alpha{padding-bottom:0rem}.u-pl-alpha{padding-left:0rem}.u-pr-alpha{padding-right:0rem}@media(min-width: 42.5em){.u-mb-alpha-bp3{margin-bottom:0rem}}@media(min-width: 42.5em){.u-mr-alpha-bp3{margin-right:0rem}}.u-m-beta{margin-top:.5rem;margin-bottom:0rem;margin-left:.5rem;margin-right:.5rem}.u-mt-beta{margin-top:.5rem}.u-mb-beta{margin-bottom:.5rem}.u-p-beta{padding-top:.5rem;padding-bottom:0rem;padding-left:.5rem;padding-right:.5rem}.u-pt-beta{padding-top:.5rem}.u-pb-beta{padding-bottom:.5rem}.u-pl-beta{padding-left:.5rem}.u-pr-beta{padding-right:.5rem}@media(min-width: 42.5em){.u-mb-beta-bp3{margin-bottom:.5rem}}@media(min-width: 42.5em){.u-mr-beta-bp3{margin-right:.5rem}}.u-m-gamma{margin-top:1rem;margin-bottom:0rem;margin-left:1rem;margin-right:1rem}.u-mt-gamma{margin-top:1rem}.u-mb-gamma{margin-bottom:1rem}.u-p-gamma{padding-top:1rem;padding-bottom:0rem;padding-left:1rem;padding-right:1rem}.u-pt-gamma{padding-top:1rem}.u-pb-gamma{padding-bottom:1rem}.u-pl-gamma{padding-left:1rem}.u-pr-gamma{padding-right:1rem}@media(min-width: 42.5em){.u-mb-gamma-bp3{margin-bottom:1rem}}@media(min-width: 42.5em){.u-mr-gamma-bp3{margin-right:1rem}}.u-m-delta{margin-top:1.5rem;margin-bottom:0rem;margin-left:1.5rem;margin-right:1.5rem}.u-mt-delta{margin-top:1.5rem}.u-mb-delta{margin-bottom:1.5rem}.u-p-delta{padding-top:1.5rem;padding-bottom:0rem;padding-left:1.5rem;padding-right:1.5rem}.u-pt-delta{padding-top:1.5rem}.u-pb-delta{padding-bottom:1.5rem}.u-pl-delta{padding-left:1.5rem}.u-pr-delta{padding-right:1.5rem}@media(min-width: 42.5em){.u-mb-delta-bp3{margin-bottom:1.5rem}}@media(min-width: 42.5em){.u-mr-delta-bp3{margin-right:1.5rem}}.u-m-epsilon{margin-top:2rem;margin-bottom:0rem;margin-left:2rem;margin-right:2rem}.u-mt-epsilon{margin-top:2rem}.u-mb-epsilon{margin-bottom:2rem}.u-p-epsilon{padding-top:2rem;padding-bottom:0rem;padding-left:2rem;padding-right:2rem}.u-pt-epsilon{padding-top:2rem}.u-pb-epsilon{padding-bottom:2rem}.u-pl-epsilon{padding-left:2rem}.u-pr-epsilon{padding-right:2rem}@media(min-width: 42.5em){.u-mb-epsilon-bp3{margin-bottom:2rem}}@media(min-width: 42.5em){.u-mr-epsilon-bp3{margin-right:2rem}}.u-m-zeta{margin-top:4rem;margin-bottom:0rem;margin-left:4rem;margin-right:4rem}.u-mt-zeta{margin-top:4rem}.u-mb-zeta{margin-bottom:4rem}.u-p-zeta{padding-top:4rem;padding-bottom:0rem;padding-left:4rem;padding-right:4rem}.u-pt-zeta{padding-top:4rem}.u-pb-zeta{padding-bottom:4rem}.u-pl-zeta{padding-left:4rem}.u-pr-zeta{padding-right:4rem}@media(min-width: 42.5em){.u-mb-zeta-bp3{margin-bottom:4rem}}@media(min-width: 42.5em){.u-mr-zeta-bp3{margin-right:4rem}}.u-m-eta{margin-top:8rem;margin-bottom:0rem;margin-left:8rem;margin-right:8rem}.u-mt-eta{margin-top:8rem}.u-mb-eta{margin-bottom:8rem}.u-p-eta{padding-top:8rem;padding-bottom:0rem;padding-left:8rem;padding-right:8rem}.u-pt-eta{padding-top:8rem}.u-pb-eta{padding-bottom:8rem}.u-pl-eta{padding-left:8rem}.u-pr-eta{padding-right:8rem}@media(min-width: 42.5em){.u-mb-eta-bp3{margin-bottom:8rem}}@media(min-width: 42.5em){.u-mr-eta-bp3{margin-right:8rem}}.u-color-neutral-x-light{color:#fff}.u-bgcolor-neutral-x-light{background-color:#fff}.u-color-neutral-light{color:#f7f7f7}.u-bgcolor-neutral-light{background-color:#f7f7f7}.u-color-neutral-base{color:#000}.u-bgcolor-neutral-base{background-color:#000}.u-color-neutral-dark{color:#1b2541}.u-bgcolor-neutral-dark{background-color:#1b2541}.u-color-neutral-x-dark{color:#000}.u-bgcolor-neutral-x-dark{background-color:#000}.u-color-alpha-light{color:#6e52e0}.u-bgcolor-alpha-light{background-color:#6e52e0}.u-color-alpha-base{color:#30f}.u-bgcolor-alpha-base{background-color:#30f}.u-color-alpha-dark{color:#1a0080}.u-bgcolor-alpha-dark{background-color:#1a0080}.u-color-alpha-x-dark{color:#0f004d}.u-bgcolor-alpha-x-dark{background-color:#0f004d}.u-color-beta-light{color:#f7eaf5}.u-bgcolor-beta-light{background-color:#f7eaf5}.u-color-beta-base{color:#a54696}.u-bgcolor-beta-base{background-color:#a54696}.u-color-beta-dark{color:#80006b}.u-bgcolor-beta-dark{background-color:#80006b}.u-color-beta-x-dark{color:#4d0040}.u-bgcolor-beta-x-dark{background-color:#4d0040}.u-color-gamma-light{color:#e0ad52}.u-bgcolor-gamma-light{background-color:#e0ad52}.u-color-gamma-base{color:#ffc357}.u-bgcolor-gamma-base{background-color:#ffc357}.u-color-gamma-dark{color:#805200}.u-bgcolor-gamma-dark{background-color:#805200}.u-color-gamma-x-dark{color:#4d3100}.u-bgcolor-gamma-x-dark{background-color:#4d3100}.u-color-matexi-light{color:#76b8e9}.u-bgcolor-matexi-light{background-color:#76b8e9}.u-color-matexi-base{color:#f47920}.u-bgcolor-matexi-base{background-color:#f47920}.u-color-matexi-dark{color:#803600}.u-bgcolor-matexi-dark{background-color:#803600}.u-color-matexi-x-dark{color:#4d2000}.u-bgcolor-matexi-x-dark{background-color:#4d2000}.u-color-ferret-x-light{color:#f4b8b3}.u-bgcolor-ferret-x-light{background-color:#f4b8b3}.u-color-ferret-light{color:#f9897a}.u-bgcolor-ferret-light{background-color:#f9897a}.u-color-ferret-base{color:#3a6f81}.u-bgcolor-ferret-base{background-color:#3a6f81}.u-color-ferret-dark{color:#005f80}.u-bgcolor-ferret-dark{background-color:#005f80}.u-color-ferret-x-dark{color:#00394d}.u-bgcolor-ferret-x-dark{background-color:#00394d}.u-color-ac-x-light{color:#f5f5f6}.u-bgcolor-ac-x-light{background-color:#f5f5f6}.u-color-ac-light{color:#ffcc01}.u-bgcolor-ac-light{background-color:#ffcc01}.u-color-ac-base{color:#0078a1}.u-bgcolor-ac-base{background-color:#0078a1}.u-color-ac-dark{color:#005f80}.u-bgcolor-ac-dark{background-color:#005f80}.u-color-ac-x-dark{color:#00394d}.u-bgcolor-ac-x-dark{background-color:#00394d}.u-color-bene-light{color:#fbd800}.u-bgcolor-bene-light{background-color:#fbd800}.u-color-bene-base{color:#e13864}.u-bgcolor-bene-base{background-color:#e13864}.u-color-bene-dark{color:#800021}.u-bgcolor-bene-dark{background-color:#800021}.u-color-bene-x-dark{color:#4d0014}.u-bgcolor-bene-x-dark{background-color:#4d0014}.u-color-oktav-light{color:#ace052}.u-bgcolor-oktav-light{background-color:#ace052}.u-color-oktav-base{color:#99ca45}.u-bgcolor-oktav-base{background-color:#99ca45}.u-color-oktav-dark{color:#518000}.u-bgcolor-oktav-dark{background-color:#518000}.u-color-oktav-x-dark{color:#304d00}.u-bgcolor-oktav-x-dark{background-color:#304d00}.u-color-maunga-light{color:#9b52e0}.u-bgcolor-maunga-light{background-color:#9b52e0}.u-color-maunga-base{color:#9763c8}.u-bgcolor-maunga-base{background-color:#9763c8}.u-color-maunga-dark{color:#420080}.u-bgcolor-maunga-dark{background-color:#420080}.u-color-maunga-x-dark{color:#27004d}.u-bgcolor-maunga-x-dark{background-color:#27004d}.u-color-werchter-light{color:#52e0cd}.u-bgcolor-werchter-light{background-color:#52e0cd}.u-color-werchter-base{color:#00ceb2}.u-bgcolor-werchter-base{background-color:#00ceb2}.u-color-werchter-dark{color:#00806e}.u-bgcolor-werchter-dark{background-color:#00806e}.u-color-werchter-x-dark{color:#004d42}.u-bgcolor-werchter-x-dark{background-color:#004d42}.u-color-sp-light{color:#e05252}.u-bgcolor-sp-light{background-color:#e05252}.u-color-sp-base{color:#eaeaea}.u-bgcolor-sp-base{background-color:#eaeaea}.u-color-sp-dark{color:#1a1a1a}.u-bgcolor-sp-dark{background-color:#1a1a1a}.u-color-sp-x-dark{color:#4d0000}.u-bgcolor-sp-x-dark{background-color:#4d0000}.u-color-error-light{color:#e05952}.u-bgcolor-error-light{background-color:#e05952}.u-color-error-base{color:#ff4136}.u-bgcolor-error-base{background-color:#ff4136}.u-color-error-dark{color:#b30a00}.u-bgcolor-error-dark{background-color:#b30a00}.u-color-success-light{color:#52e062}.u-bgcolor-success-light{background-color:#52e062}.u-color-success-base{color:#2ecc40}.u-bgcolor-success-base{background-color:#2ecc40}.u-color-success-dark{color:#00b314}.u-bgcolor-success-dark{background-color:#00b314}.u-color-notice-light{color:#e09452}.u-bgcolor-notice-light{background-color:#e09452}.u-color-notice-base{color:#ff851b}.u-bgcolor-notice-base{background-color:#ff851b}.u-color-notice-dark{color:#b35300}.u-bgcolor-notice-dark{background-color:#b35300}.u-text-center{text-align:center}.u-text-left{text-align:left}.u-text-right{text-align:right}.u-float-left{float:left}.u-float-right{float:right}.u-align-vertical{position:relative;top:50%;transform:translateY(-50%)}.u-align-horizontal{margin:0 auto}.p-nanobar{height:3px}[data-aos][data-aos][data-aos-duration=\"50\"],body[data-aos-duration=\"50\"] [data-aos]{transition-duration:50ms}[data-aos][data-aos][data-aos-delay=\"50\"],body[data-aos-delay=\"50\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"50\"].aos-animate,body[data-aos-delay=\"50\"] [data-aos].aos-animate{transition-delay:50ms}[data-aos][data-aos][data-aos-duration=\"100\"],body[data-aos-duration=\"100\"] [data-aos]{transition-duration:.1s}[data-aos][data-aos][data-aos-delay=\"100\"],body[data-aos-delay=\"100\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"100\"].aos-animate,body[data-aos-delay=\"100\"] [data-aos].aos-animate{transition-delay:.1s}[data-aos][data-aos][data-aos-duration=\"150\"],body[data-aos-duration=\"150\"] [data-aos]{transition-duration:.15s}[data-aos][data-aos][data-aos-delay=\"150\"],body[data-aos-delay=\"150\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"150\"].aos-animate,body[data-aos-delay=\"150\"] [data-aos].aos-animate{transition-delay:.15s}[data-aos][data-aos][data-aos-duration=\"200\"],body[data-aos-duration=\"200\"] [data-aos]{transition-duration:.2s}[data-aos][data-aos][data-aos-delay=\"200\"],body[data-aos-delay=\"200\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"200\"].aos-animate,body[data-aos-delay=\"200\"] [data-aos].aos-animate{transition-delay:.2s}[data-aos][data-aos][data-aos-duration=\"250\"],body[data-aos-duration=\"250\"] [data-aos]{transition-duration:.25s}[data-aos][data-aos][data-aos-delay=\"250\"],body[data-aos-delay=\"250\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"250\"].aos-animate,body[data-aos-delay=\"250\"] [data-aos].aos-animate{transition-delay:.25s}[data-aos][data-aos][data-aos-duration=\"300\"],body[data-aos-duration=\"300\"] [data-aos]{transition-duration:.3s}[data-aos][data-aos][data-aos-delay=\"300\"],body[data-aos-delay=\"300\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"300\"].aos-animate,body[data-aos-delay=\"300\"] [data-aos].aos-animate{transition-delay:.3s}[data-aos][data-aos][data-aos-duration=\"350\"],body[data-aos-duration=\"350\"] [data-aos]{transition-duration:.35s}[data-aos][data-aos][data-aos-delay=\"350\"],body[data-aos-delay=\"350\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"350\"].aos-animate,body[data-aos-delay=\"350\"] [data-aos].aos-animate{transition-delay:.35s}[data-aos][data-aos][data-aos-duration=\"400\"],body[data-aos-duration=\"400\"] [data-aos]{transition-duration:.4s}[data-aos][data-aos][data-aos-delay=\"400\"],body[data-aos-delay=\"400\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"400\"].aos-animate,body[data-aos-delay=\"400\"] [data-aos].aos-animate{transition-delay:.4s}[data-aos][data-aos][data-aos-duration=\"450\"],body[data-aos-duration=\"450\"] [data-aos]{transition-duration:.45s}[data-aos][data-aos][data-aos-delay=\"450\"],body[data-aos-delay=\"450\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"450\"].aos-animate,body[data-aos-delay=\"450\"] [data-aos].aos-animate{transition-delay:.45s}[data-aos][data-aos][data-aos-duration=\"500\"],body[data-aos-duration=\"500\"] [data-aos]{transition-duration:.5s}[data-aos][data-aos][data-aos-delay=\"500\"],body[data-aos-delay=\"500\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"500\"].aos-animate,body[data-aos-delay=\"500\"] [data-aos].aos-animate{transition-delay:.5s}[data-aos][data-aos][data-aos-duration=\"550\"],body[data-aos-duration=\"550\"] [data-aos]{transition-duration:.55s}[data-aos][data-aos][data-aos-delay=\"550\"],body[data-aos-delay=\"550\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"550\"].aos-animate,body[data-aos-delay=\"550\"] [data-aos].aos-animate{transition-delay:.55s}[data-aos][data-aos][data-aos-duration=\"600\"],body[data-aos-duration=\"600\"] [data-aos]{transition-duration:.6s}[data-aos][data-aos][data-aos-delay=\"600\"],body[data-aos-delay=\"600\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"600\"].aos-animate,body[data-aos-delay=\"600\"] [data-aos].aos-animate{transition-delay:.6s}[data-aos][data-aos][data-aos-duration=\"650\"],body[data-aos-duration=\"650\"] [data-aos]{transition-duration:.65s}[data-aos][data-aos][data-aos-delay=\"650\"],body[data-aos-delay=\"650\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"650\"].aos-animate,body[data-aos-delay=\"650\"] [data-aos].aos-animate{transition-delay:.65s}[data-aos][data-aos][data-aos-duration=\"700\"],body[data-aos-duration=\"700\"] [data-aos]{transition-duration:.7s}[data-aos][data-aos][data-aos-delay=\"700\"],body[data-aos-delay=\"700\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"700\"].aos-animate,body[data-aos-delay=\"700\"] [data-aos].aos-animate{transition-delay:.7s}[data-aos][data-aos][data-aos-duration=\"750\"],body[data-aos-duration=\"750\"] [data-aos]{transition-duration:.75s}[data-aos][data-aos][data-aos-delay=\"750\"],body[data-aos-delay=\"750\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"750\"].aos-animate,body[data-aos-delay=\"750\"] [data-aos].aos-animate{transition-delay:.75s}[data-aos][data-aos][data-aos-duration=\"800\"],body[data-aos-duration=\"800\"] [data-aos]{transition-duration:.8s}[data-aos][data-aos][data-aos-delay=\"800\"],body[data-aos-delay=\"800\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"800\"].aos-animate,body[data-aos-delay=\"800\"] [data-aos].aos-animate{transition-delay:.8s}[data-aos][data-aos][data-aos-duration=\"850\"],body[data-aos-duration=\"850\"] [data-aos]{transition-duration:.85s}[data-aos][data-aos][data-aos-delay=\"850\"],body[data-aos-delay=\"850\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"850\"].aos-animate,body[data-aos-delay=\"850\"] [data-aos].aos-animate{transition-delay:.85s}[data-aos][data-aos][data-aos-duration=\"900\"],body[data-aos-duration=\"900\"] [data-aos]{transition-duration:.9s}[data-aos][data-aos][data-aos-delay=\"900\"],body[data-aos-delay=\"900\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"900\"].aos-animate,body[data-aos-delay=\"900\"] [data-aos].aos-animate{transition-delay:.9s}[data-aos][data-aos][data-aos-duration=\"950\"],body[data-aos-duration=\"950\"] [data-aos]{transition-duration:.95s}[data-aos][data-aos][data-aos-delay=\"950\"],body[data-aos-delay=\"950\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"950\"].aos-animate,body[data-aos-delay=\"950\"] [data-aos].aos-animate{transition-delay:.95s}[data-aos][data-aos][data-aos-duration=\"1000\"],body[data-aos-duration=\"1000\"] [data-aos]{transition-duration:1s}[data-aos][data-aos][data-aos-delay=\"1000\"],body[data-aos-delay=\"1000\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1000\"].aos-animate,body[data-aos-delay=\"1000\"] [data-aos].aos-animate{transition-delay:1s}[data-aos][data-aos][data-aos-duration=\"1050\"],body[data-aos-duration=\"1050\"] [data-aos]{transition-duration:1.05s}[data-aos][data-aos][data-aos-delay=\"1050\"],body[data-aos-delay=\"1050\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1050\"].aos-animate,body[data-aos-delay=\"1050\"] [data-aos].aos-animate{transition-delay:1.05s}[data-aos][data-aos][data-aos-duration=\"1100\"],body[data-aos-duration=\"1100\"] [data-aos]{transition-duration:1.1s}[data-aos][data-aos][data-aos-delay=\"1100\"],body[data-aos-delay=\"1100\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1100\"].aos-animate,body[data-aos-delay=\"1100\"] [data-aos].aos-animate{transition-delay:1.1s}[data-aos][data-aos][data-aos-duration=\"1150\"],body[data-aos-duration=\"1150\"] [data-aos]{transition-duration:1.15s}[data-aos][data-aos][data-aos-delay=\"1150\"],body[data-aos-delay=\"1150\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1150\"].aos-animate,body[data-aos-delay=\"1150\"] [data-aos].aos-animate{transition-delay:1.15s}[data-aos][data-aos][data-aos-duration=\"1200\"],body[data-aos-duration=\"1200\"] [data-aos]{transition-duration:1.2s}[data-aos][data-aos][data-aos-delay=\"1200\"],body[data-aos-delay=\"1200\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1200\"].aos-animate,body[data-aos-delay=\"1200\"] [data-aos].aos-animate{transition-delay:1.2s}[data-aos][data-aos][data-aos-duration=\"1250\"],body[data-aos-duration=\"1250\"] [data-aos]{transition-duration:1.25s}[data-aos][data-aos][data-aos-delay=\"1250\"],body[data-aos-delay=\"1250\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1250\"].aos-animate,body[data-aos-delay=\"1250\"] [data-aos].aos-animate{transition-delay:1.25s}[data-aos][data-aos][data-aos-duration=\"1300\"],body[data-aos-duration=\"1300\"] [data-aos]{transition-duration:1.3s}[data-aos][data-aos][data-aos-delay=\"1300\"],body[data-aos-delay=\"1300\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1300\"].aos-animate,body[data-aos-delay=\"1300\"] [data-aos].aos-animate{transition-delay:1.3s}[data-aos][data-aos][data-aos-duration=\"1350\"],body[data-aos-duration=\"1350\"] [data-aos]{transition-duration:1.35s}[data-aos][data-aos][data-aos-delay=\"1350\"],body[data-aos-delay=\"1350\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1350\"].aos-animate,body[data-aos-delay=\"1350\"] [data-aos].aos-animate{transition-delay:1.35s}[data-aos][data-aos][data-aos-duration=\"1400\"],body[data-aos-duration=\"1400\"] [data-aos]{transition-duration:1.4s}[data-aos][data-aos][data-aos-delay=\"1400\"],body[data-aos-delay=\"1400\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1400\"].aos-animate,body[data-aos-delay=\"1400\"] [data-aos].aos-animate{transition-delay:1.4s}[data-aos][data-aos][data-aos-duration=\"1450\"],body[data-aos-duration=\"1450\"] [data-aos]{transition-duration:1.45s}[data-aos][data-aos][data-aos-delay=\"1450\"],body[data-aos-delay=\"1450\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1450\"].aos-animate,body[data-aos-delay=\"1450\"] [data-aos].aos-animate{transition-delay:1.45s}[data-aos][data-aos][data-aos-duration=\"1500\"],body[data-aos-duration=\"1500\"] [data-aos]{transition-duration:1.5s}[data-aos][data-aos][data-aos-delay=\"1500\"],body[data-aos-delay=\"1500\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1500\"].aos-animate,body[data-aos-delay=\"1500\"] [data-aos].aos-animate{transition-delay:1.5s}[data-aos][data-aos][data-aos-duration=\"1550\"],body[data-aos-duration=\"1550\"] [data-aos]{transition-duration:1.55s}[data-aos][data-aos][data-aos-delay=\"1550\"],body[data-aos-delay=\"1550\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1550\"].aos-animate,body[data-aos-delay=\"1550\"] [data-aos].aos-animate{transition-delay:1.55s}[data-aos][data-aos][data-aos-duration=\"1600\"],body[data-aos-duration=\"1600\"] [data-aos]{transition-duration:1.6s}[data-aos][data-aos][data-aos-delay=\"1600\"],body[data-aos-delay=\"1600\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1600\"].aos-animate,body[data-aos-delay=\"1600\"] [data-aos].aos-animate{transition-delay:1.6s}[data-aos][data-aos][data-aos-duration=\"1650\"],body[data-aos-duration=\"1650\"] [data-aos]{transition-duration:1.65s}[data-aos][data-aos][data-aos-delay=\"1650\"],body[data-aos-delay=\"1650\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1650\"].aos-animate,body[data-aos-delay=\"1650\"] [data-aos].aos-animate{transition-delay:1.65s}[data-aos][data-aos][data-aos-duration=\"1700\"],body[data-aos-duration=\"1700\"] [data-aos]{transition-duration:1.7s}[data-aos][data-aos][data-aos-delay=\"1700\"],body[data-aos-delay=\"1700\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1700\"].aos-animate,body[data-aos-delay=\"1700\"] [data-aos].aos-animate{transition-delay:1.7s}[data-aos][data-aos][data-aos-duration=\"1750\"],body[data-aos-duration=\"1750\"] [data-aos]{transition-duration:1.75s}[data-aos][data-aos][data-aos-delay=\"1750\"],body[data-aos-delay=\"1750\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1750\"].aos-animate,body[data-aos-delay=\"1750\"] [data-aos].aos-animate{transition-delay:1.75s}[data-aos][data-aos][data-aos-duration=\"1800\"],body[data-aos-duration=\"1800\"] [data-aos]{transition-duration:1.8s}[data-aos][data-aos][data-aos-delay=\"1800\"],body[data-aos-delay=\"1800\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1800\"].aos-animate,body[data-aos-delay=\"1800\"] [data-aos].aos-animate{transition-delay:1.8s}[data-aos][data-aos][data-aos-duration=\"1850\"],body[data-aos-duration=\"1850\"] [data-aos]{transition-duration:1.85s}[data-aos][data-aos][data-aos-delay=\"1850\"],body[data-aos-delay=\"1850\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1850\"].aos-animate,body[data-aos-delay=\"1850\"] [data-aos].aos-animate{transition-delay:1.85s}[data-aos][data-aos][data-aos-duration=\"1900\"],body[data-aos-duration=\"1900\"] [data-aos]{transition-duration:1.9s}[data-aos][data-aos][data-aos-delay=\"1900\"],body[data-aos-delay=\"1900\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1900\"].aos-animate,body[data-aos-delay=\"1900\"] [data-aos].aos-animate{transition-delay:1.9s}[data-aos][data-aos][data-aos-duration=\"1950\"],body[data-aos-duration=\"1950\"] [data-aos]{transition-duration:1.95s}[data-aos][data-aos][data-aos-delay=\"1950\"],body[data-aos-delay=\"1950\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1950\"].aos-animate,body[data-aos-delay=\"1950\"] [data-aos].aos-animate{transition-delay:1.95s}[data-aos][data-aos][data-aos-duration=\"2000\"],body[data-aos-duration=\"2000\"] [data-aos]{transition-duration:2s}[data-aos][data-aos][data-aos-delay=\"2000\"],body[data-aos-delay=\"2000\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2000\"].aos-animate,body[data-aos-delay=\"2000\"] [data-aos].aos-animate{transition-delay:2s}[data-aos][data-aos][data-aos-duration=\"2050\"],body[data-aos-duration=\"2050\"] [data-aos]{transition-duration:2.05s}[data-aos][data-aos][data-aos-delay=\"2050\"],body[data-aos-delay=\"2050\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2050\"].aos-animate,body[data-aos-delay=\"2050\"] [data-aos].aos-animate{transition-delay:2.05s}[data-aos][data-aos][data-aos-duration=\"2100\"],body[data-aos-duration=\"2100\"] [data-aos]{transition-duration:2.1s}[data-aos][data-aos][data-aos-delay=\"2100\"],body[data-aos-delay=\"2100\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2100\"].aos-animate,body[data-aos-delay=\"2100\"] [data-aos].aos-animate{transition-delay:2.1s}[data-aos][data-aos][data-aos-duration=\"2150\"],body[data-aos-duration=\"2150\"] [data-aos]{transition-duration:2.15s}[data-aos][data-aos][data-aos-delay=\"2150\"],body[data-aos-delay=\"2150\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2150\"].aos-animate,body[data-aos-delay=\"2150\"] [data-aos].aos-animate{transition-delay:2.15s}[data-aos][data-aos][data-aos-duration=\"2200\"],body[data-aos-duration=\"2200\"] [data-aos]{transition-duration:2.2s}[data-aos][data-aos][data-aos-delay=\"2200\"],body[data-aos-delay=\"2200\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2200\"].aos-animate,body[data-aos-delay=\"2200\"] [data-aos].aos-animate{transition-delay:2.2s}[data-aos][data-aos][data-aos-duration=\"2250\"],body[data-aos-duration=\"2250\"] [data-aos]{transition-duration:2.25s}[data-aos][data-aos][data-aos-delay=\"2250\"],body[data-aos-delay=\"2250\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2250\"].aos-animate,body[data-aos-delay=\"2250\"] [data-aos].aos-animate{transition-delay:2.25s}[data-aos][data-aos][data-aos-duration=\"2300\"],body[data-aos-duration=\"2300\"] [data-aos]{transition-duration:2.3s}[data-aos][data-aos][data-aos-delay=\"2300\"],body[data-aos-delay=\"2300\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2300\"].aos-animate,body[data-aos-delay=\"2300\"] [data-aos].aos-animate{transition-delay:2.3s}[data-aos][data-aos][data-aos-duration=\"2350\"],body[data-aos-duration=\"2350\"] [data-aos]{transition-duration:2.35s}[data-aos][data-aos][data-aos-delay=\"2350\"],body[data-aos-delay=\"2350\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2350\"].aos-animate,body[data-aos-delay=\"2350\"] [data-aos].aos-animate{transition-delay:2.35s}[data-aos][data-aos][data-aos-duration=\"2400\"],body[data-aos-duration=\"2400\"] [data-aos]{transition-duration:2.4s}[data-aos][data-aos][data-aos-delay=\"2400\"],body[data-aos-delay=\"2400\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2400\"].aos-animate,body[data-aos-delay=\"2400\"] [data-aos].aos-animate{transition-delay:2.4s}[data-aos][data-aos][data-aos-duration=\"2450\"],body[data-aos-duration=\"2450\"] [data-aos]{transition-duration:2.45s}[data-aos][data-aos][data-aos-delay=\"2450\"],body[data-aos-delay=\"2450\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2450\"].aos-animate,body[data-aos-delay=\"2450\"] [data-aos].aos-animate{transition-delay:2.45s}[data-aos][data-aos][data-aos-duration=\"2500\"],body[data-aos-duration=\"2500\"] [data-aos]{transition-duration:2.5s}[data-aos][data-aos][data-aos-delay=\"2500\"],body[data-aos-delay=\"2500\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2500\"].aos-animate,body[data-aos-delay=\"2500\"] [data-aos].aos-animate{transition-delay:2.5s}[data-aos][data-aos][data-aos-duration=\"2550\"],body[data-aos-duration=\"2550\"] [data-aos]{transition-duration:2.55s}[data-aos][data-aos][data-aos-delay=\"2550\"],body[data-aos-delay=\"2550\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2550\"].aos-animate,body[data-aos-delay=\"2550\"] [data-aos].aos-animate{transition-delay:2.55s}[data-aos][data-aos][data-aos-duration=\"2600\"],body[data-aos-duration=\"2600\"] [data-aos]{transition-duration:2.6s}[data-aos][data-aos][data-aos-delay=\"2600\"],body[data-aos-delay=\"2600\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2600\"].aos-animate,body[data-aos-delay=\"2600\"] [data-aos].aos-animate{transition-delay:2.6s}[data-aos][data-aos][data-aos-duration=\"2650\"],body[data-aos-duration=\"2650\"] [data-aos]{transition-duration:2.65s}[data-aos][data-aos][data-aos-delay=\"2650\"],body[data-aos-delay=\"2650\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2650\"].aos-animate,body[data-aos-delay=\"2650\"] [data-aos].aos-animate{transition-delay:2.65s}[data-aos][data-aos][data-aos-duration=\"2700\"],body[data-aos-duration=\"2700\"] [data-aos]{transition-duration:2.7s}[data-aos][data-aos][data-aos-delay=\"2700\"],body[data-aos-delay=\"2700\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2700\"].aos-animate,body[data-aos-delay=\"2700\"] [data-aos].aos-animate{transition-delay:2.7s}[data-aos][data-aos][data-aos-duration=\"2750\"],body[data-aos-duration=\"2750\"] [data-aos]{transition-duration:2.75s}[data-aos][data-aos][data-aos-delay=\"2750\"],body[data-aos-delay=\"2750\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2750\"].aos-animate,body[data-aos-delay=\"2750\"] [data-aos].aos-animate{transition-delay:2.75s}[data-aos][data-aos][data-aos-duration=\"2800\"],body[data-aos-duration=\"2800\"] [data-aos]{transition-duration:2.8s}[data-aos][data-aos][data-aos-delay=\"2800\"],body[data-aos-delay=\"2800\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2800\"].aos-animate,body[data-aos-delay=\"2800\"] [data-aos].aos-animate{transition-delay:2.8s}[data-aos][data-aos][data-aos-duration=\"2850\"],body[data-aos-duration=\"2850\"] [data-aos]{transition-duration:2.85s}[data-aos][data-aos][data-aos-delay=\"2850\"],body[data-aos-delay=\"2850\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2850\"].aos-animate,body[data-aos-delay=\"2850\"] [data-aos].aos-animate{transition-delay:2.85s}[data-aos][data-aos][data-aos-duration=\"2900\"],body[data-aos-duration=\"2900\"] [data-aos]{transition-duration:2.9s}[data-aos][data-aos][data-aos-delay=\"2900\"],body[data-aos-delay=\"2900\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2900\"].aos-animate,body[data-aos-delay=\"2900\"] [data-aos].aos-animate{transition-delay:2.9s}[data-aos][data-aos][data-aos-duration=\"2950\"],body[data-aos-duration=\"2950\"] [data-aos]{transition-duration:2.95s}[data-aos][data-aos][data-aos-delay=\"2950\"],body[data-aos-delay=\"2950\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2950\"].aos-animate,body[data-aos-delay=\"2950\"] [data-aos].aos-animate{transition-delay:2.95s}[data-aos][data-aos][data-aos-duration=\"3000\"],body[data-aos-duration=\"3000\"] [data-aos]{transition-duration:3s}[data-aos][data-aos][data-aos-delay=\"3000\"],body[data-aos-delay=\"3000\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"3000\"].aos-animate,body[data-aos-delay=\"3000\"] [data-aos].aos-animate{transition-delay:3s}[data-aos][data-aos][data-aos-easing=linear],body[data-aos-easing=linear] [data-aos]{transition-timing-function:cubic-bezier(0.25, 0.25, 0.75, 0.75)}[data-aos][data-aos][data-aos-easing=ease],body[data-aos-easing=ease] [data-aos]{transition-timing-function:ease}[data-aos][data-aos][data-aos-easing=ease-in],body[data-aos-easing=ease-in] [data-aos]{transition-timing-function:ease-in}[data-aos][data-aos][data-aos-easing=ease-out],body[data-aos-easing=ease-out] [data-aos]{transition-timing-function:ease-out}[data-aos][data-aos][data-aos-easing=ease-in-out],body[data-aos-easing=ease-in-out] [data-aos]{transition-timing-function:ease-in-out}[data-aos][data-aos][data-aos-easing=ease-in-back],body[data-aos-easing=ease-in-back] [data-aos]{transition-timing-function:cubic-bezier(0.6, -0.28, 0.735, 0.045)}[data-aos][data-aos][data-aos-easing=ease-out-back],body[data-aos-easing=ease-out-back] [data-aos]{transition-timing-function:cubic-bezier(0.175, 0.885, 0.32, 1.275)}[data-aos][data-aos][data-aos-easing=ease-in-out-back],body[data-aos-easing=ease-in-out-back] [data-aos]{transition-timing-function:cubic-bezier(0.68, -0.55, 0.265, 1.55)}[data-aos][data-aos][data-aos-easing=ease-in-sine],body[data-aos-easing=ease-in-sine] [data-aos]{transition-timing-function:cubic-bezier(0.47, 0, 0.745, 0.715)}[data-aos][data-aos][data-aos-easing=ease-out-sine],body[data-aos-easing=ease-out-sine] [data-aos]{transition-timing-function:cubic-bezier(0.39, 0.575, 0.565, 1)}[data-aos][data-aos][data-aos-easing=ease-in-out-sine],body[data-aos-easing=ease-in-out-sine] [data-aos]{transition-timing-function:cubic-bezier(0.445, 0.05, 0.55, 0.95)}[data-aos][data-aos][data-aos-easing=ease-in-quad],body[data-aos-easing=ease-in-quad] [data-aos]{transition-timing-function:cubic-bezier(0.55, 0.085, 0.68, 0.53)}[data-aos][data-aos][data-aos-easing=ease-out-quad],body[data-aos-easing=ease-out-quad] [data-aos]{transition-timing-function:cubic-bezier(0.25, 0.46, 0.45, 0.94)}[data-aos][data-aos][data-aos-easing=ease-in-out-quad],body[data-aos-easing=ease-in-out-quad] [data-aos]{transition-timing-function:cubic-bezier(0.455, 0.03, 0.515, 0.955)}[data-aos][data-aos][data-aos-easing=ease-in-cubic],body[data-aos-easing=ease-in-cubic] [data-aos]{transition-timing-function:cubic-bezier(0.55, 0.085, 0.68, 0.53)}[data-aos][data-aos][data-aos-easing=ease-out-cubic],body[data-aos-easing=ease-out-cubic] [data-aos]{transition-timing-function:cubic-bezier(0.25, 0.46, 0.45, 0.94)}[data-aos][data-aos][data-aos-easing=ease-in-out-cubic],body[data-aos-easing=ease-in-out-cubic] [data-aos]{transition-timing-function:cubic-bezier(0.455, 0.03, 0.515, 0.955)}[data-aos][data-aos][data-aos-easing=ease-in-quart],body[data-aos-easing=ease-in-quart] [data-aos]{transition-timing-function:cubic-bezier(0.55, 0.085, 0.68, 0.53)}[data-aos][data-aos][data-aos-easing=ease-out-quart],body[data-aos-easing=ease-out-quart] [data-aos]{transition-timing-function:cubic-bezier(0.25, 0.46, 0.45, 0.94)}[data-aos][data-aos][data-aos-easing=ease-in-out-quart],body[data-aos-easing=ease-in-out-quart] [data-aos]{transition-timing-function:cubic-bezier(0.455, 0.03, 0.515, 0.955)}[data-aos^=fade][data-aos^=fade]{opacity:0;transition-property:opacity,transform}[data-aos^=fade][data-aos^=fade].aos-animate{opacity:1;transform:translate(0)}[data-aos=fade-up]{transform:translateY(100px)}[data-aos=fade-down]{transform:translateY(-100px)}[data-aos=fade-right]{transform:translate(-100px)}[data-aos=fade-left]{transform:translate(100px)}[data-aos=fade-up-right]{transform:translate(-100px, 100px)}[data-aos=fade-up-left]{transform:translate(100px, 100px)}[data-aos=fade-down-right]{transform:translate(-100px, -100px)}[data-aos=fade-down-left]{transform:translate(100px, -100px)}[data-aos^=zoom][data-aos^=zoom]{opacity:0;transition-property:opacity,transform}[data-aos^=zoom][data-aos^=zoom].aos-animate{opacity:1;transform:translate(0) scale(1)}[data-aos=zoom-in]{transform:scale(0.6)}[data-aos=zoom-in-up]{transform:translateY(100px) scale(0.6)}[data-aos=zoom-in-down]{transform:translateY(-100px) scale(0.6)}[data-aos=zoom-in-right]{transform:translate(-100px) scale(0.6)}[data-aos=zoom-in-left]{transform:translate(100px) scale(0.6)}[data-aos=zoom-out]{transform:scale(1.2)}[data-aos=zoom-out-up]{transform:translateY(100px) scale(1.2)}[data-aos=zoom-out-down]{transform:translateY(-100px) scale(1.2)}[data-aos=zoom-out-right]{transform:translate(-100px) scale(1.2)}[data-aos=zoom-out-left]{transform:translate(100px) scale(1.2)}[data-aos^=slide][data-aos^=slide]{transition-property:transform}[data-aos^=slide][data-aos^=slide].aos-animate{transform:translate(0)}[data-aos=slide-up]{transform:translateY(100%)}[data-aos=slide-down]{transform:translateY(-100%)}[data-aos=slide-right]{transform:translateX(-100%)}[data-aos=slide-left]{transform:translateX(100%)}[data-aos^=flip][data-aos^=flip]{backface-visibility:hidden;transition-property:transform}[data-aos=flip-left]{transform:perspective(2500px) rotateY(-100deg)}[data-aos=flip-left].aos-animate{transform:perspective(2500px) rotateY(0)}[data-aos=flip-right]{transform:perspective(2500px) rotateY(100deg)}[data-aos=flip-right].aos-animate{transform:perspective(2500px) rotateY(0)}[data-aos=flip-up]{transform:perspective(2500px) rotateX(-100deg)}[data-aos=flip-up].aos-animate{transform:perspective(2500px) rotateX(0)}[data-aos=flip-down]{transform:perspective(2500px) rotateX(100deg)}[data-aos=flip-down].aos-animate{transform:perspective(2500px) rotateX(0)}/*# sourceMappingURL=global.css.map */\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["icons/arrow.svg"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  width=\"1em\"\n  height=\"1em\"\n  viewBox=\"0 0 24 24\"\n  focusable=\"false\"\n  aria-hidden=\"true\"\n  fill=\"currentColor\"\n>\n  <path\n    d=\"M9.707 18.707l6-6a.999.999 0 0 0 0-1.414l-6-6a.999.999 0 1 0-1.414 1.414L13.586 12l-5.293 5.293a.999.999 0 1 0 1.414 1.414z\"\n  />\n</svg>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["layouts/404.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layouts/base.njk", true, "layouts/404.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
output += "\n";
var t_4;
t_4 = runtime.contextOrFrameLookup(context, frame, "title");
frame.set("introHeading", t_4, true);
if(frame.topLevel) {
context.setVariable("introHeading", t_4);
}
if(frame.topLevel) {
context.addExport("introHeading", t_4);
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
output += t_5;
output += "\n\n";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
output += "\n\n\n\n\n \n\n\n\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 5;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n\n  <main id=\"main-content\" tabindex=\"-1\">\n    \n    <section class=\"c-row c-row--alpha c-row-hero\">\n      <div class=\"f-grid\">\n        <div class=\"f-col-bp1-4 f-col-bp2-10 f-col-bp3-8 c-hero\" data-aos=\"fade-zoom-in\" data-aos-offset=\"200\" data-aos-easing=\"ease-in-sine\" data-aos-duration=\"600\" data-aos-anchor=\"hero\">\n          <h1>404 - Not found</h1>\n        </div>\n      </div>\n    </section>\n  </main>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_content: b_content,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["layouts/atlascopco.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layouts/base.njk", true, "layouts/atlascopco.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
output += "\n";
var t_4;
t_4 = runtime.contextOrFrameLookup(context, frame, "title");
frame.set("introHeading", t_4, true);
if(frame.topLevel) {
context.setVariable("introHeading", t_4);
}
if(frame.topLevel) {
context.addExport("introHeading", t_4);
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
output += t_5;
output += "\n\n";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
output += "\n\n    \n    ";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 5;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n\n  <main id=\"main-content\" tabindex=\"-1\">\n    \n    <section class=\"c-row c-row--alpha c-row-hero\">\n      <div class=\"f-grid\">\n        <div class=\"f-col-bp1-4 f-col-bp2-10 f-col-bp3-8 c-hero\" data-aos=\"fade-zoom-in\" data-aos-offset=\"200\" data-aos-easing=\"ease-in-sine\" data-aos-duration=\"600\" data-aos-anchor=\"hero\">\n          <h1>An extensive pattern library with styleguide and templates.</h1>\n          <h5>UX prototype, UI design</h5>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"c-row c-row-normal u-bgcolor-ac-base\">\n      <div class=\"f-grid\">\n        <div class=\"f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-8 f-col-bp3-shift-2\">\n          <div class=\"c-browser c-browser--white\" data-aos=\"fade-up\">\n            <div class=\"c-browser__content c-browser__content--scrollable\">\n              <div>\n                <img src=\"/assets/images/jpg/ac-patterns.jpg\" alt=\"AC style\" loading=\"lazy\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"c-row c-row--alpha\">\n      <div class=\"f-grid u-reverse\">\n      \t<div class=\"f-col-bp1-4 f-col-bp3-6 u-ver-center\">\n      \t  <div class=\"c-tile__content\">\n      \t    <h2>Digital brand guidelines</h2>\n            <p>The goal was to translate existing print-based brand guidelines into a digital styleguide which provided greater flexibility. The project contained a styleguide with guidelines, components and templates.</p>\n      \t  </div>\n      \t</div>\n      \t<div class=\"f-col-bp1-4 f-col-bp3-6\">\n        <div class=\"c-tile__content c-tile__content--img\">\n      \t    <figure>\n      \t     <img src=\"/assets/images/jpg/ac-screen-styleguide.jpg\" loading=\"lazy\">\n      \t    </figure>\n      \t  </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"c-row c-row--beta c-row-normal\">\n      <div class=\"f-grid\">\n        <div class=\"f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-6 f-col-bp3-shift-3\">\n          <div class=\"c-browser c-browser--white\" data-aos=\"fade-zoom-in\" data-aos-offset=\"200\" data-aos-easing=\"ease-in-sine\" data-aos-duration=\"600\">\n            <figure>\n              <img src=\"/assets/images/jpg/ac-template.jpg\" loading=\"lazy\">\n            </figure>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"c-row c-row--alpha\">\n      <div class=\"f-grid\">\n        <div class=\"f-col-bp1-4 f-col-bp2-8 f-col-bp3-6\">\n          <div class=\"c-tile__content c-tile__content--text\">\n            <h2>Components and template</h2>\n            <p>All components can be placed underneath each other without breaking the responsive layout. The entire pattern library is build in html/css and Jekyll.</p>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"c-row c-row--beta\">\n      <div class=\"f-grid u-reverse\">\n      \t<div class=\"f-col-bp1-4 f-col-bp3-6 u-ver-center\">\n      \t  <div class=\"c-tile__content\">\n      \t    <h2>Pattern library</h2>\n            <p>Our pattern library is a collection of user interface elements that can appear multiple times across the website. The purpose is to have consistency in user experience and enhance maintainability. </p>\n      \t  </div>\n      \t</div>\n      \t<div class=\"f-col-bp1-4 f-col-bp3-6\">\n        <div class=\"c-tile__content c-tile__content--img\">\n      \t    <figure>\n      \t     <img src=\"/assets/images/jpg/ac-screen-list.jpg\" loading=\"lazy\">\n      \t    </figure>\n      \t  </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"c-row u-nomargin u-bgcolor-neutral-x-light\">\n      <div class=\"f-grid u-no-max-width\">\n        <a href=\"/bene/\" class=\"f-col-bp3-6 f-col-bp3-shift-6 c-tile c-tile--link\">\n          <div class=\"c-tile__content c-tile__content--link\">\n            <p class=\"c-tile__link-text c-tile__link-text--next\"><span>Benevolent.ai</span></p>\n          </div>\n        </a>\n      </div>\n    </section>\n\n    \n\n  </main>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_content: b_content,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["layouts/base.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<!DOCTYPE html>\n<html lang=\"en\" class=\"no-js\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/global/meta-info.njk", false, "layouts/base.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
callback(null,t_1);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n  <script>document.documentElement.classList.remove('no-js');</script>\n   <!-- stylesheets -->\n  ";
output += "\n  <link rel=\"stylesheet\" href=\"/assets/css/global.min.css?ver=1469292859\" type=\"text/css\" media=\"all\">\n\n  ";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("head"))(env, context, frame, runtime, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
output += t_5;
output += "\n</head>\n";
if(runtime.contextOrFrameLookup(context, frame, "type") != "home") {
output += "\n  <body class=\"c-body c-body-detail\">\n";
;
}
else {
output += "\n  <body class=\"c-body\">\n";
;
}
output += "\n  ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/global/site-head.njk", false, "layouts/base.njk", false, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
callback(null,t_7);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
callback(null,t_9);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n  ";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_12,t_11) {
if(t_12) { cb(t_12); return; }
output += t_11;
output += "\n  ";
if(runtime.contextOrFrameLookup(context, frame, "type") != "home") {
output += "\n  ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/global/site-foot.njk", false, "layouts/base.njk", false, function(t_14,t_13) {
if(t_14) { cb(t_14); return; }
callback(null,t_13);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_16,t_15) {
if(t_16) { cb(t_16); return; }
callback(null,t_15);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n  ";
});
}
output += "\n  ";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("foot"))(env, context, frame, runtime, function(t_18,t_17) {
if(t_18) { cb(t_18); return; }
output += t_17;
output += "\n  ";
output += "\n  <script src=\"/vendor/aos/aos.js\"></script>\n  <script src=\"/vendor/nanobar/nanobar.min.js\"></script>\n  <script src=\"/vendor/vanilla-tilt/vanilla-tilt.min.js\"></script>\n  <script type=\"module\" src=\"/assets/js/scripts.js?ver=1469292859\" async defer></script>\n  <script>\n    if ('serviceWorker' in navigator) {\n      window.addEventListener('load', () => {\n        navigator.serviceWorker.register('/service-worker.js');\n      });\n    }\n  </script>\n  <script src=\"https://identity.netlify.com/v1/netlify-identity-widget.js\" defer></script>\n  \n  <script>\n    \n  </script>\n</body>\n</html>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_head(env, context, frame, runtime, cb) {
var lineno = 12;
var colno = 5;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 21;
var colno = 5;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_foot(env, context, frame, runtime, cb) {
var lineno = 26;
var colno = 5;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_head: b_head,
b_content: b_content,
b_foot: b_foot,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["layouts/bene.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layouts/base.njk", true, "layouts/bene.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
output += "\n";
var t_4;
t_4 = runtime.contextOrFrameLookup(context, frame, "title");
frame.set("introHeading", t_4, true);
if(frame.topLevel) {
context.setVariable("introHeading", t_4);
}
if(frame.topLevel) {
context.addExport("introHeading", t_4);
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
output += t_5;
output += "\n\n";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
output += "\n\n\n\n\n \n\n\n\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 5;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n\n  <main id=\"main-content\" tabindex=\"-1\">\n    \n    <section class=\"c-row c-row--alpha c-row-hero\">\n      <div class=\"f-grid\">\n        <div class=\"f-col-bp1-4 f-col-bp2-10 f-col-bp3-8 c-hero\" data-aos=\"fade-zoom-in\" data-aos-offset=\"200\" data-aos-easing=\"ease-in-sine\" data-aos-duration=\"600\" data-aos-anchor=\"hero\">\n          <h1>Artificial intelligence and deep learning software for scientific purposes.</h1>\n          <h5>Identity design</h5>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"c-row c-row--beta c-row-normal\">\n      <div class=\"f-grid\">\n        <div class=\"f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-8 f-col-bp3-shift-2\">\n          <div>\n            <img src=\"/assets/images/jpg/bene-logo.jpg\" alt=\"Bene logo\" loading=\"lazy\">\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"c-row c-row--alpha\">\n      <div class=\"f-grid\">\n        <div class=\"f-col-bp1-4 f-col-bp2-8 f-col-bp3-6\">\n          <div class=\"c-tile__content c-tile__content--text\">\n            <h2>A new identity with meaning</h2>\n            <p>Everything is data. We created a digital identity that is unique, personal and most of all different each time somebody encounters it. Based on current parameters the shape and colour changes, which creates a unique and meaningful experience.</p>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"c-row c-row--beta\">\n      <div class=\"f-grid\">\n      \t<div class=\"f-col-bp1-4 f-col-bp3-6 c-tile\" style=\"background-image:url('/assets/images/jpg/bene-brainstorm-2.jpg')\">\n      \t  <div class=\"c-tile__content c-tile__content--img\">\n            <figure class=\"u-ratio u-ratio-1x1\">\n                <img src=\"/assets/images/svg/bene-line2.svg\" loading=\"lazy\" alt=\"Bene reshape\">\n            </figure>\n          </div>\n      \t</div>\n      \t<div class=\"f-col-bp1-4 f-col-bp3-6 c-tile\" style=\"background-image:url('/assets/images/jpg/bene-brainstorm-1.jpg')\">\n          <div class=\"c-tile__content c-tile__content--img\">\n            <figure class=\"u-ratio u-ratio-1x1\">\n                <img src=\"/assets/images/svg/bene-line.svg\" loading=\"lazy\" alt=\"Bene reshape\">\n            </figure>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"c-row c-row--alpha\">\n      <div class=\"f-grid\">\n        <div class=\"f-col-bp1-4 f-col-bp2-8 f-col-bp3-6\">\n          <div class=\"c-tile__content c-tile__content--text\">\n            <h2>Brainstorm</h2>\n            <p>Workshops gave us insight into what the company did, what it stands for and how it wanted to be perceived. Through brainstorm sessions and associative thinking we came up with a range of potential ideas.</p>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"c-row c-row--beta c-row-normal\">\n      <div class=\"f-grid\">\n        <div class=\"f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-6 f-col-bp3-shift-3\">\n          <div>\n            <figure class=\"u-ratio u-ratio-1x2\">\n              <img src=\"/assets/images/jpg/bene-explore.jpg\" loading=\"lazy\">\n            </figure>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"c-row c-row--alpha\">\n      <div class=\"f-grid\">\n        <div class=\"f-col-bp1-4 f-col-bp2-8 f-col-bp3-6\">\n          <div class=\"c-tile__content c-tile__content--text\">\n            <h2>Exploration</h2>\n            <p>Through sketching and illustrating, our ideas came alive and showed their dynamic potential. Eventually a selection of our proposals were presented to the client.</p>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"c-row c-row-normal c-row--beta\" style=\"background-image:linear-gradient(\n      rgba(244, 214, 0, 1),rgba(172, 0, 108, 1))\">\n      <div class=\"f-grid\">\n        <div class=\"f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-6 f-col-bp3-shift-3\">\n          <div>\n            <figure class=\"u-ratio u-ratio-4x3\">\n              <img src=\"/assets/images/jpg/bene-guidelines.jpg\" loading=\"lazy\">\n            </figure>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"c-row u-nomargin u-bgcolor-neutral-x-light\">\n      <div class=\"f-grid u-no-max-width\">\n        <a href=\"/werchter/\" class=\"f-col-bp3-6 f-col-bp3-shift-6 c-tile c-tile--link\">\n          <div class=\"c-tile__content c-tile__content--link\">\n            <p class=\"c-tile__link-text c-tile__link-text--next\"><span>Rock Werchter</span></p>\n          </div>\n        </a>\n      </div>\n    </section>\n\n  </main>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_content: b_content,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["layouts/contact.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layouts/base.njk", true, "layouts/contact.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
output += "\n";
var t_4;
t_4 = runtime.contextOrFrameLookup(context, frame, "title");
frame.set("introHeading", t_4, true);
if(frame.topLevel) {
context.setVariable("introHeading", t_4);
}
if(frame.topLevel) {
context.addExport("introHeading", t_4);
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
output += t_5;
output += "\n\n";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 5;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <main id=\"main-content\" tabindex=\"-1\">\n    <article class=\"[ post ] [ h-entry ]\">\n      ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/intro.njk", false, "layouts/contact.njk", false, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
callback(null,t_7);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
callback(null,t_9);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n      <div class=\"[ post__body ] [ inner-wrapper ] [ leading-loose pad-top-900 pad-bottom-900 text-500 ] [ sf-flow ] [ e-content ]\">\n        ";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
output += "\n        ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/contact-form.njk", false, "layouts/contact.njk", false, function(t_12,t_11) {
if(t_12) { cb(t_12); return; }
callback(null,t_11);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_14,t_13) {
if(t_14) { cb(t_14); return; }
callback(null,t_13);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n      </div>\n    </article>\n  </main>\n";
cb(null, output);
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_content: b_content,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["layouts/ferret.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layouts/base.njk", true, "layouts/ferret.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
output += "\n";
var t_4;
t_4 = runtime.contextOrFrameLookup(context, frame, "title");
frame.set("introHeading", t_4, true);
if(frame.topLevel) {
context.setVariable("introHeading", t_4);
}
if(frame.topLevel) {
context.addExport("introHeading", t_4);
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
output += t_5;
output += "\n\n";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 5;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n\n  <main id=\"main-content\" tabindex=\"-1\">\n    \n    <section class=\"c-row c-row--alpha c-row-hero\">\n      <div class=\"f-grid\">\n        <div class=\"f-col-bp1-4 f-col-bp2-10 f-col-bp3-8 c-hero\" data-aos=\"fade-zoom-in\" data-aos-offset=\"200\" data-aos-easing=\"ease-in-sine\" data-aos-duration=\"600\" data-aos-anchor=\"hero\">\n          <h1>Ferret.ai is a Chrome extension that summarizes/enriches articles and provides full-text search on your reading history.</h1>\n          <h5>Identity design, illustration, UI design</h5>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"c-row c-row--beta c-row-normal u-bgcolor-ferret-x-light\">\n      <div class=\"f-grid\">\n        <div class=\"f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-8 f-col-bp3-shift-2\">\n          <div class=\"c-tile__content\">\n            <div class=\"c-scatter__animation\">\n                <div class=\"c-papersheet-wrapper\">\n                    <a href=\"#story\" class=\"c-papersheet bounce\"></a>\n                    <a href=\"#story\" class=\"c-papersheet c-papersheet2 bounce2\"></a>\n                    <a href=\"#story\" class=\"c-papersheet bounce3\"></a>\n                </div>\n                <div class=\"c-paperstack js-paperstack\"></div>\n                <img src=\"/assets/images/svg/dave-01-scientist-scatter-nopaper.svg\" alt=\"Ferret logo\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"c-row c-row--alpha\">\n      <div class=\"f-grid\">\n        <div class=\"f-col-bp1-4 f-col-bp2-8 f-col-bp3-6\">\n          <div class=\"c-tile__content c-tile__content--text\">\n            <h2>A digital identity that differs from the competition</h2>\n            <p>In order to stand out amongst other scientific tools we came up with a superhero storyline. The goal was to create an engaging identity to attract and delight new users.</p>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"c-row c-row--beta c-row-normal\">\n      <div class=\"f-grid\">\n        <div class=\"f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-6 f-col-bp3-shift-3\">\n          <div>\n            <figure class=\"u-ratio u-ratio-4x3\">\n              <img src=\"/assets/images/jpg/ferret-logo.jpg\" loading=\"lazy\">\n            </figure>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"c-row c-row--alpha\">\n      <div class=\"f-grid\">\n        <div class=\"f-col-bp1-4 f-col-bp2-8 f-col-bp3-6\">\n          <div class=\"c-tile__content c-tile__content--text\">\n              <h2>Fresh & iconic style</h2>\n              <p>Based on our storyline I designed a scalable and stand-alone logo resembling a superhero shield. To enhance the storyline I created multiple characters that are used in different media, including the website, an instruction video and successful marketing campaigns.</p>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"c-row c-row-normal u-bgcolor-ferret-x-light\">\n      <div class=\"f-grid\">\n        <div class=\"f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-6 f-col-bp3-shift-3\">\n          <div>\n            <figure class=\"u-ratio u-ratio-4x3\">\n              <img src=\"/assets/images/gif/ferret-animation.gif\" loading=\"lazy\">\n            </figure>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"c-row c-row--alpha\">\n      <div class=\"f-grid\">\n        <div class=\"f-col-bp1-4 f-col-bp2-8 f-col-bp3-6\">\n          <div class=\"c-tile__content c-tile__content--text\">\n            <h2>Micro-interactions</h2>\n            <p>All assets are easy to animate to enhance the user experience and surprise and delight new customers.</p>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"c-row c-row-normal c-row--beta\">\n      <div class=\"f-grid\">\n        <div class=\"f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-8 f-col-bp3-shift-2\">\n          <div class=\"c-browser c-browser--white\">\n            <div class=\"c-browser__content\">\n              <div>\n                <video autoplay loop width=\"100%\" height=\"100%\">\n                  <source src=\"/assets/images/video/flow-ferret.webm\" type=\"video/webm\">\n                  <source src=\"/assets/images/video/flow-ferret.mp4\" type=\"video/mp4\">\n                  Sorry, your browser doesn't support embedded videos.\n                </video>\n              </div>\n            </div>\n          </div> \n        </div>\n        <div class=\"f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-6 f-col-bp3-shift-3 u-pt-zeta\">\n          <figure class=\"u-ratio u-ratio-1x1 c-browser c-browser--white\">\n            <img src=\"/assets/images/jpg/ferret-screen-team.jpg\" loading=\"lazy\">\n          </figure>\n        </div>\n      </div>   \n    </section>\n\n    <section class=\"c-row u-nomargin u-bgcolor-neutral-x-light\">\n      <div class=\"f-grid u-no-max-width\">\n        <a href=\"/matexi/\" class=\"f-col-bp3-6 f-col-bp3-shift-6 c-tile c-tile--link\">\n          <div class=\"c-tile__content c-tile__content--link\">\n            <p class=\"c-tile__link-text c-tile__link-text--next\"><span>Matexi</span></p>\n          </div>\n        </a>\n      </div>\n    </section>\n\n  </main>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_content: b_content,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["layouts/home-old.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layouts/base.njk", true, "layouts/home-old.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
output += "\n";
var t_4;
t_4 = runtime.contextOrFrameLookup(context, frame, "title");
frame.set("introHeading", t_4, true);
if(frame.topLevel) {
context.setVariable("introHeading", t_4);
}
if(frame.topLevel) {
context.addExport("introHeading", t_4);
}
output += "\n";
var t_5;
t_5 = (function() {
var output = "";
output += "\n  ";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
output += "\n";
;
return output;
})()
;
frame.set("introSummary", t_5, true);
if(frame.topLevel) {
context.setVariable("introSummary", t_5);
}
if(frame.topLevel) {
context.addExport("introSummary", t_5);
}
output += "\n\n";
output += "\n";
var t_6;
t_6 = runtime.contextOrFrameLookup(context, frame, "postsHeading");
frame.set("postListHeading", t_6, true);
if(frame.topLevel) {
context.setVariable("postListHeading", t_6);
}
if(frame.topLevel) {
context.addExport("postListHeading", t_6);
}
output += "\n";
var t_7;
t_7 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "collections")),"postFeed");
frame.set("postListItems", t_7, true);
if(frame.topLevel) {
context.setVariable("postListItems", t_7);
}
if(frame.topLevel) {
context.addExport("postListItems", t_7);
}
output += "\n\n";
output += "\n";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "postListItems")),"length") < runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "collections")),"posts")),"length")) {
output += " \n  ";
var t_8;
t_8 = runtime.contextOrFrameLookup(context, frame, "archiveButtonText");
frame.set("paginationNextText", t_8, true);
if(frame.topLevel) {
context.setVariable("paginationNextText", t_8);
}
if(frame.topLevel) {
context.addExport("paginationNextText", t_8);
}
output += "\n  ";
var t_9;
t_9 = "/archive";
frame.set("paginationNextUrl", t_9, true);
if(frame.topLevel) {
context.setVariable("paginationNextUrl", t_9);
}
if(frame.topLevel) {
context.addExport("paginationNextUrl", t_9);
}
output += "\n";
;
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_11,t_10) {
if(t_11) { cb(t_11); return; }
output += t_10;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 18;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <main id=\"main-content\" tabindex=\"-1\">\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/intro.njk", false, "layouts/home-old.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
callback(null,t_12);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_15,t_14) {
if(t_15) { cb(t_15); return; }
callback(null,t_14);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/post-list.njk", false, "layouts/home-old.njk", false, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
callback(null,t_16);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_19,t_18) {
if(t_19) { cb(t_19); return; }
callback(null,t_18);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/pagination.njk", false, "layouts/home-old.njk", false, function(t_21,t_20) {
if(t_21) { cb(t_21); return; }
callback(null,t_20);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_23,t_22) {
if(t_23) { cb(t_23); return; }
callback(null,t_22);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n  </main>\n";
cb(null, output);
})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_content: b_content,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["layouts/home.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layouts/base.njk", true, "layouts/home.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
output += "\n";
var t_4;
t_4 = runtime.contextOrFrameLookup(context, frame, "title");
frame.set("introHeading", t_4, true);
if(frame.topLevel) {
context.setVariable("introHeading", t_4);
}
if(frame.topLevel) {
context.addExport("introHeading", t_4);
}
output += "\n";
var t_5;
t_5 = (function() {
var output = "";
output += "\n  ";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
output += "\n";
;
return output;
})()
;
frame.set("introSummary", t_5, true);
if(frame.topLevel) {
context.setVariable("introSummary", t_5);
}
if(frame.topLevel) {
context.addExport("introSummary", t_5);
}
output += "\n\n";
output += "\n";
var t_6;
t_6 = runtime.contextOrFrameLookup(context, frame, "postsHeading");
frame.set("postListHeading", t_6, true);
if(frame.topLevel) {
context.setVariable("postListHeading", t_6);
}
if(frame.topLevel) {
context.addExport("postListHeading", t_6);
}
output += "\n";
var t_7;
t_7 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "collections")),"postFeed");
frame.set("postListItems", t_7, true);
if(frame.topLevel) {
context.setVariable("postListItems", t_7);
}
if(frame.topLevel) {
context.addExport("postListItems", t_7);
}
output += "\n\n";
output += "\n";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "postListItems")),"length") < runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "collections")),"posts")),"length")) {
output += " \n  ";
var t_8;
t_8 = runtime.contextOrFrameLookup(context, frame, "archiveButtonText");
frame.set("paginationNextText", t_8, true);
if(frame.topLevel) {
context.setVariable("paginationNextText", t_8);
}
if(frame.topLevel) {
context.addExport("paginationNextText", t_8);
}
output += "\n  ";
var t_9;
t_9 = "/archive";
frame.set("paginationNextUrl", t_9, true);
if(frame.topLevel) {
context.setVariable("paginationNextUrl", t_9);
}
if(frame.topLevel) {
context.addExport("paginationNextUrl", t_9);
}
output += "\n";
;
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_11,t_10) {
if(t_11) { cb(t_11); return; }
output += t_10;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 18;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <main id=\"main-content\" tabindex=\"-1\">\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/intro-home.njk", false, "layouts/home.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
callback(null,t_12);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_15,t_14) {
if(t_15) { cb(t_15); return; }
callback(null,t_14);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n    ";
output += "\n    ";
output += "\n  </main>\n";
cb(null, output);
});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_content: b_content,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["layouts/matexi.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layouts/base.njk", true, "layouts/matexi.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
output += "\n";
var t_4;
t_4 = runtime.contextOrFrameLookup(context, frame, "title");
frame.set("introHeading", t_4, true);
if(frame.topLevel) {
context.setVariable("introHeading", t_4);
}
if(frame.topLevel) {
context.addExport("introHeading", t_4);
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
output += t_5;
output += "\n\n";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
output += "\n\n \n\n\n\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 5;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n\n  <main id=\"main-content\" tabindex=\"-1\">\n    \n    <section class=\"c-row c-row--alpha c-row-hero\">\n      <div class=\"f-grid\">\n        <div class=\"f-col-bp1-4 f-col-bp2-10 f-col-bp3-8 c-hero\" data-aos=\"fade-zoom-in\" data-aos-offset=\"200\" data-aos-easing=\"ease-in-sine\" data-aos-duration=\"600\" data-aos-anchor=\"hero\">\n          <h1>Matexi is a property developer that creates sustainable and ecological neighbourhoods.</h1>\n          <h5>UX prototype, UI design</h5>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"c-row c-row-video c-row--beta\" data-aos=\"fade-up\">\n      <div class=\"f-grid\">\n        <div class=\"f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-8 f-col-bp3-shift-2\">\n          <div class=\"c-browser c-browser--white\" data-aos=\"fade-zoom-in\" data-aos-offset=\"200\" data-aos-easing=\"ease-in-sine\" data-aos-duration=\"600\" data-aos-delay=\"600\">\n            <div class=\"c-browser__content\">\n              <div>\n                <video autoplay loop width=\"100%\" height=\"100%\">\n                  <source src=\"/assets/images/video/flow-matexi.webm\" type=\"video/webm\">\n                  <source src=\"/assets/images/video/flow-matexi.mp4\" type=\"video/mp4\">\n                  Sorry, your browser doesn't support embedded videos.\n                </video>\n              </div>\n            </div>\n          </div> \n        </div> \n      </div>   \n    </section>\n   \n    <section class=\"c-row c-row--alpha c-row-normal\">\n      <div class=\"f-grid\">\n        <div class=\"f-col-bp1-4 f-col-bp2-10 f-col-bp3-6\" data-aos=\"fade-zoom-in\" data-aos-offset=\"200\" data-aos-easing=\"ease-in-sine\" data-aos-duration=\"600\" data-aos-anchor=\"hero\">\n          <div class=\"c-tile__content c-tile__content--text\">\n            <h2 class=\"u-mb-gamma\">A user-centric and mobile-friendly platform</h2>\n            <p>The online platform provides a tailored catalogue that shows projects in multiple locations using one search. Through in-depth interviews, workshops and a close collaboration with the client we created user experience maps. Whilst being involved in all these steps, my main focus was to agree on a digital design language and also design Low-fi and High-fi prototypes.</p>\n            <p>Visit <a href=\"http://www.matexi.be\" target=\"_blank\" class=\"c-link\">matexi.be</a></p>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"c-row c-row--beta c-row-normal\">\n      <div class=\"f-grid\">\n        <div class=\"f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-8 f-col-bp3-shift-2\" data-aos=\"fade-zoom-in\" data-aos-offset=\"200\" data-aos-easing=\"ease-in-sine\" data-aos-duration=\"600\" data-aos-anchor=\"hero\">\n          <div>\n            <figure class=\"u-ratio u-ratio-4x3\">\n              <img src=\"/assets/images/jpg/matexi-styletile.jpg\" alt=\"Matexi style\" loading=\"lazy\">\n            </figure>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"c-row c-row--alpha c-row-normal\">\n      <div class=\"f-grid\">\n        <div class=\"f-col-bp1-4 f-col-bp2-10 f-col-bp3-6\">\n          <div class=\"c-tile__content c-tile__content--text\">\n            <h2 class=\"u-mb-gamma\">Style tile</h2>\n            <p>Matexi had an existing identity that merely focussed on print and advertising. In order to avoid design and branding discussions later on in the process we created a digital style tile to agree on colour, font, icons, etc. </p>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"c-row u-bgcolor-matexi-base\">\n      <div class=\"f-grid\">\n        <div class=\"f-col-bp1-4 f-col-bp2-10 f-col-bp3-6 u-ver-center\">\n          <div class=\"c-tile__content c-tile__content--text\">\n            <h2 class=\"u-mb-gamma u-color-neutral-x-light\">Low-fi to High-fi prototyping</h2>\n            <p class=\"u-color-neutral-x-light\">We worked in 2 week design sprints, each sprint focussing on specific features instead of templates. This way we were able to create those features from sketching over low-fi prototyping into a high-Fi design in html/css.</p>\n          </div>\n        </div>\n        <div class=\"f-col-bp1-4 f-col-bp2-10 f-col-bp3-6\">\n          <div class=\"c-tile__content c-tile__content--full\">\n            <figure class=\"c-browser c-browser--white u-break-right\">\n              <img src=\"/assets/images/jpg/matexi-screen-results-map.jpg\" alt=\"Matexi screen results\" loading=\"lazy\">\n            </figure>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"c-row c-row--alpha\">\n      <div class=\"f-grid u-reverse\">\n      \t<div class=\"f-col-bp1-4 f-col-bp2-10 f-col-bp3-6 u-ver-center\">\n      \t  <div class=\"c-tile__content\">\n      \t    <h2 class=\"u-mb-gamma\">A flexible component library</h2>\n      \t    <p>From start to finish we reduced the amount of components as much as possible, whilst ensuring they could be used for different content. It kept the codebase easy to maintain and made it more flexible for content managers to build templates.</p>\n      \t  </div>\n      \t</div>\n      \t<div class=\"f-col-bp1-4 f-col-bp2-12 f-col-bp3-6\">\n        <div class=\"c-tile__content c-tile__content--img\">\n      \t    <figure>\n      \t     <img src=\"/assets/images/jpg/matexi-components.jpg\" alt=\"Matexi components\" loading=\"lazy\">\n      \t    </figure>\n      \t  </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"c-row u-nomargin u-bgcolor-neutral-x-light\">\n      <div class=\"f-grid u-no-max-width\">\n        <a href=\"/sp/\" class=\"f-col-bp3-6 f-col-bp3-shift-6 c-tile c-tile--link\">\n          <div class=\"c-tile__content c-tile__content--link\">\n            <p class=\"c-tile__link-text c-tile__link-text--next\"><span>S&P Global</span></p>\n          </div>\n        </a>\n      </div>\n    </section>\n\n  </main>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_content: b_content,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["layouts/maunga.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layouts/base.njk", true, "layouts/maunga.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
output += "\n";
var t_4;
t_4 = runtime.contextOrFrameLookup(context, frame, "title");
frame.set("introHeading", t_4, true);
if(frame.topLevel) {
context.setVariable("introHeading", t_4);
}
if(frame.topLevel) {
context.addExport("introHeading", t_4);
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
output += t_5;
output += "\n\n";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
output += "\n\n \n\n\n\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 5;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n\n  <main id=\"main-content\" tabindex=\"-1\">\n    \n    <section class=\"c-row c-row--alpha c-row-hero\">\n      <div class=\"f-grid\">\n        <div class=\"f-col-bp1-4 f-col-bp2-10 f-col-bp3-8 c-hero\" data-aos=\"fade-zoom-in\" data-aos-offset=\"200\" data-aos-easing=\"ease-in-sine\" data-aos-duration=\"600\" data-aos-anchor=\"hero\">\n          <h1>Maunga will enable you to plan a hike beforehand, track it during and share it afterwards.</h1>\n          <h5>Identity design, UI design</h5>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"c-row c-row--beta c-row-normal\">\n      <div class=\"f-grid\">\n        <div class=\"f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-6 f-col-bp3-shift-3 u-mb-zeta\">\n          <div>\n            <figure class=\"u-ratio u-ratio-4x3\">\n              <img src=\"/assets/images/jpg/maunga-logo.jpg\" loading=\"lazy\">\n            </figure>\n          </div>\n        </div>\n        <div class=\"f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-6 f-col-bp3-shift-3\">\n          <div>\n            <figure class=\"u-ratio u-ratio-4x3\">\n              <img src=\"/assets/images/jpg/maunga-app.jpg\" loading=\"lazy\">\n            </figure>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"c-row c-row--alpha c-row-normal\">\n      <div class=\"f-grid\">\n        <div class=\"f-col-bp1-4 f-col-bp2-10 f-col-bp3-6\" data-aos=\"fade-zoom-in\" data-aos-offset=\"200\" data-aos-easing=\"ease-in-sine\" data-aos-duration=\"600\" data-aos-anchor=\"hero\">\n          <div class=\"c-tile__content\">\n            <h2>Personal project</h2>\n            <p>I <span class=\"u-heart\">&#9829;</span> the outdoors and I feel there is a need for a hiking application that focuses more on altitude and distance than your location on a map.</p>\n            <p>If you have any feedback or ideas, <a href=\"#contact\">drop me a line</a>.</p>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"c-row u-nomargin u-bgcolor-neutral-x-light\">\n      <div class=\"f-grid u-no-max-width\">\n        <a href=\"/#work\" class=\"f-col-bp3-6 f-col-bp3-shift-6 c-tile c-tile--link\">\n          <div class=\"c-tile__content c-tile__content--link\">\n            <p class=\"c-tile__link-text c-tile__link-text--work\"><span>All work</span></p>\n          </div>\n        </a>\n      </div>\n    </section>\n\n  </main>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_content: b_content,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["layouts/page.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layouts/base.njk", true, "layouts/page.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
output += "\n";
var t_4;
t_4 = runtime.contextOrFrameLookup(context, frame, "title");
frame.set("introHeading", t_4, true);
if(frame.topLevel) {
context.setVariable("introHeading", t_4);
}
if(frame.topLevel) {
context.addExport("introHeading", t_4);
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
output += t_5;
output += "\n\n";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 5;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <main id=\"main-content\" tabindex=\"-1\">\n    <article class=\"[ post ] [ h-entry ]\">\n      ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/intro.njk", false, "layouts/page.njk", false, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
callback(null,t_7);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
callback(null,t_9);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n      <div class=\"[ post__body ] [ inner-wrapper ] [ leading-loose pad-top-900 pad-bottom-900 text-500 ] [ sf-flow ] [ e-content ]\">\n        ";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
output += "\n      </div>\n    </article>\n  </main>\n";
cb(null, output);
});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_content: b_content,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["layouts/post.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layouts/base.njk", true, "layouts/post.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
output += "\n";
var t_4;
t_4 = runtime.contextOrFrameLookup(context, frame, "title");
frame.set("introHeading", t_4, true);
if(frame.topLevel) {
context.setVariable("introHeading", t_4);
}
if(frame.topLevel) {
context.addExport("introHeading", t_4);
}
output += "\n";
var t_5;
t_5 = (function() {
var output = "";
output += "\n<p class=\"[ intro__meta ] [ text-500 leading-tight ]\">\n  ";
if(runtime.contextOrFrameLookup(context, frame, "date")) {
output += "\n    <time datetime=\"";
output += runtime.suppressValue(env.getFilter("w3DateFilter").call(context, runtime.contextOrFrameLookup(context, frame, "date")), env.opts.autoescape);
output += "\" class=\"dt-published\">";
output += runtime.suppressValue(env.getFilter("dateFilter").call(context, runtime.contextOrFrameLookup(context, frame, "date")), env.opts.autoescape);
output += "</time>\n  ";
;
}
output += "\n  <span>— ";
output += runtime.suppressValue((lineno = 9, colno = 35, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "helpers")),"getReadingTime"), "helpers[\"getReadingTime\"]", context, [runtime.contextOrFrameLookup(context, frame, "content")])), env.opts.autoescape);
output += " minute read</span>\n</p>\n";
;
return output;
})()
;
frame.set("introSummary", t_5, true);
if(frame.topLevel) {
context.setVariable("introSummary", t_5);
}
if(frame.topLevel) {
context.addExport("introSummary", t_5);
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_7,t_6) {
if(t_7) { cb(t_7); return; }
output += t_6;
output += "\n\n";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 13;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <main id=\"main-content\" tabindex=\"-1\">\n    <article class=\"[ post ] [ h-entry ]\">\n      ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/intro.njk", false, "layouts/post.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
callback(null,t_8);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_11,t_10) {
if(t_11) { cb(t_11); return; }
callback(null,t_10);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n      <div class=\"[ post__body ] [ inner-wrapper ] [ leading-loose pad-top-900 ";
output += runtime.suppressValue((!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"enableThirdPartyComments")?"pad-bottom-900":""), env.opts.autoescape);
output += " text-500 ] [ sf-flow ] [ e-content ]\">\n        ";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
output += "\n      </div>\n      ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"enableThirdPartyComments")) {
output += "\n        <hr />\n        <aside class=\"[ post__body ] [ inner-wrapper ] [ pad-bottom-900 text-500 ]\">\n          ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/global/third-party-comments.njk", false, "layouts/post.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
callback(null,t_12);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_15,t_14) {
if(t_15) { cb(t_15); return; }
callback(null,t_14);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n        </aside>\n      ";
});
}
output += "\n      ";
if(runtime.contextOrFrameLookup(context, frame, "tags")) {
output += "\n        <footer class=\"[ post__footer ] [ pad-top-500 pad-bottom-500 ]\">\n          <div class=\"inner-wrapper\">\n            <div class=\"[ nav ] [ box-flex align-center ]\">\n              <h2 class=\"font-base text-600 weight-mid\">Filed under</h2>\n              <ul class=\"[ nav__list ] [ box-flex align-center pad-left-400 ] [ p-category ]\">\n                ";
frame = frame.push();
var t_18 = runtime.contextOrFrameLookup(context, frame, "tags");
if(t_18) {t_18 = runtime.fromIterator(t_18);
var t_17 = t_18.length;
for(var t_16=0; t_16 < t_18.length; t_16++) {
var t_19 = t_18[t_16];
frame.set("item", t_19);
frame.set("loop.index", t_16 + 1);
frame.set("loop.index0", t_16);
frame.set("loop.revindex", t_17 - t_16);
frame.set("loop.revindex0", t_17 - t_16 - 1);
frame.set("loop.first", t_16 === 0);
frame.set("loop.last", t_16 === t_17 - 1);
frame.set("loop.length", t_17);
output += "\n                  <li class=\"nav__item\">\n                    <a href=\"/tags/";
output += runtime.suppressValue(t_19, env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(t_19, env.opts.autoescape);
output += "</a>\n                  </li>\n                ";
;
}
}
frame = frame.pop();
output += "\n              </ul>\n            </div>\n          </div>\n        </footer>\n      ";
;
}
output += "\n    </article>\n  </main>\n";
cb(null, output);
});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_content: b_content,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["layouts/sp.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layouts/base.njk", true, "layouts/sp.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
output += "\n";
var t_4;
t_4 = runtime.contextOrFrameLookup(context, frame, "title");
frame.set("introHeading", t_4, true);
if(frame.topLevel) {
context.setVariable("introHeading", t_4);
}
if(frame.topLevel) {
context.addExport("introHeading", t_4);
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
output += t_5;
output += "\n\n";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
output += "\n\n \n\n\n\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 5;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n\n  <main id=\"main-content\" tabindex=\"-1\">\n    \n    <section class=\"c-row c-row--alpha c-row-hero\">\n      <div class=\"f-grid\">\n        <div class=\"f-col-bp1-4 f-col-bp2-10 f-col-bp3-8 c-hero\" data-aos=\"fade-zoom-in\" data-aos-offset=\"200\" data-aos-easing=\"ease-in-sine\" data-aos-duration=\"600\" data-aos-anchor=\"hero\">\n          <h1>S&P Global Marketplace provides real-time datasets and solutions to investors.</h1>\n          <h5>UX/UI design - Figma</h5>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"c-row c-row-normal u-bgcolor-sp-dark\">\n      <div class=\"f-grid\">\n        <div class=\"f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-8 f-col-bp3-shift-2\">\n          <div class=\"c-browser c-browser--white\" data-aos=\"fade-up\">\n            <div class=\"c-browser__content c-browser__content--scrollable\">\n              <div>\n                <img src=\"/assets/images/jpg/sp-template.jpg\" alt=\"sp template\" loading=\"lazy\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n   \n    <section class=\"c-row c-row--alpha c-row-normal\">\n      <div class=\"f-grid\">\n        <div class=\"f-col-bp1-4 f-col-bp2-10 f-col-bp3-6\" data-aos=\"fade-zoom-in\" data-aos-offset=\"200\" data-aos-easing=\"ease-in-sine\" data-aos-duration=\"600\" data-aos-anchor=\"hero\">\n          <div class=\"c-tile__content c-tile__content--text\">\n            <h2>Remote teamwork</h2>\n            <p>A close, yet remote relationship with our client was vital to understand, design and develop a functional marketplace where investors, advisors, and wealth managers can explore a wide variety of datasets and applications.</p>\n            <p>Visit <a href=\"https://www.marketplace.spglobal.com/\" target=\"_blank\" class=\"c-link\">marketplace.spglobal.com</a></p>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"c-row c-row--beta\">\n      <div class=\"f-grid u-reverse\">\n      \t<div class=\"f-col-bp1-4 f-col-bp3-6 u-ver-center\">\n      \t  <div class=\"c-tile__content\">\n      \t    <h2>UI kit</h2>\n            <p>We used Figma to explore, design and to communicate with the client remotely. The ultimate result was a webplatform built with React and a UI kit to be used by an inhouse design team to build on.</p>\n      \t  </div>\n      \t</div>\n      \t<div class=\"f-col-bp1-4 f-col-bp3-6\">\n        <div class=\"c-tile__content c-tile__content--img\">\n      \t    <figure>\n      \t      <img src=\"/assets/images/jpg/sp-uikit.jpg\" alt=\"SP figma\" loading=\"lazy\">\n      \t    </figure>\n      \t  </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"c-row c-row--beta\">\n      <div class=\"f-grid\">\n        <div class=\"f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-12\" data-aos=\"fade-zoom-in\" data-aos-offset=\"200\" data-aos-easing=\"ease-in-sine\" data-aos-duration=\"600\" data-aos-anchor=\"hero\">\n          <div class=\"c-sp__graph\">\n            <div class=\"c-sp__bars\">\n              <span class=\"c-sp__bar\"><span></span></span>\n              <span class=\"c-sp__bar\"><span></span></span>\n              <span class=\"c-sp__bar\"><span></span></span>\n              <span class=\"c-sp__bar\"><span></span></span>\n              <span class=\"c-sp__bar\"><span></span></span>\n              <span class=\"c-sp__bar\"><span></span></span>\n              <span class=\"c-sp__bar\"><span></span></span>\n              <span class=\"c-sp__bar\"><span></span></span>\n              <span class=\"c-sp__bar\"><span></span></span>\n              <span class=\"c-sp__bar\"><span></span></span>\n              <span class=\"c-sp__bar\"><span></span></span>\n              <span class=\"c-sp__bar\"><span></span></span>\n              <span class=\"c-sp__bar\"><span></span></span>\n              <span class=\"c-sp__bar\"><span></span></span>\n              <span class=\"c-sp__bar\"><span></span></span>\n              <span class=\"c-sp__bar\"><span></span></span>\n              <span class=\"c-sp__bar\"><span></span></span>\n              <span class=\"c-sp__bar\"><span></span></span>\n              <span class=\"c-sp__bar\"><span></span></span>\n              <span class=\"c-sp__bar\"><span></span></span>\n              <span class=\"c-sp__bar\"><span></span></span>\n              <span class=\"c-sp__bar\"><span></span></span>\n              <span class=\"c-sp__bar\"><span></span></span>\n              <span class=\"c-sp__bar\"><span></span></span>\n              <span class=\"c-sp__bar\"><span></span></span>\n              <span class=\"c-sp__bar\"><span></span></span>\n              <span class=\"c-sp__bar\"><span></span></span>\n              <span class=\"c-sp__bar\"><span></span></span>\n              <span class=\"c-sp__bar\"><span></span></span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n\n    <section class=\"c-row c-row--alpha c-row-normal\">\n      <div class=\"f-grid\">\n        <div class=\"f-col-bp1-4 f-col-bp2-10 f-col-bp3-6\">\n          <div class=\"c-tile__content c-tile__content--text\">\n            <h2>Animation</h2>\n            <p>To enhance user experience and secure the marketplace platform within the overall brand we added some coded animation. I have used  <a href=\"http://codepen.io/driesstandaert/\" target=\"_blank\">Codepen</a> to explore interaction patterns and ideas to feed our team developers.</p>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"c-row u-nomargin u-bgcolor-neutral-x-light\">\n      <div class=\"f-grid u-no-max-width\">\n        <a href=\"/atlascopco/\" class=\"f-col-bp3-6 f-col-bp3-shift-6 c-tile c-tile--link\">\n          <div class=\"c-tile__content c-tile__content--link\">\n            <p class=\"c-tile__link-text c-tile__link-text--next\"><span>Atlas Copco</span></p>\n          </div>\n        </a>\n      </div>\n    </section>\n\n  </main>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_content: b_content,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["layouts/werchter.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layouts/base.njk", true, "layouts/werchter.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
output += "\n";
var t_4;
t_4 = runtime.contextOrFrameLookup(context, frame, "title");
frame.set("introHeading", t_4, true);
if(frame.topLevel) {
context.setVariable("introHeading", t_4);
}
if(frame.topLevel) {
context.addExport("introHeading", t_4);
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
output += t_5;
output += "\n\n";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
output += "\n\n\n \n\n\n\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 5;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n\n  <main id=\"main-content\" tabindex=\"-1\">\n    \n    <section class=\"c-row c-row--alpha c-row-hero\">\n      <div class=\"f-grid\">\n        <div class=\"f-col-bp1-4 f-col-bp2-10 f-col-bp3-8 c-hero\" data-aos=\"fade-zoom-in\" data-aos-offset=\"200\" data-aos-easing=\"ease-in-sine\" data-aos-duration=\"600\" data-aos-anchor=\"hero\">\n          <h1>Rock Werchter is an internationally acclaimed music festival. </h1>\n          <h5>UI design</h5>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"c-row c-row--padding u-bgcolor-gradient\" data-aos=\"fade-up\">\n      <div class=\"f-grid\">\n        <div class=\"f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-8 f-col-bp3-shift-2\">\n          <div class=\"c-mockup\">\n            <div class=\"c-mockup-mobile c-mockup-mobile--1 is-open\">\n                <img src=\"/assets/images/png/werchter-mobile-2.png\" alt=\"Werchter mobile\">\n            </div>\n            <div class=\"c-mockup-mobile c-mockup-mobile--3 is-open\">\n                <img src=\"/assets/images/png/werchter-mobile.png\" alt=\"Werchter mobile\">\n            </div>\n            <div class=\"c-mockup-mobile c-mockup-mobile--2 is-open\">\n                <img src=\"/assets/images/png/werchter-mobile-3.png\" alt=\"Werchter mobile\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"c-row c-row--alpha\">\n      <div class=\"f-grid\">\n        <div class=\"f-col-bp1-4 f-col-bp2-8 f-col-bp3-6\">\n          <div class=\"c-tile__content c-tile__content--text\">\n            <h2>Digital attitude</h2>\n            <p>As a rock festival should be, Rock Werchter is well-known for its eclectic style. The objective was to align an existing print identity with a new online visibility and interact with frequent repeat visitors.</p>\n            <p>Visit <a href=\"http://www.rockwerchter.be\" target=\"_blank\" class=\"c-link\">rockwerchter.be</a></p>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"c-row c-row--beta c-row-normal\">\n      <div class=\"f-grid\">\n        <div class=\"f-col-bp1-4 f-col-bp1-shift-0 f-col-bp2-12 f-col-bp2-shift-0 f-col-bp3-8 f-col-bp3-shift-2\">\n          <div class=\"c-tile__content c-tile__content--full\">\n            <figure class=\"u-ratio u-ratio-4x3\">\n                <img src=\"/assets/images/jpg/werchter-styletile.jpg\" loading=\"lazy\" alt=\"Werchter style tile\">\n            </figure>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"c-row c-row--alpha\">\n      <div class=\"f-grid\">\n        <div class=\"f-col-bp1-4 f-col-bp2-8 f-col-bp3-6\">\n          <div class=\"c-tile__content c-tile__content--text\">\n            <h2>Digital style tile</h2>\n            <p>By creating a digital style tile and experimenting with CSS/JS animations we agreed on colour, font and graphical elements.</p>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"c-row c-row--beta\">\n      <div class=\"f-grid\">\n      \t<div class=\"f-col-bp1-4 f-col-bp3-6 u-ver-center\">\n      \t  <div class=\"c-tile__content\">\n            <h2>Flexible grid system</h2>\n            <p>Because new content is thrown at the website on a daily basis we used a flexible, cascading grid system to help us keep a consistent layout. This also makes it adaptive and mobile-friendly.</p>\n          </div>\n      \t</div>\n      \t<div class=\"f-col-bp1-4 f-col-bp3-6\">\n        <div class=\"c-tile__content c-tile__content--full\">\n      \t    <figure class=\"u-tablet u-break-right\">\n      \t     <img src=\"/assets/images/jpg/werchter-grid.jpg\" loading=\"lazy\" alt=\"Werchter grid\">\n      \t    </figure>\n      \t  </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"c-row c-row--beta\">\n      <div class=\"f-grid u-reverse\">\n      \t<div class=\"f-col-bp1-4 f-col-bp3-6 u-ver-center\">\n      \t  <div class=\"c-tile__content\">\n            <h2>Interactive design</h2>\n            <p>By adding visually attractive 3D effects, gradient shifts and smooth page transitions users have a slick user experience that matches the style of the brand.</p>\n          </div>\n      \t</div>\n      \t<div class=\"f-col-bp1-4 f-col-bp3-6\">\n          <div>\n            <figure class=\"js-tilt\">\n      \t      <img src=\"/assets/images/png/werchter-logo.png\" loading=\"lazy\" alt=\"Werchter grid\">\n      \t    </figure>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"c-row c-row-video c-row--beta\" data-aos=\"fade-up\">\n      <div class=\"f-grid\">\n        <div class=\"f-col-bp1-4 f-col-bp1-shift-0 f-col-bp2-12 f-col-bp2-shift-0 f-col-bp3-8 f-col-bp3-shift-2\">\n          <div class=\"c-browser c-browser--white\">\n            <div class=\"c-browser__content\">\n              <div>\n                <video autoplay loop width=\"100%\" height=\"100%\">\n                  <source src=\"/assets/images/video/flow-werchter.webm\" type=\"video/webm\">\n                  <source src=\"/assets/images/video/flow-werchter.mp4\" type=\"video/mp4\">\n                  Sorry, your browser doesn't support embedded videos.\n                </video>\n              </div>\n            </div>\n          </div> \n        </div> \n      </div>   \n    </section>\n\n    <section class=\"c-row u-nomargin u-bgcolor-neutral-x-light\">\n      <div class=\"f-grid u-no-max-width\">\n        <a href=\"/maunga/\" class=\"f-col-bp3-6 f-col-bp3-shift-6 c-tile c-tile--link\">\n          <div class=\"c-tile__content c-tile__content--link\">\n            <p class=\"c-tile__link-text c-tile__link-text--next\"><span>Maunga</span></p>\n          </div>\n        </a>\n      </div>\n    </section>\n\n    \n\n  </main>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_content: b_content,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["macros/form.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n\n";
var macro_t_1 = runtime.makeMacro(
["text", "name"], 
[], 
function (l_text, l_name, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("text", l_text);
frame.set("name", l_name);
var t_2 = "";t_2 += "\n  <label class=\"question__label\" for=\"field-";
t_2 += runtime.suppressValue(l_name, env.opts.autoescape);
t_2 += "\">";
t_2 += runtime.suppressValue(l_text, env.opts.autoescape);
t_2 += "</label>\n";
;
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("label");
context.setVariable("label", macro_t_1);
output += "\n\n";
var macro_t_3 = runtime.makeMacro(
["type", "name", "data"], 
[], 
function (l_type, l_name, l_data, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("type", l_type);
frame.set("name", l_name);
frame.set("data", l_data);
var t_4 = "";t_4 += "\n  <br>\n  <input class=\"question__field\"\n        type=\"";
t_4 += runtime.suppressValue(l_type, env.opts.autoescape);
t_4 += "\"\n        name=\"";
t_4 += runtime.suppressValue(l_name, env.opts.autoescape);
t_4 += "\"\n        id=\"field-";
t_4 += runtime.suppressValue(l_name, env.opts.autoescape);
t_4 += "\"\n        ";
if(runtime.memberLookup((l_data),"required")) {
t_4 += "required aria-required=\"true\"";
;
}
t_4 += "\n        ";
if(runtime.memberLookup((l_data),"placeholder")) {
t_4 += "placeholder=\"";
t_4 += runtime.suppressValue(runtime.memberLookup((l_data),"placeholder"), env.opts.autoescape);
t_4 += "\"";
;
}
t_4 += "\n        ";
if(runtime.memberLookup((l_data),"pattern")) {
t_4 += "pattern=\"";
t_4 += runtime.suppressValue(runtime.memberLookup((l_data),"pattern"), env.opts.autoescape);
t_4 += "\"";
;
}
t_4 += "\n        ";
if(runtime.memberLookup((l_data),"description")) {
t_4 += "aria-describedby=\"description-";
t_4 += runtime.suppressValue(l_name, env.opts.autoescape);
t_4 += "\"";
;
}
t_4 += "\n        ";
if(runtime.memberLookup((l_data),"autocomplete")) {
t_4 += "autocomplete=\"";
t_4 += runtime.suppressValue(runtime.memberLookup((l_data),"autocomplete"), env.opts.autoescape);
t_4 += "\"";
;
}
t_4 += "\n        ";
if(runtime.memberLookup((l_data),"autocorrect")) {
t_4 += "autocorrect=\"";
t_4 += runtime.suppressValue(runtime.memberLookup((l_data),"autocorrect"), env.opts.autoescape);
t_4 += "\"";
;
}
t_4 += "\n        ";
if(runtime.memberLookup((l_data),"spellcheck")) {
t_4 += "spellcheck=\"";
t_4 += runtime.suppressValue(runtime.memberLookup((l_data),"spellcheck"), env.opts.autoescape);
t_4 += "\"";
;
}
t_4 += "\n        ";
if(runtime.memberLookup((l_data),"autocapitalize")) {
t_4 += "autocapitalize=\"";
t_4 += runtime.suppressValue(runtime.memberLookup((l_data),"autocapitalize"), env.opts.autoescape);
t_4 += "\"";
;
}
t_4 += "\n        >\n  ";
if(runtime.memberLookup((l_data),"description")) {
t_4 += "\n    <br>\n    ";
t_4 += runtime.suppressValue((lineno = 25, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "description"), "description", context, [l_name,runtime.memberLookup((l_data),"description")])), env.opts.autoescape);
t_4 += "\n  ";
;
}
t_4 += "\n";
;
frame = callerFrame;
return new runtime.SafeString(t_4);
});
context.addExport("field");
context.setVariable("field", macro_t_3);
output += "\n\n";
var macro_t_5 = runtime.makeMacro(
["text", "name", "data"], 
[], 
function (l_text, l_name, l_data, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("text", l_text);
frame.set("name", l_name);
frame.set("data", l_data);
var t_6 = "";t_6 += "\n  <label for=\"field-";
t_6 += runtime.suppressValue(l_name, env.opts.autoescape);
t_6 += "\" class=\"question--confirm\">\n    <input class=\"question__field question__field--confirm\"\n          type=\"checkbox\"\n          name=\"";
t_6 += runtime.suppressValue(l_name, env.opts.autoescape);
t_6 += "\"\n          id=\"field-";
t_6 += runtime.suppressValue(l_name, env.opts.autoescape);
t_6 += "\"\n          value=\"1\"\n          ";
if(runtime.memberLookup((l_data),"required")) {
t_6 += "required aria-required=\"true\"";
;
}
t_6 += "\n          ";
if(runtime.memberLookup((l_data),"description")) {
t_6 += "aria-describedby=\"description-";
t_6 += runtime.suppressValue(l_name, env.opts.autoescape);
t_6 += "\"";
;
}
t_6 += "\n          >\n    ";
t_6 += runtime.suppressValue(l_text, env.opts.autoescape);
t_6 += "\n  </label>\n  ";
if(runtime.memberLookup((l_data),"description")) {
t_6 += "\n    <br>\n    ";
t_6 += runtime.suppressValue((lineno = 43, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "description"), "description", context, [l_name,runtime.memberLookup((l_data),"description")])), env.opts.autoescape);
t_6 += "\n  ";
;
}
t_6 += "\n";
;
frame = callerFrame;
return new runtime.SafeString(t_6);
});
context.addExport("confirm");
context.setVariable("confirm", macro_t_5);
output += "\n\n";
var macro_t_7 = runtime.makeMacro(
["name", "options", "data"], 
[], 
function (l_name, l_options, l_data, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("name", l_name);
frame.set("options", l_options);
frame.set("data", l_data);
var t_8 = "";t_8 += "\n  <br>\n  <select id=\"field-";
t_8 += runtime.suppressValue(l_name, env.opts.autoescape);
t_8 += "\"\n          name=\"";
t_8 += runtime.suppressValue(l_name, env.opts.autoescape);
t_8 += "\"\n          ";
if(runtime.memberLookup((l_data),"required")) {
t_8 += "required aria-required=\"true\"";
;
}
t_8 += "\n          ";
if(runtime.memberLookup((l_data),"multiple")) {
t_8 += "multiple";
;
}
t_8 += "\n          ";
if(runtime.memberLookup((l_data),"description")) {
t_8 += "aria-describedby=\"description-";
t_8 += runtime.suppressValue(l_name, env.opts.autoescape);
t_8 += "\"";
;
}
t_8 += "\n          >\n    ";
frame = frame.push();
var t_11 = runtime.memberLookup((l_data),"options_before");
if(t_11) {t_11 = runtime.fromIterator(t_11);
var t_10 = t_11.length;
for(var t_9=0; t_9 < t_11.length; t_9++) {
var t_12 = t_11[t_9];
frame.set("opt", t_12);
frame.set("loop.index", t_9 + 1);
frame.set("loop.index0", t_9);
frame.set("loop.revindex", t_10 - t_9);
frame.set("loop.revindex0", t_10 - t_9 - 1);
frame.set("loop.first", t_9 === 0);
frame.set("loop.last", t_9 === t_10 - 1);
frame.set("loop.length", t_10);
t_8 += "\n      ";
t_8 += runtime.suppressValue((lineno = 56, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "option"), "option", context, [t_12])), env.opts.autoescape);
t_8 += "\n    ";
;
}
}
frame = frame.pop();
t_8 += "\n    ";
frame = frame.push();
var t_15 = l_options;
if(t_15) {t_15 = runtime.fromIterator(t_15);
var t_14 = t_15.length;
for(var t_13=0; t_13 < t_15.length; t_13++) {
var t_16 = t_15[t_13];
frame.set("opt", t_16);
frame.set("loop.index", t_13 + 1);
frame.set("loop.index0", t_13);
frame.set("loop.revindex", t_14 - t_13);
frame.set("loop.revindex0", t_14 - t_13 - 1);
frame.set("loop.first", t_13 === 0);
frame.set("loop.last", t_13 === t_14 - 1);
frame.set("loop.length", t_14);
t_8 += "\n      ";
t_8 += runtime.suppressValue((lineno = 59, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "option"), "option", context, [t_16])), env.opts.autoescape);
t_8 += "\n    ";
;
}
}
frame = frame.pop();
t_8 += "\n    ";
frame = frame.push();
var t_19 = runtime.memberLookup((l_data),"options_after");
if(t_19) {t_19 = runtime.fromIterator(t_19);
var t_18 = t_19.length;
for(var t_17=0; t_17 < t_19.length; t_17++) {
var t_20 = t_19[t_17];
frame.set("opt", t_20);
frame.set("loop.index", t_17 + 1);
frame.set("loop.index0", t_17);
frame.set("loop.revindex", t_18 - t_17);
frame.set("loop.revindex0", t_18 - t_17 - 1);
frame.set("loop.first", t_17 === 0);
frame.set("loop.last", t_17 === t_18 - 1);
frame.set("loop.length", t_18);
t_8 += "\n      ";
t_8 += runtime.suppressValue((lineno = 62, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "option"), "option", context, [t_20])), env.opts.autoescape);
t_8 += "\n    ";
;
}
}
frame = frame.pop();
t_8 += "\n  </select>\n  ";
if(runtime.memberLookup((l_data),"description")) {
t_8 += "\n    <br>\n    ";
t_8 += runtime.suppressValue((lineno = 67, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "description"), "description", context, [l_name,runtime.memberLookup((l_data),"description")])), env.opts.autoescape);
t_8 += "\n  ";
;
}
t_8 += "\n";
;
frame = callerFrame;
return new runtime.SafeString(t_8);
});
context.addExport("select");
context.setVariable("select", macro_t_7);
output += "\n\n";
var macro_t_21 = runtime.makeMacro(
["data"], 
[], 
function (l_data, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("data", l_data);
var t_22 = "";t_22 += "\n  ";
if(runtime.memberLookup((l_data),"value")) {
t_22 += "\n    <option value=\"";
t_22 += runtime.suppressValue(runtime.memberLookup((l_data),"value"), env.opts.autoescape);
t_22 += "\">";
t_22 += runtime.suppressValue(runtime.memberLookup((l_data),"label"), env.opts.autoescape);
t_22 += "</option>\n  ";
;
}
else {
t_22 += "\n    <option>";
t_22 += runtime.suppressValue(l_data, env.opts.autoescape);
t_22 += "</option>\n  ";
;
}
t_22 += "\n";
;
frame = callerFrame;
return new runtime.SafeString(t_22);
});
context.addExport("option");
context.setVariable("option", macro_t_21);
output += "\n\n";
var macro_t_23 = runtime.makeMacro(
["name", "data"], 
[], 
function (l_name, l_data, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("name", l_name);
frame.set("data", l_data);
var t_24 = "";t_24 += "\n  <br>\n  <textarea id=\"field-";
t_24 += runtime.suppressValue(l_name, env.opts.autoescape);
t_24 += "\"\n            name=\"";
t_24 += runtime.suppressValue(l_name, env.opts.autoescape);
t_24 += "\"\n            ";
if(runtime.memberLookup((l_data),"rows")) {
t_24 += "rows=\"";
t_24 += runtime.suppressValue(runtime.memberLookup((l_data),"rows"), env.opts.autoescape);
t_24 += "\"";
;
}
else {
t_24 += "rows=\"5\"";
;
}
t_24 += "\n            cols=\"100\"\n            ";
if(runtime.memberLookup((l_data),"required")) {
t_24 += "required aria-required=\"true\"";
;
}
t_24 += "\n            ";
if(runtime.memberLookup((l_data),"autocorrect")) {
t_24 += "autocorrect=\"";
t_24 += runtime.suppressValue(runtime.memberLookup((l_data),"autocorrect"), env.opts.autoescape);
t_24 += "\"";
;
}
t_24 += "\n            ";
if(runtime.memberLookup((l_data),"spellcheck")) {
t_24 += "spellcheck=\"";
t_24 += runtime.suppressValue(runtime.memberLookup((l_data),"spellcheck"), env.opts.autoescape);
t_24 += "\"";
;
}
t_24 += "\n            ";
if(runtime.memberLookup((l_data),"autocapitalize")) {
t_24 += "autocapitalize=\"";
t_24 += runtime.suppressValue(runtime.memberLookup((l_data),"autocapitalize"), env.opts.autoescape);
t_24 += "\"";
;
}
t_24 += "\n            ";
if(runtime.memberLookup((l_data),"description")) {
t_24 += "aria-describedby=\"description-";
t_24 += runtime.suppressValue(l_name, env.opts.autoescape);
t_24 += "\"";
;
}
t_24 += "\n            ></textarea>\n  ";
if(runtime.memberLookup((l_data),"description")) {
t_24 += "\n    ";
t_24 += runtime.suppressValue((lineno = 92, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "description"), "description", context, [l_name,runtime.memberLookup((l_data),"description")])), env.opts.autoescape);
t_24 += "\n  ";
;
}
t_24 += "\n";
;
frame = callerFrame;
return new runtime.SafeString(t_24);
});
context.addExport("textarea");
context.setVariable("textarea", macro_t_23);
output += "\n\n";
var macro_t_25 = runtime.makeMacro(
["label", "name", "options", "data"], 
[], 
function (l_label, l_name, l_options, l_data, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("label", l_label);
frame.set("name", l_name);
frame.set("options", l_options);
frame.set("data", l_data);
var t_26 = "";t_26 += "\n  <fieldset>\n    <legend\n      ";
if(runtime.memberLookup((l_data),"description")) {
t_26 += "aria-describedby=\"description-";
t_26 += runtime.suppressValue(l_name, env.opts.autoescape);
t_26 += "\"";
;
}
t_26 += "\n      >";
t_26 += runtime.suppressValue(l_label, env.opts.autoescape);
t_26 += "</legend>\n    <ul class=\"field-list__field-group__list\">\n      ";
frame = frame.push();
var t_29 = l_options;
if(t_29) {t_29 = runtime.fromIterator(t_29);
var t_28 = t_29.length;
for(var t_27=0; t_27 < t_29.length; t_27++) {
var t_30 = t_29[t_27];
frame.set("option", t_30);
frame.set("loop.index", t_27 + 1);
frame.set("loop.index0", t_27);
frame.set("loop.revindex", t_28 - t_27);
frame.set("loop.revindex0", t_28 - t_27 - 1);
frame.set("loop.first", t_27 === 0);
frame.set("loop.last", t_27 === t_28 - 1);
frame.set("loop.length", t_28);
t_26 += "\n        <li>\n          ";
if(runtime.memberLookup((t_30),"value")) {
t_26 += "\n            <label for=\"field-";
t_26 += runtime.suppressValue(l_name, env.opts.autoescape);
t_26 += "-";
t_26 += runtime.suppressValue(runtime.memberLookup((t_30),"value"), env.opts.autoescape);
t_26 += "\">\n              <input type=\"radio\"\n                    name=\"";
t_26 += runtime.suppressValue(l_name, env.opts.autoescape);
t_26 += "\"\n                    id=\"field-";
t_26 += runtime.suppressValue(l_name, env.opts.autoescape);
t_26 += "-";
t_26 += runtime.suppressValue(runtime.memberLookup((t_30),"value"), env.opts.autoescape);
t_26 += "\"\n                    value=\"";
t_26 += runtime.suppressValue(runtime.memberLookup((t_30),"value"), env.opts.autoescape);
t_26 += "\"\n                    ";
if(runtime.memberLookup((t_30),"note")) {
t_26 += "aria-describedby=\"description-";
t_26 += runtime.suppressValue(l_name, env.opts.autoescape);
t_26 += "-";
t_26 += runtime.suppressValue(runtime.memberLookup((t_30),"value"), env.opts.autoescape);
t_26 += "\"";
;
}
t_26 += "\n                    >";
t_26 += runtime.suppressValue(runtime.memberLookup((t_30),"label"), env.opts.autoescape);
t_26 += "</label>\n          ";
;
}
else {
t_26 += "\n            <label for=\"field-";
t_26 += runtime.suppressValue(l_name, env.opts.autoescape);
t_26 += "-";
t_26 += runtime.suppressValue(t_30, env.opts.autoescape);
t_26 += "\">\n              <input type=\"radio\"\n                    name=\"";
t_26 += runtime.suppressValue(l_name, env.opts.autoescape);
t_26 += "\"\n                    id=\"field-";
t_26 += runtime.suppressValue(l_name, env.opts.autoescape);
t_26 += "-";
t_26 += runtime.suppressValue(t_30, env.opts.autoescape);
t_26 += "\"\n                    value=\"";
t_26 += runtime.suppressValue(t_30, env.opts.autoescape);
t_26 += "\"\n                    >";
t_26 += runtime.suppressValue(t_30, env.opts.autoescape);
t_26 += "</label>\n          ";
;
}
t_26 += "\n          ";
if(runtime.memberLookup((t_30),"note")) {
t_26 += "\n            <br>\n            ";
t_26 += runtime.suppressValue((lineno = 122, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "description"), "description", context, [(l_name + "-" + runtime.memberLookup((t_30),"value")),runtime.memberLookup((t_30),"note")])), env.opts.autoescape);
t_26 += "\n          ";
;
}
t_26 += "\n        </li>\n      ";
;
}
}
frame = frame.pop();
t_26 += "\n    </ul>\n    ";
if(runtime.memberLookup((l_data),"description")) {
t_26 += "\n      ";
t_26 += runtime.suppressValue((lineno = 128, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "description"), "description", context, [l_name,runtime.memberLookup((l_data),"description")])), env.opts.autoescape);
t_26 += "\n    ";
;
}
t_26 += "\n  </fieldset>\n";
;
frame = callerFrame;
return new runtime.SafeString(t_26);
});
context.addExport("radios");
context.setVariable("radios", macro_t_25);
output += "\n\n";
var macro_t_31 = runtime.makeMacro(
["label", "name", "options", "data"], 
[], 
function (l_label, l_name, l_options, l_data, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("label", l_label);
frame.set("name", l_name);
frame.set("options", l_options);
frame.set("data", l_data);
var t_32 = "";t_32 += "\n  <fieldset>\n    <legend\n      ";
if(runtime.memberLookup((l_data),"description")) {
t_32 += "aria-describedby=\"description-";
t_32 += runtime.suppressValue(l_name, env.opts.autoescape);
t_32 += "\"";
;
}
t_32 += "\n      >";
t_32 += runtime.suppressValue(l_label, env.opts.autoescape);
t_32 += "</legend>\n    <ul class=\"field-list__field-group__list\">\n      ";
frame = frame.push();
var t_35 = l_options;
if(t_35) {t_35 = runtime.fromIterator(t_35);
var t_34 = t_35.length;
for(var t_33=0; t_33 < t_35.length; t_33++) {
var t_36 = t_35[t_33];
frame.set("option", t_36);
frame.set("loop.index", t_33 + 1);
frame.set("loop.index0", t_33);
frame.set("loop.revindex", t_34 - t_33);
frame.set("loop.revindex0", t_34 - t_33 - 1);
frame.set("loop.first", t_33 === 0);
frame.set("loop.last", t_33 === t_34 - 1);
frame.set("loop.length", t_34);
t_32 += "\n        <li>\n          ";
if(runtime.memberLookup((t_36),"value")) {
t_32 += "\n            <label for=\"field-";
t_32 += runtime.suppressValue(l_name, env.opts.autoescape);
t_32 += "-";
t_32 += runtime.suppressValue(runtime.memberLookup((t_36),"value"), env.opts.autoescape);
t_32 += "\">\n              <input type=\"checkbox\"\n                    name=\"";
t_32 += runtime.suppressValue(l_name, env.opts.autoescape);
t_32 += "[]\"\n                    id=\"field-";
t_32 += runtime.suppressValue(l_name, env.opts.autoescape);
t_32 += "-";
t_32 += runtime.suppressValue(runtime.memberLookup((t_36),"value"), env.opts.autoescape);
t_32 += "\"\n                    value=\"";
t_32 += runtime.suppressValue(runtime.memberLookup((t_36),"value"), env.opts.autoescape);
t_32 += "\"\n                    ";
if(runtime.memberLookup((t_36),"note")) {
t_32 += "aria-describedby=\"description-";
t_32 += runtime.suppressValue(l_name, env.opts.autoescape);
t_32 += "-";
t_32 += runtime.suppressValue(runtime.memberLookup((t_36),"value"), env.opts.autoescape);
t_32 += "\"";
;
}
t_32 += "\n                    >";
t_32 += runtime.suppressValue(runtime.memberLookup((t_36),"label"), env.opts.autoescape);
t_32 += "</label>\n          ";
;
}
else {
t_32 += "\n            <label for=\"field-";
t_32 += runtime.suppressValue(l_name, env.opts.autoescape);
t_32 += "-";
t_32 += runtime.suppressValue(t_36, env.opts.autoescape);
t_32 += "\">\n              <input type=\"checkbox\"\n                    name=\"";
t_32 += runtime.suppressValue(l_name, env.opts.autoescape);
t_32 += "[]\"\n                    id=\"field-";
t_32 += runtime.suppressValue(l_name, env.opts.autoescape);
t_32 += "-";
t_32 += runtime.suppressValue(t_36, env.opts.autoescape);
t_32 += "\"\n                    value=\"";
t_32 += runtime.suppressValue(t_36, env.opts.autoescape);
t_32 += "\"\n                    >";
t_32 += runtime.suppressValue(t_36, env.opts.autoescape);
t_32 += "</label>\n          ";
;
}
t_32 += "\n          ";
if(runtime.memberLookup((t_36),"note")) {
t_32 += "\n            <br>\n            ";
t_32 += runtime.suppressValue((lineno = 159, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "description"), "description", context, [(l_name + "-" + runtime.memberLookup((t_36),"value")),runtime.memberLookup((t_36),"note")])), env.opts.autoescape);
t_32 += "\n          ";
;
}
t_32 += "\n        </li>\n      ";
;
}
}
frame = frame.pop();
t_32 += "\n    </ul>\n    ";
if(runtime.memberLookup((l_data),"description")) {
t_32 += "\n      ";
t_32 += runtime.suppressValue((lineno = 165, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "description"), "description", context, [l_name,runtime.memberLookup((l_data),"description")])), env.opts.autoescape);
t_32 += "\n    ";
;
}
t_32 += "\n  </fieldset>\n";
;
frame = callerFrame;
return new runtime.SafeString(t_32);
});
context.addExport("checkboxes");
context.setVariable("checkboxes", macro_t_31);
output += "\n\n";
var macro_t_37 = runtime.makeMacro(
["id", "html"], 
[], 
function (l_id, l_html, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("id", l_id);
frame.set("html", l_html);
var t_38 = "";t_38 += "\n  <em class=\"[ field-list__field-group__description ]\" id=\"description-";
t_38 += runtime.suppressValue(l_id, env.opts.autoescape);
t_38 += "\">";
t_38 += runtime.suppressValue(env.getFilter("safe").call(context, l_html), env.opts.autoescape);
t_38 += "</em>\n";
;
frame = callerFrame;
return new runtime.SafeString(t_38);
});
context.addExport("description");
context.setVariable("description", macro_t_37);
output += "\n\n";
var macro_t_39 = runtime.makeMacro(
["name", "value"], 
[], 
function (l_name, l_value, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("name", l_name);
frame.set("value", l_value);
var t_40 = "";t_40 += "\n  <input type=\"hidden\" name=\"";
t_40 += runtime.suppressValue(l_name, env.opts.autoescape);
t_40 += "\" id=\"field-";
t_40 += runtime.suppressValue(l_name, env.opts.autoescape);
t_40 += "\" value=\"";
t_40 += runtime.suppressValue(l_value, env.opts.autoescape);
t_40 += "\">\n";
;
frame = callerFrame;
return new runtime.SafeString(t_40);
});
context.addExport("hidden_field");
context.setVariable("hidden_field", macro_t_39);
output += "\n\n";
var macro_t_41 = runtime.makeMacro(
["text"], 
[], 
function (l_text, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("text", l_text);
var t_42 = "";t_42 += "\n  <button type=\"submit\" class=\"[ button ] [ font-base text-base weight-bold ]\">";
t_42 += runtime.suppressValue(l_text, env.opts.autoescape);
t_42 += "</button>\n";
;
frame = callerFrame;
return new runtime.SafeString(t_42);
});
context.addExport("button");
context.setVariable("button", macro_t_41);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["macros/site.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/components/contact-form.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("macros/form.njk", false, "partials/components/contact-form.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
t_1.getExported(function(t_3,t_1) {
if(t_3) { cb(t_3); return; }
if(Object.prototype.hasOwnProperty.call(t_1, "label")) {
var t_4 = t_1.label;
} else {
cb(new Error("cannot import 'label'")); return;
}
context.setVariable("label", t_4);
if(Object.prototype.hasOwnProperty.call(t_1, "field")) {
var t_5 = t_1.field;
} else {
cb(new Error("cannot import 'field'")); return;
}
context.setVariable("field", t_5);
if(Object.prototype.hasOwnProperty.call(t_1, "textarea")) {
var t_6 = t_1.textarea;
} else {
cb(new Error("cannot import 'textarea'")); return;
}
context.setVariable("textarea", t_6);
if(Object.prototype.hasOwnProperty.call(t_1, "button")) {
var t_7 = t_1.button;
} else {
cb(new Error("cannot import 'button'")); return;
}
context.setVariable("button", t_7);
output += "\n\n<form name=\"contact\" method=\"POST\" data-netlify=\"true\" action=\"/thank-you\" netlify-honeypot=\"bot-field\">\n  <ol class=\"[ field-list ]\">\n    <li class=\"[ field-list__field-group ]\">\n      ";
output += runtime.suppressValue((lineno = 5, colno = 14, runtime.callWrap(t_4, "label", context, ["What’s your name?","name"])), env.opts.autoescape);
output += "\n      ";
output += runtime.suppressValue((lineno = 6, colno = 14, runtime.callWrap(t_5, "field", context, ["text","name",{"required": true,"placeholder": "Katherine Johnson","autocomplete": "name","autocorrect": "off","autocapitalize": "off"}])), env.opts.autoescape);
output += "\n    </li>\n    <li class=\"[ field-list__field-group ]\">\n      ";
output += runtime.suppressValue((lineno = 9, colno = 14, runtime.callWrap(t_4, "label", context, ["What’s your email address?","email"])), env.opts.autoescape);
output += "\n      ";
output += runtime.suppressValue((lineno = 10, colno = 14, runtime.callWrap(t_5, "field", context, ["email","email",{"required": true,"placeholder": "katherine@johnson.tld","autocomplete": "email"}])), env.opts.autoescape);
output += "\n    </li>\n    <li class=\"[ field-list__field-group ]\">\n      ";
output += runtime.suppressValue((lineno = 13, colno = 14, runtime.callWrap(t_4, "label", context, ["What’s on your mind?","message"])), env.opts.autoescape);
output += "\n      ";
output += runtime.suppressValue((lineno = 14, colno = 17, runtime.callWrap(t_6, "textarea", context, ["message",{"required": true,"autocapitalize": "sentences","spellcheck": "true"}])), env.opts.autoescape);
output += "\n    </li>\n    <li hidden>\n      <label>Don’t fill this out if you're human: <input name=\"bot-field\" /></label>\n    </li>\n  </ol>\n  ";
output += runtime.suppressValue((lineno = 20, colno = 11, runtime.callWrap(t_7, "button", context, ["Send message"])), env.opts.autoescape);
output += "\n</form>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/components/intro-home.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<section class=\"c-row c-row-intro\" id=\"hero\">\n  <div class=\"f-grid\">\n    <div class=\"f-col-bp1-4 f-col-bp1-shift-0 f-col-bp2-10 f-col-bp2-shift-1 f-col-bp3-10 f-col-bp3-shift-1 u-ver-center u-hor-center\">\n      <div class=\"c-intro\">\n          <h1 class=\"c-intro__title\">\n              <span data-aos=\"fade-zoom-in\" data-aos-offset=\"200\" data-aos-easing=\"ease-in-sine\" data-aos-duration=\"600\" data-aos-delay=\"800\" data-aos-anchor=\"hero\">I design user interfaces</span><br>\n              <span data-aos=\"fade-zoom-in\" data-aos-offset=\"200\" data-aos-easing=\"ease-in-sine\" data-aos-duration=\"600\" data-aos-delay=\"1200\" data-aos-anchor=\"hero\">and digital identities.</span>\n          </h1>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"c-row c-gallery u-mb-delta\" id=\"work\" data-aos=\"fade-up\" data-aos-anchor=\"hero\" data-aos-delay=\"1800\">\n  <a href=\"/ferret/\" class=\"c-gallery__item c-gallery__item--1 u-bgcolor-ferret-light\">\n      <img src=\"/assets/images/jpg/ferret-teaser.jpg\" loading=\"lazy\" alt=\"Ferret.ai teaser\" class=\"c-gallery__img\">\n      <h3 class=\"c-gallery__caption\">Ferret.ai</h3>\n  </a>\n  <a href=\"/matexi/\" class=\"c-gallery__item c-gallery__item--2 u-bgcolor-matexi-base\" >\n      <img src=\"/assets/images/jpg/matexi-teaser.jpg\" loading=\"lazy\" alt=\"Matexi teaser\" class=\"c-gallery__img\">\n      <h3 class=\"c-gallery__caption\">Matexi</h3>\n  </a>\n  <a href=\"/sp/\" class=\"c-gallery__item c-gallery__item--3 u-bgcolor-sp-dark\">\n      <img src=\"/assets/images/jpg/sp-teaser.jpg\" loading=\"lazy\" alt=\"S&P Global teaser\" class=\"c-gallery__img\">\n      <h3 class=\"c-gallery__caption\">S&P Global</h3>\n  </a>\n  <a href=\"/atlascopco/\" class=\"c-gallery__item c-gallery__item--4 u-bgcolor-ac-base\">\n      <img src=\"/assets/images/jpg/ac-teaser-1x2.jpg\" loading=\"lazy\" alt=\"Atlas Copco teaser\" class=\"c-gallery__img\">\n      <h3 class=\"c-gallery__caption\">Atlas Copco</h3>\n  </a>\n  <a href=\"/bene/\" class=\"c-gallery__item c-gallery__item--5 u-bgcolor-bene-base\">\n      <img src=\"/assets/images/jpg/bene-teaser.jpg\" loading=\"lazy\" alt=\"Benevolent.ai teaser\" class=\"c-gallery__img\">\n      <h3 class=\"c-gallery__caption\">Benevolent.ai</h3>\n  </a>\n  <a href=\"/maunga/\" class=\"c-gallery__item c-gallery__item--6 u-bgcolor-maunga-light\">\n      <img src=\"/assets/images/jpg/maunga-teaser.jpg\" loading=\"lazy\" alt=\"Maunga teaser\" class=\"c-gallery__img\">\n      <h3 class=\"c-gallery__caption\">Maunga</h3>\n  </a>\n  <a href=\"/werchter/\" class=\"c-gallery__item c-gallery__item--7 u-bgcolor-werchter-base\">\n      <img src=\"/assets/images/jpg/werchter-teaser.jpg\" loading=\"lazy\" alt=\"Rock werchter teaser\" class=\"c-gallery__img\">\n      <h3 class=\"c-gallery__caption\">Rock Werchter</h3>\n  </a>\n</section>\n\n<section class=\"c-row c-row--alpha\" id=\"about\">\n    <div class=\"f-grid u-grid-full\">\n        <div class=\"f-col-bp1-4 f-col-bp2-10 f-col-bp3-6 u-ver-center\">\n            <div class=\"c-tile__content\">\n                <h2>\n                    Combining design and front-end development I handle projects in a mature way and enable design teams to achieve effective results.\n                </h2>\n                <p>\n                    As a senior designer I have worked at <a href=\"https://www.dukeandgrace.com/\" class=\"c-link\">Duke & Grace</a> (Wijs) and <a href=\"http://www.hugoandcat.com/\" class=\"c-link\">Hugo & Cat</a> working with motivated people in an open, innovative environment designing effective online platforms and digital identities.\n                </p>\n                <p id=\"contact\">\n                    I'm currently living <strong>London</strong>. Feel free to get in touch.\n                </p>\n                <p class=\"u-mt-epsilon u-mb-beta\">\n                    <a href=\"mailto:dries.standaert@gmail.com\" class=\"c-link\">dries.standaert@gmail.com</a>\n                </p>\n                <p class=\"u-mb-beta\">\n                    <a href=\"tel:+44 7399 610062\" class=\"c-link\">+44 7399 610062</a>\n                </p>\n                <ul class=\"o-list c-social__list\">\n                    <li class=\"o-list__item c-social__list-item\">\n                        <a href=\"http://twitter.com/driesstandaert\" target=\"_blank\" class=\"c-social__link c-social__link--twitter\">Twitter</a>\n                    </li>\n                    <li class=\"o-list__item c-social__list-item\">\n                        <a href=\"https://www.linkedin.com/in/dries-standaert-67635383/\" target=\"_blank\"class=\"c-social__link c-social__link--linkedin\">LinkedIn</a>\n                    </li>\n                    <li class=\"o-list__item c-social__list-item\">\n                        <a href=\"https://dribbble.com/driesstandaert\" target=\"_blank\"class=\"c-social__link c-social__link--dribbble\">dribbble</a>\n                    </li>\n                    <li class=\"o-list__item c-social__list-item\">\n                        <a href=\"http://codepen.io/driesstandaert/\" target=\"_blank\"class=\"c-social__link c-social__link--codepen\">Codepen</a>\n                    </li>\n                    <li class=\"o-list__item c-social__list-item\">\n                        <a href=\"/assets/images/pdf/driesstandaert-cv.pdf\" target=\"_blank\" class=\"c-social__link c-social__link--cv\">cv</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n        <div class=\"f-col-bp1-4 f-col-bp2-12 f-col-bp3-6\">\n            <div class=\"u-flip\">\n                <figure class=\"u-ratio u-ratio-1x1\">\n                    <img src=\"/assets/images/jpg/about.jpg\" alt=\"Dries Standaert\" loading=\"lazy\">\n                </figure>\n            </div>\n        </div>\n    </div>\n    </section>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/components/intro.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/components/logo.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(runtime.contextOrFrameLookup(context, frame, "type") != "home") {
output += "\n    <p class=\"c-logo\" data-aos=\"fade-zoom-in\" data-aos-easing=\"ease-in-sine\" data-aos-duration=\"300\">\n        <a href=\"/\" class=\"c-logo__link\">\n";
;
}
else {
output += "\n    <p class=\"c-logo c-logo--text\" data-aos=\"fade-zoom-in\" data-aos-easing=\"ease-in-sine\" data-aos-duration=\"600\">\n";
;
}
output += "\n\n    <span>Hello,</span>\n    my name is <span class=\"c-sound js-sound-trigger\">Dries</span>\n    <audio id=\"js-sound\">\n        <source src=\"/assets/images/audio/sound-dries.mp3\">\n    </audio>\n\n";
if(runtime.contextOrFrameLookup(context, frame, "type") != "home") {
output += "\n        </a>\n    </p>\n";
;
}
else {
output += "\n    </p>\n";
;
}
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/components/nav.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"c-nav\" data-aos=\"fade-zoom-in\" data-aos-easing=\"ease-in-sine\" data-aos-duration=\"600\" ";
if(runtime.contextOrFrameLookup(context, frame, "type") != "home") {
output += " data-aos-delay=\"0\" ";
;
}
else {
output += " data-aos-delay=\"2000\" ";
;
}
output += ">\n    <nav class=\"c-nav-main js-nav\">\n        <div class=\"c-nav-main__inner\">\n            <ul class=\"o-list c-nav-main__list\">\n                <li class=\"c-nav-main__item\">\n                    <a href=\"/#work\" class=\"c-nav-main__link js-nav-link\">Work</a>\n                </li>\n                <li class=\"c-nav-main__item\">\n                    <a href=\"/#about\" class=\"c-nav-main__link js-nav-link\">About</a>\n                </li>\n                <li class=\"c-nav-main__item\">\n                    <a href=\"#contact\" class=\"c-nav-main__link js-nav-link is-highlighted\">Hire me</a>\n                </li>\n            </ul>\n            <ul class=\"o-list c-social__list js-nav-social u-text-center is-hidden\">\n                <li class=\"o-list__item c-social__list-item\">\n                    <a href=\"http://twitter.com/driesstandaert\" target=\"_blank\" class=\"c-social__link c-social__link--white c-social__link--twitter\">Twitter</a>\n                </li>\n                <li class=\"o-list__item c-social__list-item\">\n                    <a href=\"https://www.linkedin.com/in/dries-standaert-67635383/\" target=\"_blank\"class=\"c-social__link c-social__link--white c-social__link--linkedin\">LinkedIn</a>\n                </li>\n                <li class=\"o-list__item c-social__list-item\">\n                    <a href=\"https://dribbble.com/driesstandaert\" target=\"_blank\" class=\"c-social__link c-social__link--white c-social__link--dribbble\">dribbble</a>\n                </li>\n                <li class=\"o-list__item c-social__list-item\">\n                    <a href=\"http://codepen.io/driesstandaert/\" target=\"_blank\" class=\"c-social__link c-social__link--white c-social__link--codepen\">Codepen</a>\n                </li>\n                <li class=\"o-list__item c-social__list-item\">\n                    <a href=\"/img/pdf/driesstandaert-cv.pdf\" target=\"_blank\" class=\"c-social__link c-social__link--white c-social__link--cv\">cv</a>\n                </li>\n            </ul>\n        </div>\n    </nav>\n\n    <div class=\"c-nav-main-trigger js-nav-trigger\">\n        <button></button>\n    </div>\n</div>\n\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/components/pagination.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var t_1;
t_1 = "leading-tight text-500 weight-mid box-inline-flex align-center pad-bottom-300";
frame.set("paginationLinkTokens", t_1, true);
if(frame.topLevel) {
context.setVariable("paginationLinkTokens", t_1);
}
if(frame.topLevel) {
context.addExport("paginationLinkTokens", t_1);
}
output += "\n\n";
if(runtime.contextOrFrameLookup(context, frame, "paginationNextUrl") || runtime.contextOrFrameLookup(context, frame, "paginationPrevUrl")) {
output += "\n  <hr />\n  <div class=\"inner-wrapper\">\n    <footer class=\"[ pagination ] [ pad-bottom-900 ]\">\n      <nav class=\"[ pagination__nav ] [ box-flex space-between align-center ]\">\n        ";
if(runtime.contextOrFrameLookup(context, frame, "paginationPrevUrl")) {
output += "\n          <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "paginationPrevUrl"), env.opts.autoescape);
output += "\" class=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "paginationLinkTokens"), env.opts.autoescape);
output += "\" data-direction=\"backwards\">\n            <span>";
output += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "paginationPrevText")?runtime.contextOrFrameLookup(context, frame, "paginationPrevText"):"Previous"), env.opts.autoescape);
output += "</span>\n            ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("icons/arrow.svg", false, "partials/components/pagination.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
callback(null,t_2);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
callback(null,t_4);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n          </a>\n        ";
});
}
output += "\n        ";
if(runtime.contextOrFrameLookup(context, frame, "paginationNextUrl")) {
output += "\n          <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "paginationNextUrl"), env.opts.autoescape);
output += "\" class=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "paginationLinkTokens"), env.opts.autoescape);
output += "\" data-direction=\"forwards\">\n            <span>";
output += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "paginationNextText")?runtime.contextOrFrameLookup(context, frame, "paginationNextText"):"Next"), env.opts.autoescape);
output += "</span>\n            ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("icons/arrow.svg", false, "partials/components/pagination.njk", false, function(t_7,t_6) {
if(t_7) { cb(t_7); return; }
callback(null,t_6);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
callback(null,t_8);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n          </a>\n        ";
});
}
output += "\n      </nav>\n    </footer>\n  </div>\n";
;
}
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/components/post-list.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "postListItems")),"length")) {
output += "\n  <section class=\"[ post-list ] [ pad-top-700 gap-bottom-900 ]\">\n    <div class=\"[ inner-wrapper ] [ sf-flow ]\">\n      <h2 class=\"[ post-list__heading ] [ text-700 md:text-800 ]\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "postListHeading"), env.opts.autoescape);
output += "</h2>\n      <ol class=\"[ post-list__items ] [ sf-flow ] [ pad-top-300 ]\" reversed>\n        ";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "postListItems");
if(t_3) {t_3 = runtime.fromIterator(t_3);
var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("item", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n          ";
if((lineno = 6, colno = 33, runtime.callWrap(runtime.memberLookup((runtime.memberLookup((t_4),"date")),"getTime"), "item[\"date\"][\"getTime\"]", context, [])) <= runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "global")),"now")) {
output += "\n            <li class=\"post-list__item\">\n              <h3 class=\"font-base leading-tight text-600 weight-mid\">\n                <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"url"), env.opts.autoescape);
output += "\" class=\"post-list__link\" rel=\"bookmark\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"data")),"title"), env.opts.autoescape);
output += "</a>\n              </h3>\n              <p class=\"text-500 gap-top-300 weight-mid\">\n                <time datetime=\"";
output += runtime.suppressValue(env.getFilter("w3DateFilter").call(context, runtime.memberLookup((t_4),"date")), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(env.getFilter("dateFilter").call(context, runtime.memberLookup((t_4),"date")), env.opts.autoescape);
output += "</time>\n              </p>\n            </li>\n          ";
;
}
output += "\n        ";
;
}
}
frame = frame.pop();
output += "\n      </ol>\n    </div>\n  </section>\n";
;
}
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/global/meta-info.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var t_1;
t_1 = runtime.contextOrFrameLookup(context, frame, "title") + " - " + runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"name");
frame.set("pageTitle", t_1, true);
if(frame.topLevel) {
context.setVariable("pageTitle", t_1);
}
if(frame.topLevel) {
context.addExport("pageTitle", t_1);
}
output += "\n";
var t_2;
t_2 = "";
frame.set("pageDesc", t_2, true);
if(frame.topLevel) {
context.setVariable("pageDesc", t_2);
}
if(frame.topLevel) {
context.addExport("pageDesc", t_2);
}
output += "\n";
var t_3;
t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"name");
frame.set("siteTitle", t_3, true);
if(frame.topLevel) {
context.setVariable("siteTitle", t_3);
}
if(frame.topLevel) {
context.addExport("siteTitle", t_3);
}
output += "\n";
var t_4;
t_4 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"url") + runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "page")),"url");
frame.set("currentUrl", t_4, true);
if(frame.topLevel) {
context.setVariable("currentUrl", t_4);
}
if(frame.topLevel) {
context.addExport("currentUrl", t_4);
}
output += "\n\n";
if(runtime.contextOrFrameLookup(context, frame, "metaTitle")) {
output += "\n  ";
var t_5;
t_5 = runtime.contextOrFrameLookup(context, frame, "metaTitle");
frame.set("pageTitle", t_5, true);
if(frame.topLevel) {
context.setVariable("pageTitle", t_5);
}
if(frame.topLevel) {
context.addExport("pageTitle", t_5);
}
output += "\n";
;
}
output += "\n\n";
if(runtime.contextOrFrameLookup(context, frame, "metaDesc")) {
output += "\n  ";
var t_6;
t_6 = runtime.contextOrFrameLookup(context, frame, "metaDesc");
frame.set("pageDesc", t_6, true);
if(frame.topLevel) {
context.setVariable("pageDesc", t_6);
}
if(frame.topLevel) {
context.addExport("pageDesc", t_6);
}
output += "\n";
;
}
output += "\n\n<title>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "pageTitle"), env.opts.autoescape);
output += "</title>\n<link rel=\"canonical\" href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "currentUrl"), env.opts.autoescape);
output += "\" />\n\n<meta property=\"og:site_name\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "siteTitle"), env.opts.autoescape);
output += "\" />\n<meta property=\"og:title\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "pageTitle"), env.opts.autoescape);
output += "\" />\n<meta property=\"og:type\" content=\"website\" />\n<meta property=\"og:url\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "currentUrl"), env.opts.autoescape);
output += "\" />\n\n";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"authorHandle")) {
output += "\n  <meta name=\"twitter:creator\" content=\"@";
output += runtime.suppressValue(env.getFilter("replace").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"authorHandle"),"@",""), env.opts.autoescape);
output += "\" />\n";
;
}
output += "\n\n";
if(runtime.contextOrFrameLookup(context, frame, "metaDesc")) {
output += "\n  <meta name=\"description\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "metaDesc"), env.opts.autoescape);
output += "\" />\n  <meta name=\"twitter:description\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "metaDesc"), env.opts.autoescape);
output += "\" />\n  <meta property=\"og:description\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "metaDesc"), env.opts.autoescape);
output += "\" />\n";
;
}
output += "\n\n";
if(runtime.contextOrFrameLookup(context, frame, "socialImage")) {
output += "  \n  <meta property=\"og:image\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "socialImage"), env.opts.autoescape);
output += "\" />\n  <meta name=\"twitter:image\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "socialImage"), env.opts.autoescape);
output += "\" />\n  <meta property=\"og:image:alt\" content=\"Page image for ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"name"), env.opts.autoescape);
output += "\" />\n  <meta name=\"twitter:image:alt\" content=\"Page image for ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"name"), env.opts.autoescape);
output += "\" />\n";
;
}
output += "\n\n";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"paymentPointer")) {
output += "\n  <meta name=\"monetization\" content=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"paymentPointer"), env.opts.autoescape);
output += "\" />\n";
;
}
output += "\n\n<!-- favicon -->\n    <link rel=\"icon\" href=\"/assets/images/favicon/favicon.png\">\n    <link rel=\"apple-touch-icon\" sizes=\"57x57\" href=\"/assets/images/favicon/apple-icon-57x57.png\">\n    <link rel=\"apple-touch-icon\" sizes=\"60x60\" href=\"/assets/images/favicon/apple-icon-60x60.png\">\n    <link rel=\"apple-touch-icon\" sizes=\"72x72\" href=\"/assets/images/favicon/apple-icon-72x72.png\">\n    <link rel=\"apple-touch-icon\" sizes=\"76x76\" href=\"/assets/images/favicon/apple-icon-76x76.png\">\n    <link rel=\"apple-touch-icon\" sizes=\"114x114\" href=\"/assets/images/favicon/apple-icon-114x114.png\">\n    <link rel=\"apple-touch-icon\" sizes=\"120x120\" href=\"/assets/images/favicon/apple-icon-120x120.png\">\n    <link rel=\"apple-touch-icon\" sizes=\"144x144\" href=\"/assets/images/favicon/apple-icon-144x144.png\">\n    <link rel=\"apple-touch-icon\" sizes=\"152x152\" href=\"/assets/images/favicon/apple-icon-152x152.png\">\n    <link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"/assets/images/faviconapple-icon-180x180.png\">\n    <link rel=\"icon\" type=\"image/png\" sizes=\"192x192\"  href=\"/assets/images/favicon/android-icon-192x192.png\">\n    <link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"/assets/images/favicon/favicon-32x32.png\">\n    <link rel=\"icon\" type=\"image/png\" sizes=\"96x96\" href=\"/assets/images/favicon/favicon-96x96.png\">\n    <link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"/assets/images/favicon/favicon-16x16.png\">\n    <meta name=\"msapplication-TileColor\" content=\"#ffffff\">\n    <meta name=\"msapplication-TileImage\" content=\"/assets/images/favicon/ms-icon-144x144.png\">\n    <meta name=\"theme-color\" content=\"#ffffff\">\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/global/site-foot.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n\n<footer class=\"c-row c-row--alpha c-row-footer u-bgcolor-neutral-x-light\" id=\"contact\">\n    <div class=\"o-container o-container--sm\">\n        <div>\n            <p class=\"u-text-center\">\n                <a href=\"mailto:dries.standaert@gmail.com\" class=\"c-link\">dries.standaert@gmail.com</a>\n            </p>\n            <ul class=\"o-list c-social__list u-text-center\">\n                <li class=\"o-list__item c-social__list-item\">\n                    <a href=\"http://twitter.com/driesstandaert\" target=\"_blank\" class=\"c-social__link c-social__link--twitter\">Twitter</a>\n                </li>\n                <li class=\"o-list__item c-social__list-item\">\n                    <a href=\"https://www.linkedin.com/in/dries-standaert-67635383/\" target=\"_blank\"class=\"c-social__link c-social__link--linkedin\">LinkedIn</a>\n                </li>\n                <li class=\"o-list__item c-social__list-item\">\n                    <a href=\"https://dribbble.com/driesstandaert\" target=\"_blank\"class=\"c-social__link c-social__link--dribbble\">dribbble</a>\n                </li>\n                <li class=\"o-list__item c-social__list-item\">\n                    <a href=\"http://codepen.io/driesstandaert/\" target=\"_blank\"class=\"c-social__link c-social__link--codepen\">Codepen</a>\n                </li>\n                <li class=\"o-list__item c-social__list-item\">\n                    <a href=\"/assets/images/pdf/driesstandaert-cv.pdf\" target=\"_blank\" class=\"c-social__link c-social__link--cv\">cv</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</footer>\n\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/global/site-head.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<header>\n  <div class=\"f-grid u-space-between\">\n      ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/logo.njk", false, "partials/global/site-head.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
callback(null,t_1);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n      ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/nav.njk", false, "partials/global/site-head.njk", false, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
callback(null,t_5);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
callback(null,t_7);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n  </div>\n</header>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/global/third-party-comments.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<!-- ADD YOUR THIRD PARTY COMMENTS CODE HERE -->\n<!-- COMMENTO EXAMPLE \n<div id=\"commento\"></div>\n<script defer\n  src=\"https://cdn.commento.io/js/commento.js\">\n</script>\n-->\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

