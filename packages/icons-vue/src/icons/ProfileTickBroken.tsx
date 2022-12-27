// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ProfileTickBrokenSvg from '@ant-design/icons-svg/lib/asn/ProfileTickBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ProfileTickBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ProfileTickBroken: ProfileTickBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProfileTickBrokenSvg}></AntdIcon>;
};

ProfileTickBroken.displayName = 'ProfileTickBroken';
ProfileTickBroken.inheritAttrs = false;
export default ProfileTickBroken;