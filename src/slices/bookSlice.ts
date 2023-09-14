import { createSlice } from "@reduxjs/toolkit";
import { bookState } from "../types/types";
import { initialBooks } from "../utilities";

type initialBookState = {
    books: bookState
}

const initialState: initialBookState = {
    books: initialBooks,
}

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {}
})

export default bookSlice.reducer;