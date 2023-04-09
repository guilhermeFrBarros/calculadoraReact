import React, { useState } from "react";
import "./Calculator.css";
import Button from "../components/button/Button";
import Display from "../components/display/Display";


const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

const Calculator = () => {

    const [state, setState] = useState(initialState);

    function clearMemory() {
        setState(initialState);
    }

    function setOperation(operation) {
        if ( state.current === 0 ) {
            setState( prevState => ({...prevState, operation, current: 1, clearDisplay: true}));
        }
        else {
            const equals = operation === '=';
            const currentOperation = state.operation;

            const values = [...state.values];
            switch (currentOperation) {
                case '+':
                    values[0] = values[0] + values[1];
                    break;
                case '-':
                    values[0] = values[0] - values[1];
                    break;
                case '*':
                    values[0] = values[0] * values[1];
                    break;
                case '/':
                    values[0] = values[0] / values[1];
                    break;
                default:
                    break;
            }
            values[1] = 0;

            setState( prevState => ({...prevState,
                        displayValue: values[0],
                        operation: equals ? null : operation,
                        current: equals ? 0 : 1,
                        clearDisplay: !equals,
                        values
                }))
        }
    }

    function addDigit(n) {   // adiciona numero digitado ao display
        if (n === '.' && state.displayValue.includes('.')) {
            return;
        }

        const clearDisplay = state.displayValue === '0'
            || state.clearDisplay;                                                     // ou se clearDisplay for true
        const corruntValue = clearDisplay ? '' : state.displayValue;                   // se o display for limpo (clearDisplay) add '' senão add displayValue 
        const displayValue = corruntValue + n;
        //console.log(displayValue)
        setState({ ...state, displayValue, clearDisplay: false });    // Posso fazer assim também {displayValeu: newDisplayValue}
        ////setState(prevState  => ({ ...prevState, displayValue, clearDisplay: false }));
        // RECOMENDO FORTEMENTE COLOCAR DO GEITO A CIMA 

        if (n !== '.') {
            const i = state.current;
            const newValue = parseFloat(displayValue);
            const values = [...state.values];
            values[i] = newValue;
            setState(prevState => ({ ...prevState, values }));
            console.log(values);
        }
    }

    const addDigitArrow = n => addDigit(n);
    const setOperationArrow = op => setOperation(op);

    return (
        <div className="calculator">
            <Display value={state.displayValue} />
            <Button label="AC" click={() => clearMemory()} triple />
            <Button label="/" click={(e) => setOperationArrow(e)} operation />                                 {/* click={setOperation} */}
            <Button label="7" click={(e) => addDigitArrow(e)} />
            <Button label="8" click={(e) => addDigitArrow(e)} />
            <Button label="9" click={(e) => addDigitArrow(e)} />
            <Button label="*" click={(e) => setOperationArrow(e)} operation />
            <Button label="4" click={(e) => addDigitArrow(e)} />
            <Button label="5" click={(e) => addDigitArrow(e)} />
            <Button label="6" click={(e) => addDigitArrow(e)} />
            <Button label="-" click={(e) => setOperationArrow(e)} operation />
            <Button label="1" click={(e) => addDigitArrow(e)} />
            <Button label="2" click={(e) => addDigitArrow(e)} />
            <Button label="3" click={(e) => addDigitArrow(e)} />
            <Button label="+" click={(e) => setOperationArrow(e)} operation />
            <Button label="0" click={(e) => addDigitArrow(e)} double />
            <Button label="." click={(e) => addDigitArrow(e)} />
            <Button label="=" click={(e) => setOperationArrow(e)} operation />
        </div>
    )
}

export default Calculator;



/*
A função addDigit que você compartilhou parece estar usando a forma
correta de atualizar o estado usando setState e prevState. O estado
é atualizado de forma assíncrona usando o método setState, portanto,
é importante garantir que as atualizações de estado não afetem outros
 valores no estado que não devem ser alterados.

No seu código, a linha setState({ ...state, displayValue, clearDisplay: false });
atualiza o estado dos valores displayValue e clearDisplay. Já a linha
setState(prevState => ({ ...prevState, values })); atualiza apenas o valor values.
Ambas as linhas de código estão usando o método correto para atualizar o estado de
forma assíncrona e garantindo que outros valores do estado não sejam afetados.

A diferença entre as duas formas de usar o setState é que a segunda forma (usando prevState)
é mais segura porque garante que o estado anterior é preservado e usado como base para
as atualizações, evitando assim efeitos colaterais indesejados. A primeira forma pode
funcionar corretamente, mas é mais propensa a erros se houver outras atualizações de estado
simultâneas em outras partes do código.

*/