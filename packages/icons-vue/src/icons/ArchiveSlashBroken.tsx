// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArchiveSlashBrokenSvg from '@ant-design/icons-svg/lib/asn/ArchiveSlashBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArchiveSlashBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArchiveSlashBroken: ArchiveSlashBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArchiveSlashBrokenSvg}></AntdIcon>;
};

ArchiveSlashBroken.displayName = 'ArchiveSlashBroken';
ArchiveSlashBroken.inheritAttrs = false;
export default ArchiveSlashBroken;