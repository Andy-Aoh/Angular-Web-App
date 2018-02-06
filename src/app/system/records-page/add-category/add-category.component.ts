import {Component, EventEmitter, OnDestroy, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {CategoriesService} from '../../shared/services/categories.service';
import {Category} from '../../shared/models/category.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'wfm-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnDestroy {
  @Output() onCategoryAdd = new EventEmitter<Category>();
  sub: Subscription;

  constructor(private categoriesService: CategoriesService) {
  }

  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe();
  }

  onSubmit(form: NgForm) {
    let {name, capacity} = form.value;
    const category = new Category(name, capacity);
    if (capacity < 0) capacity *= -1;

    this.sub = this.categoriesService.addCategory(category)
      .subscribe((category: Category) => {
        form.reset();
        form.form.patchValue({capacity: 1});
        this.onCategoryAdd.emit(category);
      });
  }
}
