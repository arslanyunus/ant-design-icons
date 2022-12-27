// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DrivingOutlineSvg from '@ant-design/icons-svg/lib/asn/DrivingOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DrivingOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DrivingOutline: DrivingOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DrivingOutlineSvg}></AntdIcon>;
};

DrivingOutline.displayName = 'DrivingOutline';
DrivingOutline.inheritAttrs = false;
export default DrivingOutline;