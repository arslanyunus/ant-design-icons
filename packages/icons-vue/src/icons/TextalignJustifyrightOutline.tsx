// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextalignJustifyrightOutlineSvg from '@ant-design/icons-svg/lib/asn/TextalignJustifyrightOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextalignJustifyrightOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextalignJustifyrightOutline: TextalignJustifyrightOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextalignJustifyrightOutlineSvg}></AntdIcon>;
};

TextalignJustifyrightOutline.displayName = 'TextalignJustifyrightOutline';
TextalignJustifyrightOutline.inheritAttrs = false;
export default TextalignJustifyrightOutline;