// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShoppingBagOutlineSvg from '@ant-design/icons-svg/lib/asn/ShoppingBagOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShoppingBagOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShoppingBagOutline: ShoppingBagOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShoppingBagOutlineSvg}></AntdIcon>;
};

ShoppingBagOutline.displayName = 'ShoppingBagOutline';
ShoppingBagOutline.inheritAttrs = false;
export default ShoppingBagOutline;