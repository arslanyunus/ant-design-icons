// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextUnderlineBoldSvg from '@ant-design/icons-svg/lib/asn/TextUnderlineBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextUnderlineBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextUnderlineBold: TextUnderlineBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextUnderlineBoldSvg}></AntdIcon>;
};

TextUnderlineBold.displayName = 'TextUnderlineBold';
TextUnderlineBold.inheritAttrs = false;
export default TextUnderlineBold;