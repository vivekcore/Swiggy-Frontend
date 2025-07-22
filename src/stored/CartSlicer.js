import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
    name: 'cartsslice',
    initialState: {
        items: [],
        items2: [],

        count: 0,
        count2: 0
    },
    reducers: {
        addItems: (state, action) => {
            state.items.push({
                ...action.payload,
                id: action.payload?.card?.info?.id,
                quantity: 1
            });
            state.count++;
        },
        IncrementItems: (state, action) => {
        const element = state.items.find((item) => item.id === action.payload.card?.info?.id);
            if (element) {
                element.quantity += 1;
                state.count++;
            }
        },
        DecrementItems: (state, action) => {
            const element = state.items.find((item) => item.id === action.payload.card?.info?.id);
            if (element) {
                if (element.quantity > 1) {
                    element.quantity -= 1;
                } else {
                    state.items = state.items.filter((item) => item.id !== action.payload.card?.info?.id);
                }
                state.count--;
            }
        },
        addItems2: (state, action) => {
            state.items2.push({
                ...action.payload,
                id: action.payload?.dish?.info?.id || action.payload?.bannerId,
                quantity: 1
            });
            state.count2++;
        },
        IncrementItems2: (state, action) => {
            const element2 = state.items2.find((item) => item.id === (action.payload?.dish?.info?.id || action.payload?.bannerId));
            if (element2) {
                element2.quantity += 1;
                state.count2++;
            }
        },
        DecrementItems2: (state, action) => {
            const element2 = state.items2.find((item) => item.id === (action.payload?.dish?.info?.id || action.payload?.bannerId));

            if (element2) {
                if (element2.quantity > 1) {
                    element2.quantity -= 1;
                } else {
                    state.items2 = state.items2.filter((item) => item.id !== (action.payload?.dish?.info?.id || action.payload?.bannerId));
                }
                state.count2--;
            }
        }
    }
});

export const { addItems, IncrementItems, DecrementItems, addItems2, IncrementItems2, DecrementItems2 } = cart.actions;
export default cart.reducer;