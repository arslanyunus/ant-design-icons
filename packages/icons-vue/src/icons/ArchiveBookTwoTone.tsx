// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArchiveBookTwoToneSvg from '@ant-design/icons-svg/lib/asn/ArchiveBookTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArchiveBookTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArchiveBookTwoTone: ArchiveBookTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArchiveBookTwoToneSvg}></AntdIcon>;
};

ArchiveBookTwoTone.displayName = 'ArchiveBookTwoTone';
ArchiveBookTwoTone.inheritAttrs = false;
export default ArchiveBookTwoTone;