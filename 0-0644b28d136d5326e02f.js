(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{490:function(e,t,a){"use strict";var i=a(23);t.__esModule=!0,t.default=void 0;var n,c=i(a(20)),d=i(a(1)),r=i(a(106)),s=i(a(3)),o=i(a(0)),l=i(a(6)),f=function(e){var t=(0,s.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},b={},p=function(e){var t=f(e),a=t.fluid?t.fluid.src:t.fixed.src;return b[a]||!1},h=[];var A=function(e,t){(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),n).observe(e),h.push([e,t])},u=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",c=e.title?'title="'+e.title+'" ':"",d=e.alt?'alt="'+e.alt+'" ':'alt="" ',r=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",o=e.opacity?e.opacity:"1";return"<picture>"+i+n+"<img "+r+s+t+d+c+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+o+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},g=o.default.forwardRef(function(e,t){var a=e.style,i=e.onLoad,n=e.onError,c=(0,r.default)(e,["style","onLoad","onError"]);return o.default.createElement("img",(0,s.default)({},c,{onLoad:i,onError:n,ref:t,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});g.propTypes={style:l.default.object,onError:l.default.func,onLoad:l.default.func};var m=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,n=!1,c=t.fadeIn,r=p(t);!r&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,n=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,n=!1);var s=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:i,imgLoaded:!1,IOSupported:n,fadeIn:c,hasNoScript:s,seenBefore:r},a.imageRef=o.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,d.default)((0,d.default)(a))),a.handleRef=a.handleRef.bind((0,d.default)((0,d.default)(a))),a}(0,c.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&A(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:p(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=f(e),a=t.fluid?t.fluid.src:t.fixed.src,b[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=f(this.props),t=e.title,a=e.alt,i=e.className,n=e.style,c=void 0===n?{}:n,d=e.imgStyle,r=void 0===d?{}:d,l=e.placeholderStyle,b=void 0===l?{}:l,p=e.placeholderClassName,h=e.fluid,A=e.fixed,m=e.backgroundColor,S=e.Tag,w="boolean"==typeof m?"lightgray":m,E=(0,s.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},r,b),y=(0,s.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},r),v={title:t,alt:this.state.isVisible?"":a,style:E,className:p};if(h){var V=h;return o.default.createElement(S,{className:(i||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden"},c),ref:this.handleRef,key:"fluid-"+JSON.stringify(V.srcSet)},o.default.createElement(S,{style:{width:"100%",paddingBottom:100/V.aspectRatio+"%"}}),V.base64&&o.default.createElement(g,(0,s.default)({src:V.base64},v)),V.tracedSVG&&o.default.createElement(g,(0,s.default)({src:V.tracedSVG},v)),w&&o.default.createElement(S,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&o.default.createElement("picture",null,V.srcSetWebp&&o.default.createElement("source",{type:"image/webp",srcSet:V.srcSetWebp,sizes:V.sizes}),o.default.createElement("source",{srcSet:V.srcSet,sizes:V.sizes}),o.default.createElement(g,{alt:a,title:t,src:V.src,style:y,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:u((0,s.default)({alt:a,title:t},V))}}))}if(A){var M=A,P=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},c);return"inherit"===c.display&&delete P.display,o.default.createElement(S,{className:(i||"")+" gatsby-image-wrapper",style:P,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},M.base64&&o.default.createElement(g,(0,s.default)({src:M.base64},v)),M.tracedSVG&&o.default.createElement(g,(0,s.default)({src:M.tracedSVG},v)),w&&o.default.createElement(S,{title:t,style:{backgroundColor:w,width:M.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:M.height}}),this.state.isVisible&&o.default.createElement("picture",null,M.srcSetWebp&&o.default.createElement("source",{type:"image/webp",srcSet:M.srcSetWebp,sizes:M.sizes}),o.default.createElement("source",{srcSet:M.srcSet,sizes:M.sizes}),o.default.createElement(g,{alt:a,title:t,width:M.width,height:M.height,src:M.src,style:y,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:u((0,s.default)({alt:a,title:t,width:M.width,height:M.height},M))}}))}return null},t}(o.default.Component);m.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var S=l.default.shape({width:l.default.number.isRequired,height:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string}),w=l.default.shape({aspectRatio:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,sizes:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string});m.propTypes={resolutions:S,sizes:w,fixed:S,fluid:w,fadeIn:l.default.bool,title:l.default.string,alt:l.default.string,className:l.default.oneOfType([l.default.string,l.default.object]),critical:l.default.bool,style:l.default.object,imgStyle:l.default.object,placeholderStyle:l.default.object,placeholderClassName:l.default.string,backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,onError:l.default.func,onStartLoad:l.default.func,Tag:l.default.string};var E=m;t.default=E},515:function(e,t,a){"use strict";var i=a(3),n=a.n(i),c=a(4),d=a.n(c),r=(a(6),a(0)),s=a.n(r),o=a(15),l=a(141),f=a(142),b=a(5);function p(e){var t=e.children,a=e.className,i=e.clearing,c=e.content,r=e.fitted,h=e.hidden,A=e.horizontal,u=e.inverted,g=e.section,m=e.vertical,S=d()("ui",Object(o.a)(i,"clearing"),Object(o.a)(r,"fitted"),Object(o.a)(h,"hidden"),Object(o.a)(A,"horizontal"),Object(o.a)(u,"inverted"),Object(o.a)(g,"section"),Object(o.a)(m,"vertical"),"divider",a),w=Object(l.a)(p,e),E=Object(f.a)(p,e);return s.a.createElement(E,n()({},w,{className:S}),b.a.isNil(t)?c:t)}p.handledProps=["as","children","className","clearing","content","fitted","hidden","horizontal","inverted","section","vertical"],p.propTypes={},t.a=p},516:function(e,t,a){"use strict";a(48);var i=a(538),n=a(0),c=a.n(n),d=a(38),r=a.n(d),s=a(26),o=a(489),l=a(515),f=a(490),b=a.n(f);a(539);t.a=function(e){return c.a.createElement(s.StaticQuery,{query:"692957538",render:function(t){return c.a.createElement(p,Object.assign({data:t},e))},data:i})};var p=function(e){var t=e.data.allMarkdownRemark.edges;return c.a.createElement(o.a,null,c.a.createElement(o.a.Column,{mobile:0,tablet:3,computer:3}),c.a.createElement(o.a.Column,{mobile:12,tablet:9,computer:9},c.a.createElement("h3",{class:"header-project"},"Projects.")),c.a.createElement(o.a.Column,{mobile:12,tablet:3,computer:3},c.a.createElement("p",{class:"left-label"},"Services"),c.a.createElement("ul",{class:"left-info"},c.a.createElement("li",null,"Data Visualization"),c.a.createElement("li",null," Machine Learning "),c.a.createElement("li",null,"Data Analysis + Cleaning"),c.a.createElement("li",null,"UX Design"),c.a.createElement("li",null,"Web Design + Development"),c.a.createElement("li",null,"Graphic + Branding"),c.a.createElement("li",null,"Architectural Services"))),c.a.createElement(o.a.Column,{mobile:12,tablet:9,computer:9},c.a.createElement("div",{className:"projects"},c.a.createElement(o.a,null,t.filter(function(e){return e.node.frontmatter.title.length>0}).map(function(e){var t=e.node;return c.a.createElement(o.a.Column,{mobile:12,tablet:6,computer:4},c.a.createElement("div",{className:"project-preview",key:t.id},c.a.createElement("div",{class:"imgBox"},c.a.createElement(r.a,{to:t.frontmatter.path,class:"itemLink"},c.a.createElement(b.a,{className:"underline",fluid:t.frontmatter.cover.childImageSharp.fluid}))),c.a.createElement("p",{class:"date"},t.frontmatter.date),t.frontmatter.tags.map(function(e){return c.a.createElement("div",{class:"tag"},e)}),c.a.createElement("h4",{class:"noPad"}," ",c.a.createElement(r.a,{to:t.frontmatter.path,class:"itemLink"},t.frontmatter.title)),c.a.createElement("p",{class:"excerpt"},t.frontmatter.subtitle)))})))),c.a.createElement(l.a,{hidden:!0}))}},538:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{excerpt:"Context The grape harvest is dependant on seasonal temperatures. To understand how climate change…",id:"1e0bd9fa-b2b7-557f-9982-de0801e8af24",frontmatter:{title:"Global Warming & Wine",tags:["python","d3","illustrator"],subtitle:"Looking at how 650 years of weather has impacted 30 wine-producing regions in Europe.",date:"2018",path:"/wine",cover:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAIAAAC9o5sfAAAACXBIWXMAAC4jAAAuIwF4pT92AAABNUlEQVQoz21R7W7DIAzs+z9f97fTNKVJaEIKwYCDcXakH9OkWQhZ9p3ts0/M3HXdMAz4r4f1fT9NkzEGP3ykYoz7f3aqtXrvQwjrujrn8MMvpdTDRAS+VgVUVRH5Q24hbblt21JKevj1SUVG3wBkiQjhSARwI0utfHgNJK0VPMGrkomAoxgKM3J6QHatfddB0UEWgezHGJVL9oEpOXefx3Gx1kfydvV3T97nSCXZvYRpslD6S37p0ZJ4me/Je558MiG7wjMlS2GY3de3/TjzdB2MWZalkYtIznk/5i5ZmWtct5JrDlJS04w5d16r6+V22boz95/jeHuOjYb51Rm9C4ptimU/VwWpkjGtZlPoW+kioZ+NHccBI59QQJpVnKQ1x2H2x+Yav9USiTHlzB5HxPaI3qf6AXrxCnAZwHb8AAAAAElFTkSuQmCC",aspectRatio:2.284011916583913,src:"/static/0531597bdd36ba96a0e14d58a0b0868a/97318/one.png",srcSet:"/static/0531597bdd36ba96a0e14d58a0b0868a/1f258/one.png 175w,\n/static/0531597bdd36ba96a0e14d58a0b0868a/4cb21/one.png 350w,\n/static/0531597bdd36ba96a0e14d58a0b0868a/97318/one.png 700w,\n/static/0531597bdd36ba96a0e14d58a0b0868a/26d2c/one.png 1050w,\n/static/0531597bdd36ba96a0e14d58a0b0868a/7ed75/one.png 1400w,\n/static/0531597bdd36ba96a0e14d58a0b0868a/105a1/one.png 2100w,\n/static/0531597bdd36ba96a0e14d58a0b0868a/ec8eb/one.png 6900w",sizes:"(max-width: 700px) 100vw, 700px"}}}}}},{node:{excerpt:"Context I worked as a data scientist intern at Parse.ly for the summer of 2018 and this was my…",id:"af14ea67-ce25-5a0c-8cdd-efe28ff8fba9",frontmatter:{title:"Competitive Analytics",tags:["D3","App","Python","SQL"],subtitle:"A competitive benchmarking software prototype for digital content. ",date:"2018",path:"/benchmarking-tool",cover:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAABYlAAAWJQFJUiTwAAABs0lEQVQ4y3VTTW/bMAz1//85A3YZOmCHATv10l3aw9DlAwni2LITfVuyX0nFsp06JfxgSaZIPj66wCcbhmFaG2MhtUrQxkBpA6loTe/st/RnK5aH/F7COodWtWi0wNVISKkTjHEr34wiLbAIiMeZ2Vy0uNoW0l4QYodHVqyoDnOlfd8nxBgThkhBvUMMtOjpifO3EMKiwjGY8hLVtYSy8o4GB70Q9ZfdM/78/4XX8gVCVxQo3PmsAvroYL1N2eaqb87/Tm/4+fodP96+4ff7E/4en3GSB3Qj9amHeeO9p2YbaKVhrZ2oZHDQ+3EA9TGk5JnyXQ9Tr3q6PPbtJhAmOqHr0DH6gH7oHyqcAqbFeNlTZe5CCtK4pCS09/t9gt1uYTcb2FZMib4cm4kFV0ZVDKwo7aPWiHWNjtDs9hCbLcy5xDAqmvwzxqKKTJd7wOA/gqnl3jo6s74jlRVB0yz6G6OvKuSLHKhpGgghcC7LJA6btg7Hc41DWWF3PGF7OKFqm1XflrM8qZwrZGRFs8KeKq5Fg6oWNNh+Fo0Z0F5RawL5zaI8sM/nt+Bh9d0Si6uUKSnbB4/gSoiEgCuDAAAAAElFTkSuQmCC",aspectRatio:1.4205607476635513,src:"/static/b77c95df43fd96766be453136b92f052/97318/ScreenShot2019-01-05at1-6fd25967-9311-4f20-b214-c3e66067f3ba.00.47PM.png",srcSet:"/static/b77c95df43fd96766be453136b92f052/1f258/ScreenShot2019-01-05at1-6fd25967-9311-4f20-b214-c3e66067f3ba.00.47PM.png 175w,\n/static/b77c95df43fd96766be453136b92f052/4cb21/ScreenShot2019-01-05at1-6fd25967-9311-4f20-b214-c3e66067f3ba.00.47PM.png 350w,\n/static/b77c95df43fd96766be453136b92f052/97318/ScreenShot2019-01-05at1-6fd25967-9311-4f20-b214-c3e66067f3ba.00.47PM.png 700w,\n/static/b77c95df43fd96766be453136b92f052/26d2c/ScreenShot2019-01-05at1-6fd25967-9311-4f20-b214-c3e66067f3ba.00.47PM.png 1050w,\n/static/b77c95df43fd96766be453136b92f052/7ed75/ScreenShot2019-01-05at1-6fd25967-9311-4f20-b214-c3e66067f3ba.00.47PM.png 1400w,\n/static/b77c95df43fd96766be453136b92f052/672ec/ScreenShot2019-01-05at1-6fd25967-9311-4f20-b214-c3e66067f3ba.00.47PM.png 1824w",sizes:"(max-width: 700px) 100vw, 700px"}}}}}},{node:{excerpt:"Intro To go right to the implementation:  Finished tool   now in use by the fire department (may…",id:"cad930f7-dbed-5477-ab65-b3a6a112c538",frontmatter:{title:"Predicting Fire Risk",tags:["ml","python","js","web"],subtitle:"A web-based tool that uses machine learning to reduce the amount of fires in Charlottesville.",date:"2018",path:"/fire-risk",cover:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABYlAAAWJQFJUiTwAAACsklEQVQ4y01S2XLaQBDUX8QcxhCD48JAiCVAQgKhC3QAEpK4bGPHRZ5Slac85es7vbKdysPU7GpWPd09I1UqFQyHQ6iqit7XPuqNz2h3Ori5vUWlWkWtdoVOt4sqz6VSCeVy+V+Ie7PZxF27jeZ1E5d8I9VqNcwsC9bMRL/TRuu6AV1W0G3d4NPFBa7qdbTv7lAiwAUB/o+P+jVBq5eXBQGp3mig2+2h/aUFud3CoHML+aqOfq3+xuqdichlqvnIolZ5rwvgj++SOlCgKDJmEwOh5yBfL/GwWcO1ZlgtPMQMn+eBfA9DH2OiqVg4NjzHwpzZNifIVyHSZQB1OICkayMMeAgsE9+3KdJgjizyEYcB4kBkvwASkawieGzqs4k1ncAhmE/Q9dxDxKzc30MS7EToYxXn4w5PaYznXYafT0dE/FEw8mZTHJM1zkmMvedi58+xiUTDRdHQtS0osgxZAGqjETQyHFG6rmlwOJyprmPBHPMnk1YkywjnwxZ/0gy/wwiPtoOM1qSM035He0z0el1o3BQpnLtwDA3GaAid4AYZZUsfebjAQ57CoqyAkn69nnB+PsIja5ey176HNJwjoUXC32/f+gTtQZoT3WNsSP9AWYHrIHQt5Lw/5xvKNWGT5SlLEPo+5pS3Yi3y37xOordhdLi7Y5KSUk7oISH1LIZNYHOiFyxVFgPXLvwRE99EfMcGr4ccEzFthktvD/GqIKMoSmGTdNjEhUcpOyXsuF2GCAQIH4spjunLzNCxY/38eEDGSQdcGfFNU0fw7RnWrPm0wTankMT4F5ycw8uSD39wdYTMjJLWjJhenbYbPNHPl31eMN3Gy0L2mFLFqghggaNTmZTS/MjzCobHzQov2wyLqQGDj8SyZzRdeJlT2okLv6MCsU77ZFWoGXDlZA5Ffh/MX7ZOvbj+Yqi1AAAAAElFTkSuQmCC",aspectRatio:1.563151796060255,src:"/static/7c02a9551fd3c3c330b3d08d6c2b4fff/97318/ScreenShot2018-12-27at2-bb7f504f-a15e-4610-8926-cf831f6b1916.53.19PM.png",srcSet:"/static/7c02a9551fd3c3c330b3d08d6c2b4fff/1f258/ScreenShot2018-12-27at2-bb7f504f-a15e-4610-8926-cf831f6b1916.53.19PM.png 175w,\n/static/7c02a9551fd3c3c330b3d08d6c2b4fff/4cb21/ScreenShot2018-12-27at2-bb7f504f-a15e-4610-8926-cf831f6b1916.53.19PM.png 350w,\n/static/7c02a9551fd3c3c330b3d08d6c2b4fff/97318/ScreenShot2018-12-27at2-bb7f504f-a15e-4610-8926-cf831f6b1916.53.19PM.png 700w,\n/static/7c02a9551fd3c3c330b3d08d6c2b4fff/26d2c/ScreenShot2018-12-27at2-bb7f504f-a15e-4610-8926-cf831f6b1916.53.19PM.png 1050w,\n/static/7c02a9551fd3c3c330b3d08d6c2b4fff/7ed75/ScreenShot2018-12-27at2-bb7f504f-a15e-4610-8926-cf831f6b1916.53.19PM.png 1400w,\n/static/7c02a9551fd3c3c330b3d08d6c2b4fff/105a1/ScreenShot2018-12-27at2-bb7f504f-a15e-4610-8926-cf831f6b1916.53.19PM.png 2100w,\n/static/7c02a9551fd3c3c330b3d08d6c2b4fff/ee503/ScreenShot2018-12-27at2-bb7f504f-a15e-4610-8926-cf831f6b1916.53.19PM.png 2698w",sizes:"(max-width: 700px) 100vw, 700px"}}}}}},{node:{excerpt:"Context This semester-long housing studio began by looking at the human scale and minimal spaces of…",id:"c176f1b5-ec35-56f7-a5b8-d33d45081dfb",frontmatter:{title:"Minimal Footprint Housing",tags:["Arch","Housing"],subtitle:"Designing a dense DC apartment complex based on how people live in compact spaces.",date:"2018",path:"/inside-out",cover:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAABmklEQVQoz02S22rCQBCG8/4PYy8reGFEvLBiFESsTaLEmMRj4vms0/2mrHRhIJud+eafg3M+n+V2u8n9fpfH46E2nU4lTVPZ7/eS57nEcSw/vi/L5VKKopDr9ar+GHf8Xq+XchweMQtLkkSBOAFIs0xms5kMBgMJx2OZz+cK2Ww26g+Uc7lcJDO+jv1xPB4Vsl6v1RkI3wD9IFBQbBJFk4ksFgv1AYKhbLVayXa7FQfYbreTscme54U+jEYjSUzJWfYHRTUKJwb2PRwqODQ+h8NBW4JivqnU4RKGodLJygP9803PhiY4MG9urSbtdlsCo5SEtKRSqWgyqoIBmGodgrmgkgwc7qEJ7na78tVqSb/f1xYQiNrPclmq1aqWbvtJDHDHSraTZhCU53meNBoN6fV6egeYG0Wl0oe4rqsAqrLTRpD20MIwMlI+JUVRpIPQYZi1AQioXq+rIuKez6fGAadVmE6ZXWTkDAOALcUm4huVzWbzvQXEAfzfP+0hP3Gyy4wSpLNGLCtvKOx0Ohp4Op3eu0fP7T5yUPgLyGruI4gJvY4AAAAASUVORK5CYII=",aspectRatio:1.948955916473318,src:"/static/717c551638e6a7e775d59e587adb42fa/97318/ScreenShot2018-12-31at5-a8b9c44b-7635-4e71-ae77-3ee3a97e546c.21.42PM.png",srcSet:"/static/717c551638e6a7e775d59e587adb42fa/1f258/ScreenShot2018-12-31at5-a8b9c44b-7635-4e71-ae77-3ee3a97e546c.21.42PM.png 175w,\n/static/717c551638e6a7e775d59e587adb42fa/4cb21/ScreenShot2018-12-31at5-a8b9c44b-7635-4e71-ae77-3ee3a97e546c.21.42PM.png 350w,\n/static/717c551638e6a7e775d59e587adb42fa/97318/ScreenShot2018-12-31at5-a8b9c44b-7635-4e71-ae77-3ee3a97e546c.21.42PM.png 700w,\n/static/717c551638e6a7e775d59e587adb42fa/26d2c/ScreenShot2018-12-31at5-a8b9c44b-7635-4e71-ae77-3ee3a97e546c.21.42PM.png 1050w,\n/static/717c551638e6a7e775d59e587adb42fa/7ed75/ScreenShot2018-12-31at5-a8b9c44b-7635-4e71-ae77-3ee3a97e546c.21.42PM.png 1400w,\n/static/717c551638e6a7e775d59e587adb42fa/105a1/ScreenShot2018-12-31at5-a8b9c44b-7635-4e71-ae77-3ee3a97e546c.21.42PM.png 2100w,\n/static/717c551638e6a7e775d59e587adb42fa/03691/ScreenShot2018-12-31at5-a8b9c44b-7635-4e71-ae77-3ee3a97e546c.21.42PM.png 3360w",sizes:"(max-width: 700px) 100vw, 700px"}}}}}},{node:{excerpt:"Problem 63 million people in rural India are without access to clean water. Over 20,000 habitations…",id:"a6a1ae80-0f78-5b8b-8f72-04569d9dba93",frontmatter:{title:"Purifying Water in India",tags:["startup"],subtitle:"Using the moringa root as a natural and sustainable method for water purification.",date:"2018",path:"/amori",cover:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsTAAALEwEAmpwYAAADJElEQVQozwEZA+b8AG1rOXRyQG5qPmtmOmdeOWNaNmZePW5jR3BlRnFnQjEnGD4zI05HMiYjGmZdNGJaMmhfNzciE1lSMnxwSABrazpjYDFwbTtzbkBtajtqZzhlYjhkYDhlXj5rYkVjUUJXRixSRCc6Kxl0bkFjWjVaSENqVEp8aliGdlQAd3VAa2c3bms7b2w7c3FBb25Damo8bW09a2c5npmD8+/upZ6LWk4jSzkTaWAyYVIyOiE2QilHbVdEjn1aAHp0QHZvPXhrQHVuPXdwQH5zTntwSmpjPXBqSOro4v///+Hd21dHIjwuB1pKLVJDLicgMDMiMIBtT5OIaABsZDNxZDh8a0GEc0l2bj56b0KKelIzJRafmpfm39ion5Pv7uuUjXlBLhJoWT47LiIPERgwJRySf1ybj28AbmQ0fGZCfGtEbmU4Y18ub2Y5eW9GMScRzcnIpJqNLBkAr62kzMbDXU4xf3VYRT41BgcQVEc3lIBbkoNkAG9nNod3TZmHYoFzSXBkOHhtQGlcNjQiDLiupenq6aOYj/Lx8amnnVhLKYx+XVlOPDInH3BoUYJ1V3pxXABqZjVqZDaFc018a0NrYTVrYDReTiwnGgoyJRi0raLQzMi6saVPPyxyZkp2a1RrYExuZVd6cVtyaVBoXEIAZmM0a1w1d2E7dV03d2I8hnNPe2hFXUwxV0kyXkstRi4ZXUcsYlZHc3BjkI6Ffnlvg392d29dZVtDc2hMAGljNm5cNWpRLWtWNGVRMox/Zamdip+Wfauki6WYhYZ1ZpODbpGLf62rpqGajXdsWRsVD0lCM25kSW5iRgBxaD1yZDpeSypYRCZWQiOZjXmyq59qaGR1a1iWhmqilX6ekXmWinWQg26ajXR/aVQZDAJmVkOHdVV9bEwAdGlAcGY6aVk0VT8gSzcdPDUpQTkuFxEORDssUUMtcFw6iHdXgW1MeWVDfG9eb1RFPikZWUQuinhXhHFQAGhbNV9MKUo4HTgoFS0gEQYFAhoSDDgpGVhKMWJNNWpSO3ZfOnhkPnxoQ2ZSMF9LNFxIM1hCM414XYh2Vdc/JGBbJURzAAAAAElFTkSuQmCC",aspectRatio:1.565079365079365,src:"/static/cd3d1291340b493c5902b56e4321090b/97318/cover.png",srcSet:"/static/cd3d1291340b493c5902b56e4321090b/1f258/cover.png 175w,\n/static/cd3d1291340b493c5902b56e4321090b/4cb21/cover.png 350w,\n/static/cd3d1291340b493c5902b56e4321090b/97318/cover.png 700w,\n/static/cd3d1291340b493c5902b56e4321090b/93d8a/cover.png 986w",sizes:"(max-width: 700px) 100vw, 700px"}}}}}},{node:{excerpt:"Problem People are estimated to waste 2 hours a day at work from distractions. One of the best…",id:"a3b6a086-21d1-5c60-b453-dcdddf338197",frontmatter:{title:"Inducing Flow through VR",tags:["Unity","C","VR","Behavior"],subtitle:"Using behavioral insights with virtual reality to achieve a flow state.",date:"2017",path:"/flow",cover:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAABYlAAAWJQFJUiTwAAAESUlEQVQ4y02T209bdRzA+w/5tBeNZjpGxgZyK1cpg5VRKL23lBZ6oy1t6Y320HtLCwUGAwZsS5ZlMcOYmWzG7GUmPvniixoHBS9jDF8+/qhGffjkm5Oc88nndzmy4vYamY1lMncqpNfLpASLayWk1SLxcoa5dJRgNk4oEydSLTMtZVDYIgxOR1AIhmdijLgkhifjGANlZNnNZaRqoU5iJU9iOcdCJUu8kiFSkvBKIWaTofoMVQpY4kn6bCE0wTTWZIlxMXsmQ3QZAqj8WWT5u1VRVSJ1USWkSSFNirlQThPNL2BwW5GPDGJwmAmXslhiCYbccdz5Kt7SOs5cFXUwRbdlTsiFsLS7TXpTLFuQurOCtF4hWlhkQjuG3jKG02vC5tTh9lkwO+yMW2dQziVxldbQJXJYF5cwLuTpmPQxFhLC8v098jvb5Lbvktm6iy0exR/20TfYz81xBU6PHrNtDKNVhT8eRuf0MOpL4IjlMYfTuJfWmIimGXCH0cQLyJb2dins7lDa3xOl6wQT88RCLiwWDS0dTTS3XedaaxNdXc04/bOYA0GGHfO4fGlRn2ImW2amVGUmt8xkpnJRuE92a5PUcpF8UWJxwYc/6CYoxZB3t9J4/Somix6bTYPFPY0+HEIuKnvMTrr1TroE3QYnndMeRsISsmSlSEyap7i0iJSKEC3mSN/bofjwAUbHFA0NHyHv68RgHMWdkfCtruAQ7+hjERLVNZ5+/YpHBy94/Pwlj795hSwS85HNxUnFvKRjfpbicxQibqJiH63OKdqbr3Bb2Ucs6sHjtWMza5nRjWGz6Hj05AnHp+f8ePQrP9d+46fDE2SLqTDxZICix8ju1AjrxptsmIeo6Abw9zcTHOslap9gNWAlOtiGr6cJc2sDHZfeY7tU4PzdObVfXnNyVOOkVkNmt2sJBGzk/RY2jAqyQpDTDrIp5HUmb7FlVXLPdpsV01D9uaAdYOiTD9hfKfP27JzD14fUhPACmdKk5UZfL8rhIRwjPajaGvEPylm3DFMUldt2FQ9dEyS1Q+KkO8nqFGwIqbrhfXZE4dm7P/8VHteOkck1cnpdbj5WB7Dnx7l2swFVUyMbU0rSqi6WhLRkGKS5o4NLN9ro6e1mS5Rb+1vZ37vH2dszjv4vHDC0Y40o+FQlPlLeoLn/Goqrl8lP9CNpFeg147TIO+lV6zB6A/ilNFWXEZ9/is+fP+P09zccHR79J1QYhmkdaqFd2Um/pp1RfTufNV7Gr2glLn49bySC0zFNIjBLJhyg4LGyPjWKJ+DgybMvOP3jb+GFrC58+MLEwbda7j9V8+BAS6p8i4ErHzLRcoWUuo854xhx0ygJdT9l/YC4BQo2xf46vDYef/m0Xnj4T2H9UGKrGr577ePlD25efD+LLXgbU6+4yH0dlCZVbDnU7Lg07HkNAiN7PhP3/WbmF+Y4eP4Vb9+cUhNlJ8cndf4Cb8N8kNapk1YAAAAASUVORK5CYII=",aspectRatio:1.1840490797546013,src:"/static/83a4e43b79a2374e9a130e65f5e0a9fd/97318/cover.png",srcSet:"/static/83a4e43b79a2374e9a130e65f5e0a9fd/1f258/cover.png 175w,\n/static/83a4e43b79a2374e9a130e65f5e0a9fd/4cb21/cover.png 350w,\n/static/83a4e43b79a2374e9a130e65f5e0a9fd/97318/cover.png 700w,\n/static/83a4e43b79a2374e9a130e65f5e0a9fd/26d2c/cover.png 1050w,\n/static/83a4e43b79a2374e9a130e65f5e0a9fd/de47f/cover.png 1158w",sizes:"(max-width: 700px) 100vw, 700px"}}}}}},{node:{excerpt:"The Challenge In downtown Charlottesville there is a two-block empty parking lot where the…",id:"cae57076-e32f-559b-bda0-593e1780f657",frontmatter:{title:"Battling Food Insecurity Through Architecture",tags:["grocery","arch"],subtitle:"Placing the Farmer's Market at the forefront of slow food initiatives.",date:"2017",path:"/food-design",cover:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAABYlAAAWJQFJUiTwAAAEI0lEQVQ4yyWUeVOTVxTG329Xx2WqTq1jrQphBARUSJCQfSMJIWRlD5sgsigkLAmGsENIiBKQpWKLuFBbl1Gn036AX0/TP56Z+97znnOf5zn3XOXNwRqfj5/y7ffnfH6zxYdXOd7+kubV3hovd9Z5sb3B89wav+1m+CixD8db5DNLHORzhb0XWysc7WV5e/iMV/tZlPcvN0g87sdtM+Dz2Jkev8/x3jonh1ne/5rjj6Mt3h1u8vpADtmVZMFBPs1qKkFP2E3QbSQSdJJemJLYOspONklLsInuNj/TE0PMzoyxOh/ly9ttvp3s8PeHff75tM+39/8rODnMsLEYJxJqJGivo9VZR9BWTVezif1cEmU1PkJiepzk7CS7mylifWH62xr582iTL2/yUjhfKP6XFPx6ss3xfppEbJTeSJhWXwMhj4XoWITUk1G20gmU9NwYurpa/MEwqfgEbS4bgyE325kkzzeSvHi2xGux4DC/JAwW2c3OkZwaJhhsFpu0eBv0dIecDPaGxPNFlK/vtugKuSgtukqZ6joOu4nN5UkWExOCKNmlOPn0rOzNFHzKLkVZT43R1+HFfK8Mi6YEh7aS2MM2Ph1vonw8yoiZq8w86icz/4i9bIJtKZBdnmUnk+Lg6Ry5lSk2FmKk5ydYEWn/IbcSY2qknd6wg8nhdul2kpf5OWlKZpaZkX4GQj7WkxPs5ubZyz1hbzMh8hKFgjsb8cJ6Jz1NbnmchfgD1uZGyK9HebYa5enKY7bWJuQ7hjIz1s1oV5Bu8e5ByMvy9DCZpDBYGGc5MUJycpCY/NPXGcCk11JZUUFRUTEqlYq62ruEmh34PTb8jVYCAmUg0EBfk43eJjsdLgtuYz2GmrtUl9+i5EYxP/5whdNnLnLq9PkCzpy9wNlzFzhz7iLfnfqe8xcuUVVZie6ehtqaapT7YSedTWY63Wb8VgNeoxarVk1F+U10mts4jBpamy3YDBqqq8qp19yhouymxMsoKS4RtipKS0u5du0GV3++gdLf48Uql9Ok1WCsu4dOXS3dqybs1tMbshFw6gm4DNTXVHH1yk8UX7/GlcuXhfklbqqKsOhrcdt1qNV3cDrrUdaSQ3h8ZnRmDXVqNVrxxWaooddv4WFrAy6Dmtu3StHVVGCqrWSoxUqT3L92sSoV62Em2sn9ATetET2OQJVI7vTTEXbhcRlxWvX4RHpXuIHusJ2WRpMk19NgrifsMbIS7+MgGyWzNMzK4hDdA04svkrU1iLuGgVaFYrPZRKPHHQEnIVT/R4zbWErne02elo9UtxFpEUY+GzMRntlvCYZfRRCZ69CaypHoxVobqEVm/RimzIY8dPd0iiJ7sLEtPkdtPjN8mCYCEr3Q16bxN10Sizstcuj4GZExswurPW1amFvEGVGUWYXQm7+BV+Ci4r7q60rAAAAAElFTkSuQmCC",aspectRatio:1.2614155251141552,src:"/static/736f5e9c1a96a52756817201ed1049fa/97318/ScreenShot2018-12-28at9-e37b47b2-b830-4661-8e40-d1ce7adee272.00.50PM.png",srcSet:"/static/736f5e9c1a96a52756817201ed1049fa/1f258/ScreenShot2018-12-28at9-e37b47b2-b830-4661-8e40-d1ce7adee272.00.50PM.png 175w,\n/static/736f5e9c1a96a52756817201ed1049fa/4cb21/ScreenShot2018-12-28at9-e37b47b2-b830-4661-8e40-d1ce7adee272.00.50PM.png 350w,\n/static/736f5e9c1a96a52756817201ed1049fa/97318/ScreenShot2018-12-28at9-e37b47b2-b830-4661-8e40-d1ce7adee272.00.50PM.png 700w,\n/static/736f5e9c1a96a52756817201ed1049fa/26d2c/ScreenShot2018-12-28at9-e37b47b2-b830-4661-8e40-d1ce7adee272.00.50PM.png 1050w,\n/static/736f5e9c1a96a52756817201ed1049fa/7ed75/ScreenShot2018-12-28at9-e37b47b2-b830-4661-8e40-d1ce7adee272.00.50PM.png 1400w,\n/static/736f5e9c1a96a52756817201ed1049fa/105a1/ScreenShot2018-12-28at9-e37b47b2-b830-4661-8e40-d1ce7adee272.00.50PM.png 2100w,\n/static/736f5e9c1a96a52756817201ed1049fa/12ff4/ScreenShot2018-12-28at9-e37b47b2-b830-4661-8e40-d1ce7adee272.00.50PM.png 2210w",sizes:"(max-width: 700px) 100vw, 700px"}}}}}},{node:{excerpt:"Solo cups are recyclable in Charlottesville yet they're often thrown in the trash or cast to the…",id:"025acb19-bdb0-5adc-b6d8-8495866e1cdf",frontmatter:{title:"Recycled Architecture",tags:["Sustainable","Arch"],subtitle:"Designing a sustainable structure to act as a biofilter.",date:"2017",path:"/pure-pod",cover:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAADr0lEQVQ4yw3PaUzbBRzG8cbERBMNSIAGkHGVAhsd9wYZ6xjliFQ2oPQYjLbj7sCN4MiC2TiiHMMdwBot5U4n578wLjc5RRAQ2Tg2mYMXLosmRhOjr3zn1774vXmS55PnJ/I2eiLO8sBZ6cJbGlfclM745YnxvRyMb6GMuGIZ4cpopBf88Lss5ojeAy+jO156Tzwu+DguAFetH04ab9zzAhFJKnxxzX4HN50r7ulOvJfyLi4qF+Ir4glRRRKsCSUwVUaQMpYAzTE80xxI1vtI1H4EZHnhrhbjmeNNYIGY5AoVolMfydC3XCSpOhlnB+iU9iZOKSJcEt7AO/ptAtRh+JxPwkehI77sKr6qCNwz3RArXZEaJEj1UtzSfHHO8MYjPwTR9qvX7P/5Lx2Ppgg4cxTPc8EEVJsIKSsi+FMriZY9tL2HaNoOKLO8Rmv9AfW9Ic5eK0ZiOEJoSSRH86Xk1Bq51HgD0d7vfzP67ADTzBYRLePI7q6Rfm0WVc08uaZhB/gro92rPP2kl9Xr3cw1PWTZvMzG4DrmDgsn9XKCc0LJLjJS2XAHUdf+HySO/0VyuYAx14w5KgchREFfeDqWhHwK23ZZMC/wvM3OsmPZ41obK7W9rNX1sWOdZ7n1AcODAmb7BB2D/Yju1/dTLDPwlX8YE+GnGUvIZkCmwCrXUt68gL1hhlfNdp6PbfLL7FNW2saZuTvBwzobE1UdbDjgJ+YJZm/cp7XK8fLi8WhqT6XSKw2jR6Hhiw8MdMt1mBPyuNqywnpNP5u3Bdb6vmF3cp2toQV2O6dY6nrMsm2RzbEf2bQtsdjcw1B7K6JHkmN0ZRTTnlnEHUkYQ1FJLMQoaUg1UWPdY6frW75rGmbTbGe/92t2hDVerB5y+P0BP2+8QBifpvReKab2DEqETEQjCUq+PKdhKzSK33xD+Ufsz3/uXli1N+m4Pct+rZntzjkOFg/4aXqfl8NPOGyx8TKnmLXyOoq6c9HYP0Q3piRHOI+ooDWZzJYI6m8ex1J5gs56Bc1V/lR39THZ+YzdW5NsW5bYqu/BnmWkSRHLrZRQ6ivjafxcjWlRi8GeivZBAhdHHaBuJJ48QY5aiCd78gzqqSQUA9Eou0ppavoY83U5jZ+dxHTFi8J6CereSLIEJVlj6eQKCkqGTziyGPRCCoWOvsg4EIdhVI5xLBqT/TTa/khyh2UYR+PQ2SMwTkspmo+hYCKIXFsQqu5Yrszp0E/GOcAMLg0mYhyRox09i8oWzv8L0Vz4S6V6GgAAAABJRU5ErkJggg==",aspectRatio:1.5047021943573669,src:"/static/7cbeddd6bb8c1d42c6b1f028dbc6411f/97318/Untitled-1b27da8e-7fe3-4875-b5a8-75571595856e.png",srcSet:"/static/7cbeddd6bb8c1d42c6b1f028dbc6411f/1f258/Untitled-1b27da8e-7fe3-4875-b5a8-75571595856e.png 175w,\n/static/7cbeddd6bb8c1d42c6b1f028dbc6411f/4cb21/Untitled-1b27da8e-7fe3-4875-b5a8-75571595856e.png 350w,\n/static/7cbeddd6bb8c1d42c6b1f028dbc6411f/97318/Untitled-1b27da8e-7fe3-4875-b5a8-75571595856e.png 700w,\n/static/7cbeddd6bb8c1d42c6b1f028dbc6411f/26d2c/Untitled-1b27da8e-7fe3-4875-b5a8-75571595856e.png 1050w,\n/static/7cbeddd6bb8c1d42c6b1f028dbc6411f/7ed75/Untitled-1b27da8e-7fe3-4875-b5a8-75571595856e.png 1400w,\n/static/7cbeddd6bb8c1d42c6b1f028dbc6411f/ef1f5/Untitled-1b27da8e-7fe3-4875-b5a8-75571595856e.png 1920w",sizes:"(max-width: 700px) 100vw, 700px"}}}}}},{node:{excerpt:"\"Garrett, Brendin, and Patrick's marketing strategy had a great breadth of execution, including…",id:"db01cfe0-7b7e-57d4-a176-433f30904b3b",frontmatter:{title:"Redefining a Brand",tags:["Marketing, Consulting"],subtitle:"Creating a brand strategy that finds its niche in the market for an athletic bodywash company.",date:"2017",path:"/nasty-athletic-care",cover:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAADmklEQVQ4yx2T+U/bdRjH+4cYEoGI2TLnxTEIsI1SjvWgUI4C31IoLaWwltoCHWc5tMBWznIMKZechZZp1IBOM8dY5kJiYkycY8Ysc3Fs3jEuKsnLT/jh89vzeeV5vZ/nkRkVKbQb8xlxmvCZinDVmFkY7MPbZKPUUIY2X01wdgaPpZQuazmjTVacko7OWgm/qOm9aMSgkqPKSMdWrkVWqz5Lf305081WRmxleOpsLI/52Vqe5ercHK1trQTnZnFX6+kwl+BzmenrdNMp4JddNXjrBFCjQCVPx6rXIKvPlzNol5hvr2fCbhAdWph+p5tuZx3BpRU+v7VHaHOTBimf1qoiSpVZaMVnr83AlbfM2C1VFGtVKDPSMOkuCGCB4hi40m5jwCYhT0nB56jBXJiHw93E2OQUoXBEaBZwqUJHj6ixl2ppt0r024342tzUVleRk5aMqUiJzFGYzYClmFlPLf3mYrTpifTWlDPc3szo+ATrkWuEr71PQ5lWAAtoq7dgMhhpNFcw4DDS1Win1lRJbroA6nKRWTVyOsvyWGx3cn0pSGN+MWMtLSLHUcYnpxmbmiQU2aLBUIhLaCclnCH6pVNoshT4xEA6XBeptVpQ58qRStTInEU5vC0C3w/YOLzzEV+7A9yenGe4qxdPh5d35xfY2BIdVpYca79+6jQvRMWQnJBApzBxmMpJPn+WN5ITee3MmyLDvEy8Rh33+5V8N2yhv6yauRYzexO9uOx2nJfaCC4u0WyRcOjVpMbHo9cUIE89h7VEQ5n2AidOv8KLsbFERUcLZdV5mvUqvHo5zZKapUYvB54eIh43Op3ItERiKjhHk1nCpMkSAzPx4IstnNVGss+lYigt4KQARsXEHD9ZdXY6TWIhzaLYX6Plm50wDxY+pUWyEfdqPBnZSmYWF8U6VaFX5RDw1HNwfQG/p46cTAWVpgoSk5J4+cRJYuPikBkVqdh0SoKOQr4MuPnh5hY/f7XNmriObFUh4xOz7O7tMx0M4h8YYtXXze68n7WeIQK+QSavjjM0fIWu7g6ahZVMyj5LvVYhVsXAh9t7PHz6N89uR3i4v8u33x9y+ORPnv3yF4+f/MTdz26yM36ZD/z9bI9scGfnBuGtdSKREBubK6ytv4dMn5lGhdCeGRll9+497h084ulvz3n0+Fd+/+M5/x0d8c+/R/x4cJ9bG6us93Wx0uXnk0CIG+GPBTBEOLLOZnhVXNQy/wPAI3UmuEBN/QAAAABJRU5ErkJggg==",aspectRatio:1.520912547528517,src:"/static/56f649ecdf27ef4096cb87afc81ecf78/97318/Untitled-fc89a822-a76f-4520-83b6-11a9a24bdb6c.png",srcSet:"/static/56f649ecdf27ef4096cb87afc81ecf78/1f258/Untitled-fc89a822-a76f-4520-83b6-11a9a24bdb6c.png 175w,\n/static/56f649ecdf27ef4096cb87afc81ecf78/4cb21/Untitled-fc89a822-a76f-4520-83b6-11a9a24bdb6c.png 350w,\n/static/56f649ecdf27ef4096cb87afc81ecf78/97318/Untitled-fc89a822-a76f-4520-83b6-11a9a24bdb6c.png 700w,\n/static/56f649ecdf27ef4096cb87afc81ecf78/26d2c/Untitled-fc89a822-a76f-4520-83b6-11a9a24bdb6c.png 1050w,\n/static/56f649ecdf27ef4096cb87afc81ecf78/77a76/Untitled-fc89a822-a76f-4520-83b6-11a9a24bdb6c.png 1200w",sizes:"(max-width: 700px) 100vw, 700px"}}}}}}]}}}},539:function(e,t,a){}}]);
//# sourceMappingURL=0-0644b28d136d5326e02f.js.map