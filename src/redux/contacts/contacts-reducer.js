import { createReducer } from '@reduxjs/toolkit'
import actions from './contacts-actions';

const contactsReducer = createReducer([], {
    [actions.add]: (state, {payload}) => {
        state.push(payload)
    },
    [actions.remove]: (state, {payload}) => state.filter(item => item.id !== payload)
})

export default contactsReducer;