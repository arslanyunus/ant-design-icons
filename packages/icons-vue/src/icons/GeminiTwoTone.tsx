// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GeminiTwoToneSvg from '@ant-design/icons-svg/lib/asn/GeminiTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GeminiTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GeminiTwoTone: GeminiTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GeminiTwoToneSvg}></AntdIcon>;
};

GeminiTwoTone.displayName = 'GeminiTwoTone';
GeminiTwoTone.inheritAttrs = false;
export default GeminiTwoTone;