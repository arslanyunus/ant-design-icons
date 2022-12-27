// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextBlockTwoToneSvg from '@ant-design/icons-svg/lib/asn/TextBlockTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextBlockTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextBlockTwoTone: TextBlockTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextBlockTwoToneSvg}></AntdIcon>;
};

TextBlockTwoTone.displayName = 'TextBlockTwoTone';
TextBlockTwoTone.inheritAttrs = false;
export default TextBlockTwoTone;