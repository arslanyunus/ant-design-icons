// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Radar1BrokenSvg from '@ant-design/icons-svg/lib/asn/Radar1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Radar1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Radar1Broken: Radar1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Radar1BrokenSvg}></AntdIcon>;
};

Radar1Broken.displayName = 'Radar1Broken';
Radar1Broken.inheritAttrs = false;
export default Radar1Broken;