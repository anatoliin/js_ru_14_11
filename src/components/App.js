import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import Select from 'react-select'
import Chart from './Chart'
import 'react-select/dist/react-select.css'
import DayPicker, { DateUtils } from "react-day-picker"
import "react-day-picker/lib/style.css"
import moment from 'moment'

class App extends Component {

    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
    }

    handleDayClick(e, day) {
        const range = DateUtils.addDayToRange(day, this.state.range);
        this.setState({range:range});
    }
    handleResetClick(e) {
        e.preventDefault();
        this.setState({
            range: {
                from: null,
                to: null
            }
        });
    }
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    state = {
        range: {
            from: null,
            to: null,
        },
        selected: null
    }

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        const { from, to } = this.state.range
        return (
            <div>
                <Chart />
                <ArticleList articles={this.props.articles} />
                <Select options = {options} value = {this.state.selected} onChange = {this.handleChange} multi = {true}/>
                { !from && !to && <p>Please select the <strong>first day</strong>.</p> }
                { from && !to && <p>Please select the <strong>last day</strong>.</p> }
                { from && to &&
                <p>
                    You chose from { moment(from).format('L') } to { moment(to).format('L') }.
                    { ' ' }<a href="." onClick={ this.handleResetClick }>Reset</a>
                </p>
                }
                <DayPicker
                    numberOfMonths={ 2 }
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                    />
            </div>
        )
    }

    handleChange = selected => this.setState({ selected })

}

export default App