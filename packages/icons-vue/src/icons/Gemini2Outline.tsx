// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Gemini2OutlineSvg from '@ant-design/icons-svg/lib/asn/Gemini2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Gemini2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Gemini2Outline: Gemini2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Gemini2OutlineSvg}></AntdIcon>;
};

Gemini2Outline.displayName = 'Gemini2Outline';
Gemini2Outline.inheritAttrs = false;
export default Gemini2Outline;