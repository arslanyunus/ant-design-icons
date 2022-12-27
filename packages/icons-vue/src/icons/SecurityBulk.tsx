// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SecurityBulkSvg from '@ant-design/icons-svg/lib/asn/SecurityBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SecurityBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SecurityBulk: SecurityBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SecurityBulkSvg}></AntdIcon>;
};

SecurityBulk.displayName = 'SecurityBulk';
SecurityBulk.inheritAttrs = false;
export default SecurityBulk;