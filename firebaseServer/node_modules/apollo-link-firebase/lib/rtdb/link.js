var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { graphql } from 'graphql-anywhere/lib/async';
import { ApolloLink, Observable } from 'apollo-link';
import { hasDirectives, addTypenameToDocument, getMainDefinition } from 'apollo-utilities';
import queryResolver from './queryResolver';
import mutationResolver from './mutationResolver';
var getResolver = function (operationType) {
    switch (operationType) {
        case 'query':
            return queryResolver;
        case 'mutation':
            return mutationResolver;
        default:
            throw new Error(operationType + " not supported");
    }
};
var RtdbLink = (function (_super) {
    __extends(RtdbLink, _super);
    function RtdbLink(_a) {
        var database = _a.database;
        var _this = _super.call(this) || this;
        _this.database = database;
        return _this;
    }
    RtdbLink.prototype.request = function (operation, forward) {
        var query = operation.query;
        var isRtdbQuery = hasDirectives(['rtdbQuery', 'rtdbUpdate', 'rtdbSet', 'rtdbRemove', 'rtdbPush'], query);
        if (!isRtdbQuery && forward) {
            return forward(operation);
        }
        var queryWithTypename = addTypenameToDocument(query);
        var mainDefinition = getMainDefinition(query);
        var operationType = (mainDefinition || {}).operation || 'query';
        var context = {
            database: this.database,
            findType: function (directives) { return directives.rtdbQuery.type; },
            exportVal: {}
        };
        var rootValue = {};
        return new Observable(function (observer) {
            graphql(getResolver(operationType), queryWithTypename, rootValue, context, operation.variables)
                .then(function (data) {
                observer.next({ data: data });
                observer.complete();
            })
                .catch(function (err) {
                if (err.name === 'AbortError') {
                    return;
                }
                if (err.result && err.result.errors) {
                    observer.next(err.result);
                }
                observer.error(err);
            });
        });
    };
    return RtdbLink;
}(ApolloLink));
export default RtdbLink;
//# sourceMappingURL=link.js.map