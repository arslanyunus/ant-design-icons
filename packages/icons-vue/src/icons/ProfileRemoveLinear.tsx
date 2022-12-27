// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ProfileRemoveLinearSvg from '@ant-design/icons-svg/lib/asn/ProfileRemoveLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ProfileRemoveLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ProfileRemoveLinear: ProfileRemoveLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProfileRemoveLinearSvg}></AntdIcon>;
};

ProfileRemoveLinear.displayName = 'ProfileRemoveLinear';
ProfileRemoveLinear.inheritAttrs = false;
export default ProfileRemoveLinear;