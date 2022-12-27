// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextItalicBoldSvg from '@ant-design/icons-svg/lib/asn/TextItalicBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextItalicBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextItalicBold: TextItalicBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextItalicBoldSvg}></AntdIcon>;
};

TextItalicBold.displayName = 'TextItalicBold';
TextItalicBold.inheritAttrs = false;
export default TextItalicBold;