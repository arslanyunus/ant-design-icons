// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextBlockLinearSvg from '@ant-design/icons-svg/lib/asn/TextBlockLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextBlockLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextBlockLinear: TextBlockLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextBlockLinearSvg}></AntdIcon>;
};

TextBlockLinear.displayName = 'TextBlockLinear';
TextBlockLinear.inheritAttrs = false;
export default TextBlockLinear;