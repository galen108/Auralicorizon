import {T,u as uI,a as er,c as ei$1,I as IE,g as gc,k as qf,d as OI,L as Ly,P as PI,p as fI,C as Cl,V as Va,S,r as tm,s as gI,$ as $f,_ as _E,N as pi$1,a3 as X,ae as _t,af as Xu,a8 as Lg,w as RL,G as GI,aN as Wf,a9 as Yf,aa as sp,Z as ZI,Y as YI,M as ip,aI as Jn,a0 as or,ac as xL,X as Te$1,ad as j,Q as Zu,D as Bo,a2 as Oe$1,as as U,a4 as At$1,F as kh,ai as Eh,aO as qr,aP as xe,am as kL,an as op,aQ as kI,A as AI,o as Kf,aR as Zf,R as RI,h as up,ao as cE,l as lp,aS as mt,aT as _L,ab as Bn,aU as ue,W as Un,au as we,aV as Rn,f as Jf,z as zI,aW as np,ar as Zr,aX as Oh,H as wt$1,ax as Ph,ak as mc,al as yc,x as xE,q as qI,y as yp,j as RE,E as Ec,aY as kc,a1 as vv,aM as fy,aZ as Ie$1,a_ as BI,a$ as Zl,b0 as Yl,b1 as KI,b2 as Xn,b3 as te,b4 as z$1,b5 as b,b6 as rr,at as Pe$1,aD as sh,b7 as Th,ah as It,b8 as M,b9 as Rh,a6 as Sn,aj as jn,ba as Nn,bb as Ah}from'./main-TFE4CTDX.js';import {c,m}from'./chunk-lhz-PX9G.js';import'./chunk-Dg7vZ_d7.js';import {H,s,T as T$1}from'./chunk-BE5iyprf.js';import {z,F,k}from'./chunk-BbZTrEze.js';var At=class{_box;_destroyed=new X;_resizeSubject=new X;_resizeObserver;_elementObservables=new Map;constructor(c){this._box=c,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(t=>this._resizeSubject.next(t)));}observe(c){return this._elementObservables.has(c)||this._elementObservables.set(c,new M(t=>{let e=this._resizeSubject.subscribe(t);return this._resizeObserver?.observe(c,{box:this._box}),()=>{this._resizeObserver?.unobserve(c),e.unsubscribe(),this._elementObservables.delete(c);}}).pipe(Sn(t=>t.some(e=>e.target===c)),Ah({bufferSize:1,refCount:true}),Ph(this._destroyed))),this._elementObservables.get(c)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear();}},Ie=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=T(Te$1);constructor(){}ngOnDestroy(){for(let[,t]of this._observers)t.destroy();this._observers.clear(),this._cleanupErrorListener?.();}observe(t,e){let i=e?.box||"content-box";return this._observers.has(i)||this._observers.set(i,new At(i)),this._observers.get(i).observe(t)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=rr({token:n,factory:n.\u0275fac})}return n})();var Ht=["*"];function We(n,c){n&1&&zI(0);}var Ke=["tabListContainer"],$e=["tabList"],Ue=["tabListInner"],Ze=["nextPaginator"],Ye=["previousPaginator"],Xe=["content"];function Je(n,c){}var ti=["tabBodyWrapper"],ei=["tabHeader"];function ii(n,c){}function ni(n,c){if(n&1&&qf(0,ii,0,0,"ng-template",12),n&2){let t=qI().$implicit;Kf("cdkPortalOutlet",t.templateLabel);}}function ai(n,c){if(n&1&&IE(0),n&2){let t=qI().$implicit;yp(t.textLabel);}}function oi(n,c){if(n&1){let t=BI();ei$1(0,"div",7,2),op("click",function(){let i=Zl(t),a=i.$implicit,o=i.$index,b=qI(),T=KI(1);return Yl(b._handleClick(a,T,o))})("cdkFocusChange",function(i){let a=Zl(t).$index,o=qI();return Yl(o._tabFocusChanged(i,a))}),Jf(2,"span",8)(3,"div",9),ei$1(4,"span",10)(5,"span",11),AI(6,ni,1,1,null,12)(7,ai,1,1),gc()()();}if(n&2){let t=c.$implicit,e=c.$index,i=KI(1),a=qI();cE(t.labelClass),up("mdc-tab--active",a.selectedIndex===e),Kf("id",a._getTabLabelId(t,e))("disabled",t.disabled)("fitInkBarToContent",a.fitInkBarToContent),Yf("tabIndex",a._getTabIndex(e))("aria-posinset",e+1)("aria-setsize",a._tabs.length)("aria-controls",a._getTabContentId(e))("aria-selected",a.selectedIndex===e)("aria-label",t.ariaLabel||null)("aria-labelledby",!t.ariaLabel&&t.ariaLabelledby?t.ariaLabelledby:null),Ly(3),Kf("matRippleTrigger",i)("matRippleDisabled",t.disabled||a.disableRipple),Ly(3),RI(t.templateLabel?6:7);}}function ri(n,c){n&1&&zI(0);}function ci(n,c){if(n&1){let t=BI();ei$1(0,"mat-tab-body",13),op("_onCentered",function(){Zl(t);let i=qI();return Yl(i._removeTabBodyWrapperHeight())})("_onCentering",function(i){Zl(t);let a=qI();return Yl(a._setTabBodyWrapperHeight(i))})("_beforeCentering",function(i){Zl(t);let a=qI();return Yl(a._bodyCentered(i))}),gc();}if(n&2){let t=c.$implicit,e=c.$index,i=qI();cE(t.bodyClass),Kf("id",i._getTabContentId(e))("content",t.content)("position",t.position)("animationDuration",i._bodyAnimationDuration)("preserveContent",i.preserveContent),Yf("tabindex",i.contentTabIndex!=null&&i.selectedIndex===e?i.contentTabIndex:null)("aria-labelledby",i._getTabLabelId(t,e))("aria-hidden",i.selectedIndex!==e);}}var si=new S("MatTabContent"),di=(()=>{class n{template=T(Jn);static \u0275fac=function(e){return new(e||n)};static \u0275dir=gI({type:n,selectors:[["","matTabContent",""]],features:[_E([{provide:si,useExisting:n}])]})}return n})(),li=new S("MatTabLabel"),Se=new S("MAT_TAB"),zt=(()=>{class n extends H{_closestTab=T(Se,{optional:true});static \u0275fac=(()=>{let t;return function(i){return (t||(t=tm(n)))(i||n)}})();static \u0275dir=gI({type:n,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[_E([{provide:li,useExisting:n}]),$f]})}return n})(),Re=new S("MAT_TAB_GROUP"),Nt=(()=>{class n{_viewContainerRef=T(pi$1);_closestTabGroup=T(Re,{optional:true});disabled=false;get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t);}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new X;position=null;origin=null;isActive=false;constructor(){T(_t).load(Xu);}ngOnChanges(t){(t.hasOwnProperty("textLabel")||t.hasOwnProperty("disabled"))&&this._stateChanges.next();}ngOnDestroy(){this._stateChanges.complete();}ngOnInit(){this._contentPortal=new s(this._explicitContent||this._implicitContent,this._viewContainerRef);}_setTemplateLabelInput(t){t&&t._closestTab===this&&(this._templateLabel=t);}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=uI({type:n,selectors:[["mat-tab"]],contentQueries:function(e,i,a){if(e&1&&ip(a,zt,5)(a,di,7,Jn),e&2){let o;ZI(o=YI())&&(i.templateLabel=o.first),ZI(o=YI())&&(i._explicitContent=o.first);}},viewQuery:function(e,i){if(e&1&&sp(Jn,7),e&2){let a;ZI(a=YI())&&(i._implicitContent=a.first);}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(e,i){e&2&&Yf("id",null);},inputs:{disabled:[2,"disabled","disabled",RL],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[_E([{provide:Se,useExisting:n}]),Lg],ngContentSelectors:Ht,decls:1,vars:0,template:function(e,i){e&1&&(GI(),Wf(0,We,1,0,"ng-template"));},encapsulation:2,changeDetection:1})}return n})(),Pt="mdc-tab-indicator--active",Te="mdc-tab-indicator--no-transition",Ft=class{_items;_currentItem;constructor(c){this._items=c;}hide(){this._items.forEach(c=>c.deactivateInkBar()),this._currentItem=void 0;}alignToElement(c){let t=this._items.find(i=>i.elementRef.nativeElement===c),e=this._currentItem;if(t!==e&&(e?.deactivateInkBar(),t)){let i=e?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(i),this._currentItem=t;}}},mi=(()=>{class n{_elementRef=T(or);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=false;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement());}activateInkBar(t){let e=this._elementRef.nativeElement;if(!t||!e.getBoundingClientRect||!this._inkBarContentElement){e.classList.add(Pt);return}let i=e.getBoundingClientRect(),a=t.width/i.width,o=t.left-i.left;e.classList.add(Te),this._inkBarContentElement.style.setProperty("transform",`translateX(${o}px) scaleX(${a})`),e.getBoundingClientRect(),e.classList.remove(Te),e.classList.add(Pt),this._inkBarContentElement.style.setProperty("transform","");}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(Pt);}ngOnInit(){this._createInkBarElement();}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null;}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,e=this._inkBarElement=t.createElement("span"),i=this._inkBarContentElement=t.createElement("span");e.className="mdc-tab-indicator",i.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",e.appendChild(this._inkBarContentElement),this._appendInkBarElement();}_appendInkBarElement(){this._inkBarElement;let t=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;t.appendChild(this._inkBarElement);}static \u0275fac=function(e){return new(e||n)};static \u0275dir=gI({type:n,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",RL]}})}return n})();var Ae=(()=>{class n extends mi{elementRef=T(or);disabled=false;focus(){this.elementRef.nativeElement.focus();}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let t;return function(i){return (t||(t=tm(n)))(i||n)}})();static \u0275dir=gI({type:n,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(e,i){e&2&&(Yf("aria-disabled",!!i.disabled),up("mat-mdc-tab-disabled",i.disabled));},inputs:{disabled:[2,"disabled","disabled",RL]},features:[$f]})}return n})(),Me={passive:true},hi=650,pi=100;function Bt(n){let c=n+"";return /^[0-9]+(?:\.[0-9]+)?$/.test(c)?`${n}ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(c)?c:""}var ui=(()=>{class n{_elementRef=T(or);_changeDetectorRef=T(xL);_viewportRuler=T(Pe$1);_dir=T(Zr,{optional:true});_ngZone=T(Te$1);_platform=T(U);_sharedResizeObserver=T(Ie);_injector=T(we);_renderer=T(vv);_animationsDisabled=Zu();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=false;_destroyed=new X;_showPaginationControls=false;_disableScrollAfter=true;_disableScrollBefore=true;_tabLabelCount;_scrollDistanceChanged=false;_keyManager;_currentTextContent;_stopScrolling=new X;disablePagination=false;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=isNaN(t)?0:t;this._selectedIndex!=e&&(this._selectedIndexChanged=true,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e));}_selectedIndex=0;selectFocusedIndex=new Oe$1;indexFocused=new Oe$1;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())]);}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),Me),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),Me));}ngAfterContentInit(){let t=this._dir?this._dir.change:sh("ltr"),e=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Th(32),Ph(this._destroyed)),i=this._viewportRuler.change(150).pipe(Ph(this._destroyed)),a=()=>{this.updatePagination(),this._alignInkBarToSelectedTab();};this._keyManager=new wt$1(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>false),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),fy(a,{injector:this._injector}),Eh(t,i,e,this._items.changes,this._itemsResized()).pipe(Ph(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),a();});}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection());}),this._keyManager.change.subscribe(o=>{this.indexFocused.emit(o),this._setTabFocus(o);});}_itemsResized(){return typeof ResizeObserver!="function"?It:this._items.changes.pipe(kh(this._items),Oh(t=>new M(e=>this._ngZone.runOutsideAngular(()=>{let i=new ResizeObserver(a=>e.next(a));return t.forEach(a=>i.observe(a.elementRef.nativeElement)),()=>{i.disconnect();}}))),Rh(1),Sn(t=>t.some(e=>e.contentRect.width>0&&e.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=false,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=false,this._changeDetectorRef.markForCheck());}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete();}_handleKeydown(t){if(!jn(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let e=this._items.get(this.focusIndex);e&&!e.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t));}break;default:this._keyManager?.onKeydown(t);}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck();}));}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition();}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t);}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:true}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let e=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?e.scrollLeft=0:e.scrollLeft=e.scrollWidth-e.offsetWidth;}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,e=this._getLayoutDirection()==="ltr"?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0);}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t);}_scrollHeader(t){let e=this._tabListContainer.nativeElement.offsetWidth,i=(t=="before"?-1:1)*e/3;return this._scrollTo(this._scrollDistance+i)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t);}_scrollToLabel(t){if(this.disablePagination)return;let e=this._items?this._items.toArray()[t]:null;if(!e)return;let i=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:a,offsetWidth:o}=e.elementRef.nativeElement,b,T;this._getLayoutDirection()=="ltr"?(b=a,T=b+o):(T=this._tabListInner.nativeElement.offsetWidth-a,b=T-o);let K=this.scrollDistance,Gt=this.scrollDistance+i;b<K?this.scrollDistance-=K-b:T>Gt&&(this.scrollDistance+=Math.min(T-Gt,b-K));}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=false;else {let t=this._tabListInner.nativeElement.scrollWidth,e=this._elementRef.nativeElement.offsetWidth,i=t-e>=5;i||(this.scrollDistance=0),i!==this._showPaginationControls&&(this._showPaginationControls=i,this._changeDetectorRef.markForCheck());}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=true:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck());}_getMaxScrollDistance(){let t=this._tabListInner.nativeElement.scrollWidth,e=this._tabListContainer.nativeElement.offsetWidth;return t-e||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide();}_stopInterval(){this._stopScrolling.next();}_handlePaginatorPress(t,e){e&&e.button!=null&&e.button!==0||(this._stopInterval(),Nn(hi,pi).pipe(Ph(Eh(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:i,distance:a}=this._scrollHeader(t);(a===0||a>=i)&&this._stopInterval();}));}_scrollTo(t){if(this.disablePagination)return {maxScrollDistance:0,distance:0};let e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=true,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}static \u0275fac=function(e){return new(e||n)};static \u0275dir=gI({type:n,inputs:{disablePagination:[2,"disablePagination","disablePagination",RL],selectedIndex:[2,"selectedIndex","selectedIndex",kL]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return n})(),bi=(()=>{class n extends ui{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=false;ngAfterContentInit(){this._inkBar=new Ft(this._items),super.ngAfterContentInit();}_itemSelected(t){t.preventDefault();}static \u0275fac=(()=>{let t;return function(i){return (t||(t=tm(n)))(i||n)}})();static \u0275cmp=uI({type:n,selectors:[["mat-tab-header"]],contentQueries:function(e,i,a){if(e&1&&ip(a,Ae,4),e&2){let o;ZI(o=YI())&&(i._items=o);}},viewQuery:function(e,i){if(e&1&&sp(Ke,7)($e,7)(Ue,7)(Ze,5)(Ye,5),e&2){let a;ZI(a=YI())&&(i._tabListContainer=a.first),ZI(a=YI())&&(i._tabList=a.first),ZI(a=YI())&&(i._tabListInner=a.first),ZI(a=YI())&&(i._nextPaginator=a.first),ZI(a=YI())&&(i._previousPaginator=a.first);}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(e,i){e&2&&up("mat-mdc-tab-header-pagination-controls-enabled",i._showPaginationControls)("mat-mdc-tab-header-rtl",i._getLayoutDirection()=="rtl");},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",RL]},features:[$f],ngContentSelectors:Ht,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(e,i){e&1&&(GI(),ei$1(0,"div",5,0),op("click",function(){return i._handlePaginatorClick("before")})("mousedown",function(o){return i._handlePaginatorPress("before",o)})("touchend",function(){return i._stopInterval()}),Jf(2,"div",6),gc(),ei$1(3,"div",7,1),op("keydown",function(o){return i._handleKeydown(o)}),ei$1(5,"div",8,2),op("cdkObserveContent",function(){return i._onContentChanges()}),ei$1(7,"div",9,3),zI(9),gc()()(),ei$1(10,"div",10,4),op("mousedown",function(o){return i._handlePaginatorPress("after",o)})("click",function(){return i._handlePaginatorClick("after")})("touchend",function(){return i._stopInterval()}),Jf(12,"div",6),gc()),e&2&&(up("mat-mdc-tab-header-pagination-disabled",i._disableScrollBefore),Kf("matRippleDisabled",i._disableScrollBefore||i.disableRipple),Ly(3),up("_mat-animation-noopable",i._animationsDisabled),Ly(2),Yf("aria-label",i.ariaLabel||null)("aria-labelledby",i.ariaLabelledby||null),Ly(5),up("mat-mdc-tab-header-pagination-disabled",i._disableScrollAfter),Kf("matRippleDisabled",i._disableScrollAfter||i.disableRipple));},dependencies:[xe,kc],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--mat-tab-header-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--mat-tab-divider-height, 1px);
  border-bottom-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--mat-tab-divider-height, 1px);
  border-top-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2,changeDetection:1})}return n})(),_i=new S("MAT_TABS_CONFIG"),De=(()=>{class n extends T$1{_host=T(Lt);_ngZone=T(Te$1);_centeringSub=j.EMPTY;_leavingSub=j.EMPTY;ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(kh(this._host._isCenterPosition())).subscribe(t=>{this._host._content&&t&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content);});}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach());});}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe();}static \u0275fac=(()=>{let t;return function(i){return (t||(t=tm(n)))(i||n)}})();static \u0275dir=gI({type:n,selectors:[["","matTabBodyHost",""]],features:[$f]})}return n})(),Lt=(()=>{class n{_elementRef=T(or);_dir=T(Zr,{optional:true});_ngZone=T(Te$1);_injector=T(we);_renderer=T(vv);_diAnimationsDisabled=Zu();_eventCleanups;_initialized=false;_fallbackTimer;_positionIndex;_dirChangeSubscription=j.EMPTY;_position;_previousPosition;_onCentering=new Oe$1;_beforeCentering=new Oe$1;_afterLeavingCenter=new Oe$1;_onCentered=new Oe$1(true);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=false;set position(t){this._positionIndex=t,this._computePositionAnimationState();}constructor(){if(this._dir){let t=T(xL);this._dirChangeSubscription=this._dir.change.subscribe(e=>{this._computePositionAnimationState(e),t.markForCheck();});}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(true),fy(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=true;}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(t=>t()),this._dirChangeSubscription.unsubscribe();}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let t=this._elementRef.nativeElement,e=i=>{i.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),i.type==="transitionend"&&this._transitionDone());};this._eventCleanups=[this._renderer.listen(t,"transitionstart",i=>{i.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted());}),this._renderer.listen(t,"transitionend",e),this._renderer.listen(t,"transitioncancel",e)];});}_transitionStarted(){clearTimeout(this._fallbackTimer);let t=this._position==="center";this._beforeCentering.emit(t),t&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight);}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit();}_setActiveClass(t){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",t);}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(t=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=t=="ltr"?"left":"right":this._positionIndex>0?this._position=t=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)));}_simulateTransitionEvents(){this._transitionStarted(),fy(()=>this._transitionDone(),{injector:this._injector});}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=uI({type:n,selectors:[["mat-tab-body"]],viewQuery:function(e,i){if(e&1&&sp(De,5)(Xe,5),e&2){let a;ZI(a=YI())&&(i._portalHost=a.first),ZI(a=YI())&&(i._contentElement=a.first);}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(e,i){e&2&&Yf("inert",i._position==="center"?null:"");},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(e,i){e&1&&(ei$1(0,"div",1,0),qf(2,Je,0,0,"ng-template",2),gc()),e&2&&up("mat-tab-body-content-left",i._position==="left")("mat-tab-body-content-right",i._position==="right")("mat-tab-body-content-can-animate",i._position==="center"||i._previousPosition==="center");},dependencies:[De,Ie$1],styles:[`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--mat-tab-body-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`],encapsulation:2,changeDetection:1})}return n})(),Pe=(()=>{class n{_elementRef=T(or);_changeDetectorRef=T(xL);_ngZone=T(Te$1);_tabsSubscription=j.EMPTY;_tabLabelSubscription=j.EMPTY;_tabBodySubscription=j.EMPTY;_diAnimationsDisabled=Zu();_bodyAnimationDuration;_headerAnimationDuration;_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new Bo;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(t){this._fitInkBarToContent=t,this._changeDetectorRef.markForCheck();}_fitInkBarToContent=false;stretchTabs=true;alignTabs=null;dynamicHeight=false;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=isNaN(t)?null:t;}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(t){this._animationDuration=t,t&&typeof t=="object"?(this._bodyAnimationDuration=Bt(t.body),this._headerAnimationDuration=Bt(t.header)):this._headerAnimationDuration=this._bodyAnimationDuration=Bt(t);}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(t){this._contentTabIndex=isNaN(t)?null:t;}_contentTabIndex=null;disablePagination=false;disableRipple=false;preserveContent=false;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),t&&e.add("mat-tabs-with-background",`mat-background-${t}`),this._backgroundColor=t;}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new Oe$1;focusChange=new Oe$1;animationDone=new Oe$1;selectedTabChange=new Oe$1(true);_groupId;_isServer=!T(U).isBrowser;constructor(){let t=T(_i,{optional:true});this._groupId=T(At$1).getId("mat-tab-group-"),this.animationDuration=t&&t.animationDuration?t.animationDuration:"500ms",this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:false,this.dynamicHeight=t&&t.dynamicHeight!=null?t.dynamicHeight:false,t?.contentTabIndex!=null&&(this.contentTabIndex=t.contentTabIndex),this.preserveContent=!!t?.preserveContent,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:false,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:true,this.alignTabs=t&&t.alignTabs!=null?t.alignTabs:null;}ngAfterContentChecked(){let t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){let e=this._selectedIndex==null;if(!e){this.selectedTabChange.emit(this._createChangeEvent(t));let i=this._tabBodyWrapper.nativeElement;i.style.minHeight=i.clientHeight+"px";}Promise.resolve().then(()=>{this._tabs.forEach((i,a)=>i.isActive=a===t),e||(this.selectedIndexChange.emit(t),this._tabBodyWrapper.nativeElement.style.minHeight="");});}this._tabs.forEach((e,i)=>{e.position=i-t,this._selectedIndex!=null&&e.position==0&&!e.origin&&(e.origin=t-this._selectedIndex);}),this._selectedIndex!==t&&(this._selectedIndex=t,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck());}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let t=this._clampTabIndex(this._indexToSelect);if(t===this._selectedIndex){let e=this._tabs.toArray(),i;for(let a=0;a<e.length;a++)if(e[a].isActive){this._indexToSelect=this._selectedIndex=a,this._lastFocusedTabIndex=null,i=e[a];break}!i&&e[t]&&Promise.resolve().then(()=>{e[t].isActive=true,this.selectedTabChange.emit(this._createChangeEvent(t));});}this._changeDetectorRef.markForCheck();});}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(true));}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(kh(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(e=>e._closestTabGroup===this||!e._closestTabGroup)),this._tabs.notifyOnChanges();});}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe();}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab();}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination();}focusTab(t){let e=this._tabHeader;e&&(e.focusIndex=t);}_focusChanged(t){this._lastFocusedTabIndex=t,this.focusChange.emit(this._createChangeEvent(t));}_createChangeEvent(t){let e=new Ot;return e.index=t,this._tabs&&this._tabs.length&&(e.tab=this._tabs.toArray()[t]),e}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Eh(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck());}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t,e){return t.id||`${this._groupId}-label-${e}`}_getTabContentId(t){return `${this._groupId}-content-${t}`}_setTabBodyWrapperHeight(t){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=t;return}let e=this._tabBodyWrapper.nativeElement;e.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(e.style.height=t+"px");}_removeTabBodyWrapperHeight(){let t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height="",this._ngZone.run(()=>this.animationDone.emit());}_handleClick(t,e,i){e.focusIndex=i,t.disabled||(this.selectedIndex=i);}_getTabIndex(t){let e=this._lastFocusedTabIndex??this.selectedIndex;return t===e?0:-1}_tabFocusChanged(t,e){t&&t!=="mouse"&&t!=="touch"&&(this._tabHeader.focusIndex=e);}_bodyCentered(t){t&&this._tabBodies?.forEach((e,i)=>e._setActiveClass(i===this._selectedIndex));}_bodyAnimationsDisabled(){return this._diAnimationsDisabled||this._bodyAnimationDuration==="0"||this._bodyAnimationDuration==="0ms"}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=uI({type:n,selectors:[["mat-tab-group"]],contentQueries:function(e,i,a){if(e&1&&ip(a,Nt,5),e&2){let o;ZI(o=YI())&&(i._allTabs=o);}},viewQuery:function(e,i){if(e&1&&sp(ti,5)(ei,5)(Lt,5),e&2){let a;ZI(a=YI())&&(i._tabBodyWrapper=a.first),ZI(a=YI())&&(i._tabHeader=a.first),ZI(a=YI())&&(i._tabBodies=a);}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:13,hostBindings:function(e,i){e&2&&(Yf("mat-align-tabs",i.alignTabs),cE("mat-"+(i.color||"primary")),lp("--mat-tab-body-animation-duration",i._bodyAnimationDuration)("--mat-tab-header-animation-duration",i._headerAnimationDuration),up("mat-mdc-tab-group-dynamic-height",i.dynamicHeight)("mat-mdc-tab-group-inverted-header",i.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",i.stretchTabs));},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",RL],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",RL],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",RL],selectedIndex:[2,"selectedIndex","selectedIndex",kL],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",kL],disablePagination:[2,"disablePagination","disablePagination",RL],disableRipple:[2,"disableRipple","disableRipple",RL],preserveContent:[2,"preserveContent","preserveContent",RL],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[_E([{provide:Re,useExisting:n}])],ngContentSelectors:Ht,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(e,i){e&1&&(GI(),ei$1(0,"mat-tab-header",3,0),op("indexFocused",function(o){return i._focusChanged(o)})("selectFocusedIndex",function(o){return i.selectedIndex=o}),OI(2,oi,8,17,"div",4,kI),gc(),AI(4,ri,1,0),ei$1(5,"div",5,1),OI(7,ci,1,10,"mat-tab-body",6,kI),gc()),e&2&&(Kf("selectedIndex",i.selectedIndex||0)("disableRipple",i.disableRipple)("disablePagination",i.disablePagination),Zf("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledby),Ly(2),PI(i._tabs),Ly(2),RI(i._isServer?4:-1),Ly(),up("_mat-animation-noopable",i._bodyAnimationsDisabled()),Ly(2),PI(i._tabs));},dependencies:[bi,Ae,qr,xe,T$1,Lt],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--mat-tab-header-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--mat-tab-container-height, 48px);
  font-family: var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));
  letter-spacing: var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));
  line-height: var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));
  font-weight: var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-tab-active-indicator-height, 2px);
  border-radius: var(--mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label {
  color: var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label {
  color: var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`],encapsulation:2,changeDetection:1})}return n})(),Ot=class{index;tab};var Be=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=fI({type:n});static \u0275inj=Cl({imports:[Va]})}return n})();var fi={capture:true},vi=["focus","mousedown","mouseenter","touchstart"],jt="mat-ripple-loader-uninitialized",Qt="mat-ripple-loader-class-name",Fe="mat-ripple-loader-centered",wt="mat-ripple-loader-disabled",Le=(()=>{class n{_document=T(Un);_animationsDisabled=Zu();_globalRippleOptions=T(ue,{optional:true});_platform=T(U);_ngZone=T(Te$1);_injector=T(we);_eventCleanups;_hosts=new Map;constructor(){let t=T(Xn).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>vi.map(e=>t.listen(this._document,e,this._onInteraction,fi)));}ngOnDestroy(){let t=this._hosts.keys();for(let e of t)this.destroyRipple(e);this._eventCleanups.forEach(e=>e());}configureRipple(t,e){t.setAttribute(jt,this._globalRippleOptions?.namespace??""),(e.className||!t.hasAttribute(Qt))&&t.setAttribute(Qt,e.className||""),e.centered&&t.setAttribute(Fe,""),e.disabled&&t.setAttribute(wt,"");}setDisabled(t,e){let i=this._hosts.get(t);i?(i.target.rippleDisabled=e,!e&&!i.hasSetUpEvents&&(i.hasSetUpEvents=true,i.renderer.setupTriggerEvents(t))):e?t.setAttribute(wt,""):t.removeAttribute(wt);}_onInteraction=t=>{let e=te(t);if(e instanceof HTMLElement){let i=e.closest(`[${jt}="${this._globalRippleOptions?.namespace??""}"]`);i&&this._createRipple(i);}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(".mat-ripple")?.remove();let e=this._document.createElement("span");e.classList.add("mat-ripple",t.getAttribute(Qt)),t.append(e);let i=this._globalRippleOptions,a=this._animationsDisabled?0:i?.animation?.enterDuration??z$1.enterDuration,o=this._animationsDisabled?0:i?.animation?.exitDuration??z$1.exitDuration,b$1={rippleDisabled:this._animationsDisabled||i?.disabled||t.hasAttribute(wt),rippleConfig:{centered:t.hasAttribute(Fe),terminateOnPointerUp:i?.terminateOnPointerUp,animation:{enterDuration:a,exitDuration:o}}},T=new b(b$1,this._ngZone,e,this._platform,this._injector),K=!b$1.rippleDisabled;K&&T.setupTriggerEvents(t),this._hosts.set(t,{target:b$1,renderer:T,hasSetUpEvents:K}),t.removeAttribute(jt);}destroyRipple(t){let e=this._hosts.get(t);e&&(e.renderer._removeTriggerEvents(),this._hosts.delete(t));}static \u0275fac=function(e){return new(e||n)};static \u0275prov=rr({token:n,factory:n.\u0275fac})}return n})();var yi=["*",[["mat-chip-avatar"],["","matChipAvatar",""]],[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],Ci=["*","mat-chip-avatar, [matChipAvatar]","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function xi(n,c){n&1&&(ei$1(0,"span",3),zI(1,1),gc());}function wi(n,c){n&1&&(ei$1(0,"span",6),zI(1,2),gc());}var ki=["*"];var Ii=new S("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})}),Oe=new S("MatChipAvatar"),He=new S("MatChipTrailingIcon"),ze=new S("MatChipEdit"),Ne=new S("MatChipRemove"),je=new S("MatChip"),Qe=(()=>{class n{_elementRef=T(or);_parentChip=T(je);_isPrimary=true;_isLeading=false;get disabled(){return this._disabled||this._parentChip?.disabled||false}set disabled(t){this._disabled=t;}_disabled=false;tabIndex=-1;_allowFocusWhenDisabled=false;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?"":null}constructor(){T(_t).load(Xu),this._elementRef.nativeElement.nodeName==="BUTTON"&&this._elementRef.nativeElement.setAttribute("type","button");}focus(){this._elementRef.nativeElement.focus();}static \u0275fac=function(e){return new(e||n)};static \u0275dir=gI({type:n,selectors:[["","matChipContent",""]],hostAttrs:[1,"mat-mdc-chip-action","mdc-evolution-chip__action","mdc-evolution-chip__action--presentational"],hostVars:8,hostBindings:function(e,i){e&2&&(Yf("disabled",i._getDisabledAttribute())("aria-disabled",i.disabled),up("mdc-evolution-chip__action--primary",i._isPrimary)("mdc-evolution-chip__action--secondary",!i._isPrimary)("mdc-evolution-chip__action--trailing",!i._isPrimary&&!i._isLeading));},inputs:{disabled:[2,"disabled","disabled",RL],tabIndex:[2,"tabIndex","tabIndex",t=>t==null?-1:kL(t)],_allowFocusWhenDisabled:"_allowFocusWhenDisabled"}})}return n})(),Ti=(()=>{class n extends Qe{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(t){!this.disabled&&this._isPrimary&&(t.preventDefault(),this._parentChip._handlePrimaryActionInteraction());}_handleKeydown(t){(t.keyCode===13||t.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(t.preventDefault(),this._parentChip._handlePrimaryActionInteraction());}static \u0275fac=(()=>{let t;return function(i){return (t||(t=tm(n)))(i||n)}})();static \u0275dir=gI({type:n,selectors:[["","matChipAction",""]],hostVars:3,hostBindings:function(e,i){e&1&&op("click",function(o){return i._handleClick(o)})("keydown",function(o){return i._handleKeydown(o)}),e&2&&(Yf("tabindex",i._getTabindex()),up("mdc-evolution-chip__action--presentational",false));},features:[$f]})}return n})();var Vt=(()=>{class n{_changeDetectorRef=T(xL);_elementRef=T(or);_tagName=T(_L);_ngZone=T(Te$1);_focusMonitor=T(Bn);_globalRippleOptions=T(ue,{optional:true});_document=T(Un);_onFocus=new X;_onBlur=new X;_isBasicChip=false;role=null;_hasFocusInternal=false;_pendingFocus=false;_actionChanges;_animationsDisabled=Zu();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=T(At$1).getId("mat-mdc-chip-");ariaLabel=null;ariaDescription=null;_chipListDisabled=false;_hadFocusOnRemove=false;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(t){this._value=t;}_value;color;removable=true;highlighted=false;disableRipple=false;get disabled(){return this._disabled||this._chipListDisabled}set disabled(t){this._disabled=t;}_disabled=false;removed=new Oe$1;destroyed=new Oe$1;basicChipAttrName="mat-basic-chip";leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=T(Le);_injector=T(we);constructor(){let t=T(_t);t.load(Xu),t.load(Rn),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:"mat-mdc-chip-ripple",disabled:this._isRippleDisabled()});}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName;}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"),this._pendingFocus&&(this._pendingFocus=false,this.focus());}ngAfterContentInit(){this._actionChanges=Eh(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck());}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled());}ngOnDestroy(){this.destroyed.emit({chip:this}),this.destroyed.complete(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe();}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}));}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return !!(this.trailingIcon||this.removeIcon)}_handleKeydown(t){(t.keyCode===8&&!t.repeat||t.keyCode===46)&&(t.preventDefault(),this.remove());}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=true);}_getSourceAction(t){return this._getActions().find(e=>{let i=e._elementRef.nativeElement;return i===t||i.contains(t)})}_getActions(){let t=[];return this.editIcon&&t.push(this.editIcon),this.primaryAction&&t.push(this.primaryAction),this.removeIcon&&t.push(this.removeIcon),t}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(t){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,true).subscribe(t=>{let e=t!==null;e!==this._hasFocusInternal&&(this._hasFocusInternal=e,e?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))));});}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=uI({type:n,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(e,i,a){if(e&1&&ip(a,Oe,5)(a,ze,5)(a,He,5)(a,Ne,5)(a,Oe,5)(a,He,5)(a,ze,5)(a,Ne,5),e&2){let o;ZI(o=YI())&&(i.leadingIcon=o.first),ZI(o=YI())&&(i.editIcon=o.first),ZI(o=YI())&&(i.trailingIcon=o.first),ZI(o=YI())&&(i.removeIcon=o.first),ZI(o=YI())&&(i._allLeadingIcons=o),ZI(o=YI())&&(i._allTrailingIcons=o),ZI(o=YI())&&(i._allEditIcons=o),ZI(o=YI())&&(i._allRemoveIcons=o);}},viewQuery:function(e,i){if(e&1&&sp(Ti,5),e&2){let a;ZI(a=YI())&&(i.primaryAction=a.first);}},hostAttrs:[1,"mat-mdc-chip"],hostVars:31,hostBindings:function(e,i){e&1&&op("keydown",function(o){return i._handleKeydown(o)}),e&2&&(np("id",i.id),Yf("role",i.role)("aria-label",i.ariaLabel),cE("mat-"+(i.color||"primary")),up("mdc-evolution-chip",!i._isBasicChip)("mdc-evolution-chip--disabled",i.disabled)("mdc-evolution-chip--with-trailing-action",i._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",i.leadingIcon)("mdc-evolution-chip--with-primary-icon",i.leadingIcon)("mdc-evolution-chip--with-avatar",i.leadingIcon)("mat-mdc-chip-with-avatar",i.leadingIcon)("mat-mdc-chip-highlighted",i.highlighted)("mat-mdc-chip-disabled",i.disabled)("mat-mdc-basic-chip",i._isBasicChip)("mat-mdc-standard-chip",!i._isBasicChip)("mat-mdc-chip-with-trailing-icon",i._hasTrailingIcon())("_mat-animation-noopable",i._animationsDisabled));},inputs:{role:"role",id:"id",ariaLabel:[0,"aria-label","ariaLabel"],ariaDescription:[0,"aria-description","ariaDescription"],value:"value",color:"color",removable:[2,"removable","removable",RL],highlighted:[2,"highlighted","highlighted",RL],disableRipple:[2,"disableRipple","disableRipple",RL],disabled:[2,"disabled","disabled",RL]},outputs:{removed:"removed",destroyed:"destroyed"},exportAs:["matChip"],features:[_E([{provide:je,useExisting:n}])],ngContentSelectors:Ci,decls:8,vars:2,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipContent",""],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"]],template:function(e,i){e&1&&(GI(yi),Jf(0,"span",0),ei$1(1,"span",1)(2,"span",2),AI(3,xi,2,0,"span",3),ei$1(4,"span",4),zI(5),Jf(6,"span",5),gc()()(),AI(7,wi,2,0,"span",6)),e&2&&(Ly(3),RI(i.leadingIcon?3:-1),Ly(4),RI(i._hasTrailingIcon()?7:-1));},dependencies:[Qe],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-outline-width, 1px);
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-outline-color, var(--mat-sys-outline));
}
.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, [dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--mat-chip-with-avatar-avatar-size, 24px);
  height: var(--mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--mat-chip-trailing-action-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--mat-chip-trailing-action-focus-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  height: var(--mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--mat-chip-with-icon-icon-size, 18px);
  height: var(--mat-chip-with-icon-icon-size, 18px);
  font-size: var(--mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
  --mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
  --mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
  --mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2})}return n})();var Ve=(()=>{class n{_elementRef=T(or);_changeDetectorRef=T(xL);_dir=T(Zr,{optional:true});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new X;_defaultRole="presentation";get chipFocusChanges(){return this._getChipStream(t=>t._onFocus)}get chipDestroyedChanges(){return this._getChipStream(t=>t.destroyed)}get chipRemovedChanges(){return this._getChipStream(t=>t.removed)}get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._syncChipsState();}_disabled=false;get empty(){return !this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(t){this._explicitRole=t;}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new Bo;ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip();}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete();}_hasFocusedChip(){return this._chips&&this._chips.some(t=>t._hasFocus())}_syncChipsState(){this._chips?.forEach(t=>{t._chipListDisabled=this._disabled,t._changeDetectorRef.markForCheck();});}focus(){}_handleKeydown(t){this._originatesFromChip(t)&&this._keyManager.onKeydown(t);}_isValidIndex(t){return t>=0&&t<this._chips.length}_allowFocusEscape(){let t=this._elementRef.nativeElement.tabIndex;t!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=t));}_getChipStream(t){return this._chips.changes.pipe(kh(null),Oh(()=>Eh(...this._chips.map(t))))}_originatesFromChip(t){let e=t.target;for(;e&&e!==this._elementRef.nativeElement;){if(e.classList.contains("mat-mdc-chip"))return  true;e=e.parentElement;}return  false}_setUpFocusManagement(){this._chips.changes.pipe(kh(this._chips)).subscribe(t=>{let e=[];t.forEach(i=>i._getActions().forEach(a=>e.push(a))),this._chipActions.reset(e),this._chipActions.notifyOnChanges();}),this._keyManager=new wt$1(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:"ltr").withHomeAndEnd().skipPredicate(t=>this._skipPredicate(t)),this.chipFocusChanges.pipe(Ph(this._destroyed)).subscribe(({chip:t})=>{let e=t._getSourceAction(document.activeElement);e&&this._keyManager.updateActiveItem(e);}),this._dir?.change.pipe(Ph(this._destroyed)).subscribe(t=>this._keyManager.withHorizontalOrientation(t));}_skipPredicate(t){return t.disabled}_trackChipSetChanges(){this._chips.changes.pipe(kh(null),Ph(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus();});}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(Ph(this._destroyed)).subscribe(t=>{let i=this._chips.toArray().indexOf(t.chip),a=t.chip._hasFocus(),o=t.chip._hadFocusOnRemove&&this._keyManager.activeItem&&t.chip._getActions().includes(this._keyManager.activeItem),b=a||o;this._isValidIndex(i)&&b&&(this._lastDestroyedFocusedChipIndex=i);});}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let t=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),e=this._chips.toArray()[t];e.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():e.focus();}else this.focus();this._lastDestroyedFocusedChipIndex=null;}}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=uI({type:n,selectors:[["mat-chip-set"]],contentQueries:function(e,i,a){if(e&1&&ip(a,Vt,5),e&2){let o;ZI(o=YI())&&(i._chips=o);}},hostAttrs:[1,"mat-mdc-chip-set","mdc-evolution-chip-set"],hostVars:1,hostBindings:function(e,i){e&1&&op("keydown",function(o){return i._handleKeydown(o)}),e&2&&Yf("role",i.role);},inputs:{disabled:[2,"disabled","disabled",RL],role:"role",tabIndex:[2,"tabIndex","tabIndex",t=>t==null?0:kL(t)]},ngContentSelectors:ki,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(e,i){e&1&&(GI(),mc(0,"div",0),zI(1),yc());},styles:[`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 4px 0 4px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`],encapsulation:2})}return n})();var Ge=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=fI({type:n});static \u0275inj=Cl({providers:[m,{provide:Ii,useValue:{separatorKeyCodes:[13]}}],imports:[mt,Va]})}return n})();var Di=(n,c)=>c.id,Ei=(n,c)=>c.thesis;function Si(n,c){n&1&&(ei$1(0,"span",14),IE(1,"HYBRID STATES"),gc());}function Ri(n,c){if(n&1&&(ei$1(0,"mat-card",11)(1,"mat-card-content")(2,"div",15)(3,"span",16),IE(4),xE(5,"uppercase"),gc()(),ei$1(6,"div",17)(7,"div",18)(8,"span",19),IE(9,"SYMBOLIC"),gc(),ei$1(10,"mat-chip-set")(11,"mat-chip",20),IE(12),gc()(),ei$1(13,"span",21),IE(14),gc(),ei$1(15,"p",22),IE(16),gc()(),ei$1(17,"div",23),IE(18,"\xD7"),gc(),ei$1(19,"div",18)(20,"span",19),IE(21,"STRUCTURAL"),gc(),ei$1(22,"mat-chip-set")(23,"mat-chip",24),IE(24),gc()(),ei$1(25,"span",25),IE(26),gc(),ei$1(27,"p",22),IE(28),gc()()(),ei$1(29,"mat-card",26)(30,"mat-card-content")(31,"span",27),IE(32,"SYNTHESIS OUTPUT"),gc(),ei$1(33,"p",28),IE(34),gc()()()()()),n&2){let t=c.$implicit,e=qI();Ly(4),yp(RE(5,10,t.id)),Ly(8),Ec(" ",t.symbolic.label," "),Ly(2),yp(e.formatHorizon(t.symbolic.horizon)),Ly(2),yp(t.symbolic.description),Ly(7),cE(e.severityClass(t.structural.severity)),Ly(),Ec(" ",t.structural.domain," "),Ly(2),Ec("SEV ",(t.structural.severity*100).toFixed(0),"%"),Ly(2),yp(t.structural.description),Ly(6),yp(t.synthesis);}}function Ai(n,c){n&1&&(ei$1(0,"span",14),IE(1,"DIALECTICAL MAPPINGS"),gc());}function Pi(n,c){if(n&1&&(ei$1(0,"mat-card",13)(1,"mat-card-content")(2,"div",29),IE(3),gc(),ei$1(4,"div",30)(5,"div",31)(6,"span",32),IE(7,"THESIS"),gc(),ei$1(8,"span",33),IE(9),gc()(),ei$1(10,"span",34),IE(11,"\u2192"),gc(),ei$1(12,"div",31)(13,"span",32),IE(14,"ANTITHESIS"),gc(),ei$1(15,"span",35),IE(16),gc()(),ei$1(17,"span",34),IE(18,"\u2192"),gc(),ei$1(19,"div",31)(20,"span",32),IE(21,"SYNTHESIS"),gc(),ei$1(22,"span",36),IE(23),gc()()()()()),n&2){let t=c.$implicit,e=c.$index,i=qI();Ly(3),yp(i.formatIndex(e)),Ly(6),yp(t.thesis),Ly(7),yp(t.antithesis),Ly(7),yp(t.synthesis);}}var qe=class n{service=T(c);severityClass(c){return c>=.85?"sev-critical":c>=.7?"sev-high":"sev-warning"}formatHorizon(c){return c<0?`${Math.abs(c)} BCE`:`${c} CE`}formatIndex(c){return String(c+1).padStart(2,"0")}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=uI({type:n,selectors:[["app-hybrid-fusion"]],decls:30,vars:0,consts:[[1,"engine-header"],[1,"engine-id"],[1,"engine-title"],[1,"engine-desc"],["animationDuration","150ms",1,"fusion-tabs"],["mat-tab-label",""],[1,"tab-content"],[1,"section-header"],[1,"section-id"],[1,"section-title"],[1,"states-list"],[1,"state-card"],[1,"dialectic-list"],[1,"dialectic-card"],[1,"tab-label"],[1,"state-id-row"],[1,"state-id"],[1,"state-pair"],[1,"state-axis"],[1,"axis-label"],["disableRipple","",1,"chip-symbolic"],[1,"axis-year"],[1,"axis-desc"],[1,"state-cross"],["disableRipple","",1,"chip-structural"],[1,"axis-severity"],[1,"synthesis-card"],[1,"codex-section-label"],[1,"synthesis-text"],[1,"dialectic-index"],[1,"dialectic-flow"],[1,"dialectic-node"],[1,"node-label"],[1,"node-value","thesis"],[1,"flow-arrow"],[1,"node-value","antithesis"],[1,"node-value","synthesis-node"]],template:function(t,e){t&1&&(ei$1(0,"div",0)(1,"span",1),IE(2,"ENGINE-03"),gc(),ei$1(3,"h1",2),IE(4,"HYBRID SYNTHESIS"),gc(),ei$1(5,"p",3),IE(6," Temporal Codex \xD7 StrataTruth \xB7 Symbolic\u2013structural interlock \xB7 Dialectical fusion layer "),gc()(),ei$1(7,"mat-tab-group",4)(8,"mat-tab"),qf(9,Si,2,0,"ng-template",5),ei$1(10,"div",6)(11,"div",7)(12,"span",8),IE(13,"HS-01"),gc(),ei$1(14,"span",9),IE(15,"SYMBOLIC\u2013STRUCTURAL INTERLOCK STATES"),gc()(),ei$1(16,"div",10),OI(17,Ri,35,12,"mat-card",11,Di),gc()()(),ei$1(19,"mat-tab"),qf(20,Ai,2,0,"ng-template",5),ei$1(21,"div",6)(22,"div",7)(23,"span",8),IE(24,"HS-02"),gc(),ei$1(25,"span",9),IE(26,"THESIS \u2192 ANTITHESIS \u2192 SYNTHESIS"),gc()(),ei$1(27,"div",12),OI(28,Pi,24,4,"mat-card",13,Ei),gc()()()()),t&2&&(Ly(17),PI(e.service.hybridStates),Ly(11),PI(e.service.dialecticalMappings));},dependencies:[Be,zt,Nt,Pe,Ge,Vt,Ve,z,F,k,er],styles:[".engine-header[_ngcontent-%COMP%]{margin-bottom:20px;padding-bottom:16px;border-bottom:1px solid #1a1a1a}.engine-id[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:.6rem;letter-spacing:.25em;color:#333;display:block;margin-bottom:4px}.engine-title[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:1.4rem;font-weight:700;letter-spacing:.15em;color:#c8c8c8;margin:0 0 6px}.engine-desc[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:.75rem;color:#555;margin:0;letter-spacing:.05em}[_nghost-%COMP%]     .mat-mdc-tab-labels{border-bottom:1px solid #1a1a1a;background-color:transparent}[_nghost-%COMP%]     .mat-mdc-tab-label-container{background-color:transparent}[_nghost-%COMP%]     .mdc-tab__text-label{color:#444!important}[_nghost-%COMP%]     .mdc-tab--active .mdc-tab__text-label{color:#6ea8fe!important}[_nghost-%COMP%]     .mdc-tab-indicator__content--underline{border-color:#6ea8fe!important}.tab-label[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:.65rem;letter-spacing:.18em}.tab-content[_ngcontent-%COMP%]{padding-top:20px}.section-header[_ngcontent-%COMP%]{display:flex;align-items:baseline;gap:10px;margin-bottom:16px}.section-id[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:.6rem;color:#333;letter-spacing:.15em}.section-title[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:.7rem;letter-spacing:.2em;color:#888;font-weight:600}.states-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.state-card[_ngcontent-%COMP%]{background-color:#0f0f0f!important;border:1px solid #1a1a1a!important}.state-id-row[_ngcontent-%COMP%]{margin-bottom:12px}.state-id[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:.6rem;color:#333;letter-spacing:.2em}.state-pair[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr auto 1fr;gap:12px;align-items:start;margin-bottom:14px}.state-cross[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:1.2rem;color:#2a2a2a;padding-top:24px;text-align:center}.state-axis[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:5px}.axis-label[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:.58rem;letter-spacing:.2em;color:#3a3a3a}.axis-year[_ngcontent-%COMP%], .axis-severity[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:.65rem;color:#444}.axis-desc[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:.7rem;color:#555;margin:2px 0 0;line-height:1.4}[_nghost-%COMP%]     .chip-symbolic{background-color:#0d1a2e!important;color:#6ea8fe!important;border-color:#1a3060!important;font-family:Courier New,Courier,monospace!important;font-size:.72rem!important}[_nghost-%COMP%]     .chip-structural{background-color:#1a0d0d!important;color:#888!important;border-color:#2a1a1a!important;font-family:Courier New,Courier,monospace!important;font-size:.72rem!important}[_nghost-%COMP%]     .sev-critical{color:#e05555!important;border-color:#4a1a1a!important}[_nghost-%COMP%]     .sev-high{color:#d4813a!important}.synthesis-card[_ngcontent-%COMP%]{background-color:#080808!important;border:1px solid #151515!important;border-left:2px solid #2a3a50!important}.synthesis-text[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:.78rem;color:#888;margin:4px 0 0;line-height:1.6}.dialectic-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px}.dialectic-card[_ngcontent-%COMP%]{background-color:#0f0f0f!important;border:1px solid #1a1a1a!important}.dialectic-index[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:.6rem;color:#2a2a2a;margin-bottom:12px;letter-spacing:.1em}.dialectic-flow[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr auto 1fr auto 1fr;gap:12px;align-items:center}.flow-arrow[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:1rem;color:#2a2a2a;text-align:center}.dialectic-node[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.node-label[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:.58rem;letter-spacing:.15em;color:#333}.node-value[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:.8rem;font-weight:600;line-height:1.3}.thesis[_ngcontent-%COMP%]{color:#888}.antithesis[_ngcontent-%COMP%]{color:#c05050}.synthesis-node[_ngcontent-%COMP%]{color:#6ea8fe}"]})};export{qe as HybridFusionComponent};