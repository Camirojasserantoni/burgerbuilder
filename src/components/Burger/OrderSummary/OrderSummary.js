import React,{ Component } from 'react';
import Aeux from '../../../hoc/Aeux/Aeux';
import Button from '../../UI/Button/Button'


class OrderSummary extends Component {
    //this could be a functional component , doesnot have to be a class componentS
    
    componentWillUpdate(){
        console.log('[OrderSummary] WillUpdate');
    }
    
    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
        
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
            </li>);
        } );
        return ( 
        <Aeux>
            <h3>Your Order</h3>
            <p>A delicius burger with the following ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>  
            <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout ? </p> 
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}> CANCEL </Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE </Button>
        </Aeux> 
        
        );
    }
    
};

export default OrderSummary;