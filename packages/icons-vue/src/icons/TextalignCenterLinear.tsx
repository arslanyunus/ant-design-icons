// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextalignCenterLinearSvg from '@ant-design/icons-svg/lib/asn/TextalignCenterLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextalignCenterLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextalignCenterLinear: TextalignCenterLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextalignCenterLinearSvg}></AntdIcon>;
};

TextalignCenterLinear.displayName = 'TextalignCenterLinear';
TextalignCenterLinear.inheritAttrs = false;
export default TextalignCenterLinear;