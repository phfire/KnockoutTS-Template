import MainViewModel = require("ViewModels/MainViewModel");
import EventLocator = require("Locators/EventLocator");

export = ServiceLocator;

class ServiceLocator {
    public static MainViewModel: MainViewModel;

    public static EventLocator: EventLocator = new EventLocator();
}