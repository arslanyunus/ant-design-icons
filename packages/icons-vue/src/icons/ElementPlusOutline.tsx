// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ElementPlusOutlineSvg from '@ant-design/icons-svg/lib/asn/ElementPlusOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ElementPlusOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ElementPlusOutline: ElementPlusOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ElementPlusOutlineSvg}></AntdIcon>;
};

ElementPlusOutline.displayName = 'ElementPlusOutline';
ElementPlusOutline.inheritAttrs = false;
export default ElementPlusOutline;