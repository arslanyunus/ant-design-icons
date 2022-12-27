// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VolumeLowTwoToneSvg from '@ant-design/icons-svg/lib/asn/VolumeLowTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VolumeLowTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VolumeLowTwoTone: VolumeLowTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VolumeLowTwoToneSvg}></AntdIcon>;
};

VolumeLowTwoTone.displayName = 'VolumeLowTwoTone';
VolumeLowTwoTone.inheritAttrs = false;
export default VolumeLowTwoTone;