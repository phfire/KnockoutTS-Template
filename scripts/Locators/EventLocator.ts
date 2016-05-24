import ko = require('knockout');

export = EventLocator;

class EventLocator {
    private postbox: KnockoutSubscribable<any>;
    private cache: { [index: string]: any };

    constructor() {
        this.postbox = new ko.subscribable();
        this.cache = {};
    }

    public Publish(value: any, topic: string): void {
        if (topic) {
            this.cache[topic] = value;
            this.postbox.notifySubscribers(value, topic);
        }
    }

    public Subscribe(action: (any) => void, target: any, topic: string, initializeWithLatestValue: boolean = true) {
        if (topic) {
            if (this.cache[topic] && initializeWithLatestValue) {
                action.call(target, this.cache[topic]);
            }

            this.postbox.subscribe(action, target, topic);
        }
    }
}
 