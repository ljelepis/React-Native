import React, { Component } from 'react';
import { Card } from 'react-native-elements';
import { LEADERS } from '../shared/leaders';
import { Text, FlatList, ScrollView, View } from 'react-native';
import { ListItem } from 'react-native-elements';

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

    constructor(props) {
        super(props);
        this.state = {
            leaders: LEADERS
        };
    }
    
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
                        leftAvatar={{ source: require('./images/alberto.png')}}
                      />
            );
        }
        
        const { navigate } = this.props.navigation;

        return(//because we are returning this from inside the render function.
            <ScrollView>
            <History/>
            <Card title="Corporate Leadership">
            <FlatList //expects me to supply some info. it will use in order to render the list of items.
                data={this.state.leaders}
                renderItem={renderLeaders}//how to render each item in the list. take parameter where we will render each item in the list.
                keyExtractor={leader => leader.id.toString()}//keyExtractor expect to supply a string.
                />
            </Card>
            </ScrollView>
        );
    }
}

export default About;