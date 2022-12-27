// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Map1TwoToneSvg from '@ant-design/icons-svg/lib/asn/Map1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Map1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Map1TwoTone: Map1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Map1TwoToneSvg}></AntdIcon>;
};

Map1TwoTone.displayName = 'Map1TwoTone';
Map1TwoTone.inheritAttrs = false;
export default Map1TwoTone;