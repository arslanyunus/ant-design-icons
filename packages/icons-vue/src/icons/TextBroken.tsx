// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextBrokenSvg from '@ant-design/icons-svg/lib/asn/TextBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextBroken: TextBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextBrokenSvg}></AntdIcon>;
};

TextBroken.displayName = 'TextBroken';
TextBroken.inheritAttrs = false;
export default TextBroken;