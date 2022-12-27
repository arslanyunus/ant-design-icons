// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BatteryFullBoldSvg from '@ant-design/icons-svg/lib/asn/BatteryFullBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BatteryFullBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BatteryFullBold: BatteryFullBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BatteryFullBoldSvg}></AntdIcon>;
};

BatteryFullBold.displayName = 'BatteryFullBold';
BatteryFullBold.inheritAttrs = false;
export default BatteryFullBold;