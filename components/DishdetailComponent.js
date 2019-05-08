import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';

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
                <Icon
                    raised
                    reverse
                    name={ props.favorite ? 'heart' : 'heart-o' }
                    type='font-awesome'
                    color='#f50'
                    onPress={() => props.favorite ? console.log('Already favorite') : props.onPress()}
                    />
            </Card>
        );//Applied style in <Text style, as an inline style here, so margin 10. Similar to CSS, but only a subset of CSS.
    }
    else {
        return(<View></View>);//return an empty view, nothing will be shown.
    }
}

function RenderComments(props) {//this function component will render all the comments.
    const comments = props.comments;

    const renderCommentItem = ({ item, index }) => {
        return(
            <View key={index} style={{margin: 10}}>
                <Text style={{fontSize: 14}}>{item.comment}</Text>
                <Text style={{fontSize: 12}}>{item.rating} Stars</Text>
                <Text style={{fontSize: 12}}>{'-- ' + item.author + ', ' + item.date}</Text>
            </View>//this is how we'll render the comment items, via all these texts.
        );
    }

    return(
        <Card title="Comments">
            <FlatList
                data={comments}
                renderItem={renderCommentItem}
                keyExtractor={item => item.id.toString()}
                />
        </Card>
    );
}

class DishDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            favorites: []
        };
    }

    markFavorite(dishId) {
        this.setState({ favorite: this.state.favorites.concat(dishId)})
    }//this will add this dish ID to the favorites array and then save that into my state there.

    static navigationOptions = {
        title: 'Dish Details'
    };

    render(){
        const dishId = this.props.navigation.getParam('dishId', '');//one of the properties that will be passed into all components.
        return(
            <ScrollView>
            <RenderDish dish={this.state.dishes[+dishId]} 
                favorite={this.state.favorites.some(el => el === dishId)}
                onPress={() => this.markFavorite(dishId)}
                />
            <RenderComments comments={this.state.comments.filter((comment) => comment.dishId === dishId)} />
            </ScrollView>
        );//using <ScrollView> to render the dish itself. And render comments below that.
    }
}

export default DishDetail;