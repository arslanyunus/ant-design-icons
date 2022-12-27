// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DrivingBoldSvg from '@ant-design/icons-svg/lib/asn/DrivingBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DrivingBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DrivingBold: DrivingBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DrivingBoldSvg}></AntdIcon>;
};

DrivingBold.displayName = 'DrivingBold';
DrivingBold.inheritAttrs = false;
export default DrivingBold;