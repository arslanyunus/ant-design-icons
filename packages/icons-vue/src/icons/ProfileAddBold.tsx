// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ProfileAddBoldSvg from '@ant-design/icons-svg/lib/asn/ProfileAddBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ProfileAddBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ProfileAddBold: ProfileAddBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProfileAddBoldSvg}></AntdIcon>;
};

ProfileAddBold.displayName = 'ProfileAddBold';
ProfileAddBold.inheritAttrs = false;
export default ProfileAddBold;