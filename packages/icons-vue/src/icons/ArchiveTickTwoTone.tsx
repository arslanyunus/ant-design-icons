// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArchiveTickTwoToneSvg from '@ant-design/icons-svg/lib/asn/ArchiveTickTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArchiveTickTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArchiveTickTwoTone: ArchiveTickTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArchiveTickTwoToneSvg}></AntdIcon>;
};

ArchiveTickTwoTone.displayName = 'ArchiveTickTwoTone';
ArchiveTickTwoTone.inheritAttrs = false;
export default ArchiveTickTwoTone;