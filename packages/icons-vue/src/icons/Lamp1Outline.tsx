// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Lamp1OutlineSvg from '@ant-design/icons-svg/lib/asn/Lamp1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Lamp1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Lamp1Outline: Lamp1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Lamp1OutlineSvg}></AntdIcon>;
};

Lamp1Outline.displayName = 'Lamp1Outline';
Lamp1Outline.inheritAttrs = false;
export default Lamp1Outline;