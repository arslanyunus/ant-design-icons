// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MapBulkSvg from '@ant-design/icons-svg/lib/asn/MapBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MapBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MapBulk: MapBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MapBulkSvg}></AntdIcon>;
};

MapBulk.displayName = 'MapBulk';
MapBulk.inheritAttrs = false;
export default MapBulk;