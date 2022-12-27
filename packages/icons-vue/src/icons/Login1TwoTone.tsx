// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Login1TwoToneSvg from '@ant-design/icons-svg/lib/asn/Login1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Login1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Login1TwoTone: Login1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Login1TwoToneSvg}></AntdIcon>;
};

Login1TwoTone.displayName = 'Login1TwoTone';
Login1TwoTone.inheritAttrs = false;
export default Login1TwoTone;