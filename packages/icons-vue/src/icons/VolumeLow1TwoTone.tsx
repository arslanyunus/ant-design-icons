// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VolumeLow1TwoToneSvg from '@ant-design/icons-svg/lib/asn/VolumeLow1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VolumeLow1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VolumeLow1TwoTone: VolumeLow1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VolumeLow1TwoToneSvg}></AntdIcon>;
};

VolumeLow1TwoTone.displayName = 'VolumeLow1TwoTone';
VolumeLow1TwoTone.inheritAttrs = false;
export default VolumeLow1TwoTone;