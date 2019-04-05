import React, { Component, Fragment } from 'react';
import Input from '../Input';

const defaultState = {
            playerName: "",
            playerSkill: "",
            playerAddress:""
        };

class AddPlayer extends Component {
    constructor(props){
        super(props);

        this.state = defaultState;

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
            skill: this.state.playerSkill,
            address: this.state.playerAddress
        })
    }

    render(){
        const {playerName, playerSkill, playerAddress} = this.state;
        return(
            <Fragment>
                <form onSubmit={ this.handleSubmit }>
                    <div className="form-group">
                        <Input
                        name="playerName"
                        label="Player name"
                        handler={this.handleInputChange}
                        value={playerName}
                        />
                        <Input
                        name="playerSkill"
                        label="Player Skill level"
                        handler={this.handleInputChange}
                        value={playerSkill}
                        />
                        <Input
                        name="playerAddress"
                        label="Adress (optional)"
                        handler={this.handleInputChange}
                        value={playerAddress}
                        />
                    </div>
                    <button className="btn btn-primary">Save</button>
                </form>
            </Fragment>
        )
    }
}
export default AddPlayer;