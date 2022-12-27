// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShopLinearSvg from '@ant-design/icons-svg/lib/asn/ShopLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShopLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShopLinear: ShopLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShopLinearSvg}></AntdIcon>;
};

ShopLinear.displayName = 'ShopLinear';
ShopLinear.inheritAttrs = false;
export default ShopLinear;