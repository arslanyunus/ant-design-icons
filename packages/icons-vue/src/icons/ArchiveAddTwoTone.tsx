// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArchiveAddTwoToneSvg from '@ant-design/icons-svg/lib/asn/ArchiveAddTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArchiveAddTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArchiveAddTwoTone: ArchiveAddTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArchiveAddTwoToneSvg}></AntdIcon>;
};

ArchiveAddTwoTone.displayName = 'ArchiveAddTwoTone';
ArchiveAddTwoTone.inheritAttrs = false;
export default ArchiveAddTwoTone;