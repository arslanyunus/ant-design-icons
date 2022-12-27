// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ProfileCircleBoldSvg from '@ant-design/icons-svg/lib/asn/ProfileCircleBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ProfileCircleBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ProfileCircleBold: ProfileCircleBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProfileCircleBoldSvg}></AntdIcon>;
};

ProfileCircleBold.displayName = 'ProfileCircleBold';
ProfileCircleBold.inheritAttrs = false;
export default ProfileCircleBold;