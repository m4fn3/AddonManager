function nt(e){window.enmity.plugins.registerPlugin(e)}function O(e){return window.enmity.plugins.getPlugin(e)}function ne(){return window.enmity.plugins.getPlugins()}const g=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const t=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const A=window.enmity.modules.common.Toasts,oe=window.enmity.modules.common.Dialog,ot=window.enmity.modules.common.Token,D=window.enmity.modules.common.REST;window.enmity.modules.common.Settings,window.enmity.modules.common.Users;const ae=window.enmity.modules.common.Navigation,at=window.enmity.modules.common.NavigationNative,de=window.enmity.modules.common.NavigationStack;window.enmity.modules.common.Theme;const V=window.enmity.modules.common.Linking,_=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux;const F=window.enmity.modules.common.SVG,rt=window.enmity.modules.common.Scenes;window.enmity.modules.common.Moment;function it(e){return window.enmity.patcher.create(e)}var d="AddonManager",Me="1.1.5",lt="Manage plugins & themes easily!",st=[{name:"mafu",id:"519760564755365888"}],ct="#00ffff",mt={name:d,version:Me,description:lt,authors:st,color:ct};function b(e,n,o){window.enmity.settings.set(e,n,o)}function S(e,n,o){return window.enmity.settings.get(e,n,o)}const U="https://raw.githubusercontent.com/m4fn3/AddonManagerDatabase/master/",dt=U+"plugins.json",ut=U+"themes.json",gt=U+"plugins_update.txt",ht=U+"themes_update.txt",pt=U+"compatibility.json";function j(e){return`${e}?${Date.now()}`}function Et(e,n){return`${U}${e}s/${n}.json`}function ue(e){try{return JSON.parse(S(d,e,"{}").toString())}catch{return{}}}function K(){return ue("plugins")}function z(){return ue("themes")}function wt(){return ue("compatibility")}function Re(){D.get(j(dt)).then(e=>{b(d,"plugins",e.text)})}function Pe(){D.get(j(ut)).then(e=>{b(d,"themes",e.text)})}function yt(){D.get(j(gt)).then(e=>{let n=e.text,o=S(d,"plugins_ver");o?o!=n&&(b(d,"plugins_ver",n),Re()):(b(d,"plugins_ver",n),Re())})}function ft(){D.get(j(ht)).then(e=>{let n=e.text,o=S(d,"themes_ver");o?o!=n&&(b(d,"themes_ver",n),Pe()):(b(d,"themes_ver",n),Pe())})}function T(e){return window.enmity.assets.getIDByName(e)}const re={byProps:(...e)=>window.enmity.modules.filters.byProps(...e),byName:(e,n)=>window.enmity.modules.filters.byName(e,n),byTypeName:(e,n)=>window.enmity.modules.filters.byTypeName(e,n),byDisplayName:(e,n)=>window.enmity.modules.filters.byDisplayName(e,n)};function bt(...e){return window.enmity.modules.bulk(...e)}function Y(...e){return window.enmity.modules.getByProps(...e)}function ge(...e){return window.enmity.modules.getByName(...e)}function vt(...e){return window.enmity.modules.getByKeyword(...e)}window.enmity.modules.common;const St=ge("Icon"),X=vt("getFocusedRoute"),Ne=ge("StaticSearchBarContainer"),Tt=Y("acceptInviteAndTransitionToInviteChannel"),Ct=Y("AppState"),_t=Y("DRMType","FilterType").default,Ie=Y("setString"),p={Copy:T("ic_message_copy"),GitHub:T("img_account_sync_github_white"),Twitter:T("img_account_sync_twitter_white"),Discord:T("Discord"),Update:T("toast_image_saved"),Export:T("ic_reply_24px"),Import:T("ic_leave_stage"),Fail:T("Small"),Download:T("ic_download_24px"),Check:T("ic_check_24px"),Clear:T("ic_input_clear_24px"),Uninstall:T("ic_trash_24px"),Settings:T("ic_settings_white_24px"),Add:T("hub-add"),SettingIcon:T("ic_rulebook")},W=_.createThemedStyleSheet({cardStyle:{backgroundColor:g.ThemeColorMap.BACKGROUND_MOBILE_PRIMARY,color:g.ThemeColorMap.TEXT_NORMAL},header:{backgroundColor:g.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,shadowColor:"transparent",elevation:0},headerText:{color:g.ThemeColorMap.HEADER_PRIMARY}}),Mt={cardStyle:W.cardStyle,headerStyle:W.header,headerTitleContainerStyle:W.headerText,headerTitleStyle:W.headerText,headerBackTitleStyle:W.headerText,headerBackImage:()=>t.createElement(St,{source:T("ios-back")}),headerTitleAlign:"center",safeAreaInsets:{top:0}};function Rt(e,n,o,r=186){let c=e.replace("#","");const m=(u,l,y)=>parseInt(u.substring(l[0],l[1]),y),w=m(c,[0,2],16),f=m(c,[2,4],16),i=m(c,[4,6],16);return(w+f+i)/(255*3)>r?o:n}function J(e,n,o=()=>{}){window.enmity.plugins.installPlugin(n,r=>{r.name===void 0?A.open({content:`Failed to install ${e}`,source:p.Fail}):(A.open({content:`Successfully installed ${e}!`,source:p.Check}),o())})}function Ae(e,n=()=>{}){window.enmity.plugins.uninstallPlugin(e,o=>{A.open({content:`Successfully uninstalled ${e}!`,source:p.Check}),n()})}function ie(e,n,o=()=>{}){window.enmity.themer.installTheme(n,r=>{A.open({content:`Successfully installed ${e}!`,source:p.Check}),o()})}function Pt(e,n=()=>{}){window.enmity.themer.uninstallTheme(e,o=>{A.open({content:`Successfully uninstalled ${e}!`,source:p.Check}),n()})}function G(e){return window.enmity.themer.getThemeByName(e)}function le(){return window.enmity.themer.listThemes()}function Nt(e){try{let n=G(window.enmity.themer.getTheme());return n?n.colours[e]:void 0}catch{return}}function se(e,n){let o=he("plugin");o.push(n),b(d,`_updated_${e}s`,JSON.stringify(o))}function It(e){b(d,`_updated_${e}s`,"[]")}function he(e){return JSON.parse(S(d,`_updated_${e}s`,"[]").toString())}function At(){let e=S(d,"check_updates");if(e===void 0)b(d,"check_updates",!1);else if(e){const n=K(),o=z();let r=Ee(n),c=we(o);if(r.length||c.length){let m=r.concat(c).join(", ");A.open({content:`Updates are available for ${m}`,source:p.Download})}}}function pe(e,n){return n.localeCompare(e,void 0,{numeric:!0})}function ke(e,n){return pe(e,n)===1}function Ee(e){return ne().map(n=>n.name).filter(n=>Object.keys(e).includes(n)&&Object.keys(e[n]).includes("version")&&O(n).version&&ke(O(n).version,e[n].version))}function we(e){return le().map(n=>n.name).filter(n=>Object.keys(e).includes(n)&&Object.keys(e[n]).includes("version")&&G(n).version&&ke(G(n).version,e[n].version))}const{components:s}=window.enmity;s.Alert;const kt=s.Button,xt=s.FlatList,xe=s.Image;s.ImageBackground,s.KeyboardAvoidingView,s.Modal,s.Pressable,s.RefreshControl;const L=s.ScrollView;s.SectionList,s.StatusBar,s.StyleSheet,s.Switch;const R=s.Text,$t=s.TextInput;s.TouchableHighlight;const Dt=s.TouchableOpacity;s.TouchableWithoutFeedback,s.Touchable;const ce=s.View;s.VirtualizedList,s.Form;const Lt=s.FormArrow;s.FormCTA,s.FormCTAButton,s.FormCardSection,s.FormCheckbox;const Bt=s.FormDivider;s.FormHint,s.FormIcon,s.FormInput,s.FormLabel,s.FormRadio;const a=s.FormRow,P=s.FormSection;s.FormSelect,s.FormSubLabel;const me=s.FormSwitch;s.FormTernaryCheckBox,s.FormText,s.FormTextColors,s.FormTextSizes;function $e(){let e=ne().map(o=>o.name).join(";"),n=le().map(o=>o.name).join(";");return`${e}|${n}`}function De(){const e=_.createThemedStyleSheet({container:{flex:1,backgroundColor:g.ThemeColorMap.BACKGROUND_PRIMARY}}),[n,o]=t.useState(Boolean(S(d,"auto_backup")));return t.createElement(L,{style:e.container},t.createElement(P,{title:"EXPORT"},t.createElement(a,{label:"Automatically create backup",subLabel:"Automatically save backup of installed addons. It will be linked with your discord account.",leading:t.createElement(a.Icon,{source:p.Export}),trailing:t.createElement(me,{value:n,onValueChange:r=>{o(r),r&&Le(),b(d,"auto_backup",r)}})})),t.createElement(P,{title:"ADVANCED"},t.createElement(a,{label:"Export addons as text",subLabel:"Export installed addons as text that you can import manually.",leading:t.createElement(a.Icon,{source:p.Copy}),trailing:a.Arrow,onPress:()=>{Ie.setString($e()),A.open({content:"Copied addon list to clipboard!",source:p.Copy})}})))}const Ot=Y("updateNote");async function Ft(e){let n=await(await fetch(`https://discord.com/api/v9/users/@me/notes/${e}`,{method:"GET",credentials:"include",headers:{authorization:ot.getToken()}})).json();return Object.keys(n).includes("note")?n.note:""}function Ut(e,n){Ot.updateNote(e,n)}function Le(){Ut("1048982327809818706",$e())}async function jt(){return Ft("1048982327809818706")}V.addEventListener("url",e=>{let n=e.url;n=decodeURIComponent(n.replace("com.hammerandchisel.discord://",""));try{const o=JSON.parse(n);S(d,"auto_backup")&&typeof o.data=="string"&&["installed_theme","overridden_theme","installed_plugin","overridden_plugin"].includes(o.data)&&Le()}catch{return}});function Be({height:e,width:n,...o}){const r=_.createThemedStyleSheet({icon:{color:g.ThemeColorMap.INTERACTIVE_NORMAL,opacity:.75,marginLeft:.5}});return t.createElement(F.Svg,{viewBox:"0 0 24 24",style:{height:e,width:n,...r.icon},fill:"currentColor",...o},t.createElement(F.Path,{d:"M0 0h24v24H0z",fill:"none"}),t.createElement(F.Path,{d:"M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"}))}function Oe({height:e,width:n,...o}){const r=_.createThemedStyleSheet({icon:{color:g.ThemeColorMap.INTERACTIVE_NORMAL,opacity:.75,marginLeft:.5}});return t.createElement(F.Svg,{viewBox:"0 0 24 24",style:{height:e,width:n,...r.icon},fill:"currentColor",...o},t.createElement(F.Path,{d:"M0 0h24v24H0z",fill:"none"}),t.createElement(F.Path,{d:"M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"}))}const{native:q}=window.enmity;function Yt(){q.reload()}const ye=q.version;q.build,q.device,q.version;var Fe=({content:e,addonType:n,addonName:o})=>{const r=_.createThemedStyleSheet({hyperLink:{color:g.ThemeColorMap.TEXT_LINK}});return e.replace(/(\bhttps?:\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*)/ig,"<l>$1<l>").split("<l>").map(c=>c.startsWith("http")?t.createElement(R,{style:r.hyperLink,onPress:()=>{let m=n=="plugin"?".js":".json";c.endsWith(m)?n=="plugin"?J(o,c):ie(o,c):V.openURL(c)},onLongPress:()=>{Ie.setString(c),A.open({content:"Copied URL to clipboard",source:p.Copy})}},c):t.createElement(R,null,c))};function H({addonType:e}){let n=Nt("PRIMARY_DARK_500"),o=n?Rt(n,g.ThemeColorMap.TEXT_NORMAL[0],g.ThemeColorMap.TEXT_NORMAL[1]):g.ThemeColorMap.HEADER_PRIMARY;n=n||g.ThemeColorMap.BACKGROUND_SECONDARY;const r=_.createThemedStyleSheet({container:{flex:1,backgroundColor:g.ThemeColorMap.BACKGROUND_PRIMARY,padding:10},previews:{marginTop:20,justifyContent:"center"},addonName:{color:g.ThemeColorMap.TEXT_NORMAL,fontFamily:g.Fonts.PRIMARY_SEMIBOLD,fontSize:20},addonText:{borderBottomWidth:1,borderBottomColor:g.ThemeColorMap.HEADER_PRIMARY,paddingBottom:20},sectionTitle:{marginTop:20,marginLeft:15,color:g.ThemeColorMap.HEADER_PRIMARY},sectionContent:{margin:10,borderRadius:10,borderWidth:1,borderColor:g.ThemeColorMap.HEADER_PRIMARY,color:g.ThemeColorMap.TEXT_NORMAL,padding:10},addonEdit:{backgroundColor:n,paddingTop:10,paddingBottom:10,borderRadius:20,borderWidth:1,width:80,alignItems:"center",borderColor:n,overflow:"hidden"},addonEditText:{color:o,fontFamily:g.Fonts.PRIMARY_SEMIBOLD},hyperLink:{color:g.ThemeColorMap.TEXT_LINK}}),c=Ct.useWindowDimensions().width,[m,w]=t.useState("Loading description..."),[f,i]=t.useState([]),u=S(d,`_selected_${e}`).toString(),l=e=="plugin"?K():z(),y=l[u];let x=e=="plugin"?Ee(l):we(l),k=e=="plugin"?Boolean(O(u)):Boolean(G(u)),h=x.includes(u);const[E,ee]=t.useState(h),[te,$]=t.useState(k?E?"UPDATE":"REMOVE":"GET"),[_e,tt]=t.useState(void 0);return t.useEffect(()=>{D.get(j(Et(e,u))).then(C=>{let v=JSON.parse(C.text);w(v.description);let N=Object.assign(v.images.map(I=>({url:I,width:1,height:1,type:"image"})),v.videos.map(I=>({url:I,width:null,height:null,type:"video"})));i(N)}).catch(C=>{C.status===404&&w("No description.")});const M=wt();if(u in M[e]){let C=!0;if(M[e][u].ver.includes("~")){let v=M[e][u].ver.split("~"),N=v[0]?v[0]:"0.0",I=v[1]?v[1]:"999.0";pe(N,ye)>=0&&pe(ye,I)>=0&&(C=!1)}C&&tt(M[e][u].text+`

Compatibility: ${M[e][u].ver} (currently on ${ye})`)}},[]),t.createElement(L,{style:r.container},t.createElement(a,{style:r.addonText,label:()=>t.createElement(R,{style:r.addonName},u),leading:e=="plugin"?t.createElement(Be,{width:32,height:32}):t.createElement(Oe,{width:32,height:32}),trailing:t.createElement(Dt,{style:r.addonEdit,onPress:()=>{e=="plugin"?O(u)&&!E?Ae(u,()=>$("GET")):J(u,y.url,()=>{ee(!1),se(e,u),$("REMOVE")}):G(u)&&!E?Pt(u,()=>$("GET")):ie(u,y.url,()=>{ee(!1),se(e,u),$("REMOVE")})}},t.createElement(R,{style:r.addonEditText},te)),subLabel:y.description}),[1].filter(M=>Boolean(_e)).map(M=>t.createElement(t.Fragment,null,t.createElement(R,{style:[r.sectionTitle,{color:"#e74c3c",fontFamily:g.Fonts.PRIMARY_SEMIBOLD}]},"Notice"),t.createElement(R,{style:[r.sectionContent,{borderColor:"#e74c3c"}]},t.createElement(Fe,{content:_e,addonType:e,addonName:u})))),t.createElement(xt,{horizontal:!0,data:f,style:r.previews,renderItem:({index:M,item:C})=>{if(C.type=="image")return t.createElement(xe,{style:{width:C.width,height:C.height,margin:5},source:{uri:C.url},onLoad:({nativeEvent:{source:{width:v,height:N}}})=>{let I=v/N;v=I<1?c*2/5:c*2/3,N=v/I;let B=Object.assign([],f);B[M].width=v,B[M].height=N,i(B)}});if(C.type=="video")return t.createElement(_t,{style:{width:C.width,height:C.height},source:{uri:C.url},controls:!0,paused:!0,onLoad:({naturalSize:{width:v,height:N}})=>{let I=v/N;v=I<1?c*2/5:c*2/3,N=v/I;let B=Object.assign([],f);B[M].width=v,B[M].height=N,i(B)}})},showsHorizontalScrollIndicator:!0}),t.createElement(R,{style:r.sectionTitle},"Description"),t.createElement(R,{style:r.sectionContent},t.createElement(Fe,{content:m,addonType:e,addonName:u})))}function Ue({isSetting:e=!1}){const n=_.createThemedStyleSheet({container:{flex:1,backgroundColor:g.ThemeColorMap.BACKGROUND_PRIMARY}}),o=X.useNavigation(),r=K(),[c,m]=t.useState(""),[w,f]=t.useState(ne().map(i=>i.name));return t.createElement(t.Fragment,null,t.createElement(Ne,{placeholder:"Search plugins",onChangeText:i=>m(i)}),t.createElement(L,{style:n.container},Object.keys(r).sort().filter(i=>i.toLowerCase().includes(c.toLowerCase())).map(i=>t.createElement(a,{label:r[i].version?`${i} - v${r[i].version}`:i,subLabel:r[i].description,leading:w.includes(i)?t.createElement(a.Icon,{source:p.Uninstall}):t.createElement(a.Icon,{source:p.Download}),trailing:a.Arrow,onPress:()=>{b(d,"_selected_plugin",i),e?o.push("EnmityCustomPage",{Navigation:o,pageName:" ",pagePanel:()=>t.createElement(H,{addonType:"plugin"})}):o.navigate("PluginDetail")},onLongPress:()=>{w.includes(i)?Ae(i,()=>{let u=Object.assign([],w);u.splice(u.indexOf(i),1),f(u)}):J(i,r[i].url,()=>{let u=Object.assign([],w);u.push(i),f(u)})}}))))}function je({isSetting:e=!1}){const n=_.createThemedStyleSheet({container:{flex:1,backgroundColor:g.ThemeColorMap.BACKGROUND_PRIMARY}}),o=X.useNavigation(),r=z(),[c,m]=t.useState(""),[w,f]=t.useState(le().map(i=>i.name));return t.createElement(t.Fragment,null,t.createElement(Ne,{placeholder:"Search themes",onChangeText:i=>m(i)}),t.createElement(L,{style:n.container},Object.keys(r).sort().filter(i=>i.toLowerCase().includes(c.toLowerCase())).map(i=>t.createElement(a,{label:r[i].version?`${i} - v${r[i].version}`:i,subLabel:r[i].description,leading:w.includes(i)?t.createElement(a.Icon,{source:p.Uninstall}):t.createElement(a.Icon,{source:p.Download}),trailing:a.Arrow,onPress:()=>{b(d,"_selected_theme",i),e?o.push("EnmityCustomPage",{Navigation:o,pageName:" ",pagePanel:()=>t.createElement(H,{addonType:"theme"})}):o.navigate("ThemeDetail")}}))))}function Ye({isSetting:e=!1}){const n=_.createThemedStyleSheet({container:{flex:1,backgroundColor:g.ThemeColorMap.BACKGROUND_PRIMARY}}),o=X.useNavigation(),r=X.useIsFocused(),c=K(),m=z(),w=Ee(c),f=we(m);let[i,u]=t.useState(w.length?w:["@"]),[l,y]=t.useState(f.length?f:["@"]);const[x,k]=t.useState(Boolean(S(d,"check_updates",!0)));return t.useEffect(()=>{let h=he("plugin"),E=Object.assign([],i.filter($=>!h.includes($)));u(E.length?E:["@"]);let ee=he("theme"),te=Object.assign([],l.filter($=>!ee.includes($)));y(te.length?te:["@"])},[r]),t.createElement(L,{style:n.container},t.createElement(P,{title:"UPDATE"},t.createElement(a,{label:"Check updates on startup",leading:t.createElement(a.Icon,{source:p.Update}),trailing:t.createElement(me,{value:x,onValueChange:h=>{k(h),b(d,"check_updates",h)}})})),t.createElement(P,{title:"PLUGINS"},i.map(h=>h==="@"?t.createElement(a,{label:"No updates are found for plugins"}):t.createElement(a,{label:h&&`${h} - v${O(h).version} -> v${c[h].version}`,subLabel:c[h].description,leading:t.createElement(a.Icon,{source:p.Download}),trailing:a.Arrow,onPress:()=>{b(d,"_selected_plugin",h),e?o.push("EnmityCustomPage",{Navigation:o,pageName:" ",pagePanel:()=>t.createElement(H,{addonType:"plugin"})}):o.navigate("PluginDetail")},onLongPress:()=>{J(h,c[h].url,()=>{se("plugin",h);let E=Object.assign([],i);E.splice(E.indexOf(h),1),u(E.length?E:["@"])})}}))),t.createElement(P,{title:"THEMES"},l.map(h=>h==="@"?t.createElement(a,{label:"No updates are found for themes"}):t.createElement(a,{label:h&&`${h} - v${G(h).version} -> v${m[h].version}`,subLabel:m[h].description,leading:t.createElement(a.Icon,{source:p.Download}),trailing:a.Arrow,onPress:()=>{b(d,"_selected_theme",h),e?o.push("EnmityCustomPage",{Navigation:o,pageName:" ",pagePanel:()=>t.createElement(H,{addonType:"theme"})}):o.navigate("ThemeDetail")},onLongPress:()=>{ie(h,m[h].url,()=>{se("theme",h);let E=Object.assign([],l);E.splice(E.indexOf(h),1),y(E.length?E:["@"])})}}))))}function Ge(){const e=_.createThemedStyleSheet({container:{flex:1,backgroundColor:g.ThemeColorMap.BACKGROUND_PRIMARY},importText:{color:"white",height:40,paddingLeft:15}}),n=K(),o=z(),[r,c]=t.useState({"":{}}),[m,w]=t.useState({"":{}});function f(l){const y=ne().map(E=>E.name),x=le().map(E=>E.name);let k={},h={};l[0].split(";").filter(E=>Object.keys(n).includes(E)).forEach(E=>{k[E]=Object.assign(n[E],{installed:y.includes(E)})}),c(Object.keys(k).length?k:{"":{}}),l[1].split(";").filter(E=>Object.keys(o).includes(E)).forEach(E=>{h[E]=Object.assign(o[E],{installed:x.includes(E)})}),w(Object.keys(h).length?h:{"":{}})}function i(l,y=void 0){let x=l.split("|");if(x.length!=2){let k=y||"Invalid text format. Please make sure that you entered correct text.";return A.open({content:k,source:p.Fail}),!1}else return x}let u;return t.createElement(L,{style:e.container},t.createElement(P,{title:"IMPORT"},t.createElement(a,{style:e.importBackup,label:"Import from backup",subLabel:"Import installed addons from backup that linked to your discord account.",leading:t.createElement(a.Icon,{source:p.Import}),trailing:a.Arrow,onPress:()=>{jt().then(l=>{let y=i(l,"No backup was found.");y&&(f(y),A.open({content:"Successfully imported addons from backup!",source:p.Check}))})}})),t.createElement(P,null,t.createElement($t,{style:e.importText,ref:l=>{u=l},placeholder:"Paste exported text",onSubmitEditing:l=>{let y=i(l.nativeEvent.text);y&&f(y)}}),t.createElement(a,{label:"Clear Input",trailing:a.Arrow,onPress:()=>{u.clear(),c({"":{}}),w({"":{}})}})),t.createElement(P,{title:"PLUGINS"},Object.keys(r).map(l=>r[l].url?t.createElement(a,{label:r[l].version?`${l} - v${r[l].version}`:l,subLabel:r[l].description,leading:r[l].installed?t.createElement(a.Icon,{source:p.Check}):t.createElement(a.Icon,{source:p.Download}),trailing:r[l].installed?void 0:a.Arrow,onPress:()=>{J(l,n[l].url,()=>{let y=Object.assign({},r);y[l].installed=!0,c(y)})}}):t.createElement(a,{label:"There are no imported plugins yet"}))),t.createElement(P,{title:"THEMES"},Object.keys(m).map(l=>m[l].url?t.createElement(a,{label:m[l].version?`${l} - v${m[l].version}`:l,subLabel:m[l].description,leading:m[l].installed?t.createElement(a.Icon,{source:p.Check}):t.createElement(a.Icon,{source:p.Download}),trailing:m[l].installed?void 0:a.Arrow,onPress:()=>{ie(l,o[l].url,()=>{let y=Object.assign({},m);y[l].installed=!0,w(y)})}}):t.createElement(a,{label:"There are no imported themes yet"}))))}const Gt="https://github.com/m4fn3/AddonManager",Ht="https://raw.githubusercontent.com/m4fn3/AddonManager/master/manifest.json",Vt="https://raw.githubusercontent.com/m4fn3/AddonManager/master/dist/AddonManager.js",Kt="https://raw.githubusercontent.com/m4fn3/AddonManager/master/changelogs.json";function He(e,n){window.enmity.plugins.installPlugin(Vt,()=>{oe.show({title:"AddonManager",body:`Updated from ${e} to ${n}!
Do you want to reload Discord now?`,confirmText:"Yes",cancelText:"Later",onConfirm:()=>Yt()})})}function fe(e=!1){D.get(Ht).then(n=>{const o=JSON.parse(n.text),r=O(o.name);o.version.localeCompare(r.version,void 0,{numeric:!0})===1?(e||!e&&S(d,"ignored",null)!=o.version)&&D.get(Kt).then(c=>{const m=JSON.parse(c.text);let w="";m[o.version]&&(w=`

- Changelogs
${m[o.version]}`),oe.show({title:"AddonManager",body:`New version v${o.version} is available!${w}`,confirmText:"Update",cancelText:"Ignore",onConfirm:()=>{b(d,"_updating",!0),He(r.version,o.version)},onCancel:()=>b(d,"ignored",o.version)})}):e?oe.show({title:"AddonManager",body:`You are using latest version v${r.version}!`,confirmText:"OK"}):b(d,"ignored",null)}).catch(n=>{n.status===404&&oe.show({title:"AddonManager",body:"Failed to check for updates. Please check GitHub manually.",confirmText:"GitHub",cancelText:"Close",onConfirm:()=>V.openURL(Gt)})})}function Ve(){const e=_.createThemedStyleSheet({container:{flex:1,backgroundColor:g.ThemeColorMap.BACKGROUND_PRIMARY}}),[n,o]=t.useState(Boolean(S(d,"check_updates_me",!0))),[r,c]=t.useState(Boolean(S(d,"add_to_settings",!0)));return t.createElement(L,{style:e.container},t.createElement(P,{title:"OPTIONS"},t.createElement(a,{label:"Check updates of AddonManager itself on startup",subLabel:"You can also click here to check updates manually",leading:t.createElement(a.Icon,{source:p.Update}),trailing:t.createElement(me,{value:n,onValueChange:m=>{o(m),b(d,"check_updates_me",m)}}),onPress:()=>{fe(!0)}}),t.createElement(a,{label:"Add the AddonManager section to settings",leading:t.createElement(a.Icon,{source:p.Add}),trailing:t.createElement(me,{value:r,onValueChange:m=>{c(m),b(d,"add_to_settings",m)}}),onPress:()=>{fe(!0)}})))}const zt=ge("HelpMessage"),Q=de.createStackNavigator();function be(){return t.createElement(Q.Navigator,{initialRouteName:"Home",headerMode:"screen",screenOptions:{...Mt}},t.createElement(Q.Screen,{name:"Home",component:Ke,options:{headerShown:!1}}),[[Ue,"Plugins"],[je,"Themes"],[De,"Export"],[Ge,"Import"],[Ye,"Update"],[Ve,"Settings"]].map(([e,n])=>t.createElement(Q.Screen,{name:n,component:e})),t.createElement(Q.Screen,{name:"PluginDetail",component:()=>t.createElement(H,{addonType:"plugin"}),options:{title:""}}),t.createElement(Q.Screen,{name:"ThemeDetail",component:()=>t.createElement(H,{addonType:"theme"}),options:{title:""}}))}function Ke({settings:e}){const n=_.createThemedStyleSheet({container:{backgroundColor:g.ThemeColorMap.BACKGROUND_PRIMARY},header:{flexDirection:"row",justifyContent:"center",alignItems:"center"},image:{width:70,height:70,marginTop:20,marginLeft:20},title:{flexDirection:"column"},notice:{marginTop:30,marginLeft:20,marginRight:20},name:{fontSize:30,paddingTop:20,paddingLeft:20,paddingRight:30,color:g.ThemeColorMap.HEADER_PRIMARY},author:{fontSize:15,paddingLeft:50,color:g.ThemeColorMap.HEADER_SECONDARY},info:{height:45,paddingTop:3,paddingBottom:3,justifyContent:"center",alignItems:"center"},footer:{color:g.ThemeColorMap.HEADER_SECONDARY,textAlign:"center",paddingTop:10,paddingBottom:20}}),o=X.useNavigation();return t.useEffect(()=>{D.get(j(pt)).then(r=>{b(d,"compatibility",r.text)})},[]),t.createElement(L,{style:n.container},t.createElement(ce,{style:n.header},t.createElement(xe,{source:{uri:"https://avatars.githubusercontent.com/u/43488869"},style:n.image}),t.createElement(ce,{style:n.title},t.createElement(R,{style:n.name},"AddonManager"),t.createElement(R,{style:n.author},"by mafu"))),S(d,"ignored",null)?t.createElement(ce,{style:n.notice},t.createElement(zt,{messageType:0},t.createElement(R,{style:n.author,onPress:()=>{const r=O(d);He(r.version,S(d,"ignored",null))}},"New version of AddonManager is available! Click here to update."))):t.createElement(t.Fragment,null),t.createElement(P,{title:"STORE"},t.createElement(a,{label:"Browse plugins",leading:t.createElement(Be,{width:24,height:24}),trailing:a.Arrow,onPress:()=>{e?o.push("EnmityCustomPage",{Navigation:o,pageName:"Plugins",pagePanel:()=>t.createElement(Ue,{isSetting:!0})}):o.navigate("Plugins")}}),t.createElement(a,{label:"Browse themes",leading:t.createElement(Oe,{width:24,height:24}),trailing:a.Arrow,onPress:()=>{e?o.push("EnmityCustomPage",{Navigation:o,pageName:"Themes",pagePanel:()=>t.createElement(je,{isSetting:!0})}):o.navigate("Themes")}}),t.createElement(a,{label:"Export addons",leading:t.createElement(a.Icon,{source:p.Export}),trailing:a.Arrow,onPress:()=>{e?o.push("EnmityCustomPage",{Navigation:o,pageName:"Export",pagePanel:De}):o.navigate("Export")}}),t.createElement(a,{label:"Import addons",leading:t.createElement(a.Icon,{source:p.Import}),trailing:a.Arrow,onPress:()=>{e?o.push("EnmityCustomPage",{Navigation:o,pageName:"Import",pagePanel:Ge}):o.navigate("Import")}}),t.createElement(a,{label:"Update addons",leading:t.createElement(a.Icon,{source:p.Update}),trailing:a.Arrow,onPress:()=>{e?o.push("EnmityCustomPage",{Navigation:o,pageName:"Update",pagePanel:()=>t.createElement(Ye,{isSetting:!0})}):o.navigate("Update")}}),t.createElement(a,{label:"Settings",leading:t.createElement(a.Icon,{source:p.Settings}),trailing:a.Arrow,onPress:()=>{e?o.push("EnmityCustomPage",{Navigation:o,pageName:"Settings",pagePanel:()=>t.createElement(Ve,{isSetting:!0})}):o.navigate("Settings")}})),t.createElement(P,{title:"INFORMATION"},t.createElement(a,{label:"Follow me on Twitter",style:n.info,trailing:a.Arrow,leading:t.createElement(a.Icon,{source:p.Twitter}),onPress:()=>{V.openURL("https://twitter.com/m4fn3")}}),t.createElement(a,{label:"Visit my server for help",style:n.info,trailing:a.Arrow,leading:t.createElement(a.Icon,{source:p.Discord}),onPress:()=>{Tt.acceptInviteAndTransitionToInviteChannel({inviteKey:"TrCqPTCrdq",context:{location:"Invite Button Embed"},callback:()=>{o.pop()}})}}),t.createElement(a,{label:"Check Source on GitHub",style:n.info,trailing:a.Arrow,leading:t.createElement(a.Icon,{source:p.GitHub}),onPress:()=>{V.openURL("https://github.com/m4fn3/AddonManager")}})),t.createElement(R,{style:n.footer},`v${Me}`))}var ze;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.Guild=1]="Guild",e[e.DM=2]="DM"})(ze||(ze={}));var ve;(function(e){e[e.Chat=1]="Chat",e[e.User=2]="User",e[e.Message=3]="Message"})(ve||(ve={}));var Xe;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.BuiltInText=1]="BuiltInText",e[e.BuiltInIntegration=2]="BuiltInIntegration",e[e.Bot=3]="Bot",e[e.Placeholder=4]="Placeholder"})(Xe||(Xe={}));var We;(function(e){e[e.Role=1]="Role",e[e.User=2]="User"})(We||(We={}));var Je;(function(e){e[e.SubCommand=1]="SubCommand",e[e.SubCommandGroup=2]="SubCommandGroup",e[e.String=3]="String",e[e.Integer=4]="Integer",e[e.Boolean=5]="Boolean",e[e.User=6]="User",e[e.Channel=7]="Channel",e[e.Role=8]="Role",e[e.Mentionnable=9]="Mentionnable",e[e.Number=10]="Number",e[e.Attachment=11]="Attachment"})(Je||(Je={}));var qe;(function(e){e[e.ApplicationCommand=2]="ApplicationCommand",e[e.MessageComponent=3]="MessageComponent"})(qe||(qe={}));const Qe=de.createStackNavigator();var Xt=({name:e="AddonManager",component:n=ce}={})=>{const o=_.createThemedStyleSheet({container:{backgroundColor:g.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,flex:1},cardStyle:{backgroundColor:g.ThemeColorMap.BACKGROUND_MOBILE_PRIMARY,color:g.ThemeColorMap.TEXT_NORMAL},header:{backgroundColor:g.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,shadowColor:"transparent",elevation:0},headerText:{color:g.ThemeColorMap.HEADER_PRIMARY},headerButton:{color:g.ThemeColorMap.HEADER_PRIMARY}});return t.createElement(at.NavigationContainer,{independent:!0},t.createElement(Qe.Navigator,{initialRouteName:e,style:o.container,screenOptions:{cardOverlayEnabled:!1,cardShadowEnabled:!1,cardStyle:o.cardStyle,headerStyle:o.header,headerTitleAlign:"center",safeAreaInsets:{top:0}}},t.createElement(Qe.Screen,{name:e,component:n,options:{headerTitleStyle:{color:"white"},headerLeft:()=>t.createElement(kt,{color:o.headerButton.color,title:"Close",onPress:()=>ae.pop()}),...de.TransitionPresets.ModalPresentationIOS}})))};function Ze(e,n,o){return window.enmity.utilities.findInReactTree(e,n,o)}const[Wt,Jt,qt,Qt]=bt(re.byName("MessagesConnected",!1),re.byName("MessagesWrapperConnected",!1),re.byProps("openPrivateChannel"),re.byName("UserSettingsOverviewWrapper",!1)),{Platform:{isPad:Se}}=Y("View","Text");let Te=!1;const Zt=T("ic_information_24px"),et="643945264868098049";function Ce(){A.open({content:"nvm. It is the normal behaviour on iPad as of now.",source:Zt}),Te=!0,setTimeout(()=>{qt.openPrivateChannel(et)},100)}const Z=it("AddonManager"),en={...mt,onStart(){const e={id:"addon",name:"addon",displayName:"addon",description:"Open AddonManager",displayDescription:"Open AddonManager",type:ve.Chat,execute:async function(r,c){Se?Ce():ae.push(Xt,{component:be,name:"AddonManager"})}};this.commands=[e];const n=Z.after(Qt,"default",(r,c,m)=>{const w=Ze(m,f=>{var i;return((i=f.type)==null?void 0:i.name)==="UserSettingsOverview"});Z.after(w.type.prototype,"render",({props:{navigation:f}},i,u)=>{const l=Ze(u,y=>y.key==="Enmity");S(d,"add_to_settings",!0)&&l.props.children.push(t.createElement(Bt,null),t.createElement(a,{label:"AddonManager",leading:t.createElement(a.Icon,{source:p.SettingIcon}),trailing:t.createElement(Lt,null),onPress:()=>{Se?(ae.pop(),Ce()):f.push("AddonManager",{navigation:f})}})),n()})});Z.after(rt,"default",(r,c,m)=>({...m,AddonManager:{key:"AddonManager",title:"AddonManager",render:()=>t.createElement(be,null)}}));const o=Wt||Jt;Z.after(o,"default",(r,c,m)=>{var w,f;if(Te&&((f=(w=c[0].channel)==null?void 0:w.recipients)==null?void 0:f.includes(et)))return t.createElement(be,null);Te=!1}),S(d,"check_updates_me",!0)&&(S(d,"_updating",!1)?b(d,"_updating",!1):fe()),["plugin","theme"].forEach(r=>It(r)),yt(),ft(),At()},onStop(){Z.unpatchAll()},getSettingsPanel({settings:e}){return Se&&(ae.pop(),Ce()),t.createElement(Ke,{settings:e})}};nt(en);
