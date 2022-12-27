// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShopBoldSvg from '@ant-design/icons-svg/lib/asn/ShopBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShopBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShopBold: ShopBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShopBoldSvg}></AntdIcon>;
};

ShopBold.displayName = 'ShopBold';
ShopBold.inheritAttrs = false;
export default ShopBold;