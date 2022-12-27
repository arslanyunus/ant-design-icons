// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LoginBrokenSvg from '@ant-design/icons-svg/lib/asn/LoginBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LoginBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LoginBroken: LoginBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LoginBrokenSvg}></AntdIcon>;
};

LoginBroken.displayName = 'LoginBroken';
LoginBroken.inheritAttrs = false;
export default LoginBroken;