// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LoginBulkSvg from '@ant-design/icons-svg/lib/asn/LoginBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LoginBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LoginBulk: LoginBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LoginBulkSvg}></AntdIcon>;
};

LoginBulk.displayName = 'LoginBulk';
LoginBulk.inheritAttrs = false;
export default LoginBulk;