// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LoginLinearSvg from '@ant-design/icons-svg/lib/asn/LoginLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LoginLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LoginLinear: LoginLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LoginLinearSvg}></AntdIcon>;
};

LoginLinear.displayName = 'LoginLinear';
LoginLinear.inheritAttrs = false;
export default LoginLinear;