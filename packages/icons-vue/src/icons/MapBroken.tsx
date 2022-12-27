// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MapBrokenSvg from '@ant-design/icons-svg/lib/asn/MapBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MapBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MapBroken: MapBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MapBrokenSvg}></AntdIcon>;
};

MapBroken.displayName = 'MapBroken';
MapBroken.inheritAttrs = false;
export default MapBroken;