// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BatteryEmpty1LinearSvg from '@ant-design/icons-svg/lib/asn/BatteryEmpty1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BatteryEmpty1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BatteryEmpty1Linear: BatteryEmpty1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BatteryEmpty1LinearSvg}></AntdIcon>;
};

BatteryEmpty1Linear.displayName = 'BatteryEmpty1Linear';
BatteryEmpty1Linear.inheritAttrs = false;
export default BatteryEmpty1Linear;