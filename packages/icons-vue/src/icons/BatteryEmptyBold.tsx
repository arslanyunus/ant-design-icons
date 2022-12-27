// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BatteryEmptyBoldSvg from '@ant-design/icons-svg/lib/asn/BatteryEmptyBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BatteryEmptyBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BatteryEmptyBold: BatteryEmptyBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BatteryEmptyBoldSvg}></AntdIcon>;
};

BatteryEmptyBold.displayName = 'BatteryEmptyBold';
BatteryEmptyBold.inheritAttrs = false;
export default BatteryEmptyBold;