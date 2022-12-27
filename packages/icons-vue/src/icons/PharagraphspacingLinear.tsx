// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PharagraphspacingLinearSvg from '@ant-design/icons-svg/lib/asn/PharagraphspacingLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PharagraphspacingLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PharagraphspacingLinear: PharagraphspacingLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PharagraphspacingLinearSvg}></AntdIcon>;
};

PharagraphspacingLinear.displayName = 'PharagraphspacingLinear';
PharagraphspacingLinear.inheritAttrs = false;
export default PharagraphspacingLinear;