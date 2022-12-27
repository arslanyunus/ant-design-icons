// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextalignCenterTwoToneSvg from '@ant-design/icons-svg/lib/asn/TextalignCenterTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextalignCenterTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextalignCenterTwoTone: TextalignCenterTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextalignCenterTwoToneSvg}></AntdIcon>;
};

TextalignCenterTwoTone.displayName = 'TextalignCenterTwoTone';
TextalignCenterTwoTone.inheritAttrs = false;
export default TextalignCenterTwoTone;