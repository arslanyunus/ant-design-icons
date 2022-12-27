// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ProfileCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/ProfileCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ProfileCircleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ProfileCircleTwoTone: ProfileCircleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProfileCircleTwoToneSvg}></AntdIcon>;
};

ProfileCircleTwoTone.displayName = 'ProfileCircleTwoTone';
ProfileCircleTwoTone.inheritAttrs = false;
export default ProfileCircleTwoTone;