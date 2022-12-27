// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VolumeHighOutlineSvg from '@ant-design/icons-svg/lib/asn/VolumeHighOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VolumeHighOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VolumeHighOutline: VolumeHighOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VolumeHighOutlineSvg}></AntdIcon>;
};

VolumeHighOutline.displayName = 'VolumeHighOutline';
VolumeHighOutline.inheritAttrs = false;
export default VolumeHighOutline;