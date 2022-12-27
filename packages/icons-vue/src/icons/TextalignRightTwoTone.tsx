// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextalignRightTwoToneSvg from '@ant-design/icons-svg/lib/asn/TextalignRightTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextalignRightTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextalignRightTwoTone: TextalignRightTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextalignRightTwoToneSvg}></AntdIcon>;
};

TextalignRightTwoTone.displayName = 'TextalignRightTwoTone';
TextalignRightTwoTone.inheritAttrs = false;
export default TextalignRightTwoTone;