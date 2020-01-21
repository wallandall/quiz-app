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

  sumCorrect() {
    let correct = 0;
    this.answers.values.length;
  }

  ngOnInit(): void {
    this.totalQuestions = this.answers.values.length;
    this.totalCorrect = 0;
    console.log(this.sumCorrect);
  }
}
