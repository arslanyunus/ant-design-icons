// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FormatCircleLinearSvg from '@ant-design/icons-svg/lib/asn/FormatCircleLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FormatCircleLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FormatCircleLinear: FormatCircleLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FormatCircleLinearSvg}></AntdIcon>;
};

FormatCircleLinear.displayName = 'FormatCircleLinear';
FormatCircleLinear.inheritAttrs = false;
export default FormatCircleLinear;