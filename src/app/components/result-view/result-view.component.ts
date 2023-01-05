import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

type Classification = 'Normal' | 'Underweight' | 'Overweight' | 'Obese';

@Component({
  selector: 'result-view',
  templateUrl: './result-view.component.html',
  styleUrls: ['./result-view.component.css'],
})
export class ResultViewComponent {
  BMI = 0;

  classification: Classification = 'Normal';

  summaries = {
    Normal: 'Normal',
    Underweight: 'Bajo de peso',
    Overweight: 'Con sobrepeso',
    Obese: 'Con obesidad',
  };

  interpretations = {
    Normal: 'Tu peso está bien, sigue así',
    Underweight: 'Eres demasiado delgado, deberías comer más',
    Overweight: 'Tienes peso de más, podrías empezar a hacer ejercicio',
    Obese: 'Tu peso es excesivo, deberías hacer ejercicio y/o dieta',
  };

  constructor(private route: ActivatedRoute) {
    this.updateBMI();
    this.classify();
  }

  updateBMI() {
    const retrievedValue = this.route.snapshot.paramMap.get('value');
    this.BMI = retrievedValue != null ? +retrievedValue : 0;
  }

  classify() {
    if (this.BMI <= 0)
      throw new Error('BMI must be > 0. Sure the weight introduced was 0');
    if (this.BMI > 0 && this.BMI < 18.5) this.classification = 'Underweight';
    else if (this.BMI >= 18.5 && this.BMI < 25) this.classification = 'Normal';
    else if (this.BMI >= 25 && this.BMI < 30)
      this.classification = 'Overweight';
    else this.classification = 'Obese';
  }

  getInterpretation() {
    return this.interpretations[this.classification];
  }

  getSummary() {
    return this.summaries[this.classification];
  }
}
