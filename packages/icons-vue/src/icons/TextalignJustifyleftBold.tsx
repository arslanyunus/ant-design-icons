// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextalignJustifyleftBoldSvg from '@ant-design/icons-svg/lib/asn/TextalignJustifyleftBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextalignJustifyleftBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextalignJustifyleftBold: TextalignJustifyleftBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextalignJustifyleftBoldSvg}></AntdIcon>;
};

TextalignJustifyleftBold.displayName = 'TextalignJustifyleftBold';
TextalignJustifyleftBold.inheritAttrs = false;
export default TextalignJustifyleftBold;