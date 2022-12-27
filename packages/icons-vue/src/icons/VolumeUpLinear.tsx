// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VolumeUpLinearSvg from '@ant-design/icons-svg/lib/asn/VolumeUpLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VolumeUpLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VolumeUpLinear: VolumeUpLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VolumeUpLinearSvg}></AntdIcon>;
};

VolumeUpLinear.displayName = 'VolumeUpLinear';
VolumeUpLinear.inheritAttrs = false;
export default VolumeUpLinear;