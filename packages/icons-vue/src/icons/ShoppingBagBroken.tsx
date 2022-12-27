// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShoppingBagBrokenSvg from '@ant-design/icons-svg/lib/asn/ShoppingBagBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShoppingBagBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShoppingBagBroken: ShoppingBagBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShoppingBagBrokenSvg}></AntdIcon>;
};

ShoppingBagBroken.displayName = 'ShoppingBagBroken';
ShoppingBagBroken.inheritAttrs = false;
export default ShoppingBagBroken;