(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(t,e,n){t.exports=n(61)},60:function(t,e,n){},61:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(31),c=n.n(r),l=n(6),i=n(7),s=n(9),u=n(8),d=n(10),m=n(12),p=n(11),h=function(){return o.a.createElement("header",null,o.a.createElement(m.b,{to:"/"},"Start"),o.a.createElement(m.b,{to:"/list"},"List"),o.a.createElement(m.b,{to:"/about"},"About"))},b=n(19),f=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this,t))).onChange=function(t){n.setState({title:t.target.value})},n.onSubmit=function(t){t.preventDefault(),n.props.addTodo(n.state.title),n.setState({title:""})},n.state={title:""},n}return Object(d.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.onSubmit,className:"list-decoration "},o.a.createElement("input",{className:"rounded-edges",type:"text",name:"title",placeholder:"Add Todo ...",value:this.state.title,onChange:this.onChange}),o.a.createElement("input",{type:"submit",value:"Submit",disabled:!this.state.title,className:"btn rounded-edges submit-btn"}))}}]),e}(a.Component),j=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).getStyle=function(){return{textDecoration:n.props.todo.completed?"line-through":"none"}},n}return Object(d.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this.props.todo,e=t.id,n=t.title;return o.a.createElement("div",{style:this.getStyle(),className:"list-decoration"},o.a.createElement("label",null,o.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)})," ","  ",n),o.a.createElement("button",{onClick:this.props.deleteTodo.bind(this,e),className:"delete-btn rounded-edges btn"},o.a.createElement("i",{className:"fas fa-trash-alt"})))}}]),e}(o.a.Component),E=function(t){function e(){return Object(l.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this;return this.props.todos.map(function(e){return o.a.createElement(j,{key:e.id,todo:e,markComplete:t.props.markComplete,deleteTodo:t.props.deleteTodo})})}}]),e}(o.a.Component),O=n(15),v=n.n(O),y=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this,t))).componentDidMount=function(t){v.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then(function(t){return n.setState({todos:t.data})})},n.markComplete=function(t){n.setState({todos:n.state.todos.map(function(e){return e.id===t&&(e.completed=!e.completed),e})})},n.deleteTodo=function(t){v.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t)).then(function(e){return n.setState({todos:Object(b.a)(n.state.todos.filter(function(e){return e.id!==t}))})})},n.addTodo=function(t){v.a.post("https://jsonplaceholder.typicode.com/todos",{title:t,completed:!1}).then(function(t){return n.setState({todos:[].concat(Object(b.a)(n.state.todos),[t.data])})})},n.state={todos:[]},n}return Object(d.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement(f,{addTodo:this.addTodo}),o.a.createElement(E,{todos:this.state.todos,markComplete:this.markComplete,deleteTodo:this.deleteTodo}))}}]),e}(a.Component),g=function(){return o.a.createElement("div",{className:"about"},o.a.createElement("h1",null,"About"),o.a.createElement("p",null,"This is To Do List App v1.0.0"))},k=(n(60),function(t){function e(){return Object(l.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return o.a.createElement(m.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(h,null),o.a.createElement(p.a,{exact:!0,path:"/",render:function(t){return o.a.createElement("div",{className:"start-page"},o.a.createElement("div",null,"Now is the right moment"),o.a.createElement("p",null,"Welcome to the To do list app"))}}),o.a.createElement(p.a,{path:"/about",component:g}),o.a.createElement(p.a,{path:"/list",component:y})))}}]),e}(a.Component));c.a.render(o.a.createElement(k,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.d7a29115.chunk.js.map