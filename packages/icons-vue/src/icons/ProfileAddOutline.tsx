// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ProfileAddOutlineSvg from '@ant-design/icons-svg/lib/asn/ProfileAddOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ProfileAddOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ProfileAddOutline: ProfileAddOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProfileAddOutlineSvg}></AntdIcon>;
};

ProfileAddOutline.displayName = 'ProfileAddOutline';
ProfileAddOutline.inheritAttrs = false;
export default ProfileAddOutline;