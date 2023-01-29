import React from "react";
import "./button.css"

class Botao extends React.Component{
    render(): React.ReactNode {
        
        return (
            <button className="submitButton">
                Submit
            </button>
        )
    }
}

export default Botao;