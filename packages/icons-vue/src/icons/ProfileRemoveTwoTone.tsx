// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ProfileRemoveTwoToneSvg from '@ant-design/icons-svg/lib/asn/ProfileRemoveTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ProfileRemoveTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ProfileRemoveTwoTone: ProfileRemoveTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProfileRemoveTwoToneSvg}></AntdIcon>;
};

ProfileRemoveTwoTone.displayName = 'ProfileRemoveTwoTone';
ProfileRemoveTwoTone.inheritAttrs = false;
export default ProfileRemoveTwoTone;