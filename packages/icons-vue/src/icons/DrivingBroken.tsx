// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DrivingBrokenSvg from '@ant-design/icons-svg/lib/asn/DrivingBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DrivingBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DrivingBroken: DrivingBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DrivingBrokenSvg}></AntdIcon>;
};

DrivingBroken.displayName = 'DrivingBroken';
DrivingBroken.inheritAttrs = false;
export default DrivingBroken;