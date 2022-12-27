// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PersonalcardBulkSvg from '@ant-design/icons-svg/lib/asn/PersonalcardBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PersonalcardBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PersonalcardBulk: PersonalcardBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PersonalcardBulkSvg}></AntdIcon>;
};

PersonalcardBulk.displayName = 'PersonalcardBulk';
PersonalcardBulk.inheritAttrs = false;
export default PersonalcardBulk;