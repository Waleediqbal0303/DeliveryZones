import React from "react";



export const basicHtml=()=>{
    let txt = '<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">';
    txt= txt+'<title>Web Terminal</title></head><body><div id="webterminal" style="width:100%;height:600px;"></div><script type="text/javascript" src="https://trade.mql5.com/trade/widget.js"></script>';
    txt= txt+'<script type="text/javascript">new MetaTraderWebTerminal("webterminal", {version: 5,server: "MetaQuotes-Demo",demoAllServers: true,';
    txt= txt+' startMode: "create_demo",lang: "en",mobile: 1, colorScheme: "black_on_white"});</script>';
    txt= txt+'</body></html>';
    return txt;
}


export const basicHtml2=()=>{
    let txt='<!DOCTYPE html>';
    txt= txt+'<html>'
    txt= txt+'<head>'
    txt= txt+'<meta charset="UTF-8">'
    txt= txt+'<meta name="viewport" content="width=device-'
    txt= txt+'width, initial-scale=1.0, minimum-scale=1.0">'

    txt= txt+'<title>Web Terminal</title>'
    txt= txt+'</head>'
    txt= txt+'<body>'
    txt= txt+'<div id="webterminal" '
    txt= txt+'style="width:100%;height:600px;"></div>'
    txt= txt+'<script type="text/javascript" '
    txt= txt+'src="https://trade.mql5.com/trade/widget.js">'
    txt= txt+'</script>'
    txt= txt+'<script type="text/javascript">'
    txt= txt+'new MetaTraderWebTerminal("webterminal", {'
    txt= txt+'version: 5,'
    txt= txt+'server: "MetaQuotes-Demo",'
    txt= txt+'demoAllServers: true,'
    txt= txt+'startMode: "create_demo",'
    txt= txt+'lang: "en",'
    txt= txt+'mobile: 1,'
    txt= txt+'colorScheme: "black_on_white"'
    txt= txt+'});'
    txt= txt+'</script>'
    txt= txt+'</body>'
    txt= txt+'</html>'
    return txt;
}
