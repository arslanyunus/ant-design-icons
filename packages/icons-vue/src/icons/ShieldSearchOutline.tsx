// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShieldSearchOutlineSvg from '@ant-design/icons-svg/lib/asn/ShieldSearchOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShieldSearchOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShieldSearchOutline: ShieldSearchOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShieldSearchOutlineSvg}></AntdIcon>;
};

ShieldSearchOutline.displayName = 'ShieldSearchOutline';
ShieldSearchOutline.inheritAttrs = false;
export default ShieldSearchOutline;