// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextalignJustifyrightLinearSvg from '@ant-design/icons-svg/lib/asn/TextalignJustifyrightLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextalignJustifyrightLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextalignJustifyrightLinear: TextalignJustifyrightLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextalignJustifyrightLinearSvg}></AntdIcon>;
};

TextalignJustifyrightLinear.displayName = 'TextalignJustifyrightLinear';
TextalignJustifyrightLinear.inheritAttrs = false;
export default TextalignJustifyrightLinear;