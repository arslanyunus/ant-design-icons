// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PersonalcardBrokenSvg from '@ant-design/icons-svg/lib/asn/PersonalcardBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PersonalcardBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PersonalcardBroken: PersonalcardBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PersonalcardBrokenSvg}></AntdIcon>;
};

PersonalcardBroken.displayName = 'PersonalcardBroken';
PersonalcardBroken.inheritAttrs = false;
export default PersonalcardBroken;