// GA smart-loader for zelda.ifq.ai (shares the ifq.ai GA4 property).
// Strategy, in order:
//   1) Skip entirely for bot / AI-agent UAs — analytics shouldn't profile crawlers.
//   2) Defer until the page is idle so it never competes with first paint.
//   3) Try ga-proxy.ifq.ai first (CN-friendly reverse proxy) and route collection through it.
//   4) Fall back to googletagmanager.com after a 2.2s timeout or proxy onerror.
// Kept as a string so it can be inlined into a <script> tag in the layout.

export const GA_ID = "G-LZHQKD4CN0";
export const GA_PROXY = "https://ga-proxy.ifq.ai";
export const GA_DIRECT = "https://www.googletagmanager.com";

export const GA_SCRIPT = `(function(){
  var ua=(navigator&&navigator.userAgent)||'';
  if(/bot|crawl|spider|slurp|baiduspider|bytespider|gptbot|chatgpt-user|oai-searchbot|claude|anthropic|google-extended|perplexity|applebot|yandex|duckduckbot|petalbot|ccbot|amazonbot|meta-external|cohere|diffbot|ai2bot|mistral/i.test(ua))return;

  var GA_ID='${GA_ID}';
  var PROXY='${GA_PROXY}';
  var DIRECT='${GA_DIRECT}';
  var TIMEOUT=2200;

  window.dataLayer=window.dataLayer||[];
  function gtag(){dataLayer.push(arguments);}
  window.gtag=gtag;
  gtag('js',new Date());

  var loaded=false;
  function loadScript(src,onOk,onFail){
    var s=document.createElement('script');
    s.async=true;s.src=src;
    if(onOk)s.onload=function(){if(!loaded){loaded=true;onOk();}};
    if(onFail)s.onerror=onFail;
    document.head.appendChild(s);
    return s;
  }

  function configGA(transportUrl){
    var cfg={cookie_domain:'ifq.ai',anonymize_ip:true};
    if(transportUrl)cfg.transport_url=transportUrl;
    gtag('config',GA_ID,cfg);
  }

  function boot(){
    var timer=setTimeout(function(){
      if(loaded)return;
      loadScript(DIRECT+'/gtag/js?id='+GA_ID,function(){configGA();});
    },TIMEOUT);

    loadScript(PROXY+'/gtag/js?id='+GA_ID,function(){
      clearTimeout(timer);
      configGA(PROXY);
    },function(){
      clearTimeout(timer);
      if(loaded)return;
      loadScript(DIRECT+'/gtag/js?id='+GA_ID,function(){configGA();});
    });
  }

  function schedule(){
    if('requestIdleCallback' in window){requestIdleCallback(boot,{timeout:3000});}
    else{setTimeout(boot,1200);}
  }
  if(document.readyState==='complete'){schedule();}
  else{window.addEventListener('load',schedule,{once:true});}
})();`;
