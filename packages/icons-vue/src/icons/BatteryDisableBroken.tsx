// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BatteryDisableBrokenSvg from '@ant-design/icons-svg/lib/asn/BatteryDisableBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BatteryDisableBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BatteryDisableBroken: BatteryDisableBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BatteryDisableBrokenSvg}></AntdIcon>;
};

BatteryDisableBroken.displayName = 'BatteryDisableBroken';
BatteryDisableBroken.inheritAttrs = false;
export default BatteryDisableBroken;