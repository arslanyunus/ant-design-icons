// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TruckTickBoldSvg from '@ant-design/icons-svg/lib/asn/TruckTickBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TruckTickBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TruckTickBold: TruckTickBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TruckTickBoldSvg}></AntdIcon>;
};

TruckTickBold.displayName = 'TruckTickBold';
TruckTickBold.inheritAttrs = false;
export default TruckTickBold;