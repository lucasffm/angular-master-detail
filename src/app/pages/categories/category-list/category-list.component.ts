import { Component, OnInit } from "@angular/core";
import { Category } from "../shared/category.model";
import { CategoryService } from "../shared/category.service";

@Component({
  selector: "app-category-list",
  templateUrl: "./category-list.component.html",
  styleUrls: ["./category-list.component.css"]
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];
  constructor(private service: CategoryService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe(
      categories => (this.categories = categories),
      error => console.log("Erro ao carregar a lista", error)
    );
  }

  deleteCategory(category: Category) {
    const mustDelete = confirm("Deseja Realmente excluir este item?");
    if (mustDelete) {
      this.service.delete(category.id).subscribe(
        () =>
          (this.categories = this.categories.filter(cat => cat !== category)),
        error => console.log("Erro ao carregar a lista", error)
      );
    }
  }
}
