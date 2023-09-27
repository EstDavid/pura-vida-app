import { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Button, DataTable, SegmentedButtons } from 'react-native-paper';

const styles = StyleSheet.create({
    weekDayOptions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 15,
        gap: 10
    }
});

const weekDayOptions = [
    {
        day: 'all'
    },
    {
        day: 'thu'
    },
    {
        day: 'fri'
    },
    {
        day: 'sat'
    },
    {
        day: 'sun'
    }
];

const stages = [
    {
        name: 'mind'
    },
    {
        name: 'body'
    },
    {
        name: 'heart'
    },
    {
        name: 'play'
    },
    {
        name: 'world'
    }
];

const times = [
    {
        timeFrom: '09:00',
        timeTo: '10:00',
        mindActivity: 'Silent Sitting',
        bodyActivity: 'Yoga',
        heartActivity: 'Breathwork',
        playActivity: 'BioDanza',
        worldActivity: 'Somatic Awakening'
    },
    {
        timeFrom: '11:00',
        timeTo: '13:00',
        mindActivity: 'Meditation',
        bodyActivity: 'Intuitive Sacred Kitchen Course',
        heartActivity: 'Rising Stronger: Embracing Trauma To Cultivate Resilience',
        playActivity: 'Voice Activation',
        worldActivity: 'Klimabewusstein: Von Hoffnungslosigkeit zu'
    }
];

const Program = () => {
    const [program, setProgram] = useState('full-program');
    const [day, setDay] = useState('thu');

    return (
        <View>
            <SegmentedButtons
                value={program}
                onValueChange={setProgram}
                buttons={[
                    {
                        value: 'full-program',
                        label: 'Full Program'
                    },
                    {
                        value: 'healers',
                        label: 'Healers'
                    },
                    {
                        value: 'my-program',
                        label: 'My Program'
                    }
                ]}
            />
            <View style={styles.weekDayOptions}>
                {weekDayOptions.map((button, index) => {
                    return (
                        <Button
                            key={index}
                            compact
                            mode={button.day === day
                                ? 'contained'
                                : 'elevated'
                            }
                            onPress={() => {
                                setDay(button.day);
                            }}
                        >
                            {button.day.toUpperCase()}
                        </Button>
                    );
                })}
            </View>
            <ScrollView horizontal>
                <DataTable style={{ width: 900 }}>
                    <DataTable.Header>
                        <DataTable.Title style={{ width: 9 }}>Time</DataTable.Title>
                        {
                            day === 'all'
                                ? stages.map((stage, index) => {
                                    return (
                                        <DataTable.Title key={index}>{stage.name}</DataTable.Title>
                                    );
                                })
                                : stages.map((stage, index) => {
                                    return (
                                        <DataTable.Title key={index}>{stage.name.toUpperCase()}</DataTable.Title>
                                    );
                                })
                        }
                    </DataTable.Header>
                    {times.map((item, index) => {
                        return (
                            <DataTable.Row key={index}>
                                <DataTable.Cell>{`${item.timeFrom} - \n${item.timeTo}`}</DataTable.Cell>
                                <DataTable.Cell>{item.mindActivity}</DataTable.Cell>
                                <DataTable.Cell>{item.bodyActivity}</DataTable.Cell>
                                <DataTable.Cell>{item.heartActivity}</DataTable.Cell>
                                <DataTable.Cell>{item.playActivity}</DataTable.Cell>
                                <DataTable.Cell>{item.worldActivity}</DataTable.Cell>
                            </DataTable.Row>
                        );
                    })}
                </DataTable>

            </ScrollView>
        </View>
    );
};

export default Program;