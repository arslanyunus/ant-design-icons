// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LoginOutlineSvg from '@ant-design/icons-svg/lib/asn/LoginOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LoginOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LoginOutline: LoginOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LoginOutlineSvg}></AntdIcon>;
};

LoginOutline.displayName = 'LoginOutline';
LoginOutline.inheritAttrs = false;
export default LoginOutline;