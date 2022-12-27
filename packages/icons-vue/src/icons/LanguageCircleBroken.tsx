// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LanguageCircleBrokenSvg from '@ant-design/icons-svg/lib/asn/LanguageCircleBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LanguageCircleBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LanguageCircleBroken: LanguageCircleBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LanguageCircleBrokenSvg}></AntdIcon>;
};

LanguageCircleBroken.displayName = 'LanguageCircleBroken';
LanguageCircleBroken.inheritAttrs = false;
export default LanguageCircleBroken;