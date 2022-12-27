// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextBoldOutlineSvg from '@ant-design/icons-svg/lib/asn/TextBoldOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextBoldOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextBoldOutline: TextBoldOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextBoldOutlineSvg}></AntdIcon>;
};

TextBoldOutline.displayName = 'TextBoldOutline';
TextBoldOutline.inheritAttrs = false;
export default TextBoldOutline;