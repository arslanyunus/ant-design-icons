// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SecurityUserBulkSvg from '@ant-design/icons-svg/lib/asn/SecurityUserBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SecurityUserBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SecurityUserBulk: SecurityUserBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SecurityUserBulkSvg}></AntdIcon>;
};

SecurityUserBulk.displayName = 'SecurityUserBulk';
SecurityUserBulk.inheritAttrs = false;
export default SecurityUserBulk;