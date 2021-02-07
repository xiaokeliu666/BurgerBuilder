import React, { Component }from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop'

class Modal extends Component {
    // Only check prop.show.
    // We only need to render once the OrderSummary pops up, otherwise it will render every time we add or remove ingredient.
    // Find the relationship of Modal and OrderSummary in BurgerBuilder
    shouldComponentUpdate(nextProps,nextState) {
        // The reason for "nextProps.children !== this.props.children" : I added a spinner before the post request being done
        // If we don't use "nextProps.children !== this.props.children" here, the spinner won't pop up because the spinner or <OrderSummary>
        // is the child of Modal
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }
    // componentWillUpdate(nextProps, nextState, nextContext) {
    //     console.log('UPDATE!!!!!!!!!!')
    // }

    render() {
        return(
            <Aux>
                <Backdrop show = {this.props.show} clicked={this.props.modalClosed}/>
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1': '0'
                    }}
                >
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}

export default Modal;