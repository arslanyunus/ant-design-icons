// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextLinearSvg from '@ant-design/icons-svg/lib/asn/TextLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextLinear: TextLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextLinearSvg}></AntdIcon>;
};

TextLinear.displayName = 'TextLinear';
TextLinear.inheritAttrs = false;
export default TextLinear;