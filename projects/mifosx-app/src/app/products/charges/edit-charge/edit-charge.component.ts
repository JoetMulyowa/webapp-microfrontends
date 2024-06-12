/** Angular Imports */
import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

/** Custom Services */
import { ProductsService } from '@mifosx-app/products/products.service';
import { SettingsService } from '@mifosx-lib/settings/settings.service';


/**
 * Edit Charge component.
 */
@Component({
  selector: 'mifosx-edit-charge',
  templateUrl: './edit-charge.component.html',
  styleUrls: ['./edit-charge.component.scss']
})
export class EditChargeComponent implements OnInit {

  /** Selected Data. */
  chargeData: any;
  /** Charge form. */
  chargeForm: UntypedFormGroup;
  /** Select Income. */
  selectedIncome: any;
  /** Select Time Type. */
  selectedTime: any;
  /** Select Currency Type. */
  selectedCurrency: any;
  /** Select Calculation Type. */
  selectedCalculation: any;
  /** Charge Time Type options. */
  chargeTimeTypeOptions: any;
  /** Charge Calculation Type options. */
  chargeCalculationTypeOptions: any;
  /** Show Penalty. */
  showPenalty = true;
  /** Add Fee Frequency. */
  addFeeFrequency = true;
  /** Show GL Accounts. */
  showGLAccount = false;
  /** Charge Payment Mode. */
  chargePaymentMode = false;
  /** Show Fee Options. */
  showFeeOptions = false;

  /**
   * Retrieves the charge data from `resolve`.
   * @param {ProductsService} productsService Products Service.
   * @param {FormBuilder} formBuilder Form Builder.
   * @param {ActivatedRoute} route Activated Route.
   * @param {Router} router Router for navigation.
   * @param {SettingsService} settingsService Settings Service
   */
  constructor(private productsService: ProductsService,
    private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private settingsService: SettingsService) {
    this.route.data.subscribe((data: { chargesTemplate: any }) => {
      this.chargeData = data.chargesTemplate;
    });
  }

  ngOnInit() {
    this.editChargeForm();
  }

  /**
   * Edit Charge form.
   */
  editChargeForm() {
    this.showFeeOptions = (this.chargeData.feeInterval && this.chargeData.feeInterval > 0);

    this.chargeForm = this.formBuilder.group({
      'name': [this.chargeData.name, Validators.required],
      'chargeappliesTo': [{ value: this.chargeData.chargeappliesTo.id, disabled: true }, Validators.required],
      'currencyCode': [this.chargeData.currency.code, Validators.required],
      'amount': [this.chargeData.amount, Validators.required],
      'active': [this.chargeData.active],
      'penalty': [this.chargeData.penalty],
      'minCap': [this.chargeData.minCap],
      'maxCap': [this.chargeData.maxCap],
      'chargeTimeType': [this.chargeData.chargeTimeType.id, Validators.required],
      'chargeCalculationType': [this.chargeData.chargeCalculationType.id, Validators.required],
    });
    switch (this.chargeData.chargeappliesTo.value) {
      case 'Loan': {
        this.chargeTimeTypeOptions = this.chargeData.loanChargeTimeTypeOptions;
        this.chargeCalculationTypeOptions = this.chargeData.loanChargeCalculationTypeOptions;
        this.addFeeFrequency = true;
        this.chargePaymentMode = true;
        this.chargeForm.addControl('chargePaymentMode', this.formBuilder.control(this.chargeData.chargePaymentMode.id, Validators.required));
        if (this.showFeeOptions) {
          this.getFeeFrequency(this.showFeeOptions);
          this.chargeForm.patchValue({
            'feeInterval': this.chargeData.feeInterval,
            'feeFrequency': this.chargeData.feeFrequency.id
          });
        }
        break;
      }
      case 'Savings': {
        this.chargeTimeTypeOptions = this.chargeData.savingsChargeTimeTypeOptions;
        this.chargeCalculationTypeOptions = this.chargeData.savingsChargeCalculationTypeOptions;
        this.addFeeFrequency = false;
        break;
      }
      case 'Shares': {
        this.chargeTimeTypeOptions = this.chargeData.shareChargeTimeTypeOptions;
        this.chargeCalculationTypeOptions = this.chargeData.shareChargeCalculationTypeOptions;
        this.addFeeFrequency = false;
        this.showGLAccount = false;
        this.showPenalty = false;
        break;
      }
      default: {
        this.chargeCalculationTypeOptions = this.chargeData.clientChargeCalculationTypeOptions;
        this.chargeTimeTypeOptions = this.chargeData.clientChargeTimeTypeOptions;
        this.showGLAccount = true;
        this.addFeeFrequency = false;
        this.chargeForm.addControl('incomeAccountId', this.formBuilder.control(this.chargeData.incomeOrLiabilityAccount.id, Validators.required));
        break;
      }
    }
    if (this.chargeData.taxGroup) {
      this.chargeForm.addControl('taxGroupId', this.formBuilder.control({ value: this.chargeData.taxGroup.id, disabled: true }));
    } else {
      this.chargeForm.addControl('taxGroupId', this.formBuilder.control({ value: '' }));
    }
  }

  /**
   * Get Add Fee Frequency value.
   */
  getFeeFrequency(isChecked: boolean) {
    this.showFeeOptions = isChecked;
    if (isChecked) {
      this.chargeForm.addControl('feeInterval', this.formBuilder.control('', Validators.required));
      this.chargeForm.addControl('feeFrequency', this.formBuilder.control('', Validators.required));
    } else {
      this.chargeForm.removeControl('feeInterval');
      this.chargeForm.removeControl('feeFrequency');
    }
  }

  /**
   * Submits Edit Charge form.
   */
  submit() {
    const charges = this.chargeForm.getRawValue();
    charges.locale = this.settingsService.language.code;
    if (charges.taxGroupId.value === '') {
      delete charges.taxGroupId;
    }
    if (!charges.minCap) {
      delete charges.minCap;
    }
    if (!charges.maxCap) {
      delete charges.maxCap;
    }
    this.productsService.updateCharge(this.chargeData.id.toString(), charges)
      .subscribe((response: any) => {
        this.router.navigate(['../'], { relativeTo: this.route });
      });
  }

}
