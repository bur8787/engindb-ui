import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserDetailPage} from "../user-detail/user-detail";
import {Chart} from 'chart.js';

/**
 * Generated class for the UserSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-search',
  templateUrl: 'user-search.html',
})
export class UserSearchPage {
  @ViewChild('doughnutCanvas') doughnutCanvas;

  doughnutChart: any;

  todo = {title: 'title', description: "説明"}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

      type: 'bar',
      data: {
        labels: ["Java", "Angular", "TypeScript", "Kotlin"],
        datasets: [{
          data: [5, 2, 2, 1],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 206, 86)',
            'rgb(75, 192, 192)'
          ],
        }]
      },
      options: {
        legend: {
          display: false
        },
        responsive: false,
        scales: {
          yAxes: [{
            ticks: {
              display: false,
              beginAtZero:true
            },
            gridLines: {
              display: false,
            }
          }],
          xAxes: [{
            gridLines: {
              display: false,
            }
          }]
        }
      }
    });

  }

  goToUserDetail() {
    this.navCtrl.push(UserDetailPage);
  }


}
