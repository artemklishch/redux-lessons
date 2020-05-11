import React, { Component as Comp } from 'react';
class Clock extends Comp {
    state = {
        timeList: [],
    };
    componentDidMount() {
        this.setState({  
            timeList: this.state.timeList.concat(new Date()),
        });
        this.interval = setInterval(() => {
            this.setState({  
                timeList: this.state.timeList.concat(new Date()),
            });
           
        }, 1000);
    }
    componentWillUnmount(){clearInterval(this.interval)}
    render() {
        return (
            <ul>
                {this.state.timeList.map(time => (
                    <li key={time}>{time.toISOString()}</li>
                ))}
            </ul>
        );
    }
}
export default Clock;