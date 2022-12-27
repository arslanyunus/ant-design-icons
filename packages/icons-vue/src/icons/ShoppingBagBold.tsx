// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShoppingBagBoldSvg from '@ant-design/icons-svg/lib/asn/ShoppingBagBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShoppingBagBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShoppingBagBold: ShoppingBagBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShoppingBagBoldSvg}></AntdIcon>;
};

ShoppingBagBold.displayName = 'ShoppingBagBold';
ShoppingBagBold.inheritAttrs = false;
export default ShoppingBagBold;