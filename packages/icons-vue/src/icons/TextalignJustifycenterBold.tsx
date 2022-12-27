// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextalignJustifycenterBoldSvg from '@ant-design/icons-svg/lib/asn/TextalignJustifycenterBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextalignJustifycenterBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextalignJustifycenterBold: TextalignJustifycenterBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextalignJustifycenterBoldSvg}></AntdIcon>;
};

TextalignJustifycenterBold.displayName = 'TextalignJustifycenterBold';
TextalignJustifycenterBold.inheritAttrs = false;
export default TextalignJustifycenterBold;