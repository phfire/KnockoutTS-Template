import MainViewModel = require("ViewModels/MainViewModel");
import EventLocator = require("Locators/EventLocator");
export = ServiceLocator;
declare class ServiceLocator {
    static MainViewModel: MainViewModel;
    static EventLocator: EventLocator;
}
