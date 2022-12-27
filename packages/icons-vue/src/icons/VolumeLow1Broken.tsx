// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VolumeLow1BrokenSvg from '@ant-design/icons-svg/lib/asn/VolumeLow1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VolumeLow1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VolumeLow1Broken: VolumeLow1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VolumeLow1BrokenSvg}></AntdIcon>;
};

VolumeLow1Broken.displayName = 'VolumeLow1Broken';
VolumeLow1Broken.inheritAttrs = false;
export default VolumeLow1Broken;