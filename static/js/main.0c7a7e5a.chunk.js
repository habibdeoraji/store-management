(this["webpackJsonpstore-management"]=this["webpackJsonpstore-management"]||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},33:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var c=a(1),r=a(16),n=a.n(r),s=(a(30),a(31),a(32),a(33),a(4)),i="ADMIN_LOGIN",l="ADMIN_LOGOUT",o="SALES_LOGIN",d="SALES_LOGOUT",j="ADD_MEDICINE",m="ADD_SALES_EXECUTIVE",u="CREATE_ORDER",b="ADD_TO_CART",O="EMPTY_CART",x="UPDATE_INVENTORY_LIST",p="UPDATE_TEAM_LIST",h="UPDATE_ALL_ORDERS",f="UPDATE_EXECUTIVE_DETAILS",g="UPDATE_INVENTORY_DETAILS",N="USER_ID_FOR_UPDATE",v="MEDICINE_ID_FOR_UPDATE",_=function(e){return{type:h,payload:e}},y=function(e){return{type:N,payload:e}},S=function(e){return{type:v,payload:e}},I=function(e){return{type:u,payload:e}},L=function(e){return{type:b,payload:e}},C=function(e){return{type:O,payload:e}},D=a(6),E=a(0),F=Object(s.b)((function(e){return{loginStatus:e.loginStatus}}),(function(e){return{logOutAdmin:function(){return e({type:l,payload:""})}}}))((function(e){var t=e.loginStatus,a=e.logOutAdmin,c=Object(D.f)();return Object(E.jsxs)("div",{className:"topbar",children:[Object(E.jsx)("div",{children:Object(E.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe85XE6SrncVWlO_SYZ0mD6TV4c07-4qKMjsJ_DURer7chX7MxMKlRoYDA3RBqHApI1Eg&usqp=CAU",alt:"pharmacy-management-software"})}),Object(E.jsx)("div",{className:"topbar-menu",children:t&&Object(E.jsx)("p",{onClick:function(){localStorage.setItem("loginStatus",!1),localStorage.setItem("adminLogin",!1),localStorage.setItem("salesLogin",!1),c.push("/"),a()},style:{cursor:"pointer"},children:"Logout"})})]})})),A=(a(44),a(8)),M=function(){return Object(E.jsx)("div",{className:"admin_body",children:Object(E.jsxs)("div",{className:"admin_header",children:[Object(E.jsx)("h2",{className:"inventory_menu",children:"INVENTORY"}),Object(E.jsx)(A.b,{to:"/admin/add_medicine",className:"admin_button",children:"Add Medicine"}),Object(E.jsx)(A.b,{to:"/admin/view_inventory",className:"admin_button",children:"View Inventory"}),Object(E.jsx)("h2",{className:"team_menu",children:"TEAM"}),Object(E.jsx)(A.b,{to:"/admin/add_sales_executive",className:"admin_button",children:"Add Sales Executive"}),Object(E.jsx)(A.b,{to:"/admin/view_team",className:"admin_button",children:"View Team"}),Object(E.jsx)("h2",{className:"order_menu",children:"ORDERS"}),Object(E.jsx)(A.b,{to:"/admin/show_all_orders",className:"admin_button",children:"Show All Orders"}),Object(E.jsx)(A.b,{to:"/admin/create_orders",className:"admin_button",children:"Create Order"})]})})},T=a(2),U=(a(45),Object(s.b)(null,(function(e){return{adminSignedIn:function(){return e({type:i,payload:""})},salesSignedIn:function(){return e({type:o,payload:""})}}}))((function(e){var t=e.adminSignedIn,a=e.salesSignedIn,r=Object(c.useState)(""),n=Object(T.a)(r,2),s=n[0],i=n[1],l=Object(c.useState)(""),o=Object(T.a)(l,2),d=o[0],j=o[1],m=Object(c.useState)(!0),u=Object(T.a)(m,2),b=u[0],O=u[1],x=Object(c.useState)(localStorage.getItem("loginStatus")||!1),p=Object(T.a)(x,2),h=p[0],f=p[1],g=Object(D.f)();"false"!==h&&localStorage.setItem("loginStatus",h);return Object(E.jsx)("div",{className:"login-body",children:Object(E.jsxs)("form",{className:"login-form",onSubmit:function(e){e.preventDefault(),console.log(s,d),b?"test-admin"===s&&"test-admin"===d?(f(!0),localStorage.setItem("loginStatus",!0),localStorage.setItem("adminLogin",!0),g.push("/admin/add_medicine"),t()):alert("Invalid credentials!"):"test-sales"===s&&"test-sales"===d?(f(!0),localStorage.setItem("loginStatus",!0),localStorage.setItem("salesLogin",!0),g.push("/sales_executive/create_order"),a()):alert("Invalid credentials!")},children:[Object(E.jsx)("h1",{children:"Login"}),Object(E.jsxs)("div",{className:"btn-group",children:[Object(E.jsx)("p",{className:b?"button active_button":"button",onClick:function(){return O(!0)},children:"Admin"}),Object(E.jsx)("p",{className:b?"button":"button active_button",onClick:function(){return O(!1)},children:"Executive"})]}),Object(E.jsxs)("div",{className:"form-group form_group",children:[Object(E.jsx)("label",{children:"Username "}),Object(E.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter username",required:!0,onChange:function(e){return i(e.target.value)}})]}),Object(E.jsxs)("div",{className:"form-group form_group",children:[Object(E.jsx)("label",{children:"Password"}),Object(E.jsx)("input",{type:"password",className:"form-control",placeholder:"Enter password",required:!0,onChange:function(e){j(e.target.value)}})]}),Object(E.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",children:"Submit"})]})})}))),k=(a(46),function(){return Object(E.jsx)("div",{className:"sales_executive_body",children:Object(E.jsxs)("div",{className:"sales_executive_header",children:[Object(E.jsx)(A.b,{to:"/sales_executive/create_order",className:"sales_executive_button",style:{marginTop:"40px"},children:"Create Order"}),Object(E.jsx)(A.b,{to:"/sales_executive/view_orders",className:"sales_executive_button",children:"View Orders"})]})})}),J=Object(s.b)((function(e){return{loginStatus:e.loginStatus,adminLogin:e.adminLogin,salesLogin:e.salesLogin}}),{})((function(e){var t=e.loginStatus,a=e.adminLogin,c=e.salesLogin;return console.log(t),console.log(!1===t),Object(E.jsxs)("div",{children:[!0===a&&!0===t&&Object(E.jsx)(M,{}),!0===c&&!0===t&&Object(E.jsx)(k,{}),!1===t&&Object(E.jsx)(U,{})]})})),R=(a(22),Object(s.b)(null,(function(e){return{add_medicine_to_inventory:function(t){return e(function(e){return{type:j,payload:e}}(t))}}}))((function(e){var t=e.add_medicine_to_inventory,a=Object(c.useState)(""),r=Object(T.a)(a,2),n=r[0],s=r[1],i=Object(c.useState)(""),l=Object(T.a)(i,2),o=l[0],d=l[1],j=Object(c.useState)(0),m=Object(T.a)(j,2),u=m[0],b=m[1],O=Object(c.useState)(0),x=Object(T.a)(O,2),p=x[0],h=x[1],f=Object(c.useState)(0),g=Object(T.a)(f,2),N=g[0],v=g[1];return Object(E.jsxs)("div",{children:[Object(E.jsx)(M,{}),Object(E.jsx)("h1",{style:{margin:"20px",textAlign:"center",marginLeft:"14%"},children:"Medicine Details"}),Object(E.jsxs)("form",{className:"add_medicine_form",onSubmit:function(e){var a={medicineName:n,manufacturerName:o,price:u,stock:p,discount:N,medicineId:Math.floor(1e8*Math.random()+1)};e.preventDefault(),e.target[0].value="",e.target[1].value="",e.target[2].value="",e.target[3].value="",e.target[4].value="",t(a);var c=JSON.parse(localStorage.getItem("inventoryList"))||[];c.push(a),localStorage.setItem("inventoryList",JSON.stringify(c))},children:[Object(E.jsxs)("div",{className:"form-group",children:[Object(E.jsx)("label",{htmlFor:"medicineName",children:"Medicine Name"}),Object(E.jsx)("input",{type:"text",className:"form-control",id:"medicineName",placeholder:"Medicine name",onChange:function(e){s(e.target.value)}})]}),Object(E.jsxs)("div",{className:"form-group",children:[Object(E.jsx)("label",{htmlFor:"manufacturerName",children:"Manufacturer Name"}),Object(E.jsx)("input",{type:"text",className:"form-control",id:"manufacturerName",placeholder:"Manufacturer Name",onChange:function(e){d(e.target.value)}})]}),Object(E.jsxs)("div",{className:"form-group",children:[Object(E.jsx)("label",{htmlFor:"medicinePrice",children:"Price(INR)"}),Object(E.jsx)("input",{type:"Number",className:"form-control",id:"medicinePrice",placeholder:"price",onChange:function(e){b(e.target.value)}})]}),Object(E.jsxs)("div",{className:"form-group",children:[Object(E.jsx)("label",{htmlFor:"medicineInStock",children:"Stock"}),Object(E.jsx)("input",{type:"Number",className:"form-control",id:"medicineInStock",placeholder:"Available quantity",onChange:function(e){h(e.target.value)}})]}),Object(E.jsxs)("div",{className:"form-group",children:[Object(E.jsx)("label",{htmlFor:"discountPercent",children:"Discount"}),Object(E.jsx)("input",{type:"text",className:"form-control",id:"discountPercent",placeholder:"Discount in percent",onChange:function(e){v(e.target.value)}})]}),Object(E.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Add to the Inventory"})]})]})}))),w=(a(47),a(23),Object(s.b)((function(e){return{inventoryList:e.inventoryList,medicineIdForUpdate:e.medicineIdForUpdate}}),(function(e){return{update_inventory_details:function(t){return e(function(e){return{type:g,payload:e}}(t))}}}))((function(e){var t=e.medicineIdForUpdate,a=e.inventoryList,r=e.update_inventory_details,n=e.crossClick;t=t||localStorage.getItem("medicineIdForUpdate");var s=a.filter((function(e){return e.medicineId==t})),i=s[0],l=i.medicineName,o=i.manufacturerName,d=i.price,j=i.stock,m=i.discount,u=Object(c.useState)(o),b=Object(T.a)(u,2),O=b[0],x=b[1],p=Object(c.useState)(d),h=Object(T.a)(p,2),f=h[0],g=h[1],N=Object(c.useState)(j),v=Object(T.a)(N,2),_=v[0],y=v[1],S=Object(c.useState)(m),I=Object(T.a)(S,2),L=I[0],C=I[1];console.log(t),console.log(s),console.log(m);return Object(E.jsx)("div",{style:{textAlign:"center"},className:"add_executive_details_container",children:Object(E.jsxs)("form",{className:"add_executive_form",onSubmit:function(e){e.preventDefault();var a=JSON.parse(localStorage.getItem("inventoryList"))||[],c=a.findIndex((function(e){return e.medicineId===t}));console.log(a),a[c].discount=L,a[c].manufacturerName=O,a[c].price=f,a[c].stock=_,localStorage.setItem("inventoryList",JSON.stringify(a)),localStorage.setItem("isUpdateMedicineForm",!1),r(a)},children:[Object(E.jsx)("p",{onClick:n,className:"remove_update_form_icon",children:Object(E.jsx)("i",{className:"fas fa-times"})}),Object(E.jsxs)("div",{className:"form-group",children:[Object(E.jsx)("label",{htmlFor:"Medicine Name",children:"Medicine Name"}),Object(E.jsx)("input",{type:"text",className:"form-control",id:"Medicine Name",placeholder:"Medicine Name",disabled:!0,value:l})]}),Object(E.jsxs)("div",{className:"form-group",children:[Object(E.jsx)("label",{htmlFor:"ManufacturerName",children:"Manufacturer Name"}),Object(E.jsx)("input",{type:"text",className:"form-control",id:"ManufacturerName",placeholder:"Manufacturer Name",onChange:function(e){x(e.target.value)},value:O})]}),Object(E.jsxs)("div",{className:"form-group",children:[Object(E.jsx)("label",{htmlFor:"Price",children:"Price(INR)"}),Object(E.jsx)("input",{type:"text",className:"form-control",id:"Price",placeholder:"Price",onChange:function(e){g(e.target.value)},value:f})]}),Object(E.jsxs)("div",{className:"form-group",children:[Object(E.jsx)("label",{htmlFor:"Stock",children:"Stock"}),Object(E.jsx)("input",{type:"Number",className:"form-control",id:"Stock",placeholder:"Stock in years",onChange:function(e){y(e.target.value)},value:_})]}),Object(E.jsxs)("div",{className:"form-group",children:[Object(E.jsx)("label",{htmlFor:"Discount",children:"Discount"}),Object(E.jsx)("input",{type:"text",className:"form-control",id:"Discount",placeholder:"Discount",onChange:function(e){C(e.target.value)},value:L})]}),Object(E.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Update Details"})]})})}))),P=Object(s.b)((function(e){return{inventoryList:e.inventoryList,medicineIdForUpdate:e.medicineIdForUpdate}}),(function(e){return{inventory_list_after_delete_ById:function(t){return e(function(e){return{type:x,payload:e}}(t))},medicine_id_for_update:function(t){return e(S(t))}}}))((function(e){var t=e.inventoryList,a=e.inventory_list_after_delete_ById,r=e.medicine_id_for_update,n=Object(c.useState)(!1),s=Object(T.a)(n,2),i=s[0],l=s[1],o=function(e){var t=JSON.parse(localStorage.getItem("inventoryList"))||[];t=t.filter((function(t){return t.medicineName!==e})),localStorage.setItem("inventoryList",JSON.stringify(t)),a(e)},d=function(e){l(!0),console.log(e),localStorage.setItem("medicineIdForUpdate",e),r(e)};return Object(E.jsxs)("div",{className:"view_inventory",children:[Object(E.jsx)(M,{}),i&&Object(E.jsx)(w,{medicineIdForUpdate:S,crossClick:function(){console.log("Clicked"),l(!1)}}),Object(E.jsxs)("div",{className:"inventory_container",children:[Object(E.jsxs)("div",{className:"inventory_container_header",children:[Object(E.jsx)("p",{children:"Medicine"}),Object(E.jsx)("p",{children:"Manufacturer"}),Object(E.jsx)("p",{children:"Price"}),Object(E.jsx)("p",{children:"Quantity"}),Object(E.jsx)("p",{children:"Discount"})]}),t.map((function(e){return Object(E.jsx)(Q,{medicineDetails:e,delete_medicine_by_id:o,update_medicine_by_id:d},Math.random())}))]})]})})),Q=function(e){var t=e.medicineDetails,a=t.medicineName,c=t.manufacturerName,r=t.price,n=t.stock,s=t.discount,i=t.medicineId;return Object(E.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(E.jsxs)("div",{className:"medicine-card",children:[Object(E.jsx)("span",{className:"medicine-name",children:a}),Object(E.jsx)("span",{className:"manufacturer-name",children:c}),Object(E.jsx)("span",{className:"medicine-price",children:r}),Object(E.jsx)("span",{className:"medicine-quantity",children:n}),Object(E.jsx)("span",{className:"medicine-discount",children:s})]},Math.random()),Object(E.jsxs)("div",{style:{marginLeft:"10px",cursor:"pointer"},onClick:function(){return e.delete_medicine_by_id(a)},children:[" ",Object(E.jsx)("i",{className:"fas fa-trash"})]}),Object(E.jsxs)("div",{style:{cursor:"pointer",marginLeft:"10px"},onClick:function(){return e.update_medicine_by_id(i)},children:[" ",Object(E.jsx)("i",{className:"fas fa-edit"})]})]})},B=(a(48),Object(s.b)((function(e){return{teamList:e.teamList,userIdForUpdate:e.userIdForUpdate}}),(function(e){return{update_executive_details:function(t){return e(function(e){return{type:f,payload:e}}(t))}}}))((function(e){var t=e.userIdForUpdate,a=e.teamList,r=e.update_executive_details,n=e.crossClick;t=t||localStorage.getItem("userIdForUpdate");var s=a.filter((function(e){return e.salesExecutiveId==t}));console.log(s[0]);var i=s[0],l=i.firstName,o=i.lastName,d=i.dob,j=i.gender,m=i.experience,u=Object(c.useState)(l),b=Object(T.a)(u,2),O=b[0],x=b[1],p=Object(c.useState)(o),h=Object(T.a)(p,2),f=h[0],g=h[1],N=Object(c.useState)(d),v=Object(T.a)(N,2),_=v[0],y=v[1],S=Object(c.useState)(m),I=Object(T.a)(S,2),L=I[0],C=I[1];return Object(E.jsx)("div",{style:{textAlign:"center"},className:"add_executive_details_container",children:Object(E.jsxs)("form",{className:"add_executive_form",onSubmit:function(e){e.preventDefault();var a=JSON.parse(localStorage.getItem("teamList"))||[],c=a.findIndex((function(e){return e.salesExecutiveId===t}));console.log(a),a[c].firstName=O,a[c].lastName=f,a[c].dob=_,a[c].experience=L,localStorage.setItem("teamList",JSON.stringify(a)),localStorage.setItem("isUpdateForm",!1),r(a)},children:[Object(E.jsx)("p",{onClick:n,className:"remove_update_form_icon",children:Object(E.jsx)("i",{className:"fas fa-times"})}),Object(E.jsxs)("div",{className:"form-group",children:[Object(E.jsx)("label",{htmlFor:"firstName",children:"First Name"}),Object(E.jsx)("input",{type:"text",className:"form-control",id:"firstName",placeholder:"First name",onChange:function(e){x(e.target.value)},value:O})]}),Object(E.jsxs)("div",{className:"form-group",children:[Object(E.jsx)("label",{htmlFor:"lastName",children:"Last Name"}),Object(E.jsx)("input",{type:"text",className:"form-control",id:"lastName",placeholder:"Last Name",onChange:function(e){g(e.target.value)},value:f})]}),Object(E.jsxs)("div",{className:"form-group",children:[Object(E.jsx)("label",{htmlFor:"Dob",children:"DOB"}),Object(E.jsx)("input",{type:"Date",className:"form-control",id:"Dob",placeholder:"dob",onChange:function(e){y(e.target.value)},value:_})]}),Object(E.jsxs)("div",{className:"form-group",children:[Object(E.jsx)("label",{htmlFor:"Gender",children:"Gender(M/F)"}),Object(E.jsx)("input",{type:"text",className:"form-control",id:"Gender",placeholder:"Gender",disabled:!0,value:j})]}),Object(E.jsxs)("div",{className:"form-group",children:[Object(E.jsx)("label",{htmlFor:"experience",children:"Experience"}),Object(E.jsx)("input",{type:"number",className:"form-control",id:"experience",placeholder:"Experience in years",onChange:function(e){C(e.target.value)},value:L})]}),Object(E.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Update Details"})]})})}))),G=Object(s.b)((function(e){return{teamList:e.teamList,userIdForUpdate:e.userIdForUpdate}}),(function(e){return{team_list_after_delete:function(t){return e(function(e){return{type:p,payload:e}}(t))},user_id_for_update:function(t){return e(y(t))}}}))((function(e){var t=e.teamList,a=e.team_list_after_delete,r=e.user_id_for_update,n=Object(c.useState)(!1),s=Object(T.a)(n,2),i=s[0],l=s[1],o=function(e){console.log(e);var t=JSON.parse(localStorage.getItem("teamList"))||[];t=t.filter((function(t){return t.salesExecutiveId!==e})),localStorage.setItem("teamList",JSON.stringify(t)),a(e)},d=function(e){l(!0),localStorage.setItem("userIdForUpdate",e),r(e)};return Object(E.jsxs)("div",{className:"view_team",children:[Object(E.jsx)(M,{}),i&&Object(E.jsx)(B,{userIdForUpdate:y,crossClick:function(){console.log("Clicked"),l(!1)}}),Object(E.jsxs)("div",{className:"team_container",children:[Object(E.jsxs)("div",{className:"team_container_header",children:[Object(E.jsx)("p",{className:"sales_executive_id",children:"UserId"}),Object(E.jsx)("p",{className:"sales_executive_fname",children:"First Name"}),Object(E.jsx)("p",{className:"sales_executive_lname",children:"Last Name"}),Object(E.jsx)("p",{className:"sales_executive_dob",children:"DOB"}),Object(E.jsx)("p",{className:"sales_executive_gender",children:"Gender"}),Object(E.jsx)("p",{className:"sales_executive_experience",children:"Experience"})]}),t.map((function(e){return Object(E.jsx)(q,{executiveDetails:e,delete_sales_executive_by_id:o,update_sales_executive_by_id:d},Math.random())}))]})]})})),q=function(e){var t=e.executiveDetails,a=t.firstName,c=t.lastName,r=t.dob,n=t.gender,s=t.experience,i=t.salesExecutiveId;return Object(E.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(E.jsxs)("div",{className:"sales-executive-card",children:[Object(E.jsx)("span",{className:"sales_executive_id",children:i}),Object(E.jsx)("span",{className:"sales_executive_fname",children:a}),Object(E.jsx)("span",{className:"sales_executive_fname",children:c}),Object(E.jsx)("span",{className:"sales_executive_dob",children:r}),Object(E.jsx)("span",{className:"sales_executive_gender",children:n}),Object(E.jsx)("span",{className:"sales_executive_experience",children:s})]},Math.random()),Object(E.jsxs)("div",{style:{marginLeft:"10px",cursor:"pointer",marginRight:"10px"},onClick:function(){return e.delete_sales_executive_by_id(i)},children:[" ",Object(E.jsx)("i",{className:"fas fa-trash"})]}),Object(E.jsxs)("div",{style:{cursor:"pointer"},onClick:function(){return e.update_sales_executive_by_id(i)},children:[" ",Object(E.jsx)("i",{className:"fas fa-edit"})]})]})},V=(a(49),Object(s.b)(null,(function(e){return{add_executive_to_team:function(t){return e(function(e){return{type:m,payload:e}}(t))}}}))((function(e){var t=e.add_executive_to_team,a=Object(c.useState)(""),r=Object(T.a)(a,2),n=r[0],s=r[1],i=Object(c.useState)(""),l=Object(T.a)(i,2),o=l[0],d=l[1],j=Object(c.useState)(""),m=Object(T.a)(j,2),u=m[0],b=m[1],O=Object(c.useState)(""),x=Object(T.a)(O,2),p=x[0],h=x[1],f=Object(c.useState)(0),g=Object(T.a)(f,2),N=g[0],v=g[1];return Object(E.jsxs)("div",{children:[Object(E.jsx)(M,{}),Object(E.jsx)("h1",{style:{margin:"20px",textAlign:"center",marginLeft:"14%"},children:"Executive Details"}),Object(E.jsxs)("form",{className:"add_executive_form_details",onSubmit:function(e){var a={firstName:n,lastName:o,dob:u,gender:p,experience:N,salesExecutiveId:Math.floor(1e8*Math.random()+1)};e.preventDefault(),e.target[0].value="",e.target[1].value="",e.target[2].value="",e.target[3].value="",e.target[4].value="",t(a);var c=JSON.parse(localStorage.getItem("teamList"))||[];c.push(a),localStorage.setItem("teamList",JSON.stringify(c))},children:[Object(E.jsxs)("div",{className:"form-group",children:[Object(E.jsx)("label",{htmlFor:"firstName",children:"First Name"}),Object(E.jsx)("input",{type:"text",className:"form-control",id:"firstName",placeholder:"First name",onChange:function(e){s(e.target.value)}})]}),Object(E.jsxs)("div",{className:"form-group",children:[Object(E.jsx)("label",{htmlFor:"lastName",children:"Last Name"}),Object(E.jsx)("input",{type:"text",className:"form-control",id:"lastName",placeholder:"Last Name",onChange:function(e){d(e.target.value)}})]}),Object(E.jsxs)("div",{className:"form-group",children:[Object(E.jsx)("label",{htmlFor:"Dob",children:"DOB"}),Object(E.jsx)("input",{type:"Date",className:"form-control",id:"Dob",placeholder:"dob",onChange:function(e){b(e.target.value)}})]}),Object(E.jsxs)("div",{className:"form-group",children:[Object(E.jsx)("label",{htmlFor:"Gender",children:"Gender(M/F)"}),Object(E.jsx)("input",{type:"text",className:"form-control",id:"Gender",placeholder:"Gender",onChange:function(e){h(e.target.value)}})]}),Object(E.jsxs)("div",{className:"form-group",children:[Object(E.jsx)("label",{htmlFor:"experience",children:"Experience"}),Object(E.jsx)("input",{type:"number",className:"form-control",id:"experience",placeholder:"Experience in years",onChange:function(e){v(e.target.value)}})]}),Object(E.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Add to the team"})]})]})}))),Y=(a(50),Object(s.b)((function(e){return{allOrders:e.allOrders}}),(function(e){return{my_orders_list_after_delete:function(t){e(_(t))}}}))((function(e){var t=e.allOrders,a=e.my_orders_list_after_delete;console.log(t);var c=t.filter((function(e){return 10001===e.userId})),r=function(e){console.log(e);var t=JSON.parse(localStorage.getItem("allOrders"))||[];t=t.filter((function(t){return t.orderId!==e})),localStorage.setItem("allOrders",JSON.stringify(t)),a(e)};return Object(E.jsxs)("div",{children:[Object(E.jsx)(k,{}),Object(E.jsx)("h1",{style:{textAlign:"center",marginTop:"20px"},children:"MY ORDERS"}),c.map((function(e){return Object(E.jsx)(W,{myOrderDetails:e,delete_my_order_by_id:r},Math.random())}))]})}))),W=function(e){var t=e.myOrderDetails,a=t.customerName,c=t.contactNumber,r=t.orderId,n=t.cartItem,s=n.reduce((function(e,t){return e+10*t.itemQty}),0);return Object(E.jsxs)("div",{className:"my-order-list",children:[Object(E.jsxs)("div",{className:"my-order-user-details",children:[Object(E.jsxs)("p",{children:["CUSTOMER NAME: ",Object(E.jsx)("span",{children:a})]}),Object(E.jsxs)("p",{children:["CONTACT NUMBER: ",Object(E.jsx)("span",{children:c})]}),Object(E.jsxs)("p",{children:["ORDER ID : ",Object(E.jsx)("span",{children:r})]})]}),Object(E.jsxs)("div",{className:"cart-item-header ",children:[Object(E.jsx)("h4",{className:"cart-item-name",children:"Name"}),Object(E.jsx)("h4",{children:"Quantity"}),Object(E.jsx)("h4",{children:"Amount"})]}),n.map((function(e){return Object(E.jsxs)("div",{className:"cart-item-details",children:[Object(E.jsx)("p",{className:"cart-item-name",children:e.itemName}),Object(E.jsx)("p",{children:e.itemQty}),Object(E.jsx)("p",{children:10*e.itemQty})]},Math.random())})),Object(E.jsx)("p",{style:{borderTop:"1px solid gray",width:"100%",marginTop:"10px",marginBottom:0}}),Object(E.jsx)("div",{style:{marginTop:"0px"},children:Object(E.jsxs)("h3",{style:{margin:0,marginLeft:"58%",marginTop:"10px"},children:["Total Amount = ",Object(E.jsx)("span",{style:{fontWeight:300},children:s})]})}),Object(E.jsxs)("div",{className:"delete_order_icon",onClick:function(){return e.delete_my_order_by_id(r)},children:[" ",Object(E.jsx)("i",{className:"fas fa-trash"})]})]},r)},X=(a(51),Object(s.b)((function(e){return{cartItem:e.cartItem}}),(function(e){return{create_order:function(t){return e(I(t))},add_to_cart:function(t){return e(L(t))},empty_cart:function(){return e(C())}}}))((function(e){var t=e.create_order,a=e.add_to_cart,r=e.cartItem,n=e.empty_cart,s=Object(c.useState)(""),i=Object(T.a)(s,2),l=i[0],o=i[1],d=Object(c.useState)(""),j=Object(T.a)(d,2),m=j[0],u=j[1],b=Object(c.useState)(""),O=Object(T.a)(b,2),x=O[0],p=O[1],h=Object(c.useState)(""),f=Object(T.a)(h,2),g=f[0],N=f[1],v=r.reduce((function(e,t){return e+10*t.itemQty}),0);return Object(E.jsxs)("div",{children:[Object(E.jsx)(k,{}),Object(E.jsx)("h1",{style:{margin:"20px",textAlign:"center",marginLeft:"14%"},children:"Make an Order"}),Object(E.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(E.jsxs)("div",{className:"add_to_cart",children:[Object(E.jsxs)("label",{type:"text",onChange:function(e){return p(e.target.value)},children:["Medicine ",Object(E.jsx)("input",{})]}),Object(E.jsxs)("label",{onChange:function(e){return N(e.target.value)},children:["Quantity ",Object(E.jsx)("input",{type:"Number"})]}),Object(E.jsxs)("p",{children:["Price per unit ",20]}),Object(E.jsx)("button",{className:"btn btn-secondary",onClick:function(e){var t={itemName:x,itemQty:g};(r=JSON.parse(localStorage.getItem("cartItem"))||[]).push(t),localStorage.setItem("cartItem",JSON.stringify(r)),a(t)},children:"Add to Cart"})]}),Object(E.jsxs)("form",{className:"create_order_form",onSubmit:function(e){var a={customerName:l,contactNumber:m,cartItem:r,orderId:Math.floor(1e8*Math.random()+1),userId:10001};e.preventDefault(),e.target[0].value="",e.target[1].value="",t(a);var c=JSON.parse(localStorage.getItem("allOrders"))||[];c.push(a),localStorage.setItem("allOrders",JSON.stringify(c)),localStorage.setItem("cartItem",JSON.stringify([])),n()},children:[Object(E.jsxs)("div",{className:"executive_details",children:[Object(E.jsxs)("div",{className:"form-group",children:[Object(E.jsx)("label",{htmlFor:"customerName",children:"Customer Name"}),Object(E.jsx)("input",{type:"text",className:"form-control",id:"customerName",placeholder:"Cutsomer name",onChange:function(e){o(e.target.value)},required:!0})]}),Object(E.jsxs)("div",{className:"form-group",children:[Object(E.jsx)("label",{htmlFor:"contactNumber",children:"Contact Number"}),Object(E.jsx)("input",{type:"text",className:"form-control",id:"contactNumber",placeholder:"Contact Number",onChange:function(e){u(e.target.value)},required:!0})]})]}),r.length>0&&Object(E.jsxs)("div",{className:"cart-item-header",children:[Object(E.jsx)("p",{className:"cart-item-name",children:"Name"}),Object(E.jsx)("p",{children:"Quantity"}),Object(E.jsx)("p",{children:"Amount"})]}),r.map((function(e){return Object(E.jsxs)("div",{className:"cart-item-details",children:[Object(E.jsx)("p",{className:"cart-item-name",children:e.itemName}),Object(E.jsx)("p",{children:e.itemQty}),Object(E.jsx)("p",{children:10*e.itemQty})]},Math.random())})),r.length>0&&Object(E.jsx)("p",{style:{borderTop:"1px solid gray",width:"500px",marginTop:"10px",marginBottom:0}}),r.length>0&&Object(E.jsx)("div",{style:{marginTop:"0px"},children:Object(E.jsxs)("h3",{style:{margin:0,marginLeft:"160px"},children:["Total Amount = ",Object(E.jsx)("span",{style:{fontWeight:300},children:v})]})}),Object(E.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Create Order"}),Object(E.jsx)("p",{className:"clear-cart-button",onClick:function(){n()},children:"Clear Cart"})]})]})]})}))),K=(a(52),Object(s.b)((function(e){return{allOrders:e.allOrders}}),(function(e){return{orders_list_after_delete:function(t){return e(_(t))}}}))((function(e){var t=e.allOrders,a=e.orders_list_after_delete,c=function(e){console.log(e);var t=JSON.parse(localStorage.getItem("allOrders"))||[];t=t.filter((function(t){return t.orderId!==e})),localStorage.setItem("allOrders",JSON.stringify(t)),a(e)};return Object(E.jsxs)("div",{children:[Object(E.jsx)(M,{}),Object(E.jsx)("h1",{style:{textAlign:"center",marginTop:"20px",marginLeft:"150px"},children:"ALL ORDERS"}),t.map((function(e){return Object(E.jsx)(H,{myOrderDetails:e,delete_order_by_id:c},Math.random())}))]})}))),H=function(e){var t=e.myOrderDetails,a=t.customerName,c=t.contactNumber,r=t.orderId,n=t.cartItem,s=n.reduce((function(e,t){return e+10*t.itemQty}),0);return Object(E.jsxs)("div",{className:"my-order-list",style:{width:"75%"},children:[Object(E.jsxs)("div",{className:"my-order-user-details",children:[Object(E.jsxs)("p",{children:["CUSTOMER NAME: ",Object(E.jsx)("span",{children:a})]}),Object(E.jsxs)("p",{children:["CONTACT NUMBER: ",Object(E.jsx)("span",{children:c})]}),Object(E.jsxs)("p",{children:["ORDER ID : ",Object(E.jsx)("span",{children:r})]})]}),Object(E.jsxs)("div",{className:"cart-item-header ",children:[Object(E.jsx)("h4",{className:"cart-item-name",children:"Name"}),Object(E.jsx)("h4",{children:"Quantity"}),Object(E.jsx)("h4",{children:"Amount"})]}),n.map((function(e){return Object(E.jsxs)("div",{className:"cart-item-details",children:[Object(E.jsx)("p",{className:"cart-item-name",children:e.itemName}),Object(E.jsx)("p",{children:e.itemQty}),Object(E.jsx)("p",{children:10*e.itemQty})]},Math.random())})),Object(E.jsx)("p",{style:{borderTop:"1px solid gray",width:"100%",marginTop:"10px",marginBottom:0}}),Object(E.jsx)("div",{style:{marginTop:"0px"},children:Object(E.jsxs)("h3",{style:{margin:0,marginLeft:"58%",marginTop:"10px"},children:["Total Amount = ",Object(E.jsx)("span",{style:{fontWeight:300},children:s})]})}),Object(E.jsxs)("div",{className:"delete_order_icon",onClick:function(){return e.delete_order_by_id(r)},children:[" ",Object(E.jsx)("i",{className:"fas fa-trash"})]})]})},Z=Object(s.b)((function(e){return{cartItem:e.cartItem}}),(function(e){return{create_order:function(t){return e(I(t))},add_to_cart:function(t){return e(L(t))},empty_cart:function(){return e(C())}}}))((function(e){var t=e.create_order,a=e.add_to_cart,r=e.cartItem,n=e.empty_cart,s=Object(c.useState)(""),i=Object(T.a)(s,2),l=i[0],o=i[1],d=Object(c.useState)(""),j=Object(T.a)(d,2),m=j[0],u=j[1],b=Object(c.useState)(""),O=Object(T.a)(b,2),x=O[0],p=O[1],h=Object(c.useState)(""),f=Object(T.a)(h,2),g=f[0],N=f[1],v=r.reduce((function(e,t){return e+10*t.itemQty}),0);return Object(E.jsxs)("div",{children:[Object(E.jsx)(M,{}),Object(E.jsx)("h1",{style:{margin:"20px",textAlign:"center",marginLeft:"14%"},children:"Make an Order"}),Object(E.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(E.jsxs)("div",{className:"add_to_cart",children:[Object(E.jsxs)("label",{type:"text",onChange:function(e){return p(e.target.value)},children:["Medicine ",Object(E.jsx)("input",{})]}),Object(E.jsxs)("label",{type:"Number",onChange:function(e){return N(e.target.value)},children:["Quantity ",Object(E.jsx)("input",{})]}),Object(E.jsxs)("p",{children:["Price per unit ",20]}),Object(E.jsx)("button",{className:"btn btn-secondary",onClick:function(e){var t={itemName:x,itemQty:g};(r=JSON.parse(localStorage.getItem("cartItem"))||[]).push(t),localStorage.setItem("cartItem",JSON.stringify(r)),a(t)},children:"Add to Cart"})]}),Object(E.jsxs)("form",{className:"create_order_form",onSubmit:function(e){var a={customerName:l,contactNumber:m,cartItem:r,orderId:Math.floor(1e8*Math.random()+1)};e.preventDefault(),e.target[0].value="",e.target[1].value="",t(a);var c=JSON.parse(localStorage.getItem("allOrders"))||[];c.push(a),localStorage.setItem("allOrders",JSON.stringify(c)),localStorage.setItem("cartItem",JSON.stringify([])),n()},children:[Object(E.jsxs)("div",{className:"executive_details",children:[Object(E.jsxs)("div",{className:"form-group",children:[Object(E.jsx)("label",{htmlFor:"customerName",children:"Customer Name"}),Object(E.jsx)("input",{type:"text",className:"form-control",id:"customerName",placeholder:"Cutsomer name",onChange:function(e){o(e.target.value)},required:!0})]}),Object(E.jsxs)("div",{className:"form-group",children:[Object(E.jsx)("label",{htmlFor:"contactNumber",children:"Contact Number"}),Object(E.jsx)("input",{type:"text",className:"form-control",id:"contactNumber",placeholder:"Contact Number",onChange:function(e){u(e.target.value)},required:!0})]})]}),r.length>0&&Object(E.jsxs)("div",{className:"cart-item-header",children:[Object(E.jsx)("p",{className:"cart-item-name",children:"Name"}),Object(E.jsx)("p",{children:"Quantity"}),Object(E.jsx)("p",{children:"Amount"})]}),r.map((function(e){return Object(E.jsxs)("div",{className:"cart-item-details",children:[Object(E.jsx)("p",{className:"cart-item-name",children:e.itemName}),Object(E.jsx)("p",{children:e.itemQty}),Object(E.jsx)("p",{children:10*e.itemQty})]},Math.random())})),r.length>0&&Object(E.jsx)("p",{style:{borderTop:"1px solid gray",width:"500px",marginTop:"10px",marginBottom:0}}),r.length>0&&Object(E.jsx)("div",{style:{marginTop:"0px"},children:Object(E.jsxs)("h3",{style:{margin:0,marginLeft:"160px"},children:["Total Amount = ",Object(E.jsx)("span",{style:{fontWeight:300},children:v})]})}),Object(E.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Create Order"}),Object(E.jsx)("p",{className:"clear-cart-button",onClick:function(){n()},children:"Clear Cart"})]})]})]})}));var z=Object(s.b)((function(e){return{adminLogin:e.adminLogin,loginStatus:e.loginStatus,salesLogin:e.salesLogin}}),null)((function(e){var t=e.adminLogin,a=e.loginStatus,c=e.salesLogin;return Object(E.jsx)("div",{children:Object(E.jsxs)(A.a,{children:[Object(E.jsx)(F,{}),console.log(t,a),Object(E.jsxs)(D.c,{children:[Object(E.jsx)(D.a,{path:"/",exact:!0,children:Object(E.jsx)(J,{})}),Object(E.jsx)(D.a,{path:"/login",exact:!0,children:Object(E.jsx)(J,{})}),t&&a&&Object(E.jsxs)(D.a,{path:"/",exact:!0,children:[Object(E.jsx)(R,{})," "]}),t&&a&&Object(E.jsxs)(D.a,{path:"/admin/add_medicine",children:[Object(E.jsx)(R,{})," "]}),t&&a&&Object(E.jsxs)(D.a,{path:"/admin/view_inventory",children:[Object(E.jsx)(P,{})," "]}),t&&a&&Object(E.jsxs)(D.a,{path:"/admin/add_sales_executive",children:[Object(E.jsx)(V,{})," "]}),t&&a&&Object(E.jsxs)(D.a,{path:"/admin/view_team",children:[Object(E.jsx)(G,{})," "]}),t&&a&&Object(E.jsxs)(D.a,{path:"/admin/show_all_orders",children:[Object(E.jsx)(K,{})," "]}),t&&a&&Object(E.jsxs)(D.a,{path:"/admin/create_orders",children:[Object(E.jsx)(Z,{})," "]}),c&&a&&Object(E.jsx)(D.a,{path:"/sales_executive/create_order",children:Object(E.jsx)(X,{})}),c&&a&&Object(E.jsxs)(D.a,{path:"/sales_executive/view_orders",children:[Object(E.jsx)(Y,{})," "]})]})]})})})),$=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,54)).then((function(t){var a=t.getCLS,c=t.getFID,r=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),c(e),r(e),n(e),s(e)}))},ee=a(25),te=a(15),ae=a(3),ce={loginStatus:"true"===localStorage.getItem("loginStatus"),adminLogin:"true"===localStorage.getItem("adminLogin"),salesLogin:"true"===localStorage.getItem("salesLogin"),inventoryList:JSON.parse(localStorage.getItem("inventoryList"))||[],teamList:JSON.parse(localStorage.getItem("teamList"))||[],allOrders:JSON.parse(localStorage.getItem("allOrders"))||[],cartItem:JSON.parse(localStorage.getItem("cartItem"))||[],userIdForUpdate:localStorage.getItem("userIdForUpdate"),medicineIdForUpdate:localStorage.getItem("medicineIdForUpdate")},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0,a=t.type,c=t.payload;switch(a){case i:return Object(ae.a)(Object(ae.a)({},e),{},{loginStatus:!0,adminLogin:!0});case l:return Object(ae.a)(Object(ae.a)({},e),{},{loginStatus:!1,adminLogin:!1});case o:return Object(ae.a)(Object(ae.a)({},e),{},{loginStatus:!0,salesLogin:!0});case d:return Object(ae.a)(Object(ae.a)({},e),{},{loginStatus:!1,salesLogin:!1});case j:return Object(ae.a)(Object(ae.a)({},e),{},{inventoryList:[].concat(Object(te.a)(e.inventoryList),[c])});case m:return Object(ae.a)(Object(ae.a)({},e),{},{teamList:[].concat(Object(te.a)(e.teamList),[c])});case u:return Object(ae.a)(Object(ae.a)({},e),{},{allOrders:[].concat(Object(te.a)(e.allOrders),[c])});case b:return Object(ae.a)(Object(ae.a)({},e),{},{cartItem:[].concat(Object(te.a)(e.cartItem),[c])});case O:return Object(ae.a)(Object(ae.a)({},e),{},{cartItem:[]});case x:return Object(ae.a)(Object(ae.a)({},e),{},{inventoryList:e.inventoryList.filter((function(e){return e.medicineName!==c}))});case p:return Object(ae.a)(Object(ae.a)({},e),{},{teamList:e.teamList.filter((function(e){return e.salesExecutiveId!==c}))});case h:return Object(ae.a)(Object(ae.a)({},e),{},{allOrders:e.allOrders.filter((function(e){return e.orderId!==c}))});case f:return Object(ae.a)(Object(ae.a)({},e),{},{teamList:c});case g:return Object(ae.a)(Object(ae.a)({},e),{},{inventoryList:c});case v:return Object(ae.a)(Object(ae.a)({},e),{},{medicineIdForUpdate:c});case N:return Object(ae.a)(Object(ae.a)({},e),{},{userIdForUpdate:c});default:return e}},ne=Object(ee.a)(re);n.a.render(Object(E.jsx)(s.a,{store:ne,children:Object(E.jsx)(z,{})}),document.getElementById("root")),$()}},[[53,1,2]]]);
//# sourceMappingURL=main.0c7a7e5a.chunk.js.map