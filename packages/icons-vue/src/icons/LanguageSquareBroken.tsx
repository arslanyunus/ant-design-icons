// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LanguageSquareBrokenSvg from '@ant-design/icons-svg/lib/asn/LanguageSquareBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LanguageSquareBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LanguageSquareBroken: LanguageSquareBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LanguageSquareBrokenSvg}></AntdIcon>;
};

LanguageSquareBroken.displayName = 'LanguageSquareBroken';
LanguageSquareBroken.inheritAttrs = false;
export default LanguageSquareBroken;