// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BatteryDisableOutlineSvg from '@ant-design/icons-svg/lib/asn/BatteryDisableOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BatteryDisableOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BatteryDisableOutline: BatteryDisableOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BatteryDisableOutlineSvg}></AntdIcon>;
};

BatteryDisableOutline.displayName = 'BatteryDisableOutline';
BatteryDisableOutline.inheritAttrs = false;
export default BatteryDisableOutline;