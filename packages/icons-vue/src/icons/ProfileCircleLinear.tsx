// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ProfileCircleLinearSvg from '@ant-design/icons-svg/lib/asn/ProfileCircleLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ProfileCircleLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ProfileCircleLinear: ProfileCircleLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProfileCircleLinearSvg}></AntdIcon>;
};

ProfileCircleLinear.displayName = 'ProfileCircleLinear';
ProfileCircleLinear.inheritAttrs = false;
export default ProfileCircleLinear;