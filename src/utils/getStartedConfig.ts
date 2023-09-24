import { t } from 'fyo';
import { ModelNameEnum } from 'models/types';
import { openSettings, routeTo } from './ui';
import { GetStartedConfigItem } from './types';

export function getGetStartedConfig(): GetStartedConfigItem[] {
  /* eslint-disable @typescript-eslint/no-misused-promises */
  return [
    {
      label: t`Organisation`,
      items: [
        {
          key: 'General',
          label: t`General`,
          icon: 'general',
          description: t`Set up your company information, email, country and fiscal year`,
          fieldname: 'companySetup',
          action: () => openSettings(ModelNameEnum.AccountingSettings),
        },
        {
          key: 'Print',
          label: t`Print`,
          icon: 'invoice',
          description: t`Customize your invoices by adding a logo and address details`,
          fieldname: 'printSetup',
          action: () => openSettings(ModelNameEnum.PrintSettings),
        },
        {
          key: 'System',
          label: t`System`,
          icon: 'system',
          description: t`Setup system defaults like date format and display precision`,
          fieldname: 'systemSetup',
          action: () => openSettings(ModelNameEnum.SystemSettings),
        },
      ],
    },
    {
      label: t`Accounts`,
      items: [
        {
          key: 'Review Accounts',
          label: t`Review Accounts`,
          icon: 'review-ac',
          description: t`Review your chart of accounts, add any account or tax heads as needed`,
          action: () => routeTo('/chart-of-accounts'),
          fieldname: 'chartOfAccountsReviewed',
          documentation:
            'https://docs.frappebooks.com/setting-up/initial-entries.html#add-additional-bank-accounts',
        },
        {
          key: 'Opening Balances',
          label: t`Opening Balances`,
          icon: 'opening-ac',
          fieldname: 'openingBalanceChecked',
          description: t`Set up your opening balances before performing any accounting entries`,
          documentation:
            'https://docs.frappebooks.com/setting-up/opening-balances.html',
        },
        {
          key: 'Add Taxes',
          label: t`Add Taxes`,
          icon: 'percentage',
          fieldname: 'taxesAdded',
          description: t`Set up your tax templates for your sales or purchase transactions`,
          action: () => routeTo('/list/Tax'),
          documentation:
            'https://docs.frappebooks.com/setting-up/initial-entries.html#add-taxes',
        },
      ],
    },
    {
      label: t`Sales`,
      items: [
        {
          key: 'Add Sales Items',
          label: t`Add Items`,
          icon: 'item',
          description: t`Add products or services that you sell to your customers`,
          action: () =>
            routeTo({
              path: `/list/Item/${t`Sales Items`}`,
              query: {
                filters: JSON.stringify({ for: 'Sales' }),
              },
            }),
          fieldname: 'salesItemCreated',
          documentation:
            'https://docs.frappebooks.com/setting-up/initial-entries.html#add-sales-items',
        },
        {
          key: 'Add Customers',
          label: t`Add Student`,
          icon: 'customer',
          description: t`Add a few Students to create your first Fee Statement`,
          action: () =>
            routeTo({
              path: `/list/Party/${t`Customers`}`,
              query: {
                filters: JSON.stringify({ role: 'Customer' }),
              },
            }),
          fieldname: 'customerCreated',
          documentation:
            'https://docs.frappebooks.com/setting-up/initial-entries.html#add-customers',
        },
        {
          key: 'Create Fee Statement',
          label: t`Create Fee Statement`,
          icon: 'sales-invoice',
          description: t`Create your first Fee Statement for the created customer`,
          action: () => routeTo('/list/SalesInvoice'),
          fieldname: 'invoiceCreated',
          documentation:
            'https://docs.frappebooks.com/transactions/sales-invoices.html',
        },
      ],
    },
    {
      label: t`Purchase`,
      items: [
        {
          key: 'Add Purchase Items',
          label: t`Add Items`,
          icon: 'item',
          description: t`Add products or services that you buy from your suppliers`,
          action: () =>
            routeTo({
              path: `/list/Item/${t`Purchase Items`}`,
              query: {
                filters: JSON.stringify({ for: 'Purchases' }),
              },
            }),
          fieldname: 'purchaseItemCreated',
        },
        {
          key: 'Add Suppliers',
          label: t`Add Service Providers`,
          icon: 'supplier',
          description: t`Add a few Service Providers to create your first purchase invoice`,
          action: () =>
            routeTo({
              path: `/list/Party/${t`Suppliers`}`,
              query: { filters: JSON.stringify({ role: 'Supplier' }) },
            }),
          fieldname: 'supplierCreated',
        },
        {
          key: 'Create Purchase Invoice',
          label: t`Create Purchase Invoice`,
          icon: 'purchase-invoice',
          description: t`Create your first purchase invoice from the created supplier`,
          action: () => routeTo('/list/PurchaseInvoice'),
          fieldname: 'billCreated',
          documentation:
            'https://docs.frappebooks.com/transactions/purchase-invoices.html',
        },
      ],
    },
  ];
}
