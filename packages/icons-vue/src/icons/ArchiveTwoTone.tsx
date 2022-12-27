// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArchiveTwoToneSvg from '@ant-design/icons-svg/lib/asn/ArchiveTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArchiveTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArchiveTwoTone: ArchiveTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArchiveTwoToneSvg}></AntdIcon>;
};

ArchiveTwoTone.displayName = 'ArchiveTwoTone';
ArchiveTwoTone.inheritAttrs = false;
export default ArchiveTwoTone;