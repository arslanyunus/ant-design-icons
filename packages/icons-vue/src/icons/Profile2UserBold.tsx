// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Profile2UserBoldSvg from '@ant-design/icons-svg/lib/asn/Profile2UserBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Profile2UserBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Profile2UserBold: Profile2UserBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Profile2UserBoldSvg}></AntdIcon>;
};

Profile2UserBold.displayName = 'Profile2UserBold';
Profile2UserBold.inheritAttrs = false;
export default Profile2UserBold;