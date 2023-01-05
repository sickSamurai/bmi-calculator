import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'result-view',
  templateUrl: './result-view.component.html',
  styleUrls: ['./result-view.component.css'],
})
export class ResultViewComponent {
  BMI: number;

  classifications: 'Normal' | 'Underweight' | 'Overweight' | 'Obese' = 'Normal';

  summaries = {
    Normal: 'Normal',
    Underweight: 'Bajo de peso',
    Overweight: 'Con sobrepeso',
    Obese: 'Con obesidad',
  };

  interpretations = {
    Normal: 'Tu peso está bien, sigue así',
    Underweight: 'Eres muy alto para tu peso, deberías comer más',
    Overweight: 'Tienes peso de más, podrías empezar a hacer ejercicio',
    Obese: 'Tu peso es excesivo, deberías hacer ejercicio y/o dieta',
  };

  constructor(private route: ActivatedRoute) {
    const retrievedValue = route.snapshot.paramMap.get('value');
    retrievedValue !== null ? (this.BMI = +retrievedValue) : (this.BMI = 0);
    this.classify();
  }

  classify() {
    if (this.BMI <= 18.5) this.classifications = 'Underweight';
    if (this.BMI > 18.5 && this.BMI <= 25) this.classifications = 'Normal';
    if (this.BMI > 25 && this.BMI <= 30) this.classifications = 'Overweight';
    if (this.BMI > 30) this.classifications = 'Obese';
  }

  getInterpretation() {
    return this.interpretations[this.classifications];
  }

  getSummary() {
    return this.summaries[this.classifications];
  }
}
