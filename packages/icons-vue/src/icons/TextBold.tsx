// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextBoldSvg from '@ant-design/icons-svg/lib/asn/TextBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextBold: TextBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextBoldSvg}></AntdIcon>;
};

TextBold.displayName = 'TextBold';
TextBold.inheritAttrs = false;
export default TextBold;