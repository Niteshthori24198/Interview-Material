
//The Observer Pattern is a behavioral design pattern that establishes a one-to-many dependency between objects. When one object (the subject) changes its state, all its dependents (the observers) are notified and updated automatically. This pattern is useful when you want to achieve loose coupling between objects, allowing them to interact without knowing each other's details.




// Observer Interface

class Observer {

    update(video) {

        // To be implemented by concrete observers

    }
}

// Concrete Observer - YouTube Subscriber

class YouTubeSubscriber extends Observer {

    constructor(name) {

        super();

        this.name = name;

    }

    update(video) {

        console.log(`${this.name} received a new video: "${video.title}"`);

    }
}


// Subject (Observable) - YouTube Channel

class YouTubeChannel {

    constructor() {

        this.subscribers = [];

    }

    addObserver(observer) {

        this.subscribers.push(observer);

    }

    removeObserver(observer) {

        this.subscribers = this.subscribers.filter((obs) => obs !== observer);

    }

    notifySubscribers(video) {

        this.subscribers.forEach((subscriber) => subscriber.update(video));

    }

    uploadVideo(video) {

        console.log(`Uploaded a new video: "${video.title}"`);

        this.notifySubscribers(video);

    }

}

// Client Code

const youtubeChannel = new YouTubeChannel();

const subscriber1 = new YouTubeSubscriber('Subscriber 1');
const subscriber2 = new YouTubeSubscriber('Subscriber 2');

youtubeChannel.addObserver(subscriber1);
youtubeChannel.addObserver(subscriber2);


const video1 = { title: 'JavaScript Basics' };
const video2 = { title: 'CSS Flexbox Tutorial' };

youtubeChannel.uploadVideo(video1);
youtubeChannel.uploadVideo(video2);
