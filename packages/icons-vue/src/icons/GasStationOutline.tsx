// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GasStationOutlineSvg from '@ant-design/icons-svg/lib/asn/GasStationOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GasStationOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GasStationOutline: GasStationOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GasStationOutlineSvg}></AntdIcon>;
};

GasStationOutline.displayName = 'GasStationOutline';
GasStationOutline.inheritAttrs = false;
export default GasStationOutline;