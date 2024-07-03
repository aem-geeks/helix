import { getConfigValue } from '../../scripts/configs.js';

export default async function decorate(block) {
  getgScript();
  const site_key=await getConfigs('site_key')
  const captchadiv = document.createElement('div');
  const indiv=document.createElement('div')
  indiv.setAttribute('class','g-recaptcha');
  indiv.setAttribute('data-sitekey',site_key);
  block.appendChild(indiv);
}


async function getConfigs(key) {
  const envid=await getConfigValue('env');
  const sitekey=await getConfigValue(key);
  const sitesecret=await getConfigValue('site_secret');
  console.log("---ReCaptcha----> {} | {} | {} ",envid,sitekey,sitesecret);
  return sitekey;
}

async function getgScript(){
  const gscript = document.createElement('script');
  gscript.setAttribute('src','https://www.google.com/recaptcha/api.js');
  gscript.setAttribute('async','');
  gscript.setAttribute('defer','');
  document.head.appendChild(gscript);
}