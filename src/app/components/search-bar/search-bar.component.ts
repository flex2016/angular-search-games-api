import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log(
      '🚀 ~ file: search-bar.component.ts ~ line 18 ~ SearchBarComponent ~ onSubmit ~ form',
      form
    );

    this.router.navigate(['search', form.value.search]);
    if (form.value.search.length > 1 || !form.value.search === null) {
      form.reset();
    }
  }
}
