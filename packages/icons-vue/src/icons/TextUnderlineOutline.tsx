// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextUnderlineOutlineSvg from '@ant-design/icons-svg/lib/asn/TextUnderlineOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextUnderlineOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextUnderlineOutline: TextUnderlineOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextUnderlineOutlineSvg}></AntdIcon>;
};

TextUnderlineOutline.displayName = 'TextUnderlineOutline';
TextUnderlineOutline.inheritAttrs = false;
export default TextUnderlineOutline;