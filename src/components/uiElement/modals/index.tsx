import React, { useState } from 'react'
import Button from '@/components/shared/button'
import Modal from '@/components/shared/modal'

const NestedModal = () => {
  const [nestedOpen, setNestedOpen] = useState<boolean>(false)
  return (
    <div>
      <Button onClick={() => setNestedOpen(true)}>Nested Modal</Button>
      <Modal open={nestedOpen} onClose={() => setNestedOpen(false)}>
        <div>
          <div className="text-[22px] text-black dark:text-white">Text in nested modal</div>
          <div className="text-[16px] mt-[8px]">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</div>
        </div>
      </Modal>
    </div>
  )
}

const Modals = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className="w-full flex flex-col gap-[24px]">
      <div className="shadow-card w-full">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Basic Modal</div>
        <div className="flex flex-col w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Button onClick={() => setOpen(true)} className="w-[fit-content] block !mx-[auto]">
            Open modal
          </Button>
          <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div>
              <div className="text-[22px] text-black dark:text-white">Text in modal</div>
              <div className="text-[16px] mt-[8px]">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </div>
            </div>
          </Modal>
        </div>
      </div>
      <div className="shadow-card w-full">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Nested Modal</div>
        <div className="flex flex-col w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Button onClick={() => setOpen(true)} className="w-[fit-content] block !mx-[auto]">
            Open modal
          </Button>
          <Modal open={open} onClose={() => setOpen(false)}>
            <div>
              <div className="text-[22px] text-black dark:text-white">Text in modal</div>
              <div className="text-[16px] my-[8px]">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </div>
              <NestedModal />
            </div>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default Modals
