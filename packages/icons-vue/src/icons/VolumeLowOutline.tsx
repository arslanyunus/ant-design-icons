// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VolumeLowOutlineSvg from '@ant-design/icons-svg/lib/asn/VolumeLowOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VolumeLowOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VolumeLowOutline: VolumeLowOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VolumeLowOutlineSvg}></AntdIcon>;
};

VolumeLowOutline.displayName = 'VolumeLowOutline';
VolumeLowOutline.inheritAttrs = false;
export default VolumeLowOutline;