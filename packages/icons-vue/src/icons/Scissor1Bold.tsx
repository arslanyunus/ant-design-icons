// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Scissor1BoldSvg from '@ant-design/icons-svg/lib/asn/Scissor1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Scissor1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Scissor1Bold: Scissor1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Scissor1BoldSvg}></AntdIcon>;
};

Scissor1Bold.displayName = 'Scissor1Bold';
Scissor1Bold.inheritAttrs = false;
export default Scissor1Bold;