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
        this.handleRadio = this.handleRadio.bind(this);
    }

    handleRadio(e){
        let val = +e.target.value;
        this.setState({
            playerSkill:val
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
            skill: this.state.playerSkill,
            address: this.state.playerAddress
        })
    }

    render(){
        const {playerName, playerAddress} = this.state;
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
                        <label class="custom-control custom-radio">
                         <Input
                        type="radio"
                        value="1"
                        name="playerSkill"
                        handler={this.handleRadio}
                        required
                        />
                        <span class="custom-control-indicator">*</span>
                        </label>
                       <label class="custom-control custom-radio">
                         <Input
                        type="radio"
                        value="2"
                        name="playerSkill"
                        handler={this.handleRadio}
                        required
                        />
                        <span class="custom-control-indicator">**</span>
                        </label>
                        <label class="custom-control custom-radio">
                         <Input
                        type="radio"
                        value="3"
                        name="playerSkill"
                        handler={this.handleRadio}
                        required
                        />
                        <span class="custom-control-indicator">***</span>
                        </label>
                        <Input
                        name="playerAddress"
                        label=" Address (optional)"
                        handler={this.handleInputChange}
                        value={playerAddress}
                        />
                    </div>
                    <button className="btn btn-primary">Submit</button>
                </form>
            </Fragment>
        )
    }
}
export default AddPlayer;