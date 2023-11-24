import { Component } from "react";
import './screen.css'


class Screen extends Component {
    constructor() {
        super()
        this.state = {
            title: '- Você sangra?',
            color: 'white',
            textTransform: 'none',
            isActive: false
        };
    }

    render() {
        const { isActive } = this.state;

        const screenClass = isActive ? 'screen screen-active' : 'screen';
    
        const textStyle = {
            color: this.state.color,
            textTransform: this.state.textTransform
        };

        return (
            <section className={screenClass}
                onClick={() => this.setState((prevState) => ({
                        title: prevState.isActive ? '- Você sangra?' : '- Vai sangrar!',
                        color: prevState.isActive ? 'white' : 'red',
                        textTransform: prevState.isActive ? 'none' : 'uppercase',
                        isActive: !prevState.isActive
                    }))}>
                <h2 style={textStyle}>{this.state.title}</h2>
            </section>
        )
    }
}

export default Screen