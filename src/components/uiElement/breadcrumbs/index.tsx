import React from 'react'
import Breadcrumb from '@/components/shared/breadcrumb'
import { Icon } from '@/components/shared/icons'
import { ELEMENT_BREADCRUMB_LIST, ELEMENT_BREADCRUMB_LIST1 } from '@/constants/constant'
import useBreadCrumbs from '@/hooks/useBreadcrumbs'

const Breadcrumbs = () => {
  const breadcrumbList = useBreadCrumbs(ELEMENT_BREADCRUMB_LIST)
  const breadcrumbList1 = useBreadCrumbs(ELEMENT_BREADCRUMB_LIST1)
  return (
    <div className="w-[640px] sm:w-full flex flex-col gap-[24px]">
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Basic breadcrumb</div>
        <div className="flex w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Breadcrumb breadcrumbList={breadcrumbList} separator={'.'} />
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Breadcrumb with different seperator</div>
        <div className=" w-full flex flex-col gap-[18px] px-[16px] py-[16px]">
          <Breadcrumb breadcrumbList={breadcrumbList} separator={'.'} />
          <Breadcrumb breadcrumbList={breadcrumbList} separator={'*'} />
          <Breadcrumb breadcrumbList={breadcrumbList} separator={'>'} />
          <Breadcrumb breadcrumbList={breadcrumbList} separator={'/'} />
          <Breadcrumb
            breadcrumbList={breadcrumbList}
            separator={<Icon name="IndicatorLeftArrow" className="w-[10px] h-[8px] rotate-180" />}
          />
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">
          Breadcrumb with underline on hover of link
        </div>
        <div className="flex w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Breadcrumb breadcrumbList={breadcrumbList} separator={'/'} underline="hover" />
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Breadcrumb with icon</div>
        <div className="flex w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Breadcrumb breadcrumbList={breadcrumbList1} separator={'/'} underline="hover" />
        </div>
      </div>
    </div>
  )
}

export default Breadcrumbs
