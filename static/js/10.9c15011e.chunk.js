(this.webpackJsonpaccountownerclient=this.webpackJsonpaccountownerclient||[]).push([[10],{148:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var a=n(16),r=function(){return{type:a.a}},o=function(e,t){return 404===e.response.status?function(e){return{type:a.e,props:e}}(t):500===e.response.status?function(e){return{type:a.f,props:e}}(t):function(e){return{type:a.g,error:e}}(e)}},149:function(e,t,n){},150:function(e,t,n){"use strict";var a=n(16),r=n(148),o=n(154),c=n.n(o).a.create({baseURL:"https://brokerage.herokuapp.com",headers:{headerType:"example header type"}});n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return s})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return d}));var l=function(e,t){return function(n){c.get(e).then((function(e){var t;n((t=e.data,{type:a.d,data:t}))})).catch((function(e){n(r.b(e,t))}))}},u=function(e,t,n){return function(o){c.post(e,t).then((function(e){o(function(e){return{type:a.h,response:e}}(e))})).catch((function(e){o(r.b(e,n))}))}},s=function(e,t,n){return function(o){c.put(e,t).then((function(e){o(function(e){return{type:a.i,response:e}}(e))})).catch((function(e){o(r.b(e,n))}))}},i=function(e,t){return function(n){c.delete(e).then((function(e){n(function(e){return{type:a.c,response:e}}(e))})).catch((function(e){n(r.b(e,t))}))}},d=function(e,t){return{type:a.b,props:e,url:t}}},152:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(269),c=n(259);n(149);t.a=function(e){return r.a.createElement(a.Fragment,null,r.a.createElement(o.a,{show:e.show,backdrop:"static"},r.a.createElement(o.a.Header,null,e.modalHeaderText),r.a.createElement(o.a.Body,null,r.a.createElement("p",null,e.modalBodyText)),r.a.createElement(o.a.Footer,null,r.a.createElement(c.a,{bsStyle:"success",onClick:e.successClick},e.okButtonText))))}},153:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(269),c=n(259);n(149);t.a=function(e){return r.a.createElement(a.Fragment,null,r.a.createElement(o.a,{show:e.show,backdrop:"static"},r.a.createElement(o.a.Header,null,e.modalHeaderText),r.a.createElement(o.a.Body,null,r.a.createElement("p",null,e.modalBodyText)),r.a.createElement(o.a.Footer,null,r.a.createElement(c.a,{bsStyle:"danger",onClick:e.closeModal},e.okButtonText))))}},156:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(261),c=n(143),l=n(262),u=n(270),s=n(164);n(162),n(157);t.a=function(e){var t=null,n=null;switch(e.invalid&&e.shouldValidate&&e.touched&&(n=r.a.createElement("em",null,e.errorMessage)),e.elementType){case"input":t=r.a.createElement(o.a,{controlId:e.id},r.a.createElement(c.a,{componentClass:l.a,sm:2},e.label),r.a.createElement(c.a,{sm:6},r.a.createElement(u.a,{type:e.type,value:e.value,onChange:e.changed,onBlur:e.blur})),r.a.createElement(c.a,null,r.a.createElement("em",null,n)));break;case"datePicker":t=r.a.createElement(o.a,{controlId:e.id},r.a.createElement(c.a,{componentClass:l.a,sm:2},e.label),r.a.createElement(c.a,{sm:6},r.a.createElement(s.a,{selected:e.value,dateFormat:"MM/DD/YYYY",readOnly:!0,onChange:e.changed,className:"datePickerControl",showYearDropdown:!0,dropdownMode:"select"})),r.a.createElement(c.a,null,r.a.createElement("em",null,n)));break;default:t=null}return r.a.createElement(a.Fragment,null,t)}},157:function(e,t,n){},158:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var a=n(155),r=n.n(a),o=function(){return{name:{element:"input",type:"text",value:"",validation:{required:!0},valid:!1,touched:!1,errorMessage:"",label:"Name:"},address:{element:"input",type:"text",value:"",validation:{required:!0,maxLength:60},valid:!1,touched:!1,errorMessage:"",label:"Address:"},dateOfBirth:{element:"datePicker",type:"text",value:r()(),valid:!0,touched:!1,errorMessage:"",label:"Date of birth:"}}},c=function(){return{accountType:{element:"input",type:"text",value:"",validation:{required:!0},valid:!1,touched:!1,errorMessage:"",label:"Account type:"},dateCreated:{element:"datePicker",type:"text",value:r()(),valid:!0,touched:!1,errorMessage:"",label:"Created date:"}}}},159:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return l}));var a=n(9),r=function(e){var t=[];for(var n in e)t.push({id:n,config:e[n]});return t},o=function(e,t,n){var r=Object(a.a)({},t[n]);r.value=n.startsWith("date")?e:e.target.value,r.touched=!0;var o=c(r.value,r.validation);return r.valid=o.isValid,r.errorMessage=o.errorMessage,r},c=function(e,t){var n={isValid:!0,errorMessage:""};return t?(t.required&&(n.isValid=""!==e.trim(),n.errorMessage=n.isValid?"":"Field is required"),n.isValid&&t.maxLength&&(n.isValid=e.length<=t.maxLength,n.errorMessage="Not allowed more than ".concat(t.maxLength," characters")),n):n},l=function(e){var t=0;for(var n in e)if(!e[n].valid){t+=1;break}return t}},264:function(e,t,n){"use strict";n.r(t);var a=n(9),r=n(50),o=n(51),c=n(53),l=n(52),u=n(0),s=n.n(u),i=n(156),d=n(217),m=n(263),p=n(261),f=n(143),h=n(259),v=n(158),b=n(159),g=n(150),E=n(148),y=n(47),w=n(155),O=n.n(w),M=n(152),k=n(153),x=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(r.a)(this,n);for(var o=arguments.length,c=new Array(o),l=0;l<o;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={ownerForm:{},isFormValid:!0},e.componentWillMount=function(){e.setState({ownerForm:Object(v.b)()})},e.componentDidMount=function(){var t="/api/owner/"+e.props.match.params.id;e.props.onGetOwnerById(t,Object(a.a)({},e.props))},e.componentWillReceiveProps=function(t){var n=Object(a.a)({},e.state.ownerForm),r=Object(a.a)({},n.name),o=Object(a.a)({},n.dateOfBirth),c=Object(a.a)({},n.address);r.value=t.data.name,r.valid=!0,o.value=O()(t.data.dateOfBirth),c.value=t.data.address,c.valid=!0,n.name=r,n.dateOfBirth=o,n.address=c,e.setState({ownerForm:n})},e.updateOwner=function(t){t.preventDefault();var n={name:e.state.ownerForm.name.value,dateOfBirth:e.state.ownerForm.dateOfBirth.value,address:e.state.ownerForm.address.value},r="/api/owner/"+e.props.data.id;e.props.onUpdateOwner(r,n,Object(a.a)({},e.props))},e.redirectToOwnerList=function(){e.props.history.push("/owner-List")},e.handleChangeEvent=function(t,n){var r=Object(a.a)({},e.state.ownerForm);r[n]=b.c(t,r,n);var o=b.b(r);e.setState({ownerForm:r,isFormValid:0===o})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=b.a(Object(a.a)({},this.state.ownerForm));return s.a.createElement(d.a,null,s.a.createElement(m.a,{horizontal:!0,onSubmit:this.updateOwner},t.map((function(t){return s.a.createElement(i.a,{key:t.id,elementType:t.config.element,id:t.id,label:t.config.label,type:t.config.type,value:t.config.value,changed:function(n){return e.handleChangeEvent(n,t.id)},errorMessage:t.config.errorMessage,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,blur:function(n){return e.handleChangeEvent(n,t.id)}})})),s.a.createElement("br",null),s.a.createElement(p.a,null,s.a.createElement(f.a,{mdOffset:6,md:1},s.a.createElement(h.a,{type:"submit",bsStyle:"info",disabled:!this.state.isFormValid},"Update")),s.a.createElement(f.a,{md:1},s.a.createElement(h.a,{bsStyle:"danger",onClick:this.redirectToOwnerList},"Cancel")))),s.a.createElement(M.a,{show:this.props.showSuccessModal,modalHeaderText:"Success message",modalBodyText:"Action completed successfully",okButtonText:"OK",successClick:function(){return e.props.onCloseSuccessModal("/owner-List",Object(a.a)({},e.props))}}),s.a.createElement(k.a,{show:this.props.showErrorModal,modalHeaderText:"Error message",modalBodyText:this.props.errorMessage,okButtonText:"OK",closeModal:function(){return e.props.onCloseErrorModal()}}))}}]),n}(u.Component);t.default=Object(y.b)((function(e){return{data:e.repository.data,showSuccessModal:e.repository.showSuccessModal,showErrorModal:e.errorHandler.showErrorModal,errorMessage:e.errorHandler.errorMessage}}),(function(e){return{onGetOwnerById:function(t,n){return e(g.c(t,n))},onUpdateOwner:function(t,n,a){return e(g.e(t,n,a))},onCloseSuccessModal:function(t,n){return e(g.a(n,t))},onCloseErrorModal:function(){return e(E.a())}}}))(x)}}]);
//# sourceMappingURL=10.9c15011e.chunk.js.map