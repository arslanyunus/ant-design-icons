// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Scissor1BrokenSvg from '@ant-design/icons-svg/lib/asn/Scissor1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Scissor1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Scissor1Broken: Scissor1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Scissor1BrokenSvg}></AntdIcon>;
};

Scissor1Broken.displayName = 'Scissor1Broken';
Scissor1Broken.inheritAttrs = false;
export default Scissor1Broken;