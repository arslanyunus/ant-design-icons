// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Profile2UserOutlineSvg from '@ant-design/icons-svg/lib/asn/Profile2UserOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Profile2UserOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Profile2UserOutline: Profile2UserOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Profile2UserOutlineSvg}></AntdIcon>;
};

Profile2UserOutline.displayName = 'Profile2UserOutline';
Profile2UserOutline.inheritAttrs = false;
export default Profile2UserOutline;