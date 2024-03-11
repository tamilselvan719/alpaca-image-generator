let alpacaImageParts = [
    {
        name: 'Backgrounds',
        url: 'assets/backgrounds/',
        selectedOption: { name: '', fileName: '' },
        options: [
            { name: 'Blue 50', fileName: 'blue50.png' },
            { name: 'Blue 60', fileName: 'blue60.png' },
            { name: 'Blue 70', fileName: 'blue70.png' },
            { name: 'Dark Blue 30', fileName: 'darkblue30.png' },
            { name: 'Dark Blue 50', fileName: 'darkblue50.png' },
            { name: 'Dark Blue 70', fileName: 'darkblue70.png' },
            { name: 'Green 50', fileName: 'green50.png' },
            { name: 'Green 60', fileName: 'green60.png' },
            { name: 'Green 70', fileName: 'green70.png' },
            { name: 'Grey 40', fileName: 'grey40.png' },
            { name: 'Grey 70', fileName: 'grey70.png' },
            { name: 'Grey 80', fileName: 'grey80.png' },
            { name: 'Red 50', fileName: 'red50.png' },
            { name: 'Red 60', fileName: 'red60.png' },
            { name: 'Red 70', fileName: 'red70.png' },
            { name: 'Yellow 50', fileName: 'yellow50.png' },
            { name: 'Yellow 60', fileName: 'yellow60.png' },
            { name: 'Yellow 70', fileName: 'yellow70.png' }
        ]
    },
    {
        name: 'Ears',
        url: 'assets/ears/',
        selectedOption: { name: '', fileName: '' },
        options: [
            { name: 'Default', fileName: 'default.png' },
            { name: 'Tilt backward', fileName: 'tilt-backward.png' },
            { name: 'Tilt forward', fileName: 'tilt-forward.png' }
        ]
    },
    {
        name: 'Neck',
        url: 'assets/neck/',
        selectedOption: { name: '', fileName: '' },
        options: [
            { name: 'Default', fileName: 'default.png' },
            { name: 'Bend backward', fileName: 'bend-backward.png' },
            { name: 'Bend forward', fileName: 'bend-forward.png' },
            { name: 'Thick', fileName: 'thick.png' }
        ]
    },
    {
        name: 'Hair',
        url: 'assets/hair/',
        selectedOption: { name: '', fileName: '' },
        options: [
            { name: 'Default', fileName: 'default.png' },
            { name: 'Bang', fileName: 'bang.png' },
            { name: 'Curls', fileName: 'curls.png' },
            { name: 'Elegant', fileName: 'elegant.png' },
            { name: 'Fancy', fileName: 'fancy.png' },
            { name: 'Quiff', fileName: 'quiff.png' },
            { name: 'Short', fileName: 'short.png' }
        ]
    },
    {
        name: 'Accessories',
        url: 'assets/accessories/',
        selectedOption: { name: '', fileName: '' },
        options: [
            { name: 'Earings', fileName: 'earings.png' },
            { name: 'Flower', fileName: 'flower.png' },
            { name: 'Glasses', fileName: 'glasses.png' },
            { name: 'headphone', fileName: 'headphone.png' }
        ]
    },
    {
        name: 'Mouth',
        url: 'assets/mouth/',
        selectedOption: { name: '', fileName: '' },
        options: [
            { name: 'Default', fileName: 'default.png' },
            { name: 'Astonished', fileName: 'astonished.png' },
            { name: 'Eating', fileName: 'eating.png' },
            { name: 'Laugh', fileName: 'laugh.png' },
            { name: 'Tongue', fileName: 'tongue.png' }
        ]
    },

    {
        name: 'Eyes',
        url: 'assets/eyes/',
        selectedOption: { name: '', fileName: '' },
        options: [
            { name: 'Default', fileName: 'default.png' },
            { name: 'Angry', fileName: 'angry.png' },
            { name: 'Naughty', fileName: 'naughty.png' },
            { name: 'Panda', fileName: 'panda.png' },
            { name: 'Smart', fileName: 'smart.png' },
            { name: 'Star', fileName: 'star.png' }
        ]
    },
    {
        name: 'Nose',
        url: 'assets/nose/',
        selectedOption: { name: '', fileName: '' },
        options: [{ name: 'Default', fileName: 'nose.png' }]
    },
    {
        name: 'Leg',
        url: 'assets/leg/',
        selectedOption: { name: '', fileName: '' },
        options: [
            { name: 'Default', fileName: 'default.png' },
            { name: 'Cookie', fileName: 'cookie.png' },
            { name: 'Game console', fileName: 'game-console.png' },
            { name: 'Bubble Tea', fileName: 'bubble-tea.png' },
            { name: 'Tilt backward', fileName: 'tilt-backward.png' },
            { name: 'Tilt forward', fileName: 'tilt-forward.png' }
        ]
    }
];

export class Accessory {
    id: number;
    name: string;
    url: string;
    selectedOption: Option;
    options: Option[];

    constructor(id: number, name: string, url: string, options: Option[]) {
        this.id = id;
        this.name = name;
        this.url = url;
        this.options = options;
        this.selectedOption = this.options[0];
    }
}

export class Option {
    id: number;
    name: string;
    fileName: string;

    constructor(id: number, name: string, fileName: string) {
        this.id = id;
        this.name = name;
        this.fileName = fileName;
    }
}

export function getAllAccessory() {
    return alpacaImageParts.map((e, i) => {
        let options = e.options.map((o, idx) => {
            return new Option(idx, o.name, o.fileName)
        });
        return new Accessory(i, e.name, e.url, options)
    })
}
