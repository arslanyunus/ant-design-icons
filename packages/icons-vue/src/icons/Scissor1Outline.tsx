// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Scissor1OutlineSvg from '@ant-design/icons-svg/lib/asn/Scissor1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Scissor1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Scissor1Outline: Scissor1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Scissor1OutlineSvg}></AntdIcon>;
};

Scissor1Outline.displayName = 'Scissor1Outline';
Scissor1Outline.inheritAttrs = false;
export default Scissor1Outline;