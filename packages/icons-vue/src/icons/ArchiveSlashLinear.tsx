// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArchiveSlashLinearSvg from '@ant-design/icons-svg/lib/asn/ArchiveSlashLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArchiveSlashLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArchiveSlashLinear: ArchiveSlashLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArchiveSlashLinearSvg}></AntdIcon>;
};

ArchiveSlashLinear.displayName = 'ArchiveSlashLinear';
ArchiveSlashLinear.inheritAttrs = false;
export default ArchiveSlashLinear;