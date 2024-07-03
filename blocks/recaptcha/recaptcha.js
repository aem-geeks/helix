import { getConfigValue } from '../../scripts/configs.js';

export default function decorate(block) {
  getgScript();
  getConfigs()
  const captchadiv = document.createElement('div');
  captchadiv.setAttribute('class','g-recaptcha');
  captchadiv.setAttribute('data-sitekey','6LffTL4hAAAAAMeqRXeWCEJs21SnNUVLZqsuDA4w');
  document.createElement('/br');
  

}


async function getConfigs() {

  const envid=await getConfigValue('env');
  const sitekey=await getConfigValue('site_key');
  const sitesecret=await getConfigValue('site_secret');
  console.log("---ReCaptcha----> {} | {} | {} ",envid,sitekey,sitesecret);
}

async function getgScript(){
  const gscript = document.createElement('script');
  gscript.setAttribute('src','https://www.google.com/recaptcha/api.js');
  gscript.setAttribute('async');
  gscript.setAttribute('defer');
  document.head.appendChild(gscript);
}