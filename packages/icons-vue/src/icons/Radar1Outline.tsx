// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Radar1OutlineSvg from '@ant-design/icons-svg/lib/asn/Radar1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Radar1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Radar1Outline: Radar1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Radar1OutlineSvg}></AntdIcon>;
};

Radar1Outline.displayName = 'Radar1Outline';
Radar1Outline.inheritAttrs = false;
export default Radar1Outline;