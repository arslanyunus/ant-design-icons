// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LanguageSquareLinearSvg from '@ant-design/icons-svg/lib/asn/LanguageSquareLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LanguageSquareLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LanguageSquareLinear: LanguageSquareLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LanguageSquareLinearSvg}></AntdIcon>;
};

LanguageSquareLinear.displayName = 'LanguageSquareLinear';
LanguageSquareLinear.inheritAttrs = false;
export default LanguageSquareLinear;