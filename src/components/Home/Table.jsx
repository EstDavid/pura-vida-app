import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { DataTable } from 'react-native-paper';


const Table = ({ data, headers }) => {
    const navigation = useNavigation();
    return (
        <ScrollView horizontal style={styles.scrollView}>
            <DataTable style={styles.table}>
                <DataTable.Header style={styles.headerRow}>
                    {headers.map((header, index) => (
                        <View
                            key={index}
                            style={{ ...styles.columnHeader, width: index === 0 ? 80 : styles.columnHeader.width }}>
                            <Text style={styles.headerText}>{header}</Text>
                        </View>
                    ))}
                </DataTable.Header>
                {data.map((row, rowIndex) => (
                    <DataTable.Row key={rowIndex} style={styles.row}>
                        {row.map((cell, cellIndex) => (
                            <Pressable
                                key={cellIndex}
                                onPress={() => navigation.navigate('Activity', { activity: cell })}
                                style={{ ...styles.column, width: cellIndex === 0 ? 80 : styles.column.width }}>
                                <Text style={styles.cellText}>{cell.name}</Text>
                            </Pressable>
                        ))}
                    </DataTable.Row>
                ))}
            </DataTable>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        width: '100%',
    },
    table: {
        // borderWidth: 1,
        // borderColor: '#000',
        flexDirection: 'column',
    },
    headerRow: {
        flexDirection: 'row',
        backgroundColor: '#f0f0f0',
    },
    columnHeader: {
        flex: 1,
        width: 160,
        padding: 8,
        // borderRightWidth: 1,
        // borderRightColor: '#000',
    },
    headerText: {
        fontWeight: 'bold',
    },
    row: {
        flexDirection: 'row',
    },
    column: {
        flex: 1,
        width: 160,
        padding: 8,
        // borderRightWidth: 1,
        // borderRightColor: '#000',
    },
    cellText: {
        flexWrap: 'wrap',
    },
});

export default Table;
