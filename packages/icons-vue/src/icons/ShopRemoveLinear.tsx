// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShopRemoveLinearSvg from '@ant-design/icons-svg/lib/asn/ShopRemoveLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShopRemoveLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShopRemoveLinear: ShopRemoveLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShopRemoveLinearSvg}></AntdIcon>;
};

ShopRemoveLinear.displayName = 'ShopRemoveLinear';
ShopRemoveLinear.inheritAttrs = false;
export default ShopRemoveLinear;