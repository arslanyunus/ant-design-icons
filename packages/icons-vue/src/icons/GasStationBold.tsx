// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GasStationBoldSvg from '@ant-design/icons-svg/lib/asn/GasStationBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GasStationBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GasStationBold: GasStationBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GasStationBoldSvg}></AntdIcon>;
};

GasStationBold.displayName = 'GasStationBold';
GasStationBold.inheritAttrs = false;
export default GasStationBold;