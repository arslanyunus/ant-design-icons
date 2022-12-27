// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BatteryEmpty1BoldSvg from '@ant-design/icons-svg/lib/asn/BatteryEmpty1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BatteryEmpty1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BatteryEmpty1Bold: BatteryEmpty1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BatteryEmpty1BoldSvg}></AntdIcon>;
};

BatteryEmpty1Bold.displayName = 'BatteryEmpty1Bold';
BatteryEmpty1Bold.inheritAttrs = false;
export default BatteryEmpty1Bold;