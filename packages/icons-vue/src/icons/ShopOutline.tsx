// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShopOutlineSvg from '@ant-design/icons-svg/lib/asn/ShopOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShopOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShopOutline: ShopOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShopOutlineSvg}></AntdIcon>;
};

ShopOutline.displayName = 'ShopOutline';
ShopOutline.inheritAttrs = false;
export default ShopOutline;