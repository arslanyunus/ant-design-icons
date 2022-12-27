// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SecuritySafeBulkSvg from '@ant-design/icons-svg/lib/asn/SecuritySafeBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SecuritySafeBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SecuritySafeBulk: SecuritySafeBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SecuritySafeBulkSvg}></AntdIcon>;
};

SecuritySafeBulk.displayName = 'SecuritySafeBulk';
SecuritySafeBulk.inheritAttrs = false;
export default SecuritySafeBulk;