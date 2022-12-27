// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextalignLeftTwoToneSvg from '@ant-design/icons-svg/lib/asn/TextalignLeftTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextalignLeftTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextalignLeftTwoTone: TextalignLeftTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextalignLeftTwoToneSvg}></AntdIcon>;
};

TextalignLeftTwoTone.displayName = 'TextalignLeftTwoTone';
TextalignLeftTwoTone.inheritAttrs = false;
export default TextalignLeftTwoTone;