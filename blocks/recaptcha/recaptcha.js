import { getConfigValue } from '../../scripts/configs.js';

export default function decorate(block) {
  getConfigs();

}


async function getConfigs() {

  const envid=await getConfigValue('env');
  const sitekey=await getConfigValue('site_key');
  const sitesecret=await getConfigValue('site_secret');
  console.log("---ReCaptcha----> {} | {} | {} ",envid,sitekey,sitesecret);
}