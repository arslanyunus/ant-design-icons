// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Scissor2LinearSvg from '@ant-design/icons-svg/lib/asn/Scissor2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Scissor2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Scissor2Linear: Scissor2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Scissor2LinearSvg}></AntdIcon>;
};

Scissor2Linear.displayName = 'Scissor2Linear';
Scissor2Linear.inheritAttrs = false;
export default Scissor2Linear;