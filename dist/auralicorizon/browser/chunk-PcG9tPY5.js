import {T,u as uI,c as ei,I as IE,g as gc,v as vc,k as qf,m as Ic,d as OI,L as Ly,o as Kf,P as PI,p as fI,C as Cl,V as Va,r as tm,$ as $f,G as GI,z as zI,A as AI,R as RI,_ as _E,S,h as up,s as gI,w as RL,B as tp,D as Bo,F as kh,H as wt,M as ip,Z as ZI,Y as YI,N as pi,Q as Zu,W as Un$1,X as Te,a0 as or,a1 as vv,a2 as Oe,a3 as X,a4 as At$1,a5 as D,a6 as Sn$1,a7 as zt$1,a8 as Lg,a9 as Yf,aa as sp,ab as Bn$1,ac as xL,ad as j,ae as _t,af as Xu,ag as bp,ah as It,ai as Eh,aj as jn$1,ak as mc,al as yc,am as kL,an as op,l as lp,y as yp,f as Jf,q as qI,ao as cE,E as Ec,ap as Ae$1,aq as GE,ar as Zr,as as U,at as Pe$1,au as we,av as Ne$1,aw as wn$1,ax as Ph,ay as d,az as u,aA as D$1,aB as o,aC as ch,aD as sh,aE as mh,aF as Dh,aG as Jp,aH as Kp,aI as Jn,aJ as Ws,aK as cu,aL as Xf,aM as fy}from'./main-TFE4CTDX.js';import {P,S as S$1,s,T as T$1}from'./chunk-BE5iyprf.js';import {z,F,k}from'./chunk-BbZTrEze.js';var dn=[[["caption"]],[["colgroup"],["col"]],"*"],cn=["caption","colgroup, col","*"];function mn(n,r){n&1&&zI(0,2);}function un(n,r){n&1&&(ei(0,"thead",0),tp(1,1),gc(),ei(2,"tbody",0),tp(3,2)(4,3),gc(),ei(5,"tfoot",0),tp(6,4),gc());}function pn(n,r){n&1&&tp(0,1)(1,2)(2,3)(3,4);}var I=new S("CDK_TABLE");var be=(()=>{class n{template=T(Jn);static \u0275fac=function(t){return new(t||n)};static \u0275dir=gI({type:n,selectors:[["","cdkCellDef",""]]})}return n})(),De=(()=>{class n{template=T(Jn);static \u0275fac=function(t){return new(t||n)};static \u0275dir=gI({type:n,selectors:[["","cdkHeaderCellDef",""]]})}return n})(),Nt=(()=>{class n{template=T(Jn);static \u0275fac=function(t){return new(t||n)};static \u0275dir=gI({type:n,selectors:[["","cdkFooterCellDef",""]]})}return n})(),ae=(()=>{class n{_table=T(I,{optional:true});_hasStickyChanged=false;get name(){return this._name}set name(e){this._setNameInput(e);}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=true);}_sticky=false;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=true);}_stickyEnd=false;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=false;}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`];}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName());}static \u0275fac=function(t){return new(t||n)};static \u0275dir=gI({type:n,selectors:[["","cdkColumnDef",""]],contentQueries:function(t,i,o){if(t&1&&ip(o,be,5)(o,De,5)(o,Nt,5),t&2){let a;ZI(a=YI())&&(i.cell=a.first),ZI(a=YI())&&(i.headerCell=a.first),ZI(a=YI())&&(i.footerCell=a.first);}},inputs:{name:[0,"cdkColumnDef","name"],sticky:[2,"sticky","sticky",RL],stickyEnd:[2,"stickyEnd","stickyEnd",RL]}})}return n})(),ve=class{constructor(r,e){e.nativeElement.classList.add(...r._columnCssClassName);}},Ht=(()=>{class n extends ve{constructor(){super(T(ae),T(or));}static \u0275fac=function(t){return new(t||n)};static \u0275dir=gI({type:n,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[$f]})}return n})();var zt=(()=>{class n extends ve{constructor(){let e=T(ae),t=T(or);super(e,t);let i=e._table?._getCellRole();i&&t.nativeElement.setAttribute("role",i);}static \u0275fac=function(t){return new(t||n)};static \u0275dir=gI({type:n,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[$f]})}return n})();var Pe=(()=>{class n{template=T(Jn);_differs=T(GE);columns;_columnsDiffer;ngOnChanges(e){if(!this._columnsDiffer){let t=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(t).create(),this._columnsDiffer.diff(t);}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof ce?e.headerCell.template:this instanceof Ae?e.footerCell.template:e.cell.template}static \u0275fac=function(t){return new(t||n)};static \u0275dir=gI({type:n,features:[Lg]})}return n})(),ce=(()=>{class n extends Pe{_table=T(I,{optional:true});_hasStickyChanged=false;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=true);}_sticky=false;ngOnChanges(e){super.ngOnChanges(e);}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=false;}static \u0275fac=(()=>{let e;return function(i){return (e||(e=tm(n)))(i||n)}})();static \u0275dir=gI({type:n,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:[0,"cdkHeaderRowDef","columns"],sticky:[2,"cdkHeaderRowDefSticky","sticky",RL]},features:[$f,Lg]})}return n})(),Ae=(()=>{class n extends Pe{_table=T(I,{optional:true});_hasStickyChanged=false;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=true);}_sticky=false;ngOnChanges(e){super.ngOnChanges(e);}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=false;}static \u0275fac=(()=>{let e;return function(i){return (e||(e=tm(n)))(i||n)}})();static \u0275dir=gI({type:n,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:[0,"cdkFooterRowDef","columns"],sticky:[2,"cdkFooterRowDefSticky","sticky",RL]},features:[$f,Lg]})}return n})(),Re=(()=>{class n extends Pe{_table=T(I,{optional:true});when;static \u0275fac=(()=>{let e;return function(i){return (e||(e=tm(n)))(i||n)}})();static \u0275dir=gI({type:n,selectors:[["","cdkRowDef",""]],inputs:{columns:[0,"cdkRowDefColumns","columns"],when:[0,"cdkRowDefWhen","when"]},features:[$f]})}return n})(),Z=(()=>{class n{_viewContainer=T(pi);cells;context;static mostRecentCellOutlet=null;constructor(){n.mostRecentCellOutlet=this;}ngOnDestroy(){n.mostRecentCellOutlet===this&&(n.mostRecentCellOutlet=null);}static \u0275fac=function(t){return new(t||n)};static \u0275dir=gI({type:n,selectors:[["","cdkCellOutlet",""]]})}return n})(),Ne=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=uI({type:n,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,i){t&1&&tp(0,0);},dependencies:[Z],encapsulation:2,changeDetection:1})}return n})();var He=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=uI({type:n,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,i){t&1&&tp(0,0);},dependencies:[Z],encapsulation:2,changeDetection:1})}return n})(),Lt=(()=>{class n{templateRef=T(Jn);_contentClassNames=["cdk-no-data-row","cdk-row"];_cellClassNames=["cdk-cell","cdk-no-data-cell"];_cellSelector="td, cdk-cell, [cdk-cell], .cdk-cell";static \u0275fac=function(t){return new(t||n)};static \u0275dir=gI({type:n,selectors:[["ng-template","cdkNoDataRow",""]]})}return n})(),Pt=["top","bottom","left","right"],Ie=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(r=>this._updateCachedSizes(r)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=false;constructor(r,e,t=true,i=true,o,a,c){this._isNativeHtmlTable=r,this._stickCellCss=e,this._isBrowser=t,this._needsPositionStickyOnElement=i,this.direction=o,this._positionListener=a,this._tableInjector=c,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`};}clearStickyPositioning(r,e){(e.includes("left")||e.includes("right"))&&this._removeFromStickyColumnReplayQueue(r);let t=[];for(let i of r)i.nodeType===i.ELEMENT_NODE&&t.push(i,...Array.from(i.children));fy({write:()=>{for(let i of t)this._removeStickyStyle(i,e);}},{injector:this._tableInjector});}updateStickyColumns(r,e,t,i=true,o=true){if(!r.length||!this._isBrowser||!(e.some(T=>T)||t.some(T=>T))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let a=r[0],c=a.children.length,p=this.direction==="rtl",h=p?"right":"left",g=p?"left":"right",E=e.lastIndexOf(true),_=t.indexOf(true),w,qe,Ke;o&&this._updateStickyColumnReplayQueue({rows:[...r],stickyStartStates:[...e],stickyEndStates:[...t]}),fy({earlyRead:()=>{w=this._getCellWidths(a,i),qe=this._getStickyStartColumnPositions(w,e),Ke=this._getStickyEndColumnPositions(w,t);},write:()=>{for(let T of r)for(let S=0;S<c;S++){let Ge=T.children[S];e[S]&&this._addStickyStyle(Ge,h,qe[S],S===E),t[S]&&this._addStickyStyle(Ge,g,Ke[S],S===_);}this._positionListener&&w.some(T=>!!T)&&(this._positionListener.stickyColumnsUpdated({sizes:E===-1?[]:w.slice(0,E+1).map((T,S)=>e[S]?T:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:_===-1?[]:w.slice(_).map((T,S)=>t[S+_]?T:null).reverse()}));}},{injector:this._tableInjector});}stickRows(r,e,t){if(!this._isBrowser)return;let i=t==="bottom"?r.slice().reverse():r,o=t==="bottom"?e.slice().reverse():e,a=[],c=[],p=[];fy({earlyRead:()=>{for(let h=0,g=0;h<i.length;h++){if(!o[h])continue;a[h]=g;let E=i[h];p[h]=this._isNativeHtmlTable?Array.from(E.children):[E];let _=this._retrieveElementSize(E).height;g+=_,c[h]=_;}},write:()=>{let h=o.lastIndexOf(true);for(let g=0;g<i.length;g++){if(!o[g])continue;let E=a[g],_=g===h;for(let w of p[g])this._addStickyStyle(w,t,E,_);}t==="top"?this._positionListener?.stickyHeaderRowsUpdated({sizes:c,offsets:a,elements:p}):this._positionListener?.stickyFooterRowsUpdated({sizes:c,offsets:a,elements:p});}},{injector:this._tableInjector});}updateStickyFooterContainer(r,e){this._isNativeHtmlTable&&fy({write:()=>{let t=r.querySelector("tfoot");t&&(e.some(i=>!i)?this._removeStickyStyle(t,["bottom"]):this._addStickyStyle(t,"bottom",0,false));}},{injector:this._tableInjector});}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=true;}_removeStickyStyle(r,e){if(!r.classList.contains(this._stickCellCss))return;for(let i of e)r.style[i]="",r.classList.remove(this._borderCellCss[i]);Pt.some(i=>e.indexOf(i)===-1&&r.style[i])?r.style.zIndex=this._getCalculatedZIndex(r):(r.style.zIndex="",this._needsPositionStickyOnElement&&(r.style.position=""),r.classList.remove(this._stickCellCss));}_addStickyStyle(r,e,t,i){r.classList.add(this._stickCellCss),i&&r.classList.add(this._borderCellCss[e]),r.style[e]=`${t}px`,r.style.zIndex=this._getCalculatedZIndex(r),this._needsPositionStickyOnElement&&(r.style.cssText+="position: -webkit-sticky; position: sticky; ");}_getCalculatedZIndex(r){let e={top:100,bottom:10,left:1,right:1},t=0;for(let i of Pt)r.style[i]&&(t+=e[i]);return t?`${t}`:""}_getCellWidths(r,e=true){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let t=[],i=r.children;for(let o=0;o<i.length;o++){let a=i[o];t.push(this._retrieveElementSize(a).width);}return this._cachedCellWidths=t,t}_getStickyStartColumnPositions(r,e){let t=[],i=0;for(let o=0;o<r.length;o++)e[o]&&(t[o]=i,i+=r[o]);return t}_getStickyEndColumnPositions(r,e){let t=[],i=0;for(let o=r.length;o>0;o--)e[o]&&(t[o]=i,i+=r[o]);return t}_retrieveElementSize(r){let e=this._elemSizeCache.get(r);if(e)return e;let t=r.getBoundingClientRect(),i={width:t.width,height:t.height};return this._resizeObserver&&(this._elemSizeCache.set(r,i),this._resizeObserver.observe(r,{box:"border-box"})),i}_updateStickyColumnReplayQueue(r){this._removeFromStickyColumnReplayQueue(r.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(r);}_removeFromStickyColumnReplayQueue(r){let e=new Set(r);for(let t of this._updatedStickyColumnsParamsToReplay)t.rows=t.rows.filter(i=>!e.has(i));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(t=>!!t.rows.length);}_updateCachedSizes(r){let e=false;for(let t of r){let i=t.borderBoxSize?.length?{width:t.borderBoxSize[0].inlineSize,height:t.borderBoxSize[0].blockSize}:{width:t.contentRect.width,height:t.contentRect.height};i.width!==this._elemSizeCache.get(t.target)?.width&&fn(t.target)&&(e=true),this._elemSizeCache.set(t.target,i);}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let t of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(t.rows,t.stickyStartStates,t.stickyEndStates,true,false);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null;}},0));}};function fn(n){return ["cdk-cell","cdk-header-cell","cdk-footer-cell"].some(r=>n.classList.contains(r))}var de=new S("STICKY_POSITIONING_LISTENER");var ze=(()=>{class n{viewContainer=T(pi);elementRef=T(or);constructor(){let e=T(I);e._rowOutlet=this,e._outletAssigned();}static \u0275fac=function(t){return new(t||n)};static \u0275dir=gI({type:n,selectors:[["","rowOutlet",""]]})}return n})(),Le=(()=>{class n{viewContainer=T(pi);elementRef=T(or);constructor(){let e=T(I);e._headerRowOutlet=this,e._outletAssigned();}static \u0275fac=function(t){return new(t||n)};static \u0275dir=gI({type:n,selectors:[["","headerRowOutlet",""]]})}return n})(),Be=(()=>{class n{viewContainer=T(pi);elementRef=T(or);constructor(){let e=T(I);e._footerRowOutlet=this,e._outletAssigned();}static \u0275fac=function(t){return new(t||n)};static \u0275dir=gI({type:n,selectors:[["","footerRowOutlet",""]]})}return n})(),je=(()=>{class n{viewContainer=T(pi);elementRef=T(or);constructor(){let e=T(I);e._noDataRowOutlet=this,e._outletAssigned();}static \u0275fac=function(t){return new(t||n)};static \u0275dir=gI({type:n,selectors:[["","noDataRowOutlet",""]]})}return n})(),Ue=(()=>{class n{_differs=T(GE);_changeDetectorRef=T(xL);_elementRef=T(or);_dir=T(Zr,{optional:true});_platform=T(U);_viewRepeater;_viewportRuler=T(Pe$1);_injector=T(we);_virtualScrollViewport=T(Ne$1,{optional:true,host:true});_positionListener=T(de,{optional:true})||T(de,{optional:true,skipSelf:true});_document=T(Un$1);_data;_renderedRange;_onDestroy=new X;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=true;_footerRowDefChanged=true;_stickyColumnStylesNeedReset=true;_forceRecalculateCellWidths=true;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass="cdk-table-sticky";needsPositionStickyOnElement=true;_isServer;_isShowingNoDataRow=false;_hasAllOutlets=false;_hasInitialized=false;_headerRowStickyUpdates=new X;_footerRowStickyUpdates=new X;_disableVirtualScrolling=false;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute("role");return e==="grid"||e==="treegrid"?"gridcell":"cell"}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e;}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck());}_dataSource;_dataSourceChanges=new X;_dataStream=new X;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles());}_multiTemplateDataRows=false;get fixedLayout(){return this._virtualScrollEnabled()?true:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=true,this._stickyColumnStylesNeedReset=true;}_fixedLayout=false;recycleRows=false;contentChanged=new Oe;viewChange=new wn$1({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;get renderedRows(){return this._renderRows}constructor(){T(new bp("role"),{optional:true})||this._elementRef.nativeElement.setAttribute("role","table"),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName==="TABLE",this._dataDiffer=this._differs.find([]).create((t,i)=>this.trackBy?this.trackBy(i.dataIndex,i.data):i);}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(Ph(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=true;});}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new d:new u,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=true;}ngAfterContentChecked(){this._canRender()&&this._render();}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear();}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),D$1(this.dataSource)&&this.dataSource.disconnect(this);}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let t=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,t,(i,o,a)=>this._getEmbeddedViewArgs(i.item,a),i=>i.item.data,i=>{i.operation===o.INSERTED&&i.context&&this._renderCellTemplateForItem(i.record.item.rowDef,i.context);}),this._updateRowIndexContext(),e.forEachIdentityChange(i=>{let o=t.get(i.currentIndex);o.context.$implicit=i.item.data;}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles();}addColumnDef(e){this._customColumnDefs.add(e);}removeColumnDef(e){this._customColumnDefs.delete(e);}addRowDef(e){this._customRowDefs.add(e);}removeRowDef(e){this._customRowDefs.delete(e);}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=true;}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=true;}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=true;}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=true;}setNoDataRow(e){this._customNoDataRow=e;}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let i=At(this._headerRowOutlet,"thead");i&&(i.style.display=e.length?"":"none");}let t=this._headerRowDefs.map(i=>i.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,t,"top"),this._headerRowDefs.forEach(i=>i.resetStickyChanged());}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let i=At(this._footerRowOutlet,"tfoot");i&&(i.style.display=e.length?"":"none");}let t=this._footerRowDefs.map(i=>i.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,t,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,t),this._footerRowDefs.forEach(i=>i.resetStickyChanged());}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),t=this._getRenderedRows(this._rowOutlet),i=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...t,...i],["left","right"]),this._stickyColumnStylesNeedReset=false),e.forEach((o,a)=>{this._addStickyColumnStyles([o],this._headerRowDefs[a]);}),this._rowDefs.forEach(o=>{let a=[];for(let c=0;c<t.length;c++)this._renderRows[c].rowDef===o&&a.push(t[c]);this._addStickyColumnStyles(a,o);}),i.forEach((o,a)=>{this._addStickyColumnStyles([o],this._footerRowDefs[a]);}),Array.from(this._columnDefsByName.values()).forEach(o=>o.resetStickyChanged());}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e);}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e);}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e);}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e);}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=true,this._canRender()&&this._render());}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let t=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||t,this._forceRecalculateCellWidths=t,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=false),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=false),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates();}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return [];let e=[],t=Math.min(this._data.length,this._renderedRange.end),i=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let o=this._renderedRange.start;o<t;o++){let a=this._data[o],c=this._getRenderRowsForData(a,o,i.get(a));this._cachedRenderRowsMap.has(a)||this._cachedRenderRowsMap.set(a,new WeakMap);for(let p=0;p<c.length;p++){let h=c[p],g=this._cachedRenderRowsMap.get(h.data);g.has(h.rowDef)?g.get(h.rowDef).push(h):g.set(h.rowDef,[h]),e.push(h);}}return e}_getRenderRowsForData(e,t,i){return this._getRowDefs(e,t).map(a=>{let c=i&&i.has(a)?i.get(a):[];if(c.length){let p=c.shift();return p.dataIndex=t,p}else return {data:e,rowDef:a,dataIndex:t}})}_cacheColumnDefs(){this._columnDefsByName.clear(),Ce(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(t=>{this._columnDefsByName.has(t.name),this._columnDefsByName.set(t.name,t);});}_cacheRowDefs(){this._headerRowDefs=Ce(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=Ce(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=Ce(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(t=>!t.when);this._defaultRowDef=e[0];}_renderUpdatedColumns(){let e=(a,c)=>{let p=!!c.getColumnsDiff();return a||p},t=this._rowDefs.reduce(e,false);t&&this._forceRenderDataRows();let i=this._headerRowDefs.reduce(e,false);i&&this._forceRenderHeaderRows();let o=this._footerRowDefs.reduce(e,false);return o&&this._forceRenderFooterRows(),t||i||o}_switchDataSource(e){this._data=[],D$1(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e;}_observeRenderChanges(){if(!this.dataSource)return;let e;D$1(this.dataSource)?e=this.dataSource.connect(this):ch(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=sh(this.dataSource)),this._renderChangeSubscription=mh([e,this.viewChange]).pipe(Ph(this._onDestroy)).subscribe(([t,i])=>{this._data=t||[],this._renderedRange=i,this._dataStream.next(t),this.renderRows();});}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,t)=>this._renderRow(this._headerRowOutlet,e,t)),this.updateStickyHeaderRowStyles();}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,t)=>this._renderRow(this._footerRowOutlet,e,t)),this.updateStickyFooterRowStyles();}_addStickyColumnStyles(e,t){let i=Array.from(t?.columns||[]).map(c=>{let p=this._columnDefsByName.get(c);return p}),o=i.map(c=>c.sticky),a=i.map(c=>c.stickyEnd);this._stickyStyler.updateStickyColumns(e,o,a,!this.fixedLayout||this._forceRecalculateCellWidths);}_getRenderedRows(e){let t=[];for(let i=0;i<e.viewContainer.length;i++){let o=e.viewContainer.get(i);t.push(o.rootNodes[0]);}return t}_getRowDefs(e,t){if(this._rowDefs.length===1)return [this._rowDefs[0]];let i=[];if(this.multiTemplateDataRows)i=this._rowDefs.filter(o=>!o.when||o.when(t,e));else {let o=this._rowDefs.find(a=>a.when&&a.when(t,e))||this._defaultRowDef;o&&i.push(o);}return i.length,i}_getEmbeddedViewArgs(e,t){let i=e.rowDef,o={$implicit:e.data};return {templateRef:i.template,context:o,index:t}}_renderRow(e,t,i,o={}){let a=e.viewContainer.createEmbeddedView(t.template,o,i);return this._renderCellTemplateForItem(t,o),a}_renderCellTemplateForItem(e,t){for(let i of this._getCellTemplates(e))Z.mostRecentCellOutlet&&Z.mostRecentCellOutlet._viewContainer.createEmbeddedView(i,t);this._changeDetectorRef.markForCheck();}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let t=0,i=e.length;t<i;t++){let a=e.get(t).context;a.count=i,a.first=t===0,a.last=t===i-1,a.even=t%2===0,a.odd=!a.even,this.multiTemplateDataRows?(a.dataIndex=this._renderRows[t].dataIndex,a.renderIndex=t):a.index=this._renderRows[t].dataIndex;}}_getCellTemplates(e){return !e||!e.columns?[]:Array.from(e.columns,t=>{let i=this._columnDefsByName.get(t);return e.extractCellTemplate(i)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows();}_checkStickyStates(){let e=(t,i)=>t||i.hasStickyChanged();this._headerRowDefs.reduce(e,false)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,false)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,false)&&(this._stickyColumnStylesNeedReset=true,this.updateStickyColumnStyles());}_setupStickyStyler(){let e=this._dir?this._dir.value:"ltr",t=this._injector;this._stickyStyler=new Ie(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,t),(this._dir?this._dir.change:sh()).pipe(Ph(this._onDestroy)).subscribe(i=>{this._stickyStyler.direction=i,this.updateStickyColumnStyles();});}_setupVirtualScrolling(e){let t=typeof requestAnimationFrame<"u"?Jp:Kp;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(Dh(0,t),Ph(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(i,o)=>this._measureRangeSize(i,o)}),mh([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(Ph(this._onDestroy)).subscribe(([i,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let a=0;a<o.elements.length;a++){let c=o.elements[a];if(c){let p=o.offsets[a],h=i!==0?Math.max(i-p,p):-p;for(let g of c)g.style.top=`${-h}px`;}}}),mh([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(Ph(this._onDestroy)).subscribe(([i,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let a=0;a<o.elements.length;a++){let c=o.elements[a];if(c)for(let p of c)p.style.bottom=`${i+o.offsets[a]}px`;}});}_getOwnDefs(e){return e.filter(t=>!t._table||t._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let t=this._rowOutlet.viewContainer.length===0;if(t===this._isShowingNoDataRow)return;let i=this._noDataRowOutlet.viewContainer;if(t){let o=i.createEmbeddedView(e.templateRef),a=o.rootNodes[0];if(o.rootNodes.length===1&&a?.nodeType===this._document.ELEMENT_NODE){a.setAttribute("role","row"),a.classList.add(...e._contentClassNames);let c=a.querySelectorAll(e._cellSelector);for(let p=0;p<c.length;p++)c[p].classList.add(...e._cellClassNames);}}else i.clear();this._isShowingNoDataRow=t,this._changeDetectorRef.markForCheck();}_measureRangeSize(e,t){if(e.start>=e.end||t!=="vertical")return 0;let i=this.viewChange.value,o=this._rowOutlet.viewContainer;e.start<i.start||e.end>i.end;let a=e.start-i.start,c=e.end-e.start,p,h;for(let _=0;_<c;_++){let w=o.get(_+a);if(w&&w.rootNodes.length){p=h=w.rootNodes[0];break}}for(let _=c-1;_>-1;_--){let w=o.get(_+a);if(w&&w.rootNodes.length){h=w.rootNodes[w.rootNodes.length-1];break}}let g=p?.getBoundingClientRect?.(),E=h?.getBoundingClientRect?.();return g&&E?E.bottom-g.top:0}_virtualScrollEnabled(){return !this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=uI({type:n,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(t,i,o){if(t&1&&ip(o,Lt,5)(o,ae,5)(o,Re,5)(o,ce,5)(o,Ae,5),t&2){let a;ZI(a=YI())&&(i._noDataRow=a.first),ZI(a=YI())&&(i._contentColumnDefs=a),ZI(a=YI())&&(i._contentRowDefs=a),ZI(a=YI())&&(i._contentHeaderRowDefs=a),ZI(a=YI())&&(i._contentFooterRowDefs=a);}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(t,i){t&2&&up("cdk-table-fixed-layout",i.fixedLayout);},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:[2,"multiTemplateDataRows","multiTemplateDataRows",RL],fixedLayout:[2,"fixedLayout","fixedLayout",RL],recycleRows:[2,"recycleRows","recycleRows",RL]},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[_E([{provide:I,useExisting:n},{provide:de,useValue:null}])],ngContentSelectors:cn,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,i){t&1&&(GI(dn),zI(0),zI(1,1),AI(2,mn,1,0),AI(3,un,7,0)(4,pn,4,0)),t&2&&(Ly(2),RI(i._isServer?2:-1),Ly(),RI(i._isNativeHtmlTable?3:4));},dependencies:[Le,ze,je,Be],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2,changeDetection:1})}return n})();function Ce(n,r){return n.concat(Array.from(r))}function At(n,r){let e=r.toUpperCase(),t=n.viewContainer.element.nativeElement;for(;t;){let i=t.nodeType===1?t.nodeName:null;if(i===e)return t;if(i==="TABLE")break;t=t.parentNode;}return null}var Bt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=fI({type:n});static \u0275inj=Cl({imports:[Ae$1]})}return n})();var hn=[[["caption"]],[["colgroup"],["col"]],"*"],gn=["caption","colgroup, col","*"];function yn(n,r){n&1&&zI(0,2);}function _n(n,r){n&1&&(ei(0,"thead",0),tp(1,1),gc(),ei(2,"tbody",2),tp(3,3)(4,4),gc(),ei(5,"tfoot",0),tp(6,5),gc());}function wn(n,r){n&1&&tp(0,1)(1,3)(2,4)(3,5);}var jt=(()=>{class n extends Ue{stickyCssClass="mat-mdc-table-sticky";needsPositionStickyOnElement=false;static \u0275fac=(()=>{let e;return function(i){return (e||(e=tm(n)))(i||n)}})();static \u0275cmp=uI({type:n,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-mdc-table","mdc-data-table__table"],hostVars:2,hostBindings:function(t,i){t&2&&up("mat-table-fixed-layout",i.fixedLayout);},exportAs:["matTable"],features:[_E([{provide:Ue,useExisting:n},{provide:I,useExisting:n},{provide:de,useValue:null}]),$f],ngContentSelectors:gn,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["role","rowgroup",1,"mdc-data-table__content"],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,i){t&1&&(GI(hn),zI(0),zI(1,1),AI(2,yn,1,0),AI(3,_n,7,0)(4,wn,4,0)),t&2&&(Ly(2),RI(i._isServer?2:-1),Ly(),RI(i._isNativeHtmlTable?3:4));},dependencies:[Le,ze,je,Be],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--mat-table-background-color, var(--mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-header-container-height, 56px);
  color: var(--mat-table-header-headline-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-header-headline-font, var(--mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--mat-table-header-headline-line-height, var(--mat-sys-title-small-line-height));
  font-size: var(--mat-table-header-headline-size, var(--mat-sys-title-small-size, 14px));
  font-weight: var(--mat-table-header-headline-weight, var(--mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--mat-table-row-item-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-table-row-item-label-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-row-item-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-row-item-label-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-row-item-label-text-weight, var(--mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-footer-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-footer-supporting-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-footer-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-footer-supporting-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-footer-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-table-footer-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-header-headline-tracking, var(--mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2,changeDetection:1})}return n})(),Ut=(()=>{class n extends be{static \u0275fac=(()=>{let e;return function(i){return (e||(e=tm(n)))(i||n)}})();static \u0275dir=gI({type:n,selectors:[["","matCellDef",""]],features:[_E([{provide:be,useExisting:n}]),$f]})}return n})(),Vt=(()=>{class n extends De{static \u0275fac=(()=>{let e;return function(i){return (e||(e=tm(n)))(i||n)}})();static \u0275dir=gI({type:n,selectors:[["","matHeaderCellDef",""]],features:[_E([{provide:De,useExisting:n}]),$f]})}return n})();var Qt=(()=>{class n extends ae{get name(){return this._name}set name(e){this._setNameInput(e);}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`);}static \u0275fac=(()=>{let e;return function(i){return (e||(e=tm(n)))(i||n)}})();static \u0275dir=gI({type:n,selectors:[["","matColumnDef",""]],inputs:{name:[0,"matColumnDef","name"]},features:[_E([{provide:ae,useExisting:n}]),$f]})}return n})(),Wt=(()=>{class n extends Ht{static \u0275fac=(()=>{let e;return function(i){return (e||(e=tm(n)))(i||n)}})();static \u0275dir=gI({type:n,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-mdc-header-cell","mdc-data-table__header-cell"],features:[$f]})}return n})();var $t=(()=>{class n extends zt{static \u0275fac=(()=>{let e;return function(i){return (e||(e=tm(n)))(i||n)}})();static \u0275dir=gI({type:n,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:[1,"mat-mdc-cell","mdc-data-table__cell"],features:[$f]})}return n})();var qt=(()=>{class n extends ce{static \u0275fac=(()=>{let e;return function(i){return (e||(e=tm(n)))(i||n)}})();static \u0275dir=gI({type:n,selectors:[["","matHeaderRowDef",""]],inputs:{columns:[0,"matHeaderRowDef","columns"],sticky:[2,"matHeaderRowDefSticky","sticky",RL]},features:[_E([{provide:ce,useExisting:n}]),$f]})}return n})();var Kt=(()=>{class n extends Re{static \u0275fac=(()=>{let e;return function(i){return (e||(e=tm(n)))(i||n)}})();static \u0275dir=gI({type:n,selectors:[["","matRowDef",""]],inputs:{columns:[0,"matRowDefColumns","columns"],when:[0,"matRowDefWhen","when"]},features:[_E([{provide:Re,useExisting:n}]),$f]})}return n})(),Gt=(()=>{class n extends Ne{static \u0275fac=(()=>{let e;return function(i){return (e||(e=tm(n)))(i||n)}})();static \u0275cmp=uI({type:n,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-mdc-header-row","mdc-data-table__header-row"],exportAs:["matHeaderRow"],features:[_E([{provide:Ne,useExisting:n}]),$f],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,i){t&1&&tp(0,0);},dependencies:[Z],encapsulation:2,changeDetection:1})}return n})();var Xt=(()=>{class n extends He{static \u0275fac=(()=>{let e;return function(i){return (e||(e=tm(n)))(i||n)}})();static \u0275cmp=uI({type:n,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-mdc-row","mdc-data-table__row"],exportAs:["matRow"],features:[_E([{provide:He,useExisting:n}]),$f],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,i){t&1&&tp(0,0);},dependencies:[Z],encapsulation:2,changeDetection:1})}return n})();var Zt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=fI({type:n});static \u0275inj=Cl({imports:[Bt,Va]})}return n})();var Ve=new S("CdkAccordion"),Yt=(()=>{class n{_stateChanges=new X;_openCloseAllActions=new X;id=T(At$1).getId("cdk-accordion-");multi=false;openAll(){this.multi&&this._openCloseAllActions.next(true);}closeAll(){this._openCloseAllActions.next(false);}ngOnChanges(e){this._stateChanges.next(e);}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete();}static \u0275fac=function(t){return new(t||n)};static \u0275dir=gI({type:n,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:[2,"multi","multi",RL]},exportAs:["cdkAccordion"],features:[_E([{provide:Ve,useExisting:n}]),Lg]})}return n})(),Jt=(()=>{class n{accordion=T(Ve,{optional:true,skipSelf:true});_changeDetectorRef=T(xL);_expansionDispatcher=T(D);_openCloseAllSubscription=j.EMPTY;closed=new Oe;opened=new Oe;destroyed=new Oe;expandedChange=new Oe;id=T(At$1).getId("cdk-accordion-child-");get expanded(){return this._expanded}set expanded(e){if(this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();let t=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,t);}else this.closed.emit();this._changeDetectorRef.markForCheck();}}_expanded=false;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(e);}_disabled=Ws(false);_removeUniqueSelectionListener=()=>{};ngOnInit(){this._removeUniqueSelectionListener=this._expansionDispatcher.listen((e,t)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===t&&this.id!==e&&(this.expanded=false);}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions());}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe();}toggle(){this.disabled||(this.expanded=!this.expanded);}close(){this.disabled||(this.expanded=false);}open(){this.disabled||(this.expanded=true);}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e);})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=gI({type:n,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[2,"expanded","expanded",RL],disabled:[2,"disabled","disabled",RL]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[_E([{provide:Ve,useValue:void 0}])]})}return n})(),en=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=fI({type:n});static \u0275inj=Cl({})}return n})();var bn=["body"],Dn=["bodyWrapper"],Rn=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],kn=["mat-expansion-panel-header","*","mat-action-row"];function Sn(n,r){}var Mn=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],En=["mat-panel-title","mat-panel-description","*"];function Tn(n,r){n&1&&(mc(0,"span",1),cu(),mc(1,"svg",2),Xf(2,"path",3),yc()());}var Qe=new S("MAT_ACCORDION"),tn=new S("MAT_EXPANSION_PANEL"),On=(()=>{class n{_template=T(Jn);_expansionPanel=T(tn,{optional:true});static \u0275fac=function(t){return new(t||n)};static \u0275dir=gI({type:n,selectors:[["ng-template","matExpansionPanelContent",""]]})}return n})(),nn=new S("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),We=(()=>{class n extends Jt{_viewContainerRef=T(pi);_animationsDisabled=Zu();_document=T(Un$1);_ngZone=T(Te);_elementRef=T(or);_renderer=T(vv);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e;}_hideToggle=false;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e;}_togglePosition;afterExpand=new Oe;afterCollapse=new Oe;_inputChanges=new X;accordion=T(Qe,{optional:true,skipSelf:true});_lazyContent;_body;_bodyWrapper;_portal;_headerId=T(At$1).getId("mat-expansion-panel-header-");constructor(){super();let e=T(nn,{optional:true});this._expansionDispatcher=T(D),e&&(this.hideToggle=e.hideToggle);}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":false}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded;}close(){this.expanded=false;}open(){this.expanded=true;}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(kh(null),Sn$1(()=>this.expanded&&!this._portal),zt$1(1)).subscribe(()=>{this._portal=new s(this._lazyContent._template,this._viewContainerRef);}),this._setupAnimationEvents();}ngOnChanges(e){this._inputChanges.next(e);}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete();}_containsFocus(){if(this._body){let e=this._document.activeElement,t=this._body.nativeElement;return e===t||t.contains(e)}return  false}_transitionEndListener=({target:e,propertyName:t})=>{e===this._bodyWrapper?.nativeElement&&t==="grid-template-rows"&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit();});};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let e=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(e,"transitionend",this._transitionEndListener),e.classList.add("mat-expansion-panel-animations-enabled");},200);});}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=uI({type:n,selectors:[["mat-expansion-panel"]],contentQueries:function(t,i,o){if(t&1&&ip(o,On,5),t&2){let a;ZI(a=YI())&&(i._lazyContent=a.first);}},viewQuery:function(t,i){if(t&1&&sp(bn,5)(Dn,5),t&2){let o;ZI(o=YI())&&(i._body=o.first),ZI(o=YI())&&(i._bodyWrapper=o.first);}},hostAttrs:[1,"mat-expansion-panel"],hostVars:4,hostBindings:function(t,i){t&2&&up("mat-expanded",i.expanded)("mat-expansion-panel-spacing",i._hasSpacing());},inputs:{hideToggle:[2,"hideToggle","hideToggle",RL],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[_E([{provide:Qe,useValue:void 0},{provide:tn,useExisting:n}]),$f,Lg],ngContentSelectors:kn,decls:9,vars:4,consts:[["bodyWrapper",""],["body",""],[1,"mat-expansion-panel-content-wrapper"],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(t,i){t&1&&(GI(Rn),zI(0),ei(1,"div",2,0)(3,"div",3,1)(5,"div",4),zI(6,1),qf(7,Sn,0,0,"ng-template",5),gc(),zI(8,2),gc()()),t&2&&(Ly(),Yf("inert",i.expanded?null:""),Ly(2),Kf("id",i.id),Yf("aria-labelledby",i._headerId),Ly(4),Kf("cdkPortalOutlet",i._portal));},dependencies:[T$1],styles:[`.mat-expansion-panel {
  box-sizing: content-box;
  display: block;
  margin: 0;
  overflow: hidden;
}
.mat-expansion-panel.mat-expansion-panel-animations-enabled {
  transition: margin 225ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel {
  position: relative;
  background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  color: var(--mat-expansion-container-text-color, var(--mat-sys-on-surface));
  border-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-expansion-panel:not([class*=mat-elevation-z]) {
  box-shadow: var(--mat-expansion-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}
.mat-accordion .mat-expansion-panel:not(.mat-expanded), .mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing) {
  border-radius: 0;
}
.mat-accordion .mat-expansion-panel:first-of-type {
  border-top-right-radius: var(--mat-expansion-container-shape, 12px);
  border-top-left-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-accordion .mat-expansion-panel:last-of-type {
  border-bottom-right-radius: var(--mat-expansion-container-shape, 12px);
  border-bottom-left-radius: var(--mat-expansion-container-shape, 12px);
}
@media (forced-colors: active) {
  .mat-expansion-panel {
    outline: solid 1px;
  }
}

.mat-expansion-panel-content-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper {
  transition: grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
  grid-template-rows: 1fr;
}
@supports not (grid-template-rows: 0fr) {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}
@media print {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}

.mat-expansion-panel-content {
  display: flex;
  flex-direction: column;
  overflow: visible;
  min-height: 0;
  visibility: hidden;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content {
  transition: visibility 190ms linear;
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper > .mat-expansion-panel-content {
  visibility: visible;
}
.mat-expansion-panel-content {
  font-family: var(--mat-expansion-container-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-expansion-container-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-expansion-container-text-weight, var(--mat-sys-body-large-weight));
  line-height: var(--mat-expansion-container-text-line-height, var(--mat-sys-body-large-line-height));
  letter-spacing: var(--mat-expansion-container-text-tracking, var(--mat-sys-body-large-tracking));
}

.mat-expansion-panel-body {
  padding: 0 24px 16px;
}

.mat-expansion-panel-spacing {
  margin: 16px 0;
}
.mat-accordion > .mat-expansion-panel-spacing:first-child, .mat-accordion > *:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-top: 0;
}
.mat-accordion > .mat-expansion-panel-spacing:last-child, .mat-accordion > *:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-bottom: 0;
}

.mat-action-row {
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 16px 8px 16px 24px;
  border-top-color: var(--mat-expansion-actions-divider-color, var(--mat-sys-outline));
}
.mat-action-row .mat-button-base,
.mat-action-row .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-action-row .mat-button-base,
[dir=rtl] .mat-action-row .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}
`],encapsulation:2})}return n})();var $e=(()=>{class n{panel=T(We,{host:true});_element=T(or);_focusMonitor=T(Bn$1);_changeDetectorRef=T(xL);_parentChangeSubscription=j.EMPTY;constructor(){T(_t).load(Xu);let e=this.panel,t=T(nn,{optional:true}),i=T(new bp("tabindex"),{optional:true}),o=e.accordion?e.accordion._stateChanges.pipe(Sn$1(a=>!!(a.hideToggle||a.togglePosition))):It;this.tabIndex=parseInt(i||"")||0,this._parentChangeSubscription=Eh(e.opened,e.closed,o,e._inputChanges.pipe(Sn$1(a=>!!(a.hideToggle||a.disabled||a.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(Sn$1(()=>e._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,"program")),t&&(this.expandedHeight=t.expandedHeight,this.collapsedHeight=t.collapsedHeight);}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle();}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return !this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case 32:case 13:jn$1(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,t){e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t);}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this);});}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element);}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=uI({type:n,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:13,hostBindings:function(t,i){t&1&&op("click",function(){return i._toggle()})("keydown",function(a){return i._keydown(a)}),t&2&&(Yf("id",i.panel._headerId)("tabindex",i.disabled?-1:i.tabIndex)("aria-controls",i._getPanelId())("aria-expanded",i._isExpanded())("aria-disabled",i.panel.disabled),lp("height",i._getHeaderHeight()),up("mat-expanded",i._isExpanded())("mat-expansion-toggle-indicator-after",i._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",i._getTogglePosition()==="before"));},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:kL(e)]},ngContentSelectors:En,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(t,i){t&1&&(GI(Mn),mc(0,"span",0),zI(1),zI(2,1),zI(3,2),yc(),AI(4,Tn,3,0,"span",1)),t&2&&(up("mat-content-hide-toggle",!i._showToggle()),Ly(4),RI(i._showToggle()?4:-1));},styles:[`.mat-expansion-panel-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  border-radius: inherit;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-header {
  transition: height 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header::before {
  border-radius: inherit;
}
.mat-expansion-panel-header {
  height: var(--mat-expansion-header-collapsed-state-height, 48px);
  font-family: var(--mat-expansion-header-text-font, var(--mat-sys-title-medium-font));
  font-size: var(--mat-expansion-header-text-size, var(--mat-sys-title-medium-size));
  font-weight: var(--mat-expansion-header-text-weight, var(--mat-sys-title-medium-weight));
  line-height: var(--mat-expansion-header-text-line-height, var(--mat-sys-title-medium-line-height));
  letter-spacing: var(--mat-expansion-header-text-tracking, var(--mat-sys-title-medium-tracking));
}
.mat-expansion-panel-header.mat-expanded {
  height: var(--mat-expansion-header-expanded-state-height, 64px);
}
.mat-expansion-panel-header[aria-disabled=true] {
  color: var(--mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-expansion-panel-header:not([aria-disabled=true]) {
  cursor: pointer;
}
.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
  background: var(--mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
@media (hover: none) {
  .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
    background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  }
}
.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused, .mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused {
  background: var(--mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
.mat-expansion-panel-header._mat-animation-noopable {
  transition: none;
}
.mat-expansion-panel-header:focus, .mat-expansion-panel-header:hover {
  outline: none;
}
.mat-expansion-panel-header.mat-expanded:focus, .mat-expansion-panel-header.mat-expanded:hover {
  background: inherit;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before {
  flex-direction: row-reverse;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 16px 0 0;
}
[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 0 0 16px;
}

.mat-content {
  display: flex;
  flex: 1;
  flex-direction: row;
  overflow: hidden;
}
.mat-content.mat-content-hide-toggle {
  margin-right: 8px;
}
[dir=rtl] .mat-content.mat-content-hide-toggle {
  margin-right: 0;
  margin-left: 8px;
}
.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-left: 24px;
  margin-right: 0;
}
[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-right: 24px;
  margin-left: 0;
}

.mat-expansion-panel-header-title {
  color: var(--mat-expansion-header-text-color, var(--mat-sys-on-surface));
}

.mat-expansion-panel-header-title,
.mat-expansion-panel-header-description {
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  margin-right: 16px;
  align-items: center;
}
[dir=rtl] .mat-expansion-panel-header-title,
[dir=rtl] .mat-expansion-panel-header-description {
  margin-right: 0;
  margin-left: 16px;
}
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description {
  color: inherit;
}

.mat-expansion-panel-header-description {
  flex-grow: 2;
  color: var(--mat-expansion-header-description-color, var(--mat-sys-on-surface-variant));
}

.mat-expansion-panel-animations-enabled .mat-expansion-indicator {
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator {
  transform: rotate(180deg);
}
.mat-expansion-indicator::after {
  border-style: solid;
  border-width: 0 2px 2px 0;
  content: "";
  padding: 3px;
  transform: rotate(45deg);
  vertical-align: middle;
  color: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-legacy-header-indicator-display, none);
}
.mat-expansion-indicator svg {
  width: 24px;
  height: 24px;
  margin: 0 -8px;
  vertical-align: middle;
  fill: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-header-indicator-display, inline-block);
}

@media (forced-colors: active) {
  .mat-expansion-panel-content {
    border-top: 1px solid;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
`],encapsulation:2})}return n})(),on=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=gI({type:n,selectors:[["mat-panel-description"]],hostAttrs:[1,"mat-expansion-panel-header-description"]})}return n})(),an=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=gI({type:n,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]})}return n})(),rn=(()=>{class n extends Yt{_keyManager;_ownHeaders=new Bo;_headers;hideToggle=false;displayMode="default";togglePosition="after";ngAfterContentInit(){this._headers.changes.pipe(kh(this._headers)).subscribe(e=>{this._ownHeaders.reset(e.filter(t=>t.panel.accordion===this)),this._ownHeaders.notifyOnChanges();}),this._keyManager=new wt(this._ownHeaders).withWrap().withHomeAndEnd();}_handleHeaderKeydown(e){this._keyManager.onKeydown(e);}_handleHeaderFocus(e){this._keyManager.updateActiveItem(e);}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy();}static \u0275fac=(()=>{let e;return function(i){return (e||(e=tm(n)))(i||n)}})();static \u0275dir=gI({type:n,selectors:[["mat-accordion"]],contentQueries:function(t,i,o){if(t&1&&ip(o,$e,5),t&2){let a;ZI(a=YI())&&(i._headers=a);}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(t,i){t&2&&up("mat-accordion-multi",i.multi);},inputs:{hideToggle:[2,"hideToggle","hideToggle",RL],displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],features:[_E([{provide:Qe,useExisting:n}]),$f]})}return n})(),sn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=fI({type:n});static \u0275inj=Cl({imports:[en,S$1,Va]})}return n})();var In=(n,r)=>r.sector,Pn=(n,r)=>r.domain;function An(n,r){n&1&&(ei(0,"th",24),IE(1,"DOMAIN"),gc());}function Nn(n,r){if(n&1&&(ei(0,"td",25),IE(1),gc()),n&2){let e=r.$implicit;Ly(),yp(e.domain);}}function Hn(n,r){n&1&&(ei(0,"th",26),IE(1,"SEVERITY"),gc());}function zn(n,r){if(n&1&&(ei(0,"td",27)(1,"div",28)(2,"span",29),IE(3),gc(),ei(4,"div",30),Jf(5,"div",31),gc(),ei(6,"span",32),IE(7),gc()()()),n&2){let e=r.$implicit,t=qI();Ly(2),cE(t.severityClass(e.severity)),Ly(),Ec(" ",(e.severity*100).toFixed(0),"% "),Ly(2),cE(t.severityClass(e.severity)+"-bar"),lp("width",e.severity*100,"%"),Ly(),cE(t.severityClass(e.severity)),Ly(),Ec(" ",t.severityLabel(e.severity)," ");}}function Ln(n,r){n&1&&(ei(0,"th",24),IE(1,"DIAGNOSTIC"),gc());}function Bn(n,r){if(n&1&&(ei(0,"td",33),IE(1),gc()),n&2){let e=r.$implicit;Ly(),yp(e.description);}}function jn(n,r){n&1&&Jf(0,"tr",34);}function Un(n,r){n&1&&Jf(0,"tr",35);}function Vn(n,r){if(n&1&&(ei(0,"mat-expansion-panel",21)(1,"mat-expansion-panel-header")(2,"mat-panel-title",36),IE(3),gc(),ei(4,"mat-panel-description",37)(5,"span"),IE(6),gc()()(),ei(7,"div",38)(8,"div",39)(9,"div",40)(10,"span",41),IE(11,"AUTOMATION RATE"),gc(),ei(12,"span",42),IE(13),gc(),ei(14,"div",43),Jf(15,"div",44),gc()(),ei(16,"div",40)(17,"span",41),IE(18,"DISPLACEMENT INDEX"),gc(),ei(19,"span",42),IE(20),gc(),ei(21,"div",43),Jf(22,"div",45),gc()()()()()),n&2){let e=r.$implicit,t=qI();Ly(3),yp(e.sector),Ly(2),cE(t.severityClass(e.displacementIndex)),Ly(),Ec(" DISPLACEMENT ",(e.displacementIndex*100).toFixed(0),"% "),Ly(7),Ec("",(e.automationRate*100).toFixed(0),"%"),Ly(2),lp("width",e.automationRate*100,"%"),Ly(4),cE(t.severityClass(e.displacementIndex)),Ly(),Ec(" ",(e.displacementIndex*100).toFixed(0),"% "),Ly(2),lp("width",e.displacementIndex*100,"%");}}function Qn(n,r){if(n&1&&(ei(0,"mat-card",23)(1,"mat-card-content")(2,"div",46)(3,"span",41),IE(4),gc(),ei(5,"span",47),IE(6),gc()(),ei(7,"p",48),IE(8),gc()()()),n&2){let e=r.$implicit,t=qI();Ly(4),yp(e.domain),Ly(),cE(t.severityClass(e.opacityScore)),Ly(),Ec(" ",(e.opacityScore*100).toFixed(0),"% "),Ly(2),yp(e.note);}}var ln=class n{service=T(P);signalColumns=["domain","severity","description"];severityClass(r){return r>=.85?"severity-critical":r>=.7?"severity-high":"severity-warning"}severityLabel(r){return r>=.85?"CRITICAL":r>=.7?"HIGH":"ELEVATED"}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=uI({type:n,selectors:[["app-structural-stress-map"]],decls:45,vars:3,consts:[[1,"engine-header"],[1,"engine-id"],[1,"engine-title"],[1,"engine-desc"],[1,"section-grid"],[1,"section-header"],[1,"section-id"],[1,"section-title"],[1,"table-container"],["mat-table","",1,"stress-table",3,"dataSource"],["matColumnDef","domain"],["mat-header-cell","","class","col-header",4,"matHeaderCellDef"],["mat-cell","","class","col-domain",4,"matCellDef"],["matColumnDef","severity"],["mat-header-cell","","class","col-header col-severity-header",4,"matHeaderCellDef"],["mat-cell","","class","col-severity",4,"matCellDef"],["matColumnDef","description"],["mat-cell","","class","col-desc",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","","class","signal-row",4,"matRowDef","matRowDefColumns"],[1,"collapse-panels"],[1,"collapse-panel"],[1,"opacity-grid"],[1,"opacity-card"],["mat-header-cell","",1,"col-header"],["mat-cell","",1,"col-domain"],["mat-header-cell","",1,"col-header","col-severity-header"],["mat-cell","",1,"col-severity"],[1,"severity-cell"],[1,"severity-pct"],[1,"severity-bar-track"],[1,"severity-bar-fill"],[1,"severity-label"],["mat-cell","",1,"col-desc"],["mat-header-row",""],["mat-row","",1,"signal-row"],[1,"panel-title"],[1,"panel-desc"],[1,"panel-content"],[1,"indicator-row"],[1,"indicator-metric"],[1,"codex-section-label"],[1,"indicator-value"],[1,"indicator-bar-track"],[1,"indicator-bar-fill"],[1,"indicator-bar-fill","indicator-bar-fill--displacement"],[1,"opacity-top"],[1,"opacity-score"],[1,"opacity-note"]],template:function(e,t){e&1&&(ei(0,"div",0)(1,"span",1),IE(2,"ENGINE-02"),gc(),ei(3,"h1",2),IE(4,"STRATATRUTH"),gc(),ei(5,"p",3),IE(6," Structural incentive mapping \xB7 Automation collapse indicators \xB7 Opacity diagnostics \xB7 Proto-caste analysis "),gc()(),ei(7,"div",4)(8,"section")(9,"div",5)(10,"span",6),IE(11,"ST-01"),gc(),ei(12,"span",7),IE(13,"STRUCTURAL STRESS SIGNALS"),gc()(),ei(14,"div",8)(15,"table",9),vc(16,10),qf(17,An,2,0,"th",11)(18,Nn,2,1,"td",12),Ic(),vc(19,13),qf(20,Hn,2,0,"th",14)(21,zn,8,10,"td",15),Ic(),vc(22,16),qf(23,Ln,2,0,"th",11)(24,Bn,2,1,"td",17),Ic(),qf(25,jn,1,0,"tr",18)(26,Un,1,0,"tr",19),gc()()(),ei(27,"section")(28,"div",5)(29,"span",6),IE(30,"ST-02"),gc(),ei(31,"span",7),IE(32,"AUTOMATION COLLAPSE INDICATORS"),gc()(),ei(33,"mat-accordion",20),OI(34,Vn,23,12,"mat-expansion-panel",21,In),gc()(),ei(36,"section")(37,"div",5)(38,"span",6),IE(39,"ST-03"),gc(),ei(40,"span",7),IE(41,"OPACITY DIAGNOSTICS"),gc()(),ei(42,"div",22),OI(43,Qn,9,5,"mat-card",23,Pn),gc()()()),e&2&&(Ly(15),Kf("dataSource",t.service.structuralSignals),Ly(10),Kf("matHeaderRowDef",t.signalColumns),Ly(),Kf("matRowDefColumns",t.signalColumns),Ly(8),PI(t.service.automationCollapseIndicators),Ly(9),PI(t.service.opacityDiagnostics));},dependencies:[Zt,jt,Vt,qt,Qt,Ut,Kt,Wt,$t,Gt,Xt,sn,rn,We,$e,an,on,z,F,k],styles:[".engine-header[_ngcontent-%COMP%]{margin-bottom:28px;padding-bottom:16px;border-bottom:1px solid #1a1a1a}.engine-id[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:.6rem;letter-spacing:.25em;color:#333;display:block;margin-bottom:4px}.engine-title[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:1.4rem;font-weight:700;letter-spacing:.15em;color:#c8c8c8;margin:0 0 6px}.engine-desc[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:.75rem;color:#555;margin:0;letter-spacing:.05em}.section-grid[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:28px}.section-header[_ngcontent-%COMP%]{display:flex;align-items:baseline;gap:10px;margin-bottom:12px}.section-id[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:.6rem;color:#333;letter-spacing:.15em}.section-title[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:.7rem;letter-spacing:.2em;color:#888;font-weight:600}.table-container[_ngcontent-%COMP%]{overflow-x:auto;border:1px solid #1a1a1a;border-radius:4px}.stress-table[_ngcontent-%COMP%]{width:100%;background-color:#0f0f0f!important}.col-header[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace!important;font-size:.6rem!important;letter-spacing:.15em!important;color:#444!important;border-bottom-color:#1e1e1e!important;background-color:#111!important;padding:10px 16px!important}.col-domain[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:.8rem;color:#c8c8c8;white-space:nowrap;padding:14px 16px!important;border-bottom-color:#141414!important}.col-severity[_ngcontent-%COMP%]{padding:10px 16px!important;border-bottom-color:#141414!important;min-width:140px}.col-severity-header[_ngcontent-%COMP%]{min-width:140px}.col-desc[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:.72rem;color:#666;padding:14px 16px!important;border-bottom-color:#141414!important;line-height:1.5}.severity-cell[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:3px}.severity-pct[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:1rem;font-weight:700;line-height:1}.severity-bar-track[_ngcontent-%COMP%]{height:2px;background-color:#1a1a1a;border-radius:1px;overflow:hidden}.severity-bar-fill[_ngcontent-%COMP%]{height:100%;background-color:#3a3a3a}.severity-critical-bar[_ngcontent-%COMP%]{background-color:#8b2222}.severity-high-bar[_ngcontent-%COMP%]{background-color:#8b4a14}.severity-warning-bar[_ngcontent-%COMP%]{background-color:#8b6b14}.severity-label[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:.58rem;letter-spacing:.12em}.signal-row[_ngcontent-%COMP%]{background-color:#0f0f0f}.signal-row[_ngcontent-%COMP%]:hover{background-color:#131313!important}.collapse-panels[_ngcontent-%COMP%]{background:transparent!important;display:flex;flex-direction:column;gap:4px}.collapse-panel[_ngcontent-%COMP%]{background-color:#0f0f0f!important;border:1px solid #1a1a1a!important;border-radius:4px!important;color:#c8c8c8!important;box-shadow:none!important;margin:0!important}.panel-title[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace!important;font-size:.8rem!important;color:#c8c8c8!important;letter-spacing:.05em}.panel-desc[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace!important;font-size:.65rem!important;letter-spacing:.08em}.panel-content[_ngcontent-%COMP%]{padding-top:8px}.indicator-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:20px}.indicator-metric[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.indicator-value[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:1.4rem;font-weight:700;color:#888;line-height:1}.indicator-bar-track[_ngcontent-%COMP%]{height:2px;background-color:#1a1a1a;border-radius:1px;overflow:hidden}.indicator-bar-fill[_ngcontent-%COMP%]{height:100%;background-color:#3a3a3a}.indicator-bar-fill--displacement[_ngcontent-%COMP%]{background-color:#8b2222}.opacity-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.opacity-card[_ngcontent-%COMP%]{background-color:#0f0f0f!important;border:1px solid #1a1a1a!important}.opacity-top[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px}.opacity-score[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:1.2rem;font-weight:700;flex-shrink:0}.opacity-note[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:.7rem;color:#555;margin:0;line-height:1.5}"]})};export{ln as StructuralStressMapComponent};