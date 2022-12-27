// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Microphone2OutlineSvg from '@ant-design/icons-svg/lib/asn/Microphone2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Microphone2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Microphone2Outline: Microphone2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Microphone2OutlineSvg}></AntdIcon>;
};

Microphone2Outline.displayName = 'Microphone2Outline';
Microphone2Outline.inheritAttrs = false;
export default Microphone2Outline;