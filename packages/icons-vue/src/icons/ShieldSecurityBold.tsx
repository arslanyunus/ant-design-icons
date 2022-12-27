// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShieldSecurityBoldSvg from '@ant-design/icons-svg/lib/asn/ShieldSecurityBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShieldSecurityBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShieldSecurityBold: ShieldSecurityBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShieldSecurityBoldSvg}></AntdIcon>;
};

ShieldSecurityBold.displayName = 'ShieldSecurityBold';
ShieldSecurityBold.inheritAttrs = false;
export default ShieldSecurityBold;