// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShoppingCartBrokenSvg from '@ant-design/icons-svg/lib/asn/ShoppingCartBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShoppingCartBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShoppingCartBroken: ShoppingCartBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShoppingCartBrokenSvg}></AntdIcon>;
};

ShoppingCartBroken.displayName = 'ShoppingCartBroken';
ShoppingCartBroken.inheritAttrs = false;
export default ShoppingCartBroken;