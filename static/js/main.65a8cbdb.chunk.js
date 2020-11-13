(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{107:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(9),o=a.n(r),l=a(75),i=a(16),c=a(61),u=a(62),d=a(72),m=a(76),p=(a(93),a(160)),k=a(67),h=a.n(k),f=a(108),g=a(66),T=a.n(g);a(94);var E=function(e){var t=e.tasksList,a=e.toggleComplete,n=e.handleClickOpen,r=e.setUpdates;return t.map((function(e){return s.a.createElement("div",{key:e.key,className:"taskList"},s.a.createElement("span",null,s.a.createElement(p.a,{checked:e.complete,color:"#346D6A",onClick:function(){return a(e.id)}})),s.a.createElement("p",null,s.a.createElement(f.a,{className:"TextareaAutosize",style:{textDecoration:e.complete?"line-through":""},type:"text",id:e.id,value:e.task,onChange:function(t){r(t.target.value,e.id)}}),s.a.createElement("span",{className:"TrashIcon"},e.done?s.a.createElement(s.a.Fragment,null,s.a.createElement(T.a,null)):"",s.a.createElement(h.a,{style:{fill:"#346D6A"},onClick:function(){return n(e)}}))))}))},C=a(74),v=a(73),S=a(163),b=a(148),O=a(68),w=a.n(O),j=a(70),y=a.n(j),D=a(69),L=a.n(D);function x(e){var t=s.a.useState(null),a=Object(C.a)(t,2),n=a[0],r=a[1],o=e.updateTasksToShow,l=e.filter,i=e.sortingTaskAscending,c=e.sortingTaskDescending,u=e.sortingCompletedLast,d=e.sortingCompletedTop;return s.a.createElement("div",null,s.a.createElement(b.a,{edge:"start",color:"inherit","aria-label":"menu",onClick:function(e){return r(e.currentTarget)}},s.a.createElement(w.a,null)),s.a.createElement(v.a,{id:"simple-menu",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:function(){return r(null)}},s.a.createElement(S.a,{onClick:o},l?s.a.createElement(s.a.Fragment,null,"Hide Completed Task"):s.a.createElement(s.a.Fragment,null,"Show Completed Task")),s.a.createElement(S.a,{onClick:i},"Sort on title ",s.a.createElement(L.a,null)),s.a.createElement(S.a,{onClick:c},"Sort on title ",s.a.createElement(y.a,null)),s.a.createElement(S.a,{onClick:u},"Show completed at last"),s.a.createElement(S.a,{onClick:d},"Show completed at top")))}var N=a(150),A=a(149),I=a(151),U=Object(N.a)((function(e){return{root:{padding:"2px 4px",display:"flex",alignItems:"center",width:800},input:{marginLeft:e.spacing(1),flex:1}}}));function B(e){var t=U();return s.a.createElement(A.a,{className:t.root},s.a.createElement(I.a,{className:t.input,placeholder:"Search Task",onChange:function(t){return e.searchTask(t)}}))}var F=a(71),M=a.n(F),W=a(153),J=a(161),z=a(157),H=a(155),R=a(156),Y=a(154),$=a(152),q=s.a.forwardRef((function(e,t){return s.a.createElement($.a,Object.assign({direction:"up",ref:t},e))}));function G(e){var t=e.DeleteTask,a=e.selectedTask,n=e.handleClickOpen;return s.a.createElement("div",null,s.a.createElement(W.a,{variant:"outlined",color:"primary",onClick:n},"Slide in alert dialog"),s.a.createElement(J.a,{open:e.open,TransitionComponent:q,keepMounted:!0,onClose:function(){return t()},"aria-labelledby":"Delete-Task","aria-describedby":"delete-dialog-slide-description"},s.a.createElement(Y.a,{id:"Delete-Task"},"Delete Task"),s.a.createElement(H.a,null,s.a.createElement(R.a,{id:"delete-dialog-slide-description"},"Are you sure you want to delete this task? ",a.task)),s.a.createElement(z.a,null,s.a.createElement(W.a,{onClick:function(){return t()},color:"primary"},"NO"),s.a.createElement(W.a,{onClick:function(){return t(a.id)},color:"primary"},"YES"))))}var K=a(162),P=a(77),Q=a(158),V=Object(K.a)(Q.a)({width:"100%",position:"relative",bottom:"0px"}),X=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleInput=function(e){n.setState({currentTask:{task:e.target.value,id:M.a.generate(),complete:!1}})},n.addTask=function(e){e.preventDefault();var t=n.state.currentTask;if(""!==t.task){var a=[t].concat(Object(i.a)(n.state.tasks));n.setState({tasks:a,currentTask:{task:"",id:""}})}},n.DeleteTask=function(e){if(e){var t=n.state.tasks.filter((function(t){return t.id!==e}));n.setState({tasks:t,open:!1})}else n.setState({open:!1})},n.setUpdates=function(e,t){var a=n.state.tasks;a.forEach((function(a){a.id===t&&(a.task=e,a.done=!0)})),n.setState({tasks:a})},n.toggleComplete=function(e){n.setState({tasks:n.state.tasks.map((function(t){return t.id===e?Object(l.a)({},t,{complete:!t.complete}):t}))})},n.updateTasksToShow=function(){n.setState({filter:!n.state.filter})},n.handleClickOpen=function(e){n.setState({selectedTask:e,open:!0})},n.searchTask=function(e){n.setState({search:e.target.value})},n.sortingTaskAscending=function(){n.setState({ascending:!n.state.ascending})},n.sortingTaskDescending=function(){n.setState({descending:!n.state.descending})},n.sortingCompletedTop=function(){n.setState({completedTop:!n.completedTop})},n.sortingCompletedLast=function(){n.setState({completedLast:!n.completedLast})},n.state={tasks:[],filter:!0,search:"",currentTask:{task:""},open:!1,done:!1,ascending:!1,descending:!1,completedTop:!1,completedLast:!1,selectedTask:{}},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.state.tasks;if(this.state.filter||(t=this.state.tasks.filter((function(e){return!e.complete}))),""!==this.state.search&&(t=t.filter((function(t){return t.task.includes(e.state.search)}))),this.state.descending){var a=Object(i.a)(this.state.tasks);a=a.sort((function(e,t){return t.task.localeCompare(e.task)})),this.setState({tasks:a,descending:!1})}if(this.state.ascending){var n=Object(i.a)(this.state.tasks);n=n.sort((function(e,t){return e.task.localeCompare(t.task)})),this.setState({tasks:n,ascending:!1})}if(this.state.completedTop){var r=Object(i.a)(this.state.tasks),o=r.filter((function(e){return!0===e.complete})).sort((function(e,t){return e.task.localeCompare(t.task)})),l=r.filter((function(e){return!1===e.complete})).sort((function(e,t){return e.task.localeCompare(t.task)})),c=Object(i.a)(new Set([].concat(Object(i.a)(o),Object(i.a)(l))));this.setState({tasks:c,completedTop:!1})}if(this.state.completedLast){var u=Object(i.a)(this.state.tasks),d=u.filter((function(e){return!0===e.complete})).sort((function(e,t){return e.task.localeCompare(t.task)})),m=u.filter((function(e){return!1===e.complete})).sort((function(e,t){return e.task.localeCompare(t.task)})),p=Object(i.a)(new Set([].concat(Object(i.a)(m),Object(i.a)(d))));this.setState({tasks:p,completedLast:!1})}return s.a.createElement("div",{className:"main"},s.a.createElement("header",null,s.a.createElement("div",{className:"title"},s.a.createElement(P.a,{variant:"h6"}," My Todo List"),s.a.createElement(B,{searchTask:this.searchTask}),s.a.createElement(x,{updateTasksToShow:this.updateTasksToShow,filter:this.state.filter,sortingTaskAscending:this.sortingTaskAscending,sortingTaskDescending:this.sortingTaskDescending,sortingCompletedTop:this.sortingCompletedTop,sortingCompletedLast:this.sortingCompletedLast}))),s.a.createElement("div",{className:"taskListScrolling"},s.a.createElement(E,{tasks:this.state.tasks,DeleteTask:this.DeleteTask,setUpdates:this.setUpdates,done:this.state.done,toggleComplete:this.toggleComplete,tasksList:t,handleClickOpen:this.handleClickOpen})),this.state.open&&s.a.createElement(G,{DeleteTask:this.DeleteTask,open:this.state.open,selectedTask:this.state.selectedTask}),s.a.createElement("footer",{className:"footerStyle"},s.a.createElement("form",{onSubmit:this.addTask},s.a.createElement(V,{fullWidth:"true",type:"text",label:"Enter your task and press enter",variant:"filled",value:this.state.currentTask.task,onChange:this.handleInput}))))}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},88:function(e,t,a){e.exports=a(107)},93:function(e,t,a){},94:function(e,t,a){}},[[88,1,2]]]);
//# sourceMappingURL=main.65a8cbdb.chunk.js.map