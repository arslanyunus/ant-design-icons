// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SecurityUserLinearSvg from '@ant-design/icons-svg/lib/asn/SecurityUserLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SecurityUserLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SecurityUserLinear: SecurityUserLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SecurityUserLinearSvg}></AntdIcon>;
};

SecurityUserLinear.displayName = 'SecurityUserLinear';
SecurityUserLinear.inheritAttrs = false;
export default SecurityUserLinear;