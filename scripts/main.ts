import $ = require("jquery");
import ko = require("knockout");
import MainViewModel = require("ViewModels/MainViewModel");
import ServiceLocator = require("Locators/ServiceLocator");

ServiceLocator.MainViewModel = new MainViewModel();

ko.applyBindings(ServiceLocator.MainViewModel);

