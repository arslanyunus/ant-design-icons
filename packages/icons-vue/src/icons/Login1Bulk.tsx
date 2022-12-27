// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Login1BulkSvg from '@ant-design/icons-svg/lib/asn/Login1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Login1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Login1Bulk: Login1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Login1BulkSvg}></AntdIcon>;
};

Login1Bulk.displayName = 'Login1Bulk';
Login1Bulk.inheritAttrs = false;
export default Login1Bulk;