// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VolumeLow1OutlineSvg from '@ant-design/icons-svg/lib/asn/VolumeLow1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VolumeLow1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VolumeLow1Outline: VolumeLow1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VolumeLow1OutlineSvg}></AntdIcon>;
};

VolumeLow1Outline.displayName = 'VolumeLow1Outline';
VolumeLow1Outline.inheritAttrs = false;
export default VolumeLow1Outline;