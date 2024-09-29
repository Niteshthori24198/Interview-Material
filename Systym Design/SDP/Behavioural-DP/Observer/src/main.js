"use strict";
// The Observer Pattern defines a one-to-many relationship, where one object (subject) changes its state, and all its dependents (observers) are notified and updated automatically.
class Subscriber {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    update(msg) {
        console.log(`Notification for ${msg} sent to : ${this.name}`);
    }
}
class YoutubeChannel {
    constructor() {
        this.subscribers = [];
    }
    subscribe(subscriber) {
        this.subscribers.push(subscriber);
    }
    unSubscribe(subscriber) {
        this.subscribers = this.subscribers.filter((sub) => sub != subscriber);
    }
    notifySubscriber(msg) {
        this.subscribers.forEach((sub) => sub.update(msg));
    }
    postVideo(videoTitle) {
        this.notifySubscriber(`New video on ${videoTitle} is out`);
    }
}
const john = new Subscriber("John");
const jack = new Subscriber("Jack");
const channel = new YoutubeChannel();
channel.subscribe(jack);
channel.subscribe(john);
channel.postVideo("World Cup Schedule");
