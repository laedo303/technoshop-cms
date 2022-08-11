import { getGoods } from './serviceAPI.js';
import { tableRender } from './tableView.js';
import { modalController } from './modalController.js';
import { modal, tableGoods } from './elems.js';

export const tableController = async () => {

  modalController({
    delegation: {
      parent: tableGoods,
      target: '.table-goods-item',
      targetExclude: '.btn-delete',
    }
  })

  const goods = await getGoods();
  tableRender(goods);
};