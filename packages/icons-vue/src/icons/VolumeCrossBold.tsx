// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VolumeCrossBoldSvg from '@ant-design/icons-svg/lib/asn/VolumeCrossBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VolumeCrossBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VolumeCrossBold: VolumeCrossBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VolumeCrossBoldSvg}></AntdIcon>;
};

VolumeCrossBold.displayName = 'VolumeCrossBold';
VolumeCrossBold.inheritAttrs = false;
export default VolumeCrossBold;