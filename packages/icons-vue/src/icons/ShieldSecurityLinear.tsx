// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShieldSecurityLinearSvg from '@ant-design/icons-svg/lib/asn/ShieldSecurityLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShieldSecurityLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShieldSecurityLinear: ShieldSecurityLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShieldSecurityLinearSvg}></AntdIcon>;
};

ShieldSecurityLinear.displayName = 'ShieldSecurityLinear';
ShieldSecurityLinear.inheritAttrs = false;
export default ShieldSecurityLinear;