// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LanguageCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/LanguageCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LanguageCircleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LanguageCircleTwoTone: LanguageCircleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LanguageCircleTwoToneSvg}></AntdIcon>;
};

LanguageCircleTwoTone.displayName = 'LanguageCircleTwoTone';
LanguageCircleTwoTone.inheritAttrs = false;
export default LanguageCircleTwoTone;