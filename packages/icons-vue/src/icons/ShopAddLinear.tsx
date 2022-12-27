// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShopAddLinearSvg from '@ant-design/icons-svg/lib/asn/ShopAddLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShopAddLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShopAddLinear: ShopAddLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShopAddLinearSvg}></AntdIcon>;
};

ShopAddLinear.displayName = 'ShopAddLinear';
ShopAddLinear.inheritAttrs = false;
export default ShopAddLinear;