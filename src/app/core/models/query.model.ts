import { WhereFilterOp } from "@angular/fire/firestore";

export interface Filter {
    keyword: string | any[] | number | boolean,
    keyProp: string,
    type: WhereFilterOp
}
