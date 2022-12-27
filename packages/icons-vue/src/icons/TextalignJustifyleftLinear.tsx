// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextalignJustifyleftLinearSvg from '@ant-design/icons-svg/lib/asn/TextalignJustifyleftLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextalignJustifyleftLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextalignJustifyleftLinear: TextalignJustifyleftLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextalignJustifyleftLinearSvg}></AntdIcon>;
};

TextalignJustifyleftLinear.displayName = 'TextalignJustifyleftLinear';
TextalignJustifyleftLinear.inheritAttrs = false;
export default TextalignJustifyleftLinear;