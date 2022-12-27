// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextItalicLinearSvg from '@ant-design/icons-svg/lib/asn/TextItalicLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextItalicLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextItalicLinear: TextItalicLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextItalicLinearSvg}></AntdIcon>;
};

TextItalicLinear.displayName = 'TextItalicLinear';
TextItalicLinear.inheritAttrs = false;
export default TextItalicLinear;