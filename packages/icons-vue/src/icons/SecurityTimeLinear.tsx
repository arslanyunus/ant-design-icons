// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SecurityTimeLinearSvg from '@ant-design/icons-svg/lib/asn/SecurityTimeLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SecurityTimeLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SecurityTimeLinear: SecurityTimeLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SecurityTimeLinearSvg}></AntdIcon>;
};

SecurityTimeLinear.displayName = 'SecurityTimeLinear';
SecurityTimeLinear.inheritAttrs = false;
export default SecurityTimeLinear;