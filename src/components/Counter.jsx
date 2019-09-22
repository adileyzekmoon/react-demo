import React, {Component} from "react";

class Counter extends Component {
    
    
    state = {
        count: this.props.value,
        tags: []
    }

/*    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
    }*/

    handleClick = () =>{
        console.log('hello')
        this.setState({count: this.state.count+1});
        
    }

    renderTags() {
        if (this.state.tags.length===0){
            return <p>No tags found</p>
        }
        else{
            return this.state.tags.map(tag => <li key={tag}>{tag}</li>);
        }
    }
    
    formatBadge(){
        return this.state.count === 0 ? "Zero" : this.state.count;
    }
    
    badgeClasses(){
        var classes = "badge m-2 badge-";
        classes += this.state.count===0 ? 'danger' : "primary";
        return classes;
    }
    
    render() {
        console.log(this.props);        
        return ( 
            <div className="m-2">
                <ul>
                    {this.renderTags()}
                </ul>
                <h4 className={this.badgeClasses()}>{this.formatBadge()}</h4>
                <button onClick={this.handleClick} className="btn btn-success">+</button>
            </div>
        );
    }
}

export default Counter;