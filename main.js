const initApp = () => {
    let mainDiv = `
    <h1 style="text-align: center;">Objective Personality Tools</h1>
    <div class="card-body" style="margin: auto;width: 90%;">
        <div class="table-responsive">
            <table class="table table-striped" id="OpsToolKit">
                <thead>
                </thead>
                <tbody>
                </tbody>
                <tfoot>
                </tfoot>
            </table>
        </div>
    </div>
    <div class="card-body">
        <div class="table-responsive">
            <table class="table table-striped" id="TypeList">
                <thead>
                </thead>
                <tbody>
                </tbody>
                <tfoot>
                </tfoot>
            </table>
        </div>
    </div>
    `;
    $('#app').html(mainDiv);
}

initApp();
const Ops = new OpsToolKit();
const types = new TypeList();
Ops.tableCreation("#OpsToolKit");
types.tableCreation("#TypeList");

const salin = (btn, msg = null) => {
    navigator.clipboard.writeText(btn.getAttribute('data-nomer'));
    let tmp = btn.innerHTML;
    btn.innerHTML = msg ?? 'Tersalin';
    btn.disabled = true;

    setTimeout(() => {
        btn.innerHTML = tmp;
        btn.disabled = false;
        btn.focus();
    }, 1500);
};
const eliminate = (e) => {
    let toShow = [];

    $('.btn-check:checked').map(function () {
        toShow.push($(this).data("show"));
    });
    $('#TypeList tbody td p').hide(300);
    $(toShow.join('') + ' p').show(300);

}

$('.btn-check').on("click", eliminate);