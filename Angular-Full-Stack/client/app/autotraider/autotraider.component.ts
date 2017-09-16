import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { AlgorithmService } from '../services/algorithm.service';
import { ToastComponent } from '../shared/toast/toast.component';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-algorithms',
  templateUrl: './autotraider.component.html',
  styleUrls: ['./autotraider.component.scss']
})
export class AutotraiderComponent implements OnInit {

  algorithm = {};
  algorithms = [];
  isLoading = true;
  isEditing = false;

  addAlgorithmForm: FormGroup;
  userId = new FormControl(this.auth.currentUser._id, Validators.required);
  name = new FormControl('', Validators.required);
  site = new FormControl('', Validators.required);

  constructor(private algorithmService: AlgorithmService,
              private auth: AuthService,
              private formBuilder: FormBuilder,
              private http: Http,
              public toast: ToastComponent) { }

  ngOnInit() {
    this.getAlgorithms();
    this.addAlgorithmForm = this.formBuilder.group({
      userId: this.userId,
      name: this.name,
      site: this.site      
    });
  }

  getAlgorithms() {
    this.algorithmService.getAlgorithms(this.auth.currentUser).subscribe(
      data => this.algorithms = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  addAlgorithm() {
    this.algorithmService.addAlgorithm(this.addAlgorithmForm.value).subscribe(
      res => {
        const newAlgorithm = res.json();
        this.algorithms.push(newAlgorithm);
        this.addAlgorithmForm.reset();
        this.toast.setMessage('item added successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  enableEditing(algorithm) {
    this.isEditing = true;
    this.algorithm = algorithm;
  }

  cancelEditing() {
    this.isEditing = false;
    this.algorithm = {};
    this.toast.setMessage('item editing cancelled.', 'warning');
    this.getAlgorithms();
  }

  editAlgorithm(algorithm) {
    this.algorithmService.editAlgorithm(algorithm).subscribe(
      res => {
        this.isEditing = false;
        this.algorithm = algorithm;
        this.toast.setMessage('item edited successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  deleteAlgorithm(algorithm) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.algorithmService.deleteAlgorithm(algorithm).subscribe(
        res => {
          const pos = this.algorithms.map(elem => elem._id).indexOf(algorithm._id);
          this.algorithms.splice(pos, 1);
          this.toast.setMessage('item deleted successfully.', 'success');
        },
        error => console.log(error)
      );
    }
  }

}
