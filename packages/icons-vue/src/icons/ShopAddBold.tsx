// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShopAddBoldSvg from '@ant-design/icons-svg/lib/asn/ShopAddBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShopAddBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShopAddBold: ShopAddBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShopAddBoldSvg}></AntdIcon>;
};

ShopAddBold.displayName = 'ShopAddBold';
ShopAddBold.inheritAttrs = false;
export default ShopAddBold;