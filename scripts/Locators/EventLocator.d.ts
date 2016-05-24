export = EventLocator;
declare class EventLocator {
    private postbox;
    private cache;
    constructor();
    Publish(value: any, topic: string): void;
    Subscribe(action: (any) => void, target: any, topic: string, initializeWithLatestValue?: boolean): void;
}
