import { ApolloLink, Observable, FetchResult, Operation, NextLink } from 'apollo-link';
import { database as firebaseDatabase } from 'firebase';
export default class RtdbLink extends ApolloLink {
    private database;
    constructor({database}: {
        database: firebaseDatabase.Database;
    });
    request(operation: Operation, forward?: NextLink): Observable<FetchResult>;
}
