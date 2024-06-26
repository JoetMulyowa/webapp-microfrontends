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


export interface FilterData { 
    operator?: FilterData.OperatorEnum;
    values?: Array<string>;
}
export namespace FilterData {
    export type OperatorEnum = 'EQ' | 'NEQ' | 'GTE' | 'LTE' | 'GT' | 'LT' | 'LIKE' | 'NLIKE' | 'BTW' | 'NBTW' | 'IN' | 'NIN' | 'NULL' | 'NNULL';
    export const OperatorEnum = {
        Eq: 'EQ' as OperatorEnum,
        Neq: 'NEQ' as OperatorEnum,
        Gte: 'GTE' as OperatorEnum,
        Lte: 'LTE' as OperatorEnum,
        Gt: 'GT' as OperatorEnum,
        Lt: 'LT' as OperatorEnum,
        Like: 'LIKE' as OperatorEnum,
        Nlike: 'NLIKE' as OperatorEnum,
        Btw: 'BTW' as OperatorEnum,
        Nbtw: 'NBTW' as OperatorEnum,
        In: 'IN' as OperatorEnum,
        Nin: 'NIN' as OperatorEnum,
        Null: 'NULL' as OperatorEnum,
        Nnull: 'NNULL' as OperatorEnum
    };
}


