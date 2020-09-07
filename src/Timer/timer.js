import React from 'react';
import Content from './Content';
import './timer.css';

export class Timer extends React.Component{
    constructor(props){
        super (props);
        this.timerRef = React.createRef();
        this.state = {
            hh: (new Date().getHours() % 12).toString().padStart(2,"0"),
            mm: new Date().getMinutes().toString().padStart(2,"0"),
            ss: new Date().getSeconds().toString().padStart(2,"0"),
            suffix: new Date().getHours() > 12 ? "PM" : "AM",
            update:true,
        };
    }

    tick() {
        this.setState({
            hh: (new Date().getHours() % 12).toString().padStart(2,"0"),
            mm: new Date().getMinutes().toString().padStart(2,"0"),
            ss: new Date().getSeconds().toString().padStart(2,"0"),
            suffix: new Date().getHours() > 12 ? "PM" : "AM",
        })
    }


    componentDidMount(){
        this.intervalId = setInterval(
            () => this.tick(), 1000
        );
    }
    
    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    handleClick(){       
        this.setState({update: !this.state.update}, 
            () => this.updateCallback());
        
    }

    handleKeyPress(e){
        if (e.key === 'Enter'){
            this.handleClick();
        }
    }

    updateCallback(){
        if (this.state.update){
            this.intervalId = setInterval(
                () => this.tick(), 1000
            );
        }
        else{
            clearInterval(this.intervalId);
        }
    }

    render() {
        const { hh, mm, ss, suffix } = this.state;
        return (
          <div className="box" > London Clock
              <div className="flexbox-container" 
                onClick={() => this.handleClick()}
                onKeyPress={(e) => this.handleKeyPress(e)}>
                <Content time={hh}></Content>
                <div><p>:</p></div>
                <Content time={mm}></Content>
                <div><p>:</p></div>
                <Content time={ss}></Content>
                <div className="suffix"><p>{suffix}</p></div>
              </div>
          </div>
        );
    }
}

export default Timer;