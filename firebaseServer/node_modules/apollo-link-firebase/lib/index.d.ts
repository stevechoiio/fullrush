import { ApolloLink } from 'apollo-link';
import { database as firebaseDatabase } from 'firebase';
export declare const createRtdbLink: ({ database }: {
    database: firebaseDatabase.Database;
}) => ApolloLink;
