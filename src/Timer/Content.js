import React from "react";

export class Content extends React.Component {
    state = {
        editMode: false,
        time: ""
    };

    componentDidMount(){
        this.setState({
            time: this.props.time,
        })
    }
    
    
    handleKeyDown(event){
        // console.log(event,event.key === 'Enter');
        if (event.key === 'Enter'){
            this.setState({
                editMode: false,
            })
        } 
    }
    
    render() {
        const {editMode} = this.state;
        return (
            <div> 
              {editMode? (
                    <p>
                        <input
                        autoFocus
                        defaultValue={this.props.time}
                        onKeyPress={e => this.handleKeyDown(e)}
                    />
                    </p>
              ) : (
                    <p onClick={() => this.setState({ editMode: true })}>{this.props.time}</p>
              )}
            </div>
          );
    }
}

export default Content;