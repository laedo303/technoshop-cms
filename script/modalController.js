import { form, modalTitle } from './elems.js';
import { hidePreview } from './previewController.js';

const openModal = (modal, classOpen) => {
  modal.classList.add(classOpen);
};

export const closeModal = (modal, classOpen) => {
  modal.classList.remove(classOpen);
  form.reset();
  hidePreview();
};

export const modalController = ({btn, delegation}) => {
  if (btn) {
    btn.addEventListener('click', () => {
      modalTitle.textContent = 'Добавить новый товар';
      openModal();
    });
  }

  if (delegation) {
    delegation.parent.addEventListener('click', ({target}) => {
      const goodsRow = target.closest(delegation.target);
      const targetExclude = target.closest(delegation.targetExclude);

      if (goodsRow && !targetExclude) {
        openModal(goodsRow.dataset.id)
      }
    })
  }

  // modal.addEventListener('click', ({target}) => {
  //   if(target === modal || target.classList.contains('btn-close')) {
  //     closeModal()
  //   }
  // })
};