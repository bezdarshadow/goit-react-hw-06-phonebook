import { createAction, nanoid } from "@reduxjs/toolkit";

const add = createAction('contacts/add', data => {
    const newContact = {
        ...data,
        id: nanoid()
    }
    return {payload: newContact}
});

const remove = createAction('contacts/remove');

const actions = {
    add,
    remove,
}

export default actions;