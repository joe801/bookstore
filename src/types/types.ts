import { SetStateAction } from 'react';

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

export type inputProp = {
    id: string,
    type: string,
    span: string,
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>;
}