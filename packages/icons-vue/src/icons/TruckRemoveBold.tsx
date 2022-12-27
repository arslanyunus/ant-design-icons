// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TruckRemoveBoldSvg from '@ant-design/icons-svg/lib/asn/TruckRemoveBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TruckRemoveBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TruckRemoveBold: TruckRemoveBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TruckRemoveBoldSvg}></AntdIcon>;
};

TruckRemoveBold.displayName = 'TruckRemoveBold';
TruckRemoveBold.inheritAttrs = false;
export default TruckRemoveBold;