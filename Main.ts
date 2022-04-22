import { Serie } from './serie.js';
import { dataSeries } from './data.js';

let seriesTableBody: HTMLElement = document.getElementById('series')!;
let averageSeasons: HTMLElement = document.getElementById('averageSeasons')!;

loadSeriesTable(dataSeries);
averageSeasons.innerHTML = `<b>Seasons average:</b> ${average(dataSeries)}`;

function loadSeriesTable(series: Serie[]): void {
    series.forEach(serie => {
        let tr: HTMLElement = document.createElement('tr');
        tr.innerHTML = `
        <td><b>${serie.getIndex()}<b></td>
        <td><a href="${serie.getLinkImage()}" target="_blank">${serie.getName()}</a></td>
        <td>${serie.getchannel()}</td>
        <td>${serie.getSeasons()}</td>`;
    seriesTableBody.appendChild(tr);
    });
}

//function average of seasons
function average(series: Serie[]): number {
    let sum: number = 0;
    series.forEach(serie => {
        sum += serie.getSeasons();
    });
    return sum / series.length;
}