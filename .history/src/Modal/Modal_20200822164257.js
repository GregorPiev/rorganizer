import React from 'react';
import './Modal.css';

export default class Modal extends React.Component {
    state = {
        isOpen: false
    };
    render() {
        return (
            <React.Fragment>
                <button>Open Modal</button>

                {this.state.isOpen &&
                    <div className="modal">
                        <div className="modal-body">
                            <h1>Modal Title</h1>
                            <p>A am awesome modal!</p>

                            <button>Close modal</button>
                        </div>

                    </div>}


            </React.Fragment>
        )
    }
}