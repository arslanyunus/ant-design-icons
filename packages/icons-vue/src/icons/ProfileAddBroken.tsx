// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ProfileAddBrokenSvg from '@ant-design/icons-svg/lib/asn/ProfileAddBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ProfileAddBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ProfileAddBroken: ProfileAddBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProfileAddBrokenSvg}></AntdIcon>;
};

ProfileAddBroken.displayName = 'ProfileAddBroken';
ProfileAddBroken.inheritAttrs = false;
export default ProfileAddBroken;