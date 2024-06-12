/**
 * Apache Fineract REST API
 * Apache Fineract is a secure, multi-tenanted microfinance platform. The goal of the Apache Fineract API is to empower developers to build apps on top of the Apache Fineract Platform. The https://cui.fineract.dev[reference app] (username: mifos, password: password) works on the same demo tenant as the interactive links in this documentation. Until we complete the new REST API documentation you still have the legacy documentation available https://fineract.apache.org/legacy-docs/apiLive.htm[here]. Please check https://fineract.apache.org/docs/current[the Fineract documentation] for more information.
 *
 * The version of the OpenAPI document: 1.11.0-SNAPSHOT
 * Contact: dev@fineract.apache.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { GetRecurringDepositAccountsMaxDepositTermType } from './getRecurringDepositAccountsMaxDepositTermType';
import { GetRecurringDepositAccountsSummary } from './getRecurringDepositAccountsSummary';
import { GetRecurringDepositAccountsInterestCalculationType } from './getRecurringDepositAccountsInterestCalculationType';
import { GetRecurringDepositAccountsMinDepositTermType } from './getRecurringDepositAccountsMinDepositTermType';
import { GetRecurringDepositAccountsDepositPeriodFrequency } from './getRecurringDepositAccountsDepositPeriodFrequency';
import { GetRecurringDepositAccountsRecurringDepositFrequencyType } from './getRecurringDepositAccountsRecurringDepositFrequencyType';
import { GetRecurringDepositAccountsStatus } from './getRecurringDepositAccountsStatus';
import { GetRecurringDepositAccountsCurrency } from './getRecurringDepositAccountsCurrency';
import { GetRecurringDepositAccountsInterestPostingPeriodType } from './getRecurringDepositAccountsInterestPostingPeriodType';
import { GetRecurringDepositAccountsInterestCalculationDaysInYearType } from './getRecurringDepositAccountsInterestCalculationDaysInYearType';
import { GetRecurringDepositAccountsTimeline } from './getRecurringDepositAccountsTimeline';
import { GetRecurringDepositAccountsInterestCompoundingPeriodType } from './getRecurringDepositAccountsInterestCompoundingPeriodType';


/**
 * GetRecurringDepositAccountsResponse
 */
export interface GetRecurringDepositAccountsResponse { 
    accountNo?: number;
    clientId?: number;
    clientName?: string;
    currency?: GetRecurringDepositAccountsCurrency;
    depositAmount?: number;
    depositPeriod?: number;
    depositPeriodFrequency?: GetRecurringDepositAccountsDepositPeriodFrequency;
    fieldOfficerId?: number;
    id?: number;
    interestCalculationDaysInYearType?: GetRecurringDepositAccountsInterestCalculationDaysInYearType;
    interestCalculationType?: GetRecurringDepositAccountsInterestCalculationType;
    interestCompoundingPeriodType?: GetRecurringDepositAccountsInterestCompoundingPeriodType;
    interestPostingPeriodType?: GetRecurringDepositAccountsInterestPostingPeriodType;
    maturityAmount?: number;
    maturityDate?: string;
    maxDepositTerm?: number;
    maxDepositTermType?: GetRecurringDepositAccountsMaxDepositTermType;
    minDepositTerm?: number;
    minDepositTermType?: GetRecurringDepositAccountsMinDepositTermType;
    preClosurePenalApplicable?: boolean;
    recurringDepositAmount?: number;
    recurringDepositFrequency?: number;
    recurringDepositFrequencyType?: GetRecurringDepositAccountsRecurringDepositFrequencyType;
    savingsProductId?: number;
    savingsProductName?: string;
    status?: GetRecurringDepositAccountsStatus;
    summary?: GetRecurringDepositAccountsSummary;
    timeline?: GetRecurringDepositAccountsTimeline;
}
