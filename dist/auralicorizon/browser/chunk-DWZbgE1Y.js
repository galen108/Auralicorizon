import {T as T$1,u as uI,a as er,c as ei,I as IE,g as gc,d as OI,L as Ly,o as Kf,P as PI,p as fI,C as Cl,bc as yt$1,aS as mt$1,V as Va,N as pi,ad as j,aX as Oh,bd as Re,F as kh,r as tm,$ as $f,G as GI,k as qf,_ as _E,M as ip,Z as ZI,Y as YI,s as gI,X as Te,a1 as vv,Q as Zu,aJ as Ws,D as Bo,a2 as Oe,be as NL,as as U,a0 as or,ax as Ph,bf as qn,A as AI,bg as OE,R as RI,l as lp,h as up,aa as sp,f as Jf,q as qI,ao as cE,E as Ec,x as xE,y as yp,j as RE,ab as Bn,ae as _t$1,af as Xu,aV as Rn,ac as xL,aP as xe,bh as wt$1,bi as wE,bj as FE,S as S$1,a8 as Lg,w as RL,aN as Wf,bk as K,aI as Jn,ar as Zr,a3 as X,a4 as At$1,H as wt$2,aD as sh,aj as jn,bl as ec,am as kL,aQ as kI,a_ as BI,an as op,a$ as Zl,b0 as Yl,a9 as Yf,b6 as rr,B as tp,bm as NE,z as zI,b1 as KI,bn as ME}from'./main-TFE4CTDX.js';import {c,m}from'./chunk-lhz-PX9G.js';import'./chunk-Dg7vZ_d7.js';import {S,s,T as T$2}from'./chunk-BE5iyprf.js';import {z,F,k}from'./chunk-BbZTrEze.js';var ht=["*"];function ft(t,a){t&1&&zI(0);}var he=(()=>{class t{_elementRef=T$1(or);focus(){this._elementRef.nativeElement.focus();}static \u0275fac=function(n){return new(n||t)};static \u0275dir=gI({type:t,selectors:[["","cdkStepHeader",""]],hostAttrs:["role","tab"]})}return t})(),fe=(()=>{class t{template=T$1(Jn);static \u0275fac=function(n){return new(n||t)};static \u0275dir=gI({type:t,selectors:[["","cdkStepLabel",""]]})}return t})();var T={NUMBER:"number",EDIT:"edit",DONE:"done",ERROR:"error"},_t=new S$1("STEPPER_GLOBAL_OPTIONS"),ne=(()=>{class t{_stepperOptions;_stepper=T$1(ie);_displayDefaultIndicatorType;stepLabel;_childForms;content;stepControl;get interacted(){return this._interacted()}set interacted(e){this._interacted.set(e);}_interacted=Ws(false);interactedStream=new Oe;label;errorMessage;ariaLabel;ariaLabelledby;get state(){return this._state()}set state(e){this._state.set(e);}_state=Ws(void 0);get editable(){return this._editable()}set editable(e){this._editable.set(e);}_editable=Ws(true);optional=false;get completed(){let e=this._completedOverride(),n=this._interacted();return e??(n&&(!this.stepControl||this.stepControl.valid))}set completed(e){this._completedOverride.set(e);}_completedOverride=Ws(null);index=Ws(-1);isSelected=FE(()=>this._stepper.selectedIndex===this.index());indicatorType=FE(()=>{let e=this.isSelected(),n=this.completed,i=this._state()??T.NUMBER,s=this._editable();return this._showError()&&this.hasError&&!e?T.ERROR:this._displayDefaultIndicatorType?!n||e?T.NUMBER:s?T.EDIT:T.DONE:n&&!e?T.DONE:n&&e?i:s&&e?T.EDIT:i});isNavigable=FE(()=>{let e=this.isSelected();return this.completed||e||!this._stepper.linear});get hasError(){let e=this._customError();return e??this._getDefaultError()}set hasError(e){this._customError.set(e);}_customError=Ws(null);_getDefaultError(){return this.interacted&&!!this.stepControl?.invalid}constructor(){let e=T$1(_t,{optional:true});this._stepperOptions=e||{},this._displayDefaultIndicatorType=this._stepperOptions.displayDefaultIndicatorType!==false;}select(){this._stepper.selected=this;}reset(){this._interacted.set(false),this._completedOverride()!=null&&this._completedOverride.set(false),this._customError()!=null&&this._customError.set(false),this.stepControl&&(this._childForms?.forEach(e=>e.resetForm?.()),this.stepControl.reset());}ngOnChanges(){this._stepper._stateChanged();}_markAsInteracted(){this._interacted()||(this._interacted.set(true),this.interactedStream.emit(this));}_showError(){return this._stepperOptions.showError??this._customError()!=null}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=uI({type:t,selectors:[["cdk-step"]],contentQueries:function(n,i,s){if(n&1&&ip(s,fe,5)(s,K,5),n&2){let d;ZI(d=YI())&&(i.stepLabel=d.first),ZI(d=YI())&&(i._childForms=d);}},viewQuery:function(n,i){if(n&1&&sp(Jn,7),n&2){let s;ZI(s=YI())&&(i.content=s.first);}},inputs:{stepControl:"stepControl",label:"label",errorMessage:"errorMessage",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],state:"state",editable:[2,"editable","editable",RL],optional:[2,"optional","optional",RL],completed:[2,"completed","completed",RL],hasError:[2,"hasError","hasError",RL]},outputs:{interactedStream:"interacted"},exportAs:["cdkStep"],features:[Lg],ngContentSelectors:ht,decls:1,vars:0,template:function(n,i){n&1&&(GI(),Wf(0,ft,1,0,"ng-template"));},encapsulation:2})}return t})(),ie=(()=>{class t{_dir=T$1(Zr,{optional:true});_changeDetectorRef=T$1(xL);_elementRef=T$1(or);_destroyed=new X;_keyManager;_steps;steps=new Bo;_stepHeader;_sortedHeaders=new Bo;get linear(){return this._linear()}set linear(e){this._linear.set(e);}_linear=Ws(false);get selectedIndex(){return this._selectedIndex()}set selectedIndex(e){this._steps?(this._isValidIndex(e),this.selectedIndex!==e&&(this.selected?._markAsInteracted(),!this._anyControlsInvalidOrPending(e)&&(e>=this.selectedIndex||this.steps.toArray()[e].editable)&&this._updateSelectedItemIndex(e))):this._selectedIndex.set(e);}_selectedIndex=Ws(0);get selected(){return this.steps?this.steps.toArray()[this.selectedIndex]:void 0}set selected(e){this.selectedIndex=e&&this.steps?this.steps.toArray().indexOf(e):-1;}selectionChange=new Oe;selectedIndexChange=new Oe;_groupId=T$1(At$1).getId("cdk-stepper-");get orientation(){return this._orientation}set orientation(e){this._orientation=e,this._keyManager&&this._keyManager.withVerticalOrientation(e==="vertical");}_orientation="horizontal";ngAfterContentInit(){this._steps.changes.pipe(kh(this._steps),Ph(this._destroyed)).subscribe(e=>{this.steps.reset(e.filter(n=>n._stepper===this)),this.steps.forEach((n,i)=>n.index.set(i)),this.steps.notifyOnChanges();});}ngAfterViewInit(){if(this._stepHeader.changes.pipe(kh(this._stepHeader),Ph(this._destroyed)).subscribe(e=>{this._sortedHeaders.reset(e.toArray().sort((n,i)=>n._elementRef.nativeElement.compareDocumentPosition(i._elementRef.nativeElement)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)),this._sortedHeaders.notifyOnChanges();}),this._keyManager=new wt$2(this._sortedHeaders).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation==="vertical"),this._keyManager.updateActiveItem(this.selectedIndex),(this._dir?this._dir.change:sh()).pipe(kh(this._layoutDirection()),Ph(this._destroyed)).subscribe(e=>this._keyManager?.withHorizontalOrientation(e)),this._keyManager.updateActiveItem(this.selectedIndex),this.steps.changes.subscribe(()=>{this.selected||this._selectedIndex.set(Math.max(this.selectedIndex-1,0));}),this._isValidIndex(this.selectedIndex)||this._selectedIndex.set(0),this.linear&&this.selectedIndex>0){let e=this.steps.toArray().slice(0,this._selectedIndex());for(let n of e)n._markAsInteracted();}}ngOnDestroy(){this._keyManager?.destroy(),this.steps.destroy(),this._sortedHeaders.destroy(),this._destroyed.next(),this._destroyed.complete();}next(){this.selectedIndex=Math.min(this._selectedIndex()+1,this.steps.length-1);}previous(){this.selectedIndex=Math.max(this._selectedIndex()-1,0);}reset(){this._updateSelectedItemIndex(0),this.steps.forEach(e=>e.reset()),this._stateChanged();}_getStepLabelId(e){return `${this._groupId}-label-${e}`}_getStepContentId(e){return `${this._groupId}-content-${e}`}_stateChanged(){this._changeDetectorRef.markForCheck();}_getAnimationDirection(e){let n=e-this._selectedIndex();return n<0?this._layoutDirection()==="rtl"?"next":"previous":n>0?this._layoutDirection()==="rtl"?"previous":"next":"current"}_getFocusIndex(){return this._keyManager?this._keyManager.activeItemIndex:this._selectedIndex()}_updateSelectedItemIndex(e){let n=this.steps.toArray(),i=this._selectedIndex();this.selectionChange.emit({selectedIndex:e,previouslySelectedIndex:i,selectedStep:n[e],previouslySelectedStep:n[i]}),this._keyManager&&(this._containsFocus()?this._keyManager.setActiveItem(e):this._keyManager.updateActiveItem(e)),this._selectedIndex.set(e),this.selectedIndexChange.emit(e),this._stateChanged();}_onKeydown(e){let n=jn(e),i=e.keyCode,s=this._keyManager;s?.activeItemIndex!=null&&!n&&(i===32||i===13)?(this.selectedIndex=s.activeItemIndex,e.preventDefault()):s?.setFocusOrigin("keyboard").onKeydown(e);}_anyControlsInvalidOrPending(e){return this.linear&&e>=0?this.steps.toArray().slice(0,e).some(n=>{let i=n.stepControl;return (i?i.invalid||i.pending||!n.interacted:!n.completed)&&!n.optional&&!n._completedOverride()}):false}_layoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_containsFocus(){let e=this._elementRef.nativeElement,n=ec();return e===n||e.contains(n)}_isValidIndex(e){return e>-1&&(!this.steps||e<this.steps.length)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=gI({type:t,selectors:[["","cdkStepper",""]],contentQueries:function(n,i,s){if(n&1&&ip(s,ne,5)(s,he,5),n&2){let d;ZI(d=YI())&&(i._steps=d),ZI(d=YI())&&(i._stepHeader=d);}},inputs:{linear:[2,"linear","linear",RL],selectedIndex:[2,"selectedIndex","selectedIndex",kL],selected:"selected",orientation:"orientation"},outputs:{selectionChange:"selectionChange",selectedIndexChange:"selectedIndexChange"},exportAs:["cdkStepper"]})}return t})();var ot=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=fI({type:t});static \u0275inj=Cl({imports:[Va]})}return t})();var gt=(t,a,e)=>({index:t,active:a,optional:e});function vt(t,a){if(t&1&&tp(0,2),t&2){let e=qI();Kf("ngTemplateOutlet",e.iconOverrides[e.state])("ngTemplateOutletContext",NE(2,gt,e.index,e.active,e.optional));}}function bt(t,a){if(t&1&&(ei(0,"span",7),IE(1),gc()),t&2){let e=qI(2);Ly(),yp(e._getDefaultTextForState(e.state));}}function yt(t,a){if(t&1&&(ei(0,"span",8),IE(1),gc()),t&2){let e=qI(3);Ly(),yp(e._intl.completedLabel);}}function xt(t,a){if(t&1&&(ei(0,"span",8),IE(1),gc()),t&2){let e=qI(3);Ly(),yp(e._intl.editableLabel);}}function Ct(t,a){if(t&1&&(AI(0,yt,2,1,"span",8)(1,xt,2,1,"span",8),ei(2,"mat-icon",7),IE(3),gc()),t&2){let e=qI(2);RI(e.state==="done"?0:e.state==="edit"?1:-1),Ly(3),yp(e._getDefaultTextForState(e.state));}}function St(t,a){if(t&1&&AI(0,bt,2,1,"span",7)(1,Ct,4,2),t&2){let n=qI();RI((n.state)==="number"?0:1);}}function Mt(t,a){t&1&&(ei(0,"div",4),tp(1,9),gc()),t&2&&(Ly(),Kf("ngTemplateOutlet",a.template));}function It(t,a){if(t&1&&(ei(0,"div",4),IE(1),gc()),t&2){let e=qI();Ly(),yp(e.label);}}function wt(t,a){if(t&1&&(ei(0,"div",5),IE(1),gc()),t&2){let e=qI();Ly(),yp(e._intl.optionalLabel);}}function Et(t,a){if(t&1&&(ei(0,"div",6),IE(1),gc()),t&2){let e=qI();Ly(),yp(e.errorMessage);}}var st=["*"];function Dt(t,a){}function Ot(t,a){if(t&1&&(zI(0),qf(1,Dt,0,0,"ng-template",0)),t&2){let e=qI();Ly(),Kf("cdkPortalOutlet",e._portal);}}var Tt=["animatedContainer"],lt=t=>({steps:t}),pt=t=>({step:t});function zt(t,a){t&1&&zI(0);}function kt(t,a){if(t&1&&(ei(0,"div",5),tp(1,9)(2,6),gc()),t&2){let e=qI(2),n=KI(6);Ly(),Kf("ngTemplateOutlet",e.headerPrefix()),Ly(),Kf("ngTemplateOutlet",n)("ngTemplateOutletContext",ME(3,lt,e.steps));}}function Pt(t,a){if(t&1&&tp(0,6),t&2){let e=qI(2),n=KI(6);Kf("ngTemplateOutlet",n)("ngTemplateOutletContext",ME(2,lt,e.steps));}}function Rt(t,a){if(t&1&&(ei(0,"div",10,2),tp(2,9),gc()),t&2){let e=a.$implicit,n=a.$index,i=qI(2);cE("mat-horizontal-stepper-content-"+i._getAnimationDirection(n)),Kf("id",i._getStepContentId(n)),Yf("aria-labelledby",i._getStepLabelId(n))("inert",i.selectedIndex===n?null:""),Ly(2),Kf("ngTemplateOutlet",e.content);}}function Nt(t,a){if(t&1&&(ei(0,"div",3),AI(1,kt,3,5,"div",5)(2,Pt,1,4,"ng-container",6),ei(3,"div",7),OI(4,Rt,3,6,"div",8,kI),gc()()),t&2){let e=qI();Ly(),RI(e.headerPrefix()?1:2),Ly(3),PI(e.steps);}}function Lt(t,a){if(t&1&&tp(0,9),t&2){let e=qI(2);Kf("ngTemplateOutlet",e.headerPrefix());}}function Ft(t,a){if(t&1&&(ei(0,"div",11),tp(1,6),ei(2,"div",12,2)(4,"div",13)(5,"div",14),tp(6,9),gc()()()()),t&2){let e=a.$implicit,n=a.$index,i=a.$index,s=a.$count,d=qI(2),ae=KI(4);Ly(),Kf("ngTemplateOutlet",ae)("ngTemplateOutletContext",ME(11,pt,e)),Ly(),up("mat-stepper-vertical-line",i!==s-1)("mat-vertical-content-container-active",d.selectedIndex===n),Yf("inert",d.selectedIndex===n?null:"")("aria-label",d.ariaLabel),Ly(2),Kf("id",d._getStepContentId(n)),Yf("aria-labelledby",d._getStepLabelId(n)),Ly(2),Kf("ngTemplateOutlet",e.content);}}function At(t,a){if(t&1&&(ei(0,"div",4),AI(1,Lt,1,1,"ng-container",9),OI(2,Ft,7,13,"div",11,kI),gc()),t&2){let e=qI();Ly(),RI(e.headerPrefix()?1:-1),Ly(),PI(e.steps);}}function Ht(t,a){if(t&1){let e=BI();ei(0,"mat-step-header",15),op("click",function(){let i=Zl(e).step;return Yl(i.select())})("keydown",function(i){Zl(e);let s=qI();return Yl(s._onKeydown(i))}),gc();}if(t&2){let e=a.step,n=qI();up("mat-horizontal-stepper-header",n.orientation==="horizontal")("mat-vertical-stepper-header",n.orientation==="vertical"),Kf("tabIndex",n._getFocusIndex()===e.index()?0:-1)("id",n._getStepLabelId(e.index()))("index",e.index())("state",e.indicatorType())("label",e.stepLabel||e.label)("selected",e.isSelected())("active",e.isNavigable())("optional",e.optional)("errorMessage",e.errorMessage)("iconOverrides",n._iconOverrides)("disableRipple",n.disableRipple||!e.isNavigable())("color",e.color||n.color),Yf("role",n.orientation==="horizontal"?"tab":"button")("aria-posinset",n.orientation==="horizontal"?e.index()+1:null)("aria-setsize",n.orientation==="horizontal"?n.steps.length:null)("aria-selected",n.orientation==="horizontal"?e.isSelected():null)("aria-current",n.orientation==="vertical"&&e.isSelected()?"step":null)("aria-disabled",n.orientation==="vertical"&&e.isSelected()?"true":null)("aria-expanded",n.orientation==="vertical"?e.isSelected():null)("aria-controls",n._getStepContentId(e.index()))("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null)("aria-disabled",e.isNavigable()?null:true);}}function Bt(t,a){t&1&&Jf(0,"div",17);}function Qt(t,a){if(t&1&&(tp(0,6),AI(1,Bt,1,0,"div",17)),t&2){let e=a.$implicit,n=a.$index,i=a.$count;qI(2);let s=KI(4);Kf("ngTemplateOutlet",s)("ngTemplateOutletContext",ME(3,pt,e)),Ly(),RI(n!==i-1?1:-1);}}function Vt(t,a){if(t&1&&(ei(0,"div",16),OI(1,Qt,2,5,null,null,kI),gc()),t&2){let e=a.steps,n=qI();Yf("aria-label",n.ariaLabel),Ly(),PI(e);}}var q=(()=>{class t extends fe{static \u0275fac=(()=>{let e;return function(i){return (e||(e=tm(t)))(i||t)}})();static \u0275dir=gI({type:t,selectors:[["","matStepLabel",""]],features:[$f]})}return t})(),$t=(()=>{class t{changes=new X;optionalLabel="Optional";completedLabel="Completed";editableLabel="Editable";static \u0275fac=function(n){return new(n||t)};static \u0275prov=rr({token:t,factory:t.\u0275fac})}return t})(),_e=(()=>{class t extends he{_intl=T$1($t);_focusMonitor=T$1(Bn);_intlSubscription;state;label;errorMessage;iconOverrides;index;selected=false;active=false;optional=false;disableRipple=false;color;constructor(){super();let e=T$1(_t$1);e.load(Xu),e.load(Rn);let n=T$1(xL);this._intlSubscription=this._intl.changes.subscribe(()=>n.markForCheck());}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,true);}ngOnDestroy(){this._intlSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._elementRef);}focus(e,n){e?this._focusMonitor.focusVia(this._elementRef,e,n):this._elementRef.nativeElement.focus(n);}_stringLabel(){return this.label instanceof q?null:this.label}_templateLabel(){return this.label instanceof q?this.label:null}_getHostElement(){return this._elementRef.nativeElement}_getDefaultTextForState(e){return e=="number"?`${this.index+1}`:e=="edit"?"create":e=="error"?"warning":e}_hasEmptyLabel(){return !this._stringLabel()&&!this._templateLabel()&&!this._hasOptionalLabel()&&!this._hasErrorLabel()}_hasOptionalLabel(){return this.optional&&this.state!=="error"}_hasErrorLabel(){return this.state==="error"}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=uI({type:t,selectors:[["mat-step-header"]],hostAttrs:["role","",1,"mat-step-header"],hostVars:4,hostBindings:function(n,i){n&2&&(cE("mat-"+(i.color||"primary")),up("mat-step-header-empty-label",i._hasEmptyLabel()));},inputs:{state:"state",label:"label",errorMessage:"errorMessage",iconOverrides:"iconOverrides",index:"index",selected:"selected",active:"active",optional:"optional",disableRipple:"disableRipple",color:"color"},features:[$f],decls:10,vars:17,consts:[["matRipple","",1,"mat-step-header-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"],[1,"mat-step-icon-content"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-step-label"],[1,"mat-step-text-label"],[1,"mat-step-optional"],[1,"mat-step-sub-label-error"],["aria-hidden","true"],[1,"cdk-visually-hidden"],[3,"ngTemplateOutlet"]],template:function(n,i){if(n&1&&(Jf(0,"div",0),ei(1,"div")(2,"div",1),AI(3,vt,1,6,"ng-container",2)(4,St,2,1),gc()(),ei(5,"div",3),AI(6,Mt,2,1,"div",4)(7,It,2,1,"div",4),AI(8,wt,2,1,"div",5),AI(9,Et,2,1,"div",6),gc()),n&2){let s;Kf("matRippleTrigger",i._getHostElement())("matRippleDisabled",i.disableRipple),Ly(),cE(wE("mat-step-icon-state-",i.state," mat-step-icon")),up("mat-step-icon-selected",i.selected),Ly(2),RI(i.iconOverrides&&i.iconOverrides[i.state]?3:4),Ly(2),up("mat-step-label-active",i.active)("mat-step-label-selected",i.selected)("mat-step-label-error",i.state=="error"),Ly(),RI((s=i._templateLabel())?6:i._stringLabel()?7:-1,s),Ly(2),RI(i._hasOptionalLabel()?8:-1),Ly(),RI(i._hasErrorLabel()?9:-1);}},dependencies:[xe,qn,wt$1],styles:[`.mat-step-header {
  overflow: hidden;
  outline: none;
  cursor: pointer;
  position: relative;
  box-sizing: content-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-step-header:focus-visible .mat-focus-indicator::before {
  content: "";
}
.mat-step-header:hover[aria-disabled=true] {
  cursor: default;
}
.mat-step-header:hover:not([aria-disabled]), .mat-step-header:hover[aria-disabled=false] {
  background-color: var(--mat-stepper-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
  border-radius: var(--mat-stepper-header-hover-state-layer-shape, var(--mat-sys-corner-medium));
}
.mat-step-header.cdk-keyboard-focused, .mat-step-header.cdk-program-focused {
  background-color: var(--mat-stepper-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  border-radius: var(--mat-stepper-header-focus-state-layer-shape, var(--mat-sys-corner-medium));
}
@media (hover: none) {
  .mat-step-header:hover {
    background: none;
  }
}
@media (forced-colors: active) {
  .mat-step-header {
    outline: solid 1px;
  }
  .mat-step-header[aria-selected=true] .mat-step-label {
    text-decoration: underline;
  }
  .mat-step-header[aria-disabled=true] {
    outline-color: GrayText;
  }
  .mat-step-header[aria-disabled=true] .mat-step-label,
  .mat-step-header[aria-disabled=true] .mat-step-icon,
  .mat-step-header[aria-disabled=true] .mat-step-optional {
    color: GrayText;
  }
}

.mat-step-optional {
  font-size: 12px;
  color: var(--mat-stepper-header-optional-label-text-color, var(--mat-sys-on-surface-variant));
}

.mat-step-sub-label-error {
  font-size: 12px;
  font-weight: normal;
}

.mat-step-icon {
  border-radius: 50%;
  height: 24px;
  width: 24px;
  flex-shrink: 0;
  position: relative;
  color: var(--mat-stepper-header-icon-foreground-color, var(--mat-sys-surface));
  background-color: var(--mat-stepper-header-icon-background-color, var(--mat-sys-on-surface-variant));
}

.mat-step-icon-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
}

.mat-step-icon .mat-icon {
  font-size: 16px;
  height: 16px;
  width: 16px;
}

.mat-step-icon-state-error {
  background-color: var(--mat-stepper-header-error-state-icon-background-color, transparent);
  color: var(--mat-stepper-header-error-state-icon-foreground-color, var(--mat-sys-error));
}
.mat-step-icon-state-error .mat-icon {
  font-size: 24px;
  height: 24px;
  width: 24px;
}

.mat-step-label {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 50px;
  vertical-align: middle;
  font-family: var(--mat-stepper-header-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-stepper-header-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-stepper-header-label-text-weight, var(--mat-sys-title-small-weight));
  color: var(--mat-stepper-header-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-step-label.mat-step-label-active {
  color: var(--mat-stepper-header-selected-state-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-step-label.mat-step-label-error {
  color: var(--mat-stepper-header-error-state-label-text-color, var(--mat-sys-error));
  font-size: var(--mat-stepper-header-error-state-label-text-size, var(--mat-sys-title-small-size));
}
.mat-step-label.mat-step-label-selected {
  font-size: var(--mat-stepper-header-selected-state-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-stepper-header-selected-state-label-text-weight, var(--mat-sys-title-small-weight));
}
.mat-step-header-empty-label .mat-step-label {
  min-width: 0;
}

.mat-step-text-label {
  text-overflow: ellipsis;
  overflow: hidden;
}

.mat-step-header .mat-step-header-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-step-icon-selected {
  background-color: var(--mat-stepper-header-selected-state-icon-background-color, var(--mat-sys-primary));
  color: var(--mat-stepper-header-selected-state-icon-foreground-color, var(--mat-sys-on-primary));
}

.mat-step-icon-state-done {
  background-color: var(--mat-stepper-header-done-state-icon-background-color, var(--mat-sys-primary));
  color: var(--mat-stepper-header-done-state-icon-foreground-color, var(--mat-sys-on-primary));
}

.mat-step-icon-state-edit {
  background-color: var(--mat-stepper-header-edit-state-icon-background-color, var(--mat-sys-primary));
  color: var(--mat-stepper-header-edit-state-icon-foreground-color, var(--mat-sys-on-primary));
}
`],encapsulation:2})}return t})(),jt=(()=>{class t{templateRef=T$1(Jn);name;static \u0275fac=function(n){return new(n||t)};static \u0275dir=gI({type:t,selectors:[["ng-template","matStepperIcon",""]],inputs:{name:[0,"matStepperIcon","name"]}})}return t})(),qt=(()=>{class t{_template=T$1(Jn);static \u0275fac=function(n){return new(n||t)};static \u0275dir=gI({type:t,selectors:[["ng-template","matStepContent",""]]})}return t})(),ge=(()=>{class t extends ne{_errorStateMatcher=T$1(m,{skipSelf:true});_viewContainerRef=T$1(pi);_isSelected=j.EMPTY;stepLabel=void 0;color;_lazyContent;_portal;ngAfterContentInit(){this._isSelected=this._stepper.steps.changes.pipe(Oh(()=>this._stepper.selectionChange.pipe(Re(e=>e.selectedStep===this),kh(this._stepper.selected===this)))).subscribe(e=>{e&&this._lazyContent&&!this._portal&&(this._portal=new s(this._lazyContent._template,this._viewContainerRef));});}ngOnDestroy(){this._isSelected.unsubscribe();}isErrorState(e,n){let i=this._errorStateMatcher.isErrorState(e,n),s=!!(e&&e.invalid&&this.interacted);return i||s}isSignalErrorState(e){let n=this._errorStateMatcher.isSignalErrorState?.(e)??false,i=!!(e&&e().invalid()&&this.interacted);return n||i}static \u0275fac=(()=>{let e;return function(i){return (e||(e=tm(t)))(i||t)}})();static \u0275cmp=uI({type:t,selectors:[["mat-step"]],contentQueries:function(n,i,s){if(n&1&&ip(s,q,5)(s,qt,5),n&2){let d;ZI(d=YI())&&(i.stepLabel=d.first),ZI(d=YI())&&(i._lazyContent=d.first);}},hostAttrs:["hidden",""],inputs:{color:"color"},exportAs:["matStep"],features:[_E([{provide:m,useExisting:t},{provide:ne,useExisting:t}]),$f],ngContentSelectors:st,decls:1,vars:0,consts:[[3,"cdkPortalOutlet"]],template:function(n,i){n&1&&(GI(),qf(0,Ot,2,1,"ng-template"));},dependencies:[T$2],encapsulation:2})}return t})(),ve=(()=>{class t extends ie{_ngZone=T$1(Te);_renderer=T$1(vv);_animationsDisabled=Zu();_cleanupTransition;_isAnimating=Ws(false);_stepHeader=void 0;_animatedContainers;_steps=void 0;steps=new Bo;_icons;animationDone=new Oe;disableRipple=false;color;labelPosition="end";headerPosition="top";ariaLabel=null;headerPrefix=NL(null);_iconOverrides={};get animationDuration(){return this._animationDuration}set animationDuration(e){/^[0-9]+(?:\.[0-9]+)?$/.test(e)?this._animationDuration=e+"ms":/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(e)?this._animationDuration=e:this._animationDuration="";}_animationDuration="";_isServer=!T$1(U).isBrowser;constructor(){super();let n=T$1(or).nativeElement.nodeName.toLowerCase();this.orientation=n==="mat-vertical-stepper"?"vertical":"horizontal";}ngAfterContentInit(){super.ngAfterContentInit(),this._icons.forEach(({name:e,templateRef:n})=>this._iconOverrides[e]=n),this.steps.changes.pipe(Ph(this._destroyed)).subscribe(()=>this._stateChanged()),this.selectedIndexChange.pipe(Ph(this._destroyed)).subscribe(()=>{let e=this._getAnimationDuration();e==="0ms"||e==="0s"?this._onAnimationDone():this._isAnimating.set(true);}),this._ngZone.runOutsideAngular(()=>{this._animationsDisabled||setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-stepper-animations-enabled"),this._cleanupTransition=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionend);},200);});}ngAfterViewInit(){if(super.ngAfterViewInit(),typeof queueMicrotask=="function"){let e=false;this._animatedContainers.changes.pipe(kh(null),Ph(this._destroyed)).subscribe(()=>queueMicrotask(()=>{e||(e=true,this.animationDone.emit()),this._stateChanged();}));}}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransition?.();}_getAnimationDuration(){return this._animationsDisabled?"0ms":this.animationDuration?this.animationDuration:this.orientation==="horizontal"?"500ms":"225ms"}_handleTransitionend=e=>{let n=e.target;if(!n)return;let i=this.orientation==="horizontal"&&e.propertyName==="transform"&&n.classList.contains("mat-horizontal-stepper-content-current"),s=this.orientation==="vertical"&&e.propertyName==="grid-template-rows"&&n.classList.contains("mat-vertical-content-container-active");(i||s)&&this._animatedContainers.find(ae=>ae.nativeElement===n)&&this._onAnimationDone();};_onAnimationDone(){this._isAnimating.set(false),this.animationDone.emit();}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=uI({type:t,selectors:[["mat-stepper"],["mat-vertical-stepper"],["mat-horizontal-stepper"],["","matStepper",""]],contentQueries:function(n,i,s){if(n&1&&ip(s,ge,5)(s,jt,5),n&2){let d;ZI(d=YI())&&(i._steps=d),ZI(d=YI())&&(i._icons=d);}},viewQuery:function(n,i){if(n&1&&sp(_e,5)(Tt,5),n&2){let s;ZI(s=YI())&&(i._stepHeader=s),ZI(s=YI())&&(i._animatedContainers=s);}},hostVars:14,hostBindings:function(n,i){n&2&&(lp("--mat-stepper-animation-duration",i._getAnimationDuration()),up("mat-stepper-horizontal",i.orientation==="horizontal")("mat-stepper-vertical",i.orientation==="vertical")("mat-stepper-label-position-end",i.orientation==="horizontal"&&i.labelPosition=="end")("mat-stepper-label-position-bottom",i.orientation==="horizontal"&&i.labelPosition=="bottom")("mat-stepper-header-position-bottom",i.headerPosition==="bottom")("mat-stepper-animating",i._isAnimating()));},inputs:{disableRipple:"disableRipple",color:"color",labelPosition:"labelPosition",headerPosition:"headerPosition",ariaLabel:[0,"aria-label","ariaLabel"],headerPrefix:[1,"headerPrefix"],animationDuration:"animationDuration"},outputs:{animationDone:"animationDone"},exportAs:["matStepper","matVerticalStepper","matHorizontalStepper"],features:[_E([{provide:ie,useExisting:t}]),$f],ngContentSelectors:st,decls:7,vars:2,consts:[["stepTemplate",""],["horizontalStepsTemplate",""],["animatedContainer",""],[1,"mat-horizontal-stepper-wrapper"],[1,"mat-vertical-stepper-wrapper"],[1,"mat-horizontal-stepper-header-wrapper"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-horizontal-content-container"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id","class"],[3,"ngTemplateOutlet"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id"],[1,"mat-step"],[1,"mat-vertical-content-container"],["role","region",1,"mat-vertical-stepper-content",3,"id"],[1,"mat-vertical-content"],[3,"click","keydown","tabIndex","id","index","state","label","selected","active","optional","errorMessage","iconOverrides","disableRipple","color"],["aria-orientation","horizontal","role","tablist",1,"mat-horizontal-stepper-header-container"],[1,"mat-stepper-horizontal-line"]],template:function(n,i){if(n&1&&(GI(),AI(0,zt,1,0),AI(1,Nt,6,1,"div",3)(2,At,4,1,"div",4),qf(3,Ht,1,27,"ng-template",null,0,OE)(5,Vt,3,1,"ng-template",null,1,OE)),n&2){let s;RI(i._isServer?0:-1),Ly(),RI((s=i.orientation)==="horizontal"?1:s==="vertical"?2:-1);}},dependencies:[qn,_e],styles:[`.mat-stepper-vertical,
.mat-stepper-horizontal {
  display: block;
  font-family: var(--mat-stepper-container-text-font, var(--mat-sys-body-medium-font));
  background: var(--mat-stepper-container-color, var(--mat-sys-surface));
}

.mat-horizontal-stepper-header-wrapper {
  align-items: center;
  display: flex;
}

.mat-horizontal-stepper-header-container {
  white-space: nowrap;
  display: flex;
  align-items: center;
  flex-grow: 1;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container {
  align-items: flex-start;
}
.mat-stepper-header-position-bottom .mat-horizontal-stepper-header-container {
  order: 1;
}

.mat-stepper-horizontal-line {
  border-top-width: 1px;
  border-top-style: solid;
  flex: auto;
  height: 0;
  margin: 0 -16px;
  min-width: 32px;
  border-top-color: var(--mat-stepper-line-color, var(--mat-sys-outline));
}
.mat-stepper-label-position-bottom .mat-stepper-horizontal-line {
  margin: 0;
  min-width: 0;
  position: relative;
  top: calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px);
}

.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before, .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after {
  border-top-width: 1px;
  border-top-style: solid;
  content: "";
  display: inline-block;
  height: 0;
  position: absolute;
  width: calc(50% - 20px);
}

.mat-horizontal-stepper-header {
  display: flex;
  overflow: hidden;
  align-items: center;
  padding: 0 24px;
  height: var(--mat-stepper-header-height, 72px);
}
.mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 8px;
  flex: none;
}
[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 8px;
}
.mat-horizontal-stepper-header.mat-step-header-empty-label .mat-step-icon {
  margin: 0;
}
.mat-horizontal-stepper-header::before, .mat-horizontal-stepper-header::after {
  border-top-color: var(--mat-stepper-line-color, var(--mat-sys-outline));
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header {
  padding: calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::before, .mat-stepper-label-position-bottom .mat-horizontal-stepper-header::after {
  top: calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px);
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header {
  box-sizing: border-box;
  flex-direction: column;
  height: auto;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after {
  right: 0;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before {
  left: 0;
}
[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after {
  display: none;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 0;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label {
  padding: 16px 0 0 0;
  text-align: center;
  width: 100%;
}

.mat-vertical-stepper-header {
  display: flex;
  align-items: center;
  height: 24px;
  padding: calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px;
}
.mat-vertical-stepper-header .mat-step-icon {
  margin-right: 12px;
}
[dir=rtl] .mat-vertical-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 12px;
}

.mat-horizontal-stepper-wrapper {
  display: flex;
  flex-direction: column;
}

.mat-horizontal-stepper-content {
  visibility: hidden;
  overflow: hidden;
  outline: 0;
  height: 0;
}
.mat-stepper-animations-enabled .mat-horizontal-stepper-content {
  transition: transform var(--mat-stepper-animation-duration, 0) cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-previous {
  transform: translate3d(-100%, 0, 0);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-next {
  transform: translate3d(100%, 0, 0);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-current {
  visibility: visible;
  transform: none;
  height: auto;
}
.mat-stepper-horizontal:not(.mat-stepper-animating) .mat-horizontal-stepper-content.mat-horizontal-stepper-content-current {
  overflow: visible;
}

.mat-horizontal-content-container {
  overflow: hidden;
  padding: 0 24px 24px 24px;
}
@media (forced-colors: active) {
  .mat-horizontal-content-container {
    outline: solid 1px;
  }
}
.mat-stepper-header-position-bottom .mat-horizontal-content-container {
  padding: 24px 24px 0 24px;
}

.mat-vertical-content-container {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
  margin-left: 36px;
  border: 0;
  position: relative;
}
.mat-stepper-animations-enabled .mat-vertical-content-container {
  transition: grid-template-rows var(--mat-stepper-animation-duration, 0) cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-vertical-content-container.mat-vertical-content-container-active {
  grid-template-rows: 1fr;
}
.mat-step:last-child .mat-vertical-content-container {
  border: none;
}
@media (forced-colors: active) {
  .mat-vertical-content-container {
    outline: solid 1px;
  }
}
[dir=rtl] .mat-vertical-content-container {
  margin-left: 0;
  margin-right: 36px;
}
@supports not (grid-template-rows: 0fr) {
  .mat-vertical-content-container {
    height: 0;
  }
  .mat-vertical-content-container.mat-vertical-content-container-active {
    height: auto;
  }
}

.mat-stepper-vertical-line::before {
  content: "";
  position: absolute;
  left: 0;
  border-left-width: 1px;
  border-left-style: solid;
  border-left-color: var(--mat-stepper-line-color, var(--mat-sys-outline));
  top: calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2));
  bottom: calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2));
}
[dir=rtl] .mat-stepper-vertical-line::before {
  left: auto;
  right: 0;
}

.mat-vertical-stepper-content {
  overflow: hidden;
  outline: 0;
  visibility: hidden;
}
.mat-stepper-animations-enabled .mat-vertical-stepper-content {
  transition: visibility var(--mat-stepper-animation-duration, 0) linear;
}
.mat-vertical-content-container-active > .mat-vertical-stepper-content {
  visibility: visible;
}

.mat-vertical-content {
  padding: 0 24px 24px 24px;
}
`],encapsulation:2})}return t})();var ct=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=fI({type:t});static \u0275inj=Cl({providers:[m],imports:[S,ot,yt$1,mt$1,ve,_e,Va]})}return t})();var dt=(t,a)=>a.id;function Gt(t,a){if(t&1&&(ei(0,"div",25)(1,"span",26),IE(2),gc(),ei(3,"span",27),IE(4),gc(),ei(5,"span",28),IE(6),xE(7,"uppercase"),gc()()),t&2){let e=qI().$implicit,n=qI();Ly(2),yp(e.year),Ly(2),yp(e.label),Ly(),cE(n.statusClass(e.status)),Ly(),Ec(" ",RE(7,5,e.status)," ");}}function Kt(t,a){if(t&1&&(ei(0,"mat-step",10),qf(1,Gt,8,7,"ng-template",14),ei(2,"div",15)(3,"div",16)(4,"div",17)(5,"span",18),IE(6,"PROBABILITY"),gc(),ei(7,"div",19)(8,"span",20),IE(9),gc()(),ei(10,"div",21),Jf(11,"div",22),gc()(),ei(12,"div",17)(13,"span",18),IE(14,"TARGET YEAR"),gc(),ei(15,"span",23),IE(16),gc()(),ei(17,"div",17)(18,"span",18),IE(19,"YEARS FROM NOW"),gc(),ei(20,"span",24),IE(21),gc()()()()()),t&2){let e=a.$implicit,n=qI();Kf("completed",false)("editable",false),Ly(8),cE(n.statusClass(e.status)),Ly(),Ec(" ",n.probabilityBar(e.probability),"% "),Ly(2),cE(n.statusClass(e.status)+"-bar"),lp("width",e.probability*100,"%"),Ly(5),Ec("",e.year," CE"),Ly(5),Ec("T+",e.year-2026);}}function Wt(t,a){if(t&1&&(ei(0,"mat-card",29)(1,"mat-card-content")(2,"div",30),IE(3),gc(),ei(4,"div",31),IE(5),gc(),ei(6,"div",32),IE(7),gc(),ei(8,"div",33),IE(9),xE(10,"uppercase"),gc()()()),t&2){let e=a.$implicit,n=qI();cE("summary-card--"+e.status),Ly(2),cE(n.statusClass(e.status)),Ly(),Ec(" ",e.year," "),Ly(2),yp(e.label),Ly(2),Ec("",n.probabilityBar(e.probability),"%"),Ly(),cE(n.statusClass(e.status)),Ly(),Ec(" ",RE(10,10,e.status)," ");}}var mt=class t{service=T$1(c);statusClass(a){return {approaching:"severity-warning",critical:"severity-critical",uncertain:"severity-uncertain",speculative:"severity-speculative"}[a]??""}probabilityBar(a){return Math.round(a*100)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=uI({type:t,selectors:[["app-transitional-horizon"]],decls:26,vars:1,consts:[[1,"engine-header"],[1,"engine-id"],[1,"engine-title"],[1,"engine-desc"],[1,"section-grid"],[1,"section-stepper"],[1,"section-header"],[1,"section-id"],[1,"section-title"],["orientation","vertical",1,"horizon-stepper",3,"linear"],[3,"completed","editable"],[1,"section-summary"],[1,"summary-grid"],[1,"summary-card",3,"class"],["matStepLabel",""],[1,"step-body"],[1,"step-metrics"],[1,"step-metric"],[1,"codex-section-label"],[1,"prob-row"],[1,"prob-value"],[1,"prob-bar-track"],[1,"prob-bar-fill"],[1,"year-value"],[1,"delta-value"],[1,"step-label-row"],[1,"step-year"],[1,"step-name"],[1,"step-status"],[1,"summary-card"],[1,"summary-year"],[1,"summary-label"],[1,"summary-prob"],[1,"summary-status"]],template:function(e,n){e&1&&(ei(0,"div",0)(1,"span",1),IE(2,"ENGINE-04"),gc(),ei(3,"h1",2),IE(4,"TRANSITIONAL HORIZON"),gc(),ei(5,"p",3),IE(6," Civilizational inflection points \xB7 System thresholds \xB7 Probability mapping \xB7 2026\u20132100 CE "),gc()(),ei(7,"div",4)(8,"section",5)(9,"div",6)(10,"span",7),IE(11,"TH-01"),gc(),ei(12,"span",8),IE(13,"THRESHOLD SEQUENCE"),gc()(),ei(14,"mat-stepper",9),OI(15,Kt,22,11,"mat-step",10,dt),gc()(),ei(17,"section",11)(18,"div",6)(19,"span",7),IE(20,"TH-02"),gc(),ei(21,"span",8),IE(22,"HORIZON SUMMARY"),gc()(),ei(23,"div",12),OI(24,Wt,11,12,"mat-card",13,dt),gc()()()),e&2&&(Ly(14),Kf("linear",false),Ly(),PI(n.service.transitionalThresholds),Ly(9),PI(n.service.transitionalThresholds));},dependencies:[ct,ge,q,ve,z,F,k,er],styles:[".engine-header[_ngcontent-%COMP%]{margin-bottom:28px;padding-bottom:16px;border-bottom:1px solid #1a1a1a}.engine-id[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:.6rem;letter-spacing:.25em;color:#333;display:block;margin-bottom:4px}.engine-title[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:1.4rem;font-weight:700;letter-spacing:.15em;color:#c8c8c8;margin:0 0 6px}.engine-desc[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:.75rem;color:#555;margin:0;letter-spacing:.05em}.section-grid[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:32px}.section-header[_ngcontent-%COMP%]{display:flex;align-items:baseline;gap:10px;margin-bottom:14px}.section-id[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:.6rem;color:#333;letter-spacing:.15em}.section-title[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:.7rem;letter-spacing:.2em;color:#888;font-weight:600}.horizon-stepper[_ngcontent-%COMP%]{background-color:transparent!important}[_nghost-%COMP%]     .mat-stepper-vertical .mat-vertical-stepper-header{background-color:transparent;padding:12px 0}[_nghost-%COMP%]     .mat-step-header .mat-step-icon{background-color:#1a1a1a!important;color:#444!important;font-family:Courier New,Courier,monospace!important;font-size:.65rem!important}[_nghost-%COMP%]     .mat-step-label{font-family:Courier New,Courier,monospace!important;color:#c8c8c8!important;width:100%}[_nghost-%COMP%]     .mat-vertical-content-container{border-left-color:#1e1e1e!important;margin-left:20px}[_nghost-%COMP%]     .mat-vertical-stepper-content{overflow:visible!important}.step-label-row[_ngcontent-%COMP%]{display:flex;align-items:baseline;gap:12px;flex-wrap:wrap}.step-year[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:.85rem;font-weight:700;color:#888;min-width:44px}.step-name[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:.8rem;color:#c8c8c8;flex:1}.step-status[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:.6rem;letter-spacing:.12em}.step-body[_ngcontent-%COMP%]{padding:8px 0 16px}.step-metrics[_ngcontent-%COMP%]{display:flex;gap:28px;flex-wrap:wrap}.step-metric[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.prob-row[_ngcontent-%COMP%]{display:flex;align-items:baseline;gap:4px}.prob-value[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:1.4rem;font-weight:700;line-height:1}.prob-bar-track[_ngcontent-%COMP%]{height:2px;width:80px;background-color:#1a1a1a;border-radius:1px;overflow:hidden}.prob-bar-fill[_ngcontent-%COMP%]{height:100%;background-color:#3a3a3a}.severity-warning-bar[_ngcontent-%COMP%]{background-color:#8b6b14}.severity-critical-bar[_ngcontent-%COMP%]{background-color:#8b2222}.severity-uncertain-bar[_ngcontent-%COMP%]{background-color:#1a3060}.severity-speculative-bar[_ngcontent-%COMP%]{background-color:#2a2a2a}.year-value[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:1rem;color:#888;font-weight:600}.delta-value[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:1rem;color:#555}.summary-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(5,1fr);gap:8px}.summary-card[_ngcontent-%COMP%]{background-color:#0f0f0f!important;border:1px solid #1a1a1a!important;text-align:center}.summary-card--critical[_ngcontent-%COMP%]{border-color:#2a0d0d!important}.summary-card--approaching[_ngcontent-%COMP%]{border-color:#2a2000!important}.summary-year[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:1.3rem;font-weight:700;line-height:1;margin-bottom:4px}.summary-label[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:.65rem;color:#888;line-height:1.3;margin-bottom:8px}.summary-prob[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:1rem;color:#c8c8c8;font-weight:600;margin-bottom:4px}.summary-status[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:.58rem;letter-spacing:.12em}"]})};export{mt as TransitionalHorizonComponent};