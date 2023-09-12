import { Injectable } from '@angular/core';
import { Filter } from '../models/query.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class QueryFirestoreService {
  
  constructor(private afs: AngularFirestore) {}

  search<T>(
    filters: Filter[],
    orderBy: string,
    limit: number,
    lastVisibleEl: any,
    collection: string
  ) {
    let query = this.afs.collection<T>(collection, (ref: any) => {
      filters.forEach((f) => {
        if (f.type === 'string') {
          ref
            .where(f.keyProp, '>=', f.keyword)
            .where(f.keyProp, '<=', f.keyword + '\uf8ff');
        } else {
          ref.where(f.keyProp, f.type, f.keyword);
        }
      });
      ref.orderBy(orderBy);
      if (lastVisibleEl) {
        ref.startAfter(lastVisibleEl);
      }
      ref.limit(limit);
      return ref;
    });
    return query?.get();
  }
}
