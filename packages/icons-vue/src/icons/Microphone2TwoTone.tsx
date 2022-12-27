// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Microphone2TwoToneSvg from '@ant-design/icons-svg/lib/asn/Microphone2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Microphone2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Microphone2TwoTone: Microphone2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Microphone2TwoToneSvg}></AntdIcon>;
};

Microphone2TwoTone.displayName = 'Microphone2TwoTone';
Microphone2TwoTone.inheritAttrs = false;
export default Microphone2TwoTone;