// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Login1BrokenSvg from '@ant-design/icons-svg/lib/asn/Login1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Login1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Login1Broken: Login1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Login1BrokenSvg}></AntdIcon>;
};

Login1Broken.displayName = 'Login1Broken';
Login1Broken.inheritAttrs = false;
export default Login1Broken;