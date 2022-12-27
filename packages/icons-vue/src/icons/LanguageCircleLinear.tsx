// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LanguageCircleLinearSvg from '@ant-design/icons-svg/lib/asn/LanguageCircleLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LanguageCircleLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LanguageCircleLinear: LanguageCircleLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LanguageCircleLinearSvg}></AntdIcon>;
};

LanguageCircleLinear.displayName = 'LanguageCircleLinear';
LanguageCircleLinear.inheritAttrs = false;
export default LanguageCircleLinear;