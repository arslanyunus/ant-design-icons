// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Login1BoldSvg from '@ant-design/icons-svg/lib/asn/Login1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Login1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Login1Bold: Login1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Login1BoldSvg}></AntdIcon>;
};

Login1Bold.displayName = 'Login1Bold';
Login1Bold.inheritAttrs = false;
export default Login1Bold;