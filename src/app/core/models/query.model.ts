export interface Filter {
    keyword: string | any[] | number | boolean,
    keyProp: string,
    type: 'string' | 'array-contain' |'<=' | '<=' | '>' | '<' | '==' | '!=' | 'array-contains' | 'in' | 'not-in' | 'array-contains-any'
}
