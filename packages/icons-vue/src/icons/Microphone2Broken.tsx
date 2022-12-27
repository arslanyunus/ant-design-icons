// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Microphone2BrokenSvg from '@ant-design/icons-svg/lib/asn/Microphone2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Microphone2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Microphone2Broken: Microphone2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Microphone2BrokenSvg}></AntdIcon>;
};

Microphone2Broken.displayName = 'Microphone2Broken';
Microphone2Broken.inheritAttrs = false;
export default Microphone2Broken;