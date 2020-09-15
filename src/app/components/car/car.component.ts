import {Component, OnInit} from '@angular/core';
import {IColorModel} from '../../models/color.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  name: string;
  speed: number;
  model: string;
  colors: IColorModel;
  options: string[];
  isEdit: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.name = 'Audi';
    this.speed = 235;
    this.model = 'RS8';
    this.colors = {
      car: 'white',
      salon: 'black',
      wheels: 'silver'
    };
    this.options = ['ABS', 'Автопілот', 'Люк'];
    this.isEdit = false;
  }

  carSelect(carName) {
    if (carName === 'Bmw') {
      this.name = 'BMW ';
      this.speed = 270;
      this.model = 'M5';
      this.colors = {
        car: 'black',
        salon: 'black',
        wheels: 'blue'
      };
      this.options = ['ABS', 'Автопілот', 'Люк'];
    } else if (carName === 'Audi') {
      this.name = 'audi';
      this.speed = 235;
      this.model = 'RS8';
      this.colors = {
        car: 'white',
        salon: 'black',
        wheels: 'silver'
      };
      this.options = ['ABS', 'Автопілот', 'Камера заднього виду'];
    } else {
      this.name = 'Mercedes';
      this.speed = 210;
      this.model = 'C180';
      this.colors = {
        car: 'white',
        salon: 'brown',
        wheels: 'white'
      };
      this.options = ['ABS', 'Автопілот', 'Люк'];
    }
  }

  addOption(option: string) {
    this.options.unshift(option);
    return false;
  }

  deleteOption(option: string) {
    for (let i = 0; i < this.options.length; i++) {
      if (this.options[i] === option) {
        this.options.splice(i, 1);
        break;
      }

    }
  }

  showEdit() {
  this.isEdit = !this.isEdit;
  }
}
