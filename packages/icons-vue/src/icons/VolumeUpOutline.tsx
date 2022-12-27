// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VolumeUpOutlineSvg from '@ant-design/icons-svg/lib/asn/VolumeUpOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VolumeUpOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VolumeUpOutline: VolumeUpOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VolumeUpOutlineSvg}></AntdIcon>;
};

VolumeUpOutline.displayName = 'VolumeUpOutline';
VolumeUpOutline.inheritAttrs = false;
export default VolumeUpOutline;