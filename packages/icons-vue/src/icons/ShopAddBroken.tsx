// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShopAddBrokenSvg from '@ant-design/icons-svg/lib/asn/ShopAddBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShopAddBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShopAddBroken: ShopAddBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShopAddBrokenSvg}></AntdIcon>;
};

ShopAddBroken.displayName = 'ShopAddBroken';
ShopAddBroken.inheritAttrs = false;
export default ShopAddBroken;