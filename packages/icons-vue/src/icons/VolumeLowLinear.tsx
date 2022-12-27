// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VolumeLowLinearSvg from '@ant-design/icons-svg/lib/asn/VolumeLowLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VolumeLowLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VolumeLowLinear: VolumeLowLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VolumeLowLinearSvg}></AntdIcon>;
};

VolumeLowLinear.displayName = 'VolumeLowLinear';
VolumeLowLinear.inheritAttrs = false;
export default VolumeLowLinear;