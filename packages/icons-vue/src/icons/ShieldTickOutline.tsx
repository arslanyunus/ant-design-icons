// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShieldTickOutlineSvg from '@ant-design/icons-svg/lib/asn/ShieldTickOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShieldTickOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShieldTickOutline: ShieldTickOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShieldTickOutlineSvg}></AntdIcon>;
};

ShieldTickOutline.displayName = 'ShieldTickOutline';
ShieldTickOutline.inheritAttrs = false;
export default ShieldTickOutline;