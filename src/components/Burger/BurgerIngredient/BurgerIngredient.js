import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './BurgerIngredient.css';

class BurgerIngredient extends Component {
    render(){
        let ingredient = null;

        switch(this.props.type){
            case('bread-bottom'): 
                ingredient = <div className='BreadBottom'></div>;
                break;
            case('bread-top'):
                ingredient = (
                    <div className='BreadTop'>
                        <div className='Seeds1'></div>
                        <div className='Seeds2'></div>
                    </div>);
                break;
            case('egg'):
                ingredient = <div className='Egg'></div>;
                break;
            case('cheese'):
                ingredient = <div className='Cheese'></div>;
                break;
            case('chicken'):
                ingredient = <div className='Chicken'></div>;
                break;
            case('veg'):
                ingredient = <div className='Veg'></div>;
                break;
            default:
                ingredient = null;
        }
        return ingredient;
    };
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredient;