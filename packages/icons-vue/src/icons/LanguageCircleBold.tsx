// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LanguageCircleBoldSvg from '@ant-design/icons-svg/lib/asn/LanguageCircleBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LanguageCircleBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LanguageCircleBold: LanguageCircleBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LanguageCircleBoldSvg}></AntdIcon>;
};

LanguageCircleBold.displayName = 'LanguageCircleBold';
LanguageCircleBold.inheritAttrs = false;
export default LanguageCircleBold;