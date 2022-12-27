// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArchiveSlashTwoToneSvg from '@ant-design/icons-svg/lib/asn/ArchiveSlashTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArchiveSlashTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArchiveSlashTwoTone: ArchiveSlashTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArchiveSlashTwoToneSvg}></AntdIcon>;
};

ArchiveSlashTwoTone.displayName = 'ArchiveSlashTwoTone';
ArchiveSlashTwoTone.inheritAttrs = false;
export default ArchiveSlashTwoTone;