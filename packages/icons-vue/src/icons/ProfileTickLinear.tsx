// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ProfileTickLinearSvg from '@ant-design/icons-svg/lib/asn/ProfileTickLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ProfileTickLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ProfileTickLinear: ProfileTickLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProfileTickLinearSvg}></AntdIcon>;
};

ProfileTickLinear.displayName = 'ProfileTickLinear';
ProfileTickLinear.inheritAttrs = false;
export default ProfileTickLinear;