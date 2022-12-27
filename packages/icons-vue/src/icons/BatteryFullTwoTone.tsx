// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BatteryFullTwoToneSvg from '@ant-design/icons-svg/lib/asn/BatteryFullTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BatteryFullTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BatteryFullTwoTone: BatteryFullTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BatteryFullTwoToneSvg}></AntdIcon>;
};

BatteryFullTwoTone.displayName = 'BatteryFullTwoTone';
BatteryFullTwoTone.inheritAttrs = false;
export default BatteryFullTwoTone;