// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VolumeCrossBrokenSvg from '@ant-design/icons-svg/lib/asn/VolumeCrossBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VolumeCrossBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VolumeCrossBroken: VolumeCrossBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VolumeCrossBrokenSvg}></AntdIcon>;
};

VolumeCrossBroken.displayName = 'VolumeCrossBroken';
VolumeCrossBroken.inheritAttrs = false;
export default VolumeCrossBroken;