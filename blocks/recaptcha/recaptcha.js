import { getConfigValue } from '.scripts/configs.js';

export default function decorate(block) {
  const envid= getConfigValue('env');
  const sitekey= getConfigValue('site_key');
  const sitesecret= getConfigValue('site_secret');
  console.log("---Recaptcha----> {} | {} | {} ",envid,sitekey,sitesecret);

}


async function getConfigs() {

  const envid=await getConfigValue('env');
  const sitekey=await getConfigValue('site_key');
  const sitesecret=await getConfigValue('site_secret');
  console.log("-------> {} | {} | {} ",envid,sitekey,sitesecret);
}