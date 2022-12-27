// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShopRemoveBoldSvg from '@ant-design/icons-svg/lib/asn/ShopRemoveBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShopRemoveBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShopRemoveBold: ShopRemoveBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShopRemoveBoldSvg}></AntdIcon>;
};

ShopRemoveBold.displayName = 'ShopRemoveBold';
ShopRemoveBold.inheritAttrs = false;
export default ShopRemoveBold;