// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VolumeCrossTwoToneSvg from '@ant-design/icons-svg/lib/asn/VolumeCrossTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VolumeCrossTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VolumeCrossTwoTone: VolumeCrossTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VolumeCrossTwoToneSvg}></AntdIcon>;
};

VolumeCrossTwoTone.displayName = 'VolumeCrossTwoTone';
VolumeCrossTwoTone.inheritAttrs = false;
export default VolumeCrossTwoTone;