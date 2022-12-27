// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BatteryDisableTwoToneSvg from '@ant-design/icons-svg/lib/asn/BatteryDisableTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BatteryDisableTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BatteryDisableTwoTone: BatteryDisableTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BatteryDisableTwoToneSvg}></AntdIcon>;
};

BatteryDisableTwoTone.displayName = 'BatteryDisableTwoTone';
BatteryDisableTwoTone.inheritAttrs = false;
export default BatteryDisableTwoTone;