// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShopRemoveBrokenSvg from '@ant-design/icons-svg/lib/asn/ShopRemoveBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShopRemoveBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShopRemoveBroken: ShopRemoveBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShopRemoveBrokenSvg}></AntdIcon>;
};

ShopRemoveBroken.displayName = 'ShopRemoveBroken';
ShopRemoveBroken.inheritAttrs = false;
export default ShopRemoveBroken;