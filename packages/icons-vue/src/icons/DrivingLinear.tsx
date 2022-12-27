// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DrivingLinearSvg from '@ant-design/icons-svg/lib/asn/DrivingLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DrivingLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DrivingLinear: DrivingLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DrivingLinearSvg}></AntdIcon>;
};

DrivingLinear.displayName = 'DrivingLinear';
DrivingLinear.inheritAttrs = false;
export default DrivingLinear;