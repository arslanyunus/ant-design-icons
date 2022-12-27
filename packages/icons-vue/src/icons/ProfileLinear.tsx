// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ProfileLinearSvg from '@ant-design/icons-svg/lib/asn/ProfileLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ProfileLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ProfileLinear: ProfileLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProfileLinearSvg}></AntdIcon>;
};

ProfileLinear.displayName = 'ProfileLinear';
ProfileLinear.inheritAttrs = false;
export default ProfileLinear;