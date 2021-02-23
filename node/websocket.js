global.WebSocket = require('ws')

var ws=new WebSocket("wss://np.51awifi.com/datavsrv/hotarea/auth?access_token=AT_NP_BIZ_E9FE0CD1F43F45D9829DD89F8BFD1560");
ws.onmessage=function(e){
  console.log(e);
};

ws.onopen=function(){
  console.log('--open--');
};