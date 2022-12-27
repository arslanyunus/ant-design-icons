// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ProfileDeleteOutlineSvg from '@ant-design/icons-svg/lib/asn/ProfileDeleteOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ProfileDeleteOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ProfileDeleteOutline: ProfileDeleteOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProfileDeleteOutlineSvg}></AntdIcon>;
};

ProfileDeleteOutline.displayName = 'ProfileDeleteOutline';
ProfileDeleteOutline.inheritAttrs = false;
export default ProfileDeleteOutline;