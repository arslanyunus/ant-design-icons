// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextalignRightLinearSvg from '@ant-design/icons-svg/lib/asn/TextalignRightLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextalignRightLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextalignRightLinear: TextalignRightLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextalignRightLinearSvg}></AntdIcon>;
};

TextalignRightLinear.displayName = 'TextalignRightLinear';
TextalignRightLinear.inheritAttrs = false;
export default TextalignRightLinear;