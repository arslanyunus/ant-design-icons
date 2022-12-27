// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TruckFastBrokenSvg from '@ant-design/icons-svg/lib/asn/TruckFastBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TruckFastBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TruckFastBroken: TruckFastBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TruckFastBrokenSvg}></AntdIcon>;
};

TruckFastBroken.displayName = 'TruckFastBroken';
TruckFastBroken.inheritAttrs = false;
export default TruckFastBroken;