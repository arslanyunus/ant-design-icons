// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextalignJustifycenterLinearSvg from '@ant-design/icons-svg/lib/asn/TextalignJustifycenterLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextalignJustifycenterLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextalignJustifycenterLinear: TextalignJustifycenterLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextalignJustifycenterLinearSvg}></AntdIcon>;
};

TextalignJustifycenterLinear.displayName = 'TextalignJustifycenterLinear';
TextalignJustifycenterLinear.inheritAttrs = false;
export default TextalignJustifycenterLinear;