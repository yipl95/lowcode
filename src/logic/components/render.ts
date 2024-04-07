import React from "react";
import { ComponentMap } from "./map";
import { ComponentType } from "./type";

// 根据组件数据动态渲染组件
export const renderComponents = (components: ComponentType[]): React.ReactNode => {
  return components.map((component: ComponentType) => {

    if (typeof component === 'string') return component

    if (!ComponentMap[component.name]) return null;

    if (ComponentMap[component.name]) {
      const childrenComponents = component.children || []
      if (component?.props?.text) childrenComponents.push(component.props.text)
      return React.createElement(
        // 组件名称
        ComponentMap[component.name],
        // 组件属性 attribute∂
        component.props,
        // 递归渲染子组件
        childrenComponents.length ? renderComponents(childrenComponents) : null
      )
    }
  })
}
