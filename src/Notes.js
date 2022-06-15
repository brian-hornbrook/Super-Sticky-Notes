import React, { Component } from 'react';

export class Notes extends Component {
    state = {
        // test: "My first test!",
        notes: [
            {
                id: 0,
                title: "eat",
                description: "reese peanut butter cups",
                doesMatchSearch: true
            },
            {
                id: 1,
                title: "sleep",
                description: "eight hours",
                doesMatchSearch: true
            },
            {
                id: 2,
                title: "code",
                description: "build an awesome ui",
                doesMatchSearch: true
            }
        ]
    };

    render() {
        return (
            <div>
                <h1>{this.state.test}</h1>
            </div>
        )
    }
}
// export default MyTest;