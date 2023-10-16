import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export const weekDayOptions = [
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

export const stages = [
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

class Activity {
    constructor(name, stage, timeFrom, timeTo) {
        this.id = uuidv4();
        this.name = name;
        this.stage = stage;
        this.timeFrom = timeFrom;
        this.timeTo = timeTo;
    }
}

const mindActivity1 = new Activity('Silent Sitting', 'mind', '09:00', '10:00');
const bodyActivity1 = new Activity('Yoga', 'body', '09:00', '10:00');
const heartActivity1 = new Activity('Breathwork', 'heart', '09:00', '10:00');
const playActivity1 = new Activity('BioDanza', 'play', '09:00', '10:00');
const worldActivity1 = new Activity('Somatic Awakening', 'world', '09:00', '10:00');

const mindActivity2 = new Activity('Meditation', 'mind', '11:00', '13:00');
const bodyActivity2 = new Activity('Intuitive Sacred Kitchen Course', 'body', '11:00', '13:00');
const heartActivity2 = new Activity('Rising Stronger: Embracing Trauma To Cultivate Resilience', 'heart', '11:00', '13:00');
const playActivity2 = new Activity('Voice Activation', 'play', '11:00', '13:00');
const worldActivity2 = new Activity('Klimabewusstein: Von Hoffnungslosigkeit zu', 'world', '11:00', '13:00');

export const times = [
    {
        timeFrom: '09:00',
        timeTo: '10:00',
        mind: mindActivity1,
        body: bodyActivity1,
        heart: heartActivity1,
        play: playActivity1,
        world: worldActivity1
    },
    {
        timeFrom: '11:00',
        timeTo: '13:00',
        mind: mindActivity2,
        body: bodyActivity2,
        heart: heartActivity2,
        play: playActivity2,
        world: worldActivity2
    }
];
