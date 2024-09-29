// The Observer Pattern defines a one-to-many relationship, where one object (subject) changes its state, and all its dependents (observers) are notified and updated automatically.

// Real-life Example: Consider a YouTube channel (subject). When it posts a new video, all its subscribers (observers) are notified.


interface Observer {
    update(msg: string): void;
}


class Subscriber implements Observer {
    constructor(private name: string) {
        this.name = name
    }
    update(msg: string): void {
        console.log(`Notification for ${msg} sent to : ${this.name}`)
    }
}



class YoutubeChannel {
    private subscribers: Observer[] = []

    subscribe(subscriber: Observer): void {
        this.subscribers.push(subscriber)
    }

    unSubscribe(subscriber: Observer): void {
        this.subscribers = this.subscribers.filter((sub) => sub != subscriber)
    }


    notifySubscriber(msg: string): void {
        this.subscribers.forEach((sub) => sub.update(msg))
    }

    postVideo(videoTitle: string): void {
        this.notifySubscriber(`New video on ${videoTitle} is out`)
    }
}



const john = new Subscriber("John");
const jack = new Subscriber("Jack");

const channel = new YoutubeChannel();

channel.subscribe(jack)
channel.subscribe(john)

channel.postVideo("World Cup Schedule")
