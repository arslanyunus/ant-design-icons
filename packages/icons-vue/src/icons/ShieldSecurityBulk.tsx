// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShieldSecurityBulkSvg from '@ant-design/icons-svg/lib/asn/ShieldSecurityBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShieldSecurityBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShieldSecurityBulk: ShieldSecurityBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShieldSecurityBulkSvg}></AntdIcon>;
};

ShieldSecurityBulk.displayName = 'ShieldSecurityBulk';
ShieldSecurityBulk.inheritAttrs = false;
export default ShieldSecurityBulk;