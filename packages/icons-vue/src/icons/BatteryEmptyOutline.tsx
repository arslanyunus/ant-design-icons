// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BatteryEmptyOutlineSvg from '@ant-design/icons-svg/lib/asn/BatteryEmptyOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BatteryEmptyOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BatteryEmptyOutline: BatteryEmptyOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BatteryEmptyOutlineSvg}></AntdIcon>;
};

BatteryEmptyOutline.displayName = 'BatteryEmptyOutline';
BatteryEmptyOutline.inheritAttrs = false;
export default BatteryEmptyOutline;