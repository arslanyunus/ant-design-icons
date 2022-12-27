// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LoginTwoToneSvg from '@ant-design/icons-svg/lib/asn/LoginTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LoginTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LoginTwoTone: LoginTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LoginTwoToneSvg}></AntdIcon>;
};

LoginTwoTone.displayName = 'LoginTwoTone';
LoginTwoTone.inheritAttrs = false;
export default LoginTwoTone;