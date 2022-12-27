// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DrivingTwoToneSvg from '@ant-design/icons-svg/lib/asn/DrivingTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DrivingTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DrivingTwoTone: DrivingTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DrivingTwoToneSvg}></AntdIcon>;
};

DrivingTwoTone.displayName = 'DrivingTwoTone';
DrivingTwoTone.inheritAttrs = false;
export default DrivingTwoTone;