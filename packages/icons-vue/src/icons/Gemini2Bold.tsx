// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Gemini2BoldSvg from '@ant-design/icons-svg/lib/asn/Gemini2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Gemini2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Gemini2Bold: Gemini2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Gemini2BoldSvg}></AntdIcon>;
};

Gemini2Bold.displayName = 'Gemini2Bold';
Gemini2Bold.inheritAttrs = false;
export default Gemini2Bold;