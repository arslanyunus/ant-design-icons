// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ProfileRemoveBoldSvg from '@ant-design/icons-svg/lib/asn/ProfileRemoveBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ProfileRemoveBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ProfileRemoveBold: ProfileRemoveBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProfileRemoveBoldSvg}></AntdIcon>;
};

ProfileRemoveBold.displayName = 'ProfileRemoveBold';
ProfileRemoveBold.inheritAttrs = false;
export default ProfileRemoveBold;