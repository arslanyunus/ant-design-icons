// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Gemini2TwoToneSvg from '@ant-design/icons-svg/lib/asn/Gemini2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Gemini2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Gemini2TwoTone: Gemini2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Gemini2TwoToneSvg}></AntdIcon>;
};

Gemini2TwoTone.displayName = 'Gemini2TwoTone';
Gemini2TwoTone.inheritAttrs = false;
export default Gemini2TwoTone;