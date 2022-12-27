// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ProfileDeleteBrokenSvg from '@ant-design/icons-svg/lib/asn/ProfileDeleteBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ProfileDeleteBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ProfileDeleteBroken: ProfileDeleteBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProfileDeleteBrokenSvg}></AntdIcon>;
};

ProfileDeleteBroken.displayName = 'ProfileDeleteBroken';
ProfileDeleteBroken.inheritAttrs = false;
export default ProfileDeleteBroken;