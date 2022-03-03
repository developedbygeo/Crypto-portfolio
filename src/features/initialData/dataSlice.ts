import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import { GeneralFetchedObject } from '../../shared/models/data.model';

type CoinState = {
    data: GeneralFetchedObject[] | unknown;
    status: 'idle' | 'loading' | 'success' | 'error';
};

const initialState = {
    data: [],
    status: 'idle',
} as CoinState;

export const getInitialData = createAsyncThunk('data/getData', async (_, thunkApi) => {
    const response = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=24h',
    );
    if (response.status !== 200) {
        return thunkApi.rejectWithValue({
            message: 'Failed to fetch',
        });
    }
    const fetchedData = await response.json();
    if (fetchedData.length > 1) {
        return fetchedData;
    } else {
        return thunkApi.rejectWithValue({
            message: 'Invalid fetched data',
        });
    }
});

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        addData(state, action: PayloadAction<GeneralFetchedObject[]>) {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getInitialData.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(getInitialData.fulfilled, (state, action) => {
            state.status = 'success';
            state.data = action.payload;
        });
        builder.addCase(getInitialData.rejected, (state) => {
            state.status = 'error';
        });
    },
});

export default dataSlice.reducer;
