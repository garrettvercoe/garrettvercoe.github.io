(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{489:function(e,t,a){"use strict";var i=a(23);t.__esModule=!0,t.default=void 0;var c,n=i(a(20)),d=i(a(1)),r=i(a(106)),s=i(a(3)),o=i(a(0)),A=i(a(6)),l=function(e){var t=(0,s.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},b=function(e){var t=l(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},p=[];var u=function(e,t){(void 0===c&&"undefined"!=typeof window&&window.IntersectionObserver&&(c=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(c.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),c).observe(e),p.push([e,t])},h=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",c=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",n=e.title?'title="'+e.title+'" ':"",d=e.alt?'alt="'+e.alt+'" ':'alt="" ',r=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",o=e.opacity?e.opacity:"1";return"<picture>"+i+c+"<img "+r+s+t+d+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+o+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},g=o.default.forwardRef(function(e,t){var a=e.style,i=e.onLoad,c=e.onError,n=(0,r.default)(e,["style","onLoad","onError"]);return o.default.createElement("img",(0,s.default)({},n,{onLoad:i,onError:c,ref:t,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});g.propTypes={style:A.default.object,onError:A.default.func,onLoad:A.default.func};var m=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,c=!1,n=t.fadeIn,r=b(t);!r&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,c=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,c=!1);var s=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:i,imgLoaded:!1,IOSupported:c,fadeIn:n,hasNoScript:s,seenBefore:r},a.imageRef=o.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,d.default)((0,d.default)(a))),a.handleRef=a.handleRef.bind((0,d.default)((0,d.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:b(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&u(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:b(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=l(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=l(this.props),t=e.title,a=e.alt,i=e.className,c=e.style,n=void 0===c?{}:c,d=e.imgStyle,r=void 0===d?{}:d,A=e.placeholderStyle,f=void 0===A?{}:A,b=e.placeholderClassName,p=e.fluid,u=e.fixed,m=e.backgroundColor,S=e.Tag,w="boolean"==typeof m?"lightgray":m,E=(0,s.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},r,f),y=(0,s.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},r),M={title:t,alt:this.state.isVisible?"":a,style:E,className:b};if(p){var j=p;return o.default.createElement(S,{className:(i||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},o.default.createElement(S,{style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),j.base64&&o.default.createElement(g,(0,s.default)({src:j.base64},M)),j.tracedSVG&&o.default.createElement(g,(0,s.default)({src:j.tracedSVG},M)),w&&o.default.createElement(S,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&o.default.createElement("picture",null,j.srcSetWebp&&o.default.createElement("source",{type:"image/webp",srcSet:j.srcSetWebp,sizes:j.sizes}),o.default.createElement("source",{srcSet:j.srcSet,sizes:j.sizes}),o.default.createElement(g,{alt:a,title:t,src:j.src,style:y,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,s.default)({alt:a,title:t},j))}}))}if(u){var R=u,B=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:R.width,height:R.height},n);return"inherit"===n.display&&delete B.display,o.default.createElement(S,{className:(i||"")+" gatsby-image-wrapper",style:B,ref:this.handleRef,key:"fixed-"+JSON.stringify(R.srcSet)},R.base64&&o.default.createElement(g,(0,s.default)({src:R.base64},M)),R.tracedSVG&&o.default.createElement(g,(0,s.default)({src:R.tracedSVG},M)),w&&o.default.createElement(S,{title:t,style:{backgroundColor:w,width:R.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:R.height}}),this.state.isVisible&&o.default.createElement("picture",null,R.srcSetWebp&&o.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),o.default.createElement("source",{srcSet:R.srcSet,sizes:R.sizes}),o.default.createElement(g,{alt:a,title:t,width:R.width,height:R.height,src:R.src,style:y,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,s.default)({alt:a,title:t,width:R.width,height:R.height},R))}}))}return null},t}(o.default.Component);m.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var S=A.default.shape({width:A.default.number.isRequired,height:A.default.number.isRequired,src:A.default.string.isRequired,srcSet:A.default.string.isRequired,base64:A.default.string,tracedSVG:A.default.string,srcWebp:A.default.string,srcSetWebp:A.default.string}),w=A.default.shape({aspectRatio:A.default.number.isRequired,src:A.default.string.isRequired,srcSet:A.default.string.isRequired,sizes:A.default.string.isRequired,base64:A.default.string,tracedSVG:A.default.string,srcWebp:A.default.string,srcSetWebp:A.default.string});m.propTypes={resolutions:S,sizes:w,fixed:S,fluid:w,fadeIn:A.default.bool,title:A.default.string,alt:A.default.string,className:A.default.oneOfType([A.default.string,A.default.object]),critical:A.default.bool,style:A.default.object,imgStyle:A.default.object,placeholderStyle:A.default.object,placeholderClassName:A.default.string,backgroundColor:A.default.oneOfType([A.default.string,A.default.bool]),onLoad:A.default.func,onError:A.default.func,onStartLoad:A.default.func,Tag:A.default.string};var E=m;t.default=E},514:function(e,t,a){"use strict";var i=a(3),c=a.n(i),n=a(4),d=a.n(n),r=(a(6),a(0)),s=a.n(r),o=a(15),A=a(141),l=a(142),f=a(5);function b(e){var t=e.children,a=e.className,i=e.clearing,n=e.content,r=e.fitted,p=e.hidden,u=e.horizontal,h=e.inverted,g=e.section,m=e.vertical,S=d()("ui",Object(o.a)(i,"clearing"),Object(o.a)(r,"fitted"),Object(o.a)(p,"hidden"),Object(o.a)(u,"horizontal"),Object(o.a)(h,"inverted"),Object(o.a)(g,"section"),Object(o.a)(m,"vertical"),"divider",a),w=Object(A.a)(b,e),E=Object(l.a)(b,e);return s.a.createElement(E,c()({},w,{className:S}),f.a.isNil(t)?n:t)}b.handledProps=["as","children","className","clearing","content","fitted","hidden","horizontal","inverted","section","vertical"],b.propTypes={},t.a=b},515:function(e,t,a){"use strict";a(48);var i=a(538),c=a(0),n=a.n(c),d=a(38),r=a.n(d),s=a(26),o=a(488),A=a(514),l=a(489),f=a.n(l);a(539);t.a=function(e){return n.a.createElement(s.StaticQuery,{query:"692957538",render:function(t){return n.a.createElement(b,Object.assign({data:t},e))},data:i})};var b=function(e){var t=e.data.allMarkdownRemark.edges;return n.a.createElement(o.a,null,n.a.createElement(o.a.Column,{mobile:0,tablet:3,computer:3}),n.a.createElement(o.a.Column,{mobile:12,tablet:9,computer:9},n.a.createElement("h3",{class:"header-project"},"Projects.")),n.a.createElement(o.a.Column,{mobile:12,tablet:3,computer:3},n.a.createElement("p",{class:"left-label"},"Services"),n.a.createElement("ul",{class:"left-info"},n.a.createElement("li",null,"Data Visualization"),n.a.createElement("li",null," Machine Learning "),n.a.createElement("li",null,"Data Analysis + Cleaning"),n.a.createElement("li",null,"UX Design"),n.a.createElement("li",null,"Web Design + Development"),n.a.createElement("li",null,"Graphic + Branding"),n.a.createElement("li",null,"Architectural Services"))),n.a.createElement(o.a.Column,{mobile:12,tablet:9,computer:9},n.a.createElement("div",{className:"projects"},n.a.createElement(o.a,null,t.filter(function(e){return e.node.frontmatter.title.length>0}).map(function(e){var t=e.node;return n.a.createElement(o.a.Column,{mobile:12,tablet:6,computer:4},n.a.createElement("div",{className:"project-preview",key:t.id},n.a.createElement("div",{class:"imgBox"},n.a.createElement(r.a,{to:t.frontmatter.path,class:"itemLink"},n.a.createElement(f.a,{className:"underline",fluid:t.frontmatter.cover.childImageSharp.fluid}))),n.a.createElement("p",{class:"date"},t.frontmatter.date),t.frontmatter.tags.map(function(e){return n.a.createElement("div",{class:"tag"},e)}),n.a.createElement("h4",{class:"noPad"}," ",n.a.createElement(r.a,{to:t.frontmatter.path,class:"itemLink"},t.frontmatter.title)),n.a.createElement("p",{class:"excerpt"},t.frontmatter.subtitle)))})))),n.a.createElement(A.a,{hidden:!0}))}},538:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{excerpt:"Description Traditional Japanese joinery is beautiful, and requires great woodworking skill and time…",id:"88dbe4c3-e67a-53fa-a3fa-9ec848fa2ce9",frontmatter:{title:"Tectonic Translation of Japanese Joinery",tags:["Build","fabrication"],subtitle:"Turning manual labor into digital CNC fabrication.",date:"2018",path:"/japanese-joinery",cover:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAbABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAIBAwQF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAABVrpOKdILpw2jmQP/xAAcEAACAgMBAQAAAAAAAAAAAAABAgADERMhMRL/2gAIAQEAAQUCrU4IEK9bxmyuoNG2GfHQlgjeXctJn//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EAB8QAAEDAwUAAAAAAAAAAAAAAAEAEBEhMUECEiNCUv/aAAgBAQAGPwLcTUvIwMtIR47qmnpCsWEeQ3//xAAdEAADAAMBAAMAAAAAAAAAAAAAAREhMVFBcYGx/9oACAEBAAE/IbqT7jePNNE3XDvrLPkJbGsKzZ72fo8+CRfULSuqdJ2CqJRsG8gGXZ//2gAMAwEAAgADAAAAEGDDMP/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8QH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8QH//EAB8QAQADAAICAwEAAAAAAAAAAAEAESExQVFxYYGRsf/aAAgBAQABPxBSwtFtS/QPBFUXqdXCsOVcVK1Jds6YDHvWIL3zJjSXOhS/b8qAXwuJi2fyCXcJ+er+5S3eI0pXh7+I1hqyu8i2qfc//9k=",aspectRatio:.7497387669801463,src:"/static/57ffce7f8fe8e23d6aa4c6bd7b5a5c1e/ca4e2/20181004-FullSizeRender.jpg",srcSet:"/static/57ffce7f8fe8e23d6aa4c6bd7b5a5c1e/fbb42/20181004-FullSizeRender.jpg 175w,\n/static/57ffce7f8fe8e23d6aa4c6bd7b5a5c1e/d4326/20181004-FullSizeRender.jpg 350w,\n/static/57ffce7f8fe8e23d6aa4c6bd7b5a5c1e/ca4e2/20181004-FullSizeRender.jpg 700w,\n/static/57ffce7f8fe8e23d6aa4c6bd7b5a5c1e/94e62/20181004-FullSizeRender.jpg 1050w,\n/static/57ffce7f8fe8e23d6aa4c6bd7b5a5c1e/85375/20181004-FullSizeRender.jpg 1400w,\n/static/57ffce7f8fe8e23d6aa4c6bd7b5a5c1e/22d1b/20181004-FullSizeRender.jpg 1435w",sizes:"(max-width: 700px) 100vw, 700px"}}}}}},{node:{excerpt:"Context The grape harvest is dependant on seasonal temperatures. To understand how climate change…",id:"1e0bd9fa-b2b7-557f-9982-de0801e8af24",frontmatter:{title:"Global Warming & Wine",tags:["python","d3","illustrator"],subtitle:"Looking at how 650 years of weather has impacted 30 wine-producing regions in Europe.",date:"2018",path:"/wine",cover:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAIAAAC9o5sfAAAACXBIWXMAAC4jAAAuIwF4pT92AAABNUlEQVQoz21R7W7DIAzs+z9f97fTNKVJaEIKwYCDcXakH9OkWQhZ9p3ts0/M3HXdMAz4r4f1fT9NkzEGP3ykYoz7f3aqtXrvQwjrujrn8MMvpdTDRAS+VgVUVRH5Q24hbblt21JKevj1SUVG3wBkiQjhSARwI0utfHgNJK0VPMGrkomAoxgKM3J6QHatfddB0UEWgezHGJVL9oEpOXefx3Gx1kfydvV3T97nSCXZvYRpslD6S37p0ZJ4me/Je558MiG7wjMlS2GY3de3/TjzdB2MWZalkYtIznk/5i5ZmWtct5JrDlJS04w5d16r6+V22boz95/jeHuOjYb51Rm9C4ptimU/VwWpkjGtZlPoW+kioZ+NHccBI59QQJpVnKQ1x2H2x+Yav9USiTHlzB5HxPaI3qf6AXrxCnAZwHb8AAAAAElFTkSuQmCC",aspectRatio:2.284011916583913,src:"/static/0531597bdd36ba96a0e14d58a0b0868a/97318/one.png",srcSet:"/static/0531597bdd36ba96a0e14d58a0b0868a/1f258/one.png 175w,\n/static/0531597bdd36ba96a0e14d58a0b0868a/4cb21/one.png 350w,\n/static/0531597bdd36ba96a0e14d58a0b0868a/97318/one.png 700w,\n/static/0531597bdd36ba96a0e14d58a0b0868a/26d2c/one.png 1050w,\n/static/0531597bdd36ba96a0e14d58a0b0868a/7ed75/one.png 1400w,\n/static/0531597bdd36ba96a0e14d58a0b0868a/105a1/one.png 2100w,\n/static/0531597bdd36ba96a0e14d58a0b0868a/ec8eb/one.png 6900w",sizes:"(max-width: 700px) 100vw, 700px"}}}}}},{node:{excerpt:"Context Parse.ly empowers companies to understand and improve digital audience engagement through…",id:"af14ea67-ce25-5a0c-8cdd-efe28ff8fba9",frontmatter:{title:"A benchmarking analytics tool for publishers",tags:["D3","App","Python","SQL"],subtitle:"Creating a D3 prototype application for content analytics.",date:"2018",path:"/benchmarking-tool",cover:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAABYlAAAWJQFJUiTwAAABs0lEQVQ4y3VTTW/bMAz1//85A3YZOmCHATv10l3aw9DlAwni2LITfVuyX0nFsp06JfxgSaZIPj66wCcbhmFaG2MhtUrQxkBpA6loTe/st/RnK5aH/F7COodWtWi0wNVISKkTjHEr34wiLbAIiMeZ2Vy0uNoW0l4QYodHVqyoDnOlfd8nxBgThkhBvUMMtOjpifO3EMKiwjGY8hLVtYSy8o4GB70Q9ZfdM/78/4XX8gVCVxQo3PmsAvroYL1N2eaqb87/Tm/4+fodP96+4ff7E/4en3GSB3Qj9amHeeO9p2YbaKVhrZ2oZHDQ+3EA9TGk5JnyXQ9Tr3q6PPbtJhAmOqHr0DH6gH7oHyqcAqbFeNlTZe5CCtK4pCS09/t9gt1uYTcb2FZMib4cm4kFV0ZVDKwo7aPWiHWNjtDs9hCbLcy5xDAqmvwzxqKKTJd7wOA/gqnl3jo6s74jlRVB0yz6G6OvKuSLHKhpGgghcC7LJA6btg7Hc41DWWF3PGF7OKFqm1XflrM8qZwrZGRFs8KeKq5Fg6oWNNh+Fo0Z0F5RawL5zaI8sM/nt+Bh9d0Si6uUKSnbB4/gSoiEgCuDAAAAAElFTkSuQmCC",aspectRatio:1.4205607476635513,src:"/static/b77c95df43fd96766be453136b92f052/97318/ScreenShot2019-01-05at1-6fd25967-9311-4f20-b214-c3e66067f3ba.00.47PM.png",srcSet:"/static/b77c95df43fd96766be453136b92f052/1f258/ScreenShot2019-01-05at1-6fd25967-9311-4f20-b214-c3e66067f3ba.00.47PM.png 175w,\n/static/b77c95df43fd96766be453136b92f052/4cb21/ScreenShot2019-01-05at1-6fd25967-9311-4f20-b214-c3e66067f3ba.00.47PM.png 350w,\n/static/b77c95df43fd96766be453136b92f052/97318/ScreenShot2019-01-05at1-6fd25967-9311-4f20-b214-c3e66067f3ba.00.47PM.png 700w,\n/static/b77c95df43fd96766be453136b92f052/26d2c/ScreenShot2019-01-05at1-6fd25967-9311-4f20-b214-c3e66067f3ba.00.47PM.png 1050w,\n/static/b77c95df43fd96766be453136b92f052/7ed75/ScreenShot2019-01-05at1-6fd25967-9311-4f20-b214-c3e66067f3ba.00.47PM.png 1400w,\n/static/b77c95df43fd96766be453136b92f052/672ec/ScreenShot2019-01-05at1-6fd25967-9311-4f20-b214-c3e66067f3ba.00.47PM.png 1824w",sizes:"(max-width: 700px) 100vw, 700px"}}}}}},{node:{excerpt:"Intro To go right to the implementation:  Finished tool   now in use by the fire department (may…",id:"cad930f7-dbed-5477-ab65-b3a6a112c538",frontmatter:{title:"Predicting Fire Risk",tags:["ml","python","js","web"],subtitle:"A web-based tool that uses machine learning to reduce the amount of fires in Charlottesville.",date:"2018",path:"/fire-risk",cover:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABYlAAAWJQFJUiTwAAACsklEQVQ4y01S2XLaQBDUX8QcxhCD48JAiCVAQgKhC3QAEpK4bGPHRZ5Slac85es7vbKdysPU7GpWPd09I1UqFQyHQ6iqit7XPuqNz2h3Ori5vUWlWkWtdoVOt4sqz6VSCeVy+V+Ie7PZxF27jeZ1E5d8I9VqNcwsC9bMRL/TRuu6AV1W0G3d4NPFBa7qdbTv7lAiwAUB/o+P+jVBq5eXBQGp3mig2+2h/aUFud3CoHML+aqOfq3+xuqdichlqvnIolZ5rwvgj++SOlCgKDJmEwOh5yBfL/GwWcO1ZlgtPMQMn+eBfA9DH2OiqVg4NjzHwpzZNifIVyHSZQB1OICkayMMeAgsE9+3KdJgjizyEYcB4kBkvwASkawieGzqs4k1ncAhmE/Q9dxDxKzc30MS7EToYxXn4w5PaYznXYafT0dE/FEw8mZTHJM1zkmMvedi58+xiUTDRdHQtS0osgxZAGqjETQyHFG6rmlwOJyprmPBHPMnk1YkywjnwxZ/0gy/wwiPtoOM1qSM035He0z0el1o3BQpnLtwDA3GaAid4AYZZUsfebjAQ57CoqyAkn69nnB+PsIja5ey176HNJwjoUXC32/f+gTtQZoT3WNsSP9AWYHrIHQt5Lw/5xvKNWGT5SlLEPo+5pS3Yi3y37xOordhdLi7Y5KSUk7oISH1LIZNYHOiFyxVFgPXLvwRE99EfMcGr4ccEzFthktvD/GqIKMoSmGTdNjEhUcpOyXsuF2GCAQIH4spjunLzNCxY/38eEDGSQdcGfFNU0fw7RnWrPm0wTankMT4F5ycw8uSD39wdYTMjJLWjJhenbYbPNHPl31eMN3Gy0L2mFLFqghggaNTmZTS/MjzCobHzQov2wyLqQGDj8SyZzRdeJlT2okLv6MCsU77ZFWoGXDlZA5Ffh/MX7ZOvbj+Yqi1AAAAAElFTkSuQmCC",aspectRatio:1.563151796060255,src:"/static/7c02a9551fd3c3c330b3d08d6c2b4fff/97318/ScreenShot2018-12-27at2-bb7f504f-a15e-4610-8926-cf831f6b1916.53.19PM.png",srcSet:"/static/7c02a9551fd3c3c330b3d08d6c2b4fff/1f258/ScreenShot2018-12-27at2-bb7f504f-a15e-4610-8926-cf831f6b1916.53.19PM.png 175w,\n/static/7c02a9551fd3c3c330b3d08d6c2b4fff/4cb21/ScreenShot2018-12-27at2-bb7f504f-a15e-4610-8926-cf831f6b1916.53.19PM.png 350w,\n/static/7c02a9551fd3c3c330b3d08d6c2b4fff/97318/ScreenShot2018-12-27at2-bb7f504f-a15e-4610-8926-cf831f6b1916.53.19PM.png 700w,\n/static/7c02a9551fd3c3c330b3d08d6c2b4fff/26d2c/ScreenShot2018-12-27at2-bb7f504f-a15e-4610-8926-cf831f6b1916.53.19PM.png 1050w,\n/static/7c02a9551fd3c3c330b3d08d6c2b4fff/7ed75/ScreenShot2018-12-27at2-bb7f504f-a15e-4610-8926-cf831f6b1916.53.19PM.png 1400w,\n/static/7c02a9551fd3c3c330b3d08d6c2b4fff/105a1/ScreenShot2018-12-27at2-bb7f504f-a15e-4610-8926-cf831f6b1916.53.19PM.png 2100w,\n/static/7c02a9551fd3c3c330b3d08d6c2b4fff/ee503/ScreenShot2018-12-27at2-bb7f504f-a15e-4610-8926-cf831f6b1916.53.19PM.png 2698w",sizes:"(max-width: 700px) 100vw, 700px"}}}}}},{node:{excerpt:"Context This semester-long housing studio began by looking at the human scale and minimal spaces of…",id:"c176f1b5-ec35-56f7-a5b8-d33d45081dfb",frontmatter:{title:"Compact Housing Design",tags:["Arch","Housing"],subtitle:"Designing a dense DC apartment complex based on how people live in compact spaces.",date:"2018",path:"/inside-out",cover:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAABmklEQVQoz02S22rCQBCG8/4PYy8reGFEvLBiFESsTaLEmMRj4vms0/2mrHRhIJud+eafg3M+n+V2u8n9fpfH46E2nU4lTVPZ7/eS57nEcSw/vi/L5VKKopDr9ar+GHf8Xq+XchweMQtLkkSBOAFIs0xms5kMBgMJx2OZz+cK2Ww26g+Uc7lcJDO+jv1xPB4Vsl6v1RkI3wD9IFBQbBJFk4ksFgv1AYKhbLVayXa7FQfYbreTscme54U+jEYjSUzJWfYHRTUKJwb2PRwqODQ+h8NBW4JivqnU4RKGodLJygP9803PhiY4MG9urSbtdlsCo5SEtKRSqWgyqoIBmGodgrmgkgwc7qEJ7na78tVqSb/f1xYQiNrPclmq1aqWbvtJDHDHSraTZhCU53meNBoN6fV6egeYG0Wl0oe4rqsAqrLTRpD20MIwMlI+JUVRpIPQYZi1AQioXq+rIuKez6fGAadVmE6ZXWTkDAOALcUm4huVzWbzvQXEAfzfP+0hP3Gyy4wSpLNGLCtvKOx0Ohp4Op3eu0fP7T5yUPgLyGruI4gJvY4AAAAASUVORK5CYII=",aspectRatio:1.948955916473318,src:"/static/717c551638e6a7e775d59e587adb42fa/97318/ScreenShot2018-12-31at5-a8b9c44b-7635-4e71-ae77-3ee3a97e546c.21.42PM.png",srcSet:"/static/717c551638e6a7e775d59e587adb42fa/1f258/ScreenShot2018-12-31at5-a8b9c44b-7635-4e71-ae77-3ee3a97e546c.21.42PM.png 175w,\n/static/717c551638e6a7e775d59e587adb42fa/4cb21/ScreenShot2018-12-31at5-a8b9c44b-7635-4e71-ae77-3ee3a97e546c.21.42PM.png 350w,\n/static/717c551638e6a7e775d59e587adb42fa/97318/ScreenShot2018-12-31at5-a8b9c44b-7635-4e71-ae77-3ee3a97e546c.21.42PM.png 700w,\n/static/717c551638e6a7e775d59e587adb42fa/26d2c/ScreenShot2018-12-31at5-a8b9c44b-7635-4e71-ae77-3ee3a97e546c.21.42PM.png 1050w,\n/static/717c551638e6a7e775d59e587adb42fa/7ed75/ScreenShot2018-12-31at5-a8b9c44b-7635-4e71-ae77-3ee3a97e546c.21.42PM.png 1400w,\n/static/717c551638e6a7e775d59e587adb42fa/105a1/ScreenShot2018-12-31at5-a8b9c44b-7635-4e71-ae77-3ee3a97e546c.21.42PM.png 2100w,\n/static/717c551638e6a7e775d59e587adb42fa/03691/ScreenShot2018-12-31at5-a8b9c44b-7635-4e71-ae77-3ee3a97e546c.21.42PM.png 3360w",sizes:"(max-width: 700px) 100vw, 700px"}}}}}},{node:{excerpt:"Problem 63 million people in rural India are without access to clean water. Over 20,000 habitations…",id:"a6a1ae80-0f78-5b8b-8f72-04569d9dba93",frontmatter:{title:"Purifying Water in India",tags:["startup"],subtitle:"Using the moringa root as a natural and sustainable method for water purification.",date:"2018",path:"/amori",cover:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsTAAALEwEAmpwYAAADJElEQVQozwEZA+b8AG1rOXRyQG5qPmtmOmdeOWNaNmZePW5jR3BlRnFnQjEnGD4zI05HMiYjGmZdNGJaMmhfNzciE1lSMnxwSABrazpjYDFwbTtzbkBtajtqZzhlYjhkYDhlXj5rYkVjUUJXRixSRCc6Kxl0bkFjWjVaSENqVEp8aliGdlQAd3VAa2c3bms7b2w7c3FBb25Damo8bW09a2c5npmD8+/upZ6LWk4jSzkTaWAyYVIyOiE2QilHbVdEjn1aAHp0QHZvPXhrQHVuPXdwQH5zTntwSmpjPXBqSOro4v///+Hd21dHIjwuB1pKLVJDLicgMDMiMIBtT5OIaABsZDNxZDh8a0GEc0l2bj56b0KKelIzJRafmpfm39ion5Pv7uuUjXlBLhJoWT47LiIPERgwJRySf1ybj28AbmQ0fGZCfGtEbmU4Y18ub2Y5eW9GMScRzcnIpJqNLBkAr62kzMbDXU4xf3VYRT41BgcQVEc3lIBbkoNkAG9nNod3TZmHYoFzSXBkOHhtQGlcNjQiDLiupenq6aOYj/Lx8amnnVhLKYx+XVlOPDInH3BoUYJ1V3pxXABqZjVqZDaFc018a0NrYTVrYDReTiwnGgoyJRi0raLQzMi6saVPPyxyZkp2a1RrYExuZVd6cVtyaVBoXEIAZmM0a1w1d2E7dV03d2I8hnNPe2hFXUwxV0kyXkstRi4ZXUcsYlZHc3BjkI6Ffnlvg392d29dZVtDc2hMAGljNm5cNWpRLWtWNGVRMox/Zamdip+Wfauki6WYhYZ1ZpODbpGLf62rpqGajXdsWRsVD0lCM25kSW5iRgBxaD1yZDpeSypYRCZWQiOZjXmyq59qaGR1a1iWhmqilX6ekXmWinWQg26ajXR/aVQZDAJmVkOHdVV9bEwAdGlAcGY6aVk0VT8gSzcdPDUpQTkuFxEORDssUUMtcFw6iHdXgW1MeWVDfG9eb1RFPikZWUQuinhXhHFQAGhbNV9MKUo4HTgoFS0gEQYFAhoSDDgpGVhKMWJNNWpSO3ZfOnhkPnxoQ2ZSMF9LNFxIM1hCM414XYh2Vdc/JGBbJURzAAAAAElFTkSuQmCC",aspectRatio:1.565079365079365,src:"/static/cd3d1291340b493c5902b56e4321090b/97318/cover.png",srcSet:"/static/cd3d1291340b493c5902b56e4321090b/1f258/cover.png 175w,\n/static/cd3d1291340b493c5902b56e4321090b/4cb21/cover.png 350w,\n/static/cd3d1291340b493c5902b56e4321090b/97318/cover.png 700w,\n/static/cd3d1291340b493c5902b56e4321090b/93d8a/cover.png 986w",sizes:"(max-width: 700px) 100vw, 700px"}}}}}},{node:{excerpt:"The Challenge In downtown Charlottesville there is a two-block empty parking lot where the…",id:"cae57076-e32f-559b-bda0-593e1780f657",frontmatter:{title:"Battling Food Insecurity Through Architecture",tags:["grocery","arch"],subtitle:"Placing the Farmer's Market at the forefront of slow food initiatives.",date:"2017",path:"/food-design",cover:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAABYlAAAWJQFJUiTwAAAEI0lEQVQ4yyWUeVOTVxTG329Xx2WqTq1jrQphBARUSJCQfSMJIWRlD5sgsigkLAmGsENIiBKQpWKLuFBbl1Gn036AX0/TP56Z+97znnOf5zn3XOXNwRqfj5/y7ffnfH6zxYdXOd7+kubV3hovd9Z5sb3B89wav+1m+CixD8db5DNLHORzhb0XWysc7WV5e/iMV/tZlPcvN0g87sdtM+Dz2Jkev8/x3jonh1ne/5rjj6Mt3h1u8vpADtmVZMFBPs1qKkFP2E3QbSQSdJJemJLYOspONklLsInuNj/TE0PMzoyxOh/ly9ttvp3s8PeHff75tM+39/8rODnMsLEYJxJqJGivo9VZR9BWTVezif1cEmU1PkJiepzk7CS7mylifWH62xr582iTL2/yUjhfKP6XFPx6ss3xfppEbJTeSJhWXwMhj4XoWITUk1G20gmU9NwYurpa/MEwqfgEbS4bgyE325kkzzeSvHi2xGux4DC/JAwW2c3OkZwaJhhsFpu0eBv0dIecDPaGxPNFlK/vtugKuSgtukqZ6joOu4nN5UkWExOCKNmlOPn0rOzNFHzKLkVZT43R1+HFfK8Mi6YEh7aS2MM2Ph1vonw8yoiZq8w86icz/4i9bIJtKZBdnmUnk+Lg6Ry5lSk2FmKk5ydYEWn/IbcSY2qknd6wg8nhdul2kpf5OWlKZpaZkX4GQj7WkxPs5ubZyz1hbzMh8hKFgjsb8cJ6Jz1NbnmchfgD1uZGyK9HebYa5enKY7bWJuQ7hjIz1s1oV5Bu8e5ByMvy9DCZpDBYGGc5MUJycpCY/NPXGcCk11JZUUFRUTEqlYq62ruEmh34PTb8jVYCAmUg0EBfk43eJjsdLgtuYz2GmrtUl9+i5EYxP/5whdNnLnLq9PkCzpy9wNlzFzhz7iLfnfqe8xcuUVVZie6ehtqaapT7YSedTWY63Wb8VgNeoxarVk1F+U10mts4jBpamy3YDBqqq8qp19yhouymxMsoKS4RtipKS0u5du0GV3++gdLf48Uql9Ok1WCsu4dOXS3dqybs1tMbshFw6gm4DNTXVHH1yk8UX7/GlcuXhfklbqqKsOhrcdt1qNV3cDrrUdaSQ3h8ZnRmDXVqNVrxxWaooddv4WFrAy6Dmtu3StHVVGCqrWSoxUqT3L92sSoV62Em2sn9ATetET2OQJVI7vTTEXbhcRlxWvX4RHpXuIHusJ2WRpMk19NgrifsMbIS7+MgGyWzNMzK4hDdA04svkrU1iLuGgVaFYrPZRKPHHQEnIVT/R4zbWErne02elo9UtxFpEUY+GzMRntlvCYZfRRCZ69CaypHoxVobqEVm/RimzIY8dPd0iiJ7sLEtPkdtPjN8mCYCEr3Q16bxN10Sizstcuj4GZExswurPW1amFvEGVGUWYXQm7+BV+Ci4r7q60rAAAAAElFTkSuQmCC",aspectRatio:1.2614155251141552,src:"/static/736f5e9c1a96a52756817201ed1049fa/97318/ScreenShot2018-12-28at9-e37b47b2-b830-4661-8e40-d1ce7adee272.00.50PM.png",srcSet:"/static/736f5e9c1a96a52756817201ed1049fa/1f258/ScreenShot2018-12-28at9-e37b47b2-b830-4661-8e40-d1ce7adee272.00.50PM.png 175w,\n/static/736f5e9c1a96a52756817201ed1049fa/4cb21/ScreenShot2018-12-28at9-e37b47b2-b830-4661-8e40-d1ce7adee272.00.50PM.png 350w,\n/static/736f5e9c1a96a52756817201ed1049fa/97318/ScreenShot2018-12-28at9-e37b47b2-b830-4661-8e40-d1ce7adee272.00.50PM.png 700w,\n/static/736f5e9c1a96a52756817201ed1049fa/26d2c/ScreenShot2018-12-28at9-e37b47b2-b830-4661-8e40-d1ce7adee272.00.50PM.png 1050w,\n/static/736f5e9c1a96a52756817201ed1049fa/7ed75/ScreenShot2018-12-28at9-e37b47b2-b830-4661-8e40-d1ce7adee272.00.50PM.png 1400w,\n/static/736f5e9c1a96a52756817201ed1049fa/105a1/ScreenShot2018-12-28at9-e37b47b2-b830-4661-8e40-d1ce7adee272.00.50PM.png 2100w,\n/static/736f5e9c1a96a52756817201ed1049fa/12ff4/ScreenShot2018-12-28at9-e37b47b2-b830-4661-8e40-d1ce7adee272.00.50PM.png 2210w",sizes:"(max-width: 700px) 100vw, 700px"}}}}}},{node:{excerpt:"Solo cups are recyclable in Charlottesville yet they're often thrown in the trash or cast to the…",id:"025acb19-bdb0-5adc-b6d8-8495866e1cdf",frontmatter:{title:"Recycled Architecture",tags:["Sustainable","Arch"],subtitle:"Designing a sustainable structure to act as a biofilter.",date:"2017",path:"/pure-pod",cover:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAADr0lEQVQ4yw3PaUzbBRzG8cbERBMNSIAGkHGVAhsd9wYZ6xjliFQ2oPQYjLbj7sCN4MiC2TiiHMMdwBot5U4n578wLjc5RRAQ2Tg2mYMXLosmRhOjr3zn1774vXmS55PnJ/I2eiLO8sBZ6cJbGlfclM745YnxvRyMb6GMuGIZ4cpopBf88Lss5ojeAy+jO156Tzwu+DguAFetH04ab9zzAhFJKnxxzX4HN50r7ulOvJfyLi4qF+Ir4glRRRKsCSUwVUaQMpYAzTE80xxI1vtI1H4EZHnhrhbjmeNNYIGY5AoVolMfydC3XCSpOhlnB+iU9iZOKSJcEt7AO/ptAtRh+JxPwkehI77sKr6qCNwz3RArXZEaJEj1UtzSfHHO8MYjPwTR9qvX7P/5Lx2Ppgg4cxTPc8EEVJsIKSsi+FMriZY9tL2HaNoOKLO8Rmv9AfW9Ic5eK0ZiOEJoSSRH86Xk1Bq51HgD0d7vfzP67ADTzBYRLePI7q6Rfm0WVc08uaZhB/gro92rPP2kl9Xr3cw1PWTZvMzG4DrmDgsn9XKCc0LJLjJS2XAHUdf+HySO/0VyuYAx14w5KgchREFfeDqWhHwK23ZZMC/wvM3OsmPZ41obK7W9rNX1sWOdZ7n1AcODAmb7BB2D/Yju1/dTLDPwlX8YE+GnGUvIZkCmwCrXUt68gL1hhlfNdp6PbfLL7FNW2saZuTvBwzobE1UdbDjgJ+YJZm/cp7XK8fLi8WhqT6XSKw2jR6Hhiw8MdMt1mBPyuNqywnpNP5u3Bdb6vmF3cp2toQV2O6dY6nrMsm2RzbEf2bQtsdjcw1B7K6JHkmN0ZRTTnlnEHUkYQ1FJLMQoaUg1UWPdY6frW75rGmbTbGe/92t2hDVerB5y+P0BP2+8QBifpvReKab2DEqETEQjCUq+PKdhKzSK33xD+Ufsz3/uXli1N+m4Pct+rZntzjkOFg/4aXqfl8NPOGyx8TKnmLXyOoq6c9HYP0Q3piRHOI+ooDWZzJYI6m8ex1J5gs56Bc1V/lR39THZ+YzdW5NsW5bYqu/BnmWkSRHLrZRQ6ivjafxcjWlRi8GeivZBAhdHHaBuJJ48QY5aiCd78gzqqSQUA9Eou0ppavoY83U5jZ+dxHTFi8J6CereSLIEJVlj6eQKCkqGTziyGPRCCoWOvsg4EIdhVI5xLBqT/TTa/khyh2UYR+PQ2SMwTkspmo+hYCKIXFsQqu5Yrszp0E/GOcAMLg0mYhyRox09i8oWzv8L0Vz4S6V6GgAAAABJRU5ErkJggg==",aspectRatio:1.5047021943573669,src:"/static/7cbeddd6bb8c1d42c6b1f028dbc6411f/97318/Untitled-1b27da8e-7fe3-4875-b5a8-75571595856e.png",srcSet:"/static/7cbeddd6bb8c1d42c6b1f028dbc6411f/1f258/Untitled-1b27da8e-7fe3-4875-b5a8-75571595856e.png 175w,\n/static/7cbeddd6bb8c1d42c6b1f028dbc6411f/4cb21/Untitled-1b27da8e-7fe3-4875-b5a8-75571595856e.png 350w,\n/static/7cbeddd6bb8c1d42c6b1f028dbc6411f/97318/Untitled-1b27da8e-7fe3-4875-b5a8-75571595856e.png 700w,\n/static/7cbeddd6bb8c1d42c6b1f028dbc6411f/26d2c/Untitled-1b27da8e-7fe3-4875-b5a8-75571595856e.png 1050w,\n/static/7cbeddd6bb8c1d42c6b1f028dbc6411f/7ed75/Untitled-1b27da8e-7fe3-4875-b5a8-75571595856e.png 1400w,\n/static/7cbeddd6bb8c1d42c6b1f028dbc6411f/ef1f5/Untitled-1b27da8e-7fe3-4875-b5a8-75571595856e.png 1920w",sizes:"(max-width: 700px) 100vw, 700px"}}}}}},{node:{excerpt:"\"Garrett, Brendin, and Patrick's marketing strategy had a great breadth of execution, including…",id:"db01cfe0-7b7e-57d4-a176-433f30904b3b",frontmatter:{title:"Marketing Strategy & Research",tags:["Marketing, Consulting"],subtitle:"How do you generate interest college students to care about athletic body-care products",date:"2017",path:"/nasty-athletic-care",cover:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAABYlAAAWJQFJUiTwAAAFQ0lEQVQ4y02Ua0xTZxjHj1BEkILKRahcS1tbWnoRkIuI3OTSUgqCeEPAAUGHqKAwRRyCRUScKF5AVEDmBYNTP8zFuU2dH+bMNJqYqJtbFhfdFpMtfnJbsuS3lxKTneTJOTnJ+eV/ed4jucsjcJdH4iaPQjZLg0egGc+QZLzCM5gZlY9PlBVflYPZ5nq0OU5M1k7Uuf0Yln1CbOlVDCVXiF12CVPpJdLLB5HcfMJx84lgmhg3uRJ3PzUy/1g8g1MENFtArfgoC5BrlhOS3MICey+arF2orKPoii6hLbqCueRj0lcfZ0n52XfAKahrhGI332gXdHrIIrwicpiptCEXKuUxlcxLbceQ20l01l5UBRfQOiYwFI+TWHKc3Orzk8AwAXkHDZ96fhdBgAnP0HQBzRXQAnxUxfgZ16PNcmLO2YEq9ygxjosYi8+xwLaHtDVjAuirFHYFdOYUUOYbicwv6n9Q4xQ0Mk9A7S7rioStGJd2CPCHxNhGMBZdIM5xlKTiQ0juQQlT+XmH4i6Akkcw0ox5TJ+ldMEnoR6BFjzDMkWeNnyjC/HVrUWd3YXFJgrK7hHA85iKJ7AUjQiFAQm4BVhc6qTpCrTmJYQoLUiSnwsu81O6yprM1Cs802XdX1fK3PgG9Pk9aLPbUNuG0RdfxugYRgpLfJ9pAfFIvno0sYv46flDbn99nebW3RiT8pBkwa61kvlF4zEnBu+wNGZpHCgsFcxb1Iox34kqew+awguinAmkrOoJAmPLkeQmYuLS6D/i5NWrZ0xe12/fIrNoLZJnqFAbJByEIE1TIHnFIgXn4K1ejXJxO+qMnSjSD6HIGUdKr7pI0qoxl5VJlcER87n7zZdc++oGJy6Mc/Lyp3QcPIE5bQXzzWnUb6ila0cDG6qrSctbR3RqIzllTspru9i8XVhOWDnG4opx4f8YMkUG0mwLhWUVtHZ04FhXw479fdx58is37//IX48n+Oe7If645uTve/28fTDAiy8O8fbhaXh6Bp6JUkzLz7Jg+SjJay4yP3sv7kEpSDNjUOpTqanfRN32XULpbf59cIXbnRW0lS7lWF0RNz9az83e9/j2SA2/Xd/Hy2vdvL7RixS19LA4l2exOE6TWnaOqORtuAUlIvnomBMURWp6GQ0tBzmyrZbGmmqefv+IF7/8wGcXxzhVZ2V8fSbjzcXcPFDNvf5a0YXYqcjsfkyOM1jsQ8QtGyPIVMs0f7MIP0LslT9H68oZcrYyem6YO3dv8fubN/z5+iUDNXYqMlLQakykxC0kbWESUmRGD37ijKpyBzDYR9DbTqEX9zlqB6HRJqJ1JtSiqM22TB4PtDPU086TZ/dpaWpCNn0ukreKKHM68nDhKmgxkso6QuQSp4BWocobQmc7jSr/NIaC46wqryIjPZ6ElES0xjg0CjV7VpWxunILkiKLOTFFrKzZzKH+bhIL6vGMqRMZ5gy6fkXzUtqYbahGZx0Wc5Lo/GEWFB7EXmhjRamVdZWlGNJKcNduYIa+Hg/DZiobu9jWtoWm1o1s3NmHPG43kjp/CGXuIJqCUcJSduAv/iZ6+yjz80+gsp1hUUk3TVvq6O7ezoaGjQQmNBKU2CygG/lg7xE6etro2N/F4rJOQpb0IWmtg+JjARSjt58hdGEjAZYGNCIKtYCqbaMUVu2lr3c7jc1NBMRvwduwiVlxzbR09dG+r5UDgyMsrPqcwKR2JEP+MQzWAXQCqBJKtQUjBMdvIjBuq7B9EmWeeGcbpH5rJ8WVjS6Yye7k8NhVsZ9DdB3v5fnPj1jVNI6Xro7/AOmxBKlJ7Vk6AAAAAElFTkSuQmCC",aspectRatio:.9848484848484849,src:"/static/2a5202d811ae89ad5155fe07db4a603c/97318/cover.png",srcSet:"/static/2a5202d811ae89ad5155fe07db4a603c/1f258/cover.png 175w,\n/static/2a5202d811ae89ad5155fe07db4a603c/4cb21/cover.png 350w,\n/static/2a5202d811ae89ad5155fe07db4a603c/97318/cover.png 700w,\n/static/2a5202d811ae89ad5155fe07db4a603c/26d2c/cover.png 1050w,\n/static/2a5202d811ae89ad5155fe07db4a603c/ab12c/cover.png 1170w",sizes:"(max-width: 700px) 100vw, 700px"}}}}}}]}}}},539:function(e,t,a){}}]);
//# sourceMappingURL=0-af6aa78995ad1a4e47b9.js.map