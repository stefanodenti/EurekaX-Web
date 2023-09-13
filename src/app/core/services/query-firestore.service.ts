import { Injectable } from '@angular/core';
import { Filter } from '../models/query.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { collection } from '@angular/fire/firestore';

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
      if (lastVisibleEl) {
        ref.orderBy(orderBy).startAfter(lastVisibleEl).limit(limit);
      } else {
        ref.orderBy(orderBy).limit(limit);
      }
      return ref;
    });
    return query?.get();
  }

  create<T>(object: any, collection: string) {
    return this.afs.collection<T>(collection).add(object);
  }
  update<T>(id: string, object: any, collection: string) {
    return this.afs.collection<T>(collection).doc(id).update(object);
  }
  delete<T>(id: string, collection: string) {
    return this.afs.collection<T>(collection).doc(id).delete();
  }
}
