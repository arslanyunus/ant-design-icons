// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextBoldBoldSvg from '@ant-design/icons-svg/lib/asn/TextBoldBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextBoldBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextBoldBold: TextBoldBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextBoldBoldSvg}></AntdIcon>;
};

TextBoldBold.displayName = 'TextBoldBold';
TextBoldBold.inheritAttrs = false;
export default TextBoldBold;