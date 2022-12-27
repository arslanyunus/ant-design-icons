// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ProfileTickBoldSvg from '@ant-design/icons-svg/lib/asn/ProfileTickBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ProfileTickBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ProfileTickBold: ProfileTickBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProfileTickBoldSvg}></AntdIcon>;
};

ProfileTickBold.displayName = 'ProfileTickBold';
ProfileTickBold.inheritAttrs = false;
export default ProfileTickBold;