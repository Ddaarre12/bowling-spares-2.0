function pressCheck(buttonID) {
    let num = /\d+/;
    const row = document.getElementById('rowcheck' + buttonID.match(num));
    row.innerHTML = Number(row.innerHTML) + 1;
    calc(buttonID);
}

function pressCheckSub(buttonID) {
    let num = /\d+/;
    const row = document.getElementById('rowcheck' + buttonID.match(num));
    if (row.innerHTML > 0) {
        row.innerHTML = Number(row.innerHTML)- 1;
    }
    calc(buttonID);
}

function pressMiss(buttonID) {
    let num = /\d+/;
    const row = document.getElementById('rowmiss' + buttonID.match(num));
    row.innerHTML = Number(row.innerHTML) + 1;
    calc(buttonID);
}

function pressMissSub(buttonID) {
    let num = /\d+/;
    const row = document.getElementById('rowmiss' + buttonID.match(num));
    if (row.innerHTML > 0) {
        row.innerHTML = Number(row.innerHTML)- 1;
    }
    calc(buttonID);
}

function calc(buttonID) {
    let num = /\d+/;
    const check = document.getElementById('rowcheck' + buttonID.match(num)).innerHTML;
    const miss = document.getElementById('rowmiss' + buttonID.match(num)).innerHTML;
    const row = document.getElementById('percent' + buttonID.match(num));
    console.log([check, miss]);
    if (check == 0 && miss == 0) {
        row.innerHTML = '0%';
    }
    else if (miss == 0 && check > 0) {
        row.innerHTML = '100%';
    }
    else {
        row.innerHTML = ((Number(check) / (Number(check) + Number(miss))).toFixed(2) * 100).toFixed() + '%';
    }
}