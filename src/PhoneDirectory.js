import React, { Component } from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';

class PhoneDirectory extends Component {
    constructor() {
        super();
     
        this.state = {
           subscribersList: []
        };
    }

    addSubscriberHandler = (newSubscriber) => {
        let subscribersList = this.state.subscribersList;
        if (subscribersList.length > 0) {
            newSubscriber.id = subscribersList[subscribersList.length - 1].id + 1;
        } else {
          newSubscriber.id = 1;
        }
        subscribersList.push(newSubscriber);
        this.setState({ subscribersList: subscribersList });
        console.log(this.state.subscribersList);
    }
    
    render() {
        const subscribersList = this.state.subscribersList;
        return (
            // <AddSubscriber addSubscriberHandler={this.addSubscriberHandler.bind(this)} />
            <ShowSubscribers subscribersList={subscribersList} />
        )
    }
}

export default PhoneDirectory;