// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LoginBoldSvg from '@ant-design/icons-svg/lib/asn/LoginBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LoginBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LoginBold: LoginBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LoginBoldSvg}></AntdIcon>;
};

LoginBold.displayName = 'LoginBold';
LoginBold.inheritAttrs = false;
export default LoginBold;