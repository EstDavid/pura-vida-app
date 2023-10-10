import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, SegmentedButtons } from 'react-native-paper';
import Table from './Table';
import { stages, times, weekDayOptions } from '../../core/ProgramParams';

const styles = StyleSheet.create({
    weekDayOptions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 15,
        gap: 10
    }
});

const headers = ['Time'].concat(stages.map((stage) => {
    return stage.name.charAt(0).toUpperCase() + stage.name.slice(1);
}));

const data = times.map((item) => {
    return [
        `${item.timeFrom} - \n${item.timeTo}`,
        item.mindActivity,
        item.bodyActivity,
        item.heartActivity,
        item.playActivity,
        item.worldActivity
    ];
});

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
            {/* <ScrollView horizontal>
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
            </ScrollView> */}
            <Table data={data} headers={headers} />
        </View>
    );
};

export default Program;