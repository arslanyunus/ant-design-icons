// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SecurityLinearSvg from '@ant-design/icons-svg/lib/asn/SecurityLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SecurityLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SecurityLinear: SecurityLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SecurityLinearSvg}></AntdIcon>;
};

SecurityLinear.displayName = 'SecurityLinear';
SecurityLinear.inheritAttrs = false;
export default SecurityLinear;