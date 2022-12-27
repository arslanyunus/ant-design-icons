// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TruckFastBoldSvg from '@ant-design/icons-svg/lib/asn/TruckFastBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TruckFastBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TruckFastBold: TruckFastBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TruckFastBoldSvg}></AntdIcon>;
};

TruckFastBold.displayName = 'TruckFastBold';
TruckFastBold.inheritAttrs = false;
export default TruckFastBold;