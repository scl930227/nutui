import{c as e}from"./mobile.194cede0.js";import{a,s as l,x as t,r as o,o as n,c as s,f as r,q as c}from"./vendor.f6cc4281.js";import"./index.77feaf28.js";const{createDemo:u}=e("textarea");var v=u({setup(){const e=a({val0:"",val1:"初始数据"});setTimeout((function(){e.val1="异步测试数据，2秒"}),2e3);return{state:e,change:e=>{console.log("change: ",e)}}}});const d=c();l("data-v-83843c7e");const h={class:"demo-nopading"},i=r("h2",null,"基础用法",-1),p=r("h2",null,"显示字数统计",-1),g=r("h2",null,"只读",-1);t();const m=d(((e,a,l,t,c,u)=>{const v=o("nut-textarea");return n(),s("div",h,[i,r(v,{value:e.state.val0,"onUpdate:value":a[1]||(a[1]=a=>e.state.val0=a),onChange:e.change,rows:"10",placeholder:"高度可拉伸",autosize:!0,label:"留言："},null,8,["value","onChange"]),p,r(v,{value:e.state.val1,"onUpdate:value":a[2]||(a[2]=a=>e.state.val1=a),onChange:e.change,rows:"5","limit-show":!0,"max-length":"20",placeholder:"设置输入五行",label:"留言："},null,8,["value","onChange"]),g,r(v,{readonly:"true",rows:"5",placeholder:"只读",label:"留言："})])}));v.render=m,v.__scopeId="data-v-83843c7e";export default v;
