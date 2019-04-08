import React, { Component, Fragment } from 'react';
import Input from '../Input';

const defaultState = {
    playerName: "",
    skill: 1,
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
        let value = +e.target.value;
        this.setState({
            skill:value
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
        this.setState(defaultState
            );
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
                        <label className="custom-radio">
                         <Input
                            type="radio"
                            value="1"
                            name="skill"
                            handler={this.handleRadio}
                            required
                        />
                        <img src="http://placehold.it/40x60/aff/fff&text=*" alt="click this for one star skill rating" />
                        </label>
                        <label className="custom-radio">
                         <Input
                            type="radio"
                            value="2"
                            name="skill"
                            handler={this.handleRadio}
                            required
                        />
                        <img src="http://placehold.it/40x60/ffc/fff&text=**" alt="click this for two star skill rating" />
                        </label>
                        <label className="custom-radio">
                         <Input
                            type="radio"
                            value="3"
                            name="skill"
                            handler={this.handleRadio}
                            required
                        />
                        <img src="http://placehold.it/40x60/5CB/fff&text=***" alt="click this for three star skill rating"/>
                        </label>
                    </div>
                    <button className="btn btn-primary">Add Player</button>
                </form>
            </Fragment>
        )
    }
}
export default AddPlayer;