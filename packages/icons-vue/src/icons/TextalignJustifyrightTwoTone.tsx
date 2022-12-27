// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextalignJustifyrightTwoToneSvg from '@ant-design/icons-svg/lib/asn/TextalignJustifyrightTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextalignJustifyrightTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextalignJustifyrightTwoTone: TextalignJustifyrightTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextalignJustifyrightTwoToneSvg}></AntdIcon>;
};

TextalignJustifyrightTwoTone.displayName = 'TextalignJustifyrightTwoTone';
TextalignJustifyrightTwoTone.inheritAttrs = false;
export default TextalignJustifyrightTwoTone;