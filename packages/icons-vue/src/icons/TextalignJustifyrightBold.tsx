// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextalignJustifyrightBoldSvg from '@ant-design/icons-svg/lib/asn/TextalignJustifyrightBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextalignJustifyrightBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextalignJustifyrightBold: TextalignJustifyrightBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextalignJustifyrightBoldSvg}></AntdIcon>;
};

TextalignJustifyrightBold.displayName = 'TextalignJustifyrightBold';
TextalignJustifyrightBold.inheritAttrs = false;
export default TextalignJustifyrightBold;