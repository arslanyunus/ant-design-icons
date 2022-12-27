// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextUnderlineBrokenSvg from '@ant-design/icons-svg/lib/asn/TextUnderlineBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextUnderlineBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextUnderlineBroken: TextUnderlineBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextUnderlineBrokenSvg}></AntdIcon>;
};

TextUnderlineBroken.displayName = 'TextUnderlineBroken';
TextUnderlineBroken.inheritAttrs = false;
export default TextUnderlineBroken;