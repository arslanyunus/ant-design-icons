// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArchiveSlashOutlineSvg from '@ant-design/icons-svg/lib/asn/ArchiveSlashOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArchiveSlashOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArchiveSlashOutline: ArchiveSlashOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArchiveSlashOutlineSvg}></AntdIcon>;
};

ArchiveSlashOutline.displayName = 'ArchiveSlashOutline';
ArchiveSlashOutline.inheritAttrs = false;
export default ArchiveSlashOutline;