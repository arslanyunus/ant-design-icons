// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Scissor1TwoToneSvg from '@ant-design/icons-svg/lib/asn/Scissor1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Scissor1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Scissor1TwoTone: Scissor1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Scissor1TwoToneSvg}></AntdIcon>;
};

Scissor1TwoTone.displayName = 'Scissor1TwoTone';
Scissor1TwoTone.inheritAttrs = false;
export default Scissor1TwoTone;