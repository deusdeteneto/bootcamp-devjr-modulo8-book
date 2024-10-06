import { Component } from '@angular/core';
import { Book } from '../../Book';
import { title } from 'process';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent {
  books: Book[] = [
    {
      id: 1,
      title: 'Java 24 horas',
      author: 'Glauco Todesco',
      price: 40.5,
    },
    {
      id: 2,
      title: 'Angular 24 horas',
      author: 'Fernanda Maria',
      price: 37.8,
    },
    {
      id: 3,
      title: 'AWS 24 horas',
      author: 'Juliana Silva',
      price: 44.79,
    },
    {
      id: 4,
      title: 'JavaScript 24 horas',
      author: 'Antenor Lucas',
      price: 28.5,
    },
  ];
}
