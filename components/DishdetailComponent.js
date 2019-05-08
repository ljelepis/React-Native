import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { baseUrl } from '../shared/baseUrl';
import { connect } from 'react-redux';
import { postFavorite } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        favorites: state.favorites
    }
}

const mapDispatchToProps = dispatch => ({
    postFavorite: (dishId) => dispatch(postFavorite(dishId))
})

function RenderDish(props) {
    const dish = props.dish;
    
    if (dish != null) {
        return(//using Card to render dish.
            <Card
                featuredTitle={dish.name}
                image={{ uri: baseUrl + dish.image }}>
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

class DishDetail extends Component {//removed state, no longer stored locally, because the favorites will 


    markFavorite(dishId) {
        this.props.postFavorite(dishId);
    }//this will add this dish ID to the favorites array and then save that into my state there.

    static navigationOptions = {
        title: 'Dish Details'
    };

    render(){
        const dishId = this.props.navigation.getParam('dishId', '');//one of the properties that will be passed into all components.
        return(
            <ScrollView>
            <RenderDish dish={this.props.dishes.dishes[+dishId]} 
                favorite={this.props.favorites.some(el => el === dishId)}
                onPress={() => this.markFavorite(dishId)}
                />
            <RenderComments comments={this.props.comments.comments.filter((comment) => comment.dishId === dishId)} />
            </ScrollView>
        );//using <ScrollView> to render the dish itself. And render comments below that.
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DishDetail);