
import * as React from "react";
import {
  StatusBar,
  View
} from "react-native";
import styles from './styles';
import {DefaultHeader} from '../../components/headers/defaultHeader/defaultHeader';
import { WebView } from 'react-native-webview';

// import {basicHtml2} from '../../common/utils';
const  Browse =(props)=> {
    // const reference = React.useRef(null);
    // const [mainHtml, setMailHtml] = React.useState(basicHtml2())
    
    // React.useEffect(()=>{
    //     let html= basicHtml2();
    //     console.log("html", html);
    //     setMailHtml(html)
    // }, []);

    // const handleWebViewNavigationStateChange = async (newNavState) => {
    //     console.log();
    //     const { url } = newNavState;
    //     if (!url) return;
    //     // if (url?.includes(Config.payment_url + '/#/orderdetails')) {

    //     // }
    //   }

    const INJECT_JS=`document.getElementById('phere').innerHTML="<h2>Changed HTML code using JavaScript using innerHTML!!</h2>"`
    
    const runFirst = `
        function abc(){
            new MetaTraderWebTerminal("webterminal", {
                version: 5,
                server: "MetaQuotes-Demo",
                demoAllServers: true,
                startMode: "create_demo",
                lang: "en",
                mobile: 1,
                colorScheme: "black_on_white"
            });
        }
        abc();
    `;

    const handleWebViewNavigationStateChange = async (newNavState) => {
        // const { url } = newNavState;
        // if (!url) return;
        // if (url?.includes(Config.payment_url + '/#/orderdetails')) {
        //   setWebLink(null);
        //   moveBack();
        // }
      }

    return(
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <DefaultHeader title={'Desktop'}/>
                <View style={{flex:1, backgroundColor:"orange"}}>
                {/* <WebView 
                    originWhitelist={['*']}
                    javaScriptEnabled={true}
                    // mixedContentMode={'always'}
                    style={{flex:1,  margin:10}} 
                    // injectedJavaScript={INJECT_JS}
                    // thirdPartyCookiesEnabled={true}
                    // allowsInlineMediaPlayback={true}
                    // allowUniversalAccessFromFileURLs={true}
                    // allowFileAccess={true}
                    // useWebKit={true}
                    injectedJavaScript={INJECT_JS}
                    // injectJavaScript={}
                    onMessage={(event) => {console.log("event", event)}}
                    // ref={(r) => reference.current = r}
                    onError={(e)=>{
                        console.log('error', e)
                    }}
                    onLoadEnd={()=>{
                        console.log('loadend')
                    }}
                    onNavigationStateChange={(newNavState) => handleWebViewNavigationStateChange(newNavState)}
                    source={{html:`<!DOCTYPE html>
                    <html>
                    <head>
                       <meta charset="UTF-8">
                       <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
                       <title>Web Terminal</title>
                       <script type="text/javascript"></script>
                       <script type="text/javascript">
                        (function(){function g(f,c,e){var d=document.createElement("iframe");d.setAttribute("allowfullscreen","allowfullscreen");d.setAttribute("name",e);d.style.width="100%";d.style.height="100%";d.style.border="none";d.addEventListener("load",function(){d.removeAttribute("name")});d.setAttribute("src",c);f.appendChild(d)}window.MetaTraderWebTerminal=function(f,c){var e=document.getElementById(f);if(e){var d;d="";try{d=document.cookie.match(new RegExp("(?:^|; )"+"_wt_uniq".replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,
                            "\\$1")+"=([^;]*)"))}catch(h){}d=d?decodeURIComponent(d[1]):"";d||(d=window.localStorage?window.localStorage.getItem("_wt_uniq"):void 0,d=d?d:"6418518123745240685");var b=d;try{document.cookie="_wt_uniq="+b+"; path=/;"}catch(k){}window.localStorage&&window.localStorage.setItem("_wt_uniq",b);b=[];Boolean(c.mobile)&&b.push("m=1");var a=c.version;4!=a&&5!=a||b.push("version="+a);(a=c.login)&&b.push("login="+a);(a=c.server)&&b.push("trade_server="+a);(a=c.servers)&&b.push("servers="+a.join(","));a=c.startMode;"open_demo"!==
                            a&&"create_demo"!==a||b.push("startup_mode="+a);Boolean(c.demoAllServers)&&b.push("demo_all_servers=1");Boolean(c.demoAllowPhone)&&b.push("demo_show_phone=1");a=c.language||c.lang;-1!=="en ru de es pt zh ja ar bg fr id ms pl th tr vi ko hi uz uk da hu fa sk hr cs et sr sl nl fi el he it lv lt ro sv mn zt tg".indexOf(a)&&b.push("lang="+a);a=c.colorScheme;"black_on_white"!==a&&"yellow_on_black"!==a&&"green_on_black"!==a||b.push("color_scheme="+a);(a=c.utmCampaign)&&b.push("utm_campaign="+a);(a=c.utmSource)&&
                            b.push("utm_source="+a);!1===c.savePassword&&b.push("save_password=off");(a=c.symbols)&&a.length&&b.push("symbols="+a.join(","));(a=c.demoType)&&b.push("demo_type="+a);(a=c.demoName)&&b.push("demo_name="+a);(a=c.demoFirstName)&&b.push("demo_first_name="+a);(a=c.demoSecondName)&&b.push("demo_second_name="+a);(a=c.demoEmail)&&b.push("demo_email="+a);(a=c.demoLeverage)&&b.push("demo_leverage="+a);g(e,"https://trade.mql5.com/trade"+(b.length?"?"+b.join("&"):""),d)}}})();
                       </script>

                    </head>
                    <body>
                        <div id="phere"></div>
                       <div id="webterminal" style="width:100%;height:600px;"></div>
                       
      
                       </body>
</html>`
                    }} />*/}
                    <WebView source={{ uri: 'https://www.facebook.com' }} />
                </View> 
                
        </View>
    )
        
}

export default Browse;
