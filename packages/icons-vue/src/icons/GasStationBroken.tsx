// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GasStationBrokenSvg from '@ant-design/icons-svg/lib/asn/GasStationBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GasStationBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GasStationBroken: GasStationBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GasStationBrokenSvg}></AntdIcon>;
};

GasStationBroken.displayName = 'GasStationBroken';
GasStationBroken.inheritAttrs = false;
export default GasStationBroken;