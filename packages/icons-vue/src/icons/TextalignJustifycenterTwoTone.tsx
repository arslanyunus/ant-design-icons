// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextalignJustifycenterTwoToneSvg from '@ant-design/icons-svg/lib/asn/TextalignJustifycenterTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextalignJustifycenterTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextalignJustifycenterTwoTone: TextalignJustifycenterTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextalignJustifycenterTwoToneSvg}></AntdIcon>;
};

TextalignJustifycenterTwoTone.displayName = 'TextalignJustifycenterTwoTone';
TextalignJustifycenterTwoTone.inheritAttrs = false;
export default TextalignJustifycenterTwoTone;