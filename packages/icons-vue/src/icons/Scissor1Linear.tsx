// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Scissor1LinearSvg from '@ant-design/icons-svg/lib/asn/Scissor1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Scissor1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Scissor1Linear: Scissor1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Scissor1LinearSvg}></AntdIcon>;
};

Scissor1Linear.displayName = 'Scissor1Linear';
Scissor1Linear.inheritAttrs = false;
export default Scissor1Linear;