import React, { Component } from 'react';
import { Card } from 'react-native-elements';
import { Text, FlatList, ScrollView, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';
import * as Animatable from 'react-native-animatable';


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
                    <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
                        <History />
                        <Card
                            title='Corporate Leadership'>
                        <Text>{this.props.leaders.errMess}</Text>
                        </Card>
                    </Animatable.View>
                </ScrollView>
            );
        }
        else {
            return(//because we are returning this from inside the render function.
                <ScrollView>
                    <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
                        <History />
                        <Card
                            title='Corporate Leadership'>
                        <FlatList 
                            data={this.props.leaders.leaders}
                            renderItem={renderLeader}
                            keyExtractor={item => item.id.toString()}
                        />
                        </Card>
                    </Animatable.View>
                </ScrollView>
            );
        }
    }
};

export default connect(mapStateToProps)(About);//Have connected our About Component to the Redux store.