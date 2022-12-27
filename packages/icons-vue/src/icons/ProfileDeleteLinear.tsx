// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ProfileDeleteLinearSvg from '@ant-design/icons-svg/lib/asn/ProfileDeleteLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ProfileDeleteLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ProfileDeleteLinear: ProfileDeleteLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProfileDeleteLinearSvg}></AntdIcon>;
};

ProfileDeleteLinear.displayName = 'ProfileDeleteLinear';
ProfileDeleteLinear.inheritAttrs = false;
export default ProfileDeleteLinear;