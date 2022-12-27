// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextItalicOutlineSvg from '@ant-design/icons-svg/lib/asn/TextItalicOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextItalicOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextItalicOutline: TextItalicOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextItalicOutlineSvg}></AntdIcon>;
};

TextItalicOutline.displayName = 'TextItalicOutline';
TextItalicOutline.inheritAttrs = false;
export default TextItalicOutline;