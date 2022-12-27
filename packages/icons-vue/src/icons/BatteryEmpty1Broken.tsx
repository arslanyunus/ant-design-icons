// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BatteryEmpty1BrokenSvg from '@ant-design/icons-svg/lib/asn/BatteryEmpty1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BatteryEmpty1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BatteryEmpty1Broken: BatteryEmpty1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BatteryEmpty1BrokenSvg}></AntdIcon>;
};

BatteryEmpty1Broken.displayName = 'BatteryEmpty1Broken';
BatteryEmpty1Broken.inheritAttrs = false;
export default BatteryEmpty1Broken;