// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShopBrokenSvg from '@ant-design/icons-svg/lib/asn/ShopBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShopBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShopBroken: ShopBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShopBrokenSvg}></AntdIcon>;
};

ShopBroken.displayName = 'ShopBroken';
ShopBroken.inheritAttrs = false;
export default ShopBroken;