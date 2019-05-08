import React, { Component } from 'react';
import { Card } from 'react-native-elements';
import { Text, FlatList, ScrollView, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';


const mapStateToProps = state => {//using mapStateToProps which will obtain the state from the Redux store and then map it to the state.
    return {
        leaders: state.leaders//only mapping in the part of the state that is required by the About Component.
    }
}

function History(props) {
    return(
        <Card title="Our History">
            <Text>
            Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.
            
            The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.
            </Text>
        </Card>
    );
}

class About extends Component {
    
    static navigationOptions = {
        title: 'About'
    };

    render() {
        
        const renderLeaders = ({item, index}) => {
            return (
                    <ListItem
                        key={index}
                        title={item.name}
                        subtitle={item.description}
                        hideChevron={true}
                        onPress={() => navigate('leaders', { leaderId: item.id })}
                        leftAvatar={{ source: { uri: baseUrl + item.image }}}//to obtain the image directly from the server.
                      />
            );
        };

        if (this.props.leaders.isLoading) {
            return(
                <ScrollView>
                <History/>
                <Card 
                    title="Corporate Leadership">
                    <Loading />
                </Card>
                </ScrollView>
            );
        }
        else if (this.props.leaders.errMess) {
            return(
                <ScrollView>
                <History/>
                <Card //so where the Corporate Leadership would go, I would issue an error message in its place.
                    title="Corporate Leadership">
                    <Text>{this.props.leaders.errMess}</Text>
                </Card>
                </ScrollView>
            );
        }
        else {
            return(//because we are returning this from inside the render function.
                <ScrollView>
                <History/>
                <Card title="Corporate Leadership">
                <FlatList //expects me to supply some info. it will use in order to render the list of items.
                    data={this.props.leaders.leaders}//changed this.state.leaders to this.props.leaders
                    renderItem={renderLeaders}//how to render each item in the list. take parameter where we will render each item in the list.
                    keyExtractor={leader => leader.id.toString()}//keyExtractor expect to supply a string.
                    />
                </Card>
                </ScrollView>
            );
        }
    }
};

export default connect(mapStateToProps)(About);//Have connected our About Component to the Redux store.