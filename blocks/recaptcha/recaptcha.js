import { getConfigValue } from '../../scripts/configs.js';

export default async function decorate(block) {
  getgScript();
  const site_key=await getConfigs('site_key')
  const data_size=await getConfigs('data-size')
  const data_theme=await getConfigs('data-theme')
  const captchadiv = document.createElement('div');
  captchadiv.setAttribute('class','g-recaptcha');
  captchadiv.setAttribute('data-sitekey',site_key);
  captchadiv.setAttribute('data-size',data_size);
  captchadiv.setAttribute('data-theme',data_theme);
  block.appendChild(captchadiv);
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