import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { bookDetails, bookState } from "../types/types";
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
    reducers: {
        add_book: (state, action: PayloadAction<bookDetails>) => {
            state.books.push(action.payload);
        }
    }
})

export const { add_book } = bookSlice.actions;
export default bookSlice.reducer;