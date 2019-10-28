import { combineReducers } from 'redux'

import promocodeReducer from './PromocodeReducer';

export default combineReducers({

    PromoCode : promocodeReducer
});