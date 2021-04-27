(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={Container:"Container_Container__3ckO6"}},20:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),s=n(10),r=n.n(s),o=n(2),i=n(3),l=n(5),u=n(4),d=n(9),m=n.n(d),h=n(0),p=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:m.a.FilterDiv,children:[Object(h.jsx)("p",{className:m.a.FindTitle,children:"Find contacts by name"}),Object(h.jsx)("input",{onChange:this.props.filterContactsByName,value:this.props.value,name:this.props.name,required:!0})]})}}]),n}(a.Component),b=n(21),j=n(7),C=n.n(j),f=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return Object(h.jsx)("ul",{className:C.a.ContactsList,children:this.props.contacts.map((function(e){return Object(h.jsxs)("li",{className:C.a.ContactListItem,children:[e.name,": ",e.number,Object(h.jsx)("button",{className:C.a.Delete,onClick:function(){return t.props.deleteContact(e.id)},type:"button",children:"Delete"})]},Object(b.a)())}))})}}]),n}(a.Component),O=n(11),v=n(6),_=n.n(v),x=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.resetInput=function(){t.setState({name:"",number:""})},t.handleChangeInState=function(e){var n=e.target,a=n.value,c=n.name;t.setState(Object(O.a)({},c,a))},t.addContact=function(e){e.preventDefault();var n={name:t.state.name,number:t.state.number,id:Object(b.a)()};if(0!==t.props.contacts.filter((function(e){return e.name.toLowerCase()===t.state.name.toLowerCase()})).length)return alert("".concat(t.state.name," already exists"));t.props.contacts.push(n),t.props.updateState(t.props.contacts),t.resetInput()},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("form",{onSubmit:this.addContact,className:_.a.ContactForm,children:[Object(h.jsx)("h1",{children:"Phonebook"}),Object(h.jsxs)("div",{className:_.a.InputsDiv,children:[Object(h.jsxs)("label",{className:_.a.LabelContactForm,children:["Name"," ",Object(h.jsx)("input",{className:_.a.Input,onChange:this.handleChangeInState,value:this.state.name,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",placeholder:"Name Surname"})]}),Object(h.jsxs)("label",{className:_.a.LabelContactForm,children:["Number",Object(h.jsx)("input",{className:_.a.Input,onChange:this.handleChangeInState,value:this.state.number,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,placeholder:"+111-11-111-111"})]})]}),Object(h.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component),S=n(12),y=n.n(S),g=function(t){var e=t.children;return Object(h.jsx)("div",{className:y.a.Container,children:e})},N=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:"",filtredContacts:[]},t.handleState=function(e){var n=e.target.value;t.setState({filter:n})},t.filterContactsByName=function(e){if(t.handleState(e),""===t.state.filter)t.setState({filteredContacts:[]});else{var n=t.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t.state.filter.toLowerCase())}));t.setState({filteredContacts:n})}},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.updateState=function(e){t.setState({contacts:e})},t}return Object(i.a)(n,[{key:"componentDidUpdate",value:function(t,e){console.log("prevState:",e),console.log("this.state.contacts",this.state.contacts),this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));this.setState({contacts:t})}},{key:"render",value:function(){return Object(h.jsxs)(g,{children:[Object(h.jsx)(x,{updateState:this.updateState,handleChangeInState:this.handleChangeInState,addContact:this.addContact,contacts:this.state.contacts}),Object(h.jsx)("h1",{children:"Contacts"}),Object(h.jsx)(p,{filterContactsByName:this.filterContactsByName,name:"filter",value:this.state.filter}),Object(h.jsx)(f,{filtredContacts:this.state.filtredContacts,contacts:""!==this.state.filter?this.state.filteredContacts:this.state.contacts,deleteContact:this.deleteContact})]})}}]),n}(a.Component);var F=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(N,{})})};n(19);r.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(F,{})}),document.getElementById("root"))},6:function(t,e,n){t.exports={ContactForm:"ContactForm_ContactForm__1sTyg",InputsDiv:"ContactForm_InputsDiv__eRAp_",Input:"ContactForm_Input__3NKb0",LabelContactForm:"ContactForm_LabelContactForm__18zYC"}},7:function(t,e,n){t.exports={ContactsList:"ContactsList_ContactsList__2uJAo",ContactListItem:"ContactsList_ContactListItem__397fS",Delete:"ContactsList_Delete__32z3Q"}},9:function(t,e,n){t.exports={FindTitle:"Filter_FindTitle__14t1X",FilterDiv:"Filter_FilterDiv__1O-M5"}}},[[20,1,2]]]);
//# sourceMappingURL=main.555afa40.chunk.js.map