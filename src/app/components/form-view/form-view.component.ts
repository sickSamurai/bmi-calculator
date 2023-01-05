import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.css'],
})
export class FormViewComponent {
  age = 20;
  weight = 70;
  height = 175;
  sex: 'M' | 'F' = 'M';

  constructor(private router: Router) {}

  incrementAge = () => this.age++;

  decrementAge = () => {
    if (this.age > 0) this.age--;
  };

  incrementWeight = () => this.weight++;

  decrementWeight = () => {
    if (this.weight > 0) this.weight--;
  };

  setMasculineSex = () => (this.sex = 'M');

  setFeminineSex = () => (this.sex = 'F');

  calculateBMI() {
    const BMI = (this.weight * 10000) / Math.pow(this.height, 2);
    this.router.navigate(['./results', BMI]);
  }
}
