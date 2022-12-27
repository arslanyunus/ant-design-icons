// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Login1LinearSvg from '@ant-design/icons-svg/lib/asn/Login1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Login1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Login1Linear: Login1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Login1LinearSvg}></AntdIcon>;
};

Login1Linear.displayName = 'Login1Linear';
Login1Linear.inheritAttrs = false;
export default Login1Linear;