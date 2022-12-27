// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Gemini2LinearSvg from '@ant-design/icons-svg/lib/asn/Gemini2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Gemini2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Gemini2Linear: Gemini2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Gemini2LinearSvg}></AntdIcon>;
};

Gemini2Linear.displayName = 'Gemini2Linear';
Gemini2Linear.inheritAttrs = false;
export default Gemini2Linear;