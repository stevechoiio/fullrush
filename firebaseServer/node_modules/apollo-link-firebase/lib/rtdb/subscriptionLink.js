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
import { ApolloLink, Observable } from 'apollo-link';
import { hasDirectives, addTypenameToDocument, getMainDefinition, getDirectiveInfoFromField } from 'apollo-utilities';
import { graphql } from 'graphql-anywhere/lib/async';
import { createQuery } from './utils';
import queryResolver from './queryResolver';
var RtdbSubLink = (function (_super) {
    __extends(RtdbSubLink, _super);
    function RtdbSubLink(_a) {
        var database = _a.database;
        var _this = _super.call(this) || this;
        _this.database = database;
        return _this;
    }
    RtdbSubLink.prototype.request = function (operation, forward) {
        var _this = this;
        var query = operation.query;
        var isRtdbQuery = hasDirectives(['rtdbSub'], query);
        if (!isRtdbQuery && forward) {
            return forward(operation);
        }
        var queryWithTypename = addTypenameToDocument(query);
        var mainDefinition = getMainDefinition(query);
        var context = {
            database: this.database,
            findType: function (fieldDirectives) {
                return (fieldDirectives.rtdbSub && fieldDirectives.rtdbSub.type) ||
                    (fieldDirectives.rtdbQuery && fieldDirectives.rtdbQuery.type);
            },
            exportVal: {}
        };
        var onlyRootField = mainDefinition.selectionSet.selections[0];
        var directives = getDirectiveInfoFromField(onlyRootField, operation.variables);
        var rtdbDirectives = directives.rtdbSub;
        return new Observable(function (observer) {
            var subQuery = createQuery({
                database: _this.database,
                directives: rtdbDirectives
            });
            var event = rtdbDirectives.event;
            var callback = function (snapshot) {
                var root = { rootSnapshot: snapshot };
                graphql(queryResolver, queryWithTypename, root, context, operation.variables)
                    .then(function (data) {
                    observer.next({ data: data });
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
            };
            subQuery.on(event, callback);
            return function () { return subQuery.off(event, callback); };
        });
    };
    return RtdbSubLink;
}(ApolloLink));
export default RtdbSubLink;
//# sourceMappingURL=subscriptionLink.js.map