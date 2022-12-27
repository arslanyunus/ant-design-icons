// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Profile2UserBulkSvg from '@ant-design/icons-svg/lib/asn/Profile2UserBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Profile2UserBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Profile2UserBulk: Profile2UserBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Profile2UserBulkSvg}></AntdIcon>;
};

Profile2UserBulk.displayName = 'Profile2UserBulk';
Profile2UserBulk.inheritAttrs = false;
export default Profile2UserBulk;