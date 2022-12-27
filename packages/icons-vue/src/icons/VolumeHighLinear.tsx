// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VolumeHighLinearSvg from '@ant-design/icons-svg/lib/asn/VolumeHighLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VolumeHighLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VolumeHighLinear: VolumeHighLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VolumeHighLinearSvg}></AntdIcon>;
};

VolumeHighLinear.displayName = 'VolumeHighLinear';
VolumeHighLinear.inheritAttrs = false;
export default VolumeHighLinear;