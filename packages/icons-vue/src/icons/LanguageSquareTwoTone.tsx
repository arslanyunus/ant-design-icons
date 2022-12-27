// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LanguageSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/LanguageSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LanguageSquareTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LanguageSquareTwoTone: LanguageSquareTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LanguageSquareTwoToneSvg}></AntdIcon>;
};

LanguageSquareTwoTone.displayName = 'LanguageSquareTwoTone';
LanguageSquareTwoTone.inheritAttrs = false;
export default LanguageSquareTwoTone;