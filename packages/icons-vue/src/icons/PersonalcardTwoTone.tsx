// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PersonalcardTwoToneSvg from '@ant-design/icons-svg/lib/asn/PersonalcardTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PersonalcardTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PersonalcardTwoTone: PersonalcardTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PersonalcardTwoToneSvg}></AntdIcon>;
};

PersonalcardTwoTone.displayName = 'PersonalcardTwoTone';
PersonalcardTwoTone.inheritAttrs = false;
export default PersonalcardTwoTone;