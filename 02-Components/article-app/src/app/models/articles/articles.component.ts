import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleData } from '../../data/data';
import { Article } from '../article.model';
import { ArticleComponent } from '../article/article.component';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [ArticleComponent, CommonModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent implements OnInit {
  articles: Article[] = [];

  constructor() { }

  ngOnInit(): void {
    this.articles = new ArticleData().getData();
    console.log(this.articles);
    
  }
}
