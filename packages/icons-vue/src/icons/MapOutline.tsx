// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MapOutlineSvg from '@ant-design/icons-svg/lib/asn/MapOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MapOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MapOutline: MapOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MapOutlineSvg}></AntdIcon>;
};

MapOutline.displayName = 'MapOutline';
MapOutline.inheritAttrs = false;
export default MapOutline;