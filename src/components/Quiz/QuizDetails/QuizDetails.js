import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuizTitle from './QuizTitle/QuizTitle';
import QuizDescription from './QuizDescription/QuizDescription';
import Button from './Button/Button';
import Questions from './Questions/Questions';

class QuizDetails extends Component {
    render() {
        const {data, toNextStep} = this.props;

        return (
            <div>
                <QuizTitle stepTitle={data.title}/>
                <QuizDescription stepDesc={data.desc}/>
                <Button
                    buttonData={data.button}
                    toNextStep={toNextStep}
                />
                <Questions
                    stepQuestions={data.questions}
                    toNextStep={toNextStep}
                />
            </div>
        );
    }
}

QuizDetails.PropTypes = {
    data: PropTypes.obj,
    toNextStep: PropTypes.func
};

export default QuizDetails;