// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TruckTickBrokenSvg from '@ant-design/icons-svg/lib/asn/TruckTickBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TruckTickBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TruckTickBroken: TruckTickBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TruckTickBrokenSvg}></AntdIcon>;
};

TruckTickBroken.displayName = 'TruckTickBroken';
TruckTickBroken.inheritAttrs = false;
export default TruckTickBroken;