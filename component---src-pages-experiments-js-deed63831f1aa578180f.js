(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{472:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return r});var i=a(0),d=a.n(i),c=a(495);function r(){return d.a.createElement(d.a.Fragment,null,d.a.createElement(c.a,null))}},490:function(e,t,a){"use strict";var i=a(23);t.__esModule=!0,t.default=void 0;var d,c=i(a(20)),r=i(a(1)),n=i(a(106)),s=i(a(3)),A=i(a(0)),l=i(a(6)),o=function(e){var t=(0,s.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},b=function(e){var t=o(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},p=[];var u=function(e,t){(void 0===d&&"undefined"!=typeof window&&window.IntersectionObserver&&(d=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),d).observe(e),p.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",d=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",c=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',n=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",A=e.opacity?e.opacity:"1";return"<picture>"+i+d+"<img "+n+s+t+r+c+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+A+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},h=A.default.forwardRef(function(e,t){var a=e.style,i=e.onLoad,d=e.onError,c=(0,n.default)(e,["style","onLoad","onError"]);return A.default.createElement("img",(0,s.default)({},c,{onLoad:i,onError:d,ref:t,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});h.propTypes={style:l.default.object,onError:l.default.func,onLoad:l.default.func};var m=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,d=!1,c=t.fadeIn,n=b(t);!n&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,d=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,d=!1);var s=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:i,imgLoaded:!1,IOSupported:d,fadeIn:c,hasNoScript:s,seenBefore:n},a.imageRef=A.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,r.default)((0,r.default)(a))),a.handleRef=a.handleRef.bind((0,r.default)((0,r.default)(a))),a}(0,c.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:b(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&u(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:b(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=o(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=o(this.props),t=e.title,a=e.alt,i=e.className,d=e.style,c=void 0===d?{}:d,r=e.imgStyle,n=void 0===r?{}:r,l=e.placeholderStyle,f=void 0===l?{}:l,b=e.placeholderClassName,p=e.fluid,u=e.fixed,m=e.backgroundColor,w=e.Tag,S="boolean"==typeof m?"lightgray":m,E=(0,s.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},n,f),v=(0,s.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},n),y={title:t,alt:this.state.isVisible?"":a,style:E,className:b};if(p){var B=p;return A.default.createElement(w,{className:(i||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden"},c),ref:this.handleRef,key:"fluid-"+JSON.stringify(B.srcSet)},A.default.createElement(w,{style:{width:"100%",paddingBottom:100/B.aspectRatio+"%"}}),B.base64&&A.default.createElement(h,(0,s.default)({src:B.base64},y)),B.tracedSVG&&A.default.createElement(h,(0,s.default)({src:B.tracedSVG},y)),S&&A.default.createElement(w,{title:t,style:{backgroundColor:S,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&A.default.createElement("picture",null,B.srcSetWebp&&A.default.createElement("source",{type:"image/webp",srcSet:B.srcSetWebp,sizes:B.sizes}),A.default.createElement("source",{srcSet:B.srcSet,sizes:B.sizes}),A.default.createElement(h,{alt:a,title:t,src:B.src,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&A.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,s.default)({alt:a,title:t},B))}}))}if(u){var R=u,I=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:R.width,height:R.height},c);return"inherit"===c.display&&delete I.display,A.default.createElement(w,{className:(i||"")+" gatsby-image-wrapper",style:I,ref:this.handleRef,key:"fixed-"+JSON.stringify(R.srcSet)},R.base64&&A.default.createElement(h,(0,s.default)({src:R.base64},y)),R.tracedSVG&&A.default.createElement(h,(0,s.default)({src:R.tracedSVG},y)),S&&A.default.createElement(w,{title:t,style:{backgroundColor:S,width:R.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:R.height}}),this.state.isVisible&&A.default.createElement("picture",null,R.srcSetWebp&&A.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),A.default.createElement("source",{srcSet:R.srcSet,sizes:R.sizes}),A.default.createElement(h,{alt:a,title:t,width:R.width,height:R.height,src:R.src,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&A.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,s.default)({alt:a,title:t,width:R.width,height:R.height},R))}}))}return null},t}(A.default.Component);m.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var w=l.default.shape({width:l.default.number.isRequired,height:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string}),S=l.default.shape({aspectRatio:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,sizes:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string});m.propTypes={resolutions:w,sizes:S,fixed:w,fluid:S,fadeIn:l.default.bool,title:l.default.string,alt:l.default.string,className:l.default.oneOfType([l.default.string,l.default.object]),critical:l.default.bool,style:l.default.object,imgStyle:l.default.object,placeholderStyle:l.default.object,placeholderClassName:l.default.string,backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,onError:l.default.func,onStartLoad:l.default.func,Tag:l.default.string};var E=m;t.default=E},495:function(e,t,a){"use strict";a(48);var i=a(496),d=a(0),c=a.n(d),r=a(38),n=a.n(r),s=a(26),A=a(489),l=a(515),o=a(490),f=a.n(o);t.a=function(e){return c.a.createElement(s.StaticQuery,{query:"1252973275",render:function(t){return c.a.createElement(b,Object.assign({data:t},e))},data:i})};var b=function(e){var t=e.data.allMarkdownRemark.edges;return c.a.createElement(A.a,null,c.a.createElement(A.a.Column,{mobile:0,tablet:3,computer:3}),c.a.createElement(A.a.Column,{mobile:12,tablet:9,computer:9},c.a.createElement("h3",{class:"header"},"Experiments.")),c.a.createElement(A.a.Column,{mobile:12,tablet:3,computer:3},c.a.createElement("p",{class:"left-label"},"The lab"),c.a.createElement("p",{class:"left-info"},"Quick experiments with less time devoted to them, but things I find fun + interesting.")),c.a.createElement(A.a.Column,{mobile:12,tablet:9,computer:9},c.a.createElement("div",{className:"experiments"},c.a.createElement(A.a,null,t.filter(function(e){return e.node.frontmatter.title.length>0}).map(function(e){var t=e.node;return c.a.createElement(A.a.Column,{mobile:12,tablet:6,computer:4},c.a.createElement("div",{className:"project-preview",key:t.id},c.a.createElement("div",{class:"imgBox"},c.a.createElement(n.a,{to:t.frontmatter.path,class:"itemLink"},c.a.createElement(f.a,{className:"underline",fluid:t.frontmatter.cover.childImageSharp.fluid}))),c.a.createElement("p",{class:"date"},t.frontmatter.date),t.frontmatter.tags.map(function(e){return c.a.createElement("div",{class:"tag"},e)}),c.a.createElement("h4",{class:"noPad"}," ",c.a.createElement(n.a,{to:t.frontmatter.path,class:"itemLink"},t.frontmatter.title)),c.a.createElement("p",{class:"excerpt"},t.frontmatter.subtitle)))})))),c.a.createElement(l.a,{hidden:!0}))}},496:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{excerpt:"The Process For a museum exhibit on fruits and vegetable, I was tasked with comparing the…",id:"217bc091-044e-5f77-8e36-613f530a2a6c",frontmatter:{title:"Charting Veggies",subtitle:"Looking at import, export, and seasonality data for fruits & veggies for a museum exhibit.",tags:["D3","Data Vis"],date:"2018",path:"/seasons",cover:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAdCAIAAAAl5NuSAAAACXBIWXMAAC4jAAAuIwF4pT92AAAFhklEQVQ4y51Va3ATVRTuP/8AjuJUcAbGkUGsAsLgKCOjzOioqMNo1Rll1OGhgIooTKdAUdDB0pZS+pARKTiFoUA1pY/03SabR9M0SdM0aR5N06RJtk3SbB67SXazm33Gu0mL/PGHnjlz7nfP3e/es3vPOVuQzQlFUalUiiAIkiTT6TTLssApCEJ+NQ+EByTvL8gP4XB4ZmbG5/MBEAqFAP9B8r/JIpmmmQxNp0kSJwhgQQgAEOk0kZuKOCdgUxzHUQzNh1bA8zwImMlQ2SyX5ZksDyyf5QVRBdEKIuZzOGfvq0gGwXFcEMcNCGJEEDsadSejXiLmSWEwgSJULEDE/TjqTWE+AoVFHJ/CkDRDi2QW7MdQt+yBbS2mnZKJ19tNb3eNF/cZj4yMlhmHz5pUZUZNqWHkuG70sNqwDxr/ZND8WpvZEsEXT+YZZiaOSj2+QU+kzxvs9sKdHl+bd6zDPyr1jzW5FI1Tit/s6opx5Tmjqso0ct1uCBJJkQyiRpAITsYILkjzEZyBo5QTxk0uzDiFGWyorm9OJvX3d8N9XfBAF9zbM9fbO9cbo2I5MjAcp5j3lxqGz46PQAFLiPDEqTDOxHEmFssEnZjFHDNYYsZwemEasw7Na0r06tkkthg2GPRh33mz7JJN0eGD9GG1JTZhj1utMbMxooOCKigIqUOK8aheHVJK/UMXrdAcgebIWSHLciPB2XMTsst2eYNDUetQXrBC1Q5VDcA2WblFXe9QXHMNlZvllRZZjU1Wa+2fx+P5sIUsJ7gxWDI7vF9hfaVRubWq96WGoaIzbZvPd796XbXjivyFusFdjdBoyONKRD3JlDuBkfkkAWSe5qyI+6pt4M27xlXHOx76+Mbyvc3LP29+9GDL6mPthd9Ilu27s+57CeQ3BdJonGLdsTC5dM+Azvw+PFNY1lNUPrDpIrTtsnp7o/bdNktxt213u+Wtv8Z33tBvv6bdcVP3cpPuxavatef6df5c2DTLgc99We5ccUSy9kTHmlPSNSc7Vx1rW/dz37PV8k21yqIL0IZK2YYKmQgqZOt/GVxV2jnqiYpkBpAFumHAvuzg3SeOSh7Z37z806Zle5oe/uzGygO3H//6z8LDLY99eWflF7cLv2oBFuiKA82a6XDuZFBQdAZB09ZZ1OlHp+cS0/NJ53zSDmNWX2zSG530xmw+1AFjdh/m8Cem5hJgSlCMSM5kMqkUTrEEIWAROhVlUiibIHiMz7L365bP0oyQInjRD2ySw1ghR6YZhiaoMcRdbev5waQ6bVKenVBUTMqdCQcrRAWBFbJokHToItAtT88VZ2+dY+An86Avf88sB6oqc88Bv3FH/dE9bXGr9n2J9j2J9lCXpqRfXzY4eUY2WdJvOCgd/rBVU9w68kGr9p2WYSuSWCLzzB9631OV0OYa5cYa5eZa1daG4S31yq31im31yucuKTbWKp6vU26pU4MHgG6ohgwwtlTPWbZR5119fuiZavn6KnlRrWJ70+juTv2P+pHOWeiUTv2tRrN3SLOxXrH+gvzpavmTlUM6OJfbnNhlWGgGOdpu/a7FWNIxebLPcbLXVj7qv+3y6BHLXbe70eGvNflP99tLpZOlUuvxLpsnSiw2QNDTwIVl/7sUMBzHU6TMFzmqcp/QzFabp5qmJ9q8hm5YY4/PiMUOWiQvZDgmgPvkAfNN13jVhBVO4UsZxtKt1rldt3R72k2H5ZbTBku93fSrXaMMOkWuIDZNiiVdmKlldqx8wnwIcrnQ9GJVkWkKS8dCuDeaDkbJhTiFpOhYPIPEqQUss5Ci42hmASHhcNofp0JgiWQJDnTo3DuLFU0wqTAVIEBuMSjOYBSXojgcKMmKFqOjYTKwkA4k6XhGdCY5gf3nj/H/5G+LXox5H0ULsAAAAABJRU5ErkJggg==",aspectRatio:.6873333333333334,src:"/static/cb66bc4f7bd4e9693ba92063994d5f5d/97318/exhibit_data_viz-1-86e4d9d1-2394-4db0-a6b0-9fda6f351fc0.png",srcSet:"/static/cb66bc4f7bd4e9693ba92063994d5f5d/1f258/exhibit_data_viz-1-86e4d9d1-2394-4db0-a6b0-9fda6f351fc0.png 175w,\n/static/cb66bc4f7bd4e9693ba92063994d5f5d/4cb21/exhibit_data_viz-1-86e4d9d1-2394-4db0-a6b0-9fda6f351fc0.png 350w,\n/static/cb66bc4f7bd4e9693ba92063994d5f5d/97318/exhibit_data_viz-1-86e4d9d1-2394-4db0-a6b0-9fda6f351fc0.png 700w,\n/static/cb66bc4f7bd4e9693ba92063994d5f5d/26d2c/exhibit_data_viz-1-86e4d9d1-2394-4db0-a6b0-9fda6f351fc0.png 1050w,\n/static/cb66bc4f7bd4e9693ba92063994d5f5d/7ed75/exhibit_data_viz-1-86e4d9d1-2394-4db0-a6b0-9fda6f351fc0.png 1400w,\n/static/cb66bc4f7bd4e9693ba92063994d5f5d/a8d14/exhibit_data_viz-1-86e4d9d1-2394-4db0-a6b0-9fda6f351fc0.png 2062w",sizes:"(max-width: 700px) 100vw, 700px"}}}}}},{node:{excerpt:"Well this is a bit meta. Working with clients over the years, nearly all of them will want a website…",id:"6c0228df-5113-579d-8dc9-e8fe0742421c",frontmatter:{title:"Portfolio: from Scratch",subtitle:"Creating this site from scratch in React as a learning project.",tags:["React","Graphql","JS"],date:"2018",path:"/portfolio",cover:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAABvElEQVQoz31T207bUBDM/39Q1QZVLaryUkAgEaq2duI4vl/j+BbbgU53Fhnsgvqw3t1zmZ2ds170w4Cr6xsYponz4yPa00nt1HUzX1Y16qZBWdeoxI5VpTltenZBwPXDD2y2lgCeXwD/tVIAKgLS/w+QwdOfpxk7FhnOg/p+6NVYjGvD+dUTYAqmgPw0bavGja7v4YcRwjhBnGbI8gOywwGuH+oaLZF17o13ptIsRhCyYMzKN3drfPr8DR+Wl/go/lpy+qvbe1yuvuPiywoXX1cKPJXphSFZRFGqwhO8OJbCqkCcZMiLo67nkqdZjlTOMk8kjpJU12YMu76D64X4ZViwbFcEb7Qtc2sjCGMVP4hi/DYtPPw0tPUoTrG1HZWGBUYwBWQSRAmsvau+bU9a2fF82I6r4LxobHfYyZlaXpisGHtBpFrOGDJgW3GaKxu27PgBTMtWENvxBDDWfO96OKoUqXZgCUtKM2M4orP18enJcO/6InqCoqyU4cbaK0BRlrpvbHbadiRydHKnl8fkmC3eG+KxItnSOB5182zj/nTUVLYwlIc7vAI+g3RvQKdD+94gjz/CcrnE/XqNvxtGj1O50BfnAAAAAElFTkSuQmCC",aspectRatio:1.7048611111111112,src:"/static/67a2766ab87f2e138bdf4edce6375af6/97318/ScreenShot2019-01-02at9-ac81b718-9f36-4f0f-9d25-351af629beed.49.53AM.png",srcSet:"/static/67a2766ab87f2e138bdf4edce6375af6/1f258/ScreenShot2019-01-02at9-ac81b718-9f36-4f0f-9d25-351af629beed.49.53AM.png 175w,\n/static/67a2766ab87f2e138bdf4edce6375af6/4cb21/ScreenShot2019-01-02at9-ac81b718-9f36-4f0f-9d25-351af629beed.49.53AM.png 350w,\n/static/67a2766ab87f2e138bdf4edce6375af6/97318/ScreenShot2019-01-02at9-ac81b718-9f36-4f0f-9d25-351af629beed.49.53AM.png 700w,\n/static/67a2766ab87f2e138bdf4edce6375af6/26d2c/ScreenShot2019-01-02at9-ac81b718-9f36-4f0f-9d25-351af629beed.49.53AM.png 1050w,\n/static/67a2766ab87f2e138bdf4edce6375af6/7ed75/ScreenShot2019-01-02at9-ac81b718-9f36-4f0f-9d25-351af629beed.49.53AM.png 1400w,\n/static/67a2766ab87f2e138bdf4edce6375af6/105a1/ScreenShot2019-01-02at9-ac81b718-9f36-4f0f-9d25-351af629beed.49.53AM.png 2100w,\n/static/67a2766ab87f2e138bdf4edce6375af6/cec77/ScreenShot2019-01-02at9-ac81b718-9f36-4f0f-9d25-351af629beed.49.53AM.png 2946w",sizes:"(max-width: 700px) 100vw, 700px"}}}}}},{node:{excerpt:"Description Traditional Japanese joinery is beautiful, and requires great woodworking skill and time…",id:"d16e6ec5-c81b-5181-8b57-2ddafb71d829",frontmatter:{title:"Translating Japanese Joinery",subtitle:"Turning manual labor into a digital CNC fabrication.",tags:["Build","fabrication"],date:"2018",path:"/japanese-joinery",cover:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAbABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAIBAwQF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAABVrpOKdILpw2jmQP/xAAcEAACAgMBAQAAAAAAAAAAAAABAgADERMhMRL/2gAIAQEAAQUCrU4IEK9bxmyuoNG2GfHQlgjeXctJn//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EAB8QAAEDAwUAAAAAAAAAAAAAAAEAEBEhMUECEiNCUv/aAAgBAQAGPwLcTUvIwMtIR47qmnpCsWEeQ3//xAAdEAADAAMBAAMAAAAAAAAAAAAAAREhMVFBcYGx/9oACAEBAAE/IbqT7jePNNE3XDvrLPkJbGsKzZ72fo8+CRfULSuqdJ2CqJRsG8gGXZ//2gAMAwEAAgADAAAAEGDDMP/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8QH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8QH//EAB8QAQADAAICAwEAAAAAAAAAAAEAESExQVFxYYGRsf/aAAgBAQABPxBSwtFtS/QPBFUXqdXCsOVcVK1Jds6YDHvWIL3zJjSXOhS/b8qAXwuJi2fyCXcJ+er+5S3eI0pXh7+I1hqyu8i2qfc//9k=",aspectRatio:.7497387669801463,src:"/static/57ffce7f8fe8e23d6aa4c6bd7b5a5c1e/ca4e2/20181004-FullSizeRender.jpg",srcSet:"/static/57ffce7f8fe8e23d6aa4c6bd7b5a5c1e/fbb42/20181004-FullSizeRender.jpg 175w,\n/static/57ffce7f8fe8e23d6aa4c6bd7b5a5c1e/d4326/20181004-FullSizeRender.jpg 350w,\n/static/57ffce7f8fe8e23d6aa4c6bd7b5a5c1e/ca4e2/20181004-FullSizeRender.jpg 700w,\n/static/57ffce7f8fe8e23d6aa4c6bd7b5a5c1e/94e62/20181004-FullSizeRender.jpg 1050w,\n/static/57ffce7f8fe8e23d6aa4c6bd7b5a5c1e/85375/20181004-FullSizeRender.jpg 1400w,\n/static/57ffce7f8fe8e23d6aa4c6bd7b5a5c1e/22d1b/20181004-FullSizeRender.jpg 1435w",sizes:"(max-width: 700px) 100vw, 700px"}}}}}},{node:{excerpt:"Idea Creating a parametrized type. Thinking about typography, one of the central aspects to type is…",id:"d4e6626c-ca13-5983-92d6-7530c79a6823",frontmatter:{title:"An Average Typeface",subtitle:"Creating a parametrized typeface through Javascript.",tags:["JS","Type"],date:"2018",path:"/averages",cover:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAC4jAAAuIwF4pT92AAACA0lEQVQ4y6WUx27CUBBF+f8fYAcbtuzYUIRoogsMhF5MJzTROzg5eFCAxIkS5S2envGcmXvnjTG9/WOZDH+9XC6Hw2G32+33+9PppGnar2BCp9Npp9NptVrNZrNWq9Xrdc6TyYRXP8Hr9VqYbrfb6/Xa7TZZVFUtl8uFQoEsq9XqUYXpkSQO7FVfw+GQvd/vNxoN6heLxWw2y75YLD74G3w8HlV9URBsNBoJj5BqtZrP5yuVCm8VReGR4CcYhgrj8RiMMwWRAFkqldLpNAwkdqgcDAYRf4fpKvaEpBo+0ZlIJEKhkMvlcjqd8BgmOxIcDgdZoBB/hZfL5WAwoJpIBY5EIqlUCntEWywWj8dDcZSzu91uct1hggCAqUwWKvj9/vl8Lhdus9nsdns0GoXM5XLIYRfbV3g2m6EETDqMVSqjnFf8aDabfT7fi77wEg6HqcTw3CpzIpQOEQpMw7hVr9eLWqvVSuVAIACJhXg8jmbC7pWl27QE5bSNM71FG+JRS4eTyaSiLw70QhxdYbnxzWaDVTCySiIZDJkwHiEzmQx2mDbp1tOEYRgAEuVCymBwZpdWU3m73RqMJ8mwTRzi2XGIT4aELNTELYIx9e2HwcVQn4EBhgSIxWJIpcPkwuqnb9Pge0YYXyX6uTM00wvu8nw+f/2qDWBNX4+Hv/2TGOb6ut4BsbFNFimpjtMAAAAASUVORK5CYII=",aspectRatio:1,src:"/static/5b26ad2c4c9f25d2e8ba99c6f168edcd/97318/circulargrid-13760953-3201-4c41-8da0-45d7c8699202.png",srcSet:"/static/5b26ad2c4c9f25d2e8ba99c6f168edcd/1f258/circulargrid-13760953-3201-4c41-8da0-45d7c8699202.png 175w,\n/static/5b26ad2c4c9f25d2e8ba99c6f168edcd/4cb21/circulargrid-13760953-3201-4c41-8da0-45d7c8699202.png 350w,\n/static/5b26ad2c4c9f25d2e8ba99c6f168edcd/97318/circulargrid-13760953-3201-4c41-8da0-45d7c8699202.png 700w,\n/static/5b26ad2c4c9f25d2e8ba99c6f168edcd/26d2c/circulargrid-13760953-3201-4c41-8da0-45d7c8699202.png 1050w,\n/static/5b26ad2c4c9f25d2e8ba99c6f168edcd/7ed75/circulargrid-13760953-3201-4c41-8da0-45d7c8699202.png 1400w,\n/static/5b26ad2c4c9f25d2e8ba99c6f168edcd/105a1/circulargrid-13760953-3201-4c41-8da0-45d7c8699202.png 2100w,\n/static/5b26ad2c4c9f25d2e8ba99c6f168edcd/84464/circulargrid-13760953-3201-4c41-8da0-45d7c8699202.png 3300w",sizes:"(max-width: 700px) 100vw, 700px"}}}}}},{node:{excerpt:"Elon Musk's twitter began hitting the national media with a tweet saying he would make Tesla private…",id:"aed9c6c4-551f-56ef-9de5-9262e8990782",frontmatter:{title:"Trading Stock Based on Social Media",subtitle:"Using sentiment analysis of Elon Musk's tweets to create a trading algorithm for Tesla stock.",tags:["PY","Stocks","Mining"],date:"2018",path:"/trading-tesla",cover:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAABFUlEQVQoz32Ry27CMBBF+ahWIhCHJHUedp4VSWgRWUBDu+tndNNN//h2ZpIgiioWR/PyXM/YCxVX8IhNVEIR7KuoEp9xdYH1U45VmIn9j6VvYeoXdP2AhQhMTSPUeKf5Fr7wUcU4fnzi6/uHBa+nsFhriuMaTmDHqah2mS7M/nIl+qASIiVBWouTLOCbBnZ7RN6coItXJNVB4pDyjoiXcsEM9zg0hBMYpHWPuqOVVVRIg3nuUezOMB0zIN+9IyU/ac/I2jepZ5Rnf2RAXB8QlXuEtkHenuisCJaIspaSHbx0C4/ExRIb8mcC28KnHG8RmNGykKa8JsuxorqszJ+yovHd6b3UjXWn93X1+NvzOY6dS5+V87+cjwJtqzXdlQAAAABJRU5ErkJggg==",aspectRatio:2.9326732673267326,src:"/static/531aa43cd37abdd30b7305698fe9e300/97318/ScreenShot2019-01-02at11-bd71080c-144b-42b3-95a8-4aebae4b461b.41.01AM.png",srcSet:"/static/531aa43cd37abdd30b7305698fe9e300/1f258/ScreenShot2019-01-02at11-bd71080c-144b-42b3-95a8-4aebae4b461b.41.01AM.png 175w,\n/static/531aa43cd37abdd30b7305698fe9e300/4cb21/ScreenShot2019-01-02at11-bd71080c-144b-42b3-95a8-4aebae4b461b.41.01AM.png 350w,\n/static/531aa43cd37abdd30b7305698fe9e300/97318/ScreenShot2019-01-02at11-bd71080c-144b-42b3-95a8-4aebae4b461b.41.01AM.png 700w,\n/static/531aa43cd37abdd30b7305698fe9e300/26d2c/ScreenShot2019-01-02at11-bd71080c-144b-42b3-95a8-4aebae4b461b.41.01AM.png 1050w,\n/static/531aa43cd37abdd30b7305698fe9e300/7ed75/ScreenShot2019-01-02at11-bd71080c-144b-42b3-95a8-4aebae4b461b.41.01AM.png 1400w,\n/static/531aa43cd37abdd30b7305698fe9e300/105a1/ScreenShot2019-01-02at11-bd71080c-144b-42b3-95a8-4aebae4b461b.41.01AM.png 2100w,\n/static/531aa43cd37abdd30b7305698fe9e300/1b5a9/ScreenShot2019-01-02at11-bd71080c-144b-42b3-95a8-4aebae4b461b.41.01AM.png 2962w",sizes:"(max-width: 700px) 100vw, 700px"}}}}}},{node:{excerpt:"The Process Working in a team of two, we developed and designed a game where the main player was…",id:"fc7b9dcc-f9f0-57ff-a95a-20b3001b088d",frontmatter:{title:"Worbit: A Pygame",subtitle:"Game made from scratch in Python, with all handmade art + animations.",tags:["Python","Game design"],date:"2017",path:"/worbit",cover:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAADyElEQVQ4y3WTS2wbVRSGZxNBYidpYictTdNWrRSazHvssR3bSWrXjzh2bMeP2IGkAdEQAnLNAiIaKkCUR6pWFXSBQBUsAImKLoAN4rVgWbFgCwvYFbFhg8T+57/2TJNGsPjmP+fec/85d+4dSRlSoAzJUIcVaD61E3dRDqj8H3PddcqwfB/JHXANhep+zRlzUaD6BPL/ojlI2r6kg18YKjBGtY4KxLjuYDA3RzQnZ+xXYVBdJMMd9CsPTLjjJrs22KElYqrpe5BAp6YbW8LQHbScgYCLv6tBqj2iEg1BJ3fVdmMHWxiKh03D8KiOELsJDnOxT4M1KMNmR8EhgerkaicW84FDKlE6NWJdSCjnJfEQRHgQQueO6jg7ZiB90kTssIbkMQPJcQOpEyZmH9GRpiY4nztlIXPcRHyUzdAsIjyokgi6A9zigIxnohFcrc3h8nwMm+EQno3aaEVDuJyO4FIyjBuVKB6bDOCCFcROwsbyhImgV0GMnceJFGPrZ0d0lPnGBXZSpa6rQdSo2zTcDkyjdtrCpmWjOWFh7VELq1MBlFj7xCTzMzZWzgRRGDMx00/D2QEN6cM67mxVcXu9is+erODT9Ro+rmfx5wun8E0ghZ3TBdy9VsOddh6vxVO49+EqdmbmcLOUxXuVLH55p4adZAyxh3gPM8MGwj2TuH0hi79vreKv95v4cauOX3eTwOtj+G1jGj9vLeGPdxfxbTuNG4kk/vmgglvlOXxx/hwu2WF8t5FCfVxFoo/fMDOoINoj482UjbutFH54ahbfP13A1xdT+L11Eh/FDezqWfz0fBxfrkZwPRrGvVdn8Ek5jM8rEbyomviqHkFzTEHKQ8P5AQVZUvTrqJMyr8njxyyURgysHdFQ82g497CMQv8Ulg7JqPKbb4zrKPEQG7wZZR7qCq9cgesW2Jy0wPvVRcE8TzlH83TfFKosapsxtPQI2gYxo9iOzKJtRVHy6ch5uaZfRp71Il4cVFEa0iEV+UbBouiSpiVe1jwL1k8EsJtJ4o1kAtfyGVyh3qzkcDWXxtq4hUVelQoNSjQqC7OBLpIbHKTIK1DgR17gdvO9ckfne6aQpxZpVub8fbx7KnWSAyw5k8W+rpY8XZa8e1phTcXbpboPaS9RUGPR8qCOKk9rjR+7xV9r86iBLf5qz/EibxzRcfG4gfOcq/XJqHtkNMQarl1mLJDcwKVBatziSxMBvM2/4xU5gLesEK4YNl6eDOL69HTnRcvcepOmTY+jDtL+xGVFwC7FogbNG9RO7Giz16npdVEcZPwLASaQYpY+KqMAAAAASUVORK5CYII=",aspectRatio:.9958333333333333,src:"/static/3182a203d8872187ce66311e4b913f5e/97318/Untitled-01f8b946-b2bc-492e-a670-c7435f137c29.png",srcSet:"/static/3182a203d8872187ce66311e4b913f5e/1f258/Untitled-01f8b946-b2bc-492e-a670-c7435f137c29.png 175w,\n/static/3182a203d8872187ce66311e4b913f5e/4cb21/Untitled-01f8b946-b2bc-492e-a670-c7435f137c29.png 350w,\n/static/3182a203d8872187ce66311e4b913f5e/97318/Untitled-01f8b946-b2bc-492e-a670-c7435f137c29.png 700w,\n/static/3182a203d8872187ce66311e4b913f5e/7dce0/Untitled-01f8b946-b2bc-492e-a670-c7435f137c29.png 956w",sizes:"(max-width: 700px) 100vw, 700px"}}}}}}]}}}},515:function(e,t,a){"use strict";var i=a(3),d=a.n(i),c=a(4),r=a.n(c),n=(a(6),a(0)),s=a.n(n),A=a(15),l=a(141),o=a(142),f=a(5);function b(e){var t=e.children,a=e.className,i=e.clearing,c=e.content,n=e.fitted,p=e.hidden,u=e.horizontal,g=e.inverted,h=e.section,m=e.vertical,w=r()("ui",Object(A.a)(i,"clearing"),Object(A.a)(n,"fitted"),Object(A.a)(p,"hidden"),Object(A.a)(u,"horizontal"),Object(A.a)(g,"inverted"),Object(A.a)(h,"section"),Object(A.a)(m,"vertical"),"divider",a),S=Object(l.a)(b,e),E=Object(o.a)(b,e);return s.a.createElement(E,d()({},S,{className:w}),f.a.isNil(t)?c:t)}b.handledProps=["as","children","className","clearing","content","fitted","hidden","horizontal","inverted","section","vertical"],b.propTypes={},t.a=b}}]);
//# sourceMappingURL=component---src-pages-experiments-js-deed63831f1aa578180f.js.map