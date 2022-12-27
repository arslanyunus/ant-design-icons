// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ProfileCircleBrokenSvg from '@ant-design/icons-svg/lib/asn/ProfileCircleBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ProfileCircleBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ProfileCircleBroken: ProfileCircleBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProfileCircleBrokenSvg}></AntdIcon>;
};

ProfileCircleBroken.displayName = 'ProfileCircleBroken';
ProfileCircleBroken.inheritAttrs = false;
export default ProfileCircleBroken;