import React from "react";
import { Space, Collapse } from 'antd'
import type { CollapseProps } from 'antd';
import { renderComponents } from '@/logic/components/render'
import { componentsMenu } from '@/logic/components/config/menu'

const Components: React.FC = () => {

  const getItems = () => {
    const items: CollapseProps['items'] = [];

    componentsMenu.forEach((item, index) => {
      console.log("🚀 ~ componentsMenu.forEach ~ item?.list:", item?.list)
      items.push({
        key: index,
        label: item.name,
        children: <Space size={[4, 16]} wrap>{renderComponents(item?.list || [])}</Space>
      })
    })

    return items
  };

  return (
    <div>
      {
        <Collapse defaultActiveKey={[0]} ghost items={getItems()} />
      }
    </div>
  )
}

export default Components;
