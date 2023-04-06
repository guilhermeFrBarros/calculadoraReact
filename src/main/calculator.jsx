import React, {Component} from "react";
import "./Calculator.css";
import Button from "../components/button/Button";
import Display from "../components/display/Display";
import { values } from "lodash";

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0,0],
    current: 0                  
}


 class Calculator extends Component {
   

        state = {...initialState}

    clearMemory() {
        this.setState( { ...initialState } );
    }
   
    setOperation(operation) {
       console.log(operation);
    }
   
    addDigit(n) {   // adiciona numero digitado ao display
        if ( n === '.' && this.state.displayValue.includes('.') ) {
            return;
        }
        
        const clearDisplay = this.state.displayValue === '0'
            || this.state.clearDisplay;                                                     // ou se clearDisplay for true
        const corruntValue = clearDisplay ? '' : this.state.displayValue;                   // se o display for limpo (clearDisplay) add '' senão add displayValue 
        const displayValue = corruntValue + n;
        //console.log(displayValue)
        this.setState({ displayValue, clearDisplay: false });    // Posso fazer assim também {displayValeu: newDisplayValue}
    
        
        if ( n !== '.' ) {
            const i = this.state.corruntValue;
            const newValaue = parseFloat(displayValue);
            const values = [...this.state.values];
            values[i] = newValaue;
            this.setState({values});
            console.log(values);
        }
    }


    render(){              //so preciso pq é uma class                                                                                 // O render() é uma funcionalidade do react para podermos disponibiliazar(apresentar) funcinalidades html
        const addDigit = n => this.addDigit(n);
        const setOperation = op => this.setOperation(op);
        return (
            <div className="calculator">
                <Display value={this.state.displayValue}/>
                <Button label="AC" click = {() => this.clearMemory()} triple />
                <Button label="/" click = {(e) => setOperation(e)} operation />                                 {/* click={this.setOperation} */}
                <Button label="7" click = {(e) => addDigit(e)}/>
                <Button label="8" click = {(e) => addDigit(e)}/>
                <Button label="9" click = {(e) => addDigit(e)}/>
                <Button label="*" click = {(e) => setOperation(e)} operation/>
                <Button label="4" click = {(e) => addDigit(e)}/>
                <Button label="5" click = {(e) => addDigit(e)}/>
                <Button label="6" click = {(e) => addDigit(e)}/>
                <Button label="-" click = {(e) => setOperation(e)} operation/>
                <Button label="1" click = {(e) => addDigit(e)}/>
                <Button label="2" click = {(e) => addDigit(e)}/>
                <Button label="3" click = {(e) => addDigit(e)}/>
                <Button label="+" click = {(e) => setOperation(e)} operation/>
                <Button label="0" click = {(e) => addDigit(e)} double/>
                <Button label="." click = {(e) => addDigit(e)}/>
                <Button label="=" click = {(e) => setOperation(e)} operation/>  
            </div>
        )
    }
}

export default Calculator;