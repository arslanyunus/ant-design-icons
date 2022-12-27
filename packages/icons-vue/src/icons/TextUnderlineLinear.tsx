// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextUnderlineLinearSvg from '@ant-design/icons-svg/lib/asn/TextUnderlineLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextUnderlineLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextUnderlineLinear: TextUnderlineLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextUnderlineLinearSvg}></AntdIcon>;
};

TextUnderlineLinear.displayName = 'TextUnderlineLinear';
TextUnderlineLinear.inheritAttrs = false;
export default TextUnderlineLinear;