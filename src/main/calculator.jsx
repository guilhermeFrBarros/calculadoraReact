import React, {Component} from "react";
import "./Calculator.css";
import Button from "../components/button/Button";
import Display from "../components/display/Display";

export default class Calculator extends Component {
    /* OUTRA FORMA DE RESOLVER O PROBLEMA DO THIS
        constructor(props) {
            this.clearMemory = this.clearMemory.bind(this) // está fazendo o this da clear memoria apontar para o this da class
            
        }
    */
    
    
    
    clearMemory() {
        console.log('limpar');
    }
   
    setOperation(operation) {
        console.log(operation)
    }
   
    addDigit(n) {                                   // adiciona numero digitado
        console.log(n)
    }
    render(){                                       // O render() é uma fincionacidade do react para podermos disponibiliazar(apresentar) funcinalidades html
        const addDigit = n => this.addDigit(n);
        const setOperation = op => this.setOperation(op);
        return (
            <div className="calculator">
                <Display value={888}/>
                <Button label="AC" click = {() => this.clearMemory()} triple />
                <Button label="/" click = {(e) => setOperation(e)} operation /> {/* click={this.setOperation} */}
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