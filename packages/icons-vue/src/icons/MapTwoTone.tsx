// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MapTwoToneSvg from '@ant-design/icons-svg/lib/asn/MapTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MapTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MapTwoTone: MapTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MapTwoToneSvg}></AntdIcon>;
};

MapTwoTone.displayName = 'MapTwoTone';
MapTwoTone.inheritAttrs = false;
export default MapTwoTone;