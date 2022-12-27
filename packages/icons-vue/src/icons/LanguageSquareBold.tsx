// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LanguageSquareBoldSvg from '@ant-design/icons-svg/lib/asn/LanguageSquareBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LanguageSquareBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LanguageSquareBold: LanguageSquareBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LanguageSquareBoldSvg}></AntdIcon>;
};

LanguageSquareBold.displayName = 'LanguageSquareBold';
LanguageSquareBold.inheritAttrs = false;
export default LanguageSquareBold;