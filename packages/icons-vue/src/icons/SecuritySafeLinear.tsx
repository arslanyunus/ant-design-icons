// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SecuritySafeLinearSvg from '@ant-design/icons-svg/lib/asn/SecuritySafeLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SecuritySafeLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SecuritySafeLinear: SecuritySafeLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SecuritySafeLinearSvg}></AntdIcon>;
};

SecuritySafeLinear.displayName = 'SecuritySafeLinear';
SecuritySafeLinear.inheritAttrs = false;
export default SecuritySafeLinear;