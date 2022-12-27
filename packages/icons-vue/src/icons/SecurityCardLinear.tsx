// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SecurityCardLinearSvg from '@ant-design/icons-svg/lib/asn/SecurityCardLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SecurityCardLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SecurityCardLinear: SecurityCardLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SecurityCardLinearSvg}></AntdIcon>;
};

SecurityCardLinear.displayName = 'SecurityCardLinear';
SecurityCardLinear.inheritAttrs = false;
export default SecurityCardLinear;