// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShopRemoveOutlineSvg from '@ant-design/icons-svg/lib/asn/ShopRemoveOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShopRemoveOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShopRemoveOutline: ShopRemoveOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShopRemoveOutlineSvg}></AntdIcon>;
};

ShopRemoveOutline.displayName = 'ShopRemoveOutline';
ShopRemoveOutline.inheritAttrs = false;
export default ShopRemoveOutline;