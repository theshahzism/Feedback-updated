import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  questions = [
    {
      question: "What is your favorite programming language?",
      options: ["JavaScript", "Python", "Java", "C++"],
      singleSelect: true 
    },
    {
      question: "What is your preferred framework or library?",
      options: ["React", "Angular", "Vue.js", "jQuery"],
      singleSelect: true 
    },
    {
      question: "Which backend technology do you prefer?",
      options: ["Node.js", "Django", "Spring Boot", "Express.js"]
    },
    {
      question: "Which database system do you use most?",
      options: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"]
    },
    {
      question: "What is your preferred text editor or IDE?",
      options: ["Visual Studio Code", "Sublime Text", "IntelliJ IDEA", "Atom"]
    },
    {
      question: "What is your favorite programming language?",
      type: "string" 
    },
    {
      question: "Any additional comments?",
      type: "string" // Indicates text input question
    }
  ];
  options=[
    ["JavaScript", "Python", "Java", "C++"],
    ["React", "Angular", "Vue.js", "jQuery"],
  ]

  currentQuestionIndex = 0;
  currentQuestion = this.questions[this.currentQuestionIndex];
  selectedOptions: string[] = [];
  textAnswer: string = '';

  nextQuestion() {
    if (this.validateAnswer()) {
      this.saveAnswer();
      this.currentQuestionIndex++;
      this.currentQuestion = this.questions[this.currentQuestionIndex];
      this.selectedOptions = [];
      this.textAnswer = '';
    } else {
      alert('Please provide an answer before proceeding.');
    }
  }

  prevQuestion() {
    this.currentQuestionIndex--;
    this.currentQuestion = this.questions[this.currentQuestionIndex];
    this.selectedOptions = [];
    this.textAnswer = '';
  }

  handleAnswerChange(event: any) {
    if (this.currentQuestion.singleSelect) {
      this.selectedOptions = [event.target.value];
    } else {
      const option = event.target.value;
      if (event.target.checked) {
        this.selectedOptions.push(option);
      } else {
        this.selectedOptions = this.selectedOptions.filter(item => item !== option);
      }
    }
  }

  validateAnswer() {
    if (this.currentQuestion.options) {
      return this.currentQuestion.singleSelect ? this.selectedOptions.length > 0 : this.selectedOptions.length > 0;
    } else {
      return this.textAnswer.trim() !== '';
    }
  }

  saveAnswer() {
    if (this.currentQuestion.options) {
      console.log('Selected options:', this.selectedOptions);
    } else {
      console.log('Text answer:', this.textAnswer);
    }
  }

  handleSubmit() {
    if (this.validateAnswer()) {
      this.saveAnswer();
      alert('Form submitted successfully!');
      // You can reset or navigate away after submission
    } else {
      alert('Please provide an answer before submitting.');
    }
  }
}
