// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextItalicBrokenSvg from '@ant-design/icons-svg/lib/asn/TextItalicBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextItalicBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextItalicBroken: TextItalicBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextItalicBrokenSvg}></AntdIcon>;
};

TextItalicBroken.displayName = 'TextItalicBroken';
TextItalicBroken.inheritAttrs = false;
export default TextItalicBroken;