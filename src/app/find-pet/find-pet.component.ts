import { Component, OnInit } from '@angular/core';

interface SelectableItem {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-find-pet',
  templateUrl: './find-pet.component.html',
  styleUrls: ['./find-pet.component.scss']
})
export class FindPetComponent implements OnInit {

  public colors: SelectableItem[] = [
    { value: 0, viewValue: "Черный" },
    { value: 1, viewValue: "Белый" },
    { value: 2, viewValue: "Серый" },
    { value: 3, viewValue: "Любой" }
  ];

  public sexes: SelectableItem[] = [{
    value: 0, viewValue: "м"
  }, { value: 1, viewValue: "ж" },
  { value: 2, viewValue: "Любой" }
  ]

  public maleAnimals: SelectableItem[] = [{ value: 0, viewValue: "Кот" }, { value: 1, viewValue: "Пёс" }];
  public femaleAnimals: SelectableItem[] = [{ value: 0, viewValue: "Кошка" }, { value: 1, viewValue: "Собака" }];
  public animalsList: SelectableItem[] = this.maleAnimals;

  public advertTypes: SelectableItem[] = [{ value: 0, viewValue: "Пропал" }, { value: 1, viewValue: "Найден" }]

  public selectedOptions = { color: 3, sex: 2, animal: 0, advertType: 0 };

  constructor() { }

  ngOnInit(): void {
  }

  public sexChange(sex: number) {
    this.animalsList = sex === 1 ? this.femaleAnimals : this.maleAnimals;
  }

}
