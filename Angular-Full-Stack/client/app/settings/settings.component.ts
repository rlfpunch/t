import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { SiteService } from '../services/site.service';
import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  site = {};
  sites = [];
  isLoading = true;
  isEditing = false;

  addSiteForm: FormGroup;
  name = new FormControl('', Validators.required);
  walletUrl = new FormControl('', Validators.required);
  orderUrl = new FormControl('', Validators.required);
  ordersUrl = new FormControl('', Validators.required);
  orderDetailUrl = new FormControl('', Validators.required);
  cancelUrl = new FormControl('', Validators.required);
  marketBuyUrl = new FormControl('', Validators.required);
  marketSellUrl = new FormControl('', Validators.required);
  currencies = new FormControl(["BTC", "ETH", "DASH", "LTC", "XRP", "BCH", "XMR"]);

  constructor(private siteService: SiteService,
              private formBuilder: FormBuilder,
              private http: Http,
              public toast: ToastComponent) { }

  ngOnInit() {
    this.getSites();
    this.addSiteForm = this.formBuilder.group({
      name: this.name,
      walletUrl: this.walletUrl,
      orderUrl: this.orderUrl, 
      ordersUrl: this.ordersUrl, 
      orderDetailUrl: this.orderDetailUrl,
      cancelUrl: this.cancelUrl,
      marketBuyUrl: this.marketBuyUrl,
      marketSellUrl: this.marketSellUrl,
      currencies: this.currencies
    });
  }

  getSites() {
    this.siteService.getSites().subscribe(
      data => this.sites = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  addSite() {
    this.siteService.addSite(this.addSiteForm.value).subscribe(
      res => {
        const newSite = res.json();
        this.sites.push(newSite);
        this.addSiteForm.reset();
        this.toast.setMessage('item added successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  enableEditing(site) {
    this.isEditing = true;
    this.site = site;
  }

  cancelEditing() {
    this.isEditing = false;
    this.site = {};
    this.toast.setMessage('item editing cancelled.', 'warning');
    // reload the cats to reset the editing
    this.getSites();
  }

  editSite(site) {
    this.siteService.editSite(site).subscribe(
      res => {
        this.isEditing = false;
        this.site = site;
        this.toast.setMessage('item edited successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  deleteSite(site) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.siteService.deleteSite(site).subscribe(
        res => {
          const pos = this.sites.map(elem => elem._id).indexOf(site._id);
          this.sites.splice(pos, 1);
          this.toast.setMessage('item deleted successfully.', 'success');
        },
        error => console.log(error)
      );
    }
  }

}
