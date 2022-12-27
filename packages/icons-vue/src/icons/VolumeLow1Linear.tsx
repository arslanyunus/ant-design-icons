// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VolumeLow1LinearSvg from '@ant-design/icons-svg/lib/asn/VolumeLow1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VolumeLow1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VolumeLow1Linear: VolumeLow1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VolumeLow1LinearSvg}></AntdIcon>;
};

VolumeLow1Linear.displayName = 'VolumeLow1Linear';
VolumeLow1Linear.inheritAttrs = false;
export default VolumeLow1Linear;