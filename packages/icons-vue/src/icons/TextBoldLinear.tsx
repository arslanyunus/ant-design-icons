// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextBoldLinearSvg from '@ant-design/icons-svg/lib/asn/TextBoldLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextBoldLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextBoldLinear: TextBoldLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextBoldLinearSvg}></AntdIcon>;
};

TextBoldLinear.displayName = 'TextBoldLinear';
TextBoldLinear.inheritAttrs = false;
export default TextBoldLinear;