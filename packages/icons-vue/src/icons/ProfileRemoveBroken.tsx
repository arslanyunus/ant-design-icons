// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ProfileRemoveBrokenSvg from '@ant-design/icons-svg/lib/asn/ProfileRemoveBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ProfileRemoveBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ProfileRemoveBroken: ProfileRemoveBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProfileRemoveBrokenSvg}></AntdIcon>;
};

ProfileRemoveBroken.displayName = 'ProfileRemoveBroken';
ProfileRemoveBroken.inheritAttrs = false;
export default ProfileRemoveBroken;