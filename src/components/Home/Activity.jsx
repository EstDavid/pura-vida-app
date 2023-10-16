import { Text } from 'react-native-paper';

const ActivityPage = ({ route }) => {
    const { activity } = route.params;
    return (
        <Text>{`This is the ${activity.name} page!`}</Text>
    );
};

export default ActivityPage;