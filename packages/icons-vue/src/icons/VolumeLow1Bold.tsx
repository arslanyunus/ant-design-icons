// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VolumeLow1BoldSvg from '@ant-design/icons-svg/lib/asn/VolumeLow1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VolumeLow1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VolumeLow1Bold: VolumeLow1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VolumeLow1BoldSvg}></AntdIcon>;
};

VolumeLow1Bold.displayName = 'VolumeLow1Bold';
VolumeLow1Bold.inheritAttrs = false;
export default VolumeLow1Bold;