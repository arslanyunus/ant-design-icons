// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Profile2UserLinearSvg from '@ant-design/icons-svg/lib/asn/Profile2UserLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Profile2UserLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Profile2UserLinear: Profile2UserLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Profile2UserLinearSvg}></AntdIcon>;
};

Profile2UserLinear.displayName = 'Profile2UserLinear';
Profile2UserLinear.inheritAttrs = false;
export default Profile2UserLinear;