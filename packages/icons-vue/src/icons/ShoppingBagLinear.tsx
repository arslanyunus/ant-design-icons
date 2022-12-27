// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShoppingBagLinearSvg from '@ant-design/icons-svg/lib/asn/ShoppingBagLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShoppingBagLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShoppingBagLinear: ShoppingBagLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShoppingBagLinearSvg}></AntdIcon>;
};

ShoppingBagLinear.displayName = 'ShoppingBagLinear';
ShoppingBagLinear.inheritAttrs = false;
export default ShoppingBagLinear;