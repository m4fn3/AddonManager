function je(e){window.enmity.plugins.registerPlugin(e)}function O(e){return window.enmity.plugins.getPlugin(e)}function Q(){return window.enmity.plugins.getPlugins()}const g=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const t=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const P=window.enmity.modules.common.Toasts;window.enmity.modules.common.Dialog;const He=window.enmity.modules.common.Token,L=window.enmity.modules.common.REST;window.enmity.modules.common.Settings,window.enmity.modules.common.Users;const K=window.enmity.modules.common.Navigation,Ge=window.enmity.modules.common.NavigationNative,le=window.enmity.modules.common.NavigationStack;window.enmity.modules.common.Theme;const ee=window.enmity.modules.common.Linking,I=window.enmity.modules.common.StyleSheet,pe=window.enmity.modules.common.ColorMap;window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux;const F=window.enmity.modules.common.SVG;window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function Ye(e){return window.enmity.patcher.create(e)}var ye;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.Guild=1]="Guild",e[e.DM=2]="DM"})(ye||(ye={}));var ae;(function(e){e[e.Chat=1]="Chat",e[e.User=2]="User",e[e.Message=3]="Message"})(ae||(ae={}));var fe;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.BuiltInText=1]="BuiltInText",e[e.BuiltInIntegration=2]="BuiltInIntegration",e[e.Bot=3]="Bot",e[e.Placeholder=4]="Placeholder"})(fe||(fe={}));var Se;(function(e){e[e.Role=1]="Role",e[e.User=2]="User"})(Se||(Se={}));var be;(function(e){e[e.SubCommand=1]="SubCommand",e[e.SubCommandGroup=2]="SubCommandGroup",e[e.String=3]="String",e[e.Integer=4]="Integer",e[e.Boolean=5]="Boolean",e[e.User=6]="User",e[e.Channel=7]="Channel",e[e.Role=8]="Role",e[e.Mentionnable=9]="Mentionnable",e[e.Number=10]="Number",e[e.Attachment=11]="Attachment"})(be||(be={}));var ve;(function(e){e[e.ApplicationCommand=2]="ApplicationCommand",e[e.MessageComponent=3]="MessageComponent"})(ve||(ve={}));const{components:a}=window.enmity;a.Alert;const Re=a.Button,Ve=a.FlatList,Ce=a.Image;a.ImageBackground,a.KeyboardAvoidingView,a.Modal,a.Pressable,a.RefreshControl;const $=a.ScrollView;a.SectionList,a.StatusBar,a.StyleSheet,a.Switch;const M=a.Text,Ke=a.TextInput;a.TouchableHighlight;const ze=a.TouchableOpacity;a.TouchableWithoutFeedback,a.Touchable;const ie=a.View;a.VirtualizedList,a.Form,a.FormArrow,a.FormCTA,a.FormCTAButton,a.FormCardSection,a.FormCheckbox,a.FormDivider,a.FormHint,a.FormIcon,a.FormInput,a.FormLabel,a.FormRadio;const r=a.FormRow,A=a.FormSection;a.FormSelect,a.FormSubLabel;const Te=a.FormSwitch;a.FormTernaryCheckBox,a.FormText,a.FormTextColors,a.FormTextSizes;function v(e,n,o){window.enmity.settings.set(e,n,o)}function D(e,n,o){return window.enmity.settings.get(e,n,o)}var h="AddonManager",_e="1.1.0",We="Manage plugins & themes easily!",Je=[{name:"mafu",id:"519760564755365888"}],Xe="#00ffff",qe={name:h,version:_e,description:We,authors:Je,color:Xe};function C(e){return window.enmity.assets.getIDByName(e)}function z(...e){return window.enmity.modules.getByProps(...e)}function Ie(...e){return window.enmity.modules.getByName(...e)}function Ze(...e){return window.enmity.modules.getByKeyword(...e)}window.enmity.modules.common;const Qe=Ie("Icon"),W=Ze("getFocusedRoute"),Me=Ie("StaticSearchBarContainer"),et=z("acceptInviteAndTransitionToInviteChannel"),tt=z("AppState"),nt=z("DRMType","FilterType").default,Ae=z("setString"),u={Copy:C("ic_message_copy"),GitHub:C("img_account_sync_github_white"),Twitter:C("img_account_sync_twitter_white"),Discord:C("Discord"),Update:C("toast_image_saved"),Export:C("ic_reply_24px"),Import:C("ic_leave_stage"),Fail:C("Small"),Download:C("ic_download_24px"),Check:C("ic_check_24px"),Clear:C("ic_input_clear_24px"),Uninstall:C("ic_trash_24px")},J=I.createThemedStyleSheet({cardStyle:{backgroundColor:g.ThemeColorMap.BACKGROUND_MOBILE_PRIMARY,color:g.ThemeColorMap.TEXT_NORMAL},header:{backgroundColor:g.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,shadowColor:"transparent",elevation:0},headerText:{color:g.ThemeColorMap.HEADER_PRIMARY}}),ot={cardStyle:J.cardStyle,headerStyle:J.header,headerTitleContainerStyle:J.headerText,headerTitleStyle:J.headerText,headerBackTitleStyle:J.headerText,headerBackImage:()=>t.createElement(Qe,{source:C("ios-back")}),headerTitleAlign:"center",safeAreaInsets:{top:0}};function U(e,n,o=()=>{}){window.enmity.plugins.installPlugin(n,i=>{i.name===void 0?P.open({content:`Failed to install ${e}`,source:u.Fail}):(P.open({content:`Successfully installed ${e}!`,source:u.Check}),o())})}function ce(e,n=()=>{}){window.enmity.plugins.uninstallPlugin(e,o=>{P.open({content:`Successfully uninstalled ${e}!`,source:u.Check}),n()})}function te(e,n,o=()=>{}){window.enmity.themer.installTheme(n,i=>{P.open({content:`Successfully installed ${e}!`,source:u.Check}),o()})}function rt(e,n=()=>{}){window.enmity.themer.uninstallTheme(e,o=>{P.open({content:`Successfully uninstalled ${e}!`,source:u.Check}),n()})}function j(e){return window.enmity.themer.getThemeByName(e)}function ne(){return window.enmity.themer.listThemes()}function lt(e){try{let n=j(window.enmity.themer.getTheme());return n?n.colours[e]:void 0}catch{return}}function oe(e,n){let o=se("plugin");o.push(n),v(h,`_updated_${e}s`,JSON.stringify(o))}function at(e){v(h,`_updated_${e}s`,"[]")}function se(e){return JSON.parse(D(h,`_updated_${e}s`,"[]").toString())}const H="https://raw.githubusercontent.com/m4fn3/Test/master/",it=H+"plugins.json",ct=H+"themes.json",st=H+"plugins_update.txt",mt=H+"themes_update.txt",dt=H+"compatibility.json";function G(e){return`${e}?${Date.now()}`}function ut(e,n){return`${H}${e}s/${n}.json`}function me(e){try{return JSON.parse(D(h,e,"{}").toString())}catch{return{}}}function Y(){return me("plugins")}function X(){return me("themes")}function ht(){return me("compatibility")}function Ne(){L.get(G(it)).then(e=>{v(h,"plugins",e.text)})}function Pe(){L.get(G(ct)).then(e=>{v(h,"themes",e.text)})}function gt(){L.get(G(st)).then(e=>{let n=e.text,o=D(h,"plugins_ver");o?o!=n&&(v(h,"plugins_ver",n),Ne()):(v(h,"plugins_ver",n),Ne())})}function Et(){L.get(G(mt)).then(e=>{let n=e.text,o=D(h,"themes_ver");o?o!=n&&(v(h,"themes_ver",n),Pe()):(v(h,"themes_ver",n),Pe())})}const De=le.createStackNavigator(),{ThemeColorMap:V}=pe;var ke=({name:e="AddonManager",component:n=ie,detail:o=null}={})=>{const i=I.createThemedStyleSheet({container:{backgroundColor:V.BACKGROUND_MOBILE_SECONDARY,flex:1},cardStyle:{backgroundColor:V.BACKGROUND_MOBILE_PRIMARY,color:V.TEXT_NORMAL},header:{backgroundColor:V.BACKGROUND_MOBILE_SECONDARY,shadowColor:"transparent",elevation:0},headerText:{color:V.HEADER_PRIMARY},headerButton:{color:V.HEADER_PRIMARY}});let E,d;return o&&(d=D(d,"_selected_plugin").toString(),E=O(d)),t.createElement(Ge.NavigationContainer,null,t.createElement(De.Navigator,{initialRouteName:e,style:i.container,screenOptions:{cardOverlayEnabled:!1,cardShadowEnabled:!1,cardStyle:i.cardStyle,headerStyle:i.header,headerTitleContainerStyle:i.headerTitleContainer,headerTitleAlign:"center",safeAreaInsets:{top:0}}},t.createElement(De.Screen,{name:e,component:n,options:{headerTitleStyle:{color:"white"},headerLeft:()=>t.createElement(Re,{color:i.headerButton.color,title:"Close",onPress:()=>K.pop()}),headerRight:()=>o?t.createElement(Re,{color:i.headerButton.color,title:E?"Uninstall":"Install",onPress:()=>{if(E)ce(d,()=>K.pop());else{const b=Y();U(d,b[d].url,()=>K.pop())}}}):t.createElement(t.Fragment,null),...le.TransitionPresets.ModalPresentationIOS}})))};const{ThemeColorMap:xe}=pe;function Be({height:e,width:n,...o}){const i=I.createThemedStyleSheet({icon:{color:xe.INTERACTIVE_NORMAL,opacity:.75,marginLeft:.5}});return t.createElement(F.Svg,{viewBox:"0 0 24 24",style:{height:e,width:n,...i.icon},fill:"currentColor",...o},t.createElement(F.Path,{d:"M0 0h24v24H0z",fill:"none"}),t.createElement(F.Path,{d:"M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"}))}function $e({height:e,width:n,...o}){const i=I.createThemedStyleSheet({icon:{color:xe.INTERACTIVE_NORMAL,opacity:.75,marginLeft:.5}});return t.createElement(F.Svg,{viewBox:"0 0 24 24",style:{height:e,width:n,...i.icon},fill:"currentColor",...o},t.createElement(F.Path,{d:"M0 0h24v24H0z",fill:"none"}),t.createElement(F.Path,{d:"M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"}))}function wt(){const e=I.createThemedStyleSheet({container:{flex:1,backgroundColor:g.ThemeColorMap.BACKGROUND_PRIMARY}}),n=W.useNavigation(),o=Y(),[i,E]=t.useState(""),[d,b]=t.useState(Q().map(l=>l.name));return t.createElement(t.Fragment,null,t.createElement(Me,{placeholder:"Search plugins",onChangeText:l=>E(l)}),t.createElement($,{style:e.container},Object.keys(o).sort().filter(l=>l.toLowerCase().includes(i.toLowerCase())).map(l=>t.createElement(r,{label:o[l].version?`${l} - v${o[l].version}`:l,subLabel:o[l].description,leading:d.includes(l)?t.createElement(r.Icon,{source:u.Uninstall}):t.createElement(r.Icon,{source:u.Download}),trailing:r.Arrow,onPress:()=>{v(h,"_selected_plugin",l),n.navigate("PluginDetail")},onLongPress:()=>{d.includes(l)?ce(l,()=>{let m=Object.assign([],d);m.splice(m.indexOf(l),1),b(m)}):U(l,o[l].url,()=>{let m=Object.assign([],d);m.push(l),b(m)})}}))))}function pt(){const e=I.createThemedStyleSheet({container:{flex:1,backgroundColor:g.ThemeColorMap.BACKGROUND_PRIMARY}}),n=W.useNavigation(),o=X(),[i,E]=t.useState(""),[d,b]=t.useState(ne().map(l=>l.name));return t.createElement(t.Fragment,null,t.createElement(Me,{placeholder:"Search themes",onChangeText:l=>E(l)}),t.createElement($,{style:e.container},Object.keys(o).sort().filter(l=>l.toLowerCase().includes(i.toLowerCase())).map(l=>t.createElement(r,{label:o[l].version?`${l} - v${o[l].version}`:l,subLabel:o[l].description,leading:d.includes(l)?t.createElement(r.Icon,{source:u.Uninstall}):t.createElement(r.Icon,{source:u.Download}),trailing:r.Arrow,onPress:()=>{v(h,"_selected_theme",l),n.navigate("ThemeDetail")}}))))}function yt(){let e=D(h,"check_updates");if(e===void 0)v(h,"check_updates",!1);else if(e){const n=Y(),o=X();let i=ue(n),E=he(o);if(i.length||E.length){let d=i.concat(E).join(", ");P.open({content:`Updates are available for ${d}`,source:u.Download})}}}function de(e,n){return n.localeCompare(e,void 0,{numeric:!0})}function Oe(e,n){return de(e,n)===1}function ue(e){return Q().map(n=>n.name).filter(n=>Object.keys(e).includes(n)&&Object.keys(e[n]).includes("version")&&O(n).version&&Oe(O(n).version,e[n].version))}function he(e){return ne().map(n=>n.name).filter(n=>Object.keys(e).includes(n)&&Object.keys(e[n]).includes("version")&&j(n).version&&Oe(j(n).version,e[n].version))}function ft(){const e=I.createThemedStyleSheet({container:{flex:1,backgroundColor:g.ThemeColorMap.BACKGROUND_PRIMARY}}),n=W.useNavigation(),o=W.useIsFocused(),i=Y(),E=X(),d=ue(i),b=he(E);let[l,m]=t.useState(d.length?d:["@"]),[N,c]=t.useState(b.length?b:["@"]);const[f,k]=t.useState(Boolean(D(h,"check_updates")));return t.useEffect(()=>{let s=se("plugin"),w=Object.assign([],l.filter(x=>!s.includes(x)));m(w.length?w:["@"]);let p=se("theme"),Z=Object.assign([],N.filter(x=>!p.includes(x)));c(Z.length?Z:["@"])},[o]),t.createElement($,{style:e.container},t.createElement(A,{title:"UPDATE"},t.createElement(r,{label:"Check updates on startup",leading:t.createElement(r.Icon,{source:u.Update}),trailing:t.createElement(Te,{value:f,onValueChange:s=>{k(s),v(h,"check_updates",s)}})})),t.createElement(A,{title:"PLUGINS"},l.map(s=>s==="@"?t.createElement(r,{label:"No updates are found for plugins"}):t.createElement(r,{label:s&&`${s} - v${O(s).version} -> v${i[s].version}`,subLabel:i[s].description,leading:t.createElement(r.Icon,{source:u.Download}),trailing:r.Arrow,onPress:()=>{v(h,"_selected_plugin",s),n.navigate("PluginDetail")},onLongPress:()=>{U(s,i[s].url,()=>{oe("plugin",s);let w=Object.assign([],l);w.splice(w.indexOf(s),1),m(w.length?w:["@"])})}}))),t.createElement(A,{title:"THEMES"},N.map(s=>s==="@"?t.createElement(r,{label:"No updates are found for themes"}):t.createElement(r,{label:s&&`${s} - v${j(s).version} -> v${E[s].version}`,subLabel:E[s].description,leading:t.createElement(r.Icon,{source:u.Download}),trailing:r.Arrow,onPress:()=>{v(h,"_selected_theme",s),n.navigate("ThemeDetail")},onLongPress:()=>{te(s,E[s].url,()=>{oe("theme",s);let w=Object.assign([],N);w.splice(w.indexOf(s),1),c(w.length?w:["@"])})}}))))}const St=z("updateNote");async function bt(e){let n=await(await fetch(`https://discord.com/api/v9/users/@me/notes/${e}`,{method:"GET",credentials:"include",headers:{authorization:He.getToken()}})).json();return Object.keys(n).includes("note")?n.note:""}function vt(e,n){St.updateNote(e,n)}function Rt(){const e=I.createThemedStyleSheet({container:{flex:1,backgroundColor:g.ThemeColorMap.BACKGROUND_PRIMARY},importText:{color:"white",height:40,paddingLeft:15}}),n=Y(),o=X(),[i,E]=t.useState({"":{}}),[d,b]=t.useState({"":{}});function l(c){const f=Q().map(p=>p.name),k=ne().map(p=>p.name);let s={},w={};c[0].split(";").filter(p=>Object.keys(n).includes(p)).forEach(p=>{s[p]=Object.assign(n[p],{installed:f.includes(p)})}),E(Object.keys(s).length?s:{"":{}}),c[1].split(";").filter(p=>Object.keys(o).includes(p)).forEach(p=>{w[p]=Object.assign(o[p],{installed:k.includes(p)})}),b(Object.keys(w).length?w:{"":{}})}function m(c,f=void 0){let k=c.split("|");if(k.length!=2){let s=f||"Invalid text format. Please make sure that you entered correct text.";return P.open({content:s,source:u.Fail}),!1}else return k}let N;return t.createElement($,{style:e.container},t.createElement(A,{title:"IMPORT"},t.createElement(r,{style:e.importBackup,label:"Import from backup",subLabel:"Import installed addons from backup that linked to your discord account.",leading:t.createElement(r.Icon,{source:u.Import}),trailing:r.Arrow,onPress:()=>{bt("1048982327809818706").then(c=>{let f=m(c,"No backup was found.");f&&(l(f),P.open({content:"Successfully imported addons from backup!",source:u.Check}))})}})),t.createElement(A,null,t.createElement(Ke,{style:e.importText,ref:c=>{N=c},placeholder:"Paste exported text",onSubmitEditing:c=>{let f=m(c.nativeEvent.text);f&&l(f)}}),t.createElement(r,{label:"Clear Input",trailing:r.Arrow,onPress:()=>{N.clear(),E({"":{}}),b({"":{}})}})),t.createElement(A,{title:"PLUGINS"},Object.keys(i).map(c=>i[c].url?t.createElement(r,{label:i[c].version?`${c} - v${i[c].version}`:c,subLabel:i[c].description,leading:i[c].installed?t.createElement(r.Icon,{source:u.Check}):t.createElement(r.Icon,{source:u.Download}),trailing:i[c].installed?void 0:r.Arrow,onPress:()=>{U(c,n[c].url,()=>{let f=Object.assign({},i);f[c].installed=!0,E(f)})}}):t.createElement(r,{label:"There are no imported plugins yet"}))),t.createElement(A,{title:"THEMES"},Object.keys(d).map(c=>d[c].url?t.createElement(r,{label:d[c].version?`${c} - v${d[c].version}`:c,subLabel:d[c].description,leading:d[c].installed?t.createElement(r.Icon,{source:u.Check}):t.createElement(r.Icon,{source:u.Download}),trailing:d[c].installed?void 0:r.Arrow,onPress:()=>{te(c,o[c].url,()=>{let f=Object.assign({},d);f[c].installed=!0,b(f)})}}):t.createElement(r,{label:"There are no imported themes yet"}))))}function Le(){let e=Q().map(o=>o.name).join(";"),n=ne().map(o=>o.name).join(";");return`${e}|${n}`}function Ct(){const e=I.createThemedStyleSheet({container:{flex:1,backgroundColor:g.ThemeColorMap.BACKGROUND_PRIMARY}}),[n,o]=t.useState(Boolean(D(h,"auto_backup")));return t.createElement($,{style:e.container},t.createElement(A,{title:"EXPORT"},t.createElement(r,{label:"Automatically create backup",subLabel:"Automatically save backup of installed addons. It will be linked with your discord account.",leading:t.createElement(r.Icon,{source:u.Export}),trailing:t.createElement(Te,{value:n,onValueChange:i=>{o(i),v(h,"auto_backup",i)}})})),t.createElement(A,{title:"ADVANCED"},t.createElement(r,{label:"Export addons as text",subLabel:"Export installed addons as text that you can import manually.",leading:t.createElement(r.Icon,{source:u.Copy}),trailing:r.Arrow,onPress:()=>{Ae.setString(Le()),P.open({content:"Copied addon list to clipboard!",source:u.Copy})}})))}const{native:re}=window.enmity,ge=re.version;re.build,re.device,re.version;function Fe({addonType:e}){let n=lt("PRIMARY_DARK_500");const o=I.createThemedStyleSheet({container:{flex:1,backgroundColor:g.ThemeColorMap.BACKGROUND_PRIMARY,padding:10},previews:{marginTop:20,justifyContent:"center"},addonName:{color:g.ThemeColorMap.HEADER_PRIMARY,fontFamily:g.Fonts.PRIMARY_SEMIBOLD,fontSize:20},addonTitle:{borderBottomWidth:1,borderBottomColor:g.ThemeColorMap.HEADER_SECONDARY,paddingBottom:20},sectionTitle:{marginTop:20,marginLeft:20,color:g.ThemeColorMap.HEADER_SECONDARY},sectionContent:{margin:10,borderRadius:10,borderWidth:1,borderColor:g.ThemeColorMap.HEADER_SECONDARY,color:g.ThemeColorMap.HEADER_PRIMARY,padding:10},addonEdit:{backgroundColor:n||g.ThemeColorMap.BACKGROUND_SECONDARY,paddingTop:10,paddingBottom:10,borderRadius:20,borderWidth:1,width:80,alignItems:"center",borderColor:n||g.ThemeColorMap.BACKGROUND_SECONDARY,overflow:"hidden"},addonEditText:{color:g.ThemeColorMap.HEADER_PRIMARY,fontFamily:g.Fonts.PRIMARY_SEMIBOLD},hyperLink:{color:g.ThemeColorMap.TEXT_LINK}}),i=tt.useWindowDimensions().width,[E,d]=t.useState(["Loading description..."]),[b,l]=t.useState([]),m=D(h,`_selected_${e}`).toString(),N=e=="plugin"?Y():X(),c=N[m];let f=e=="plugin"?ue(N):he(N),k=e=="plugin"?Boolean(O(m)):Boolean(j(m)),s=f.includes(m);const[w,p]=t.useState(s),[Z,x]=t.useState(k?w?"UPDATE":"REMOVE":"GET"),[we,Ue]=t.useState(void 0);return t.useEffect(()=>{L.get(G(ut(e,m))).then(S=>{let R=JSON.parse(S.text),T=R.description.replace(/(\bhttps?:\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*)/ig,"<l>$1<l>").split("<l>");d(T);let B=Object.assign(R.images.map(_=>({url:_,width:1,height:1,type:"image"})),R.videos.map(_=>({url:_,width:null,height:null,type:"video"})));l(B)}).catch(S=>{S.status===404&&d(["No description."])});const y=ht();if(m in y[e]){let S=y[e][m].ver.split("~"),R=S[0]?S[0]:"0.0",T=S[1]?S[1]:"999.0";de(R,ge)>=0&&de(ge,T)>=0||Ue(y[e][m].text+`

Compatibility: ${y[e][m].ver} ( currently on ${ge})`)}},[]),t.createElement($,{style:o.container},t.createElement(r,{style:o.addonText,label:()=>t.createElement(M,{style:o.addonName},m),leading:e=="plugin"?t.createElement(Be,{width:32,height:32}):t.createElement($e,{width:32,height:32}),trailing:t.createElement(ze,{style:o.addonEdit,onPress:()=>{e=="plugin"?O(m)&&!w?ce(m,()=>x("GET")):U(m,c.url,()=>{p(!1),oe(e,m),x("REMOVE")}):j(m)&&!w?rt(m,()=>x("GET")):te(m,c.url,()=>{p(!1),oe(e,m),x("REMOVE")})}},t.createElement(M,{style:o.addonEditText},Z)),subLabel:c.description}),[1].filter(y=>Boolean(we)).map(y=>t.createElement(t.Fragment,null,t.createElement(M,{style:[o.sectionTitle,{color:"#e74c3c"}]},"Notice"),t.createElement(M,{style:[o.sectionContent,{borderColor:"#e74c3c"}]},we))),t.createElement(Ve,{horizontal:!0,data:b,style:o.previews,renderItem:({index:y,item:S})=>{if(S.type=="image")return t.createElement(Ce,{style:{width:S.width,height:S.height,margin:5},source:{uri:S.url},onLoad:({nativeEvent:{source:{width:R,height:T}}})=>{let B=R/T;R=B<1?i*2/5:i*2/3,T=R/B;let _=Object.assign([],b);_[y].width=R,_[y].height=T,l(_)}});if(S.type=="video")return t.createElement(nt,{style:{width:S.width,height:S.height},source:{uri:S.url},controls:!0,paused:!0,onLoad:({naturalSize:{width:R,height:T}})=>{let B=R/T;R=B<1?i*2/5:i*2/3,T=R/B;let _=Object.assign([],b);_[y].width=R,_[y].height=T,l(_)}})},showsHorizontalScrollIndicator:!0}),t.createElement(M,{style:o.sectionTitle},"Description"),t.createElement(M,{style:o.sectionContent},E.map(y=>y.startsWith("http")?t.createElement(M,{style:o.hyperLink,onPress:()=>{let S=e=="plugin"?".js":".json";y.endsWith(S)?e=="plugin"?U(m,y):te(m,y):ee.openURL(y)},onLongPress:()=>{Ae.setString(y),P.open({content:"Copied URL to clipboard",source:u.Copy})}},y):t.createElement(M,null,y))))}const q=le.createStackNavigator();function Ee(){return t.createElement(q.Navigator,{initialRouteName:"Home",headerMode:"screen",screenOptions:{...ot}},t.createElement(q.Screen,{name:"Home",component:Tt,options:{headerShown:!1}}),[[wt,"Plugins"],[pt,"Themes"],[Ct,"Export"],[Rt,"Import"],[ft,"Update"]].map(([e,n])=>t.createElement(q.Screen,{name:n,component:e})),t.createElement(q.Screen,{name:"PluginDetail",component:()=>t.createElement(Fe,{addonType:"plugin"}),options:{title:""}}),t.createElement(q.Screen,{name:"ThemeDetail",component:()=>t.createElement(Fe,{addonType:"theme"}),options:{title:""}}))}function Tt(){const e=I.createThemedStyleSheet({container:{backgroundColor:g.ThemeColorMap.BACKGROUND_PRIMARY},header:{flexDirection:"row",justifyContent:"center",alignItems:"center"},image:{width:70,height:70,marginTop:20,marginLeft:20},title:{flexDirection:"column"},name:{fontSize:30,paddingTop:20,paddingLeft:20,paddingRight:30,color:g.ThemeColorMap.HEADER_PRIMARY},author:{fontSize:15,paddingLeft:50,color:g.ThemeColorMap.HEADER_SECONDARY},info:{height:45,paddingTop:3,paddingBottom:3,justifyContent:"center",alignItems:"center"},footer:{color:g.ThemeColorMap.HEADER_SECONDARY,textAlign:"center",paddingTop:10,paddingBottom:20}}),n=W.useNavigation();return t.useEffect(()=>{L.get(G(dt)).then(o=>{v(h,"compatibility",o.text)})},[]),t.createElement($,{style:e.container},t.createElement(ie,{style:e.header},t.createElement(Ce,{source:{uri:"https://avatars.githubusercontent.com/u/43488869"},style:e.image}),t.createElement(ie,{style:e.title},t.createElement(M,{style:e.name},"AddonManager"),t.createElement(M,{style:e.author},"by mafu"))),t.createElement(A,{title:"STORE"},t.createElement(r,{label:"Browse plugins",leading:t.createElement(Be,{width:24,height:24}),trailing:r.Arrow,onPress:()=>{n.navigate("Plugins")}}),t.createElement(r,{label:"Browse themes",leading:t.createElement($e,{width:24,height:24}),trailing:r.Arrow,onPress:()=>{n.navigate("Themes")}}),t.createElement(r,{label:"Export addons",leading:t.createElement(r.Icon,{source:u.Export}),trailing:r.Arrow,onPress:()=>{n.navigate("Export")}}),t.createElement(r,{label:"Import addons",leading:t.createElement(r.Icon,{source:u.Import}),trailing:r.Arrow,onPress:()=>{n.navigate("Import")}}),t.createElement(r,{label:"Update addons",leading:t.createElement(r.Icon,{source:u.Update}),trailing:r.Arrow,onPress:()=>{n.navigate("Update")}})),t.createElement(A,{title:"INFORMATION"},t.createElement(r,{label:"Follow me on Twitter",style:e.info,trailing:r.Arrow,leading:t.createElement(r.Icon,{source:u.Twitter}),onPress:()=>{ee.openURL("https://twitter.com/m4fn3")}}),t.createElement(r,{label:"Visit my server for help",style:e.info,trailing:r.Arrow,leading:t.createElement(r.Icon,{source:u.Discord}),onPress:()=>{et.acceptInviteAndTransitionToInviteChannel({inviteKey:"TrCqPTCrdq",context:{location:"Invite Button Embed"},callback:()=>{n.pop()}})}}),t.createElement(r,{label:"Check Source on GitHub",style:e.info,trailing:r.Arrow,leading:t.createElement(r.Icon,{source:u.GitHub}),onPress:()=>{ee.openURL("https://github.com/m4fn3/AddonManager")}})),t.createElement(M,{style:e.footer},`v${_e}`))}const _t={id:"addon",name:"addon",displayName:"addon",description:"Open AddonManager",displayDescription:"Open AddonManager",type:ae.Chat,execute:async function(e,n){K.push(ke,{component:Ee,name:"AddonManager"})}};ee.addEventListener("url",e=>{let n=e.url;n=decodeURIComponent(n.replace("com.hammerandchisel.discord://",""));try{const o=JSON.parse(n);D(h,"auto_backup")&&typeof o.data=="string"&&["installed_theme","overridden_theme","installed_plugin","overridden_plugin"].includes(o.data)&&vt("1048982327809818706",Le())}catch{return}});const It=Ye("AddonManager"),Mt={...qe,onStart(){this.commands=[_t],["plugin","theme"].forEach(e=>at(e)),setTimeout(()=>K.push(ke,{component:Ee,name:"AddonManager"}),300),gt(),Et(),yt()},onStop(){It.unpatchAll()},getSettingsPanel({settings:e}){return t.createElement(Ee,null)}};je(Mt);
