// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TruckBrokenSvg from '@ant-design/icons-svg/lib/asn/TruckBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TruckBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TruckBroken: TruckBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TruckBrokenSvg}></AntdIcon>;
};

TruckBroken.displayName = 'TruckBroken';
TruckBroken.inheritAttrs = false;
export default TruckBroken;