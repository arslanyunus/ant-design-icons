// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Radar1LinearSvg from '@ant-design/icons-svg/lib/asn/Radar1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Radar1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Radar1Linear: Radar1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Radar1LinearSvg}></AntdIcon>;
};

Radar1Linear.displayName = 'Radar1Linear';
Radar1Linear.inheritAttrs = false;
export default Radar1Linear;