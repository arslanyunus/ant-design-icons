// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FlashSlashBulkSvg from '@ant-design/icons-svg/lib/asn/FlashSlashBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FlashSlashBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FlashSlashBulk: FlashSlashBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FlashSlashBulkSvg}></AntdIcon>;
};

FlashSlashBulk.displayName = 'FlashSlashBulk';
FlashSlashBulk.inheritAttrs = false;
export default FlashSlashBulk;