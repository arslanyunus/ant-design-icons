// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextBoldBrokenSvg from '@ant-design/icons-svg/lib/asn/TextBoldBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextBoldBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextBoldBroken: TextBoldBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextBoldBrokenSvg}></AntdIcon>;
};

TextBoldBroken.displayName = 'TextBoldBroken';
TextBoldBroken.inheritAttrs = false;
export default TextBoldBroken;