(this.webpackJsonpRoboFriends=this.webpackJsonpRoboFriends||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o);n(6),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(7);var s=n(1),i=n(2),l=n(4),h=n(3),u=function(e){e.id;var t=e.name,n=e.email,a=e.phone,o=e.onClick;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow pw2 shadow-5",onClick:o},r.a.createElement("img",{alt:"robot_one",src:"https://robohash.org/".concat(t,"?size=200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n),r.a.createElement("p",null,a)))},m=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e,t){return r.a.createElement(u,{className:"tc",id:e.id,name:e.name,email:e.email,phone:e.phone})})))},d=function(e){var t=e.searchChange;return r.a.createElement("div",{className:"pa2 tc"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue tc",type:"search",placeholder:"search for robots",onChange:t}))},p=(n(14),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={hasError:!1},e}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Ooooops. Something went Wrong!"):this.props.children}}]),n}(a.Component)),b=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchField.toLowerCase())}));return r.a.createElement("div",null,r.a.createElement("h1",{className:"tc f1 g"},"the RoboFriends-Community"),r.a.createElement(d,{searchChange:this.onSearchChange}),r.a.createElement(p,null,r.a.createElement(m,{className:"tc",robots:t})))}}]),n}(a.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement("div",null,r.a.createElement(b,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,n){},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.7c15f641.chunk.js.map