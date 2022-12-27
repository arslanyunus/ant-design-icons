// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PersonalcardLinearSvg from '@ant-design/icons-svg/lib/asn/PersonalcardLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PersonalcardLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PersonalcardLinear: PersonalcardLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PersonalcardLinearSvg}></AntdIcon>;
};

PersonalcardLinear.displayName = 'PersonalcardLinear';
PersonalcardLinear.inheritAttrs = false;
export default PersonalcardLinear;