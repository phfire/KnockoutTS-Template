define(["require", "exports", 'knockout'], function (require, exports, ko) {
    "use strict";
    var EventLocator = (function () {
        function EventLocator() {
            this.postbox = new ko.subscribable();
            this.cache = {};
        }
        EventLocator.prototype.Publish = function (value, topic) {
            if (topic) {
                this.cache[topic] = value;
                this.postbox.notifySubscribers(value, topic);
            }
        };
        EventLocator.prototype.Subscribe = function (action, target, topic, initializeWithLatestValue) {
            if (initializeWithLatestValue === void 0) { initializeWithLatestValue = true; }
            if (topic) {
                if (this.cache[topic] && initializeWithLatestValue) {
                    action.call(target, this.cache[topic]);
                }
                this.postbox.subscribe(action, target, topic);
            }
        };
        return EventLocator;
    }());
    return EventLocator;
});
//# sourceMappingURL=EventLocator.js.map