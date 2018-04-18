import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Grid, Col, Row, ButtonToolbar, Button } from 'react-bootstrap'

import Moment from 'react-moment'

class Tick extends Component {
    constructor(props){
        super(props);
        this.timer = 0
        this.org = new Date()
        this.state = {
            time: new Date()
        };
    }
      componentWillMount(){
        // set up timer
        /*this.timer = setTimeout(() => {
            this.setState({
                time: new Date()
            });
            this.componentWillMount();
        }, Math.floor(Date.now() / 1000) * 1000 + 1000 - Date.now());*/
    }
    componentWillUnmount(){
        // remove timer
      //clearTimeout(this.timer);
    }

    render() {
        // render the current time
        //return this.state.time.toLocaleTimeString();
      //return Math.round(this.org - this.time)
        return (
          <div>
            <Moment format="mm:ss" onChange={(val) => { console.log(val); }}>
            </Moment>
            ******

            <Moment diff={ this.org } unit="seconds"></Moment>
          </div>
        )
      return (
            <Moment interval={3}>
                1976-04-19T12:59-0500
            </Moment>
        );
    }

}


export default Tick


