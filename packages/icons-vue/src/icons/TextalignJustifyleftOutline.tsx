// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextalignJustifyleftOutlineSvg from '@ant-design/icons-svg/lib/asn/TextalignJustifyleftOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextalignJustifyleftOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextalignJustifyleftOutline: TextalignJustifyleftOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextalignJustifyleftOutlineSvg}></AntdIcon>;
};

TextalignJustifyleftOutline.displayName = 'TextalignJustifyleftOutline';
TextalignJustifyleftOutline.inheritAttrs = false;
export default TextalignJustifyleftOutline;