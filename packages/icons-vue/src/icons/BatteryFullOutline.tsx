// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BatteryFullOutlineSvg from '@ant-design/icons-svg/lib/asn/BatteryFullOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BatteryFullOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BatteryFullOutline: BatteryFullOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BatteryFullOutlineSvg}></AntdIcon>;
};

BatteryFullOutline.displayName = 'BatteryFullOutline';
BatteryFullOutline.inheritAttrs = false;
export default BatteryFullOutline;