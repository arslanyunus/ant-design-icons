// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeartSlashBulkSvg from '@ant-design/icons-svg/lib/asn/HeartSlashBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeartSlashBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeartSlashBulk: HeartSlashBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartSlashBulkSvg}></AntdIcon>;
};

HeartSlashBulk.displayName = 'HeartSlashBulk';
HeartSlashBulk.inheritAttrs = false;
export default HeartSlashBulk;