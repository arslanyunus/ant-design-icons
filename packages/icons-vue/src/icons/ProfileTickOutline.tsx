// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ProfileTickOutlineSvg from '@ant-design/icons-svg/lib/asn/ProfileTickOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ProfileTickOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ProfileTickOutline: ProfileTickOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProfileTickOutlineSvg}></AntdIcon>;
};

ProfileTickOutline.displayName = 'ProfileTickOutline';
ProfileTickOutline.inheritAttrs = false;
export default ProfileTickOutline;