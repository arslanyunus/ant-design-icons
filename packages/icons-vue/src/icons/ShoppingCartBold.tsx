// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShoppingCartBoldSvg from '@ant-design/icons-svg/lib/asn/ShoppingCartBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShoppingCartBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShoppingCartBold: ShoppingCartBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShoppingCartBoldSvg}></AntdIcon>;
};

ShoppingCartBold.displayName = 'ShoppingCartBold';
ShoppingCartBold.inheritAttrs = false;
export default ShoppingCartBold;