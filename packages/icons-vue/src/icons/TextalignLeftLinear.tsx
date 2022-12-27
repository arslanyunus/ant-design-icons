// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextalignLeftLinearSvg from '@ant-design/icons-svg/lib/asn/TextalignLeftLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextalignLeftLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextalignLeftLinear: TextalignLeftLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextalignLeftLinearSvg}></AntdIcon>;
};

TextalignLeftLinear.displayName = 'TextalignLeftLinear';
TextalignLeftLinear.inheritAttrs = false;
export default TextalignLeftLinear;