import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

function RenderDish(props) {

    const dish = props.dish;
    
    if (dish != null) {
        return(//using Card to render dish.
            <Card
                featuredTitle={dish.name}
                image={require('./images/uthappizza.png')}>
                <Text style={{margin: 10}}>
                    {dish.description}
                </Text>
            </Card>
        );//Applied style in <Text style, as an inline style here, so margin 10. Similar to CSS, but only a subset of CSS.
    }
    else {
        return(<View></View>);//return an empty view, nothing will be shown.
    }
}

function DishDetail(props) {
    return(<RenderDish dish={props.dish} />);//render which takes props.dish here as the property here.
}

export default DishDetail;