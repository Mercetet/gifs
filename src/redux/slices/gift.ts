import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IGift } from '../../types/gif'

interface IInitialState {
    gift: IGift[],
}

// Define the initial state using that type
const initialState: IInitialState = {
    gift: [],
}

const giftSlice = createSlice({
    name: 'giftState',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setGifts: (state, action: PayloadAction<IGift[]>) => {
            state.gift = action.payload;
        },

        resetGifts: (state) => {
            state.gift = [];
        },
    }
})

export const { setGifts, resetGifts } = giftSlice.actions;

export default giftSlice;