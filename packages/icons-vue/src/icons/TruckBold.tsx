// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TruckBoldSvg from '@ant-design/icons-svg/lib/asn/TruckBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TruckBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TruckBold: TruckBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TruckBoldSvg}></AntdIcon>;
};

TruckBold.displayName = 'TruckBold';
TruckBold.inheritAttrs = false;
export default TruckBold;