// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Map1BoldSvg from '@ant-design/icons-svg/lib/asn/Map1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Map1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Map1Bold: Map1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Map1BoldSvg}></AntdIcon>;
};

Map1Bold.displayName = 'Map1Bold';
Map1Bold.inheritAttrs = false;
export default Map1Bold;