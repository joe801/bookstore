export type bookDetails = {
    id: number,
    title: string,
    author: string,
    genre: string,
    yearWritten: string,
    summary: string,
    hardCopy: boolean,
}

export type bookState =  bookDetails[];