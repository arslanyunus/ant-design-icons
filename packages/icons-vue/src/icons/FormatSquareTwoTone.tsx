// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FormatSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/FormatSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FormatSquareTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FormatSquareTwoTone: FormatSquareTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FormatSquareTwoToneSvg}></AntdIcon>;
};

FormatSquareTwoTone.displayName = 'FormatSquareTwoTone';
FormatSquareTwoTone.inheritAttrs = false;
export default FormatSquareTwoTone;