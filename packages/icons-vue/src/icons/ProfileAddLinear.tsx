// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ProfileAddLinearSvg from '@ant-design/icons-svg/lib/asn/ProfileAddLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ProfileAddLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ProfileAddLinear: ProfileAddLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProfileAddLinearSvg}></AntdIcon>;
};

ProfileAddLinear.displayName = 'ProfileAddLinear';
ProfileAddLinear.inheritAttrs = false;
export default ProfileAddLinear;