import { Component } from "react";

class Input extends Component {
  state = {
    textMessage: "",
  };

  onChange(e) {
    this.setState({ textMessage: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ textMessage: "" });
    this.props.onSendMessage(this.state.textMessage);
  }

  render() {
    return (
      <div className="inputs">
        <form className="formInputs" onSubmit={(e) => this.onSubmit(e)}>
          <input
            className="inputText"
            onChange={(e) => this.onChange(e)}
            value={this.state.textMessage}
            type="text"
            placeholder="Upiši poruku..."
            autoFocus={true}
          />
          <button type="submit" className="btn">
            Klik
          </button>
        </form>
      </div>
    );
  }
}

export default Input;
/*import React, { useState } from "react";

const NewUser = (props) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    setText("");
    props.onSendMessage(setText);
  };

  return (
    <div className="inputs">
      <form className="formInputs" onSubmit={handleSubmit}>
        <input
          className="inputText"
          onChange={(e) => setText(e.target.value)}
          value={text}
          type="text"
          placeholder="Upiši poruku..."
          autoFocus={true} //pr
        />
        <button type="submit" className="btn">
          Klik
        </button>
      </form>
    </div>
  );
};
export default NewUser;*/
