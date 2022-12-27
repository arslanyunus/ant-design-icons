// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BatteryEmptyTwoToneSvg from '@ant-design/icons-svg/lib/asn/BatteryEmptyTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BatteryEmptyTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BatteryEmptyTwoTone: BatteryEmptyTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BatteryEmptyTwoToneSvg}></AntdIcon>;
};

BatteryEmptyTwoTone.displayName = 'BatteryEmptyTwoTone';
BatteryEmptyTwoTone.inheritAttrs = false;
export default BatteryEmptyTwoTone;