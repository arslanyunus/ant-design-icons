// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BatteryEmpty1TwoToneSvg from '@ant-design/icons-svg/lib/asn/BatteryEmpty1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BatteryEmpty1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BatteryEmpty1TwoTone: BatteryEmpty1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BatteryEmpty1TwoToneSvg}></AntdIcon>;
};

BatteryEmpty1TwoTone.displayName = 'BatteryEmpty1TwoTone';
BatteryEmpty1TwoTone.inheritAttrs = false;
export default BatteryEmpty1TwoTone;