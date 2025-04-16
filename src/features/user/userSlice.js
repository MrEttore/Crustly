import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getAddress } from '../../services/apiGeocoding';

function getPosition() {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

const initialState = {
    username: '',
    status: 'idle',
    position: {},
    address: '',
    error: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateName(state, action) {
            state.username = action.payload;
        },
    },

    // 2. Add the thunk to extraReducers and implement its different request outcomes.
    extraReducers: (builder) =>
        builder
            .addCase(fetchAddress.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchAddress.fulfilled, (state, action) => {
                state.position = action.payload.position;
                state.address = action.payload.address;
                state.status = 'idle';
            })
            .addCase(fetchAddress.rejected, (state, action) => {
                state.status = 'error';
                state.error =
                    'There was a problem getting your address. Make sure you have location services enabled.';
            }),
});

export const { updateName } = userSlice.actions;

export default userSlice.reducer;

// THUNKS

// 1. Write thunk action creator.
export const fetchAddress = createAsyncThunk(
    'user/fetchAddress',
    async function () {
        const positionObj = await getPosition();
        const position = {
            latitude: positionObj.coords.latitude,
            longitude: positionObj.coords.longitude,
        };

        const addressObj = await getAddress(position);
        const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

        return { position, address };
    },
);

// REUSABLE SELECTORS:

export const getUsername = (state) => state.user.username;
