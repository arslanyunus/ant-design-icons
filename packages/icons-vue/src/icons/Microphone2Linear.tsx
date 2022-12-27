// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Microphone2LinearSvg from '@ant-design/icons-svg/lib/asn/Microphone2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Microphone2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Microphone2Linear: Microphone2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Microphone2LinearSvg}></AntdIcon>;
};

Microphone2Linear.displayName = 'Microphone2Linear';
Microphone2Linear.inheritAttrs = false;
export default Microphone2Linear;