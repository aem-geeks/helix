import { getConfigValue } from './configs.js';

const envid=await getConfigValue('commerce-environment-id');
console.log("------->",envid);