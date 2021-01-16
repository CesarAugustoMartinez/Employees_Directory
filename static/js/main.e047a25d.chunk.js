(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],{55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},66:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),s=n(24),c=n.n(s),l=n(28),i=n(2),o=n(10),d=n(25),h=n(26),m=n(31),u=n(30),j=n(27),b=n.n(j),p=function(){return b.a.get("https://randomuser.me/api/?inc=id,picture,name,phone,email,dob&results=50")};var f=function(e){return Object(a.jsx)("div",{className:"container",style:e.style,children:e.children})};n(55);var g=function(e){return Object(a.jsx)("div",{className:"banner text-center",style:{backgroundImage:"url(".concat(e.backgroundImage,")")},children:e.children})};n(56);var O=function(e){return Object(a.jsx)("form",{className:"search",children:Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"employee",children:"Search by Employee:"}),Object(a.jsx)("input",{value:e.search,onChange:e.handleInputChange,name:"employee",type:"text",className:"form-control",placeholder:"Type Employee first and last name to search",id:"employee"})]})})};n(57),n(58);var x=function(e){function t(e){var t=e.split("-"),n=t[0];return[t[1],t[2].split("T")[0],n].join("-")}return console.log(e.results),Object(a.jsx)("tbody",{children:void 0!==e.results[0]&&void 0!==e.results[0].name?e.results.map((function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{"data-th":"Image",className:"align-middle",children:Object(a.jsx)("img",{src:e.picture.medium,alt:"profile image for "+e.name.first+" "+e.name.last,className:"img-responsive"})}),Object(a.jsxs)("td",{"data-th":"Name",className:"name-cell align-middle",children:[e.name.first," ",e.name.last]}),Object(a.jsx)("td",{"data-th":"Phone",className:"align-middle",children:e.phone}),Object(a.jsx)("td",{"data-th":"Email",className:"align-middle",children:Object(a.jsx)("a",{href:"mailto:"+e.email,target:"__blank",children:e.email})}),Object(a.jsx)("td",{"data-th":"DOB",className:"align-middle",children:t(e.dob.date)})]},e.email)})):Object(a.jsx)(a.Fragment,{})})};var v=function(e){return console.log(e.state.headings),Object(a.jsxs)("div",{className:"datatable mt-2",children:[Object(a.jsx)("span",{children:"Click on any heading to sort by it."}),Object(a.jsxs)("table",{id:"table",className:"table  table-striped table-hover table-condensed",children:[Object(a.jsx)("thead",{children:Object(a.jsx)("tr",{children:e.state.headings.map((function(t){var n=t.name,r=t.width;return Object(a.jsxs)("th",{className:"col",style:{width:r},onClick:function(){e.handleSortClick(n)},children:[n.toUpperCase(),Object(a.jsx)("span",{className:"pointer"})]},n)}))})}),Object(a.jsx)(x,{results:e.state.filteredResults})]})]})};var y=function(e){return Object(a.jsx)("div",{role:"alert",className:"alert alert-".concat(e.type," fade in"),style:Object(o.a)({width:"80%",margin:"0 auto",marginTop:18},e.style),children:e.children})},N=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={search:"",results:[],filteredResults:[],order:"descend",headings:[{name:"Image",width:"10%",order:"descend"},{name:"name",width:"10%",order:"descend"},{name:"phone",width:"20%",order:"descend"},{name:"email",width:"20%",order:"descend"},{name:"dob",width:"10%",order:"descend"}],error:""},e.handleInputChange=function(t){var n=t.target.value,a=e.state.results.filter((function(e){return(e.name.first.toLowerCase()+" "+e.name.last.toLowerCase()).indexOf(n.toLowerCase())>=0}));console.log(n,a),e.setState({filteredResults:a})},e.handleSortClick=function(t){console.log(t);var n=e.state.headings.filter((function(e){return e.name===t})).map((function(e){return e.order})).toString();n="descend"===n?"ascend":"descend";var a=e.state.filteredResults.sort((function(e,a){return"ascend"===n?void 0===e[t]?1:void 0===a[t]?-1:"name"===t?(console.log(e[t].first.localeCompare(a[t].first)),e[t].first.localeCompare(a[t].first)):"dob"===t?(console.log(e[t].age,a[t].age),e[t].age-a[t].age):e[t].localeCompare(a[t]):void 0===e[t]?1:void 0===a[t]?-1:"name"===t?a[t].first.localeCompare(e[t].first):"dob"===t?a[t].age-e[t].age:a[t].localeCompare(e[t])})),r=e.state.headings.map((function(e){return e.order=e.name===t?n:e.order,e}));e.setState(Object(o.a)(Object(o.a)({},e.state),{},{filteredResults:a,headings:r}))},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;p().then((function(t){e.setState({results:t.data.results,filteredResults:t.data.results}),console.log(e.state.results)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsxs)(g,{backgroundImage:"https://zascogps.com/wp-content/uploads/2018/03/EMPLOYEE-MANAGEMENTB-BANNER.jpg",children:[Object(a.jsx)("h1",{children:"Employee Directory"}),Object(a.jsx)("h2",{children:"Search your favorite employee!"})]}),Object(a.jsxs)(f,{style:{minHeight:"80%"},children:[Object(a.jsx)(y,{type:"danger",style:{opacity:this.state.error?1:0,marginBottom:10},children:this.state.error}),Object(a.jsx)(O,{handleInputChange:this.handleInputChange}),Object(a.jsx)(v,{state:this.state,handleSortClick:this.handleSortClick})]})]})}}]),n}(r.Component);n(59);var C=function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("span",{children:"Employee Directory"})})};n(60);var w=function(e){return Object(a.jsx)("main",{className:"wrapper",children:e.children})};var k=function(){return Object(a.jsx)(l.a,{children:Object(a.jsxs)("div",{children:[Object(a.jsx)(w,{children:Object(a.jsx)(i.a,{exact:!0,path:"/",component:N})}),Object(a.jsx)(C,{})]})})};n(66),n(67);c.a.render(Object(a.jsx)(k,{}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.e047a25d.chunk.js.map