class TypeList {
    props = {
        animals: [
            {
                disp: "Sleep",
                sym: "S",
                cat: "energy",
                com: [
                    [0, 1, 2, 3], [0, 1, 3, 2],
                    [0, 2, 1, 3], [0, 2, 3, 1]
                ],
                func: [
                    "Fi/Ni",
                    "Fi/Si",
                    "Ni/Fi",
                    "Ni/Ti",
                    "Si/Fi",
                    "Si/Ti",
                    "Ti/Ni",
                    "Ti/Si",
                ]
            },
            {
                disp: "Consume",
                sym: "C",
                cat: "info",
                com: [
                    [0, 1, 2, 3], [0, 1, 3, 2],
                    [0, 3, 1, 2], [0, 3, 2, 1]
                ],
                func: [
                    "Fi/Ne",
                    "Fi/Se",
                    "Ti/Ne",
                    "Ti/Se",
                    "Ne/Fi",
                    "Ne/Ti",
                    "Se/Fi",
                    "Se/Ti",
                ]
            },
            {
                disp: "Blast",
                sym: "B",
                cat: "info",
                com: [
                    [0, 1, 2, 3], [0, 1, 3, 2],
                    [0, 3, 1, 2], [0, 3, 2, 1]
                ],
                func: [
                    "Ni/Fe",
                    "Ni/Te",
                    "Si/Fe",
                    "Si/Te",
                    "Fe/Ni",
                    "Fe/Si",
                    "Te/Ni",
                    "Te/Si",
                ]
            },
            {
                disp: "Play",
                sym: "P",
                cat: "energy",
                com: [
                    [0, 2, 1, 3], [0, 2, 3, 1],
                    [0, 3, 1, 2], [0, 3, 2, 1]
                ],
                func: [
                    "Fe/Ne",
                    "Fe/Se",
                    "Ne/Fe",
                    "Ne/Te",
                    "Se/Fe",
                    "Se/Te",
                    "Te/Ne",
                    "Te/Se",
                ]
            }
        ],
        deciders: [
            { disp: "Feeling", sym: "F", energies: ["Fi", "Fe"] },
            { disp: "Thinking", sym: "T", energies: ["Ti", "Te"] }
        ],
        observers: [
            { disp: "Intuition", sym: "N", energies: ["Ni", "Ne"] },
            { disp: "Sensing", sym: "S", energies: ["Si", "Se"] }
        ],
        energies: [
            { disp: "Introvert", sym: "i" },
            { disp: "Extrovert", sym: "e" }
        ]
    };

    tableCreation = (idTable) => {
        let header = this.createHeader();
        let body = this.createBody();
        $(idTable + ' thead').html(header);
        $(idTable + ' tbody').html(body);
    };

    createHeader = () => {
        let header1 = '<tr>';
        let header2 = '<tr>';

        let createHead2 = (combination, iCombine) => {
            let formatted = combination[iCombine[0]] + combination[iCombine[1]] + '/' + combination[iCombine[2]] + `(${combination[iCombine[3]]})`;
            return `<th>${formatted}</th>`;
        };

        for (let i = 0; i < 4; i++) {
            let animal = this.props.animals[i];
            header1 += `<th colspan="4" class="text-center">${animal.disp}</th>`;
            let combination = animal.sym;
            for (let j = 0; j < 4; j++) {
                if (i !== j) {
                    let secAnimal = this.props.animals[j];
                    combination += secAnimal.sym;
                }
            }
            for (let c = 0; c < animal.com.length; c++) {
                header2 += createHead2(combination, animal.com[c]);
            }
        }
        header1 += '</tr>';
        header2 += '</tr>';
        return header1 + header2;
    };
    createBody = () => {
        let e = ``;
        for (let i = 0; i < 8; i++) {
            e += `<tr>`;
            for (let j = 0; j < this.props.animals.length; j++) {
                let currAnimal = this.props.animals[j];
                let currFunc = currAnimal.func[i];
                let freakout = currFunc[0] == 'N' || currFunc[0] == 'S' ? "observer" : "decider";
                let selfTribe = currFunc.match(/Fi|Ti/) !== null ? "di" : "de";
                let controlChaos = currFunc.match(/Ni|Si/) !== null ? "oi" : "oe";
                let absCon = currFunc.match(/N/) !== null ? 'intuition' : 'sensing';
                let decCon = currFunc.match(/F/) !== null ? 'feeling' : 'thinking';
                for (let y = 0; y < 4; y++) {
                    let classes = `${currAnimal.disp} ${freakout} ${selfTribe} ${controlChaos} ${absCon} ${decCon}`;
                    let sleepPlay = currAnimal.sym == 'S'
                        || (currAnimal.sym != 'P' && (y == 0 || y == 1))
                        ? 'sleeping' : 'playing';
                    let consBlast = currAnimal.sym == 'C'
                        || (currAnimal.sym != 'B' && (y == 0 || y == 1))
                        ? 'consuming' : 'blasting';
                    let infoEn =
                        (currAnimal.sym == 'S' && (y == 0 || y == 2))
                            || ((currAnimal.sym == 'C' || currAnimal.sym == 'B') && (y == 0 || y == 3))
                            || (currAnimal.sym == 'P' && (y == 1 || y == 3))
                            ? 'infoTop' : 'energyTop';

                    let intExt =
                        ((currAnimal.sym == 'S' || currAnimal.sym == 'C') && y != 3)
                            || ((currAnimal.sym == 'B' || currAnimal.sym == 'P') && y == 0)
                            ? 'introvert' : 'extrovert';
                    classes += ` ${infoEn} ${intExt} ${sleepPlay} ${consBlast}`;
                    e += `<td class="${classes}" ><p class="types512">${currFunc}</p></td>`;
                }
            }
            e += `</tr>`;
        }

        return e;
    };





}

