import {Component, ViewChild} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Chart} from 'chart.js';

@Component({
  selector: 'page-user-detail',
  templateUrl: 'user-detail.html'
})
export class UserDetailPage {

  @ViewChild('doughnutCanvas') doughnutCanvas;

  doughnutChart: any;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {


    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

      type: 'bar',
      data: {
        labels: ["Java", "Angular", "TypeScript", "Kotlin"],
        datasets: [{
          data: [5, 2, 2, 1, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }
      }
    });

  }
}
