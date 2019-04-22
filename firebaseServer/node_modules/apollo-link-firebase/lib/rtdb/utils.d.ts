import { database as firebaseDatabase } from 'firebase';
import { DirectiveArgs } from './types';
export declare const createQuery: ({ database, directives, exportVal, snapshot }: {
    database: firebaseDatabase.Database;
    directives: DirectiveArgs;
    exportVal?: any;
    snapshot?: firebaseDatabase.DataSnapshot;
}) => firebaseDatabase.Query;
