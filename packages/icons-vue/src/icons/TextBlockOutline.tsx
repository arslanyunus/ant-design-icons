// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextBlockOutlineSvg from '@ant-design/icons-svg/lib/asn/TextBlockOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextBlockOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextBlockOutline: TextBlockOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextBlockOutlineSvg}></AntdIcon>;
};

TextBlockOutline.displayName = 'TextBlockOutline';
TextBlockOutline.inheritAttrs = false;
export default TextBlockOutline;