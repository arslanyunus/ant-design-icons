// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextUnderlineTwoToneSvg from '@ant-design/icons-svg/lib/asn/TextUnderlineTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextUnderlineTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextUnderlineTwoTone: TextUnderlineTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextUnderlineTwoToneSvg}></AntdIcon>;
};

TextUnderlineTwoTone.displayName = 'TextUnderlineTwoTone';
TextUnderlineTwoTone.inheritAttrs = false;
export default TextUnderlineTwoTone;