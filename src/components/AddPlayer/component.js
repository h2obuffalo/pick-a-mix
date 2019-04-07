import React, { Component, Fragment } from 'react';
import Input from '../Input';

const defaultState = {
            playerName: "",
            skill: 0,
            address:"",
        };

class AddPlayer extends Component {
    constructor(props){
        super(props);

        this.state = defaultState;

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRadio = this.handleRadio.bind(this);
    }

    handleRadio(e){
        let val = +e.target.value;
        this.setState({
            skill:val
        })
    }

    handleInputChange(e) {
        e.preventDefault();
        const target = e.target;
        const value = target.value;
        const name =  target.name;
        this.setState({
            [name]:value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState(defaultState);
        this.props.handleSave({
            player_name: this.state.playerName,
            skill: this.state.skill,
            address: this.state.address
        })
    }

    render(){
        const {playerName, address} = this.state;
        return(
            <Fragment>
                <form onSubmit={ this.handleSubmit }>
                    <div className="form-group">
                        <Input
                        name="playerName"
                        label="Player name"
                        handler={this.handleInputChange}
                        value={playerName}
                        required
                        />
                        <Input
                        name="address"
                        label=" Address (optional)"
                        handler={this.handleInputChange}
                        value={address}
                        />
                        <label className="skill-radio">
                         <Input
                        type="radio"
                        value="1"
                        name="skill"
                        handler={this.handleRadio}
                        required
                        />
                        <img src="http://placehold.it/40x60/b0f/fff&text=*" />
                        </label>
                       <label className="skill-radio">
                         <Input
                        type="radio"
                        value="2"
                        name="skill"
                        handler={this.handleRadio}
                        required
                        />
                        <img src="http://placehold.it/40x60/b0f/fff&text=**" />
                        </label>
                        <label className="skill-radio">
                         <Input
                        type="radio"
                        value="3"
                        name="skill"
                        handler={this.handleRadio}
                        required
                        />
                        <img src="http://placehold.it/40x60/0bf/fff&text=***" />
                        </label>
                    </div>
                    <button className="btn btn-primary">Submit</button>
                </form>
            </Fragment>
        )
    }
}
export default AddPlayer;