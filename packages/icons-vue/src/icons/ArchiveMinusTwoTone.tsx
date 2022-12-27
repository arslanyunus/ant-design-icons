// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArchiveMinusTwoToneSvg from '@ant-design/icons-svg/lib/asn/ArchiveMinusTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArchiveMinusTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArchiveMinusTwoTone: ArchiveMinusTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArchiveMinusTwoToneSvg}></AntdIcon>;
};

ArchiveMinusTwoTone.displayName = 'ArchiveMinusTwoTone';
ArchiveMinusTwoTone.inheritAttrs = false;
export default ArchiveMinusTwoTone;