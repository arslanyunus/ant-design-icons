// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VolumeLowBrokenSvg from '@ant-design/icons-svg/lib/asn/VolumeLowBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VolumeLowBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VolumeLowBroken: VolumeLowBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VolumeLowBrokenSvg}></AntdIcon>;
};

VolumeLowBroken.displayName = 'VolumeLowBroken';
VolumeLowBroken.inheritAttrs = false;
export default VolumeLowBroken;