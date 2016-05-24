define(["require", "exports", "Locators/EventLocator"], function (require, exports, EventLocator) {
    "use strict";
    var ServiceLocator = (function () {
        function ServiceLocator() {
        }
        ServiceLocator.EventLocator = new EventLocator();
        return ServiceLocator;
    }());
    return ServiceLocator;
});
//# sourceMappingURL=ServiceLocator.js.map