(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{138:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),i=n(0),u=n.n(i),o=(n(187),n(161)),c=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={numPages:null,pageNumber:1},t.onDocumentLoadSuccess=function(e){var n=e.numPages;t.setState({numPages:n})},t}return r()(t,e),t.prototype.render=function(){var e=this.state;e.pageNumber,e.numPages;return u.a.createElement(o.a,null,u.a.createElement("iframe",{src:"https://github.com/awave1/cpsc481-project/raw/master/content/TeamContract.pdf",style:{width:"100%",height:"500px"},frameBorder:"0"}))},t}(u.a.Component);t.default=c},143:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(4),u=n.n(i),o=n(141),c=n.n(o);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var s=n(152),l=n.n(s);n.d(t,"PageRenderer",function(){return l.a});var d=n(32);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func}},152:function(e,t,n){var a;e.exports=(a=n(158))&&a.default||a},157:function(e){e.exports={data:{site:{siteMetadata:{title:"CPSC481 Project"}}}}},158:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),u=n.n(i),o=n(53),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},t.default=s},159:function(e,t,n){},161:function(e,t,n){"use strict";var a=n(157),r=n(0),i=n.n(r),u=n(4),o=n.n(u),c=n(143),s=function(e){var t=e.siteTitle;return i.a.createElement("div",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(c.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};s.propTypes={siteTitle:o.a.string},s.defaultProps={siteTitle:""};var l=s,d=(n(159),function(e){var t=e.children;return i.a.createElement(c.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:a})});d.propTypes={children:o.a.node.isRequired};t.a=d},191:function(e,t){},192:function(e,t){},193:function(e,t){},194:function(e,t){}}]);
//# sourceMappingURL=component---src-pages-team-contract-js-9e4d6ebaa5219ff03edc.js.map