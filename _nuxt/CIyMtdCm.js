import{bh as U,z as C,aJ as Y,au as Ve,r as z,d as I,bi as L,ax as F,i as m,E as y,w as g,R as w,D as a,az as R,aw as K,bj as ce,V as de,b5 as Z,o as ee,a8 as ze,g as b,aE as D,f as E,aS as fe,bk as ie,bl as pe,b as Be,aF as Fe,aO as Re,bm as Oe,x as X,c as V,e as h,ai as Ee,ao as me,n as $,t as B,F as M,am as H,G as j,af as te,y as ae,aj as N,an as Pe,A as ge,aX as q,aM as ve,aR as be,aZ as _e,bn as G,aY as he,bg as De,q as Me,s as He}from"./Cq9BnROW.js";import{_ as ye}from"./CpkdwNf2.js";import{u as J,_ as je}from"./DTUc-PER.js";import{_ as Ne}from"./D9TQuUI6.js";import{u as xe}from"./D4TvKL2b.js";import{q as we}from"./w1F8urJI.js";import{_ as Le}from"./C8s-rip_.js";import{r as le}from"./CbqvABEs.js";import{_ as Ke}from"./DlAUqK2U.js";function Ue(o){return o==null}function qe(o,n){return Ue(o)?!1:Array.isArray(o)?o.some(e=>U(e,n)):U(o,n)}function Ge({type:o,defaultValue:n,modelValue:e}){const t=e||n;return e!==void 0||n!==void 0?Array.isArray(t)?"multiple":"single":o??"single"}function Ye({type:o,defaultValue:n,modelValue:e}){return o||Ge({type:o,defaultValue:n,modelValue:e})}function Xe({type:o,defaultValue:n}){return n!==void 0?n:o==="single"?void 0:[]}function Je(o,n){const e=C(()=>Ye(o)),t=Y(o,"modelValue",n,{defaultValue:Xe(o),passive:o.modelValue===void 0,deep:!0});function s(i){if(e.value==="single")t.value=U(i,t.value)?void 0:i;else{const l=Array.isArray(t.value)?[...t.value||[]]:[t.value].filter(Boolean);if(qe(l,i)){const c=l.findIndex(d=>U(d,i));l.splice(c,1)}else l.push(i);t.value=l}}const u=C(()=>e.value==="single");return{modelValue:t,changeModelValue:s,isSingle:u}}function oe(o){const n=Ve({dir:z("ltr")});return C(()=>{var e;return(o==null?void 0:o.value)||((e=n.dir)==null?void 0:e.value)||"ltr"})}const[Q,Qe]=K("AccordionRoot"),We=I({__name:"AccordionRoot",props:{collapsible:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},dir:{},orientation:{default:"vertical"},unmountOnHide:{type:Boolean,default:!0},asChild:{type:Boolean},as:{},type:{},modelValue:{},defaultValue:{}},emits:["update:modelValue"],setup(o,{emit:n}){const e=o,t=n,{dir:s,disabled:u,unmountOnHide:i}=L(e),l=oe(s),{modelValue:c,changeModelValue:d,isSingle:p}=Je(e,t),{forwardRef:r,currentElement:f}=F();return Qe({disabled:u,direction:l,orientation:e.orientation,parentElement:f,isSingle:p,collapsible:e.collapsible,modelValue:c,changeModelValue:d,unmountOnHide:i}),(x,v)=>(m(),y(a(R),{ref:a(r),"as-child":x.asChild,as:x.as},{default:g(()=>[w(x.$slots,"default",{modelValue:a(c)})]),_:3},8,["as-child","as"]))}}),[Ce,Ze]=K("CollapsibleRoot"),et=I({__name:"CollapsibleRoot",props:{defaultOpen:{type:Boolean,default:!1},open:{type:Boolean,default:void 0},disabled:{type:Boolean},unmountOnHide:{type:Boolean,default:!0},asChild:{type:Boolean},as:{}},emits:["update:open"],setup(o,{expose:n,emit:e}){const t=o,u=Y(t,"open",e,{defaultValue:t.defaultOpen,passive:t.open===void 0}),{disabled:i,unmountOnHide:l}=L(t);return Ze({contentId:"",disabled:i,open:u,unmountOnHide:l,onOpenToggle:()=>{u.value=!u.value}}),n({open:u}),F(),(c,d)=>(m(),y(a(R),{as:c.as,"as-child":t.asChild,"data-state":a(u)?"open":"closed","data-disabled":a(i)?"":void 0},{default:g(()=>[w(c.$slots,"default",{open:a(u)})]),_:3},8,["as","as-child","data-state","data-disabled"]))}}),tt=["INPUT","TEXTAREA"];function at(o,n,e,t={}){if(!n||t.enableIgnoredElement&&tt.includes(n.nodeName))return null;const{arrowKeyOptions:s="both",attributeName:u="[data-reka-collection-item]",itemsArray:i=[],loop:l=!0,dir:c="ltr",preventScroll:d=!0,focus:p=!1}=t,[r,f,x,v,k,T]=[o.key==="ArrowRight",o.key==="ArrowLeft",o.key==="ArrowUp",o.key==="ArrowDown",o.key==="Home",o.key==="End"],_=x||v,A=r||f;if(!k&&!T&&(!_&&!A||s==="vertical"&&A||s==="horizontal"&&_))return null;const S=e?Array.from(e.querySelectorAll(u)):i;if(!S.length)return null;d&&o.preventDefault();let O=null;return A||_?O=Ie(S,n,{goForward:_?v:c==="ltr"?r:f,loop:l}):k?O=S.at(0)||null:T&&(O=S.at(-1)||null),p&&(O==null||O.focus()),O}function Ie(o,n,e,t=o.length){if(--t===0)return null;const s=o.indexOf(n),u=e.goForward?s+1:s-1;if(!e.loop&&(u<0||u>=o.length))return null;const i=(u+o.length)%o.length,l=o[i];return l?l.hasAttribute("disabled")&&l.getAttribute("disabled")!=="false"?Ie(o,l,e,t):l:null}const[ne,ot]=K("AccordionItem"),nt=I({__name:"AccordionItem",props:{disabled:{type:Boolean},value:{},unmountOnHide:{type:Boolean},asChild:{type:Boolean},as:{}},setup(o,{expose:n}){const e=o,t=Q(),s=C(()=>t.isSingle.value?e.value===t.modelValue.value:Array.isArray(t.modelValue.value)&&t.modelValue.value.includes(e.value)),u=C(()=>t.disabled.value||e.disabled),i=C(()=>u.value?"":void 0),l=C(()=>s.value?"open":"closed");n({open:s,dataDisabled:i});const{currentRef:c,currentElement:d}=F();ot({open:s,dataState:l,disabled:u,dataDisabled:i,triggerId:"",currentRef:c,currentElement:d,value:C(()=>e.value)});function p(r){var k;const f=r.target;if(Array.from(((k=t.parentElement.value)==null?void 0:k.querySelectorAll("[data-reka-collection-item]"))??[]).findIndex(T=>T===f)===-1)return null;at(r,d.value,t.parentElement.value,{arrowKeyOptions:t.orientation,dir:t.direction.value,focus:!0})}return(r,f)=>(m(),y(a(et),{"data-orientation":a(t).orientation,"data-disabled":i.value,"data-state":l.value,disabled:u.value,open:s.value,as:e.as,"as-child":e.asChild,"unmount-on-hide":a(t).unmountOnHide.value,onKeydown:ce(p,["up","down","left","right","home","end"])},{default:g(()=>[w(r.$slots,"default",{open:s.value})]),_:3},8,["data-orientation","data-disabled","data-state","disabled","open","as","as-child","unmount-on-hide"]))}}),st=I({inheritAttrs:!1,__name:"CollapsibleContent",props:{forceMount:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["contentFound"],setup(o,{emit:n}){const e=o,t=n,s=Ce();s.contentId||(s.contentId=J(void 0,"reka-collapsible-content"));const u=z(),{forwardRef:i,currentElement:l}=F(),c=z(0),d=z(0),p=C(()=>s.open.value),r=z(p.value),f=z();de(()=>{var v;return[p.value,(v=u.value)==null?void 0:v.present]},async()=>{await Z();const v=l.value;if(!v)return;f.value=f.value||{transitionDuration:v.style.transitionDuration,animationName:v.style.animationName},v.style.transitionDuration="0s",v.style.animationName="none";const k=v.getBoundingClientRect();d.value=k.height,c.value=k.width,r.value||(v.style.transitionDuration=f.value.transitionDuration,v.style.animationName=f.value.animationName)},{immediate:!0});const x=C(()=>r.value&&s.open.value);return ee(()=>{requestAnimationFrame(()=>{r.value=!1})}),ze(l,"beforematch",v=>{requestAnimationFrame(()=>{s.onOpenToggle(),t("contentFound")})}),(v,k)=>(m(),y(a(fe),{ref_key:"presentRef",ref:u,present:v.forceMount||a(s).open.value,"force-mount":!0},{default:g(({present:T})=>{var _;return[b(a(R),D(v.$attrs,{id:a(s).contentId,ref:a(i),"as-child":e.asChild,as:v.as,hidden:T?void 0:a(s).unmountOnHide.value?"":"until-found","data-state":x.value?void 0:a(s).open.value?"open":"closed","data-disabled":(_=a(s).disabled)!=null&&_.value?"":void 0,style:{"--reka-collapsible-content-height":`${d.value}px`,"--reka-collapsible-content-width":`${c.value}px`}}),{default:g(()=>[!a(s).unmountOnHide.value||T?w(v.$slots,"default",{key:0}):E("",!0)]),_:2},1040,["id","as-child","as","hidden","data-state","data-disabled","style"])]}),_:3},8,["present"]))}}),it=I({__name:"AccordionContent",props:{forceMount:{type:Boolean},asChild:{type:Boolean},as:{}},setup(o){const n=o,e=Q(),t=ne();return F(),(s,u)=>(m(),y(a(st),{role:"region","as-child":n.asChild,"force-mount":n.forceMount,"aria-labelledby":a(t).triggerId,"data-state":a(t).dataState.value,"data-disabled":a(t).dataDisabled.value,"data-orientation":a(e).orientation,style:{"--reka-accordion-content-width":"var(--reka-collapsible-content-width)","--reka-accordion-content-height":"var(--reka-collapsible-content-height)"},onContentFound:u[0]||(u[0]=i=>a(e).changeModelValue(a(t).value.value))},{default:g(()=>[w(s.$slots,"default")]),_:3},8,["as-child","force-mount","aria-labelledby","data-state","data-disabled","data-orientation"]))}}),lt=I({__name:"AccordionHeader",props:{asChild:{type:Boolean},as:{default:"h3"}},setup(o){const n=o,e=Q(),t=ne();return F(),(s,u)=>(m(),y(a(R),{as:n.as,"as-child":n.asChild,"data-orientation":a(e).orientation,"data-state":a(t).dataState.value,"data-disabled":a(t).dataDisabled.value},{default:g(()=>[w(s.$slots,"default")]),_:3},8,["as","as-child","data-orientation","data-state","data-disabled"]))}}),rt=I({__name:"CollapsibleTrigger",props:{asChild:{type:Boolean},as:{default:"button"}},setup(o){const n=o;F();const e=Ce();return(t,s)=>{var u,i;return m(),y(a(R),{type:t.as==="button"?"button":void 0,as:t.as,"as-child":n.asChild,"aria-controls":a(e).contentId,"aria-expanded":a(e).open.value,"data-state":a(e).open.value?"open":"closed","data-disabled":(u=a(e).disabled)!=null&&u.value?"":void 0,disabled:(i=a(e).disabled)==null?void 0:i.value,onClick:a(e).onOpenToggle},{default:g(()=>[w(t.$slots,"default")]),_:3},8,["type","as","as-child","aria-controls","aria-expanded","data-state","data-disabled","disabled","onClick"])}}}),ut=I({__name:"AccordionTrigger",props:{asChild:{type:Boolean},as:{}},setup(o){const n=o,e=Q(),t=ne();t.triggerId||(t.triggerId=J(void 0,"reka-accordion-trigger"));function s(){const u=e.isSingle.value&&t.open.value&&!e.collapsible;t.disabled.value||u||e.changeModelValue(t.value.value)}return(u,i)=>(m(),y(a(rt),{id:a(t).triggerId,ref:a(t).currentRef,"data-reka-collection-item":"",as:n.as,"as-child":n.asChild,"aria-disabled":a(t).disabled.value||void 0,"aria-expanded":a(t).open.value||!1,"data-disabled":a(t).dataDisabled.value,"data-orientation":a(e).orientation,"data-state":a(t).dataState.value,disabled:a(t).disabled.value,onClick:s},{default:g(()=>[w(u.$slots,"default")]),_:3},8,["id","as","as-child","aria-disabled","aria-expanded","data-disabled","data-orientation","data-state","disabled"]))}}),ct="rovingFocusGroup.onEntryFocus",dt={bubbles:!1,cancelable:!0},ft={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function pt(o,n){return n!=="rtl"?o:o==="ArrowLeft"?"ArrowRight":o==="ArrowRight"?"ArrowLeft":o}function mt(o,n,e){const t=pt(o.key,e);if(!(n==="vertical"&&["ArrowLeft","ArrowRight"].includes(t))&&!(n==="horizontal"&&["ArrowUp","ArrowDown"].includes(t)))return ft[t]}function $e(o,n=!1){const e=ie();for(const t of o)if(t===e||(t.focus({preventScroll:n}),ie()!==e))return}function gt(o,n){return o.map((e,t)=>o[(n+t)%o.length])}const[vt,bt]=K("RovingFocusGroup"),_t=I({__name:"RovingFocusGroup",props:{orientation:{default:void 0},dir:{},loop:{type:Boolean,default:!1},currentTabStopId:{},defaultCurrentTabStopId:{},preventScrollOnEntryFocus:{type:Boolean,default:!1},asChild:{type:Boolean},as:{}},emits:["entryFocus","update:currentTabStopId"],setup(o,{expose:n,emit:e}){const t=o,s=e,{loop:u,orientation:i,dir:l}=L(t),c=oe(l),d=Y(t,"currentTabStopId",s,{defaultValue:t.defaultCurrentTabStopId,passive:t.currentTabStopId===void 0}),p=z(!1),r=z(!1),f=z(0),{getItems:x,CollectionSlot:v}=pe({isProvider:!0});function k(_){const A=!r.value;if(_.currentTarget&&_.target===_.currentTarget&&A&&!p.value){const S=new CustomEvent(ct,dt);if(_.currentTarget.dispatchEvent(S),s("entryFocus",S),!S.defaultPrevented){const O=x().map(P=>P.ref).filter(P=>P.dataset.disabled!==""),se=O.find(P=>P.getAttribute("data-active")==="true"),Se=O.find(P=>P.id===d.value),Te=[se,Se,...O].filter(Boolean);$e(Te,t.preventScrollOnEntryFocus)}}r.value=!1}function T(){setTimeout(()=>{r.value=!1},1)}return n({getItems:x}),bt({loop:u,dir:c,orientation:i,currentTabStopId:d,onItemFocus:_=>{d.value=_},onItemShiftTab:()=>{p.value=!0},onFocusableItemAdd:()=>{f.value++},onFocusableItemRemove:()=>{f.value--}}),(_,A)=>(m(),y(a(v),null,{default:g(()=>[b(a(R),{tabindex:p.value||f.value===0?-1:0,"data-orientation":a(i),as:_.as,"as-child":_.asChild,dir:a(c),style:{outline:"none"},onMousedown:A[0]||(A[0]=S=>r.value=!0),onMouseup:T,onFocus:k,onBlur:A[1]||(A[1]=S=>p.value=!1)},{default:g(()=>[w(_.$slots,"default")]),_:3},8,["tabindex","data-orientation","as","as-child","dir"])]),_:3}))}}),ht=I({__name:"RovingFocusItem",props:{tabStopId:{},focusable:{type:Boolean,default:!0},active:{type:Boolean,default:!0},allowShiftKey:{type:Boolean},asChild:{type:Boolean},as:{default:"span"}},setup(o){const n=o,e=vt(),t=J(),s=C(()=>n.tabStopId||t),u=C(()=>e.currentTabStopId.value===s.value),{getItems:i,CollectionItem:l}=pe();ee(()=>{n.focusable&&e.onFocusableItemAdd()}),Be(()=>{n.focusable&&e.onFocusableItemRemove()});function c(d){if(d.key==="Tab"&&d.shiftKey){e.onItemShiftTab();return}if(d.target!==d.currentTarget)return;const p=mt(d,e.orientation.value,e.dir.value);if(p!==void 0){if(d.metaKey||d.ctrlKey||d.altKey||!n.allowShiftKey&&d.shiftKey)return;d.preventDefault();let r=[...i().map(f=>f.ref).filter(f=>f.dataset.disabled!=="")];if(p==="last")r.reverse();else if(p==="prev"||p==="next"){p==="prev"&&r.reverse();const f=r.indexOf(d.currentTarget);r=e.loop.value?gt(r,f+1):r.slice(f+1)}Z(()=>$e(r))}}return(d,p)=>(m(),y(a(l),null,{default:g(()=>[b(a(R),{tabindex:u.value?0:-1,"data-orientation":a(e).orientation.value,"data-active":d.active,"data-disabled":d.focusable?void 0:"",as:d.as,"as-child":d.asChild,onMousedown:p[0]||(p[0]=r=>{d.focusable?a(e).onItemFocus(s.value):r.preventDefault()}),onFocus:p[1]||(p[1]=r=>a(e).onItemFocus(s.value)),onKeydown:c},{default:g(()=>[w(d.$slots,"default")]),_:3},8,["tabindex","data-orientation","data-active","data-disabled","as","as-child"])]),_:3}))}}),[W,yt]=K("TabsRoot"),xt=I({__name:"TabsRoot",props:{defaultValue:{},orientation:{default:"horizontal"},dir:{},activationMode:{default:"automatic"},modelValue:{},unmountOnHide:{type:Boolean,default:!0},asChild:{type:Boolean},as:{}},emits:["update:modelValue"],setup(o,{emit:n}){const e=o,t=n,{orientation:s,unmountOnHide:u,dir:i}=L(e),l=oe(i);F();const c=Y(e,"modelValue",t,{defaultValue:e.defaultValue,passive:e.modelValue===void 0}),d=z();return yt({modelValue:c,changeModelValue:p=>{c.value=p},orientation:s,dir:l,unmountOnHide:u,activationMode:e.activationMode,baseId:J(void 0,"reka-tabs"),tabsList:d}),(p,r)=>(m(),y(a(R),{dir:a(l),"data-orientation":a(s),"as-child":p.asChild,as:p.as},{default:g(()=>[w(p.$slots,"default",{modelValue:a(c)})]),_:3},8,["dir","data-orientation","as-child","as"]))}}),wt=I({__name:"TabsList",props:{loop:{type:Boolean,default:!0},asChild:{type:Boolean},as:{}},setup(o){const n=o,{loop:e}=L(n),{forwardRef:t,currentElement:s}=F(),u=W();return u.tabsList=s,(i,l)=>(m(),y(a(_t),{"as-child":"",orientation:a(u).orientation.value,dir:a(u).dir.value,loop:a(e)},{default:g(()=>[b(a(R),{ref:a(t),role:"tablist","as-child":i.asChild,as:i.as,"aria-orientation":a(u).orientation.value},{default:g(()=>[w(i.$slots,"default")]),_:3},8,["as-child","as","aria-orientation"])]),_:3},8,["orientation","dir","loop"]))}});function ke(o,n){return`${o}-trigger-${n}`}function Ae(o,n){return`${o}-content-${n}`}const Ct=I({__name:"TabsContent",props:{value:{},forceMount:{type:Boolean},asChild:{type:Boolean},as:{}},setup(o){const n=o,{forwardRef:e}=F(),t=W(),s=C(()=>ke(t.baseId,n.value)),u=C(()=>Ae(t.baseId,n.value)),i=C(()=>n.value===t.modelValue.value),l=z(i.value);return ee(()=>{requestAnimationFrame(()=>{l.value=!1})}),(c,d)=>(m(),y(a(fe),{present:c.forceMount||i.value,"force-mount":""},{default:g(({present:p})=>[b(a(R),{id:u.value,ref:a(e),"as-child":c.asChild,as:c.as,role:"tabpanel","data-state":i.value?"active":"inactive","data-orientation":a(t).orientation.value,"aria-labelledby":s.value,hidden:!p,tabindex:"0",style:Fe({animationDuration:l.value?"0s":void 0})},{default:g(()=>[!a(t).unmountOnHide.value||p?w(c.$slots,"default",{key:0}):E("",!0)]),_:2},1032,["id","as-child","as","data-state","data-orientation","aria-labelledby","hidden","style"])]),_:3},8,["present"]))}}),It=I({__name:"TabsTrigger",props:{value:{},disabled:{type:Boolean,default:!1},asChild:{type:Boolean},as:{default:"button"}},setup(o){const n=o,{forwardRef:e}=F(),t=W(),s=C(()=>ke(t.baseId,n.value)),u=C(()=>Ae(t.baseId,n.value)),i=C(()=>n.value===t.modelValue.value);return(l,c)=>(m(),y(a(ht),{"as-child":"",focusable:!l.disabled,active:i.value},{default:g(()=>[b(a(R),{id:s.value,ref:a(e),role:"tab",type:l.as==="button"?"button":void 0,as:l.as,"as-child":l.asChild,"aria-selected":i.value?"true":"false","aria-controls":u.value,"data-state":i.value?"active":"inactive",disabled:l.disabled,"data-disabled":l.disabled?"":void 0,"data-orientation":a(t).orientation.value,onMousedown:c[0]||(c[0]=Re(d=>{!l.disabled&&d.ctrlKey===!1?a(t).changeModelValue(l.value):d.preventDefault()},["left"])),onKeydown:c[1]||(c[1]=ce(d=>a(t).changeModelValue(l.value),["enter","space"])),onFocus:c[2]||(c[2]=()=>{const d=a(t).activationMode!=="manual";!i.value&&!l.disabled&&d&&a(t).changeModelValue(l.value)})},{default:g(()=>[w(l.$slots,"default")]),_:3},8,["id","type","as","as-child","aria-selected","aria-controls","data-state","disabled","data-disabled","data-orientation"])]),_:3},8,["focusable","active"]))}}),$t=I({__name:"TabsIndicator",props:{asChild:{type:Boolean},as:{}},setup(o){const n=o,e=W();F();const t=z(),s=z({size:null,position:null});de(()=>[e.modelValue.value,e==null?void 0:e.dir.value],async()=>{await Z(),u()},{immediate:!0}),Oe([e.tabsList,t],u);function u(){var i;t.value=(i=e.tabsList.value)==null?void 0:i.querySelector('[role="tab"][data-state="active"]'),t.value&&(e.orientation.value==="horizontal"?s.value={size:t.value.offsetWidth,position:t.value.offsetLeft}:s.value={size:t.value.offsetHeight,position:t.value.offsetTop})}return(i,l)=>typeof s.value.size=="number"?(m(),y(a(R),D({key:0},n,{style:{"--reka-tabs-indicator-size":`${s.value.size}px`,"--reka-tabs-indicator-position":`${s.value.position}px`}}),{default:g(()=>[w(i.$slots,"default")]),_:3},16,["style"])):E("",!0)}}),kt={class:"z-10 flex items-center justify-center"},At={class:"font-mona relative flex items-center justify-center gap-2 bg-gradient-to-b from-white/25 to-white bg-clip-text text-lg font-medium text-transparent transition-all duration-200"},St=I({__name:"ProfilePicture",setup(o){const{profile:n}=X();return(e,t)=>{const s=Ee,u=me;return m(),V("div",kt,[b(u,{rounded:""},{default:g(()=>[h("div",At,[b(s,{width:"96",src:a(n).picture,class:"size-24 rounded-full border-2 border-neutral-800/30 object-cover",alt:"Hugo Richard Profile Picture","aria-label":"Hugo Richard Profile Picture"},null,8,["src"])])]),_:1})])}}}),Tt=Object.assign(St,{__name:"HomeProfilePicture"}),Vt={class:"relative flex size-3"},zt=I({__name:"Availability",props:{background:{type:Boolean,default:!1}},setup(o){const n=X().global,e=C(()=>[{status:"available",message:"Available for hire",color:"bg-green-600/80",bgColor:"bg-green-500/80",textColor:"text-green-500/80"},{status:"unavailable",message:"Not available for hire",color:"bg-red-500",bgColor:"bg-red-400",textColor:"text-red-400"}][n.available?0:1]);return(t,s)=>(m(),V("div",{class:$(["flex items-center rounded-full",{"border border-white/10 bg-zinc-900/80 px-5 py-2 backdrop-blur-3xl":o.background}])},[h("span",Vt,[h("span",{class:$(["absolute inline-flex size-full animate-ping rounded-full opacity-75",a(e).color])},null,2),h("span",{class:$(["relative inline-flex size-3 scale-90 rounded-full",a(e).bgColor])},null,2)]),h("span",{class:$(["ml-2 text-sm font-medium",a(e).textColor])},B(t.$t("global."+a(e).status)),3)],2))}}),Bt=Object.assign(zt,{__name:"SettingsAvailability"}),Ft={class:"my-7 flex items-center justify-center gap-6 sm:gap-10"},Rt=I({__name:"Social",setup(o){const n=[{regex:/github\.com/,name:"GitHub",icon:"custom:github"},{regex:/twitter\.com/,name:"X / Twitter",icon:"custom:x"},{regex:/linkedin\.com/,name:"LinkedIn",icon:"custom:linkedin"},{regex:/instagram\.com/,name:"Instagram",icon:"custom:instagram"},{regex:/spotify\.com/,name:"Spotify",icon:"custom:spotify"}],{socials:e}=X(),t=Object.values(e).map(s=>{const u=n.find(c=>c.regex.test(s));if(!u)throw new Error(`No social media found for link: ${s}`);const{name:i,icon:l}=u;return{name:i,link:s,icon:l}});return(s,u)=>{const i=j,l=te;return m(),V("div",Ft,[(m(!0),V(M,null,H(a(t),c=>(m(),y(l,{key:c.name,to:c.link,target:"_blank",class:"flex items-center justify-center","aria-label":"Go to "+c.name+" profile"},{default:g(()=>[b(i,{name:c.icon,class:"size-6 text-muted transition-all duration-300 hover:text-neutral-300",alt:c.name+" logo","aria-label":c.name+" logo"},null,8,["name","alt","aria-label"])]),_:2},1032,["to","aria-label"]))),128))])}}}),Ot=Object.assign(Rt,{__name:"HomeSocial"}),Et={class:"flex flex-col items-center justify-center gap-4 sm:gap-2"},Pt={class:"flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-2"},Dt={class:"mt-4 flex flex-col items-center gap-1"},Mt=I({__name:"CTA",setup(o){const{t:n}=ae();return(e,t)=>{const s=j,u=ye,i=me,l=je,c=Ne,d=te;return m(),V("div",Et,[h("div",Pt,[b(l,{text:e.$t("global.email"),shortcuts:["⌘","O"]},{default:g(()=>[b(i,null,{default:g(()=>[b(u,{class:"font-mona relative flex items-center justify-center gap-2 bg-gradient-to-b from-white/25 to-white bg-clip-text text-lg font-medium text-transparent transition-all duration-200",to:"/contact"},{default:g(()=>[N(B(a(n)("global.contact"))+" ",1),b(s,{name:"heroicons-envelope",class:"size-5 text-white/80"})]),_:1})]),_:1})]),_:1},8,["text"]),b(c)]),h("div",Dt,[b(d,{href:"https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FHugoRCD%2Fcanvas&env=NUXT_PRIVATE_RESEND_API_KEY,NUXT_PUBLIC_SITE_URL&envDescription=You%20will%20require%20an%20API%20key%20for%20Resend%20and%20Nuxt%20Studio%2C%20but%20it%20is%20not%20essential%20for%20the%20portfolio%20to%20work.%20Simply%20add%20%22test%2C%22%20for%20example%2C%20and%20edit%20the%20variable%20later.&project-name=canvas-portfolio&repository-name=canvas-portfolio&demo-title=Canvas&demo-url=canvas.hrcd.fr&demo-image=https%3A%2F%2Fcanvas.hrcd.fr%2Fog.png"},{default:g(()=>t[0]||(t[0]=[h("img",{src:"https://vercel.com/button",alt:"Deploy with Vercel"},null,-1)])),_:1})])])}}}),Ht=Object.assign(Mt,{__name:"HomeCTA"}),jt={class:"flex w-full flex-col gap-6"},Nt={class:"font-newsreader italic text-white-shadow text-xl"},Lt={class:"flex w-full flex-col gap-4"},Kt={class:"whitespace-nowrap font-medium"},Ut={class:"whitespace-nowrap"},qt={class:"font-newsreader italic text-white-shadow cursor-pointer"},Gt=I({__name:"Projects",async setup(o){let n,e;const{locale:t}=ae(),s=Pe(),{data:u}=([n,e]=ge(async()=>xe("projects",async()=>{const i="projects_"+t.value;return await we(i).all()},{watch:[t]})),n=await n,e(),n);return(i,l)=>{var p;const c=te,d=ye;return m(),V("div",jt,[h("h3",Nt,B(i.$t("navigation.works")),1),h("div",Lt,[(m(!0),V(M,null,H((p=a(u))==null?void 0:p.filter(r=>r.featured),r=>(m(),y(c,{key:r.name,role:"link",class:"flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 hover:bg-neutral-900",to:r.release==="soon"?a(s)("/"):r.link,"aria-label":"go to "+r.name+" project website",target:r.release==="soon"?"_self":"_blank"},{default:g(()=>[h("span",Kt,B(r.name),1),l[0]||(l[0]=h("div",{class:"mx-2 h-[0.1px] w-full bg-muted"},null,-1)),h("span",Ut,B(r.release==="soon"?i.$t("global.soon")+"...":r.release),1)]),_:2},1032,["to","aria-label","target"]))),128))]),b(d,{to:"/works"},{default:g(()=>[h("span",qt,B(i.$t("global.see_more")),1)]),_:1})])}}}),Yt=Object.assign(Gt,{__name:"HomeProjects"}),Xt={slots:{root:"w-full",item:"border-b border-(--ui-border) last:border-b-0",header:"flex",trigger:"group flex-1 flex items-center gap-1.5 font-medium text-sm py-3.5 focus-visible:outline-(--ui-primary) min-w-0",content:"data-[state=open]:animate-[accordion-down_200ms_ease-out] data-[state=closed]:animate-[accordion-up_200ms_ease-out] overflow-hidden focus:outline-none",body:"text-sm pb-3.5",leadingIcon:"shrink-0 size-5",trailingIcon:"shrink-0 size-5 ms-auto group-data-[state=open]:rotate-180 transition-transform duration-200",label:"text-start break-words"},variants:{disabled:{true:{trigger:"cursor-not-allowed opacity-75"}}}},Jt=he;var re;const Qt=q({extend:q(Xt),...((re=Jt.ui)==null?void 0:re.accordion)||{}}),Wt=I({__name:"Accordion",props:{as:{},items:{},trailingIcon:{},labelKey:{default:"label"},class:{},ui:{},collapsible:{type:Boolean,default:!0},defaultValue:{},modelValue:{},type:{default:"single"},disabled:{type:Boolean},unmountOnHide:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(o,{emit:n}){const e=o,t=n,s=ve(),u=X(),i=be(_e(e,"as","collapsible","defaultValue","disabled","modelValue","type","unmountOnHide"),t),l=C(()=>Qt({disabled:e.disabled}));return(c,d)=>{var p;return m(),y(a(We),D(a(i),{class:l.value.root({class:[e.class,(p=e.ui)==null?void 0:p.root]})}),{default:g(()=>[(m(!0),V(M,null,H(c.items,(r,f)=>{var x;return m(),y(a(nt),{key:f,value:r.value||String(f),disabled:r.disabled,class:$(l.value.item({class:(x=e.ui)==null?void 0:x.item}))},{default:g(({open:v})=>{var k,T;return[b(a(lt),{class:$(l.value.header({class:(k=e.ui)==null?void 0:k.header}))},{default:g(()=>{var _;return[b(a(ut),{class:$(l.value.trigger({class:(_=e.ui)==null?void 0:_.trigger,disabled:r.disabled}))},{default:g(()=>{var A;return[w(c.$slots,"leading",{item:r,index:f,open:v},()=>{var S;return[r.icon?(m(),y(j,{key:0,name:r.icon,class:$(l.value.leadingIcon({class:(S=e.ui)==null?void 0:S.leadingIcon}))},null,8,["name","class"])):E("",!0)]}),a(G)(r,e.labelKey)||s.default?(m(),V("span",{key:0,class:$(l.value.label({class:(A=e.ui)==null?void 0:A.label}))},[w(c.$slots,"default",{item:r,index:f,open:v},()=>[N(B(a(G)(r,e.labelKey)),1)])],2)):E("",!0),w(c.$slots,"trailing",{item:r,index:f,open:v},()=>{var S;return[b(j,{name:r.trailingIcon||c.trailingIcon||a(u).ui.icons.chevronDown,class:$(l.value.trailingIcon({class:(S=e.ui)==null?void 0:S.trailingIcon}))},null,8,["name","class"])]})]}),_:2},1032,["class"])]}),_:2},1032,["class"]),r.content||s.content||r.slot&&s[r.slot]||s.body||r.slot&&s[`${r.slot}-body`]?(m(),y(a(it),{key:0,class:$(l.value.content({class:(T=e.ui)==null?void 0:T.content}))},{default:g(()=>[w(c.$slots,r.slot||"content",{item:r,index:f,open:v},()=>{var _;return[h("div",{class:$(l.value.body({class:(_=e.ui)==null?void 0:_.body}))},[w(c.$slots,r.slot?`${r.slot}-body`:"body",{item:r,index:f,open:v},()=>[N(B(r.content),1)])],2)]})]),_:2},1032,["class"])):E("",!0)]}),_:2},1032,["value","disabled","class"])}),128))]),_:3},16,["class"])}}}),Zt=Object.assign(Wt,{__name:"UAccordion"}),ea={slots:{root:"flex items-center gap-2",list:"relative flex p-1 group",indicator:"absolute transition-[translate,width] duration-200",trigger:["group relative inline-flex items-center shrink-0 min-w-0 data-[state=inactive]:text-(--ui-text-muted) hover:data-[state=inactive]:not-disabled:text-(--ui-text) font-medium rounded-[calc(var(--ui-radius)*1.5)] disabled:cursor-not-allowed disabled:opacity-75 focus:outline-hidden","transition-colors"],content:"focus:outline-none w-full",leadingIcon:"shrink-0",leadingAvatar:"shrink-0",leadingAvatarSize:"",label:"truncate"},variants:{color:{primary:"",secondary:"",success:"",info:"",warning:"",error:"",neutral:""},variant:{pill:{list:"bg-(--ui-bg-elevated) rounded-[calc(var(--ui-radius)*2)]",trigger:"flex-1 w-full",indicator:"rounded-[calc(var(--ui-radius)*1.5)] shadow-xs"},link:{list:"border-(--ui-border)",indicator:"rounded-full"}},orientation:{horizontal:{root:"flex-col",list:"w-full",indicator:"left-0 w-(--reka-tabs-indicator-size) translate-x-(--reka-tabs-indicator-position)",trigger:"justify-center"},vertical:{list:"flex-col",indicator:"top-0 h-(--reka-tabs-indicator-size) translate-y-(--reka-tabs-indicator-position)"}},size:{xs:{trigger:"px-2 py-1 text-xs gap-1",leadingIcon:"size-4",leadingAvatarSize:"3xs"},sm:{trigger:"px-2.5 py-1.5 text-xs gap-1.5",leadingIcon:"size-4",leadingAvatarSize:"3xs"},md:{trigger:"px-3 py-1.5 text-sm gap-1.5",leadingIcon:"size-5",leadingAvatarSize:"2xs"},lg:{trigger:"px-3 py-2 text-sm gap-2",leadingIcon:"size-5",leadingAvatarSize:"2xs"},xl:{trigger:"px-3 py-2 text-base gap-2",leadingIcon:"size-6",leadingAvatarSize:"xs"}}},compoundVariants:[{orientation:"horizontal",variant:"pill",class:{indicator:"inset-y-1"}},{orientation:"horizontal",variant:"link",class:{list:"border-b -mb-px",indicator:"-bottom-px h-px"}},{orientation:"vertical",variant:"pill",class:{indicator:"inset-x-1",list:"items-center"}},{orientation:"vertical",variant:"link",class:{list:"border-s -ms-px",indicator:"-start-px w-px"}},{color:"primary",variant:"pill",class:{indicator:"bg-(--ui-primary)",trigger:"data-[state=active]:text-(--ui-bg) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-primary)"}},{color:"secondary",variant:"pill",class:{indicator:"bg-(--ui-secondary)",trigger:"data-[state=active]:text-(--ui-bg) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-secondary)"}},{color:"success",variant:"pill",class:{indicator:"bg-(--ui-success)",trigger:"data-[state=active]:text-(--ui-bg) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-success)"}},{color:"info",variant:"pill",class:{indicator:"bg-(--ui-info)",trigger:"data-[state=active]:text-(--ui-bg) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-info)"}},{color:"warning",variant:"pill",class:{indicator:"bg-(--ui-warning)",trigger:"data-[state=active]:text-(--ui-bg) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-warning)"}},{color:"error",variant:"pill",class:{indicator:"bg-(--ui-error)",trigger:"data-[state=active]:text-(--ui-bg) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-error)"}},{color:"neutral",variant:"pill",class:{indicator:"bg-(--ui-bg-inverted)",trigger:"data-[state=active]:text-(--ui-bg) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-border-inverted)"}},{color:"primary",variant:"link",class:{indicator:"bg-(--ui-primary)",trigger:"data-[state=active]:text-(--ui-primary) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-primary)"}},{color:"secondary",variant:"link",class:{indicator:"bg-(--ui-secondary)",trigger:"data-[state=active]:text-(--ui-secondary) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-secondary)"}},{color:"success",variant:"link",class:{indicator:"bg-(--ui-success)",trigger:"data-[state=active]:text-(--ui-success) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-success)"}},{color:"info",variant:"link",class:{indicator:"bg-(--ui-info)",trigger:"data-[state=active]:text-(--ui-info) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-info)"}},{color:"warning",variant:"link",class:{indicator:"bg-(--ui-warning)",trigger:"data-[state=active]:text-(--ui-warning) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-warning)"}},{color:"error",variant:"link",class:{indicator:"bg-(--ui-error)",trigger:"data-[state=active]:text-(--ui-error) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-error)"}},{color:"neutral",variant:"link",class:{indicator:"bg-(--ui-bg-inverted)",trigger:"data-[state=active]:text-(--ui-text-highlighted) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-border-inverted)"}}],defaultVariants:{color:"primary",variant:"pill",size:"md"}},ta=he;var ue;const aa=q({extend:q(ea),...((ue=ta.ui)==null?void 0:ue.tabs)||{}}),oa=I({__name:"Tabs",props:{as:{},items:{},color:{},variant:{},size:{},orientation:{default:"horizontal"},content:{type:Boolean,default:!0},labelKey:{default:"label"},class:{},ui:{},defaultValue:{default:"0"},modelValue:{},activationMode:{},unmountOnHide:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(o,{emit:n}){const e=o,t=n,s=ve(),u=be(_e(e,"as","modelValue","defaultValue","orientation","activationMode","unmountOnHide"),t),i=C(()=>aa({color:e.color,variant:e.variant,size:e.size,orientation:e.orientation}));return(l,c)=>{var d;return m(),y(a(xt),D(a(u),{class:i.value.root({class:[e.class,(d=e.ui)==null?void 0:d.root]})}),{default:g(()=>{var p;return[b(a(wt),{class:$(i.value.list({class:(p=e.ui)==null?void 0:p.list}))},{default:g(()=>{var r;return[b(a($t),{class:$(i.value.indicator({class:(r=e.ui)==null?void 0:r.indicator}))},null,8,["class"]),(m(!0),V(M,null,H(l.items,(f,x)=>{var v;return m(),y(a(It),{key:x,value:f.value||String(x),disabled:f.disabled,class:$(i.value.trigger({class:(v=e.ui)==null?void 0:v.trigger}))},{default:g(()=>{var k;return[w(l.$slots,"leading",{item:f,index:x},()=>{var T,_,A;return[f.icon?(m(),y(j,{key:0,name:f.icon,class:$(i.value.leadingIcon({class:(T=e.ui)==null?void 0:T.leadingIcon}))},null,8,["name","class"])):f.avatar?(m(),y(De,D({key:1,size:((_=e.ui)==null?void 0:_.leadingAvatarSize)||i.value.leadingAvatarSize(),ref_for:!0},f.avatar,{class:i.value.leadingAvatar({class:(A=e.ui)==null?void 0:A.leadingAvatar})}),null,16,["size","class"])):E("",!0)]}),a(G)(f,e.labelKey)||s.default?(m(),V("span",{key:0,class:$(i.value.label({class:(k=e.ui)==null?void 0:k.label}))},[w(l.$slots,"default",{item:f,index:x},()=>[N(B(a(G)(f,e.labelKey)),1)])],2)):E("",!0),w(l.$slots,"trailing",{item:f,index:x})]}),_:2},1032,["value","disabled","class"])}),128))]}),_:3},8,["class"]),l.content?(m(!0),V(M,{key:0},H(l.items,(r,f)=>{var x;return m(),y(a(Ct),{key:f,value:r.value||String(f),class:$(i.value.content({class:(x=e.ui)==null?void 0:x.content}))},{default:g(()=>[w(l.$slots,r.slot||"content",{item:r,index:f},()=>[N(B(r.content),1)])]),_:2},1032,["value","class"])}),128)):E("",!0)]}),_:3},16,["class"])}}}),na=Object.assign(oa,{__name:"UTabs"}),sa={class:"flex flex-col items-center justify-center space-y-8 w-full sm:px-20 md:px-30"},ia={class:"flex flex-col items-center justify-center gap-2"},la={class:"font-newsreader italic text-white-shadow text-4xl"},ra={class:"text-center text-sm font-medium text-muted"},ua=I({__name:"Faq",async setup(o){let n,e;const t=Me(),{locale:s}=ae(),u=C(()=>He(String(t.params.slug))),{data:i}=([n,e]=ge(async()=>xe("faq-"+u.value,async()=>{const d="faq_"+s.value;return await we(d).first()},{watch:[s]})),n=await n,e(),n),l=C(()=>{var d;return(d=i.value)==null?void 0:d.faqQuestions.map(p=>({label:p.title,key:p.title.toLowerCase(),questions:p.questions}))}),c={root:"flex items-center gap-4 w-full",list:"relative flex bg-transparent dark:bg-transparent gap-2",indicator:"absolute top-[4px] duration-200 ease-out focus:outline-none rounded-full bg-white/10 dark:bg-neutral-900",trigger:["relative inline-flex items-center justify-center flex-shrink-0 focus:outline-none transition-colors duration-200 ease-out border-white/10 border-2","px-3 py-2 font-medium rounded-full","hover:bg-neutral-900/80","data-[state=active]:text-neutral-900 dark:data-[state=active]:text-white","data-[state=inactive]:text-neutral-500 dark:data-[state=inactive]:text-neutral-400"],label:"truncate"};return(d,p)=>{const r=Zt,f=na;return m(),V("div",sa,[h("div",ia,[h("h3",la,B(a(i).title),1),h("p",ra,B(a(i).subtitle),1)]),b(f,{items:a(l),orientation:"horizontal",ui:c},{content:g(({item:x})=>[b(r,{"trailing-icon":"lucide:plus",items:x.questions,ui:{item:"mb-2 group px-4 transform-gpu rounded-xl border border-white/10 bg-white/5 transition duration-500 will-change-transform hover:bg-white/[0.075]",trailingIcon:"group-data-[state=closed]:rotate-0 group-data-[state=open]:rotate-135"}},null,8,["items"])]),_:1},8,["items"])])}}}),ca=Object.assign(ua,{__name:"HomeFaq"}),da={},fa={class:"relative pt-12"},pa={class:"relative mx-auto flex max-w-7xl flex-col justify-center gap-4 px-4 py-8 sm:px-6 lg:px-8 lg:py-16"},ma={class:"z-20 flex flex-col items-center justify-center"},ga={class:"font-geist",style:{"--stagger":"1","--delay":"10ms"},"data-animate":""},va={class:"mx-auto font-medium text-center text-pretty bg-gradient-to-b from-white/90 to-white/30 bg-clip-text text-3xl text-transparent lg:max-w-3xl lg:text-4xl"},ba={class:"mx-auto mt-4 max-w-xl text-center text-lg antialiased text-white/60"},_a={style:{"--stagger":"5"},"data-animate":"",class:"mt-12 flex w-full max-w-3xl flex-col gap-4 lg:mt-16"};function ha(o,n){const e=Tt,t=Bt,s=Ot,u=Ht,i=Yt,l=Le,c=ca;return m(),V("section",fa,[n[1]||(n[1]=h("div",{class:"pointer-events-none absolute inset-0 bg-center bg-grid-white/10 bg-grid-16 [mask-image:radial-gradient(white,transparent_85%)]"},null,-1)),h("div",pa,[n[0]||(n[0]=h("div",{class:"absolute -top-8 left-1/2 size-72 -translate-x-1/2 rounded-full bg-white/25 blur-[120px] lg:-top-8 lg:size-[32rem] lg:blur-[200px]"},null,-1)),b(e),h("div",ma,[h("div",ga,[h("h1",va,[le(o.$slots,"hero_title",{mdcUnwrap:"p"})]),h("h2",ba,[le(o.$slots,"hero_subtitle",{mdcUnwrap:"p"})])]),b(t,{background:"",class:"mt-2",style:{"--stagger":"2"},"data-animate":""}),b(s,{style:{"--stagger":"3"},"data-animate":""}),b(u,{style:{"--stagger":"4"},"data-animate":""}),h("div",_a,[b(i)]),b(l,{class:"my-9"}),b(c,{style:{"--stagger":"6"},"data-animate":""})])])])}const Ta=Object.assign(Ke(da,[["render",ha]]),{__name:"Home"});export{Ta as default};
