define(["require", "exports", "knockout", "ViewModels/MainViewModel", "Locators/ServiceLocator"], function (require, exports, ko, MainViewModel, ServiceLocator) {
    "use strict";
    ServiceLocator.MainViewModel = new MainViewModel();
    ko.applyBindings(ServiceLocator.MainViewModel);
});
//# sourceMappingURL=main.js.map