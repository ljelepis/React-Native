import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

class Contact extends Component {

    static navigationOptions = {
        title: 'Contact'
    };

    render() {
        return (//using Card to render address.
            <ScrollView>
                <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
                    <Card
                        title='Contact Information'>
                        <Text style={{ padding: 5 }}>121, Clear Water Bay Road</Text>
                        <Text style={{ padding: 5 }}>Clear Water Bay, Kowloon</Text>
                        <Text style={{ padding: 5 }}>HONG KONG</Text>
                        <Text style={{ padding: 5 }}>Tel: +852 1234 5678</Text>
                        <Text style={{ padding: 5 }}>Fax: +852 8765 4321</Text>
                        <Text style={{ padding: 5 }}>Email:confusion@food.net</Text>
                    </Card>
                </Animatable.View>
            </ScrollView>
        );//Applied style in <Text style, as an inline style here, so margin 10. Similar to CSS, but only a subset of CSS.
    }
}

export default Contact;