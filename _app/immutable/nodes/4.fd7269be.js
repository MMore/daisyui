import{s as ce,r as me,f as h,a as $,G as ue,g,d as o,c as w,h as x,A as fe,j as f,x as d,i as I,u as de,v as he,w as ge,z as se,o as pe,J as re,D as _e,l as ve,m as $e}from"../chunks/scheduler.cc1ce551.js";import{S as we,i as xe,b as U,d as z,m as F,a as j,t as A,e as K}from"../chunks/index.ffedd617.js";import{g as be}from"../chunks/globals.7f7f1b26.js";import{e as ne}from"../chunks/each.e59479a4.js";import{p as Ie}from"../chunks/stores.aaf3af4b.js";import{N as ye,a as ke,o as Le}from"../chunks/Scripts.9544f727.js";import{l as Ee,c as Z}from"../chunks/i18n.ec9deb8e.js";import{F as Se}from"../chunks/Footer.e892a0be.js";import{S as Ve,A as De}from"../chunks/Ads.2aa5b475.js";const{document:R}=be;function oe(m,l,s){const i=m.slice();return i[6]=l[s],i}function Ce(m){let l,s,i="Tags",p,c=ne(m[1]),r=[];for(let a=0;a<c.length;a+=1)r[a]=ie(oe(m,c,a));return{c(){l=h("ul"),s=h("li"),s.textContent=i,p=$();for(let a=0;a<r.length;a+=1)r[a].c();this.h()},l(a){l=g(a,"UL",{class:!0});var n=x(l);s=g(n,"LI",{class:!0,"data-svelte-h":!0}),fe(s)!=="svelte-slrl5a"&&(s.textContent=i),p=w(n);for(let t=0;t<r.length;t+=1)r[t].l(n);n.forEach(o),this.h()},h(){f(s,"class","menu-title"),f(l,"class","menu menu-horizontal lg:w-56 lg:menu-vertical")},m(a,n){I(a,l,n),d(l,s),d(l,p);for(let t=0;t<r.length;t+=1)r[t]&&r[t].m(l,null)},p(a,n){if(n&3){c=ne(a[1]);let t;for(t=0;t<c.length;t+=1){const v=oe(a,c,t);r[t]?r[t].p(v,n):(r[t]=ie(v),r[t].c(),r[t].m(l,null))}for(;t<r.length;t+=1)r[t].d(1);r.length=c.length}},d(a){a&&o(l),_e(r,a)}}}function ie(m){let l,s,i=m[6]+"",p,c,r;return{c(){l=h("li"),s=h("a"),p=ve(i),r=$(),this.h()},l(a){l=g(a,"LI",{});var n=x(l);s=g(n,"A",{"data-sveltekit-reload":!0,href:!0,class:!0});var t=x(s);p=$e(t,i),t.forEach(o),r=w(n),n.forEach(o),this.h()},h(){f(s,"data-sveltekit-reload",""),f(s,"href",`/blog/tag/${m[6].replace(/ /g,"-").toLowerCase()}`),f(s,"class",c=m[6].replace(/ /g,"-").toLowerCase()===m[0].url.pathname.split("/").at(-2)&&"active")},m(a,n){I(a,l,n),d(l,s),d(s,p),d(l,r)},p(a,n){n&1&&c!==(c=a[6].replace(/ /g,"-").toLowerCase()===a[0].url.pathname.split("/").at(-2)&&"active")&&f(s,"class",c)},d(a){a&&o(l)}}}function Ne(m){let l,s,i,p,c,r,a,n,t,v,y,k,ee='<a href="/blog" class="hover:opacity-80 inline-block"><h1 class="font-title text-xl font-extrabold text-base-content">daisyUI blog</h1></a> <p class="text-xs italic text-base-content/60">Updates, ideas and resources</p>',O,Q,D,W,C,L,X,E,M,N,P,S,q,V,T;c=new ye({props:{hideSidebarButton:"true"}});let b=m[1].length>0&&Ce(m);const Y=m[4].default,_=me(Y,m,m[3],null);return L=new Ve({props:{wrapperClasses:"flex-col sm:flex-row"}}),E=new De({props:{slot:"carbon2"}}),S=new Se({}),V=new ke({}),{c(){l=h("link"),s=h("link"),i=h("link"),p=$(),U(c.$$.fragment),r=$(),a=h("div"),n=h("div"),t=h("div"),v=h("div"),y=h("div"),k=h("div"),k.innerHTML=ee,O=$(),b&&b.c(),Q=$(),D=h("div"),_&&_.c(),W=$(),C=h("div"),U(L.$$.fragment),X=$(),U(E.$$.fragment),M=$(),N=h("div"),P=$(),U(S.$$.fragment),q=$(),U(V.$$.fragment),this.h()},l(e){const u=ue("svelte-1wagzpy",R.head);l=g(u,"LINK",{rel:!0,href:!0}),s=g(u,"LINK",{rel:!0,href:!0,crossorigin:!0}),i=g(u,"LINK",{href:!0,rel:!0}),u.forEach(o),p=w(e),z(c.$$.fragment,e),r=w(e),a=g(e,"DIV",{class:!0});var H=x(a);n=g(H,"DIV",{class:!0});var J=x(n);t=g(J,"DIV",{class:!0});var B=x(t);v=g(B,"DIV",{class:!0});var te=x(v);y=g(te,"DIV",{class:!0});var G=x(y);k=g(G,"DIV",{class:!0,"data-svelte-h":!0}),fe(k)!=="svelte-3g9qpd"&&(k.innerHTML=ee),O=w(G),b&&b.l(G),G.forEach(o),te.forEach(o),Q=w(B),D=g(B,"DIV",{class:!0});var ae=x(D);_&&_.l(ae),ae.forEach(o),B.forEach(o),W=w(J),C=g(J,"DIV",{class:!0});var le=x(C);z(L.$$.fragment,le),le.forEach(o),J.forEach(o),X=w(H),z(E.$$.fragment,H),H.forEach(o),M=w(e),N=g(e,"DIV",{class:!0}),x(N).forEach(o),P=w(e),z(S.$$.fragment,e),q=w(e),z(V.$$.fragment,e),this.h()},h(){f(l,"rel","preconnect"),f(l,"href","https://fonts.googleapis.com"),f(s,"rel","preconnect"),f(s,"href","https://fonts.gstatic.com"),f(s,"crossorigin",""),f(i,"href","https://fonts.googleapis.com/css2?family=Figtree:wght@300;900&family=Noto+Sans+JP:wght@300;900&family=Noto+Sans:wght@300;900&display=swap"),f(i,"rel","stylesheet"),f(k,"class","px-6 mb-8"),f(y,"class","sticky top-32 mx-auto sm:max-w-none"),f(v,"class","max-w-2xl max-lg:w-full max-lg:mx-auto"),f(D,"class","w-full max-w-2xl mx-auto"),f(t,"class","flex flex-col lg:flex-row justify-center w-full p-4 gap-6 min-h-[50vh]"),f(C,"class","flex justify-center xl:hidden"),f(n,"class","max-w-none w-full flex-grow pt-10"),f(a,"class","flex flex-col-reverse justify-between gap-6 xl:flex-row"),f(N,"class","h-20")},m(e,u){d(R.head,l),d(R.head,s),d(R.head,i),I(e,p,u),F(c,e,u),I(e,r,u),I(e,a,u),d(a,n),d(n,t),d(t,v),d(v,y),d(y,k),d(y,O),b&&b.m(y,null),d(t,Q),d(t,D),_&&_.m(D,null),d(n,W),d(n,C),F(L,C,null),d(a,X),F(E,a,null),I(e,M,u),I(e,N,u),I(e,P,u),F(S,e,u),I(e,q,u),F(V,e,u),T=!0},p(e,[u]){e[1].length>0&&b.p(e,u),_&&_.p&&(!T||u&8)&&de(_,Y,e,e[3],T?ge(Y,e[3],u,null):he(e[3]),null)},i(e){T||(j(c.$$.fragment,e),j(_,e),j(L.$$.fragment,e),j(E.$$.fragment,e),j(S.$$.fragment,e),j(V.$$.fragment,e),T=!0)},o(e){A(c.$$.fragment,e),A(_,e),A(L.$$.fragment,e),A(E.$$.fragment,e),A(S.$$.fragment,e),A(V.$$.fragment,e),T=!1},d(e){e&&(o(p),o(r),o(a),o(M),o(N),o(P),o(q)),o(l),o(s),o(i),K(c,e),b&&b.d(),_&&_.d(e),K(L),K(E),K(S,e),K(V,e)}}}function Te(m,l,s){let i,p;se(m,Z,t=>s(5,i=t)),se(m,Ie,t=>s(0,p=t));let{$$slots:c={},$$scope:r}=l;Le(t=>{if(document.startViewTransition)return new Promise(v=>{document.startViewTransition(async()=>{v(),await t.complete})})}),pe(()=>{let t=new URL(document.location).searchParams.get("lang");Ee.includes(t)&&(re(Z,i=t,i),localStorage.setItem("lang",i)),localStorage.getItem("lang")&&re(Z,i=localStorage.getItem("lang"),i)});let{data:a}=l,{tags:n}=a;return m.$$set=t=>{"data"in t&&s(2,a=t.data),"$$scope"in t&&s(3,r=t.$$scope)},[p,n,a,r,c]}class He extends we{constructor(l){super(),xe(this,l,Te,Ne,ce,{data:2})}}export{He as component};
