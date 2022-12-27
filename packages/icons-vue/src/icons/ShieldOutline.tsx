// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShieldOutlineSvg from '@ant-design/icons-svg/lib/asn/ShieldOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShieldOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShieldOutline: ShieldOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShieldOutlineSvg}></AntdIcon>;
};

ShieldOutline.displayName = 'ShieldOutline';
ShieldOutline.inheritAttrs = false;
export default ShieldOutline;