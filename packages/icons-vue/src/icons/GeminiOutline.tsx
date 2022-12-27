// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GeminiOutlineSvg from '@ant-design/icons-svg/lib/asn/GeminiOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GeminiOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GeminiOutline: GeminiOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GeminiOutlineSvg}></AntdIcon>;
};

GeminiOutline.displayName = 'GeminiOutline';
GeminiOutline.inheritAttrs = false;
export default GeminiOutline;