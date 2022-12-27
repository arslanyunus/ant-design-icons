// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShopAddOutlineSvg from '@ant-design/icons-svg/lib/asn/ShopAddOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShopAddOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShopAddOutline: ShopAddOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShopAddOutlineSvg}></AntdIcon>;
};

ShopAddOutline.displayName = 'ShopAddOutline';
ShopAddOutline.inheritAttrs = false;
export default ShopAddOutline;