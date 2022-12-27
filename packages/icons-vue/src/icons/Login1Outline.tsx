// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Login1OutlineSvg from '@ant-design/icons-svg/lib/asn/Login1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Login1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Login1Outline: Login1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Login1OutlineSvg}></AntdIcon>;
};

Login1Outline.displayName = 'Login1Outline';
Login1Outline.inheritAttrs = false;
export default Login1Outline;