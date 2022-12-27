// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Map1LinearSvg from '@ant-design/icons-svg/lib/asn/Map1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Map1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Map1Linear: Map1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Map1LinearSvg}></AntdIcon>;
};

Map1Linear.displayName = 'Map1Linear';
Map1Linear.inheritAttrs = false;
export default Map1Linear;