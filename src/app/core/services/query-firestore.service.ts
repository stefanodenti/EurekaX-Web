import { Injectable } from '@angular/core';
import { Filter } from '../models/query.model';
import { AngularFirestore, QueryFn } from '@angular/fire/compat/firestore';
import { DocumentSnapshot, Query, collection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class QueryFirestoreService {
  constructor(private afs: AngularFirestore) {}

  search<T>(
    filters: Filter[],
    orderBy: string,
    limit: number,
    lastVisibleEl: DocumentSnapshot | null,
    collection: string
  ) {
    let query: any;
    if (filters) {
      query = this.afs
        .collection<T>(collection)
        .ref.where(filters[0].keyProp, filters[0].type, filters[0].keyword);
      filters.forEach((f, index) => {
        if (index > 0) {
          query = query.where(f.keyProp, f.type, f.keyword);
        }
      });
    }
    if (orderBy) {
      query = query.orderBy(orderBy);
    }
    if (lastVisibleEl) {
      query = query.startAfter(lastVisibleEl);
    }
    if (limit) {
      query = query.limit(limit);
    }
    return query.get();
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
