// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Microphone2BoldSvg from '@ant-design/icons-svg/lib/asn/Microphone2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Microphone2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Microphone2Bold: Microphone2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Microphone2BoldSvg}></AntdIcon>;
};

Microphone2Bold.displayName = 'Microphone2Bold';
Microphone2Bold.inheritAttrs = false;
export default Microphone2Bold;