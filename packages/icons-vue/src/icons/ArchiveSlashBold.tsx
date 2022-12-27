// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArchiveSlashBoldSvg from '@ant-design/icons-svg/lib/asn/ArchiveSlashBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArchiveSlashBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArchiveSlashBold: ArchiveSlashBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArchiveSlashBoldSvg}></AntdIcon>;
};

ArchiveSlashBold.displayName = 'ArchiveSlashBold';
ArchiveSlashBold.inheritAttrs = false;
export default ArchiveSlashBold;