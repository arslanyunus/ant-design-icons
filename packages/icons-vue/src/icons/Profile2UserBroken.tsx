// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Profile2UserBrokenSvg from '@ant-design/icons-svg/lib/asn/Profile2UserBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Profile2UserBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Profile2UserBroken: Profile2UserBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Profile2UserBrokenSvg}></AntdIcon>;
};

Profile2UserBroken.displayName = 'Profile2UserBroken';
Profile2UserBroken.inheritAttrs = false;
export default Profile2UserBroken;