// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Profile2UserTwoToneSvg from '@ant-design/icons-svg/lib/asn/Profile2UserTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Profile2UserTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Profile2UserTwoTone: Profile2UserTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Profile2UserTwoToneSvg}></AntdIcon>;
};

Profile2UserTwoTone.displayName = 'Profile2UserTwoTone';
Profile2UserTwoTone.inheritAttrs = false;
export default Profile2UserTwoTone;