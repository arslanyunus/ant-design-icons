// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MapLinearSvg from '@ant-design/icons-svg/lib/asn/MapLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MapLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MapLinear: MapLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MapLinearSvg}></AntdIcon>;
};

MapLinear.displayName = 'MapLinear';
MapLinear.inheritAttrs = false;
export default MapLinear;