// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ProfileDeleteBoldSvg from '@ant-design/icons-svg/lib/asn/ProfileDeleteBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ProfileDeleteBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ProfileDeleteBold: ProfileDeleteBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProfileDeleteBoldSvg}></AntdIcon>;
};

ProfileDeleteBold.displayName = 'ProfileDeleteBold';
ProfileDeleteBold.inheritAttrs = false;
export default ProfileDeleteBold;