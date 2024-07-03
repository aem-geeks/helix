import { getConfigValue } from '../../scripts/configs.js';

export default async function decorate(block) {
  getgScript();
  getConfigs()
  const captchadiv = document.createElement('div');
  const indiv=document.createElement('div')
  indiv.setAttribute('class','g-recaptcha');
  indiv.setAttribute('data-sitekey','6Lc2fLEbAAAAADmlICdDP4r8obxMsMmOd1j6teuT');
  block.appendChild(indiv);
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
  gscript.setAttribute('async','');
  gscript.setAttribute('defer','');
  document.head.appendChild(gscript);
}