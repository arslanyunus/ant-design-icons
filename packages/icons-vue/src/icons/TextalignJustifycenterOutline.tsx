// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextalignJustifycenterOutlineSvg from '@ant-design/icons-svg/lib/asn/TextalignJustifycenterOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextalignJustifycenterOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextalignJustifycenterOutline: TextalignJustifycenterOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextalignJustifycenterOutlineSvg}></AntdIcon>;
};

TextalignJustifycenterOutline.displayName = 'TextalignJustifycenterOutline';
TextalignJustifycenterOutline.inheritAttrs = false;
export default TextalignJustifycenterOutline;