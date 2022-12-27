// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VolumeCrossLinearSvg from '@ant-design/icons-svg/lib/asn/VolumeCrossLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VolumeCrossLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VolumeCrossLinear: VolumeCrossLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VolumeCrossLinearSvg}></AntdIcon>;
};

VolumeCrossLinear.displayName = 'VolumeCrossLinear';
VolumeCrossLinear.inheritAttrs = false;
export default VolumeCrossLinear;