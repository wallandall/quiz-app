import { Component, Input, OnInit } from "@angular/core";
import { Answers } from "../quiz.model";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.scss"]
})
export class ResultsComponent {
  @Input() answers: Answers[];

  public totalQuestions;
  public totalCorrect;
  public percentage;

  sumCorrectAnswers(answers: Answers[]): number {
    let score = 0;

    for (let [key, value] of Object.entries(answers.values)) {
      if (value.correct) {
        score++;
      }
    }

    return score;
  }

  ngOnInit(): void {
    this.totalQuestions = this.answers.values.length;
    this.totalCorrect = this.sumCorrectAnswers(this.answers);
    this.percentage = (this.totalCorrect / this.totalQuestions) * 100;
  }
}
