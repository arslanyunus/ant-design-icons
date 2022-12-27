// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BatteryEmpty1OutlineSvg from '@ant-design/icons-svg/lib/asn/BatteryEmpty1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BatteryEmpty1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BatteryEmpty1Outline: BatteryEmpty1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BatteryEmpty1OutlineSvg}></AntdIcon>;
};

BatteryEmpty1Outline.displayName = 'BatteryEmpty1Outline';
BatteryEmpty1Outline.inheritAttrs = false;
export default BatteryEmpty1Outline;