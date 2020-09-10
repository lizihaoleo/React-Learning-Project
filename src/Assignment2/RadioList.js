import React from 'react';
import ColorsBlock from './ColorsBlock'

class RadioList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectColors:["white", "black","red","blue","yellow"]
      };
      this.allColor = ["white", "black","red","blue","yellow"];
    }

    onClick(event){
        var index = this.state.selectColors.indexOf(event.target.value);
        if (index !== -1){
            let filteredArray = this.state.selectColors.filter(item => item !== event.target.value)
            this.setState({selectColors: filteredArray}, () => console.log(this.state.selectColors));
        }
        else{
            console.log("add coloor", event.target.value);
            this.setState({
                selectColors: this.state.selectColors.concat(event.target.value)}, () => console.log(this.state.selectColors)
              )
        }
        
    }
    render(){
        return (
            <div>
            <div className="radio">
                {this.allColor.map((c, idx) => {
                    return (
                    <label key={c}>
                        <input type="radio" value= {c} checked = {this.state.selectColors.includes(c)} onChange={e => {}} onClick= {(event) => this.onClick(event)}/>
                        {c}
                    </label>)
                })}
              
            </div>
            <ColorsBlock colors = {this.state.selectColors}></ColorsBlock>
            </div>
            
        )
    }
}


export default RadioList;