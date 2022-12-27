// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Map1OutlineSvg from '@ant-design/icons-svg/lib/asn/Map1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Map1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Map1Outline: Map1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Map1OutlineSvg}></AntdIcon>;
};

Map1Outline.displayName = 'Map1Outline';
Map1Outline.inheritAttrs = false;
export default Map1Outline;