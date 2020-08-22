import React from 'react';
import './Modal';

export default class Modal extends React.Component {
    render() {
        return (
            <React.Fragment>
                <button>Open Modal</button>

                <div className="modal">
                    <div className="modal-body">
                        <h1>Modal Title</h1>
                        <p>A am awesome modal!</p>

                        <button>Close Modal</button>
                    </div>
                </div>


            </React.Fragment>
        )
    }
}