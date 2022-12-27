// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PersonalcardBoldSvg from '@ant-design/icons-svg/lib/asn/PersonalcardBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PersonalcardBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PersonalcardBold: PersonalcardBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PersonalcardBoldSvg}></AntdIcon>;
};

PersonalcardBold.displayName = 'PersonalcardBold';
PersonalcardBold.inheritAttrs = false;
export default PersonalcardBold;