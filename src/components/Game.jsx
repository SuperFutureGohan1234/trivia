import React, { Component } from "react";
import Answers from "./Answers.jsx";
import Question from "./Question.jsx";
import "../css/Game.css";

// import components

class Game extends Component {
	render() {
		return (
			<div className="Game">
				<Question text={this.props.currentQuestion.question_text} />
				<Answers
					correctAnswer={this.props.currentQuestion.correct_choice_index}
					answerList={this.props.currentQuestion.choices}
				/>
			</div>
		);
	}
}
export default Game;
