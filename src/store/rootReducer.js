import { combineReducers } from 'redux';
import {prismaPlannedSpendReducer} from './prisma_planned_spend/prisma_planned_spend.reducer';
import {invoicesReducer} from './invoices/invoices.reducer';
import {agingReducer} from './aging/aging.reducer';
import {payHistoryReducer} from './pay_history/pay_history.reducer'
import {appReducer} from './app/app.reducer'
import { draftBillablesReducer } from './draft_billing/draft_billing.reducer';
import { authorizationsReducer } from './authorizations/authorizations.reducer';

//all slices are combined into one reducer to be used in the Store
export default combineReducers({
  prismaPlannedSpend: prismaPlannedSpendReducer,
  invoices: invoicesReducer,
  aging: agingReducer,
  payHistory: payHistoryReducer,
  app: appReducer,
  draftBillables: draftBillablesReducer,
  authorizations: authorizationsReducer
});