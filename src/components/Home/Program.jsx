import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Chip, SegmentedButtons } from 'react-native-paper';
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

const Program = ({ navigate }) => {
    const [program, setProgram] = useState('full-program');
    const [day, setDay] = useState('thu');
    const [stagesToDisplay, setStagesToDisplay] = useState(stages.map((stage) => {
        return stage.name;
    }));

    const headers = [
        'Time',
        ...stages
            .filter((stage) => {
                return stagesToDisplay.includes(stage.name);
            })
            .map((stage) => {
                return stage.name.charAt(0).toUpperCase() + stage.name.slice(1);
            })
    ];

    const data = times.map((item) => {
        return [
            { name: `${item.timeFrom} - \n${item.timeTo}` },
            ...stages
                .filter((stage) => {
                    return stagesToDisplay.includes(stage.name);
                })
                .map((stage) => {
                    return item[stage.name];
                })
        ];
    });

    const handleStagePress = (stage) => {
        if (stagesToDisplay.length == stages.length) {
            setStagesToDisplay([stage]);
        } else {
            if (stagesToDisplay.includes(stage)) {
                if (stagesToDisplay.length > 1) {
                    setStagesToDisplay(stagesToDisplay.filter((stageToDisplay) => {
                        return stageToDisplay !== stage;
                    }));
                } else {
                    setStagesToDisplay(stages.map((stage) => {
                        return stage.name;
                    }));
                }
            } else {
                setStagesToDisplay([...stagesToDisplay, stage]);
            }
        }
    };

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
            <Table data={data} headers={headers} navigate={navigate} />
            <View style={styles.weekDayOptions}>
                {stages.map((stage, index) => {
                    return (
                        <Chip
                            key={index}
                            compact
                            selected={stagesToDisplay.includes(stage.name)}
                            mode={stagesToDisplay.includes(stage.name) ? 'contained' : 'outlined'}
                            showSelectedCheck={false}
                            onPress={() => handleStagePress(stage.name)}
                        >
                            {stage.name.toUpperCase()}
                        </Chip>
                    );
                })}
            </View>
        </View>
    );
};

export default Program;