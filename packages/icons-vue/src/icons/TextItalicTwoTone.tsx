// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextItalicTwoToneSvg from '@ant-design/icons-svg/lib/asn/TextItalicTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextItalicTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextItalicTwoTone: TextItalicTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextItalicTwoToneSvg}></AntdIcon>;
};

TextItalicTwoTone.displayName = 'TextItalicTwoTone';
TextItalicTwoTone.inheritAttrs = false;
export default TextItalicTwoTone;