import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public index: number = 0;
  public currentRating: number = 0;
  private countProcessedBooks: number = 1;
  public showFinishValue: boolean = false;
  public showRatingMoment: boolean = false;
  private result: number = 0;

  // Пет предварително дефинирани книги
  public bookList: any = [
    {
      title: 'Великият Гетсби',
      shortDescription: 'Великият Гетсби е роман',
      author: 'Ф. Скот Фицджералд',
      rating: 0,
    },
    {
      title: 'Властелинът на пръстените',
      shortDescription: 'Властелинът на пръстените е епичен фентъзи роман',
      author: 'Дж. Р. Р. Толкин',
      rating: 0,
    },
    {
      title: 'Патиланци',
      shortDescription: 'Патиланци съдържа кратки разкази',
      author: 'Ран Босилек',
      rating: 0,
    },
    {
      title: 'Под игото',
      shortDescription: 'Под игото е роман в три части',
      author: 'Иван Вазов',
      rating: 0,
    },
    {
      title: 'Арменци',
      shortDescription: 'Арменци е стихотворение',
      author: 'Пейо Яворов',
      rating: 0,
    },
    // { title: '', shortDescription: '', author: '', rating: 0 },
    // { title: '', shortDescription: '', author: '', rating: 0 },
    // { title: '', shortDescription: '', author: '', rating: 0 },
    // { title: '', shortDescription: '', author: '', rating: 0 },
    // { title: '', shortDescription: '', author: '', rating: 0 },
  ];

  private processNextBook(): void {
    this.index++;
    this.countProcessedBooks++;
    this.showRatingMoment = true;
   // console.log(this.countProcessedBooks);
  }

  public processRating(ratingValue: number): void {
    if (this.index == 0) {
      this.countProcessedBooks = 1;
      this.result = 0;
    }
    this.currentRating = this.result;
    this.result = this.currentRating + ratingValue;
    this.currentRating =
      (this.result) / this.countProcessedBooks;
    this.bookList[this.index].rating = ratingValue;
     console.log(this.currentRating);
     console.log(ratingValue);
    // console.log(this.bookList);
    this.processNextBook();
  }

  public processInputTitle(input: any): void {
    this.bookList[this.index].title = input.target.value;
  }

  public processInputShortDescription(input: any): void {
    this.bookList[this.index].shortDescription = input.target.value;
  }

  public processInputAuthor(input: any): void {
    this.bookList[this.index].author = input.target.value;
  }

  public showFinish(): void {
    this.showFinishValue = true;
  }
}
