import { Component, Input, OnInit } from '@angular/core';
import { AdvancePaymentAllocationData, CreditAllocation, PaymentAllocation } from '@mifosx-app/products/loan-products/loan-product-stepper/loan-product-payment-strategy-step/payment-allocation-model';

@Component({
  selector: 'mifosx-view-advance-paymeny-allocation',
  templateUrl: './view-advance-paymeny-allocation.component.html',
  styleUrls: ['./view-advance-paymeny-allocation.component.scss']
})
export class ViewAdvancePaymenyAllocationComponent implements OnInit {

  @Input() paymentAllocation: PaymentAllocation | null;
  @Input() creditAllocation: CreditAllocation | null;
  @Input() advancePaymentAllocationData: AdvancePaymentAllocationData;

  constructor() { }

  ngOnInit(): void {
  }

  transactionTypeValue(code: string): string {
    if (this.advancePaymentAllocationData == null) {
      return code;
    }
    const transactionType =  this.advancePaymentAllocationData.transactionTypes.find(t => t.code === code);
    return transactionType.value;
  }

  allocationRuleValue(code: string): string {
    if (this.advancePaymentAllocationData == null) {
      return code;
    }
    const allocationType =  this.advancePaymentAllocationData.allocationTypes.find(t => t.code === code);
    return allocationType.value;
  }

  futureInstallmentRuleValue(code: string): string {
    if (this.advancePaymentAllocationData == null) {
      return code;
    }
    const futureInstallmentAllocationRule =  this.advancePaymentAllocationData.futureInstallmentAllocationRules.find(t => t.code === code);
    return futureInstallmentAllocationRule.value;
  }

}
