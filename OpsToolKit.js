class OpsToolKit {
    props = [
        [{ desc: "Life is about things, control and chaos", poin: "O", show: ".observer", hide: ".decider" }, { desc: "Life is about people, self and tribe", poin: "D", show: ".decider", hide: ".observer" }, "freakout"],
        [{ desc: "Self above Others", poin: "Di", show: ".di", hide: ".de" }, { desc: "Others above Self", poin: "De", show: ".de", hide: ".di" }, "deciderEnergy"],
        [{ desc: "Controlling, organize known information", poin: "Oi", show: ".oi", hide: ".oe" }, { desc: "Chaotic, take more new information", poin: "Oe", show: ".oe", hide: ".oi" }, "observerEnergy"],
        [{ desc: "Abstract, Conceptualize, Meaning", poin: "N", show: ".intuition", hide: ".sensing" }, { desc: "Concrete, Technical, Sensation", poin: "S", show: ".sensing", hide: ".intuition" }, "observer"],
        [{ desc: "Values and Ethic", poin: "F", show: ".feeling", hide: ".thinking" }, { desc: "Reasons and Logic", poin: "T", show: ".thinking", hide: ".feeling" }, "decider"],
        [{ desc: "Preserving energy", poin: "Sleep", show: ".sleeping", hide: ".Play" }, { desc: "Expending energy", poin: "Play", show: ".playing", hide: ".Sleep" }, "energyAnimal"],
        [{ desc: "Learning information", poin: "Consume", show: ".consuming", hide: ".Blast" }, { desc: "Teaching information", poin: "Blast", show: ".blasting", hide: ".Consume" }, "infoAnimal"],
        [{ desc: "Consume and Blast in top 3 animals", poin: "Info", show: ".infoTop", hide: ".energyTop" }, { desc: "Sleep and Play in top 3 animals", poin: "Energy", show: ".energyTop", hide: ".infoTop" }, "topAnimal"],
        [{ desc: "Consume and Sleep in top 3 animals", poin: "I", show: ".introvert", hide: ".extrovert" }, { desc: "Blast and Play in top 3 animals", poin: "E", show: ".extrovert", hide: ".introvert" }, "energy"],
    ];

    tableCreation = (idTable) => {
        let e = '';
        for (let i = 0; i < this.props.length; i++) {
            let prop = this.props[i];
            e += `
            <tr>
                <td>
                    ${prop[0].desc}
                </td>
                <td>
                    <input id="id${prop[0].poin}" type="radio" value="${prop[0].poin}" name="${prop[2]}" class="btn-check" data-show="${prop[0].show}" data-hide="${prop[0].hide}">
                    <label for="id${prop[0].poin}" class="btn btn-radio btn-secondary">${prop[0].poin}</label>
                </td>
                <td>
                    <input id="id${prop[1].poin}" type="radio" value="${prop[1].poin}" name="${prop[2]}" class="btn-check" data-show="${prop[1].show}" data-hide="${prop[1].hide}">
                    <label for="id${prop[1].poin}" class="btn btn-radio btn-secondary">${prop[1].poin}</label>
                </td>
                <td style="text-align:end;">
                    ${prop[1].desc}
                </td>
            </tr>`;
        }
        $(idTable + ' tbody').html(e);
        $(idTable + ' tfoot').html(`<button class="btn btn-danger" id="btnResetOpsTools">Reset</button>`);
        $("#btnResetOpsTools").on('click', function () {
            $('.btn-check').prop('checked', false);
            $('#TypeList tbody p').show(300);

        });

    }
}
