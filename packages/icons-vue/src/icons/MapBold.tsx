// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MapBoldSvg from '@ant-design/icons-svg/lib/asn/MapBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MapBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MapBold: MapBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MapBoldSvg}></AntdIcon>;
};

MapBold.displayName = 'MapBold';
MapBold.inheritAttrs = false;
export default MapBold;