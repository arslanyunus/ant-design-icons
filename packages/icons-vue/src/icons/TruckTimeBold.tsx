// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TruckTimeBoldSvg from '@ant-design/icons-svg/lib/asn/TruckTimeBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TruckTimeBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TruckTimeBold: TruckTimeBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TruckTimeBoldSvg}></AntdIcon>;
};

TruckTimeBold.displayName = 'TruckTimeBold';
TruckTimeBold.inheritAttrs = false;
export default TruckTimeBold;