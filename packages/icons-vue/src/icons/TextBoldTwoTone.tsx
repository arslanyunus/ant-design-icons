// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextBoldTwoToneSvg from '@ant-design/icons-svg/lib/asn/TextBoldTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextBoldTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextBoldTwoTone: TextBoldTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextBoldTwoToneSvg}></AntdIcon>;
};

TextBoldTwoTone.displayName = 'TextBoldTwoTone';
TextBoldTwoTone.inheritAttrs = false;
export default TextBoldTwoTone;