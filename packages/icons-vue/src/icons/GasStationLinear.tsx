// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GasStationLinearSvg from '@ant-design/icons-svg/lib/asn/GasStationLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GasStationLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GasStationLinear: GasStationLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GasStationLinearSvg}></AntdIcon>;
};

GasStationLinear.displayName = 'GasStationLinear';
GasStationLinear.inheritAttrs = false;
export default GasStationLinear;