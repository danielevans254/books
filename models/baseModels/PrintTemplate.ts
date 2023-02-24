import { Doc } from 'fyo/model/doc';
import { SchemaMap } from 'schemas/types';
import { ListsMap, ListViewSettings, ReadOnlyMap } from 'fyo/model/types';
import { ModelNameEnum } from 'models/types';

export class PrintTemplate extends Doc {
  name?: string;
  type?: string;
  template?: string;
  isCustom?: boolean;

  override get canDelete(): boolean {
    if (this.isCustom === false) {
      return false;
    }

    return super.canDelete;
  }

  static getListViewSettings(): ListViewSettings {
    return {
      formRoute: ({ name }) => `/template-builder/${name}`,
      columns: ['name', 'type', 'isCustom'],
    };
  }

  readOnly: ReadOnlyMap = {
    name: () => !!this.isCustom,
    type: () => !!this.isCustom,
    template: () => !!this.isCustom,
  };

  static lists: ListsMap = {
    type(doc?: Doc) {
      let enableInventory: boolean = false;
      let schemaMap: SchemaMap = {};
      if (doc) {
        enableInventory = !!doc.fyo.singles.AccountingSettings?.enableInventory;
        schemaMap = doc.fyo.schemaMap;
      }

      const models = [
        ModelNameEnum.SalesInvoice,
        ModelNameEnum.PurchaseInvoice,
        ModelNameEnum.Payment,
      ];

      if (enableInventory) {
        models.push(
          ModelNameEnum.Shipment,
          ModelNameEnum.PurchaseReceipt,
          ModelNameEnum.StockMovement
        );
      }

      return models.map((value) => ({
        value,
        label: schemaMap[value]?.label ?? value,
      }));
    },
  };
}