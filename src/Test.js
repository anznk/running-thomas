import React, { useRef, useEffects, Component, createRef } from 'react'

export class Test extends Component {
    constructor(props){
        super(props);
        this.myRef = createRef();
    }

    render() {
        const a = this.props.a;
        return (
            <div ref={this.myRef}>
                {a}
            </div>
        )
    }


}

export default Test
