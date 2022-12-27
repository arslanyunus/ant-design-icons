// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArchiveSlashBulkSvg from '@ant-design/icons-svg/lib/asn/ArchiveSlashBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArchiveSlashBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArchiveSlashBulk: ArchiveSlashBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArchiveSlashBulkSvg}></AntdIcon>;
};

ArchiveSlashBulk.displayName = 'ArchiveSlashBulk';
ArchiveSlashBulk.inheritAttrs = false;
export default ArchiveSlashBulk;