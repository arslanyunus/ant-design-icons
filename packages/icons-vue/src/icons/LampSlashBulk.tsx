// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LampSlashBulkSvg from '@ant-design/icons-svg/lib/asn/LampSlashBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LampSlashBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LampSlashBulk: LampSlashBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LampSlashBulkSvg}></AntdIcon>;
};

LampSlashBulk.displayName = 'LampSlashBulk';
LampSlashBulk.inheritAttrs = false;
export default LampSlashBulk;