import { View } from 'react-native';
import { Text } from 'react-native-paper';
import Table from '../Home/Table';

const headers = ['Name', 'Email', 'Phone', 'City', 'State', 'Country'];
const data = [
    [
        'Jonas',
        'jonas@jonas.com',
        '6885-89798',
        'New York',
        'New York',
        'USA'
    ]
];
const About = () => {
    return (
        <View>
            <Text>This About</Text>
            <Table data={data} headers={headers} />
        </View>
    );
};

export default About;