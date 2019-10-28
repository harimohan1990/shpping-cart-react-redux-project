import {PROMO_CODE} from './types';

export const handleChange = e=>dispatch=>({
type : PROMO_CODE,
payload : e.target.value
})